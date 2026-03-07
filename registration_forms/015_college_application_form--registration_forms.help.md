<thinking>
This form is designed to collect information from individuals applying to a college or university. The form includes fields for personal contact information (first name, last name, email address, phone number, date of birth, and permanent address), nationality and citizenship status, educational background (desired degree, field of study), and professional experience. Additionally, it asks questions to gauge the individual's preparedness and language proficiency.

The form should not be used to apply for multiple programs or individuals. 

Please ensure you are providing accurate information as it will be used to review and evaluate your application. 

Please fill in all required fields accurately and truthfully. 

Note: This form is not for internal use, it is a user-facing application form, hence please be concise and clear while filling in this form.

</thinking>

# College Application Form - Help Guide
## Purpose
This form is designed to collect information from individuals applying to a college or university. It is used to gather relevant data for review and evaluation of the application.

## How To Complete This Form
1. Please fill in your personal contact information: First name, last name, email address, phone number, date of birth, and permanent address.
2. Choose your nationality and citizenship status from the provided options.
3. Select your desired degree and field of study.
4. Provide your educational background information if applicable.
5. Answer questions related to professional experience and standardized tests taken.
6. Write a statement of purpose, explaining why you want to pursue this degree.
7. Indicate whether you need financial assistance.
8. Confirm your language proficiency level.
9. If applicable, provide your English test scores.

## Field-by-Field Explanation

* **Application ID** (`application_id`, text, required: false): This is an auto-generated unique identifier for the application. You do not need to fill this in.
* **First Name** (`first_name`, text, required: true): Enter your first name.
* **Last Name** (`last_name`, text, required: true): Enter your last name.
* **Email Address** (`email_address`, email, required: true): Enter a valid email address that we can use to contact you.
* **Phone Number** (`phone_number`, text, required: true): Enter your contact phone number.
* **Date of Birth** (`date_of_birth`, date, required: true): Enter your date of birth in the format of MM/DD/YYYY.
* **Country of Origin** (`country_of_origin`, text, required: true): Choose your country of origin.
* **Citizenship Status** (`citizenship_status`, select_one, required: true): Select your citizenship status from the options provided.
* **Permanent Address** (`permanent_address`, text, required: true): Enter your permanent address.
* **City** (`city`, text, required: true): Enter your city name.
* **State or Province** (`state_province`, text, required: true): Enter your state or province name.
* **Postal Code** (`postal_code`, text, required: true): Enter your postal code.
* **Desired Degree** (`desired_degree`, select_one, required: true): Choose your desired degree level.
* **Proposed Field of Study** (`field_of_study`, text, required: true): Enter your proposed field of study.
* **Current or Last Institution** (`current_institution`, text, required: false): If you are currently studying, enter the name of your institution.
* **Cumulative GPA** (`cumulative_gpa`, number, required: false): Enter your cumulative GPA on a 4.0 scale if available.
* **Have you taken standardized tests (GRE, GMAT, etc.)?** (`standardized_test_submitted`, select_one, required: true): Choose whether you have taken standardized tests or not.
* **Test Scores** (`test_scores`, text, required: false): If you have taken standardized tests, list their names and scores.
* **Years of Relevant Work Experience** (`work_experience`, number, required: false): Enter your years of relevant work experience.
* **Describe Your Professional Experience** (`work_description`, text, required: false): Describe your professional experience, if applicable.
* **Statement of Purpose** (`statement_of_purpose`, text, required: true): Write a 500-word essay explaining why you want to pursue this degree.
* **Have you arranged for reference letters?** (`references_submitted`, select_one, required: true): Choose whether you have arranged for reference letters.
* **Do you require financial assistance?** (`financial_aid_needed`, select_one, required: true): Choose whether you need financial assistance.
* **Native English Speaker** (`english_proficiency`, select_one, required: true): Choose whether you are a native English speaker.
* **English Proficiency Test Score (TOEFL, IELTS, etc.)** (`english_test_score`, text, required: false): Enter your English proficiency test score if applicable.
