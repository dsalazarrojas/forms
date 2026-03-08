# Hospital Job Application Form - Help Guide
## Purpose
The Hospital Job Application Form is designed to collect essential information from applicants applying for jobs at a hospital. By completing this form, applicants can provide the necessary details for the hiring process.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your First Name and Last Name in the respective fields.
2. Enter your Email address to ensure we can contact you about your application.
3. Provide your Phone number so we can reach out to you.
4. Select your Job Title from the available options.
5. Choose your Work Experience from the options provided.
6. Enter your availability to work.
7. If applicable, select the time you are available to work.
8. Add any additional comments or notes about your application.
9. If you have attended medical school, select the relevant option.
10. If you have a medical license, select the status.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, email, required): Enter your email address that we can use to contact you about your application.
* **Phone** (`phone`, text, required): Enter your phone number where we can reach out to you.
* **Job Title** (`job_title`, select_multiple, required): Select the job title you are applying for.
* **Work Experience** (`work_experience`, select_one, required): Select your level of work experience from Less than 1 year, 1-2 years, or More than 2 years.
* **Available to Work** (`available_to_work`, date, required): Enter your availability to work date in the format YYYY-MM-DD.
* **Available to Work Time** (`available_to_work_time`, time, required): Enter your availability to work time in the format HH:MM.
* **Note** (`note`, note, required): Add any additional comments or notes about your application.
* **Medical School** (`medical_school`, select_multiple, optional): If you have attended medical school, select 'Yes', otherwise select 'No'.
* **Medical License** (`medical_license`, select_one, optional): Select the status of your medical license as Active, Expired, or Not applicable.
