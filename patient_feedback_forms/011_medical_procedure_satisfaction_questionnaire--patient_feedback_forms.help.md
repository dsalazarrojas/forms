<thinking>
To ensure that the form is used correctly and efficiently, I will first need to understand its purpose and the context in which it is being used. A quick review of the form's YAML schema reveals that it is designed to gather feedback from patients about their medical procedure experience. The form appears to focus on various aspects of the experience, including the quality of care received from doctors, nurses, and clinicians. However, upon further examination, I notice that the "staff helpfulness" field is rated as "number" type, which may not accurately reflect the intended meaning. Assuming the "staff helpfulness" field is intended to be a subjective rating, I will adjust the label and provide a revised explanation accordingly. I will also consider other fields for clarity and consistency in the form's language and instructions.</thinking>

# Medical Procedure Satisfaction Questionnaire - Help Guide
## Purpose
The Medical Procedure Satisfaction Questionnaire is designed to gather feedback from patients about their experience with a medical procedure. This form helps identify areas of improvement and ensure that patients receive the best possible care.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your first name.
2. Enter your last name.
3. Provide your contact phone number.
4. Enter your contact email address.
5. Rate the doctor's performance, from 1 to 5.
6. Rate the nurse's performance, from 1 to 5.
7. Rate the clinician's performance, from 1 to 5.
8. Rate your overall experience, from 1 to 5.
9. Enter the time taken during the procedure.
10. Enter the date of your visit.
11. Rate the helpfulness of the staff, from 1 to 5.
12. Rate the office environment, from 1 to 5.

## Field-by-Field Explanation
* **Patient First Name** (`patient_first_name`, text, required): Enter your first name for identification purposes.
* **Patient Last Name** (`patient_last_name`, text, required): Enter your last name for identification purposes.
* **Contact Phone** (`contact_phone`, text, optional): Enter your contact phone number.
* **Contact Email** (`contact_email`, text, optional): Enter your contact email address.
* **Rating of Doctor** (`rating_of_doctor`, number, optional): Rate the doctor's performance, from 1 to 5.
* **Rating of Nurse** (`rating_of_nurse`, number, optional): Rate the nurse's performance, from 1 to 5.
* **Rating of Clinician** (`rating_of_clinician`, number, optional): Rate the clinician's performance, from 1 to 5.
* **Overall Experience** (`overall_experience`, number, optional): Rate your overall experience, from 1 to 5.
* **Time Taken** (`time_taken`, time, optional): Enter the time taken during the procedure.
* **Date of Visit** (`date_of_visit`, date, optional): Enter the date of your visit.
* **Staff Helpfulness** (`staff_helpfulness`, number, optional): Rate the helpfulness of the staff, from 1 to 5.
* **Office Environment** (`office_environment`, number, optional): Rate the office environment, from 1 to 5.
