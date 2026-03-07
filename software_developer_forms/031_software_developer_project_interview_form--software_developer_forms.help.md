<thinking>
To determine the purpose of this form, we need to analyze the fields and their types. This form seems to be designed for a software development project, possibly for hiring a software developer. The purpose of the form is to collect information about the candidate, their experience, education, and job preferences. The fields cover various aspects, including personal details, technical skills, work history, and job expectations.

Upon closer inspection, we can see that the form is asking for both specific details (e.g., first name, last name, email, phone) and more abstract information (e.g., work experience, job description, job requirements). This suggests that the form is not only used for basic contact information but also for more in-depth analysis of the candidate's qualifications and preferences.

Before proceeding, we need to check if this form has been filled out before. To do this, we'll review the fields and their required flags. All fields are marked as required, indicating that this form is a comprehensive survey of the candidate's information. This suggests that the form has not been designed for a simple "one-time" use case.

After confirming the purpose and checking for duplication, let's create the help guide.
</thinking>

# Software Developer Project Interview Form - Help Guide
## Purpose
This form is designed to collect information from software developers applying for a project position. It will help us understand your qualifications, experience, and job preferences to better match you with suitable projects.

## How To Complete This Form
To complete this form, please fill out all the required fields, which are marked with a red asterisk (\*) or indicated as "required" in the field label. Make sure to double-check your details for accuracy.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, **Required**): Enter your first name as it is spelled on your identification documents.
* **Last Name** (`last_name`, text, **Required**): Enter your last name as it is spelled on your identification documents.
* **Email** (`email`, email, **Required**): Enter your professional email address that you check regularly.
* **Phone** (`phone`, text, **Required**): Enter your phone number that we can use to contact you.
* **Date of Birth** (`date_of_birth`, date, **Required**): Enter your date of birth in the format YYYY-MM-DD.
* **Job Title** (`job_title`, text, **Required**): Enter the title of your current or most recent job.
* **Work Experience** (`work_experience`, text, **Required**): Describe your relevant work experience, including job titles, companies, and dates of employment.
* **Education** (`education`, text, **Required**): Describe your educational background, including institutions and degrees earned.
* **Languages** (`languages`, select_multiple, **Required**): Select all programming languages you are proficient in. Examples: Java, Python, C++.
* **Programming Skills** (`programming_skills`, select_multiple, **Required**): Select all programming skills you possess. Examples: Proficient in C, C++; Proficient in Java, Python; Proficient in Java, Python, C++.
* **Available For** (`available_for`, date, **Required**): Enter the date you are available to start work.
* **Expected Salary** (`expected_salary`, text, **Required**): Enter your expected salary range (e.g., "50,000 - 70,000" for a range of 50,000 to 70,000).
* **Notice Period** (`notice_period`, time, **Required**): Enter your notice period, which is the amount of time you would need to adjust to a new work environment.
* **Notice Period Unit** (`notice_period_unit`, text, **Required**): Select the unit of time for your notice period (e.g., "weeks", "months").
* **Notice Period Note** (`notice_period_note`, text, **Required**): Enter any additional notes about your notice period.
* **Work Experience (Years)** (`work_experience_years`, number, **Optional**): If you have less than 5 years of work experience, please enter 0.
* **Education Level** (`education_level`, select_one, **Required**): Select your highest level of education earned.
* **Job Status** (`job_status`, select_one, **Required**): Select your current job status.
* **Job Type** (`job_type`, select_one, **Required**): Select the type of job you are looking for.
* **Job Description** (`job_description`, text, **Required**): Briefly describe the job you are looking for.
* **Job Requirements** (`job_requirements`, text, **Required**): List the essential and nice-to-have qualifications and skills for the position you are applying for.
* **Candidate Notes** (`candidate_notes`, text, **Required**): Enter any additional notes about yourself that would be useful for us to know.
* **Team Size** (`team_size`, text, **Required**): Estimate the size of the team you would be working with (e.g., 1, 2-5, 10-20).
* **Team Description** (`team_description`, text, **Required**): Briefly describe the team you would be working with.
* **Submit** (`submit`, text, **Required**): Once you have filled out all the required fields, click the "Submit" button to send your application.
