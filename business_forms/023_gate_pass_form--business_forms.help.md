# Gate Pass Form - Help Guide
## Purpose
The Gate Pass Form is used for tracking and managing gate pass-related information. This form is completed to record details of a gate pass, which may include information about the organization or individual requesting access, their contact details, and relevant dates or statuses.

## How To Complete This Form
To complete the Gate Pass Form, follow these steps:

1. Fill in the required fields as prompted.
2. Select the correct options for visitor details and gate pass request.
3. Enter relevant dates for gate pass issuance, expiration, and renewal.

## Field-by-Field Explanation

* **gate_pass_form** (`gate_pass_form`, text, required: false): Enter a short description of the gate pass.
* **organization_name** (`organization_name`, text, required: false): Enter the name of the organization or individual requesting access.
* **contact_number** (`contact_number`, text, required: false): Enter the contact number of the organization or individual requesting access.
* **email** (`email`, email, required: false): Enter the email address of the organization or individual requesting access.
* **visitor_details** (`visitor_details`, select_multiple, required: false):
	+ Choose 'Yes' if the gate pass is issued to a visitor.
	+ Choose 'No' if the gate pass is not issued to a visitor.
* **gate_pass_request** (`gate_pass_request`, select_one, required: false):
	+ Choose 'Gate Pass' to indicate a gate pass is requested.
	+ Choose 'No Gate Pass' to indicate no gate pass is requested.
	+ Choose 'Requesting Gate Pass' to indicate the pass is being requested.
* **gate_pass_issue_date** (`gate_pass_issue_date`, date, required: false): Enter the date the gate pass was issued.
* **gate_pass_expiration_date** (`gate_pass_expiration_date`, date, required: false): Enter the date the gate pass expires.
* **gate_pass_renewal** (`gate_pass_renewal`, select_one, required: false):
	+ Choose 'True' to indicate the gate pass is eligible for renewal.
	+ Choose 'False' to indicate the gate pass is not eligible for renewal.
* **gate_pass_renewal_date** (`gate_pass_renewal_date`, date, required: false): Enter the date the gate pass was renewed.
* **gate_pass_renewal_reason** (`gate_pass_renewal_reason`, text, required: false): Enter the reason for renewal.
* **gate_pass_renewal_status** (`gate_pass_renewal_status`, select_one, required: false):
	+ Choose 'Active' to indicate the gate pass is active.
	+ Choose 'Expired' to indicate the gate pass has expired.
	+ Choose 'Cancelled' to indicate the gate pass was cancelled.
* **note** (`note`, note, required: false): Enter any additional comments or notes related to the gate pass.
* **note_2** (`note_2`, note, required: false): Enter any additional comments or notes related to the gate pass.
