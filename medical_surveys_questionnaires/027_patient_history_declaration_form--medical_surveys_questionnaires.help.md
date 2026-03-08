# Patient History Declaration Form - Help Guide
## Purpose
The purpose of this form is to collect information about the patient's medical history, allergies, medications, and other relevant medical conditions.

## How To Complete This Form

To complete this form, follow these steps:

*   Please answer the questions honestly and accurately to provide comprehensive information about your medical history.
*   Review each page carefully and provide detailed responses where required.
*   Ensure that you answer all the questions and provide all the necessary information.

## Field-by-Field Explanation

*   **Patient Medical History** (`patient_medical_history`, `text`, required: false)
    Please provide detailed information about your medical history, including any previous hospitalizations, surgeries, or other significant medical events.
*   **Allergies** (`allergies`, `select_multiple`, required: false)
    Check all the boxes that apply to your allergies. If you have any allergies, please list all the substances or products you are allergic to.
*   **Medical History** (`medical_history`, `text`, required: false)
    Provide detailed information about your medical history, including any previous medical conditions, treatments, or significant health events.
*   **Medical Conditions** (`medical_conditions`, `select_one`, required: false)
    Check the box that applies to your current medical status. If you are unsure, please answer 'No' and explain in the 'Medical History' field.
*   **Current Medications** (`current_medications`, `select_multiple`, required: false)
    Check all the boxes that apply to your current medications. If you have any ongoing prescriptions or treatments, please list all the details.
*   **Family History** (`family_history`, `text`, required: false)
    Provide detailed information about your family medical history, including any relatives with significant medical conditions.
*   **Mental Health** (`mental_health`, `text`, required: false)
    If you have any mental health concerns or conditions, provide detailed information about them.
*   **Patient History Declaration** (`patient_history_declaration`, `select_one`, required: false)
    Please declare whether this information is accurate and up-to-date.
