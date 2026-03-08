# Vaccination Record Form - Help Guide
## Purpose
This form is used to record and document vaccination information for patients. Please fill out this form for patients who have received vaccinations.

## How To Complete This Form

To fill out this form, follow these steps:

1. Enter the patient's information, including their name or ID.
2. Select the type of vaccine administered.
3. Enter the date the vaccine was administered.
4. Enter the dosage amount of the vaccine, if applicable.
5. Select all healthcare professionals who administered the vaccine.
6. Enter the date the vaccination record is being recorded.
7. Select the healthcare professional who recorded the information.
8. Enter any additional comments about the vaccination.
9. Review and submit the form.

## Field-by-Field Explanation

* **patient_info** (`patient_info`, text, required: false): Enter the patient's name or ID.
* **vaccine_name** (`vaccine_name`, text, required: false): Select the type of vaccine administered.
* **date_administered** (`date_administered`, date, required: false): Enter the date the vaccine was administered.
* **dosage_amount** (`dosage_amount`, number, required: false): Enter the dosage amount of the vaccine, if applicable.
* **administered_by** (`administered_by`, select_multiple, required: false): Select all healthcare professionals who administered the vaccine.
* **date_recorded** (`date_recorded`, date, required: false): Enter the date the vaccination record is being recorded.
* **recorded_by** (`recorded_by`, select_one, required: false): Select the healthcare professional who recorded the information.
* **comments** (`comments`, note, required: false): Enter any additional comments about the vaccination.
* **patient_id** (`patient_id`, text, required: false): Enter the patient's ID.
* **vaccine_id** (`vaccine_id`, text, required: false): Enter the vaccine ID.

## Tips

* Be sure to fill out all required fields accurately and completely.
* Double-check dates and dosage amounts for accuracy.
* Select all applicable healthcare professionals who administered the vaccine.
* If there are any comments or concerns, enter them in the comments field.
* Review the form carefully before submitting it to ensure accuracy and completeness.
