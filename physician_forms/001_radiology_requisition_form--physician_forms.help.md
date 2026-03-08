# Radiology Requisition Form - Help Guide
## Purpose
This form is used by healthcare professionals to order radiology examinations for patients. The form helps to gather necessary information from the patient, select the desired examination type, and choose a radiologist to perform the examination.

## How To Complete This Form

To complete this form, please follow these steps:

1.  Select the desired radiology examination type (e.g. x ray or MRI).
2.  Enter the patient's information, including their name, date of birth, and address.
3.  Provide your contact information and any additional notes if necessary.
4.  Select a radiologist to perform the examination.

## Field-by-Field Explanation

*   **Order x ray** (`order_x_ray`, `select_multiple`, required: `false`): Select the type of x ray examination to order (e.g. Chest x ray, Abdomen x ray).
    *   Note: You can select one or multiple examination types, as needed.
*   **Order mri** (`mri_order`, `select_one`, required: `true`): Choose the specific MRI examination type (e.g. Knee, Shoulder, Spine).
    *   This field is required to select a specific MRI examination type.
*   **Patient info** (`patient_info`, `number`, required: `true`): Enter the patient's age or relevant medical history.
    *   Note: Please enter the patient's age or any relevant medical history.
*   **Physician note** (`physician_note`, `note`, required: `false`): Provide any additional comments or notes regarding the examination.
    *   Note: This field is optional and not required for the form submission.
*   **Patient name** (`patient_name`, `text`, required: `true`): Enter the patient's full name.
    *   Note: Please enter the patient's full name as displayed on their identification.
*   **Patient dob** (`patient_dob`, `date`, required: `true`): Enter the patient's date of birth.
    *   Note: Please enter the patient's date of birth in the format of YYYY-MM-DD.
*   **Patient address** (`patient_address`, `text`, required: `true`): Enter the patient's address.
    *   Note: Please enter the patient's full address.
*   **Contact info** (`contact_info`, `text`, required: `true`): Enter your contact information, including your name, phone number, and email.
    *   Note: This information will be used for follow-up and communication with the radiologist.
*   **Radiologist info** (`radiologist_info`, `select_one`, required: `true`): Choose a radiologist to perform the examination.
    *   Note: Please select a radiologist from the provided options.
