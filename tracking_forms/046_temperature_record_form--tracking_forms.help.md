# Temperature Record Form - Help Guide
## Purpose
The Temperature Record Form is used for collecting and recording temperature readings from users.

## How To Complete This Form
1. Fill in the required fields with the requested information.
2. For "Temperature Reading 1" and "Temperature Reading 2", enter the measured temperature values.
3. Select the correct "Temperature Unit" for the readings.
4. Choose your "User Temperature" reading (Low, Normal, or High).
5. Enter the "Date Recorded" in the format YYYY-MM-DD.
6. Enter the "Time Recorded" in the format HH:MM:SS.
7. If desired, add a "User Note" for additional context.
8. Select "Submitted By" from the list of available options.

## Field-by-Field Explanation
* **User Input** (`user_input`, text, not required): Enter any additional information relevant to the temperature record.
* **Temperature Reading 1** (`temperature_reading1`, text, required): Enter the measured temperature value for reading 1.
* **Temperature Reading 2** (`temperature_reading2`, text, required): Enter the measured temperature value for reading 2.
* **Date Recorded** (`date_recorded`, date, required): Enter the date the temperature was recorded in the format YYYY-MM-DD.
* **Time Recorded** (`time_recorded`, time, required): Enter the time the temperature was recorded in the format HH:MM:SS.
* **User Temperature** (`user_temperature`, select_one, required): Choose your own temperature reading (Low, Normal, or High).
* **User Note** (`user_note`, note, not required): Add any additional comments or context about the temperature record.
* **Temperature Unit** (`temperature_unit`, select_multiple, required): Choose the temperature unit for the reading (Celsius or Fahrenheit).
* **Submitted By** (`submitted_by`, select_one, required): Select who submitted the temperature record (User 1 or User 2).
