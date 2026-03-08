# Overtime Authorization Form - Help Guide
## Purpose
The Overtime Authorization Form is used for employees to request authorization for overtime work beyond their regular working hours. This form is a necessary step to ensure that employees are properly approved for overtime work and that the necessary paperwork is completed accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your job number in the "Job Number" field.
2. Enter your name in the "Employee Name" field.
3. Enter your job title in the "Job Title" field.
4. Select your job type (Yes/No) in the "Job Type" field.
5. Enter your start date in the "Start Date" field.
6. Enter your end date in the "End Date" field.
7. Enter the number of hours you worked in the "Hours Worked" field.
8. Enter your overtime rate in the "Overtime Rate" field.
9. Provide the reason for overtime work in the "Reason for Overtime" field.
10. Get manager approval for your overtime work by selecting "Yes" in the "Manager Approval" field.
11. If necessary, provide manager comments in the "Manager Comments" field.
12. Once your manager has approved your overtime work, enter the date in the "Form Approved" field.
13. Enter your comments in the "Employee Comments" field.
14. Sign the form by entering your signature in the "Employee Signature" field.
15. Your manager should sign the form in the "Manager Signature" field.
16. Update the manager approval status to "Active" or "Inactive" in the "Manager Approval Status" field.
17. Update the form status to "Active" or "Inactive" in the "Form Status" field.

## Field-by-Field Explanation
* **Job Number** (`job_number`, text, required): Enter the number of your job, which can be used to identify your employment details.
* **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your official personnel record.
* **Manager Name** (`manager_name`, text, required): Enter your manager's name who is responsible for approving your overtime work.
* **Job Title** (`job_title`, text, required): Enter your job title as it appears on your official job description.
* **Job Type** (`job_type`, select_one, required): Select whether your job type is "Yes" or "No" to indicate that you are eligible for overtime work.
* **Start Date** (`start_date`, date, required): Enter the date you started your overtime work.
* **End Date** (`end_date`, date, required): Enter the date you finished your overtime work.
* **Hours Worked** (`hours_worked`, number, required): Enter the number of hours you worked during your overtime.
* **Overtime Rate** (`overtime_rate`, text, required): Enter your overtime rate, which may be different from your regular rate.
* **Reason for Overtime** (`reason_for_overtime`, note, required): Provide a clear reason for why you needed to work overtime.
* **Manager Approval** (`manager_approval`, select_multiple, required): Select "Yes" to get manager approval for your overtime work.
* **Manager Comments** (`manager_comments`, text, required): If necessary, provide manager comments to clarify your overtime work.
* **Form Submitted** (`form_submitted`, date, required): Enter the date you submitted the form.
* **Form Approved** (`form_approved`, date, required): Enter the date your manager approved your overtime work.
* **Employee Comments** (`employee_comments`, text, required): Enter any additional comments you have about your overtime work.
* **Manager Signature** (`manager_signature`, text, required): Sign the form with your signature as proof of approval.
* **Employee Signature** (`employee_signature`, text, required): Sign the form with your signature as proof of submission.
* **Manager Approval Status** (`manager_approval_status`, select_multiple, required): Update the manager approval status to "Active" or "Inactive".
* **Form Status** (`form_status`, select_one, required): Update the form status to "Active" or "Inactive".
