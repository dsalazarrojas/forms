# Daily Fridge Temperature Log - Help Guide
## Purpose
The Daily Fridge Temperature Log form is used to record the temperature of the fridge and freezer in the facility on a daily basis.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if the fridge is at the correct temperature by selecting the "Fridge Log" option.
2. Enter the date of the log entry in the "Date" field.
3. Record the current temperature of the fridge and freezer in the "Fridge Temp" and "Freezer Temp" fields respectively.
4. Choose the unit of temperature from the "Temperature Unit" dropdown menu.
5. Select who recorded the temperature reading from the "Recorded By" dropdown menu.
6. Enter any additional notes in the "Notes" field.
7. Choose the location of the log entry from the "Location" dropdown menu.
8. Select whether or not the form was completed from the "Form Completed" dropdown menu.
9. Record the date the form was completed in the "Form Completed Date" field.
10. Enter any additional notes in the "Notes 2" field.

## Field-by-Field Explanation
* **Fridge Log** (`fridge_log`, select_multiple, optional): Check the box if the fridge is at the correct temperature.
* **Date** (`date`, date, optional): Enter the date of the log entry in the format YYYY-MM-DD.
* **Time** (`time`, time, optional): Enter the time of the log entry in the format HH:MM.
* **Fridge Temp** (`fridge_temp`, number, optional): Record the current temperature of the fridge.
* **Freezer Temp** (`freezer_temp`, number, optional): Record the current temperature of the freezer.
* **Recorded By** (`recorded_by`, select_one, optional): Select who recorded the temperature reading.
* **Notes** (`notes`, note, optional): Enter any additional notes.
* **Location** (`location`, select_one, optional): Choose the location of the log entry.
* **Form Completed** (`form_completed`, select_one, optional): Select whether or not the form was completed.
* **Temperature Unit** (`temperature_unit`, select_one, optional): Choose the unit of temperature (C, F, or K).
* **Recorded At** (`recorded_at`, date, optional): Enter the date and time of the log entry.
* **Notes 2** (`notes`, note, optional): Enter any additional notes.
* **Form Completed Date** (`form_completed_date`, date, optional): Enter the date the form was completed.
