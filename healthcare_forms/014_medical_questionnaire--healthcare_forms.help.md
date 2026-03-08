<thinking>

This guide is intended to help users understand the purpose of the "medical_questionnaire" form and how to complete it in a clear and concise manner. The form is used to gather information about a patient's health status, medical history, and other relevant factors. Before proceeding, ensure that you have reviewed any relevant medical records and understand the context in which this form is being used.

</thinking>

# medical_questionnaire - Help Guide
## Purpose
The medical_questionnaire form is designed to collect information about a patient's health status, medical history, and other relevant factors to aid healthcare providers in making informed decisions.

## How To Complete This Form
To complete the medical_questionnaire form, follow the steps below:

1.  Review and understand the context in which this form is being used.
2.  Gather any relevant medical records, such as test results or doctor's notes.
3.  Answer each question carefully and honestly, based on your current health status.
4.  Select the most accurate options for each question, as instructed.

## Field-by-Field Explanation

### User Information (Page 1)
* **User Information** (`user_info`, `text`, required: false): This section is for providing basic contact information, such as name and contact details. This information will help healthcare providers communicate with you effectively.
* **Medical History** (`medical_history`, `text`, required: false): Please describe any significant medical events or conditions you have experienced in the past.

### Medical History (Page 2)
* **Have you taken any medication in the last 24 hours?** (`medical_questionnaire_1`, `select_one`, required: false): Choose the option that best describes your current medication usage status. If you have taken any medication, select 'True'. Otherwise, select 'False'.
* **Do you have any medical conditions?** (`medical_conditions`, `select_multiple`, required: false): Choose all medical conditions that apply to you, such as diabetes or allergies.
* **Do you take any prescription medications?** (`prescription_medications`, `select_multiple`, required: false): Select all medications you are currently taking under prescription.
* **Do you take any supplements?** (`supplements`, `select_multiple`, required: false): Choose all supplements you are currently taking.
* **Do you have any allergies?** (`allergies`, `select_multiple`, required: false): Select all allergies you have, such as food or medication allergies.

### Additional Information (Page 3)
* **Do you have any medical procedures or surgeries planned?** (`medical_procedures`, `select_multiple`, required: false): Choose all procedures or surgeries you have scheduled.
* **Do you take any medical tests or screenings regularly?** (`medical_tests`, `select_multiple`, required: false): Select all tests or screenings you undergo regularly.
* **Do you take any medications for mental health?** (`mental_health`, `select_multiple`, required: false): Choose all medications you are taking for mental health reasons.
* **Medical Questionnaire** (`medical_questionnaire_12`, `text`, required: false): This field is intended for any additional information or comments you may have about your health status.
