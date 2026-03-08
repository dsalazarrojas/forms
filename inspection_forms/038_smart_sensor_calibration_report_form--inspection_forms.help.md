<thinking>
- The purpose of this form is to allow users to report the calibration status of sensors in use. This form is typically used by operations teams or engineers to keep track of sensor calibration, ensuring that they are functioning correctly and accurately.
- This form should only be used for reporting the calibration status of sensors that are already in use. If you are looking for information on how to calibrate a new sensor, please refer to the calibration procedure documentation.
- The following form is only to be used for reporting the status of sensors once. If a sensor needs to be recalibrated, please fill out this form again.
</thinking>

# Smart Sensor Calibration Report Form - Help Guide
## Purpose
The Smart Sensor Calibration Report Form is used to report the calibration status of sensors in use.

## How To Complete This Form
1. **Fill out the form completely** - The form must be filled out with all required fields.
2. **Provide accurate information** - Make sure to report accurate and up-to-date information.
3. **Submit the form** - Once complete, submit the form for review and approval.

## Field-by-Field Explanation

* **Sensor Name** (`sensor_name`, text, required): Enter the name of the sensor being reported.
* **Reading Date** (`reading_date`, date, required): Enter the date and time the reading was taken.
* **Reading Value** (`reading_value`, number, required): Enter the reading value taken from the sensor.
* **Unit Of Measurement** (`unit_of_measurement`, text, required): Enter the unit of measurement for the reading value.
* **Calibration Status** (`calibration_status`, select_one, required): Choose the status of the sensor's calibration:
	+ **Active**: The sensor is calibrated and functioning correctly.
	+ **Inactive**: The sensor is not currently calibrated.
	+ **Pending**: The sensor is pending calibration.
	+ **Failed**: The sensor calibration failed.
* **Comments** (`comments`, note, required): Enter any additional comments or notes regarding the sensor's calibration status.
* **Sensor Type** (`sensor_type`, text, required): Enter the type of sensor being reported.
