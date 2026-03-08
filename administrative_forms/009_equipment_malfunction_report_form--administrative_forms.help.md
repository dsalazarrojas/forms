# Equipment Malfunction Report Form - Help Guide

## Purpose
The Equipment Malfunction Report Form is used to report malfunctions or issues with company equipment. This form helps maintenance or management teams identify and address potential problems promptly, ensuring minimal downtime and maximum efficiency.

## How To Complete This Form

To complete this form, follow these steps:

1. Review the form to ensure it is being used for an actual malfunction or issue that requires immediate attention.
2. Enter your name and report that you are the one reporting the malfunction (under "Reported By").
3. Enter the date you noticed the malfunction (under "Date Reported").
4. Provide the equipment ID number, if known.
5. Briefly describe the malfunction or issue in the "Description" field.
6. Specify the location of the malfunctioning equipment.
7. Indicate the priority level of the issue, with "Yes" being high priority and "No" being low priority.
8. Choose who should be assigned to address the issue, with "Yes" being assigned to a team member and "No" being no assignment.
9. Select the current status of the malfunction, whether it's still active ("Active") or inactive ("Inactive").
10. Add any additional comments or information about the malfunction in the "Comments" field.

## Field-by-Field Explanation

* **Malfunction Details** (`equipment_malfunction_details`, text, optional):
	+ This field is where you can provide a detailed description of the malfunction or issue.
* **Reported By** (`reported_by`, select_one, optional):
	+ Choose "Yes" to indicate that you are reporting the malfunction.
* **Date Reported** (`date_reported`, date, optional):
	+ Enter the date you noticed the malfunction.
* **Equipment ID** (`equipment_id`, number, optional):
	+ If known, enter the equipment ID number for easier tracking and identification.
* **Description** (`description`, text, optional):
	+ Briefly describe the malfunction or issue in this field.
* **Location** (`location`, text, optional):
	+ Specify the location of the malfunctioning equipment.
* **Priority** (`priority`, select_one, optional):
	+ Select "Yes" for high priority issues and "No" for low priority issues.
* **Assigned To** (`assigned_to`, select_one, optional):
	+ Choose "Yes" to assign a team member to address the issue, or "No" if no assignment is required.
* **Status** (`status`, select_one, optional):
	+ Select "Active" if the issue is still ongoing, or "Inactive" if it's been resolved.
* **Comments** (`comments`, text, optional):
	+ Add any additional comments or information about the malfunction in this field.
