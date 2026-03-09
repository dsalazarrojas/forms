# work_hours_tracking_verification_form - Help Guide
## Purpose
This form is used to verify the work hours of an employee, ensuring that the reported hours are accurate and complete.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the correct employee from the options.
2. Enter the date for which you are verifying the work hours.
3. Enter the actual work hours completed by the employee.
4. Select the start and end times of the employee's work hours.
5. Choose whether the form was submitted by the employee or manager.
6. Choose whether the form was verified by the employee or manager.
7. Select the status of the form as Active or Inactive.
8. Add any additional comments or notes about the form.

## Field-by-Field Explanation
### Employee
* **Employee** (`employee`, `email`, required: false): Enter the email of the employee whose work hours you are verifying.
### Manager
* **Manager** (`manager`, `text`, required: true): Enter the name or ID of the manager who submitted the form.
### Date
* **Date** (`date`, `date`, required: true): Enter the date for which you are verifying the work hours.
### Work Hours
* **Work Hours** (`work_hours`, `number`, required: true): Enter the total number of work hours completed.
### Start Time
* **Start Time** (`start_time`, `time`, required: true): Enter the start time of the employee's work hours.
### End Time
* **End Time** (`end_time`, `time`, required: true): Enter the end time of the employee's work hours.
### Work Hours Verification Form
* **Work Hours Verification Form** (`work_hours_verification_form`, `note`, required: true): Enter any additional comments or notes about the form.
### Form Comments
* **Form Comments** (`form_comments`, `text`, required: false): Add any additional comments or notes about the form.
### Submitted By
* **Submitted By** (`submitted_by`, `select_multiple`, required: true): Choose whether the form was submitted by the employee or manager. Options: 'Yes', 'No'.
### Submitted Date
* **Submitted Date** (`submitted_date`, `select_one`, required: false): Choose whether the form was submitted on a date. Options: 'Yes', 'No'.
### Submitted Time
* **Submitted Time** (`submitted_time`, `select_one`, required: false): Choose whether the form was submitted at a time. Options: 'Yes', 'No'.
### Verified By
* **Verified By** (`verified_by`, `select_multiple`, required: false): Choose whether the form was verified by the employee or manager. Options: 'Yes', 'No'.
### Verified Date
* **Verified Date** (`verified_date`, `select_one`, required: false): Choose whether the form was verified on a date. Options: 'Yes', 'No'.
### Verified Time
* **Verified Time** (`verified_time`, `select_one`, required: false): Choose whether the form was verified at a time. Options: 'Yes', 'No'.
### Status
* **Status** (`status`, `select_one`, required: true): Choose whether the form is Active or Inactive. Options: Active, Inactive.

## Tips

* Make sure to enter accurate and complete information for each field.
* Review the form carefully before submitting it.
* Ensure that the form is verified by the correct person.
* Double-check the status of the form after verification.
