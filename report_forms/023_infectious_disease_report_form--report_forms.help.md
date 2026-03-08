# infectious_disease_report_form - Help Guide
## Purpose
This form is for reporting infectious diseases. Please note that this form is not intended for emergency situations and should only be used for non-emergency situations such as reporting cases of diseases that are not immediately life-threatening.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in the report date in the "Report Date" field.
2. Describe the symptoms in the "Symptoms" field.
3. Provide the exposure location in the "Exposure Location" field.
4. Enter the duration of symptoms in the "Symptoms Duration" field.
5. Enter the disease onset date in the "Disease Onset Date" field.
6. Enter the patient's name in the "Patient Name" field.
7. Enter the healthcare provider's name in the "Provider Name" field.
8. Select "Yes" or "No" to indicate if the patient's age range matches the options provided in the "Age Range" field.
9. Select "Yes" or "No" to indicate if the patient's gender matches the options provided in the "Gender" field.
10. If the patient's gender does not match the options provided, enter the correct gender in the "Other Gender" field.
11. Select "Yes" or "No" to indicate if the disease type matches the options provided in the "Disease Type" field.
12. Enter the disease name in the "Disease Name" field.
13. If the disease name does not match the options provided, enter the correct disease name in the "Other Disease Name" field.
14. Select "Yes" or "No" to indicate if the disease stage matches the options provided in the "Disease Stage" field.
15. If the disease stage does not match the options provided, enter the correct disease stage in the "Other Disease Stage" field.
16. Enter the patient's contact information in the "Patient Contact Info" field.
17. Enter the healthcare provider's contact information in the "Healthcare Provider Contact" field.
18. Enter the patient's phone number in the "Patient Phone" field.
19. Enter the healthcare provider's phone number in the "Healthcare Provider Phone" field.
20. Enter the patient's email in the "Patient Email" field.
21. Enter the healthcare provider's email in the "Healthcare Provider Email" field.
22. Add any additional comments or notes in the "Comments" field.

## Field-by-Field Explanation

* **Report Date** (`report_date`, date, required): Enter the date of the report.
* **Symptoms** (`symptoms`, text, required): Describe the symptoms of the disease.
* **Exposure Location** (`exposure_location`, text, required): Provide the location where the patient was exposed to the disease.
* **Symptoms Duration** (`symptoms_duration`, number, required): Enter the duration of the symptoms.
* **Disease Onset Date** (`disease_onset_date`, date, required): Enter the date when the disease started.
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Provider Name** (`provider_name`, text, required): Enter the healthcare provider's name.
* **Age Range** (`patient_age_range`, select_one, required): Select "Yes" if the patient's age range matches the options provided.
* **Gender** (`patient_gender`, select_one, required): Select "Yes" if the patient's gender matches the options provided.
* **Other Gender** (`patient_gender_other`, text, required): If the patient's gender does not match the options provided, enter the correct gender.
* **Other Gender Hint** (`patient_gender_other_hint`, text, required): Enter a hint for the other gender.
* **Disease Type** (`disease_type`, select_multiple, required): Select "Yes" if the disease type matches the options provided.
* **Disease Name** (`disease_name`, text, required): Enter the disease name.
* **Other Disease Name** (`disease_name_other`, text, required): If the disease name does not match the options provided, enter the correct disease name.
* **Other Disease Name Hint** (`disease_name_other_hint`, text, required): Enter a hint for the other disease name.
* **Disease Stage** (`disease_stage`, select_one, required): Select "Yes" if the disease stage matches the options provided.
* **Other Disease Stage** (`disease_stage_other`, text, required): If the disease stage does not match the options provided, enter the correct disease stage.
* **Other Disease Stage Hint** (`disease_stage_other_hint`, text, required): Enter a hint for the other disease stage.
* **Patient Contact Info** (`patient_contact_info`, text, required): Enter the patient's contact information.
* **Healthcare Provider Contact** (`healthcare_provider_contact`, text, required): Enter the healthcare provider's contact information.
* **Patient Phone** (`patient_phone`, text, required): Enter the patient's phone number.
* **Healthcare Provider Phone** (`healthcare_provider_phone`, text, required): Enter the healthcare provider's phone number.
* **Patient Email** (`patient_email`, email, required): Enter the patient's email.
* **Healthcare Provider Email** (`healthcare_provider_email`, email, required): Enter the healthcare provider's email.
* **Comments** (`comments`, text, required): Add any additional comments or notes.
