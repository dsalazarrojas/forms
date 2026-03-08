# remote_patient_monitoring_form - Help Guide
## Purpose
The remote_patient_monitoring_form is used for remote patient monitoring to collect and document patient information, medical history, and monitoring details. This form helps healthcare professionals to gather essential information for patient care and monitoring.

## How To Complete This Form
To complete this form, follow these steps:

*   Enter the patient's name in the "Patient Name" field.
*   Provide the patient's contact number in the "Patient Contact Number" field.
*   Enter the patient's address in the "Patient Address" field.
*   Enter the patient's date of birth (DOB) in the "Patient DOB" field in the format `MM/DD/YYYY`.
*   Select the medical professional's name in the "Medical Professional Name" field.
*   Enter the medical professional's contact number in the "Medical Professional Contact Number" field.
*   Enter the patient's medical condition in the "Patient Medical Condition" field.
*   Choose the method of patient monitoring from the dropdown list "Patient Monitoring Method" (e.g., In-person, Phone, Video, or Other).
*   Select the frequency of patient monitoring from the dropdown list "Patient Monitoring Frequency" (e.g., Daily, Weekly, or Monthly).
*   Enter any additional patient monitoring notes in the "Patient Monitoring Notes" field.
*   Enter the patient's medical history in the "Patient Medical History" field.
*   List any patient allergies in the "Patient Allergies" field.
*   List any patient medications in the "Patient Medications" field.
*   Enter the patient's monitoring device information in the "Patient Monitoring Device" field.
*   Enter the medical professional's signature in the "Medical Professional Signature" field.
*   Enter the date and time of completion in the "Medical Professional Date" and "Medical Professional Time" fields.
*   Enter the patient's signature in the "Patient Signature" field.
*   Enter the form completion date and time in the "Form Completion Date" and "Form Completion Time" fields.
*   Enter the name of the person who completed the form in the "Form Completed By" field.
*   Enter the name of the person who reviewed the form in the "Form Reviewed By" field.
*   Enter any additional form notes in the "Notes" field.
*   Enter patient monitoring notes in the "Patient Monitoring Notes" field.
*   Enter medical notes in the "Medical Notes" field.

## Field-by-Field Explanation

*   **Patient Name** (`patient_name`, text, required): This field is for the patient's name.
*   **Patient Contact Number** (`patient_contact_number`, text, required): This field is for the patient's contact number.
*   **Patient Address** (`patient_address`, text, required): This field is for the patient's address.
*   **Patient DOB** (`patient_dob`, date, required): This field is for the patient's date of birth in the format `MM/DD/YYYY`.
*   **Medical Professional Name** (`medical_professional_name`, text, required): This field is for the medical professional's name.
*   **Medical Professional Contact Number** (`medical_professional_contact_number`, text, required): This field is for the medical professional's contact number.
*   **Patient Medical Condition** (`patient_medical_condition`, text, required): This field is for the patient's medical condition.
*   **Patient Monitoring Method** (`patient_monitoring_method`, select_one, required): This field is for selecting the method of patient monitoring (e.g., In-person, Phone, Video, or Other).
*   **Patient Monitoring Frequency** (`patient_monitoring_frequency`, select_multiple, required): This field is for selecting the frequency of patient monitoring (e.g., Daily, Weekly, Monthly).
*   **Patient Monitoring Notes** (`patient_monitoring_notes`, text, required): This field is for any additional notes about the patient's monitoring.
*   **Patient Medical History** (`patient_medical_history`, text, required): This field is for the patient's medical history.
*   **Patient Allergies** (`patient_allergies`, text, required): This field is for listing any patient allergies.
*   **Patient Medications** (`patient_medications`, text, required): This field is for listing any patient medications.
*   **Patient Monitoring Device** (`patient_monitoring_device`, text, required): This field is for entering the patient's monitoring device information.
*   **Medical Professional Signature** (`medical_professional_signature`, text, required): This field is for the medical professional's signature.
*   **Medical Professional Date** (`medical_professional_date`, date, required): This field is for the date of completion in the format `MM/DD/YYYY`.
*   **Medical Professional Time** (`medical_professional_time`, time, required): This field is for the time of completion.
*   **Patient Signature** (`patient_signature`, text, required): This field is for the patient's signature.
*   **Form Completion Date** (`form_completion_date`, date, required): This field is for the date of completion in the format `MM/DD/YYYY`.
*   **Form Completion Time** (`form_completion_time`, time, required): This field is for the time of completion.
*   **Form Completed By** (`form_completed_by`, text, required): This field is for the name of the person who completed the form.
*   **Form Reviewed By** (`form_reviewed_by`, text, required): This field is for the name of the person who reviewed the form.
*   **Notes** (`notes`, text, required): This field is for any additional form notes.
*   **Patient Monitoring Notes** (`patient_monitoring_notes`, text, required): This field is for patient monitoring notes.
*   **Medical Notes** (`medical_notes`, text, required): This field is for medical notes.
