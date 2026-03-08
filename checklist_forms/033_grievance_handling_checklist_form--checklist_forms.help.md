<thinking>
To create an effective grievance handling checklist form, it's essential to understand that this form is designed to collect and track information on grievances reported by employees, customers, or other stakeholders within an organization. It helps identify and address issues promptly, ensuring that grievances are handled fairly, efficiently, and consistently. This form should not be used for other purposes, such as for general inquiries or requests. The form should only be used for grievances that require review and investigation.
</thinking>

# grievance_handling_checklist_form - Help Guide
## Purpose
The grievance handling checklist form is a tool used to document and track grievances reported within an organization. It helps ensure that grievances are handled fairly, efficiently, and consistently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the category that best describes the grievance.
2. Check if the grievance is reported by the 'reporting_unit'.
3. Enter the date the grievance was reported.
4. Choose the current status of the grievance.
5. Describe the steps taken to address the grievance.
6. Choose whether the grievance has been resolved or not.
7. If the grievance has been resolved, provide a reason for satisfaction.
8. Enter any follow-up information or next steps.
9. Check if the grievance has been reviewed by a supervisor or manager.
10. Enter the date the grievance was reviewed.
11. Check if the grievance is completed or not.

## Field-by-Field Explanation
* **grievance_type** (`grievance_type`, select_one, required): Select the category that best describes the grievance.
* **reporting_unit** (`reporting_unit`, select_multiple, required): Check if the grievance is reported by the 'reporting_unit'.
* **grievance_date_reported** (`grievance_date_reported`, date, required): Enter the date the grievance was reported.
* **grievance_status** (`grievance_status`, select_one, false): Choose the current status of the grievance.
* **action_taken** (`action_taken`, note, required): Describe the steps taken to address the grievance.
* **grievance_category** (`grievance_category`, select_one, false): Select the category that best describes the grievance.
* **grievance_description** (`grievance_description`, text, required): Describe the grievance in detail.
* **grievance_outcome** (`grievance_outcome`, select_one, false): Choose whether the grievance has been resolved or not.
* **grievance_satisfied** (`grievance_satisfied`, select_one, false): Check if the grievance has been resolved.
* **grievance_satisfied_reason** (`grievance_satisfied_reason`, text, false): Provide a reason for satisfaction.
* **grievance_follow_up** (`grievance_follow_up`, text, false): Enter any follow-up information or next steps.
* **grievance_next_steps** (`grievance_next_steps`, text, false): Enter any next steps for further action.
* **grievance_reviewed_by** (`grievance_reviewed_by`, select_one, required): Check if the grievance has been reviewed by a supervisor or manager.
* **grievance_reviewed_by_date** (`grievance_reviewed_by_date`, date, required): Enter the date the grievance was reviewed.
* **grievance_completed** (`grievance_completed`, select_one, false): Check if the grievance is completed.
