<thinking>

This form is used to manage and track resort amenities requests. It's essential to ensure that all fields are filled correctly to avoid any discrepancies or miscommunication with the requestor and the resort's management team.

To complete this form, follow the instructions carefully and ensure that all required fields are filled out accurately. The form is divided into two main pages: Guest Request and Staff Request.

The Guest Request page is used to manage requests from guests, while the Staff Request page is used to manage requests from staff members. Each section has a brief description, and you'll need to select the correct options from the provided fields.

The form includes fields for basic information like department, description, and phone number, as well as more specific fields like the amenity type and requested amenities. Additionally, you'll find fields for status, notes, and comments.

</thinking>

# Resort Amenities Requisition Form - Help Guide
## Purpose
The Resort Amenities Requisition Form is used to manage and track resort amenities requests from guests and staff members.

## How To Complete This Form

To complete this form, follow these steps:

*   Fill out the Guest Request page with the guest's request details.
*   Fill out the Staff Request page with the staff member's request details.
*   Select the correct department and status for the request.
*   Provide a description of the request.
*   Select the correct amenity type and requested amenities.
*   Enter the phone number, email, and fax number (if applicable).
*   Add any additional notes or comments.

## Field-by-Field Explanation

*   **Guest Request** (`guest_request`, number, required): Enter the guest's request details in this field.
*   **Staff Request** (`staff_request`, number, required): Enter the staff member's request details in this field.
*   **Department** (`department_id`, number, required): Select the department associated with the request.
*   **Description** (`request_description`, text, required): Provide a brief description of the request.
*   **Amenity Type** (`amenity_type`, select_one, required): Select the type of amenity being requested.
*   **Amenities** (`amenities`, select_multiple, required): Select the specific amenities being requested.
*   **Requested By** (`requested_by`, select_one, required): Identify who requested the amenity.
*   **Assigned To** (`assigned_to`, select_one, required): Identify who the request is assigned to.
*   **Status** (`status`, select_one): Select the status of the request.
*   **Created At** (`created_at`, date): The date the request was created.
*   **Modified At** (`modified_at`, date): The date the request was last modified.
*   **Submitted At** (`submitted_at`, date): The date the request was submitted.
*   **Notes** (`notes`, text): Add any additional notes about the request.
*   **Comments** (`comments`, text): Add any additional comments about the request.
*   **Phone Number** (`phone_number`, text): Enter the phone number of the requestor.
*   **Email** (`email`, email, required): Enter the email of the requestor.
*   **Fax Number** (`fax_number`, text): Enter the fax number of the requestor.
*   **Internal Note** (`internal_note`, text): Add any internal notes about the request.
*   **External Note** (`external_note`, text): Add any external notes about the request.
*   **Created By** (`created_by`, text): Identify who created the request.
*   **Updated By** (`updated_by`, text): Identify who last updated the request.
*   **Assigned Tool** (`assigned_tool`, text): Identify the tool assigned to the request.
*   **Form ID** (`form_id`, number, required): Enter the form ID.
*   **Form Version** (`form_version`, number, required): Enter the form version.
*   **Category ID** (`category_id`, number, required): Enter the category ID.
