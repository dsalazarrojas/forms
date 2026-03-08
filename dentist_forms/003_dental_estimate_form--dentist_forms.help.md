# Dental Estimate Form - Help Guide
## Purpose
This form is designed to help dentists and other dental professionals estimate the cost of procedures for patients. It collects information about the patient's name, procedure, estimated cost, insurance provider, patient contact, doctor's name, doctor's title, patient email, procedure date, and procedure time.

## How To Complete This Form
1. Fill in the patient's name, which is a required field.
2. Specify the procedure being performed, which is also a required field.
3. Enter the estimated cost of the procedure.
4. Indicate whether or not the patient has an insurance provider.
5. Fill in your name as the doctor performing the procedure.
6. Enter your professional title as a doctor.
7. Enter the patient's email address, if provided.
8. Select a date for the procedure from the calendar.
9. Select a time for the procedure from the time selection options.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Fill in the patient's name as it appears on their identification.
* **Procedure** (`procedure`, text, required): Describe the dental procedure being performed, e.g., "root canal" or "filling".
* **Cost** (`cost`, number, required): Enter the estimated cost of the procedure, including any relevant fees or taxes.
* **Insurance Provider** (`insurance_provider`, select_multiple, required): Check the box if the patient has an insurance provider; otherwise, select "No".
* **Patient Contact** (`patient_contact`, text, optional): Enter the patient's contact information, if provided.
* **Doctor** (`doctor_name`, text, required): Fill in your name as the doctor performing the procedure.
* **Doctor Title** (`doctor_title`, text, required): Enter your professional title as a doctor, e.g., "D.D.S." or "D.M.D.".
* **Patient Email** (`patient_email`, email, optional): Enter the patient's email address, if provided.
* **Procedure Date** (`procedure_date`, date, required): Select a date from the calendar for the procedure.
* **Procedure Time** (`procedure_time`, time, required): Select a time for the procedure from the time selection options.
