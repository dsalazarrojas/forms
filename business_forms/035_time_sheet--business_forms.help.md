<thinking>

The form is intended to capture information for time sheet submissions from employees. It likely serves as a means for employees to record their work hours, breaks, and other relevant details for the purpose of time tracking and payroll management. This form may be used by both employees and their managers to monitor work hours, breaks, and submitted tasks. 

</thinking>

# Time Sheet - Help Guide
## Purpose
The Time Sheet form is designed to collect information for time tracking and payroll management purposes. It's used to record work hours, breaks, and other details related to employee work activities.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the required fields, which include:
   - Work Date: Enter the date you worked.
   - Employee ID: Enter your employee ID number.
   - Manager ID: Enter your manager's ID number.
2. Optional fields to consider:
   - Time Sheet: Enter a brief description of the work performed.
   - Break Duration: Record the length of your breaks.
   - Break Frequency: Check 'Yes' if you take regular breaks, 'No' otherwise.
   - Notes: Add any additional comments or notes about your work.
   - Status: Set the status of your time sheet (Active or Inactive).
   - Comments: Enter comments about the time sheet.
   - Comments Date: Date of comments submission.
   - Created By: Automatically populated with the name of the person submitting the form.
   - Updated By: Automatically populated with the name of the person updating the form.
   - Deleted By: Automatically populated with the name of the person deleting the form.
   - Created At: Automatically populated with the date and time the form was created.
   - Updated At: Automatically populated with the date and time the form was updated.
   - Deleted At: Automatically populated with the date and time the form was deleted.
   - Submitted By: Automatically populated with the name of the person submitting the form.
   - Submitted Date: The date the form was submitted.
   - Submitter: Automatically populated with the name of the person submitting the form.
3. Check the 'Submit' checkbox if the form is accurate.
4. If you need to make any changes, you can update the form by checking the 'Updated' checkbox.
5. If you need to delete the form, you can check the 'Deleted' checkbox.

## Field-by-Field Explanation
* **Time Sheet**: (`time_sheet`, `text`, required: false) - A brief description of the work performed.
* **Work Date**: (`work_date`, `date`, required: false) - Enter the date you worked.
* **Work Hours**: (`work_hours`, `text`, required: false) - Record the hours worked.
* **Break Duration**: (`break_duration`, `text`, required: false) - Record the length of your breaks.
* **Break Frequency**: (`break_frequency`, `select_one`, required: false) - Check 'Yes' if you take regular breaks, 'No' otherwise.
* **Notes**: (`notes`, `note`, required: false) - Additional comments or notes about your work.
* **Employee ID**: (`employee_id`, `text`, required: false) - Enter your employee ID number.
* **Manager ID**: (`manager_id`, `text`, required: false) - Enter your manager's ID number.
* **Submit**: (`submit`, `select_multiple`, required: false) - Check 'Yes' if the form is accurate.
* **Submit Date**: (`submit_date`, `date`, required: false) - The date the form was submitted.
* **Submitted By**: (`submitted_by`, `text`, required: false) - Automatically populated with the name of the person submitting the form.
* **Status**: (`status`, `select_one`, required: false) - Set the status of your time sheet (Active or Inactive).
* **Comments**: (`comments`, `text`, required: false) - Enter comments about the time sheet.
* **Comments Date**: (`comments_date`, `date`, required: false) - Date of comments submission.
* **Created By**: (`created_by`, `text`, required: false) - Automatically populated with the name of the person creating the form.
* **Updated By**: (`updated_by`, `text`, required: false) - Automatically populated with the name of the person updating the form.
* **Deleted By**: (`deleted_by`, `text`, required: false) - Automatically populated with the name of the person deleting the form.
* **Created At**: (`created_at`, `time`, required: false) - Automatically populated with the date and time the form was created.
* **Updated At**: (`updated_at`, `time`, required: false) - Automatically populated with the date and time the form was updated.
* **Deleted At**: (`deleted_at`, `time`, required: false) - Automatically populated with the date and time the form was deleted.
* **Submitter**: (`submitter`, `text`, required: false) - Automatically populated with the name of the person submitting the form.
