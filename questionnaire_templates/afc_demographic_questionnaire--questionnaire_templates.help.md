# AFC Demographic Questionnaire - Help Guide
## Purpose
The AFC Demographic Questionnaire is a form designed to collect demographic information from users to help us better understand and cater to their needs.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the personal information section:
	* Provide your full name as it appears on official documents.
	* If different, enter the name you prefer to be called.
2. Enter your email address and phone number for official communications.
3. Provide your date of birth.
4. Select your gender identity.
5. If applicable, select all that apply for your race/ethnicity.
6. Enter your employee ID, job title, department, and employment start date.
7. Select your employment type.
8. If applicable, select your annual salary range.
9. Indicate your highest level of education completed.
10. In the diversity and inclusion section:
	* Select your veteran status.
	* Indicate whether you have a disability that affects your work.
	* Select your primary language spoken at home.
11. In the satisfaction and feedback section:
	* Rate your satisfaction with AFC's benefits package.
	* Rate your sense of inclusion at AFC (1-10).
12. If applicable, provide suggestions for improvement and additional comments.

## Field-by-Field Explanation
* **Full name** (`full_name`, `text`, required): Enter your full name as it appears on official documents.
* **Preferred name** (`preferred_name`, `text`, optional): If different from your legal name, enter the name you prefer to be called.
* **Email address** (`email_address`, `email`, required): This will be used for all official communications.
* **Phone number** (`phone_number`, `phone`, required): Include area code.
* **Date of birth** (`date_of_birth`, `date`, required): Enter your date of birth.
* **Gender identity** (`gender_identity`, `select_one`, required): Select your gender identity.
* **Race/Ethnicity (select all that apply)** (`race_ethnicity`, `select_multiple`, optional): Select all that apply for your race/ethnicity.
* **Employee ID** (`employee_id`, `text`, required): Enter your employee ID found on your employee badge or pay stub.
* **Job title** (`job_title`, `text`, required): Enter your current job title.
* **Department** (`department`, `select_one`, required): Select your department.
* **Employment start date** (`employment_start_date`, `date`, required): Enter your employment start date.
* **Employment type** (`employment_type`, `select_one`, required): Select your employment type.
* **Annual salary range** (`annual_salary_range`, `select_one`, optional): Select your annual salary range.
* **Highest level of education completed** (`education_level`, `select_one`, optional): Indicate your highest level of education completed.
* **Veteran status** (`veteran_status`, `select_one`, optional): Select your veteran status.
* **Do you have a disability that affects your work?** (`disability_status`, `select_one`, optional): Indicate whether you have a disability that affects your work.
* **Primary language spoken at home** (`primary_language`, `text`, optional): Select your primary language spoken at home.
* **Satisfaction with AFC's benefits package** (`satisfaction_with_benefits`, `select_one`, optional): Rate your satisfaction with AFC's benefits package.
* **Rate your sense of inclusion at AFC (1-10)** (`workplace_inclusion_rating`, `integer`, optional): Rate your sense of inclusion at AFC (1-10).
* **What could AFC do to better support diversity and inclusion?** (`suggestions_for_improvement`, `text`, optional): Provide suggestions for improvement.
* **Additional comments or notes** (`additional_comments`, `text`, optional): Enter additional comments or notes.
