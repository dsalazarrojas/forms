<thinking>...</thinking>

# eyecare_associates - Help Guide

## Purpose
This form is designed to collect information about a patient's eye care associates, including their medical condition, contact details, and appointment schedule. The form is intended for healthcare professionals to gather essential data for patient care and follow-up.

## How To Complete This Form

To complete this form, follow these steps:

1. Ensure you have all the required information about the patient before starting the form.
2. Enter the patient's name and date of birth.
3. Provide the patient's contact email and phone number.
4. Describe the patient's medical condition and medical history.
5. Schedule an appointment date and time, if applicable.
6. Select whether the patient has a medical provider, medical facility, and medical department associated with their care.
7. Specify any medical specialties required for their care.
8. Enter any relevant medical notes about the patient.
9. Indicate whether the patient requires follow-up, medical tests, and medications.
10. Confirm the appointment schedule and follow-up details.

## Field-by-Field Explanation

* **Patient Name** (`name`, text, **required**): Enter the patient's full name as it appears on their identification.
* **Date of Birth** (`date_of_birth`, date, **required**): Enter the patient's date of birth in the standard date format (mm/dd/yyyy).
* **Contact Email** (`contact_email`, email, optional): Enter the patient's contact email address for follow-up communication.
* **Contact Phone** (`contact_phone`, text, optional): Enter the patient's contact phone number for follow-up communication.
* **Medical Condition** (`medical_condition`, text, optional): Describe the patient's medical condition, if known.
* **Medical History** (`medical_history`, text, **required**): Describe the patient's medical history, including any relevant medical notes.
* **Appointment Date** (`appointment_date`, date, **required**): Schedule the appointment date, following the standard date format (mm/dd/yyyy).
* **Appointment Time** (`appointment_time`, time, optional): Schedule the appointment time, following the standard time format (hh:mm AM/PM).
* **Medical Provider** (`medical_provider`, text, optional): Specify the patient's medical provider's name.
* **Medical Facility** (`medical_facility`, text, optional): Specify the patient's medical facility name.
* **Medical Department** (`medical_department`, text, optional): Specify the patient's medical department (e.g., optometry, ophthalmology, etc.).
* **Medical Specialty** (`medical_specialty`, text, optional): Specify the patient's required medical specialty.
* **Medical Notes** (`medical_notes`, note, optional): Enter any relevant medical notes about the patient.
* **Follow Up** (`follow_up`, select_multiple, **required**): Indicate whether the patient requires follow-up (Yes/No).
* **Medical Tests** (`medical_tests`, select_multiple, optional): Indicate whether the patient requires medical tests (Yes/No).
* **Medications** (`medications`, select_multiple, optional): Indicate whether the patient requires medications (Yes/No).
* **Medical Procedures** (`medical_procedures`, select_multiple, optional): Indicate whether the patient requires medical procedures (Yes/No).
