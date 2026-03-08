# workplace-harassment-claim-form - Help Guide
## Purpose
The Workplace Harassment Claim Form is designed to collect information about incidents of workplace harassment, allowing for a thorough investigation and resolution.

## How To Complete This Form
1. Begin by filling out the "Report Incident" field on Page 1.
2. Provide detailed information about the incident in the "Describe Incident" field.
3. If a witness is involved, fill out the "Witness Info" field with their name, role, and any other relevant details.
4. Specify if there was a witness to the incident and if yes or no. Then, list their names in "Witness Names".
5. Select the roles of the witness from "Witness Roles".
6. Enter the reportee's name in "Reportee Name", their email in "Reportee Email", and their employee ID in "Reportee Employee ID".
7. Enter your name as the reporter in "Reporter Name", your email in "Reporter Email", and your employee ID in "Reporter Employee ID".
8. Select the status of the investigation from "Investigation Status" (Completed, In Progress, Not Started).
9. Enter the date of the resolution in "Resolution Date" and the time in "Resolution Time".
10. Specify the status of the resolution from "Resolution Status" (Completed, In Progress, Not Started).
11. If the roles of the witness are other than listed, specify in "Other Roles".
12. Select the submitter of the form from "Form Submitter" (FormSubmitter, Manager, HR Representative, Reporting Employee, Witness).
13. Finally, add any additional notes about the incident or resolution in "Notes".

## Field-by-Field Explanation

* **Report Incident** (`report_incident`, text, optional): Briefly describe the incident that occurred in the workplace.
* **Describe Incident** (`describe_incident`, text, optional): Provide detailed information about the incident, including any relevant dates, times, and locations.
* **Witness Info** (`witness_info`, text, optional): Fill out the name and any other relevant details of the witness.
* **Witness Names** (`witness_names`, select_multiple, optional): Select yes or no if there was a witness, then list their names.
* **Witness Roles** (`witness_roles`, select_multiple, optional): Select the roles of the witness from the provided options.
* **Date of Incident** (`date_of_incident`, date, optional): Enter the date when the incident occurred.
* **Reporter Name** (`reporter_name`, text, optional): Enter your name as the reporter.
* **Reporter Email** (`reporter_email`, email, optional): Enter your email as the reporter.
* **Reporter Employee ID** (`reporter_employee_id`, text, optional): Enter your employee ID as the reporter.
* **Witness Names** (`witness_names`, select_multiple, optional): Select yes or no if there was a witness, then list their names.
* **Witness Roles** (`witness_roles`, select_multiple, optional): Select the roles of the witness from the provided options.
* **Reportee Name** (`reportee_name`, text, optional): Enter the name of the reportee.
* **Reportee Email** (`reportee_email`, email, optional): Enter the email of the reportee.
* **Reportee Employee ID** (`reportee_employee_id`, text, optional): Enter the employee ID of the reportee.
* **Reporter Name** (`reporter_name`, text, optional): Enter the name of the reporter.
* **Reporter Email** (`reporter_email`, email, optional): Enter the email of the reporter.
* **Reporter Employee ID** (`reporter_employee_id`, text, optional): Enter the employee ID of the reporter.
* **Date of Resolution** (`resolution_date`, date, optional): Enter the date when the resolution occurred.
* **Resolution Time** (`resolution_time`, time, optional): Enter the time when the resolution occurred.
* **Resolution Status** (`resolution_status`, select_one, optional): Select the status of the resolution from the provided options.
* **Resolution Status** (`resolution_status`, select_one, optional): Select the status of the resolution from the provided options.
* **Witness Roles Other** (`witness_roles_other`, select_multiple, optional): Select yes or no if there were roles not listed, then list them.
* **Form Submitter** (`form_submitter`, select_one, optional): Select the submitter of the form (FormSubmitter, Manager, HR Representative, Reporting Employee, Witness).
* **Notes** (`notes`, note, optional): Add any additional notes or comments about the incident or resolution.
