<thinking>
This form is used to log the daily temperatures for patients in a healthcare setting. The purpose is to track and record temperature readings for quality control, data analysis, or medical research purposes. This information can be used to monitor patient health, identify patterns, and inform medical staff of potential issues. 

Please ensure that this form is filled out accurately and consistently to maintain data integrity. It's essential to fill out this form only once per day for each patient. If the patient's condition changes, you should update their record accordingly. The logged data can be reviewed and analyzed by medical professionals for patient treatment and care decisions.

Before filling out this form, make sure to have the patient's consent to collect their data. Ensure you're using the correct patient ID and staff ID to maintain accurate tracking and prevent duplication. The form can be submitted by authorized healthcare staff members.

</thinking>

# Daily Temperature Log - Help Guide
## Purpose
The Daily Temperature Log is used to collect and record daily temperature readings for patients in a healthcare setting.

## How To Complete This Form
1. Fill out the form for each patient once a day, using the correct patient ID and staff member ID.
2. Enter the date of collection for the temperature reading.
3. Enter the patient's name as it appears in their medical records.
4. Record the temperature reading using the correct units (Celsius or Fahrenheit).
5. Choose the location where the temperature was taken.
6. Enter any additional notes about the patient's condition.
7. Select the staff member who collected the data.
## Field-by-Field Explanation
* **Date of Collection** (`date_of_collection`, date, required: false): Enter the date of the temperature collection.
* **Patient Name** (`patient_name`, text, required: false): Enter the patient's name as it appears in their medical records.
* **Temperature** (`temperature`, number, required: false): Record the temperature reading using the correct units (Celsius or Fahrenheit).
* **Location** (`location`, select_one, required: false): Choose the location where the temperature reading was taken (e.g., Nursing Station 1, 2, etc.).
* **Temperature Units** (`temperature_units`, select_one, required: false): Select the units used for the temperature reading (Celsius or Fahrenheit or Kelvin).
* **Note** (`note`, note, required: false): Enter any additional notes about the patient's condition.
* **Patient ID** (`patient_id`, number, required: false): Enter the patient's ID for accurate tracking and analysis.
* **Staff ID** (`staff_id`, number, required: false): Enter the staff member's ID who collected the data.
* **Form Submitter** (`form_submitter`, text, required: false): Enter the name of the staff member who submitted the form.

## Tips
* Use the correct patient ID and staff ID to maintain accurate tracking and prevent duplication.
* Ensure that the form is filled out once per day for each patient.
* Review and update the patient's record if their condition changes.
* Analyze the collected data for patient treatment and care decisions.
* If you're unsure about any field, please consult with a medical professional or refer to the healthcare policies and guidelines.
