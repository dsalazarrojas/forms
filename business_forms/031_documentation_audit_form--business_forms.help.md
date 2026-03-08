# documentation_audit_form - Help Guide
## Purpose
The "documentation_audit_form" is a form used to collect information for documentation and audit purposes. It captures details such as user name, form ID, document type, status, date submitted, and reviewed information.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your User Name in the "User Name" field.
2. Enter your Form ID in the "Form ID" field.
3. Select "Yes" or "No" for the "Document Type" field to indicate whether the document requires auditing.
4. In the "Status" field, select one or multiple options ("pending", "approved", "rejected") to update the document's status.
5. (Optional) Enter the Date Submitted if applicable.
6. (Optional) Check "Yes" or "No" to indicate whether a review was done in the "Reviewed By" field.
7. (Optional) Enter the Date Reviewed if a review was done.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, optional): Please enter your name as it is registered in our system.
* **Form ID** (`form_id`, number, optional): Enter your Form ID as assigned by our system.
* **Document Type** (`document_type`, select_one, required): Select "Yes" to indicate that the document needs auditing, or "No" if it doesn't.
* **Description** (`description`, note, optional): This field is for any additional comments or notes about the document.
* **Status** (`status`, select_multiple, required): Select one or multiple options to update the document's status: "pending", "approved", "rejected".
* **Date Submitted** (`date_submitted`, date, optional): Enter the date you submitted the document, if applicable.
* **Reviewed By** (`reviewed_by`, select_multiple, optional): Select "Yes" if you reviewed the document, "No" otherwise.
* **Date Reviewed** (`date_reviewed`, date, optional): Enter the date you reviewed the document, if applicable.
