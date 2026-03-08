<thinking>

To create a user-facing help guide for the "Missed Clock Out Form", I'll start by explaining its purpose and relevance. This form is designed to collect information about employee clock-out incidents where an employee fails to clock out at the end of their shift. The form helps in identifying the reasons behind missed clock-outs and facilitates the resolution of these incidents in a more structured and efficient manner. It's essential to fill out this form to ensure accurate record-keeping and prevent potential errors or discrepancies in payroll processing.

</thinking>

# Missed Clock Out Form - Help Guide
## Purpose
The Missed Clock Out Form is used to document instances where an employee fails to clock out at the end of their shift. This form helps to gather information on the reason for missed clock-out and to facilitate a smooth resolution process.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the clock-out time.
2. Provide the manager's name.
3. Choose the reason for missed clock-out (if applicable).
4. Enter the manager's signature.
5. Enter the employee's signature.
6. Record the date completed.

## Field-by-Field Explanation

* **Clock Out Time** (`clock_out_time`, date, required): Enter the time when the employee failed to clock out.
* **Manager Name** (`manager_name`, text, required): Provide the name of the manager who is completing this form.
* **Clock Out Reason** (`missed_clock_out_reason`, select multiple, optional): Select one or more reasons for missed clock-out from the provided options.
* **Manager Signature** (`manager_signature`, text, required): Enter the manager's signature to confirm that they have reviewed and agreed to the submitted information.
* **Employee Signature** (`employee_signature`, text, required): Enter the employee's signature to confirm that the information is accurate.
* **Date Completed** (`date_completed`, date, required): Enter the date this form was completed.
* **Notes** (`notes`, note, optional): Enter any additional comments or explanations for the missed clock-out incident.
