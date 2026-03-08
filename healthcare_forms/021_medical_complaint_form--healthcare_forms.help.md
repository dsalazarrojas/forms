# medical_complaint_form - Help Guide
## Purpose
The medical_complaint_form is a tool used by patients to provide information about their medical complaints to healthcare providers.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide your name as the patient.
2. Enter the date of your medical complaint.
3. If available, enter your email and phone number for further communication.
4. Describe your medical condition.
5. Identify the medical specialist you are under the care of or would like to consult.
6. List any medical history you may have.
7. If you have any allergies, select all that apply.
8. Mention any medication you are currently taking.
9. Describe any symptoms you are experiencing.
10. If applicable, describe any treatments you have undergone or are planning.
11. Provide any additional information about your complaint.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Your name as the patient.
* **Complaint Date** (`complaint_date`, date, required): Date of your medical complaint.
* **Email** (`patient_email`, text, optional): Enter your email address for further communication.
* **Phone** (`patient_phone`, text, optional): Enter your phone number for further communication.
* **Medical Condition** (`patient_medical_condition`, text, optional): Describe your current medical condition.
* **Medical Specialist** (`medical_specialist`, select_one, optional): Identify the medical specialist you are under the care of or would like to consult.
* **Medical History** (`patient_medical_history`, text, optional): Describe any relevant medical history you may have.
* **Allergies** (`patient_allergies`, select_multiple, optional): Select all allergies that apply.
* **Medication** (`patient_medication`, text, optional): Mention any medication you are currently taking.
* **Symptoms** (`patient_symptoms`, text, optional): Describe any symptoms you are experiencing.
* **Treatment** (`patient_treatment`, text, optional): Describe any treatments you have undergone or are planning.
* **Additional Info** (`patient_additional_info`, text, optional): Provide any additional information about your complaint.
