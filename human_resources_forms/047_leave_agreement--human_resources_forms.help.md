<thinking>... thinking about the form purpose and required fields...

We are creating a "Leave Agreement" form. The form is used to record and process employee leaves such as vacation, sick, or family leave. It is intended for employees to provide information about their leave, including their company status, reason for leave, start and end dates, total hours taken, and hours used.

This form is not intended for use in critical HR processes such as performance reviews or benefits enrollment.

This form may be duplicated if multiple employees are filling out the form for the same purpose.

</thinking>

# Leave Agreement - Help Guide
## Purpose
The "Leave Agreement" form is used to record and process employee leaves such as vacation, sick, or family leave. Employees are asked to provide information about their leave, including their company status, reason for leave, start and end dates, total hours taken, and hours used.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if you need to select 'Yes' or 'No' as your company status.
2. Choose the reason for your leave from the provided options or type a free-form text.
3. Enter the start and end dates of your leave.
4. Enter the total hours you are taking for your leave.
5. If applicable, enter the number of hours you have used during your leave.
6. Decide whether you will upload an Excel file for your leave or not.
7. Review and submit your form for processing.

## Field-by-Field Explanation

* **Company** (`company`, `select_multiple`, required/optional): Select 'Yes' if your company will be operating during your leave, otherwise choose 'No'. This indicates whether your work will continue during your leave or not.
* **Employee** (`employee`, `select_one`, required/optional): Choose 'Yes' if you are an employee taking the leave, otherwise choose 'No'. This helps us identify whether you are taking leave as an employee or not.
* **Reason for Leave** (`reason_for_leave`, `text`, required/optional): Enter a brief explanation for the reason you are taking leave. This helps us understand your reason for absence.
* **Start Date** (`start_date`, `date`, required/optional): Enter the start date of your leave. This is the date when you will begin your leave period.
* **End Date** (`end_date`, `date`, required/optional): Enter the end date of your leave. This is the date when you will end your leave period.
* **Total Hours** (`total_hours`, `number`, required/optional): Enter the total number of hours you are taking for your leave. This is the total hours you are absent from work.
* **Hours Used** (`hours_used`, `number`, required/optional): If you have used any hours during your leave, enter the number of hours used. This is the hours you have used during your leave period.
* **Excel File** (`excel_file`, `select_one`, required/optional): Decide whether you will upload an Excel file for your leave or not. This is an optional upload for supporting documentation.
