# veterinary_care_monitoring_form - Help Guide
## Purpose
The veterinary care monitoring form is designed to collect essential information about a patient's veterinary care. This form should be used to gather details on patient information, vaccination history, medical history, medication list, check-up frequency, veterinarian comments, patient contact details, and other relevant information.

## How To Complete This Form
1. Review the form fields and ensure you have all necessary information and documents at hand.
2. Complete each field accurately and thoroughly, following the required fields denoted by `required: true` in the YAML.
3. Use the options provided in each field to ensure correct completion.

## Field-by-Field Explanation
* **Form Header** (`form_header`, `note`, false): This field is the header of the form, providing a general overview of the form's purpose.
* **Patient Information** (`patient_information`, `text`, false): Enter the patient's name, address, and any other relevant details.
* **Vaccination History** (`vaccination_history`, `select_multiple`, false): Select 'Yes' if the patient has had vaccinations, 'No' otherwise.
* **Medical History** (`medical_history`, `select_multiple`, false): Select 'Yes' if the patient has medical history, 'No' otherwise.
* **Medication List** (`medication_list`, `select_one`, false): Select 'Yes' if the patient is on medication, 'No' otherwise.
* **Check-Up Frequency** (`checkup_frequency`, `select_one`, false): Select the frequency of check-ups for the patient.
* **Veterinarian Comments** (`veterinarian_comments`, `text`, false): Enter any additional comments or notes from the veterinarian.
* **Patient Phone** (`patient_phone`, `text`, false): Enter the patient's phone number.
* **Patient Email** (`patient_email`, `email`, false): Enter the patient's email address.
* **Veterinary Clinic** (`veterinary_clinic`, `select_one`, false): Select 'Yes' if the patient visits a veterinary clinic, 'No' otherwise.
* **Medical Specialties** (`medical_specialties`, `select_multiple`, false): Select 'Yes' if the patient has medical specialties, 'No' otherwise.
* **Veterinary License** (`veterinary_license`, `select_one`, false): Select 'Yes' if the patient has veterinary license, 'No' otherwise.
* **Vet Name** (`veterinarian_name`, `text`, false): Enter the veterinarian's name.
* **Form Footer** (`form_footer`, `note`, false): This field is the footer of the form, providing a general note or overview.
* **Vaccination Type** (`vaccination_type`, `select_multiple`, false): Select the type of vaccination the patient has received.
* **Medical Condition** (`medical_condition`, `select_one`, false): Select the patient's medical condition.

## Tips
* Review the form fields carefully and ensure you have all necessary information before completing the form.
* Use the options provided in each field to ensure correct completion.
* Complete the form accurately and thoroughly to ensure accurate data collection.
* Regularly review and update the form's data to reflect any changes in the patient's veterinary care.
