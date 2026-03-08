<thinking>As a form designer and technical writer, I need to create a user-facing help guide for the "exit_interview_survey" form. This form is designed to collect information from employees who are leaving the company, and it's essential to make sure that end-users understand its purpose and how to complete it correctly.

The form is called the "exit_interview_survey" because it aims to gather insights and feedback from departing employees to improve the organization's human resources processes and employee experience. It's a crucial tool for HR teams to identify areas of improvement and make data-driven decisions.

This form is designed to be completed by departing employees who are leaving the company voluntarily or involuntarily. It's essential that end-users take the time to complete this form accurately and thoroughly to provide valuable insights for the HR team.

Before we dive into the step-by-step instructions, I'll review the form schema to ensure that everything is clear and concise.

</thinking>

# exit_interview_survey - Help Guide
## Purpose
The exit_interview_survey form is designed to gather feedback and insights from departing employees to improve the company's human resources processes and employee experience. This information will help the HR team identify areas of improvement and make data-driven decisions.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the introduction page, which provides a brief overview of the form's purpose and instructions.
2. Select one reason for leaving from the dropdown menu.
3. Provide your comments on the reason for leaving in the "comments" field.
4. Suggest any ideas or improvements for the company in the "suggestions" field.
5. Enter your supervisor's contact information, including their name, email address, and phone number.
6. Enter your supervisor's job title and department (if applicable).
7. Write any final comments or thoughts in the "final comments" field.

## Field-by-Field Explanation

* **Introduction** (`Introduction`, Note, Required: False): This page provides a brief overview of the form's purpose and instructions.
* **Reason for Leaving** (`reason_for_leaving`, Select One, Required: True): Select one reason for leaving from the dropdown menu. This field helps the HR team understand the primary reason for your departure.
* **Comments** (`comments`, Text, Required: True): Provide a brief description of why you selected the reason for leaving. This will help the HR team understand your perspective.
* **Suggestions** (`suggestions`, Select Multiple, Required: True): Suggest any ideas or improvements for the company. This field is open-ended, so don't be afraid to share your thoughts.
* **Contact Info** (`contact_info`, Email, Required: False): Enter your supervisor's contact information (email address) in case they need to follow up with you.
* **Supervisor Name** (`supervisor_name`, Text, Required: True): Enter your supervisor's name.
* **Supervisor Email** (`supervisor_email`, Text, Required: True): Enter your supervisor's email address.
* **Supervisor Title** (`supervisor_title`, Text, Required: False): Enter your supervisor's job title (if applicable).
* **Supervisor Department** (`department`, Text, Required: False): Enter your supervisor's department (if applicable).
* **Supervisor Phone** (`supervisor_phone`, Text, Required: False): Enter your supervisor's phone number.
* **Supervisor Ext** (`supervisor_ext`, Text, Required: False): Enter your supervisor's extension number.
* **Supervisor Notes** (`supervisor_notes`, Text, Required: False): Enter any additional information about your supervisor.
* **Final Comments** (`final_comments`, Text, Required: False): Enter any final comments or thoughts you'd like to share.
