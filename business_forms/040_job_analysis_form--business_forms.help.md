<thinking>
We need to ensure that this form is used correctly by end-users, as it will help us understand more about jobs within the organization. To achieve this, it's essential to document the form's purpose, how to complete it, and what each field is for, so we can avoid misinterpretation and misfilling. We should also check for any potential overlaps or duplications in the form fields to prevent inconsistencies in the data collected.
</thinking>

# Job Analysis Form - Help Guide
## Purpose
The Job Analysis Form is designed to gather information about jobs within the organization. It helps us understand job details, status, and other relevant factors that can impact our operations.

## How To Complete This Form
1. Fill in the Job Title and Job Description fields to provide a clear understanding of the job.
2. Select the Job Status to indicate the current state of the job.
3. Enter the Work Hours to specify the expected work hours for the job.
4. Enter the Employee Name to associate the job with the relevant employee.
5. Choose the Job Category to categorize the job.
6. Select the Job Level to indicate the complexity or priority of the job.
7. Enter the Date Employment to specify when the employee started working on the job.
8. Enter the Time Employment to specify the time spent on the job.
9. Provide a detailed Job Analysis in the notes field to describe any specific requirements or challenges related to the job.

## Field-by-Field Explanation
* **Job Title** (`job_title`, text, required/optional): Enter the title of the job, such as "Software Developer" or "Marketing Manager".
* **Job Description** (`job_description`, text, required/optional): Describe the job responsibilities and expectations.
* **Job Status** (`job_status`, number, required/optional): Choose the current status of the job, such as "Active" or "In Progress".
* **Work Hours** (`work_hours`, number, required/optional): Specify the expected number of work hours for the job.
* **Employee Name** (`employee_name`, text, required/optional): Enter the name of the employee assigned to the job.
* **Job Category** (`job_category`, select_one, required/optional): Choose whether the job is "Yes" or "No" in the job category.
* **Job Level** (`job_level`, select_multiple, required/optional): Indicate the job level by selecting "High" or "Low".
* **Date Employment** (`date_employment`, date, required/optional): Enter the date the employee started working on the job.
* **Time Employment** (`time_employment`, time, required/optional): Specify the time spent on the job, e.g., "08:00 - 17:00".
* **Job Analysis** (`job_analysis`, note, required/optional): Provide a detailed description of any specific requirements or challenges related to the job.
