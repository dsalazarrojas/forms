# Employee Complaint Form - Help Guide
## Purpose
The Employee Complaint Form is a tool for employees to report concerns or issues they may have regarding their work environment, colleagues, or management. This form is for internal use only and is not a formal grievance process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields (marked as required in the form) with your information.
2. Provide a brief description of the complaint or issue in the `complaint_description` field.
3. Indicate if the complaint is against a colleague, manager, or if it's a general issue in the `complaint_against` field.
4. Enter the date and time of the incident in the `date` and `time` fields.
5. If relevant, enter your supervisor's ID in the `supervisor_id` field.
6. If you have a personal note or comment, enter it in the `note` field.
7. Enter your email address in the `email` field.
8. Enter your phone number in the `phone` field.
9. Select how you would like to submit this form - either directly or to discuss further with management.
10. Finally, submit the form by selecting "Submit" or "Other" as appropriate.

## Field-by-Field Explanation
- **Employee ID** (`employee_id`, number, optional): Your employee ID number, for reference and record-keeping purposes.
- **Employee Complaint Form** (`employee_complaint_form`, text, not required): A field to provide a brief description of the complaint or issue.
- **Complaint Against** (`complaint_against`, select_one, not required): Indicate if the complaint is against a colleague, manager, or if it's a general issue.
  - Options:
    - Yes: If the complaint is against a colleague or manager.
    - No: If the complaint is general or not specifically against anyone.
- **Complaint Description** (`complaint_description`, text, not required): Provide a brief description of the complaint or issue.
- **Senior Manager ID** (`senior_manager_id`, number, not required): The ID of the senior manager you report to, if applicable.
- **Supervisor ID** (`supervisor_id`, number, not required): The ID of your direct supervisor, if applicable.
- **Date** (`date`, date, not required): The date of the incident.
- **Time** (`time`, time, not required): The time of the incident.
- **Note** (`note`, note, not required): A personal note or comment about the complaint.
- **Email** (`email`, email, not required): Your email address.
- **Phone** (`phone`, text, not required): Your phone number.
- **Submit Form** (`submit`, select_one, not required): How would you like to submit this form?
  - Options:
    - Submit: Directly submit the form as is.
    - Other: Discuss further with management before submitting.

Note: Some fields are optional, but filling them out will help us better understand and address the issue.
