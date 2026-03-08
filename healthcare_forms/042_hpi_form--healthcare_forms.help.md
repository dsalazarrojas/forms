# hpi_form - Help Guide
## Purpose
The HPI Form is a general medical history form designed to collect information about a patient's health history, disease status, and medical treatment details.

## How To Complete This Form
To complete the HPI Form, follow these steps:

1. **Patient Disease History**: Enter the patient's disease history in the space provided.
2. **Medical Practitioner**: Enter the name of the medical practitioner who attended to the patient's last visit.
3. **Date of Last Visit**: Enter the date of the patient's last medical visit.
4. **Visit Number**: Enter the number of visits the patient has had with the medical practitioner.
5. **Medical Diagnosis**: Select 'Yes' or 'No' to indicate if the patient has a medical diagnosis.
6. **Patient Name**: Enter the patient's name.
7. **Disease History**: Select 'Yes' or 'No' to indicate the patient's disease history status.
8. **Medical History**: Enter any relevant medical history information.
9. **Disease History 2**: Select 'Yes' or 'No' (Note: This field can be ignored as it is likely a duplicate of an existing field).

## Field-by-Field Explanation

* **Patient Disease History** (`patient_disease_history_form_1`, text, required): Enter a detailed description of the patient's disease history.
* **Medical Practitioner** (`medical_practitioner`, text, required): Enter the name of the medical practitioner who attended to the patient's last visit.
* **Date of Last Visit** (`date_of_last_visit`, date, required): Enter the date of the patient's last medical visit.
* **Visit Number** (`date_of_visit_number`, number, required): Enter the number of visits the patient has had with the medical practitioner.
* **Medical Diagnosis** (`medical_diagnosis`, select_one, required): Select 'Yes' or 'No' to indicate if the patient has a medical diagnosis.
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Disease History** (`disease_history`, select_multiple, required): Select 'Yes' or 'No' to indicate the patient's disease history status.
* **Medical History** (`medical_history`, text, required): Enter any relevant medical history information.
* **Medical Practitioner 2** (`medical_practitioner_2`, text, optional): Enter the name of any additional medical practitioner involved with the patient.
* **Disease History 2** (`disease_history_2`, select_multiple, optional): Select 'Yes' or 'No' to indicate the patient's disease history status (Note: This field can be ignored as it is likely a duplicate).
