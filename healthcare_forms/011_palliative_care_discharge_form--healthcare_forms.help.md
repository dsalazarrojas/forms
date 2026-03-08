# Palliative Care Discharge Form - Help Guide
## Purpose
This form is used to document the care provided to a patient in a palliative care setting and to ensure a smooth transition of care after discharge.

## How To Complete This Form
1. Ensure that you have all the necessary information about the patient, including their name, date of birth, and date of death (if applicable).
2. Choose the care team that has been involved in the patient's care.
3. Document the care plan, including any medications and their dosages, frequencies, and potential side effects.
4. Indicate the reason for discharge.
5. Provide the date of discharge.
6. Specify the name and contact information of the next care provider.
7. Document any medications prescribed, including their dosages and frequencies.
8. Specify the location where care will be continued after discharge.
9. Indicate the patient's status at the time of discharge.
10. Provide the name and contact information of the hospice or care facility.

## Field-by-Field Explanation
* **patient_name** (`patient_name`, text, required): Enter the patient's name.
* **patient_date_of_birth** (`patient_date_of_birth`, date, required): Enter the patient's date of birth.
* **patient_date_of_death** (`patient_date_of_death`, date): Enter the patient's date of death (if applicable).
* **patient_care_team** (`patient_care_team`, select_one, optional): Choose the care team that has been involved in the patient's care.
* **care_plan** (`care_plan`, text, optional): Document the care plan, including any medications and their dosages, frequencies, and potential side effects.
* **discharge_reason** (`discharge_reason`, select_one, optional): Indicate the reason for discharge.
* **discharge_date** (`discharge_date`, date, optional): Provide the date of discharge.
* **next_care_provider** (`next_care_provider`, text, optional): Specify the name and contact information of the next care provider.
* **medication** (`medication`, text, optional): Document any medications prescribed, including their dosages and frequencies.
* **medication_dosage** (`medication_dosage`, number, optional): Specify the dosage of the medication.
* **medication_frequency** (`medication_frequency`, text, optional): Specify the frequency of the medication.
* **medication_side_effects** (`medication_side_effects`, select_multiple, optional): List any potential side effects of the medication.
* **care_location** (`care_location`, select_one, optional): Specify the location where care will be continued after discharge.
* **patient_status** (`patient_status`, select_one, optional): Indicate the patient's status at the time of discharge.
* **hospice_name** (`hospice_name`, text, optional): Provide the name of the hospice or care facility.
* **hospice_address** (`hospice_address`, text, optional): Provide the address of the hospice or care facility.
* **hospice_phone** (`hospice_phone`, text, optional): Provide the phone number of the hospice or care facility.
* **hospice_email** (`hospice_email`, email, optional): Provide the email of the hospice or care facility.
* **patient_family** (`patient_family`, text, optional): Specify the name of the patient's family member or caregiver.
* **patient_family_relationship** (`patient_family_relationship`, text, optional): Specify the relationship of the patient to their family member or caregiver.
* **next_of_kin** (`next_of_kin`, text, optional): Specify the name of the next of kin or legal guardian.
* **next_of_kin_phone** (`next_of_kin_phone`, text, optional): Provide the phone number of the next of kin or legal guardian.
* **next_of_kin_email** (`next_of_kin_email`, email, optional): Provide the email of the next of kin or legal guardian.
* **patient_medical_record_number** (`patient_medical_record_number`, text, optional): Provide the patient's medical record number.
* **notes** (`notes`, note, optional): Add any additional notes about the patient's care or discharge.
