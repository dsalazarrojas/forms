<thinking>...</thinking>

# Geriatric Care Discharge Form - Help Guide
## Purpose
The Geriatric Care Discharge Form is used to document the care and services provided to geriatric patients at the time of discharge from a healthcare facility. This form helps to ensure that all necessary information is captured and communicated effectively between healthcare providers and family members or caregivers. It is crucial to provide comprehensive and accurate information about the patient's medical history, current condition, medication list, vital signs, test results, and discharge care plans.

## How To Complete This Form
To complete this form, please follow these steps:

1. Gather all necessary information about the patient from their medical history, current condition, medication list, vital signs, and test results.
2. Select the relevant medical provider and provider information from the provided options.
3. Choose the appropriate discharge care plans and social services items that apply to the patient.
4. Sign the form to confirm that you have reviewed and agree to the information provided.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required): Enter the patient's name, date of birth, and any other relevant identifying information.
* **Medical History** (`medical_history`, text, optional): Briefly describe the patient's medical history, including any significant medical conditions or concerns.
* **Medication List** (`medication_list`, text, optional): List the patient's current medications, including dosage and frequency.
* **Medication** (`medication_list_item`, select_multiple, optional): Select the specific medications listed in the medication list.
* **Vital Signs** (`vital_signs`, number, optional): Record the patient's current vital signs, such as blood pressure, pulse, and temperature.
* **Test Results** (`test_results`, text, optional): Report any significant test results, such as lab results or imaging studies.
* **Medical Provider** (`medical_provider`, select_one, optional): Select the healthcare provider who has been caring for the patient.
* **Medical Provider Info** (`medical_provider_info`, text, optional): Provide any additional information about the medical provider, such as contact details.
* **Discharge Care Plans** (`discharge_care_plans`, select_multiple, optional): Choose the discharge care plans that apply to the patient, such as follow-up appointments or home care instructions.
* **Discharge Care Plan** (`discharge_care_plans_item`, text, optional): Describe the specific discharge care plans chosen.
* **Social Service** (`social_service`, text, optional): List any social services needed for the patient, such as home care or transportation.
* **Social Service Item** (`social_service_item`, select_one, optional): Select the specific social services needed.
* **Signature** (`signature`, note, optional): Sign the form to confirm that you have reviewed and agree to the information provided.
* **Patient Signature** (`patient_signature`, note, optional): Sign the form as the patient, confirming that they have reviewed and agree to the information provided.
* **Facility** (`facility`, select_one, optional): Select the healthcare facility where the patient is being discharged from.
* **Facility Info** (`facility_info`, text, optional): Provide any additional information about the facility.
* **Other Info** (`other_info`, text, optional): Record any other relevant information about the patient's care.
* **Other Info Item** (`other_info_item`, select_multiple, optional): Select the specific other information items that apply.
