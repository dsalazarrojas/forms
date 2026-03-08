<thinking>...</thinking>

# Sonar Finding Report Form - Help Guide

## Purpose
This form is designed to collect information from users about a sonar finding, which is typically used for monitoring purposes. The form is used to gather data on the location, frequency, direction, depth, type, and other relevant details of a sonar signal detection.

## How To Complete This Form

1.  To complete this form, simply follow the steps below.

## Field-by-Field Explanation

* **Survey Location** (`survey_location`, `text`, required: false): Enter the location of the sonar finding, e.g., "near shore", "at buoy", or specific coordinates.
* **Sonar Frequency** (`sonar_frequency`, `number`, required: false): Enter the frequency of the sonar finding in units of kHz or similar. For example, "100 kHz".
* **Sonar Direction** (`sonar_direction`, `select_one`, required: false): Select "Yes" if the sonar signal is coming from a particular direction or "No" if it is coming from a direction that is not known or is variable.
* **Sonar Depth** (`sonar_depth`, `number`, required: false): Enter the depth of the sonar finding in units of meters or similar. For example, "50 meters".
* **Sonar Type** (`sonar_type`, `select_multiple`, required: false): Select all applicable sonar types that apply to the finding, e.g., "Yes" for "Fish", "Yes" for "Vegetation".
* **Water Type** (`water_type`, `select_one`, required: false): Select the type of water where the sonar finding occurred, e.g., "Freshwater", "Saltwater".
* **Sonar Notes** (`sonar_notes`, `note`, required: false): Enter any additional notes or comments about the sonar finding.
* **File Attachment** (`file_attachment`, `text`, required: false): Attach a file or description of a file related to the sonar finding.

## Tips
- Make sure to provide accurate and specific information about the sonar finding to ensure that your data is recorded correctly.
- If unsure about a particular field, refer back to the relevant documentation or contact your team for assistance.
- Use the file attachment field to provide additional context or evidence related to the sonar finding.
