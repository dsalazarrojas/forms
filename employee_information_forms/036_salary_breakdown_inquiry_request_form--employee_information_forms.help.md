<thinking>
This form is used by HR or finance departments to collect information from employees when they request a breakdown of their salary. This form ensures that all necessary details are provided to process the request efficiently. Please note that this form is for employee use and is not intended for external or customer-facing purposes. Ensure you've checked with your HR or finance department to confirm their specific requirements and approval processes before submitting this form. It's essential to fill out this form accurately and completely to guarantee a speedy and successful request process.
</thinking>

# Salary Breakdown Inquiry Request Form - Help Guide
## Purpose
This form is used by employees to request a breakdown of their salary. It will be reviewed and processed by the HR or Finance Department.

## How To Complete This Form
- Read the form carefully before filling it out.
- Ensure you've completed all required fields.
- Select the correct options from the drop-down menu for "salary_breakdown_requested".
- Enter accurate dates for "start_date" and "end_date" fields.
- Write a clear and concise reason for your request in the "reason_for_request" field.
- Sign the form after filling it out.

## Field-by-Field Explanation
- **Employee Information** (`employee_information`, text, optional):
  This field is for your name and contact information. You can enter your name as it appears on your personnel file.
- **Start Date** (`start_date`, date, optional):
  This field is for the date you started your employment with the company. Please enter the exact date in MM/DD/YYYY format.
- **End Date** (`end_date`, date, optional):
  This field is for the date you left or expect to leave the company. If you're still an active employee, please enter the expected date of your next employment anniversary.
- **Reason for Request** (`reason_for_request`, text, optional):
  This field is for a clear and concise explanation of why you're requesting a salary breakdown. Please be as detailed as possible.
- **Salary Breakdown Requested** (`salary_breakdown_requested`, select_one, true):
  Choose between "Salary Breakdown" or "Detailed Salary Explanation" from the drop-down menu. This selection determines the level of detail provided with your salary breakdown.
- **Date of Request** (`date_of_request`, date, optional):
  This field is for the date you're submitting the request. Please enter the exact date in MM/DD/YYYY format.
- **Employee Signature** (`employee_signature`, note, false):
  Sign the form to confirm you've filled it out accurately and completely.
- **Manager Signature** (`manager_signature`, note, false):
  If required, your manager's signature confirms they've reviewed and approved your request.
