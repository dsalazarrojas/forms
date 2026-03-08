<thinking>
To create a help guide for the Volunteer Hours Submission Form, I will first analyze the form purpose and identify any potential issues with non-duplication or irrelevant fields. Upon review, it appears that the form is designed to collect volunteer hours submitted by individuals, including details such as name, organization, position, hours worked, date, and description of hours spent. The form also includes fields for non-qualified hours, reasons for non-qualification, and approval status. The fields seem relevant and well-structured for the purpose of collecting and tracking volunteer hours. However, it's essential to double-check that there are no duplicate fields and that the form is not overly complicated for end-users.</thinking>

# Volunteer Hours Submission Form - Help Guide
## Purpose
The Volunteer Hours Submission Form is designed to collect volunteer hours from individuals, allowing organizations to track and verify the accuracy of reported hours.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First Name**, **Last Name**, and **Email** fields with your personal information.
2. Select your **Organization** and **Position** to identify your affiliation with the organization.
3. Enter the **Hours Worked** you have contributed to the organization.
4. Specify the **Date** you spent working on the project.
5. Provide a brief **Description** of the hours you spent working.
6. If applicable, select the number of **Non-qualified Hours** you spent.
7. Choose the **Non-qualified Reasons** for any non-qualified hours.
8. Select the **Submitted For** category (Non-profit Organization, School, or Community Service Organization).
9. Confirm your identity by entering your **Submitted By Email**.
10. Finally, confirm your submission.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Organization** (`organization`, text, required): Enter the name of the organization you are affiliated with.
* **Position** (`position`, text, required): Enter your position within the organization.
* **Hours Worked** (`hours_worked`, number, required): Enter the total hours spent working on the project.
* **Date** (`date`, date, required): Enter the date you spent working on the project.
* **Time Spent** (`time_spent`, time, required): Enter the time spent working on the project.
* **Description** (`description`, note, required): Provide a brief description of the hours spent working.
* **Non-qualified Hours** (`non_qualified_hours`, number, optional): Enter any non-qualified hours spent.
* **Non-qualified Reasons** (`non_qualified_reasons`, text, optional): Enter reasons for any non-qualified hours.
* **Non-qualified Comments** (`non_qualified_comments`, text, optional): Enter comments for any non-qualified hours.
* **Hours Approved** (`hours_approved`, select_one, required): Select the approval status (Approved, Pending, Rejected).
* **Comments** (`comments`, text, optional): Enter comments for the approved hours.
* **Hours Approved Reasons** (`hours_approved_reasons`, text, optional): Enter reasons for the approved hours.
* **Hours Rejected Reasons** (`hours_rejected_reasons`, text, optional): Enter reasons for the rejected hours.
* **Hours Rejected Comments** (`hours_rejected_comments`, text, optional): Enter comments for the rejected hours.
* **Submitted By** (`submitted_by`, text, required): Enter your name.
* **Submitted By Email** (`submitted_by_email`, email, optional): Enter your email address (if different from email).
* **Submitted On** (`submitted_on`, date, required): Enter the date of submission.
* **Hours Rejected** (`hours_rejected`, text, optional): Enter comments for rejected hours.
* **Hours Approved** (`hours_approved`, select_one, required): Select the approval status (Approved, Pending, Rejected).
* **Confirm** (`confirm`, text, required): Confirm your submission.
