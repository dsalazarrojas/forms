<thinking>
To confirm, the purpose of the "Caregiver Termination Form" is to document the termination of a caregiver's employment. This form is a crucial record-keeping tool to ensure that all necessary information is collected and processed correctly. Before proceeding, please ensure that the termination is not a duplicate or that all necessary steps have been taken to handle the situation appropriately. This form will guide you through the required fields and sections to complete the termination process accurately.</thinking>

# Caregiver Termination Form - Help Guide

## Purpose
The "Caregiver Termination Form" is a critical tool used to document the termination of a caregiver's employment. This form ensures that all necessary information is collected and processed correctly, maintaining accurate records and facilitating a smooth transition process.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the caregiver's full name in the "Caregiver Full Name" field.
2.  If applicable, provide the employee ID number in the "Employee ID Number" field.
3.  Enter the date of termination in the "Termination Date" field.
4.  Select the category of termination in the "Type of Termination" field.
5.  Provide a detailed explanation for the termination reason in the "Reason for Termination" field.
6.  Elaborate on the reason for termination in the "Termination Reason Details" field.
7.  List all current assigned clients or patients in the "Assigned Clients or Patients" field.
8.  Indicate the status of client notification in the "Client Communication Status" field.
9.  Confirm the return of company property, including all items, keys, and equipment.
10.  Verify the return of all keys and access cards.
11.  Confirm the return of all equipment and devices.
12.  Confirm the return of all uniforms and ID badges.
13.  Enter the details of the final payroll information and date of final paycheck issue.
14.  Provide information on accrued vacation hours.
15.  Discuss benefits continuation options with the caregiver.
16.  Confirm the completion status of the exit interview.
17.  Enter the manager's name and date of completion.

## Field-by-Field Explanation

* **Caregiver Full Name** (`<name>`, `text`, required): Enter the legal name of the caregiver being terminated.
* **Employee ID Number** (`employee_id`, `text`, optional): If applicable, enter the ID number of the caregiver.
* **Termination Date** (`termination_date`, `date`, required): Enter the last day of employment.
* **Type of Termination** (`termination_reason`, `select_one`, required): Select the reason for termination from the provided options (Voluntary resignation, Involuntary termination, End of contract, Retirement, Medical leave conversion, Position elimination, etc.).
* **Reason for Termination** (`termination_reason`, `select_one`, required): Select the reason for termination from the provided options (Performance issues, Policy violation, Attendance problems, Client request, Budget constraints, Relocation, Personal reasons, Other).
* **Termination Reason Details** (`reason_details`, `text`, required): Elaborate on the reason for termination selected above.
* **Client Information** (`client_info`, `note`, optional): Enter any relevant client details.
* **Assigned Clients or Patients** (`assigned_clients`, `text`, required): List all current assigned clients or patients.
* **Client Communication Status** (`client_notification`, `select_one`, required): Indicate the status of client notification (Yes - all notified, Partially notified, Not yet notified, Not applicable).
* **Company Property Return** (`property_return`, `note`, optional): Confirm the return of all company property.
* **Keys and Access Cards Returned** (`keys_returned`, `select_one`, required): Confirm the return of all access items (Yes - all returned, Partially returned, Not applicable).
* **Equipment and Devices Returned** (`equipment_returned`, `select_one`, required): Confirm the return of all equipment and devices (Yes - all returned, Partially returned, Not applicable).
* **Uniforms and ID Badges Returned** (`uniforms_returned`, `select_one`, required): Confirm the return of all uniforms and ID badges (Yes - all returned, Partially returned, Not applicable).
* **Final Payroll Information** (`final_payroll`, `note`, optional): Enter details about the final payroll information.
* **Final Paycheck Issue Date** (`final_paycheck_date`, `date`, required): Enter the date when the final paycheck will be issued.
* **Accrued Vacation Hours** (`accrued_vacation`, `number`, optional): Enter the remaining PTO hours.
* **Benefits Continuation Options Discussed** (`benefits_continuation`, `select_one`, required): Discuss benefits continuation options with the caregiver (Yes - discussed in detail, Yes - information provided, Not applicable, Pending discussion).
* **Exit Interview** (`exit_interview`, `select_one`, required): Confirm the status of the exit interview (Completed, Scheduled, Declined by caregiver, Not offered).
* **Manager Name** (`manager_name`, `text`, required): Enter the name of the manager completing this form.
* **Manager Signature Date** (`manager_signature_date`, `date`, required): Enter the date of completion.
* **HR Acknowledgment** (`hr_acknowledgment`, `select_one`, required): Confirm HR acknowledgment (Yes - pending review, Yes - completed, No - not required).
