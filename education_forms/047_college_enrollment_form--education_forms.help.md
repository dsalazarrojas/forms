# College Enrollment Form - Help Guide

## Purpose
The College Enrollment Form is designed to collect personal and enrollment information from students who are interested in enrolling in a college or university.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal information, including your first name, middle name, last name, date of birth, gender, and contact details.
2. Provide your academic background, including your intended major and degree, high school name and graduation date, GPA, SAT or ACT score (if submitted), and scholarships awarded.
3. Select your enrollment preferences, including your housing preference, meal plan selection, tuition payment plan, and health insurance coverage status.
4. Complete the form by reviewing and agreeing to the terms and conditions and signing the form.

## Field-by-Field Explanation

* **First Name** (`student_first_name`, text, required): Enter your given name.
* **Middle Name** (`student_middle_name`, text, optional): Enter your middle name (if applicable).
* **Last Name** (`student_last_name`, text, required): Enter your family name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Gender** (`gender`, select_one, required): Select your gender.
* **Social Security Number** (`social_security`, text, required): Enter your social security number.
* **Email Address** (`student_email`, email, required): Enter your primary email address.
* **Phone Number** (`student_phone`, text, required): Enter your contact phone number.
* **Permanent Address** (`permanent_address`, text, required): Enter your permanent address.
* **City** (`permanent_city`, text, required): Enter the city of your permanent address.
* **State** (`permanent_state`, text, required): Enter the state or province of your permanent address.
* **ZIP Code** (`permanent_zip`, text, required): Enter the postal code of your permanent address.
* **Local Address** (`local_address`, text, optional): Enter your local address (if different from your permanent address).
* **Enrollment Term** (`enrollment_term`, select_one, required): Select the term you are enrolling in (e.g., Fall 2026, Spring 2027).
* **Enrollment Status** (`enrollment_status`, select_one, required): Select your enrollment status (e.g., Full-Time, Part-Time).
* **Intended Major** (`intended_major`, text, required): Enter your intended major or field of study.
* **Intended Degree** (`intended_degree`, select_one, required): Select your intended degree type (e.g., Bachelor of Arts, Bachelor of Science).
* **Housing Preference** (`housing_preference`, select_one, required): Select your housing preference (e.g., On-Campus Required, On-Campus Optional, Off-Campus).
* **Meal Plan Selection** (`meal_plan`, select_one, required): Select your meal plan preference (e.g., Unlimited Plan, 14 Meals Per Week).
* **Parent or Guardian Name** (`parent_name`, text, required): Enter the name of your parent or guardian (if applicable).
* **Parent or Guardian Email** (`parent_email`, email, required): Enter the email address of your parent or guardian.
* **Parent or Guardian Phone** (`parent_phone`, text, required): Enter the phone number of your parent or guardian.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact (if different from your parent or guardian).
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): Enter the relationship of your emergency contact (e.g., Parent, Guardian, Other).
* **High School Name** (`high_school_name`, text, required): Enter the name of your high school.
* **High School Graduation Date** (`high_school_graduation`, date, required): Enter the date you graduated from high school.
* **GPA** (`gpa`, number, required): Enter your high school GPA.
* **SAT Score** (`sat_score`, number, optional): Enter your SAT score (if submitted).
* **ACT Score** (`act_score`, number, optional): Enter your ACT score (if submitted).
* **Scholarships Awarded** (`financial_aid_awarded`, select_one, required): Select your financial aid status (e.g., True, False, Pending).
* **Scholarships List** (`scholarship_list`, text, optional): List any scholarships you have been awarded.
* **Tuition Payment Plan** (`tuition_payment_plan`, select_one, required): Select how you will pay for tuition (e.g., Paid in Full, Semester Plan).
* **Health Insurance** (`health_insurance`, select_one, required): Select your health insurance coverage status (e.g., Enroll in School Plan, Have Outside Insurance).
* **Insurance Provider Name** (`insurance_provider`, text, optional): Enter the name of your insurance provider (if outside insurance).
* **Policy Number** (`policy_number`, text, optional): Enter the policy number of your insurance provider (if outside insurance).
* **Immunization Records Submitted** (`immunization_records`, select_one, required): Select whether you have submitted immunization records (e.g., Yes Submitted, No Will Submit, Pending).
* **Orientation Attendance** (`orientation_attendance`, select_one, required): Select whether you will attend orientation (e.g., True, False).
* **Preferred Orientation Date** (`orientation_date`, date, optional): Enter the date you prefer to attend orientation (if attending).
* **Enrollment Deposit Payment** (`enrollment_deposit`, select_one, required): Select the status of your enrollment deposit (e.g., Paid, Pending, Fee Waiver).
* **Terms and Conditions** (`terms_accepted`, select_one, required): Select whether you agree to all terms and conditions (e.g., Yes I Accept, False).
* **Student Signature** (`student_signature`, select_one, required): Select whether you certify the accuracy of all information (e.g., Yes I Certify, Other).
* **Parent or Guardian Signature** (`parent_signature`, select_one, required): Select whether your parent or guardian certifies the accuracy of all information (if applicable).

## Tips

- Please ensure that you have filled in all required fields.
- Check that you have selected the correct options for each field.
- Review your information carefully before submitting the form.
- If you have any questions or concerns, please contact the college or university administration.
