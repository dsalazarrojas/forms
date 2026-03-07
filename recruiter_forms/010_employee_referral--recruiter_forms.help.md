<thinking>
We are implementing an employee referral system to help employees recommend qualified candidates for open positions within the company. This form is used to gather information about the referred candidate and the job opening. Please fill out this form carefully and thoroughly to provide the most accurate information.
</thinking>

# Employee Referral - Help Guide

## Purpose
The Employee Referral form is designed to collect information about a referred candidate and job opening. This form will help ensure that the candidate's details are accurate and up-to-date, and will be used to match them with suitable job openings.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully and answer each question to the best of your ability.
2. Select the correct options for each field from the provided dropdown menus.
3. Provide accurate and up-to-date information about the candidate.
4. Double-check your answers before submitting the form.

## Field-by-Field Explanation

* **Job Title** (`job_title`, select_one, required: false): Select the job title that the referred candidate is applying for.
* **Department** (`department`, select_one, required: false): Select the department the referred candidate would be working in.
* **Job Type** (`job_type`, select_one, required: false): Choose the type of job the referred candidate is applying for (Full-time, Part-time, or Intern).
* **Contact Email** (`contact_email`, email, required: false): Enter the candidate's email address.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the candidate's phone number.
* **Contact Other** (`contact_other`, text, required: false): If no other contact information is available, enter any other relevant details.
* **Referral Source** (`referral_source`, select_one, required: false): Select the source of the referral (Manager, Colleague, or Social Media).
* **First Name** (`first_name`, text, required: false): Enter the candidate's first name.
* **Middle Name** (`middle_name`, text, required: false): Enter the candidate's middle name.
* **Last Name** (`last_name`, text, required: false): Enter the candidate's last name.
* **Company** (`company`, text, required: false): Enter the company the candidate is working for or would be working for.
* **Job Description** (`job_description`, text, required: false): Briefly describe the job opening and the responsibilities the candidate would have.
* **Salary Range** (`salary_range`, number, required: false): Enter a salary range for the job opening.
* **Experience** (`experience`, select_one, required: false): Select the candidate's experience level (1-2 years, 2-5 years, 5-10 years, or more than 10 years).
* **Education** (`education`, select_one, required: false): Select the candidate's highest level of education (Bachelor, Master, or Ph.D.).
* **Language** (`language`, select_one, required: false): Select the languages the candidate speaks.
* **Certifications** (`certifications`, select_multiple, required: false): Check if the candidate has any relevant certifications.
* **Notes** (`notes`, note, required: false): Add any additional notes or comments about the candidate.
* **Next Steps** (`next_steps`, select_one, required: false): Check if the candidate is available for next steps (interviews, etc.).
* **Interviewers** (`interviewers`, select_multiple, required: false): Check if the candidate is available for interviews.
* **Interview Dates** (`interview_dates`, date, required: false): Enter the dates of the interviews.
* **Interview Times** (`interview_times`, time, required: false): Enter the times of the interviews.
* **Interview Locations** (`interview_locations`, select_one, required: false): Select the location of the interviews (Office, Home, or Online).
* **Submit** (`submit`, text, required: false): Enter your name and title, and a brief reason for the referral.
