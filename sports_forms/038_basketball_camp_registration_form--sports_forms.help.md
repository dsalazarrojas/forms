# Basketball Camp Registration Form - Help Guide
## Purpose
The Basketball Camp Registration Form is used to collect information about students registering for a basketball camp. This form is required for every student registering for the camp.

## How To Complete This Form
1. Fill out the student information section with the student's first name, last name, age, and grade level.
2. If applicable, fill out the parent/guardian's name, phone number, and email address.
3. Select the camp session that the student will attend (Morning, Afternoon, Full Day, or Multi-Week).
4. Choose the student's skill level (Beginner, Intermediate, or Advanced).
5. If the student has attended a basketball camp before, select 'True'. Otherwise, select 'False'.
6. If the student has any health conditions or allergies, provide the necessary information.
7. Confirm that you agree to the camp's waiver and liability release, and that the provided information is accurate.

## Field-by-Field Explanation
* **First name** (`student_first_name`, text, required): Enter the student's first name.
* **Last name** (`student_last_name`, text, required): Enter the student's last name.
* **Age** (`student_age`, number, required): Enter the student's age.
* **Grade** (`grade`, text, required): Enter the student's grade level.
* **Parent/Guardian first name** (`parent_first_name`, text, required): Enter the parent/guardian's first name (if applicable).
* **Parent/Guardian last name** (`parent_last_name`, text, required): Enter the parent/guardian's last name (if applicable).
* **Parent phone number** (`parent_phone`, text, required): Enter the parent/guardian's phone number (if applicable).
* **Parent email** (`parent_email`, email, required): Enter the parent/guardian's email address (if applicable).
* **Camp session** (`camp_session_select`, select_one, required): Select the camp session the student will attend (Morning, Afternoon, Full Day, or Multi-Week).
* **Camp start date** (`camp_start_date`, date, required): Enter the start date of the camp session.
* **Skill level** (`skill_level`, select_one, required): Choose the student's skill level (Beginner, Intermediate, or Advanced).
* **Attended basketball camp before?** (`previous_camp`, select_one, optional): Select 'True' if the student has attended a basketball camp before. Otherwise, select 'False'.
* **Any health conditions or injuries?** (`health_conditions`, text, optional): Provide information about any health conditions or injuries the student may have.
* **Allergies (if any)** (`allergies`, text, optional): List any allergies the student may have.
* **Any medication needed during camp?** (`medication_needed`, text, optional): List any medication the student may need during the camp.
* **I agree to the camp waiver and liability release** (`waiver_agreement`, select_one, required): Select 'I Agree' to confirm you have read and agreed to the waiver and liability release.
* **I confirm this information is accurate** (`registration_confirm`, select_one, required): Select 'I Confirm' to confirm that the provided information is accurate.
