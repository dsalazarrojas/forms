<thinking>

This form is used to request a date change on a record. The form is designed to be completed by an employee who wants to request a date change on a specific record. The purpose of this form is to provide a structured way to submit a backdate request, ensuring that all necessary information is provided and that the request is properly documented.

When using this form, please ensure that you are not duplicating a request that has already been submitted. Before starting, check if there is an existing request for the same record and reason for change. If you are unsure, please contact your supervisor or the records department for guidance.

</thinking>

# Backdate Request Form - Help Guide
## Purpose
The Backdate Request Form is used to request a date change on a specific record. This form is designed to gather information necessary for the request and ensure that all relevant details are provided for review and processing.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name and the department or team you are associated with in the designated fields.
2. Provide the ID of the record you are requesting to be backdated.
3. Enter the current date on the record and the new date you are requesting.
4. Explain the reason for the date change request.
5. If applicable, attach or list supporting documents that justify your request.
6. Indicate the manager's approval status for administrative use.
7. Provide internal audit comments or additional information.
8. Enter the date the request was submitted.

## Field-by-Field Explanation
- **Requester name** (`requester_name`, text, required): Your name and title/position in the company.
	* Please enter your name as it appears on your official company documents.
- **Department** (`department`, text, optional): The department or team you belong to.
	* If you are unsure which department to select, refer to your company directory or contact your supervisor.
- **Record reference** (`record_reference`, text, required): The ID of the record you are requesting to be backdated.
	* Please ensure that you enter the correct ID to avoid confusion with other records.
- **Original date** (`original_date`, date, required): The current date on the record.
	* This is the date that will be changed upon approval.
- **Requested new date** (`requested_new_date`, date, required): The new date you are requesting for the record.
	* Be sure to enter a valid date in the correct format (YYYY-MM-DD).
- **Reason for date change** (`reason_for_change`, text, required): Provide a clear and concise explanation for the requested date change.
	* This is a critical component of your request, as it will be reviewed and evaluated by your manager and other stakeholders.
- **Supporting documents** (`supporting_documents`, note, optional): Attach or list any documents that support your request.
	* These documents can include emails, agreements, or other relevant information that justify your request.
- **Manager approval status** (`manager_approval`, select_one, optional): Indicate your manager's approval status for your request.
	* This is for administrative use and will help track the status of your request.
- **Audit comments** (`audit_comments`, note, optional): Provide any internal audit comments or additional information.
	* These notes will help track and document any internal review or discussion related to your request.
- **Submission date** (`submission_date`, date, required): The date the request was submitted.
	* This will be automatically populated once you submit this form.
