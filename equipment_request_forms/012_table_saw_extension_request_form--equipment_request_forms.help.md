<thinking>
This form is used by employees to request an extension for a specific equipment, typically a table saw. The purpose of this form is to gather information about the equipment being requested, the supervisor's approval status, and other relevant details. 

The form will be used to determine whether an equipment extension is granted or not. If the form is completed and submitted, it will be reviewed by the designated supervisors and they will decide whether to grant the extension or not. The decision will be based on various factors including the equipment's availability, department requirements and other considerations. 

The form should not be completed for duplicate or duplicate requests. If a request is already approved or being processed, please do not submit this form. 

Please ensure that you provide accurate and relevant information in each field to ensure timely processing of your request. 

This form will automatically be populated with your department information. Please do not alter this field. 

Please note that all field explanations below are based on the provided schema and are best-effort explanations.

</thinking>

# Table Saw Extension Request Form - Help Guide
## Purpose
This form is used by employees to request an extension for a specific equipment, typically a table saw. 

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the form title with a brief description of your request.
2. Choose 'Yes' or 'No' if this is an equipment extension request form.
3. Provide a description of why you need to extend the equipment's usage.
4. Select 'Supervisor' and 'Assistant Supervisor' if you want both to review your request.
5. Choose a suitable due date for your request.
6. If required, provide a reservation ID and extension duration.
7. Select whether you want to request an extension or not.
8. Provide any comments from your supervisors.
9. Enter your name and department information, this will be automatically populated.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, optional): Enter a brief description of your request.
* **Form Category** (`form_category`, select_one, optional): Choose 'Yes' or 'No' to indicate if this is an equipment extension request form.
* **Table Saw Extension Request Form** (`form_description`, text, optional): Provide a description of why you need to extend the table saw's usage.
* **Supervisor Review** (`form_supervisor_review`, select_multiple, required): Select 'Supervisor' and 'Assistant Supervisor' to have both reviewers approve your request.
* **Request Date** (`form_request_date`, date, optional): Choose a suitable date for your request.
* **Due Date** (`form_due_date`, date, optional): Choose a suitable due date for your request.
* **Reservation ID** (`form_reservation_id`, number, optional): Enter the reservation ID if required.
* **Extension Duration** (`form_extension_duration`, number, optional): Enter the extension duration if required.
* **Request Extension** (`form_request_extension`, select_multiple, required): Choose 'True' to request an extension.
* **Supervisors Comment** (`form_supervisors_comment`, text, optional): Provide any comments from your supervisors.
* **Requested By** (`form_requested_by`, text, optional): Enter your name.
* **Requesting User** (`form_requesting_user`, text, optional): Enter your department information.
* **Department** (`form_department`, text, optional): This field will be automatically populated with your department information.
* **Supervisor** (`form_supervisor`, text, optional): This field will be automatically populated with your supervisor's information.
* **Extension Status** (`form_extension_status`, select_one, optional): Choose 'Active' or 'Inactive' to indicate the status of your extension request.
* **Extension Type** (`form_extension_type`, select_one, optional): Choose 'Yes' or 'No' to indicate the extension type.
