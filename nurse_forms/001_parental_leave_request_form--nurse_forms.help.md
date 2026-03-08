# Parental_leave_request_form - Help Guide
## Purpose
The "Parental Leave Request Form" is used to request parental leave for an employee, which includes information such as the start and end dates of the leave, reason for the request, and the type of leave. The form also requires the approver (manager) to review and approve or decline the request.

## How To Complete This Form
To complete the form, follow these steps:
1. Fill in your personal information, such as your employee ID, employee name, and contact email.
2. Select the type of leave (Maternity, Paternity, or Parental) you are requesting.
3. Enter the start and end dates of your leave period.
4. Enter a reason for your leave request.
5. Enter your number of children.
6. Select the department where your manager works.
7. Have your manager approve or decline your request.
8. Enter their comments, if any.
9. Sign and date the form for both you and your manager.

## Field-by-Field Explanation
* **Parental Leave Request** (`1`, `required`, `text`): This is the title of the form.
* **Start Date** (`2`, `required`, `date`): Enter the start date of your leave period.
* **End Date** (`3`, `required`, `date`): Enter the end date of your leave period.
* **Reason** (`4`, `required`, `text`): Enter a brief reason for your leave request.
* **Number of Children** (`5`, `required`, `number`): Enter the number of children you are leaving for.
* **Type of Leave** (`6`, `required`, `select_one`): Select the type of leave (Maternity, Paternity, or Parental).
* **Expected Return Date** (`7`, `required`, `date`): Enter the expected return date after your leave.
* **Contact Info** (`8`, `optional`, `text`): Enter your contact information for any additional comments or questions.
* **Department** (`9`, `required`, `select_one`): Select the department where your manager works.
* **Manager Approval** (`10`, `required`, `select_multiple`): Select "Approve" or "Decline" for your manager's approval.
* **Comments** (`11`, `optional`, `text`): Enter any comments from your manager.
* **Signature** (`12`, `required`, `text`): Sign and date the form for yourself.
* **Employee ID** (`13`, `required`, `number`): Enter your employee ID number.
* **Employee Name** (`14`, `required`, `text`): Enter your full name.
* **Email** (`15`, `required`, `email`): Enter your email address.
* **Manager Signature** (`16`, `required`, `text`): Sign and date the form for your manager.
* **Manager Name** (`17`, `required`, `text`): Enter your manager's name.
* **Manager Email** (`18`, `required`, `email`): Enter your manager's email address.
* **Manager Phone** (`19`, `required`, `text`): Enter your manager's phone number.
* **Manager Department** (`20`, `optional`, `text`): Enter your manager's department.
* **Manager Title** (`21`, `optional`, `text`): Enter your manager's title.
* **Manager Comments** (`22`, `optional`, `text`): Enter any additional comments from your manager.
* **Manager Date** (`23`, `optional`, `date`): Enter the date your manager reviewed and approved/delined your request.
* **Manager Time** (`24`, `optional`, `time`): Not relevant to this form, as no time fields should be included.
* **Manager Signature 2** (`25`, `optional`, `text`): This field is not required and can be ignored, as it is not necessary for the form.

## Tips
- Make sure to sign and date the form for both you and your manager.
- Enter accurate and complete information to ensure a smooth approval process.
- Review your manager's comments and approval status before submitting the form.
- Ensure your manager's department is accurately selected to ensure correct approval routing.
