<thinking>...</thinking>

The employee referral form is used to gather information about an employee's referral source, including their contact information and job posting details. This form ensures that the company has a clear understanding of who referred an employee to the company and why they are a good fit for the role. The form should only be completed by employees who have been referred to the company through a colleague or friend.

# employee_referral - Help Guide
## Purpose
The employee referral form is used to gather information about an employee's referral source and job posting details.

## How To Complete This Form

1. To begin, click on the "Yes" or "No" radio buttons for "referral_source" to indicate whether or not you were referred to the company.
2. If you selected "Yes" for "referral_source", please provide the "employee_name" of the person who referred you to the company.
3. Select the correct job titles that best fit your job description. You can select multiple options for "job_title", "job_title_2", "job_title_3", and "job_level" fields.
4. Enter your contact information in the "email" field, ensuring it is in the correct format.
5. Enter your contact number in the "contact_number" field.
6. Provide the date and time when the job was posted.
7. Select the type of job you are applying for by choosing "Yes" or "No" in the "job_type" field.
8. Select the departments you are applying for by choosing "Yes" or "No" in the "department" field.
9. Enter the salary range you are expecting.
10. Finally, click on "submit" to submit your referral information.

## Field-by-Field Explanation
* **referral_source** (`referral_source`, select_one, required/optional): Indicate whether or not you were referred to the company.
* **employee_name** (`employee_name`, text, required/optional): Enter the name of the person who referred you to the company.
* **job_title** (`job_title`, select_multiple, required/optional): Select the job titles that best fit your job description.
* **job_title_2** (`job_title_2`, select_one, required/optional): Select another job title that best fits your job description.
* **job_title_3** (`job_title_3`, select_multiple, required/optional): Select more job titles that best fit your job description.
* **department** (`department`, select_multiple, required/optional): Select the departments you are interested in applying for.
* **email** (`email`, email, required/optional): Enter your email address.
* **contact_number** (`contact_number`, text, required/optional): Enter your contact number.
* **job_posting_date** (`job_posting_date`, date, required/optional): Enter the date when the job was posted.
* **job_posting_time** (`job_posting_time`, time, required/optional): Enter the time when the job was posted.
* **job_type** (`job_type`, select_one, required/optional): Select the type of job you are applying for.
* **job_level** (`job_level`, select_multiple, required/optional): Select the level of the job you are applying for.
* **salary** (`salary`, number, required/optional): Enter the salary range you are expecting.
* **referral_source_2** (`referral_source_2`, select_one, required/optional): Indicate whether or not you were referred to the company again.
