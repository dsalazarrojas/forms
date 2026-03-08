<thinking>As a form expert, I will create a user-facing help guide for the "recruitment application form" that is clear, concise, and practical. I will base the explanation on the provided YAML fields and provide a detailed field-by-field explanation to ensure users understand the form's purpose, how to complete it, and what each field means. The guide will be in Markdown format, following the required structure: # recruitment application form - Help Guide, with sections on "Purpose", "How To Complete This Form", "Field-by-Field Explanation", and "Tips".</thinking>

# recruitment application form - Help Guide
## Purpose
The "Recruitment Application Form" is a tool used by organizations to collect information from applicants interested in a job opening. This form helps to gather relevant data about the applicant, such as their job title, contact information, education background, skills, and job experience. The collected data is then used to filter and evaluate potential candidates for the position.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by selecting the job title of the position you are applying for.
2. Enter your name and email address as it appears on your identification documents.
3. Upload your resume in a format that can be read by the system, such as PDF or Word Document.
4. In the "Work Experience" field, provide a brief description of your previous work experience relevant to the job.
5. In the "Education" field, mention your educational background and degrees earned.
6. Select the skills you possess that match the job requirements from the list provided.
7. Choose your current job status from the options provided.
8. Enter the type of job you are applying for and the location where you would like to work.
9. Review and submit your application.

## Field-by-Field Explanation
* **Job Title** (`job_title`, text, required: false): Enter the title of the job you are applying for.
* **Name** (`name`, text, required: false): Enter your full name as it appears on your identification documents.
* **Email** (`email`, email, required: false): Enter a valid email address where you can be reached.
* **Resume** (`resume`, text, required: false): Upload a resume in a format that can be read by the system.
* **Work Experience** (`work_experience`, text, required: false): Describe your previous work experience relevant to the job.
* **Education** (`education`, text, required: false): Mention your educational background and degrees earned.
* **Skills** (`skills`, select_multiple, required: false):
	+ IT
	+ Programming
	+ Data Analysis
* **Job Status** (`job_status`, select_one, required: false):
	+ Active
	+ Inactive
	+ Retired
* **Job Type** (`job_type`, text, required: false): Enter the type of job you are applying for.
* **Job Location** (`job_location`, text, required: false): Enter the location where you would like to work.

## Tips
* Make sure to upload a valid resume in a format that can be read by the system.
* Use the skills section to highlight your relevant skills that match the job requirements.
* Be specific when describing your work experience and education background.
* Review your application carefully before submitting it.
