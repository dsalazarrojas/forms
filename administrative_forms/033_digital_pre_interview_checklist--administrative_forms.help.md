<thinking>...</thinking>

# Digital Pre Interview Checklist - Help Guide
## Purpose
This form is a pre-screening tool designed to collect information from candidates before a face-to-face interview. It will help interviewers assess whether a candidate meets the required criteria for the position, and make more informed decisions during the interview process.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Enter the candidate's name, job title, and contact information.
2. Choose the candidate's experience in years and their education level (if applicable).
3. Select the candidate's salary range and available start date.
4. Choose their current work status and notice period.
5. Select the type of job they are applying for (full-time, part-time, or contract).
6. Enter any additional information that may be relevant to the interview.

## Field-by-Field Explanation
* **Candidate Information** (`candidate_info`, `text`, required: false): Enter the candidate's name and any other relevant details.
* **Job Title** (`job_title`, `text`, required: false): Enter the title of the job the candidate is applying for.
* **Salary Range** (`salary_range`, `select_one`, required: false): Choose the candidate's expected salary range from the options provided:
	+ $30,000-$50,000
	+ $50,001-$75,000
	+ $75,001-$100,000
	+ Other (please specify in the "Additional Information" field)
* **Experience** (`experience`, `select_multiple`, required: false): Select the candidate's level of experience:
	+ 1-5 years
	+ 6-10 years
	+ More than 10 years
* **Education** (`education`, `text`, required: false): Enter any relevant education information (e.g. degree, institution, completion date).
* **Available Start Date** (`available_start_date`, `date`, required: false): Enter the date the candidate is available to start work.
* **Work Status** (`work_status`, `select_one`, required: false): Choose the candidate's current work status:
	+ Active
	+ Retired
	+ Other (please specify in the "Additional Information" field)
* **Notice Period** (`notice_period`, `number`, required: false): Enter the number of days notice the candidate is required to give if hired.
* **Job Type** (`job_type`, `select_one`, required: false): Choose the type of job the candidate is applying for:
	+ Full-time
	+ Part-time
	+ Contract
	+ Other (please specify in the "Additional Information" field)
* **Contact Info** (`contact_info`, `text`, required: false): Enter the candidate's contact information (phone number, email, etc.).
