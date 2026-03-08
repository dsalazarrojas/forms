# Medical Treatment Permission Form - Help Guide
## Purpose
The Medical Treatment Permission Form is used to obtain medical treatment permissions for patients in a non-emergency setting. This form is meant for patients who are receiving treatment that is not immediately life-threatening.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the "Patient" field.
2. Choose the relationship between the patient and the person submitting the form (e.g. "Parent", "Guardian", etc.).
3. Enter the patient's date of birth.
4. Enter the patient's contact information, including phone number and address.
5. List the patient's medical group or clinic name.
6. Enter the date of the treatment.
7. Identify the medical provider administering the treatment.
8. Indicate the duration of the treatment.

## Field-by-Field Explanation

* **Medical Treatment** (`medical_treatment_permission_form`, text, optional): This field is intended for a brief description of the medical treatment. It's not required, but can be useful for context.
* **Patient** (`patient`, text, optional): This field is for the patient's name. Please ensure that you have permission from the patient before submitting this form.
* **Relationship** (`relationship`, select_one, optional): This field is for specifying the relationship between the person submitting the form and the patient (e.g. "Parent", "Guardian", etc.).
* **Date of Birth** (`date_of_birth`, date, optional): Enter the patient's date of birth in the format `MM/DD/YYYY`.
* **Contact Number** (`contact_number`, text, optional): Enter the patient's contact information, including phone number.
* **Address** (`address`, text, optional): This field is for the patient's address.
* **Medical Group** (`medical_group`, text, optional): This field is for listing the patient's medical group or clinic name.
* **Medical Group Name** (`medical_group_name`, text, optional): This field is intended for listing the name of the medical group or clinic.
* **Treatment Date** (`treatment_date`, date, optional): Enter the date of the treatment in the format `MM/DD/YYYY`.
* **Medical Provider** (`medical_provider`, text, optional): Identify the medical provider administering the treatment.
* **Treatment Duration** (`treatment_duration`, number, optional): Indicate the duration of the treatment.
