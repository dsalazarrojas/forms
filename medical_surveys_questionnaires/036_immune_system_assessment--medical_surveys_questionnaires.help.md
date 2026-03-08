# immune_system_assessment - Help Guide
## Purpose
The immune_system_assessment form is a tool used to collect and assess the immune system status of patients. It is used by medical professionals to gather vital information about a patient's medical history, symptoms, lab results, and other relevant health information.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully and ensure you have all necessary information before proceeding.
2. Enter the patient's medical history, including any relevant medical conditions.
3. Report any symptoms the patient is experiencing.
4. Enter the patient's lab results, including any relevant test results.
5. List any medications the patient is currently taking.
6. Indicate if the patient has received any immunizations.
7. Report any allergies the patient has.
8. Enter the patient's immune system status.
9. Enter the doctor's contact information, including name, email, and phone number.
10. Enter the patient's contact information, including name, phone number, and email.
11. Set a follow-up date and time, if applicable.
12. Enter any follow-up doctor and patient contact information, if applicable.

## Field-by-Field Explanation

* **Medical History** (`medical_history`, `text`, **required: false**): Enter a brief medical history of the patient.
* **Symptoms** (`symptoms`, `select_one`, **required: false**): Indicate if the patient is experiencing any symptoms.
* **Lab Results** (`lab_results`, `text`, **required: true**): Enter any relevant lab results, including test results and diagnoses.
* **Medications** (`medications`, `select_multiple`, **required: false**): List any medications the patient is currently taking.
* **Immunizations** (`immunizations`, `select_multiple`, **required: false**): Indicate if the patient has received any immunizations.
* **Allergies** (`allergies`, `text`, **required: false**): Report any allergies the patient has.
* **Immune System Status** (`immune_system_status`, `select_one`, **required: true**): Enter the patient's immune system status.
* **Doctor Name** (`doctor_name`, `text`, **required: true**): Enter the doctor's name.
* **Doctor Email** (`doctor_email`, `email`, **required: false**): Enter the doctor's email.
* **Doctor Phone** (`doctor_phone`, `text`, **required: false**): Enter the doctor's phone number.
* **Patient Name** (`patient_name`, `text`, **required: true**): Enter the patient's name.
* **Patient Phone** (`patient_phone`, `text`, **required: false**): Enter the patient's phone number.
* **Patient Email** (`patient_email`, `email`, **required: false**): Enter the patient's email.
* **Date of Birth** (`date_of_birth`, `date`, **required: true**): Enter the patient's date of birth.
* **Date of Visit** (`date_of_visit`, `date`, **required: true**): Enter the date of the visit.
* **Doctor Note** (`doctor_note`, `text`, **required: false**): Enter any notes or comments from the doctor.
* **Patient Note** (`patient_note`, `text`, **required: false**): Enter any notes or comments from the patient.
* **Follow-up** (`follow_up`, `date`, **required: false**): Set a follow-up date and time, if applicable.
* **Follow-up Doctor Phone** (`follow_up_doctor_phone`, `text`, **required: false**): Enter the follow-up doctor's phone number, if applicable.
* **Follow-up Doctor Email** (`follow_up_doctor_email`, `email`, **required: false**): Enter the follow-up doctor's email, if applicable.
* **Follow-up Patient Name** (`follow_up_patient_name`, `text`, **required: false**): Enter the follow-up patient's name, if applicable.
* **Follow-up Patient Phone** (`follow_up_patient_phone`, `text`, **required: false**): Enter the follow-up patient's phone number, if applicable.
* **Follow-up Patient Email** (`follow_up_patient_email`, `email`, **required: false**): Enter the follow-up patient's email, if applicable.
