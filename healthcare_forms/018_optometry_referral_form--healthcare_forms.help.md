# Optometry Referral Form - Help Guide
## Purpose
The Optometry Referral Form is used by healthcare professionals to refer patients to optometrists for further examination and treatment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's first name in the `patient_first_name` field.
2. Enter the patient's last name in the `patient_last_name` field.
3. Enter the patient's contact information in the `contact_number` field.
4. Enter the name of the specialist being referred to in the `specialist_name` field.
5. Select the specialty of the specialist being referred to from the `specialty` dropdown menu.
6. Enter the reason for the referral in the `reason_for_referral` field.
7. Enter the date of the patient's last examination in the `patient_date_of_last_examination` field.
8. Enter the date of the referral in the `referral_date` field.
9. Add any additional notes about the patient's condition in the `notes` field.
10. If the specialist has a different department, enter their name in the `specialist_name_2` field and their department in the `specialist_department_2` field.
11. Enter the patient's email address in the `email` field.
12. Enter the patient's alternative contact number in the `contact_number_2` field.

## Field-by-Field Explanation
### 1. **First Name** (`patient_first_name`, text, required: false)
The patient's first name is required for identification purposes.

*   Please enter the patient's first name in this field.
*   Use the same format as the patient's official name.

### 2. **Last Name** (`patient_last_name`, text, required: false)
The patient's last name is required for identification purposes.

*   Please enter the patient's last name in this field.
*   Use the same format as the patient's official name.

### 3. **Contact Number** (`contact_number`, text, required: false)
Enter the patient's contact information.

*   Please enter the patient's phone number or other contact method.
*   This will be used to contact the patient.

### 4. **Specialist Name** (`specialist_name`, text, required: false)
Enter the name of the specialist being referred to.

*   Please enter the name of the specialist you are referring the patient to.
*   Use their professional title (e.g., Dr./Ms./Mr./Mrs./Prof.).

### 5. **Specialty** (`specialty`, select_one, required: false)
Select the specialty of the specialist being referred to.

*   Please select the specialist's area of expertise from the options provided.
*   This will help ensure the specialist is the right one for the patient.

### 6. **Reason for Referral** (`reason_for_referral`, text, required: false)
Enter the reason for the referral.

*   Please enter a brief explanation of the reason for the referral.
*   This will help the specialist understand the patient's condition.

### 7. **Date of Last Examination** (`patient_date_of_last_examination`, date, required: false)
Enter the date of the patient's last examination.

*   Please enter the date of the patient's last medical examination.
*   This will help the specialist understand the patient's medical history.

### 8. **Referral Date** (`referral_date`, date, required: false)
Enter the date of the referral.

*   Please enter the current date.
*   This will help track the referral's timeline.

### 9. **Notes** (`notes`, note, required: false)
Enter any additional notes about the patient's condition.

*   Please enter any relevant information about the patient's condition.
*   This will help the specialist understand the patient's needs.

### 10. **Email** (`email`, email, required: false)
Enter the patient's email address.

*   Please enter the patient's email address.
*   This will be used to contact the patient.

### 11. **Contact Number 2** (`contact_number_2`, text, required: false)
Enter the patient's alternative contact number.

*   Please enter the patient's alternative contact method.
*   This will be used to contact the patient.

### 12. **Specialist Name 2** (`specialist_name_2`, text, required: false)
Enter the name of the second specialist being referred to.

*   Please enter the name of the second specialist you are referring the patient to.
*   Use their professional title (e.g., Dr./Ms./Mr./Mrs./Prof.).

### 13. **Specialist Department 2** (`specialist_department_2`, text, required: false)
Enter the department of the second specialist being referred to.

*   Please enter the department of the specialist you are referring the patient to.
*   This will help ensure the specialist is in the right department.
