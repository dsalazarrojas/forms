# medication_record_form - Help Guide
## Purpose
The purpose of this form is to record information about the medications you have taken. This includes tracking the medications you have taken, the dosages, the number of days you have taken them, and any additional notes regarding your medication intake.
## How To Complete This Form
To complete this form, follow these steps:
1. Select all the medications you have taken from the list of options.
2. Choose the dosages for each medication.
3. Enter the number of days you have taken each medication.
4. Enter any additional details or notes about your medication intake in the text field.
## Field-by-Field Explanation
* **medications_taken** (`medications_taken`, `select_multiple`, required: false): Select all the medications you have taken from the list of options.
* **dosages** (`dosages_taken`, `select_one`, required: false): Choose the dosages for each medication.
* **days** (`days_taken`, `number`, required: false): Enter the number of days you have taken each medication.
* **fill_frequency** (`fill_frequency`, `text`, required: false): Enter any additional details or notes about your medication intake.
* **started_on** (`started_on`, `date`, required: false): Not applicable.
* **completed_on** (`completed_on`, `date`, required: false): Not applicable.
* **next_fill_date** (`next_fill_date`, `date`, required: false): Enter the date for the next fill.
* **notes** (`notes`, `note`, required: false): Enter notes regarding your medication intake.
