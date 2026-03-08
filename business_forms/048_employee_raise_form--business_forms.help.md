# Employee Raise Form - Help Guide
## Purpose
This form is designed to support employee requests for a raise, allowing you to submit your request for a salary increase.

## How To Complete This Form
1. Fill in your employee name and your manager's name in the respective fields.
2. Provide a clear and concise reason for your raise request in the 'Reasons for Raise' field.
3. Enter the desired salary percentage and amount in the 'Salary Percentage' and 'Salary Amount' fields.
4. Select the date you would like to receive your raise in the 'Date of Raise' field.
5. If your request is denied, provide a reason for the denial in the 'Reasons for Denial' field.
6. Select the approval status from the drop-down menu and provide any comments in the 'Comments' field.
7. Finally, have your manager sign the form to confirm their approval or denial.

## Field-by-Field Explanation
* **Employee Name** (`employee_raise_form_employee_name`, text, required: false): Please fill in your full name as it appears on your personnel records.
* **Manager Name** (`manager_name`, text, required: false): Enter your manager's name as it appears on your personnel records.
* **Reasons for Raise** (`reasons_for_raise`, text, required: false): Explain why you believe you deserve a raise, being specific about your achievements and contributions.
* **Salary Percentage** (`salary_percentage`, text, required: false): Enter the percentage increase you are requesting, e.g., 5% or 10%.
* **Salary Amount** (`salary_amount`, text, required: false): Enter the specific amount you are requesting as your salary increase.
* **Date of Raise** (`date_of_raise`, date, required: false): Select the date you would like to receive your raise.
* **Manager Signature** (`employee_raise_form_manager_signature`, text, required: false): Have your manager sign this form to confirm their approval or denial of your request.
* **Date** (`employee_raise_form_date`, date, required: false): Enter the date your manager signs this form.
* **Reasons for Denial** (`employee_raise_form_reasons_for_denial`, text, required: false): If your request is denied, please provide a reason for the denial.
* **Approval Status** (`employee_raise_form_approval_status`, select_one, required: true): Select from the options: Not Approved, Approved, or Pending.
* **Denial Reason** (`employee_raise_form_denial_reason`, text, required: false): If your request is denied, please provide the reason for the denial.
* **Comments** (`employee_raise_form_comments`, text, required: false): Provide any additional comments or explanations regarding your request.

## Tips
* Ensure you have all necessary information before submitting your request.
* Be specific and clear in your reason for the raise request.
* If your request is denied, please respond to the denial reason with a plan for improvement or next steps.
* Have your manager review and sign the form carefully before submitting it.
