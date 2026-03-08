<thinking>
The purpose of this form is to capture necessary information for the discharge process of patients under nephrology treatment. This form ensures that all required information is captured to facilitate a smooth and efficient discharge process. This form should only be used for nephrology-specific discharges to avoid confusion with other departments or facilities. To ensure accuracy and reduce errors, please verify that this form is being used correctly and only for its intended purpose.
</thinking>

# nephrology_discharge_form - Help Guide
## Purpose
The Nephrology Discharge Form is a standardized template for capturing the necessary information for the discharge process of patients under nephrology treatment.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in the General Info section with the patient's basic information.
2.  In the Patient Info section, provide details about the patient's demographics.
3.  The Medical History section is optional but recommended for better understanding of the patient's condition.
4.  Select all medications the patient is currently taking from the dropdown menu in the Medications section.
5.  Fill in the patient's vital signs in the Vital Signs section.
6.  Enter any laboratory information in the Laboratory Info section.
7.  Provide a detailed description of the discharge process and any important information in the Discharge Info section.
8.  In the Follow-up Info section, note any follow-up appointments or instructions for the patient.
9.  Add any additional comments from the treating physician in the Physician Comments section.
10. The patient can also add any comments in the Patient Comments section.
11. Fill in the hospital name, contact information, and date and time of discharge.

## Field-by-Field Explanation

*   *General Info (Required)* (`<id: 1, name: general_info, label: General Info, type: text, required: true>`): Fill in the patient's basic information such as the name, date of admission, and any other relevant details.
*   *Patient Info (Optional)* (`<id: 2, name: patient_info, label: Patient Info, type: text, required: false>`): Provide details about the patient's demographics such as age, sex, and any other relevant information.
*   *Medical History (Optional)* (`<id: 3, name: medical_history, label: Medical History, type: text, required: false>`): If necessary, describe the patient's medical history for better understanding of their condition.
*   *Medications (Optional)* (`<id: 4, name: medications, label: Medications, type: select_multiple, required: false>`): Select all medications the patient is currently taking.
*   *Vital Signs (Required)* (`<id: 5, name: vital_signs, label: Vital Signs, type: number, required: true>`): Enter the patient's current vital signs such as blood pressure, pulse, and body temperature.
*   *Laboratory Info (Optional)* (`<id: 6, name: laboratory_info, label: Laboratory Info, type: text, required: false>`): Enter any relevant laboratory results or information.
*   *Discharge Info (Optional)* (`<id: 7, name: discharge_info, label: Discharge Info, type: text, required: false>`): Provide a detailed description of the discharge process and any important information.
*   *Follow-up Info (Optional)* (`<id: 8, name: follow_up_info, label: Follow-up Info, type: text, required: false>`): Note any follow-up appointments or instructions for the patient.
*   *Physician Comments (Optional)* (`<id: 9, name: physician_comments, label: Physician Comments, type: text, required: false>`): Add any additional comments from the treating physician.
*   *Patient Comments (Optional)* (`<id: 10, name: patient_comments, label: Patient Comments, type: text, required: false>`): The patient can also add any comments.
*   *Hospital Name (Required)* (`<id: 11, name: hospital_name, label: Hospital Name, type: text, required: true>`): Fill in the hospital name.
*   *Contact Info (Required)* (`<id: 12, name: contact_info, label: Contact Info, type: select_one, required: true>`): Select the contact information (phone or email).
*   *Date of Birth (Required)* (`<id: 13, name: date_of_birth, label: Date of Birth, type: date, required: true>`): Fill in the patient's date of birth.
*   *Address (Required)* (`<id: 14, name: address, label: Address, type: text, required: true>`): Enter the patient's address.
*   *Date of Discharge (Required)* (`<id: 15, name: date_of_discharge, label: Date of Discharge, type: date, required: true>`): Fill in the date of discharge.
*   *Time of Discharge (Required)* (`<id: 16, name: time_of_discharge, label: Time of Discharge, type: time, required: true>`): Enter the time of discharge.
*   *Discharge Diagnosis (Required)* (`<id: 17, name: discharge_diagnosis, label: Discharge Diagnosis, type: text, required: true>`): Enter the discharge diagnosis.
*   *Discharge Summary (Required)* (`<id: 18, name: discharge_summary, label: Discharge Summary, type: text, required: true>`): Provide a detailed description of the discharge process and outcome.

## Tips

*   Always double-check the form for accuracy and completeness before submission.
*   Use a printer-friendly format when printing the form for the patient's records.
*   Ensure that all necessary information is captured before submission to avoid errors during the discharge process.
