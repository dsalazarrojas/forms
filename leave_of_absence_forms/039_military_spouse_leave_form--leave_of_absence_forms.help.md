# Military Spouse Leave Form - Help Guide
## Purpose
This form is used to collect information from employees who are military spouses and need to request time off due to their spouse's military obligations. Please fill out this form to submit your leave request.
## How To Complete This Form
To complete this form, follow these steps:
1.  Fill in your name and spouse's DOD ID number.
2.  Enter the dates you will be leaving and returning to work.
3.  Describe your reason for the leave.
4.  Indicate if you are taking leave due to spouse being deployed, in training, or other reasons.
5.  Enter your department, if applicable.
6.  Select the end date of your leave.

## Field-by-Field Explanation
* **name** (`name`, `text`, required: false): Your name is required in the form. Please fill out your name as it is on your company's directory.
* **spouse_dod_id** (`spouse_dod_id`, `text`, required: false): Please enter your spouse's DOD ID number. If your spouse doesn't have one, please leave this field blank.
* **military_spouse_leave_dates_from** (`military_spouse_leave_dates_from`, `date`, required: false): Enter the start date of your military spouse's leave. 
*   Use the standard date format (mm/dd/yyyy)
* **military_spouse_leave_dates_to** (`military_spouse_leave_dates_to`, `date`, required: false): Enter the end date of your spouse's military leave.
*   Use the standard date format (mm/dd/yyyy)
* **reason_for_leave** (`reason_for_leave`, `text`, required: false): Briefly describe why you are requesting leave. Please be as detailed as possible.
* **military_spouse_leave_type** (`military_spouse_leave_type`, `select_multiple`, required: false): Select the type of leave you are taking. You may choose one or multiple reasons.
  *   Spouse Deployed: Leave is requested because of your spouse's military deployment.
  *   Spouse in Training: Leave is requested because of your spouse's military training.
  *   Other: Choose this option if your leave reason is not listed above.
  *   Unknown: If you're unsure about your leave type, choose this option.
* **department** (`department`, `text`, required: false): If you work in a department, please enter it here. 
*   This field is not required but recommended for internal tracking and reporting.
* **military_spouse_leave_dates_ending** (`military_spouse_leave_dates_ending`, `date`, required: false): Enter the end date of the military leave.
  Use the standard date format (mm/dd/yyyy)

## Tips
*   If you need to take a leave, please submit this form with as much notice as possible, so we can process it accordingly.
*   This form is for informational purposes only. Your manager or HR representative will use the collected information to process your leave request. 
*   If you have questions, please reach out to your HR department. They will be able to provide further guidance on how to complete this form.
