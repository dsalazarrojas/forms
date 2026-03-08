# Daycare Medical Form - Help Guide
## Purpose
The Daycare Medical Form is designed to collect information about a student's medical history, allergies, and immunizations to ensure the student receives proper care and attention while in the daycare center.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's name in the "Student Name" field.
2. Select the student's date of birth using the date picker.
3. If applicable, describe the student's medical history in the "Medical History" field.
4. Indicate whether the student takes any medications by selecting "Yes" or "No" in the "Medication List" field.
5. List any allergies the student has by selecting "Yes" or "No" for each option.
6. Indicate whether the student has any immunizations by selecting "Yes" or "No".
7. If necessary, upload supporting files or documents to the "Files Uploader" field.
8. If applicable, enter the medical provider's contact information in the "Medical Provider Contact", "Medical Provider Phone", and "Medical Provider Email" fields.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required): Enter the student's name.
* **Date of Birth** (`date_of_birth`, date, required): Select the student's date of birth using the date picker.
* **Medical History** (`medical_history`, text, optional): Describe any medical conditions, illnesses, or concerns.
* **Medication List** (`medication_list`, select_multiple, required): Select "Yes" if the student takes any medications, or "No" otherwise.
* **Allergies** (`allergies`, select_multiple, required): List any allergies the student has by selecting "Yes" for each applicable option.
* **Immunizations** (`immunizations`, select_one, required): Indicate whether the student has any immunizations by selecting "Yes" or "No".
* **Files Uploader** (`files_uploaded`, text, optional): Upload any supporting files or documents, if applicable.
* **Medical Provider Contact** (`medical_provider_contact`, text, optional): Enter the name of the medical provider who has provided care for the student.
* **Medical Provider Phone** (`medical_provider_phone`, text, optional): Enter the phone number of the medical provider.
* **Medical Provider Email** (`medical_provider_email`, text, optional): Enter the email of the medical provider.
