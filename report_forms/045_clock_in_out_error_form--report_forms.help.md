# Clock In Out Error Form - Help Guide
## Purpose
The "Clock In Out Error Form" is used to report and correct clock-in or clock-out errors that occurred during an employee's work hours. This form is essential for ensuring accurate payroll processing and correcting errors in employee work hours.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details:
	* Employee Name
	* Employee ID
	* Department
	* Position or Job Title
	* Supervisor Name
2. Select the error details:
	* Date Reporting Error
	* Date of Error
	* Shift Date
	* Type of Error
	* Describe the Error
3. Correct the clock-in or clock-out time:
	* Correct Clock-In Time
	* Correct Clock-Out Time
4. Explain the cause of error:
	* What Caused the Error
	* Additional Details About Cause (if needed)
	* Actual Hours Worked
5. Confirm overtime and pay impact:
	* Does This Involve Overtime Hours
	* Overtime Details (if needed)
	* Will This Affect Your Pay
6. Finalize with signatures:
	* Employee Signature
	* Date
	* Supervisor Verification (if needed)
	* Supervisor Signature (if needed)

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your ID badge or HR records.
* **Employee ID** (`employee_id`, text, required): Enter your employee ID number.
* **Department** (`department`, select_one, required): Select your department from the list (e.g., Administration, Operations, Facilities, Maintenance, Security, Customer Service, Other).
* **Position or Job Title** (`position`, text, required): Enter your job title or position.
* **Supervisor Name** (`supervisor_name`, text, required): Enter the full name of your supervisor.
* **Date Reporting Error** (`report_date`, date, required): Enter the date you are reporting the error.
* **Date of Error** (`error_date`, date, required): Enter the date when the error occurred.
* **Shift Date** (`shift_date`, date, required): Enter the shift date when the error occurred.
* **Type of Error** (`error_type`, select_one, required): Select the type of error from the list (e.g., Forgot to Clock In, Forgot to Clock Out, Clocked In Wrong Time, etc.).
* **Describe the Error** (`error_description`, text, required): Provide a detailed description of the error that occurred.
* **Correct Clock-In Time** (`correct_clock_in`, time, required): Enter the correct clock-in time.
* **Correct Clock-Out Time** (`correct_clock_out`, time, required): Enter the correct clock-out time.
* **What Caused the Error** (`cause_of_error`, select_one, required): Select the cause of the error from the list (e.g., Employee Forgetfulness, Time Clock Malfunction, System Error, etc.).
* **Additional Details About Cause** (`cause_details`, text, optional): Provide additional details about the cause of the error, if needed.
* **Actual Hours Worked** (`hours_worked`, text, required): Enter the actual hours you worked during the shift.
* **Does This Involve Overtime Hours** (`overtime_involved`, select_one, required): Select "Yes" or "No" to indicate if the error involves overtime hours.
* **Will This Affect Your Pay** (`pay_impact`, select_one, required): Select how this error will affect your pay (e.g., Underpaid, Overpaid, No Impact, Not Sure).
* **Witness Name** (`witness_if_any`, text, optional): If applicable, enter the name of a witness who observed the error.
* **Employee Signature** (`employee_signature`, text, required): Enter your full name for verification.
* **Date** (`signature_date`, date, required): Enter the date of the employee signature.
* **Supervisor Verification** (`supervisor_verification`, select_one, optional): Select "Verified Accurate" or "Needs Investigation" to confirm the accuracy of the error report.
* **Supervisor Signature** (`supervisor_signature`, text, optional): Enter the full name of the supervisor for verification (if applicable).
* **Payroll Processing Status** (`payroll_processed`, select_one, optional): Select "Processed", "Pending", or "Not Yet Submitted" to indicate the current payroll processing status. 

## Tips
Please ensure you have all necessary information before filling out the form. Double-check your input for accuracy, as errors can affect your pay. If unsure, consult with your supervisor or HR department.
