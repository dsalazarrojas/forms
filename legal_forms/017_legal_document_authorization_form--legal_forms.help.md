# legal_document_authorization_form - Help Guide
## Purpose
This form is used to obtain legal document authorization from a client.

## How To Complete This Form
1. Fill out this form for each legal document you have issued or will issue.
2. Select the type of document for which you are authorizing (if applicable).
3. Enter the date the document was or will be issued.
4. Enter the number of the legal document (if applicable).
5. Enter the client's name associated with the legal document.
6. Indicate whether there is authorized parties involved (if applicable).
7. Provide additional details about the authorization request (if applicable).
8. Select the current status of the document (if applicable).
9. Indicate if the document is authorized by someone (if applicable).

## Field-by-Field Explanation
* **Legal Document Authorization Form** (`form_header`, text, required: false): This is the title of the form.
* **Document Type** (`document_type`, select_one, required: false): Select the type of document for which you are authorizing (e.g., 'Yes' or 'No').
* **Legal Document** (`legal_document`, text, required: false): Enter the legal document number or other identifying information.
* **Date of Issue** (`date_of_issue`, date, required: false): Enter the date the document was or will be issued.
* **Document Number** (`document_number`, text, required: false): Enter the document number if applicable.
* **Client Name** (`client_name`, text, required: false): Enter the client's name associated with the legal document.
* **Authorized Party** (`authorized_party`, select_multiple, required: false): Indicate whether there are authorized parties involved (if applicable).
* **Authorization Details** (`authorization_details`, text, required: false): Provide additional information about the authorization request (if applicable).
* **Date of Expiration** (`date_of_expiration`, date, required: false): Enter the date the document will expire (if applicable).
* **Document Status** (`document_status`, select_one, required: false): Select the current status of the document (e.g., 'Active' or 'Inactive').
* **Authorized By** (`authorized_by`, select_one, required: false): Indicate if the document is authorized by someone (if applicable).
