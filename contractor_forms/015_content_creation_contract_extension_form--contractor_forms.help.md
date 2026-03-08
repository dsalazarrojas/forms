# Content Creation Contract Extension Form - Help Guide

## Purpose
This form is used to request an extension of a content creation contract.

## How To Complete This Form
1. Fill out the form completely and accurately, ensuring that all required fields are filled out.
2. Enter the correct information in each field, using the help text as a guide.
3. Ensure that the contractor and client have reviewed and approved the form before submitting it.

## Field-by-Field Explanation

* **Contractor Name** (`contractor_name`, Text, Required): Enter the full name of the contractor.
* **Contractor Email** (`contractor_email`, Email, Required): Enter the email address of the contractor.
* **Client Name** (`client_name`, Text, Required): Enter the full name of the client.
* **Client Email** (`client_email`, Email, Required): Enter the email address of the client.
* **Original Contract Date** (`original_contract_date`, Date, Required): Enter the date of the original contract.
* **Original Contract ID** (`original_contract_id`, Text, Required): Enter the reference number of the original contract.
* **Extension Request Date** (`extension_request_date`, Date, Required): Enter the date of this extension request.
* **Extension Type** (`extension_type`, Select One, Required): Select the type of extension:
	+ Time Extension Only
	+ Scope Extension Only
	+ Time and Scope Extension
	+ Budget Extension Only
	+ Full Contract Extension
* **Original Contract End Date** (`original_end_date`, Date, Required): Enter the original contract end date.
* **Requested New End Date** (`requested_new_end_date`, Date, Required): Enter the proposed new end date.
* **Extension Duration** (`extension_duration`, Select One, Required): Select the length of the extension:
	+ 1 week
	+ 2 weeks
	+ 1 month
	+ 2 months
	+ 3 months
	+ 6 months
	+ Other
* **Reason for Extension** (`reason_for_extension`, Select One, Required): Select the reason for the extension:
	+ Additional Content Requested
	+ Project Complexity Increased
	+ Client-Requested Changes
	+ Resource Constraints
	+ Timeline Adjustment
	+ Other
* **Extension Details** (`extension_details`, Text, Required): Provide a detailed explanation for the extension.
* **Additional Deliverables** (`additional_deliverables`, Text, Optional): If applicable, describe any additional content to be created.
* **Original Contract Value** (`original_contract_value`, Number, Required): Enter the value of the original contract.
* **Additional Cost** (`additional_cost`, Number, Required): Enter the additional cost for the extension.
* **New Total Value** (`new_total_value`, Number, Required): Enter the total value including the extension.
* **Payment Terms for Extension** (`payment_terms`, Select One, Required): Select how extension payments will be handled:
	+ Upfront Payment
	+ Milestone Payments
	+ Upon Completion
	+ Same as Original Contract
	+ Other
* **Contractor Approval** (`contractor_approval`, Select One, Required): Select if the contractor approves this extension:
	+ Yes, I Approve
	+ No, I Do Not Approve
	+ Pending Review
* **Client Approval** (`client_approval`, Select One, Required): Select if the client approves this extension:
	+ Yes, I Approve
	+ No, I Do Not Approve
	+ Pending Review
* **Are Contract Terms Modified?** (`terms_modified`, Select One, Required): Select if any contract terms have been modified:
	+ True
	+ False
* **Modified Terms Details** (`modified_terms_details`, Text, Optional): If terms have been modified, describe the changes.
* **Extension Effective Date** (`effective_date`, Date, Required): Enter the date this extension takes effect.
* **Additional Notes** (`additional_notes`, Text, Optional): Provide any other relevant information.

Please note that this form is a sample output, and actual fields and options may vary based on the input schema provided. Always refer to the actual form for the most up-to-date information.
