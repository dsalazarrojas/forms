# purchase-requisition-log - Help Guide
## Purpose
This guide provides a step-by-step explanation of the "Purchase Requisition Log" form.

## How To Complete This Form
1. Select the category of the purchase request from the dropdown menu.
2. Provide a short description of the purchase request in the "Purchase Request Description" field.
3. Enter the date and time when the purchase is required in the "Date Required" and "Time Required" fields, respectively.
4. Select the submitting user from the dropdown menu.
5. Enter the submitting user's email address in the "Submitter Email" field.
6. Select the status of the purchase requisition from the available options.
7. Add any additional comments or information in the "Notes" field, if needed.
8. Optionally, select any tools that are assigned to the purchase requisition.

## Field-by-Field Explanation
* **Category** (`Category`, `select_one`, required): Select one of three categories for the purchase requisition.
* **Purchase Request Description** (`purchase_request_description`, `text`, required): A short description of the purchase request.
* **Date Required** (`date_required`, `date`, required): Enter the date when the purchase is required.
* **Time Required** (`time_required`, `time`, required): Enter the time when the purchase is required.
* **Submitting User ID** (`submitting_user_id`, `select_one`, required): Select the user who is submitting the form.
* **Submitting User Name** (`submitting_user_name`, `text`, optional): This field is not required, and it's likely for users to provide their name if they want to be associated with the form submission.
* **Submitter Email** (`submitting_user_email`, `email`, required): Enter the email address of the submitting user.
* **Purchase Requisition Log Status** (`purchase_requisition_log_status`, `select_multiple`, required): Select multiple status options for the purchase requisition, which are pending, in progress, completed, and canceled.
* **Notes** (`notes`, `note`, optional): An optional field for users to add any additional comments or information about the purchase requisition.
* **Assigned Tool** (`assigned_tool`, `select_multiple`, optional): Select multiple tools that are assigned to the purchase requisition, which are chatjimmy and chatjimmy123.
