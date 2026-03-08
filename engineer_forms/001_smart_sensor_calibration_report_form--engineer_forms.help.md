# Smart Sensor Calibration Report Form - Help Guide

## Purpose
The Smart Sensor Calibration Report Form is a document used to report on the calibration status of a smart sensor. It is used to track and record the sensor's performance, including the date of calibration, sensor type, and any remarks or comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling out the required fields:
	* Sensor Name: Enter the name of the sensor being calibrated.
	* Date of Calibration: Enter the date the sensor was calibrated.
2. Optional fields can be filled out as needed:
	* Serial Number: Enter the serial number of the sensor, if available.
	* Sensor Type: Select the type of sensor being calibrated.
	* Calibration Frequency: Record the recommended calibration frequency for the sensor.
	* Sensor Reading: Record any relevant sensor readings or data.
	* Remarks: Enter any additional comments or remarks about the sensor's performance.
3. For the output options:
	* Output File Name: Enter the desired file name for the output file.
	* Output File Path: Enter the desired file path for the output file.
	* Output File Type: Select the format of the output file (PDF, CSV, or Excel).

## Field-by-Field Explanation
### Calibration Report
* **Calibration Report** (id: 1, text, required: false): Enter a brief summary of the sensor's calibration status.

### Sensor Name
* **sensor-name** (id: 2, text, required: false): Enter the name of the sensor being calibrated.

### Serial Number
* **serial-number** (id: 3, text, required: false): Enter the serial number of the sensor, if available.

### Date of Calibration
* **date-of-calibration** (id: 4, date, required: false): Enter the date the sensor was calibrated.

### Technician Name
* **technician-name** (id: 5, text, required: false): Enter the name of the technician who performed the calibration.

### Calibration Frequency
* **calibration-frequency** (id: 6, text, required: false): Record the recommended calibration frequency for the sensor.

### Sensor Type
* **sensor-type** (id: 7, select_one, required: false): Select the type of sensor being calibrated.

### Sensor Range
* **sensor-range** (id: 8, number, required: false): Record any relevant sensor readings or data.

### Sensor Reading
* **sensor-reading** (id: 9, text, required: false): Record any relevant sensor readings or data.

### Remarks
* **remarks** (id: 10, note, required: false): Enter any additional comments or remarks about the sensor's performance.

### Output File Name
* **output-file-name** (id: 11, text, required: false): Enter the desired file name for the output file.

### Output File Path
* **output-file-path** (id: 12, text, required: false): Enter the desired file path for the output file.

### Output File Type
* **output-file-type** (id: 13, select_one, required: false): Select the format of the output file (PDF, CSV, or Excel).

### Output File Size
* **output-file-size** (id: 14, number, required: false): Record the size of the output file.

### Remarks 2
* **remarks-2** (id: 15, note, required: false): Enter any additional comments or remarks about the output file.

Note: The fields marked as "required: false" are optional and can be left blank if not applicable.
