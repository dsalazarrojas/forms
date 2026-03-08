<thinking>...</thinking>
# lice_infestations_patient_intake_form - Help Guide
## Purpose
This form is designed to collect information from patients about head and body lice infestations. It is intended to be used by healthcare professionals to gather data for diagnosis and treatment purposes.

## How To Complete This Form
To complete this form, follow the steps below:

1. Review the form questions and ensure you have all the necessary information before starting.
2. Answer each question thoroughly and accurately.
3. If you are unsure about any question, refer to your healthcare provider for guidance.

## Field-by-Field Explanation
* **Patient Info** (`patient_info`, text, required: false): This field is for entering basic patient information such as name, date of birth, etc.
* **Contact Info** (`contact_info`, text, required: false): Enter contact information such as address, phone number, etc.
* **Infestation Details** (`infestation_details`, text, required: false): Describe the details about the lice infestation, including duration and severity.
* **Head Lice Info** (`head_lice_info`, select_multiple, options: Lice Infestation, Lice Eggs, Lice Nits, required: false):
	+ Select all that apply.
* **Head Lice Treatment** (`head_lice_treatment`, select_multiple, options: Treatment 1, Treatment 2, Treatment 3, required: false):
	+ Select all that apply.
* **Body Lice Info** (`body_lice_info`, select_multiple, options: Body Lice, Head Lice, No Lice, required: false):
	+ Select all that apply.
* **Body Lice Treatment** (`body_lice_treatment`, select_multiple, options: Treatment 1, Treatment 2, Treatment 3, required: false):
	+ Select all that apply.
* **Head Lice Symptoms** (`head_lice_symptoms`, select_multiple, options: 'Yes', 'No', required: false):
	+ Select all that apply.
* **Body Lice Symptoms** (`body_lice_symptoms`, select_multiple, options: Itching, Blisters, Irritability, required: false):
	+ Select all that apply.
* **Treatment Outcome** (`treatment_outcome`, text, required: false): Describe the outcome of the treatment.
* **Patient Comments** (`patient_comments`, text, required: false): Enter any additional comments or concerns you have.
* **Doctor Comments** (`doctor_comments`, text, required: false): Enter any additional comments or recommendations from the doctor.
