# Employee Productivity Webinar Registration Form - Help Guide
## Purpose
The Employee Productivity Webinar Registration Form is designed to gather information from employees about their plans to attend the Employee Productivity Webinar. This form will help us understand who is attending and how they would like to receive their confirmation.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First name, Last name, and other required fields.
2. Provide your email address where we can reach you.
3. If your manager is also attending, fill in their name and email address.
4. Choose the preferred date and time for the webinar.
5. Confirm your attendance by selecting "True" or choose "Maybe" if unsure.
6. Enter any notes about the webinar.
7. Choose how you would like to receive your confirmation (by email or phone).
8. Provide any additional comments about the webinar.

## Field-by-Field Explanation
- **First name** (`first_name`, text, required): Enter your first name.
- **Last name** (`last_name`, text, required): Enter your last name.
- **Email** (`email`, email, required): Enter your email address.
- **Phone** (`phone`, text, optional): Enter your phone number.
- **Job title** (`job_title`, text, optional): Enter your job title.
- **Company** (`company`, text, optional): Enter your company name.
- **Manager name** (`manager_name`, text, required if manager is attending, optional otherwise): Enter your manager's name.
- **Manager email** (`manager_email`, email, required if manager is attending, optional otherwise): Enter your manager's email address.
- **Manager phone** (`manager_phone`, text, optional): Enter your manager's phone number.
- **Webinar date** (`webinar_date`, date, optional): Choose the date you would like to attend the webinar.
- **Webinar time** (`webinar_time`, time, optional): Choose the time you would like to attend the webinar.
- **Attendance** (`attendance`, select_one, required): Confirm your attendance by selecting "True", "False", or "Maybe".
- **Notes** (`notes`, note, optional): Enter any notes about the webinar.
- **Confirm email** (`confirm_email`, select_multiple, optional): Choose how you would like to receive your confirmation (by email or phone).
- **Comments** (`comments`, text, optional): Enter any additional comments about the webinar.
- **Confirm webinar** (`confirm_webinar`, select_multiple, optional): Choose how you would like to receive your confirmation (by email or phone).
