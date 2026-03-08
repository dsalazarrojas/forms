# AI Song Creation Form - Help Guide
## Purpose
The AI Song Creation Form is a tool designed to help users generate a song based on their preferences. This form collects information about the user, such as contact details, song specifications, and creative preferences, to create a unique song that meets their needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information, including your name and email address.
2. Select the musical genre, mood, and tempo you prefer for your song.
3. Provide a title for your song and specify the main topic or theme.
4. If you have existing lyrics, you can provide them. Otherwise, the AI will generate lyrics based on your preferences.
5. Choose the intended use for your song, such as personal use, social media content, or commercial use.
6. Select the desired length and format of your song.
7. If necessary, specify any additional creative directions or musical references.
8. Submit the form, and the AI will generate a song tailored to your preferences.

## Field-by-Field Explanation

* **Name (2)** (`creator_name`, `text`, required): Enter your name as it appears on your contact information.
* **Email Address (3)** (`creator_email`, `email`, required): Enter your email address where your song files will be sent.
* **Song Title (5)** (`song_title`, `text`, required): Provide a title or working name for your track.
* **Musical Genre (6)** (`musical_genre`, `select_one`, required): Select the primary style for your song from the options: Pop, Rock / Indie, Jazz / Soul, Lo-fi / Chill, Hip-hop / Rap, Cinematic / Orchestral, Electronic / EDM, or Country / Folk.
* **Mood / Atmosphere (7)** (`song_mood`, `select_multiple`, required): Select up to 3 moods from the options: Happy / Uplifting, Sad / Melancholic, Energetic / Hype, Relaxing / Calm, Dark / Intense, Romantic / Sweet, or Nostalgic.
* **Vocal Type (8)** (`vocal_type`, `select_one`, required): Choose the type of vocals you prefer from the options: Male Vocals, Female Vocals, Duet (Male & Female), Group/Choir, or Instrumental Only.
* **Song Tempo (9)** (`song_tempo`, `select_one`, required): Select the tempo for your song from the options: Slow / Ballad, Moderate / Mid-tempo, or Fast / Up-tempo.
* **Main Topic / Theme (11)** (`song_theme`, `text`, required): What is the song about? (e.g., a birthday, a breakup, a new car)
* **Specific Keywords or Names to Include (12)** (`specific_keywords`, `text`, optional): Enter names, places, or phrases you want in the lyrics.
* **Do you have existing lyrics? (13)** (`lyrics_source`, `select_one`, required): Choose how you want to handle lyrics from the options: Yes - I will provide my own lyrics, No - AI should generate the lyrics for me, or Partially - I have some lines, AI should finish them.
* **Your Lyrics (if applicable) (14)** (`lyrics_content`, `text`, optional): Paste your lyrics or starting lines here.
* **Intended Use (16)** (`intended_use`, `select_one`, required): Select the intended use for your song from the options: Personal Use (Gift, Hobby), Social Media Content (YouTube, TikTok), Commercial / Advertising, Podcast / Stream Intro, or Video Game / App Soundtrack.
* **Desired Song Length (17)** (`song_length`, `select_one`, required): Select the desired length for your song from the options: Short (under 1 minute), Standard (2 to 3 minutes), or Full Length (3 to 5 minutes).
* **Deadline for Delivery (18)** (`delivery_deadline`, `date`, optional): Enter the deadline for song delivery (if applicable).
* **Preferred File Format (19)** (`delivery_format`, `select_one`, required): Select the preferred file format from the options: MP3 (High Quality), WAV (Uncompressed), or MIDI (Notes Only).
* **Additional Creative Directions (20)** (`additional_directions`, `text`, optional): Describe any specific musical references or artist styles to emulate.
