# Job Placement Specialist Recommendation Form - Help Guide
## Purpose
The Job Placement Specialist Recommendation Form is used to gather information about a candidate's job placement history and current job status for internal candidate applications or new hires.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the candidate's information in the "candidate info" field.
2. Select the job title the candidate has or had in the past.
3. Enter the start and end dates of the candidate's previous employment.
4. Choose the type of job the candidate had (e.g. Software Developer, Data Analyst, etc.).
5. Select the current status of the candidate's job (e.g. Active, Inactive, etc.).
6. Provide any additional information about the candidate's manager or supervisor.
7. Add any comments or notes about the candidate's job placement history.
8. Finally, make a recommendation about whether to hire or not hire the candidate.

## Field-by-Field Explanation

* **Candidate Info** (`candidate_info`, text, required): Enter the candidate's full name, email, and any other relevant contact information.
* **Job Title** (`job_title`, text, required): Select the title of the job the candidate had or is applying for (e.g. Software Developer, Data Analyst, etc.).
* **Job Start Date** (`job_start_date`, date, required): Enter the date the candidate started their previous job.
* **Job End Date** (`job_end_date`, date, required): Enter the date the candidate ended their previous job.
* **Job Type** (`job_type`, select_one, required): Choose the type of job the candidate had (e.g. Software Developer, Data Analyst, etc.).
* **Job Status** (`job_status`, select_multiple, required): Select all current statuses of the candidate's job (e.g. Active, Inactive, etc.).
* **Manager Info** (`manager_info`, text, required): Provide any additional information about the candidate's manager or supervisor.
* **Recommendation** (`recommendation`, note, required): Add any comments or notes about the candidate's job placement history.
* **Job Recommendation** (`job_recommendation`, select_one, required): Make a recommendation about whether to hire or not hire the candidate (e.g. Hire, Not Hire, etc.).
* **Comments** (`comments`, text, optional): Add any additional comments about the candidate.
* **Comments** (`comments`, text, optional): Add any additional comments about the candidate. (Note: This field is not required, but can be useful for additional information.)
