# reduced_hours_agreement_form - Help Guide
## Purpose
This form is intended to document and track employee agreements for reduced work hours, including the schedule start and end dates, approval and signing dates, and status updates from managers. It's a crucial tool for ensuring clear communication and compliance within an organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the employee's information, including their name.
2. Enter the manager's name as the approver.
3. Provide the schedule start and end dates for the reduced hours.
4. Enter the approved date and time for the agreement.
5. Choose the approval status (Approved, Pending, or Denied) from the dropdown menu.
6. Sign the agreement with your date and the manager's date.
7. Review and update the approval status as needed.

## Field-by-Field Explanation
* **Employee** (`employee`, `text`, required): Enter the employee's name who is requesting the reduced hours.
* **Manager** (`manager`, `text`, required): Enter the name of the manager who will be approving the request.
* **Schedule Start Date** (`schedule_start_date`, `date`, required): Choose the first date of the reduced hours schedule.
* **Schedule End Date** (`schedule_end_date`, `date`, required): Choose the last date of the reduced hours schedule.
* **Approved By** (`approved_by`, `text`, required): Select the name of the person who approved the agreement.
* **Agreement Period** (`agreement_period`, `text`, required): Describe the specific days or periods when the reduced hours will apply.
* **Notes** (`notes`, `note`, optional): Add any additional comments or notes for the manager to review.
* **Approved Date** (`approved_date`, `date`, optional): The date the agreement was approved (will be auto-generated after signing).
* **Approval Status** (`approval_status`, `select_one`, required): Choose the status of the agreement (Approved, Pending, or Denied).
* **Approval Signature** (`approval_signature`, `date`, required): Sign the agreement with the date.
* **Employee Signature** (`employee_signature`, `date`, required): The employee signs the agreement with their date.
* **Manager Signature** (`manager_signature`, `date`, required): The manager signs the agreement with their date.
* **Agreement Signed Date** (`agreement_signed_date`, `date`, required): The date the agreement was signed.

## Tips
* Make sure to fill in all required fields.
* Review and update the approval status regularly.
* Ensure that all signatures are accurate and legible.
* Store the agreement securely for future reference and audit purposes.
