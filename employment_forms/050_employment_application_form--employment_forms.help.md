<thinking>
To confirm that the form is being used for employment applications, we should review the form's fields and determine if there's any overlap or redundancy. From the provided YAML, we notice that the form collects a variety of information about applicants, including personal details, job preferences, and professional experience. It seems like the form is designed for job seekers to apply for a job or position within an agency or company.

Upon reviewing the form structure, we can see that there are fields for the applicant's first name, last name, email, job title, and contact number, which are all standard fields in an employment application form. Additionally, the form includes fields for job title description, work experience, and job preferences, which are also relevant for employment applications. However, some fields like "notice period" and "salary range" might be more suitable for internal use within the company or agency, and could potentially be removed or reworded for clarity.

The form also includes fields for emergency contact information, which could be useful for internal use but might not be directly relevant for the applicant's personal information. The "assigned tool" field seems to be more related to internal processes or systems, and could also be considered for removal or rewording.

The form appears to be comprehensive in terms of collecting relevant information for employment applications. However, some fields might be more suitable for internal use or could be reworded for better clarity and concision.

</thinking>

# Employment Application Form - Help Guide
## Purpose
This form is designed for job seekers to apply for a job or position within an agency or company. It collects information about the applicant's personal details, job preferences, and professional experience.

## How To Complete This Form
1. Fill in your first and last name in the "First Name" and "Last Name" fields.
2. Enter your email address in the "Email" field.
3. Provide your job title and description in the "Job Title" and "Job Title Description" fields.
4. Select your employment status (Employed, Unemployed, or Retired) in the "Employment Status" field.
5. Choose your work experience in the "Work Experience" field.
6. Enter your availability in the "Availability" field (if applicable).
7. Select your desired salary in the "Desired Salary" field.
8. Enter your contact number in the "Contact Number" field.
9. If you have an emergency contact, enter their name, contact number, and relationship in the "Emergency Contact Name", "Emergency Contact Number", and "Relationship" fields (if applicable).
10. Select the assigned tool that you are familiar with from the "Assigned Tool" field.
11. Review and submit the form.

## Field-by-Field Explanation

* **First Name** (`user_input`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, email, required): Enter your email address.
* **Job Title** (`job_title`, text, required): Enter your job title as it is relevant to the position you are applying for.
* **Job Title Description** (`job_title_description`, note, optional): Provide a brief description of your job title.
* **Resume** (`resume`, text, optional): Attach a copy of your resume or provide a link to it.
* **Contact Number** (`contact_number`, text, required): Enter your contact number.
* **Employment Status** (`employment_status`, select_one, required): Select your current employment status.
* **Work Experience** (`work_experience`, select_multiple, required): Select your relevant work experience.
* **Availability** (`availability`, date, optional): Enter your availability (if applicable).
* **Notice Period** (`notice_period`, date, optional): Enter the notice period (if applicable).
* **Salary Range** (`salary_range`, number, optional): Enter your expected salary range (if applicable).
* **Desired Salary** (`desired_salary`, number, required): Enter your desired salary.
* **Notice Period** (`notice_period`, date, optional): Enter the notice period (if applicable).
* **Time Unit** (`notice_period_unit`, select_one, required): Select the unit for the notice period (days, hours, or minutes).
* **Available Shifts** (`available_shifts`, select_multiple, optional): Select the shifts you are available to work.
* **Job Preferences** (`job_preferences`, note, optional): Provide any job preferences or requirements.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Enter the name of your emergency contact.
* **Emergency Contact Number** (`emergency_contact_number`, text, optional): Enter the contact number of your emergency contact.
* **Relationship** (`emergency_contact_relationship`, select_one, optional): Select your relationship with the emergency contact.
* **Job Title Id** (`job_title_id`, select_one, optional): Select your job title id (if applicable).
* **Job Title Description Id** (`job_title_description_id`, select_one, optional): Select your job title description id (if applicable).
* **Employment Agency** (`employment_agency`, text, optional): Enter the name of the employment agency.
* **Employment Agency Id** (`employment_agency_id`, select_one, optional): Select the id of the employment agency.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the assigned tool that you are familiar with.
</thinking>

# Employment Application Form - Help Guide

## Purpose
This form is designed for job seekers to apply for a job or position within an agency or company. It collects information about the applicant's personal details, job preferences, and professional experience.

## How To Complete This Form
1. Fill in your first and last name in the "First Name" and "Last Name" fields.
2. Enter your email address in the "Email" field.
3. Provide your job title and description in the "Job Title" and "Job Title Description" fields.
4. Select your employment status (Employed, Unemployed, or Retired) in the "Employment Status" field.
5. Choose your work experience in the "Work Experience" field.
6. Enter your availability in the "Availability" field (if applicable).
7. Select your desired salary in the "Desired Salary" field.
8. Enter your contact number in the "Contact Number" field.
9. If you have an emergency contact, enter their name, contact number, and relationship in the "Emergency Contact Name", "Emergency Contact Number", and "Relationship" fields (if applicable).
10. Select the assigned tool that you are familiar with from the "Assigned Tool" field.
11. Review and submit the form.

## Field-by-Field Explanation

* **First Name** (`user_input`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, email, required): Enter your email address.
* **Job Title** (`job_title`, text, required): Enter your job title as it is relevant to the position you are applying for.
* **Job Title Description** (`job_title_description`, note, optional): Provide a brief description of your job title.
* **Resume** (`resume`, text, optional): Attach a copy of your resume or provide a link to it.
* **Contact Number** (`contact_number`, text, required): Enter your contact number.
* **Employment Status** (`employment_status`, select_one, required): Select your current employment status.
* **Work Experience** (`work_experience`, select_multiple, required): Select your relevant work experience.
* **Availability** (`availability`, date, optional): Enter your availability (if applicable).
* **Notice Period** (`notice_period`, date, optional): Enter the notice period (if applicable).
* **Salary Range** (`salary_range`, number, optional): Enter your expected salary range (if applicable).
* **Desired Salary** (`desired_salary`, number, required): Enter your desired salary.
* **Notice Period** (`notice_period`, date, optional): Enter the notice period (if applicable).
* **Time Unit** (`notice_period_unit`, select_one, required): Select the unit for the notice period (days, hours, or minutes).
* **Available Shifts** (`available_shifts`, select_multiple, optional): Select the shifts you are available to work.
* **Job Preferences** (`job_preferences`, note, optional): Provide any job preferences or requirements.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Enter the name of your emergency contact.
* **Emergency Contact Number** (`emergency_contact_number`, text, optional): Enter the contact number of your emergency contact.
* **Relationship** (`emergency_contact_relationship`, select_one, optional): Select your relationship with the emergency contact.
* **Job Title Id** (`job_title_id`, select_one, optional): Select your job title id (if applicable).
* **Job Title Description Id** (`job_title_description_id`, select_one, optional): Select your job title description id (if applicable).
* **Employment Agency** (`employment_agency`, text, optional): Enter the name of the employment agency.
* **Employment Agency Id** (`employment_agency_id`, select_one, optional): Select the id of the employment agency.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the assigned tool that you are familiar with.
