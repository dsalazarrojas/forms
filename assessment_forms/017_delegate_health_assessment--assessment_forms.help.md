<thinking>
This guide provides an overview of the "delegate_health_assessment" form, including its purpose, steps to complete it, and an explanation of each field. This guide assumes you are familiar with the form's context and requirements. If you're not, please refer to the relevant documentation for more information.

The purpose of this form is to collect information on a patient's medical history and current health status. This includes details about patient questionnaires, delegate questionnaires, medical history (including specific dates), and other relevant medical information. 

To complete this form, follow these steps:

1.  Select the "patient" option from the first dropdown menu (patient_information fields).
2.  Choose the relevant patient questionnaires from the second dropdown menu (patient_questionnaires).
3.  Choose the relevant delegate questionnaires from the third dropdown menu (delegate_questionnaires).
4.  Answer any applicable medical history questions, including the medical_history_2 option and medical_history_1 date.
5.  Optionally, provide additional medical history information through medical_history_3.

Please note that some fields are optional, and the form requires specific information to be filled out for submission. This guide will explain each field in more detail below.

</thinking>

# delegate_health_assessment - Help Guide
## Purpose
The delegate_health_assessment form is used to collect a patient's medical history and current health status.

## How To Complete This Form
To complete this form, follow the steps outlined in the section above.

## Field-by-Field Explanation

* **patient** (`patient`, `select_multiple`, **required**): Select the patient's relevant information, such as medical history, medications, allergies, medical conditions, medical procedures, or medical devices.
* **questionnaires** (`questionnaires`, `select_multiple`, **required**): Choose relevant patient questionnaires to better understand the patient's health status.
* **delegate_questionnaires** (`delegate_questionnaires`, `select_multiple`, **required**): Select relevant delegate questionnaires to provide additional context on the patient's health.
* **medical_history_2** (`medical_history_2`, `select_one`, **required**): Choose the relevant medical history option, such as Option 1, Option 2, or Option 3.
* **medical_history_1** (`medical_history_1`, `date`, **optional**): Provide the relevant date for the medical history.
* **medical_history_3** (`medical_history_3`, `time`, **optional**): If required, provide additional medical history information in this field.

Note that some fields are optional, and you must ensure to fill out all required fields for submission.
