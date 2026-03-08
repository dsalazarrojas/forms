<thinking>
This form is used to capture information about a patient's visit to a healthcare facility. The form includes fields for patient identification, visit details, and contact information. 

The purpose of this form is to gather relevant data about a visit, which can be used for patient care and administration. 

The form is not intended for clinical diagnoses or treatment decisions, and its data should not be used to replace medical expertise. This form is meant to provide administrative support to healthcare professionals. 

Before completing this form, ensure that you have the necessary permissions and authority to access patient information. 

</thinking>

# Nursing Visit Report Form - Help Guide
## Purpose
This form is designed to collect information about a patient's visit to a healthcare facility. The data collected will be used to support patient care and administration.

## How To Complete This Form
1. Fill in the patient's name in the "Patient Name" field.
2. Enter the date of the visit in the "Visit Date" field.
3. Enter your own name or title in the "Provider Name" field.
4. Select the type of visit from the options provided in the "Visit Type" field.
5. If medications were given to the patient, list them in the "Medications" field.
6. Enter any relevant medical notes in the "Medical Notes" field.
7. Enter the patient's phone number in the "Phone" field.
8. Enter the patient's email address in the "Email" field.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required/optional): Enter the patient's name as it appears on their identification.
* **Visit Date** (`visit_date`, date, required/optional): Enter the date of the visit using the MM/DD/YYYY format.
* **Provider Name** (`provider_name`, text, required/optional): Enter your own name or title as the provider of care.
* **Visit Type** (`visit_type`, select_one, required/optional): Select the type of visit from the options provided:
	+ Nursing Visit
	+ Medication Review
	+ Lab Test
	+ Medical Procedure
* **Medications** (`medications`, text, required/optional): List any medications given to the patient during the visit, if applicable.
* **Medical Notes** (`medical_notes`, note, required/optional): Enter any relevant medical information or notes about the visit.
* **Phone** (`phone`, text, required/optional): Enter the patient's phone number.
* **Email** (`email`, email, required/optional): Enter the patient's email address.
