# housing_repair_program_access_consent_form - Help Guide
## Purpose
The housing repair program access consent form is designed to gather information from residents and property managers for the housing repair program. This form is used to track the progress and status of repair requests, ensuring that all relevant parties are aware of the current state of the request.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required information for the resident, including their name, address, and phone number.
2. Enter the property manager's name, phone number, and email address.
3. Provide the work order date and details in the description field.
4. Set the current status of the repair request, choosing from "Complete", "Incomplete", or "On Hold".
5. If necessary, add notes for follow-up activities.
6. Indicate whether resident and property manager signatures are required.
7. Fill in the date submitted, date reviewed, date completed, and date follow-up fields.
8. Set the follow-up status and add any follow-up notes or phone numbers.

## Field-by-Field Explanation
* **Resident Name** (`resident_name`, text, required): Enter the name of the resident requesting the repair.
* **Address** (`resident_address`, text, required): Enter the address associated with the resident's repair request.
* **Phone Number** (`resident_phone`, text, required): Enter the phone number for the resident.
* **Property Manager Name** (`property_manager_name`, text, required): Enter the name of the property manager.
* **Property Manager Phone** (`property_manager_phone`, text, required): Enter the phone number for the property manager.
* **Property Manager Email** (`property_manager_email`, text, required): Enter the email address for the property manager.
* **Work Order Date** (`work_order_date`, date, required): Enter the date the work order was submitted.
* **Description** (`description`, text, optional): Provide a detailed description of the repair request.
* **Cost** (`cost`, number, optional): Enter any associated costs with the repair request.
* **Status** (`status`, select_one, required): Choose the current status of the repair request from "Complete", "Incomplete", or "On Hold".
* **Notes** (`notes`, text, optional): Add any notes for follow-up activities.
* **Resident Signature** (`resident_signature`, select_multiple, required): Indicate whether a resident signature is required.
* **Property Manager Signature** (`property_manager_signature`, select_multiple, required): Indicate whether a property manager signature is required.
* **Date Submitted** (`date_submitted`, date, required): Enter the date the form was submitted.
* **Date Reviewed** (`date_reviewed`, date, required): Enter the date the form was reviewed.
* **Date Completed** (`date_completed`, date, required): Enter the date the repair request was completed.
* **Date Follow-up** (`date_follow_up`, date, optional): Enter the date for follow-up activities.
* **Follow-up Status** (`follow_up_status`, select_one, optional): Choose the follow-up status from "Complete", "Incomplete", or "On Hold".
* **Follow-up Note** (`follow_up_note`, text, optional): Add any follow-up notes.
* **Follow-up Phone** (`follow_up_phone`, text, optional): Enter the follow-up phone number.
* **Follow-up Email** (`follow_up_email`, text, optional): Enter the follow-up email address.
* **Submitted By** (`submitted_by`, text, optional): Indicate who submitted the form.

Please note that all fields marked as required must be filled in. If you are unsure about any field or have any questions, please refer to the field-by-field explanations above for further clarification.
