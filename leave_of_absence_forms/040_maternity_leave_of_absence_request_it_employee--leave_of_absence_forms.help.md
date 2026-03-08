<thinking>As an expert form designer and technical writer, I need to create a user-facing help guide for the "Maternity Leave Of Absence Request (IT Employee)" form. This form is used by IT employees to request maternity leave, and it's essential to ensure that employees understand its purpose, how to complete it, and what each field means. I'll base the explanation on the provided YAML fields and follow the required structure.

Before proceeding, let's clarify the purpose and checks for relevance and non-duplication of this form: This form is designed for IT employees to request maternity leave, and it ensures that all necessary information is collected for the leave request process. It's crucial to review the form carefully before submitting it to avoid any duplication or errors. The employee must ensure that they have all the required information before filling out the form, and it's recommended to review the form carefully before submitting it to their manager for approval.</thinking>

# Maternity Leave Of Absence Request (IT Employee) - Help Guide
## Purpose
This form is used by IT employees to request maternity leave, allowing them to take time off for their pregnancy-related needs. It's essential to complete this form carefully to ensure a smooth leave request process.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your employee name in the "Employee Name" field.
2. Enter your manager's name in the "Manager Name" field.
3. Select the "Start Date" and "End Date" of your leave, ensuring they match the dates you plan to take off.
4. Enter the "Leave Start Date" and "Leave End Date" of your maternity leave.
5. Provide a clear reason for your leave in the "Reason For Leave" field.
6. Enter the "Return Date" when you plan to return to work.
7. Provide coverage details in the "Coverage Details" field.
8. Select your manager's approval for the leave ("Approve", "Deny", or "Pending").
9. Add any comments in the "Comments" field.
10. Select the status of your leave request ("In Progress", "Approved", or "Denied").
11. Select whether you are an IT employee ("Yes" or "No").
12. Enter your manager's email address in the "Manager Email" field.
13. Enter your manager's phone number in the "Manager Phone" field.
14. Select whether you want to display your manager's name and email ("Yes" or "No").
15. Select whether you want to display the leave request form ("Yes" or "No").
16. Enter any manager approval message in the "Manager Approval Message" field.
17. Enter any comments in the "Employee Comment" field.
18. Select the completion status of the form ("Active" or "Inactive").
19. Select the submission status of the form ("Active" or "Inactive").
20. Enter the date of submission in the "Submission Date" field.

## Field-by-Field Explanation
* **Form Title** (`form_title`, text, optional): Enter a title for your leave request form.
* **Employee Name** (`employee_name`, text, optional): Enter your name as an IT employee.
* **Manager Name** (`manager_name`, text, optional): Enter your manager's name.
* **Start Date** (`start_date`, date, optional): Select the start date of your leave.
* **End Date** (`end_date`, date, optional): Select the end date of your leave.
* **Leave Start Date** (`leave_start_date`, date, optional): Select the start date of your maternity leave.
* **Leave End Date** (`leave_end_date`, date, optional): Select the end date of your maternity leave.
* **Reason For Leave** (`reason_for_leave`, text, optional): Enter a clear reason for your maternity leave.
* **Return Date** (`return_date`, date, optional): Enter the date you plan to return to work.
* **Coverage Details** (`coverage_details`, text, optional): Enter details about the coverage during your absence.
* **Manager Approval** (`manager_approval`, select_one, optional): Select your manager's approval for the leave ("Approve", "Deny", or "Pending").
* **Comments** (`comments`, text, optional): Add any comments related to your leave request.
* **Status** (`status`, select_multiple, optional): Select the status of your leave request ("In Progress", "Approved", or "Denied").
* **Employee Status** (`employee_status`, text, optional): Enter your status as an employee.
* **Employee Type** (`employee_type`, select_one, optional): Select whether you are an IT employee ("Yes" or "No").
* **Manager Email** (`manager_email`, email, optional): Enter your manager's email address.
* **Manager Phone** (`manager_phone`, text, optional): Enter your manager's phone number.
* **Department** (`department`, select_one, optional): Select whether you want to display your manager's name and email ("Yes" or "No").
* **Manager Name & Email Visibility** (`manager_name_email_visibility`, select_one, optional): Select whether you want to display your manager's name and email ("Yes" or "No").
* **Leave Request Form Visibility** (`leave_request_form_visibility`, select_one, optional): Select whether you want to display the leave request form ("Yes" or "No").
* **Manager Approval Message** (`manager_approval_message`, text, optional): Enter any approval message from your manager.
* **Employee Comment** (`employee_comment`, text, optional): Enter any comments from the employee.
* **Form Completion Status** (`form_completion_status`, select_one, optional): Select the completion status of the form ("Active" or "Inactive").
* **Form Submission Status** (`form_submission_status`, select_one, optional): Select the submission status of the form ("Active" or "Inactive").
* **Submission Date** (`submission_date`, date, optional): Enter the date of submission.
