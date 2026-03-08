# COVID 19 Student Online Health Screening Form - Help Guide
## Purpose
The COVID 19 Student Online Health Screening Form is designed to collect information about a student's health status and travel history to ensure their safety and the safety of others in the school community.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the questions in each section carefully and accurately.
2. Enter the student's information in the correct format (e.g., date, text, select from options).
3. Ensure that you have answered all required questions.
4. Review your answers before submitting the form.

## Field-by-Field Explanation

* **Screening Date** (`screening_date`, date, required): Enter the current date in MM/DD/YYYY format.
* **Student First Name** (`student_first_name`, text, required): Enter the student's legal first name.
* **Student Last Name** (`student_last_name`, text, required): Enter the student's legal last name.
* **Student ID Number** (`student_id`, text, required): Enter the student's school ID number.
* **Date of Birth** (`date_of_birth`, date, required): Enter the student's date of birth in MM/DD/YYYY format.
* **Grade Level** (`grade_level`, select_one, required): Select the student's current grade level.
* **School Name** (`school_name`, text, required): Enter the name of the school the student attends.
* **Parent or Guardian Name** (`parent_guardian_name`, text, required): Enter your full name as the student's parent or guardian.
* **Parent or Guardian Phone** (`parent_guardian_phone`, text, required): Enter your contact phone number.
* **Parent or Guardian Email** (`parent_guardian_email`, email, required): Enter your contact email address.
* **Home Address** (`home_address`, text, required): Enter the student's home address.
* **Current Temperature** (`current_temperature`, number, required): Enter the student's current temperature in Fahrenheit.
* **Does the student have a fever of 100.4 F or higher?** (`fever_check`, select_one, required): Answer whether the student has a fever of 100.4 F or higher.
* **Is the student experiencing any COVID-19 symptoms today?** (`current_symptoms`, select_one, required): Answer whether the student is experiencing any COVID-19 symptoms today.
* **Which symptoms** (`symptom_list`, select_multiple, false): Select all symptoms the student is experiencing. (Note: This question is not required.)
* **Has anyone in the household tested positive for COVID-19 in the past 14 days?** (`household_positive`, select_one, required): Answer whether anyone in the household has tested positive for COVID-19 in the past 14 days.
* **Is anyone in the household experiencing COVID-19 symptoms?** (`household_symptoms`, select_one, required): Answer whether anyone in the household is experiencing COVID-19 symptoms.
* **Has the student had close contact with a confirmed COVID-19 case in the past 14 days?** (`close_contact_exposure`, select_one, required): Answer whether the student has had close contact with a confirmed COVID-19 case in the past 14 days.
* **Has the student traveled outside the area in the past 14 days?** (`travel_history`, select_one, required): Answer whether the student has traveled outside the area in the past 14 days.
* **List travel locations** (`travel_locations`, text, false): Enter any travel locations the student has visited in the past 14 days.
* **What is the student's COVID-19 vaccination status?** (`vaccination_status`, select_one, false): Answer the student's COVID-19 vaccination status.
* **Has the student been tested for COVID-19 in the past 14 days?** (`testing_status`, select_one, required): Answer whether the student has been tested for COVID-19 in the past 14 days.
* **Is the student cleared to attend school today?** (`clearance_status`, select_one, required): Answer whether the student is cleared to attend school today.
* **Additional Health Information** (`additional_comments`, text, false): Enter any additional health information about the student.
* **Parent Attestation** (`parent_attestation`, select_one, required): Confirm that the information provided is true and accurate.
* **Signature Date** (`signature_date`, date, required): Enter the date submitted.
