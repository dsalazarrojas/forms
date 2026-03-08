<thinking>
To determine the purpose of the form, let's analyze the input YAML schema. The form is named "online_diagnostic_evaluation_form" and has multiple pages with various fields, including text inputs, select options, and checkboxes. This suggests that the form is designed for gathering information about a patient's medical history, medications, mental health, and other relevant factors. The form might be used for diagnostic purposes, such as assessing the patient's health status or identifying potential risks or conditions. To confirm this, we need to review the content of each field.
</thinking>

# online_diagnostic_evaluation_form - Help Guide
## Purpose
The online diagnostic evaluation form is designed to gather information about a patient's medical history, medications, and other relevant factors for diagnostic purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer each page's questions to the best of your ability.
2. Provide detailed and accurate information about your medical history, medications, and other relevant factors.
3. If you have any medical conditions or allergies, list them in the corresponding fields.
4. If you have any other medical conditions or allergies not listed in the options, use the "Other" field to provide more information.

## Field-by-Field Explanation

* **Intake Form** (`intake_form`, text, required/optional): Provide a brief introduction to your medical history, including any recent illnesses, injuries, or surgeries.
* **Medical History** (`medical_history`, text, required/optional): Describe your medical history, including any previous illnesses, injuries, or surgeries.
* **Medications** (`medications`, select multiple, required/optional): Check the boxes to indicate if you are currently taking any medications. If yes, list them in the corresponding field.
* **Meds List** (`medications_list`, text, required/optional): List any medications you are currently taking.
* **Medical History Details** (`medical_history_details`, text, required/optional): Provide more detailed information about your medical history, including any previous illnesses, injuries, or surgeries.
* **Mental Health** (`mental_health`, text, required/optional): Describe your mental health status, including any recent concerns or issues.
* **Medical Conditions** (`medical_conditions`, select multiple, required/optional): Check the boxes to indicate if you have any medical conditions. If yes, list them in the corresponding field.
* **Medical Conditions List** (`medical_conditions_list`, text, required/optional): List any medical conditions you have.
* **Medical Conditions List Other** (`medical_condition_list_other`, text, required/optional): If you have any other medical conditions not listed in the options, provide more information about them.
* **Family History** (`family_history`, text, required/optional): Describe your family medical history, including any known medical conditions or genetic predispositions.
* **Social History** (`social_history`, text, required/optional): Describe your social history, including any recent changes or concerns.
* **Medical Family History** (`medical_family_history`, text, required/optional): Provide more detailed information about your family medical history.
* **Medical Family History Other** (`medical_family_history_other`, text, required/optional): If you have any other family medical history not listed in the options, provide more information about them.
* **Mental Health History** (`mental_health_history`, text, required/optional): Describe your mental health history, including any recent concerns or issues.
* **Mental Health History Other** (`mental_health_history_other`, text, required/optional): If you have any other mental health history not listed in the options, provide more information about them.
* **Social Support** (`social_support`, text, required/optional): Describe your social support system, including any friends, family, or community resources.
* **Social Support System** (`social_support_system`, text, required/optional): Provide more detailed information about your social support system.
* **Social Support Other** (`social_support_other`, text, required/optional): If you have any other social support not listed in the options, provide more information about them.
* **Emergency Contact** (`emergency_contact`, text, required/optional): Provide information about your emergency contact, including their name and contact details.
* **Emergency Contact List** (`emergency_contact_list`, text, required/optional): List any emergency contacts.
* **Emergency Contact List Other** (`emergency_contact_list_other`, text, required/optional): If you have any other emergency contact not listed in the options, provide more information about them.
* **Allergies** (`allergies`, text, required/optional): Describe any allergies you have.
* **Allergies List** (`allergies_list`, text, required/optional): List any allergies you have.
* **Allergies List Other** (`allergies_list_other`, text, required/optional): If you have any other allergies not listed in the options, provide more information about them.
* **Meds 2** (`medications_list2`, text, required/optional): List any other medications you are taking.
* **Other Medical Conditions** (`medical_condition_list_other`, text, required/optional): If you have any other medical conditions not listed in the options, provide more information about them.
* **Other Allergies** (`allergies_list_other`, text, required/optional): If you have any other allergies not listed in the options, provide more information about them.
* **Other Emergency Contact** (`emergency_contact_list_other`, text, required/optional): If you have any other emergency contact not listed in the options, provide more information about them.
