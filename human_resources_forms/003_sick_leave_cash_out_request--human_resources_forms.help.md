# Sick Leave Cash Out Request - Help Guide
## Purpose
This form is for requesting a sick leave cash out, which allows employees to receive pay for accrued sick leave hours. The form is typically submitted to the HR department, but in some cases may also be submitted to a manager. The goal of this form is to provide detailed information about the employee's request, including their contact information and the department and branch they belong to.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required employee information: name, email, and phone number.
2. Select the department, division, branch, and job position that the employee belongs to.
3. Provide the date of the sick leave cash out request.
4. Enter the amount of money requested.
5. Choose the submission status and add any comments or notes as needed.

## Field-by-Field Explanation
- **Employee** (`employee`, text, required): Enter your name.
- **Date** (`date`, date, optional): Enter the date of the sick leave cash out request. If you don't have this information, you can leave it blank.
- **Reason** (`reason`, text, optional): Explain the reason for your sick leave cash out request.
- **Amount Requested** (`amount_requested`, number, required): Enter the amount of money you are requesting for the sick leave cash out.
- **Manager Approvals** (`manager_approvals`, select_multiple, optional): Choose the approval status by selecting "Approve" or "Reject".
- **Manager Comments** (`manager_comments`, text, optional): Add any comments from the manager.
- **Submitted By** (`submitted_by`, text, required): Enter your name.
- **Date Submitted** (`date_submitted`, date, optional): Enter the date when you submitted the form. If you don't have this information, you can leave it blank.
- **Date Approved** (`date_approved`, date, optional): Enter the date when the request was approved. This will be populated automatically once the request is approved.
- **Status** (`status`, select_one, optional): Select the status of the request, which can be "Pending", "Approved", or "Rejected".
- **Notes** (`notes`, text, optional): Add any additional comments or notes as needed.
- **Attachment** (`attachment`, text, optional): Attach any supporting documentation as needed.
- **Submitted To** (`submitted_to`, select_one, optional): Choose who to submit the request to, which can be "HR" or "Manager".
- **Submitted By Name** (`submitted_by_name`, text, required): Enter your name.
- **Submitted By Email** (`submitted_by_email`, email, required): Enter your email address.
- **Submitted By Phone** (`submitted_by_phone`, text, required): Enter your phone number.
- **Manager Name** (`manager_name`, text, required): Enter your manager's name.
- **Manager Phone** (`manager_phone`, text, required): Enter your manager's phone number.
- **Submitted To Manager Name** (`submitted_to_manager_name`, text, required): Enter the name of the manager you are submitting the request to.
- **Submitted To Manager Phone** (`submitted_to_manager_phone`, text, required): Enter the phone number of the manager you are submitting the request to.
- **Department** (`department`, text, required): Enter your department.
- **Division** (`division`, text, required): Enter your division.
- **Branch** (`branch`, text, required): Enter the branch you belong to.
- **Job Position** (`job_position`, text, required): Enter your job position.
- **Team** (`team`, text, required): Enter the team you belong to.

Note: This help guide is based on the provided YAML fields and explanations. If you have any further questions or need additional clarification, please don't hesitate to ask.
