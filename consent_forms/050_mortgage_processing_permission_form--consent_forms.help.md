<thinking>
The purpose of the "mortgage_processing_permission_form" is to gather client consent for mortgage processing, share application information with others, and collect other relevant details such as lender information, contact details (email and phone number), and other parties involved. 
</thinking>

# mortgage_processing_permission_form - Help Guide
## Purpose
This guide is designed to walk you through the process of completing the mortgage processing permission form.

## How To Complete This Form
To complete this form, follow these steps:

* Please ensure you have all the necessary information and answers before submitting the form.
* Read each field carefully and fill in the required information.
* Click on the "Submit" button once you have completed all required fields.

## Field-by-Field Explanation
* **Client Consent** (`client_consent`, `note`, required: false): Please sign below to indicate that you have read and understood the purpose of this form. This is a one-time acknowledgment that allows us to process your mortgage application.
* **Share Application Information with Others** (`share_info`, `select_one`, required: true): Choose how you would like to share your application information with others. Please select one of the options:
	+ Option 1: Share with lender
	+ Option 2: Share with other parties
	+ Option 3: Do not share
* **Lender** (`lender_info`, `text`, required: false): If you have chosen to share your application information with a lender, please provide their name or contact details here.
* **Share Results with Others** (`share_results`, `select_multiple`, required: true): Choose who you would like to share your mortgage application results with. Please select all applicable options:
	+ Option 1: Share with lender
	+ Option 2: Share with other parties
	+ Option 3: Do not share
* **Other Parties** (`other_parties`, `select_multiple`, required: true): If you have chosen to share your application results with other parties, please select all applicable options here:
	+ Option 1: Share with [other party 1]
	+ Option 2: Share with [other party 2]
* **Email** (`email`, `email`, required: true): Please enter your email address here.
* **Phone** (`phone`, `text`, required: true): Please enter your phone number here.
* **Client Info** (`client_info`, `select_multiple`, required: true): Please select all applicable options to share client information:
	+ Option 1: Share client name
	+ Option 2: Share client address

## Tips
* Be sure to double-check your selections and input before submitting the form.
* If you are unsure about any field, please contact us for assistance.
* This form is for mortgage processing purposes only; please do not use it for other purposes.
