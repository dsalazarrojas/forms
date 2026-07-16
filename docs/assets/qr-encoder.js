(function (root) {
  'use strict';

  // Compact QR Code encoder, adapted from the public-domain qrcode-generator
  // algorithm by Kazuhiko Arase. It supports byte-mode QR versions 1–10 at EC L.
  const RS_BLOCKS = [
    [[1, 26, 19]], [[1, 44, 34]], [[1, 70, 55]], [[1, 100, 80]],
    [[1, 134, 108]], [[2, 86, 68]], [[2, 98, 78]], [[2, 121, 97]],
    [[2, 146, 116]], [[2, 86, 68], [2, 87, 69]]
  ];
  const ALIGNMENT = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50]];
  const EXP = new Array(512);
  const LOG = new Array(256);
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];

  function utf8(text) {
    const encoded = unescape(encodeURIComponent(String(text)));
    return Array.prototype.map.call(encoded, ch => ch.charCodeAt(0));
  }

  function bchDigit(value) {
    let digit = 0;
    while (value) { digit++; value >>>= 1; }
    return digit;
  }

  function bchTypeInfo(data) {
    let value = data << 10;
    while (bchDigit(value) >= bchDigit(0x537)) value ^= 0x537 << (bchDigit(value) - bchDigit(0x537));
    return ((data << 10) | value) ^ 0x5412;
  }

  function bchTypeNumber(data) {
    let value = data << 12;
    while (bchDigit(value) >= bchDigit(0x1f25)) value ^= 0x1f25 << (bchDigit(value) - bchDigit(0x1f25));
    return (data << 12) | value;
  }

  function multiply(a, b) {
    return !a || !b ? 0 : EXP[LOG[a] + LOG[b]];
  }

  function generator(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i++) {
      const next = new Array(poly.length + 1).fill(0);
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= multiply(poly[j], EXP[i]);
      }
      poly = next;
    }
    return poly;
  }

  function remainder(data, degree) {
    const gen = generator(degree);
    const result = data.slice();
    for (let i = 0; i < degree; i++) result.push(0);
    for (let i = 0; i < data.length; i++) {
      const factor = result[i];
      if (factor) for (let j = 0; j < gen.length; j++) result[i + j] ^= multiply(gen[j], factor);
    }
    return result.slice(result.length - degree);
  }

  function bitsFor(bytes, capacity) {
    const bits = [0, 1, 0, 0]; // byte mode
    for (let i = 7; i >= 0; i--) bits.push((bytes.length >>> i) & 1);
    bytes.forEach(byte => { for (let i = 7; i >= 0; i--) bits.push((byte >>> i) & 1); });
    if (bits.length > capacity * 8) return null;
    for (let i = 0; i < 4 && bits.length < capacity * 8; i++) bits.push(0);
    while (bits.length % 8) bits.push(0);
    const output = [];
    for (let i = 0; i < bits.length; i += 8) output.push(bits.slice(i, i + 8).reduce((n, bit) => (n << 1) | bit, 0));
    for (let pad = 0; output.length < capacity; pad++) output.push(pad % 2 ? 0x11 : 0xec);
    return output;
  }

  function createData(version, bytes) {
    const blocks = [];
    let capacity = 0;
    RS_BLOCKS[version - 1].forEach(block => { capacity += block[0] * block[2]; });
    const data = bitsFor(bytes, capacity);
    if (!data) return null;
    let offset = 0;
    RS_BLOCKS[version - 1].forEach(block => {
      for (let n = 0; n < block[0]; n++) {
        const dc = data.slice(offset, offset + block[2]);
        offset += block[2];
        blocks.push({ data: dc, ec: remainder(dc, block[1] - block[2]) });
      }
    });
    const result = [];
    const maxData = Math.max.apply(null, blocks.map(block => block.data.length));
    const maxEc = Math.max.apply(null, blocks.map(block => block.ec.length));
    for (let i = 0; i < maxData; i++) blocks.forEach(block => { if (i < block.data.length) result.push(block.data[i]); });
    for (let i = 0; i < maxEc; i++) blocks.forEach(block => { if (i < block.ec.length) result.push(block.ec[i]); });
    return result;
  }

  function mask(mask, row, col) {
    if (mask === 0) return (row + col) % 2 === 0;
    if (mask === 1) return row % 2 === 0;
    if (mask === 2) return col % 3 === 0;
    if (mask === 3) return (row + col) % 3 === 0;
    if (mask === 4) return (Math.floor(row / 2) + Math.floor(col / 3)) % 2 === 0;
    if (mask === 5) return (row * col) % 2 + (row * col) % 3 === 0;
    if (mask === 6) return ((row * col) % 2 + (row * col) % 3) % 2 === 0;
    return ((row * col) % 3 + (row + col) % 2) % 2 === 0;
  }

  function makeMatrix(version, data, maskPattern, test) {
    const count = version * 4 + 17;
    const modules = Array.from({ length: count }, () => Array(count).fill(null));
    function finder(row, col) {
      for (let r = -1; r <= 7; r++) for (let c = -1; c <= 7; c++) {
        if (row + r < 0 || count <= row + r || col + c < 0 || count <= col + c) continue;
        modules[row + r][col + c] = r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4;
      }
    }
    finder(0, 0); finder(count - 7, 0); finder(0, count - 7);
    const centers = ALIGNMENT[version - 1];
    centers.forEach(row => centers.forEach(col => {
      if (modules[row][col] !== null) return;
      for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++) modules[row + r][col + c] = Math.abs(r) === 2 || Math.abs(c) === 2 || (!r && !c);
    }));
    for (let i = 8; i < count - 8; i++) {
      if (modules[i][6] === null) modules[i][6] = i % 2 === 0;
      if (modules[6][i] === null) modules[6][i] = i % 2 === 0;
    }
    const info = bchTypeInfo(8 | maskPattern);
    for (let i = 0; i < 15; i++) {
      const bit = !test && ((info >>> i) & 1) === 1;
      modules[i < 6 ? i : i < 8 ? i + 1 : count - 15 + i][8] = bit;
      modules[8][i < 8 ? count - i - 1 : i < 9 ? 15 - i : 15 - i - 1] = bit;
    }
    modules[count - 8][8] = !test;
    if (version >= 7) {
      const number = bchTypeNumber(version);
      for (let i = 0; i < 18; i++) {
        const bit = !test && ((number >>> i) & 1) === 1;
        modules[Math.floor(i / 3)][i % 3 + count - 11] = bit;
        modules[i % 3 + count - 11][Math.floor(i / 3)] = bit;
      }
    }
    let bitIndex = 7, byteIndex = 0, direction = -1, row = count - 1;
    for (let col = count - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      while (true) {
        for (let c = 0; c < 2; c++) if (modules[row][col - c] === null) {
          let dark = byteIndex < data.length && ((data[byteIndex] >>> bitIndex) & 1) === 1;
          if (mask(maskPattern, row, col - c)) dark = !dark;
          modules[row][col - c] = dark;
          if (--bitIndex < 0) { byteIndex++; bitIndex = 7; }
        }
        row += direction;
        if (row < 0 || count <= row) { row -= direction; direction = -direction; break; }
      }
    }
    return modules;
  }

  function lostPoint(modules) {
    const count = modules.length;
    let score = 0;
    for (let row = 0; row < count; row++) for (let col = 0; col < count; col++) {
      let same = 0, dark = modules[row][col];
      for (let r = -1; r <= 1; r++) for (let c = -1; c <= 1; c++) if (r || c) if (row + r >= 0 && row + r < count && col + c >= 0 && col + c < count && modules[row + r][col + c] === dark) same++;
      if (same > 5) score += 3 + same - 5;
    }
    for (let row = 0; row < count - 1; row++) for (let col = 0; col < count - 1; col++) {
      const sum = (modules[row][col] ? 1 : 0) + (modules[row + 1][col] ? 1 : 0) + (modules[row][col + 1] ? 1 : 0) + (modules[row + 1][col + 1] ? 1 : 0);
      if (sum === 0 || sum === 4) score += 3;
    }
    for (let row = 0; row < count; row++) for (let col = 0; col < count - 6; col++) if (modules[row][col] && !modules[row][col + 1] && modules[row][col + 2] && modules[row][col + 3] && modules[row][col + 4] && !modules[row][col + 5] && modules[row][col + 6]) score += 40;
    for (let col = 0; col < count; col++) for (let row = 0; row < count - 6; row++) if (modules[row][col] && !modules[row + 1][col] && modules[row + 2][col] && modules[row + 3][col] && modules[row + 4][col] && !modules[row + 5][col] && modules[row + 6][col]) score += 40;
    let dark = 0;
    modules.forEach(row => row.forEach(cell => { if (cell) dark++; }));
    return score + Math.abs(100 * dark / count / count - 50) / 5 * 10;
  }

  function renderSvg(text, options) {
    const bytes = utf8(text);
    let version = 0, data;
    for (let v = 1; v <= 10 && !data; v++) { data = createData(v, bytes); if (data) version = v; }
    if (!data) throw new Error('Text is too long for this QR encoder.');
    let best, bestScore = Infinity;
    for (let maskPattern = 0; maskPattern < 8; maskPattern++) {
      const candidate = makeMatrix(version, data, maskPattern, false);
      const score = lostPoint(candidate);
      if (score < bestScore) { bestScore = score; best = candidate; }
    }
    const size = Math.max(1, Number(options && options.size) || 200);
    const margin = Math.max(0, Number(options && options.margin) || 4);
    const dimension = best.length + margin * 2;
    let path = '';
    best.forEach((row, y) => row.forEach((dark, xPos) => { if (dark) path += `M${xPos + margin},${y + margin}h1v1h-1z`; }));
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${dimension} ${dimension}" shape-rendering="crispEdges" role="img" aria-label="QR code"><rect width="100%" height="100%" fill="#fff"/><path d="${path}" fill="#000"/></svg>`;
  }

  const api = { renderSvg };
  root.GICQr = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
