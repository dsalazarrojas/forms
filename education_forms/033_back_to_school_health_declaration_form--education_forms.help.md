# Back To School Health Declaration Form - Help Guide
## Purpose
The purpose of this form is to ensure that students return to school with accurate and up-to-date health information, to prevent the spread of illnesses and maintain a safe school environment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the student's full name in the "Student Full Name" field.
2. If known, enter the student's ID number.
3. Select the student's grade level from the options provided.
4. Enter the parent/guardian's name and contact phone number.
5. Answer the health questions regarding recent fever, cough, loss of taste or smell, international travel, and household exposure to illness.
6. If applicable, describe any chronic health conditions that may impact the student's health and well-being.
7. Select whether you authorize the school to perform daily temperature checks on your child.
8. Date and sign the declaration.

## Field-by-Field Explanation
- **Student Full Name** (`student_full_name_health`, `text`, required): Enter the student's full name.
- **Student ID Number** (`student_id_number`, `text`, optional): If known, enter the student's ID number.
- **Student Grade Level** (`student_grade_health`, `select_one`, required): Select the student's grade level from the options provided.
- **Parent/Guardian Contact Name** (`parent_guardian_contact`, `text`, required): Enter the name of the parent or guardian.
- **Parent Phone Number** (`parent_phone_health`, `text`, required): Enter the parent or guardian's phone number.
- **Has the student had a fever of 100.4 F or higher in the last 24 hours?** (`current_fever_check`, `select_one`, required): Select whether the student has had a fever in the last 24 hours.
- **Does the student have a new or worsening cough or shortness of breath?** (`new_cough_check`, `select_one`, required): Select whether the student has a new or worsening cough or shortness of breath.
- **Has the student experienced a new loss of taste or smell?** (`loss_of_taste_smell`, `select_one`, required): Select whether the student has experienced a new loss of taste or smell.
- **Has the student traveled internationally in the last 14 days?** (`international_travel_health`, `select_one`, required): Select whether the student has traveled internationally in the last 14 days.
- **Is anyone in your household currently sick with COVID-19 or similar symptoms?** (`household_illness_check`, `select_one`, required): Select whether anyone in the household is sick with COVID-19 or similar symptoms.
- **Any chronic health conditions that the school should be aware of?** (`chronic_health_disclosure`, `text`, optional): Describe any chronic health conditions that may impact the student's health and well-being.
- **I authorize the school to perform daily temperature checks on my child** (`school_screen_authorization`, `select_one`, required): Select whether you authorize the school to perform daily temperature checks.
- **Date of Declaration** (`declaration_signature_date`, `date`, required): Date and sign the declaration.
- **I certify that the information provided is accurate and complete** (`electronic_signature_parent`, `select_one`, required): Select that the information provided is accurate and complete.
