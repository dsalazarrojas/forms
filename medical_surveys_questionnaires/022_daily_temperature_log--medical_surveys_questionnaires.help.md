# Daily Temperature Log - Help Guide
## Purpose
The Daily Temperature Log is a form designed to record a patient's temperature readings, along with other relevant details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in all required and optional fields as necessary.
2. Start by selecting the **Temperature Units** for the reading (Celsius or Fahrenheit).
3. Choose the **Staff Member** who recorded the temperature (this can be multiple staff members if applicable).
4. Enter the **Patient ID** for the patient being recorded.
5. Enter the **Patient Name** of the patient.
6. Select the **Patient DOB** (date of birth) for the patient.
7. Record the actual **Temperature Read** for the patient.
8. Provide any additional **Notes** regarding the temperature reading or patient's condition.
9. If necessary, select the **Medical Specialty** involved in the recording (e.g., doctor, nurse, etc.).
10. Select the **Staff ID** of the staff member(s) who recorded the temperature reading.

## Field-by-Field Explanation

* **Body Temperature** (`Body Temperature`, `number`, required: false): Enter the patient's body temperature reading.
* **Recorded At** (`Recorded At`, `date`, required: false): Enter the date and time of the temperature reading.
* **Temperature Units** (`Temperature Units`, `select_one`, required: false): Select the unit of measurement for the temperature reading (Celsius or Fahrenheit).
* **Staff Member** (`Staff Member`, `select_multiple`, required: false): Choose the staff member(s) who recorded the temperature reading.
* **Patient ID** (`Patient ID`, `number`, required: false): Enter the patient's ID number.
* **Patient Name** (`Patient Name`, `text`, required: false): Enter the patient's full name.
* **Patient DOB** (`Patient DOB`, `date`, required: false): Enter the patient's date of birth.
* **Temperature Read** (`Temperature Read`, `number`, required: false): Enter the actual temperature reading of the patient.
* **Notes** (`Notes`, `note`, required: false): Provide any additional comments or notes regarding the temperature reading or patient's condition.
* **Temperature Read Unit** (`Temperature Read Unit`, `select_one`, required: false): Select the unit of measurement for the temperature reading (Celsius or Fahrenheit).
* **Medical Specialty** (`Medical Specialty`, `select_multiple`, required: false): Select the medical specialty involved in the recording (e.g., doctor, nurse, etc.).
* **Staff ID** (`Staff ID`, `select_multiple`, required: false): Select the staff ID of the staff member(s) who recorded the temperature reading.
