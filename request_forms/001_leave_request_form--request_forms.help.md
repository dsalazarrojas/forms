<thinking>
To provide a comprehensive help guide for the "Leave Request Form", I will analyze the given YAML fields and create a detailed explanation of the form's purpose, how to complete it, and each field's meaning.

The "Leave Request Form" is a tool used to facilitate leave requests from employees. This form is designed to gather essential information from employees, including their name, leave type, start and end dates, duration, purpose, manager's name, email, phone, team members involved, assigned tool, user, notes, and status. The form aims to streamline the leave request process, ensuring that all necessary details are captured and approved by the relevant authorities.

</thinking>

# Leave Request Form - Help Guide
## Purpose
The Leave Request Form is a tool used to facilitate leave requests from employees. This form is designed to gather essential information from employees, ensuring that all necessary details are captured and approved by the relevant authorities.

## How To Complete This Form
1. Fill in your Employee Name.
2. Select the type of leave you are requesting (e.g., vacation, sick, bereavement).
3. Enter the Start Date and End Date of your leave.
4. Specify the duration of your leave.
5. Provide a brief Purpose for your leave.
6. If your manager's name is different from yours, please enter their name.
7. Enter your manager's email address.
8. Enter your manager's phone number.
9. List the Team Members involved in your leave.
10. Select the Assigned Tool and User.
11. Add any additional Notes, if required.
12. Choose the Status of your leave (e.g., pending, approved, declined).
13. Select the Approval Type.
14. Enter the Leave Type Details, if required.
15. Add any Comments, if required.
16. Finally, click the submit button to send your leave request.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your name.
* **Leave Type** (`leave_type`, select_one, required): Select the type of leave you are requesting (e.g., vacation, sick, bereavement).
* **Start Date** (`start_date`, date, required): Enter the date you plan to start your leave.
* **End Date** (`end_date`, date, required): Enter the date you plan to end your leave.
* **Duration** (`duration`, number, optional): Specify the duration of your leave.
* **Purpose** (`purpose`, text, required): Provide a brief purpose for your leave.
* **Manager Name** (`manager_name`, text, optional): If your manager's name is different from yours, enter their name.
* **Manager Email** (`manager_email`, email, optional): Enter your manager's email address.
* **Manager Phone** (`manager_phone`, text, optional): Enter your manager's phone number.
* **Team Member** (`team_member`, text, required): Enter your team member's name.
* **Team Members** (`team_members`, select_multiple, optional): List the team members involved in your leave.
* **Assigned Tool** (`assigned_tool`, text, required): Select the tool assigned to you for your leave.
* **Assigned User** (`assigned_user`, text, required): Select the user assigned to you for your leave.
* **Notes** (`notes`, note, optional): Add any additional notes, if required.
* **Approved** (`approved`, select_one, required): Choose the status of your leave (e.g., pending, approved, declined).
* **Comments** (`comments`, text, optional): Add any comments, if required.
* **Status** (`status`, select_one, required): Choose the status of your leave (e.g., pending, approved, declined).
* **Reason** (`reason`, text, optional): Enter a brief reason for your leave.
* **Date Approved** (`date_approved`, date, optional): Enter the date your leave was approved.
* **Time Approved** (`time_approved`, time, optional): Enter the time your leave was approved.
* **Employee Notes** (`employee_notes`, note, optional): Add any notes from the employee.
* **Manager Notes** (`manager_notes`, note, optional): Add any notes from the manager.
* **Approval Type** (`approval_type`, select_one, optional): Select the approval type (e.g., email, phone, in-person).
* **Leave Type Details** (`leave_type_details`, text, optional): Enter any additional details about your leave type.
* **Comments Approved** (`comments_approved`, text, optional): Add any comments after approval.

Note: The required fields are marked with an asterisk (\*) in the Field-by-Field Explanation section.
