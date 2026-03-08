</thinking>

# service_cancellation_request_form - Help Guide
## Purpose
The Service Cancellation Request Form is a crucial document used to formally cancel a service. Before completing this form, ensure you have a valid reason for cancellation and have access to all required information. To avoid duplication, check with your supervisor or internal database to confirm that this form has not already been filled out for the same service.

## How To Complete This Form
To complete this form, follow the steps below:

1. Gather all necessary information for the form, including the customer's details and service specifics.
2. Ensure you have a valid reason for cancellation.
3. Fill out the form accurately and thoroughly.

## Field-by-Field Explanation

* **Customer Information** (`Customer Information`, text, **required**):
	+ This section collects the customer's name and contact information.
* **Reason for Cancellation** (`reason_for_cancellation`, text, **required**):
	+ Enter the reason why the service is being cancelled.
* **Service Details** (`service_details`, text, **required**):
	+ Provide a brief description of the service being cancelled, including any relevant details.
* **Date of Last Service** (`date_of_last_service`, date, **required**):
	+ Enter the date of the last service provided.
* **Time of Last Service** (`time_of_last_service`, time, **required**):
	+ Enter the time of the last service provided.
* **Preferred Contact Method** (`preferred_contact_method`, select multiple, **required**):
	+ Choose the customer's preferred method of contact for further information or communication.
	+ Options: Phone, Email, Mail
* **Email** (`email`, email, **optional**):
	+ Enter the customer's email address. (This field is not required but may be useful for follow-up communication.)
* **Phone** (`phone`, text, **optional**):
	+ Enter the customer's phone number. (This field is not required but may be useful for follow-up communication.)
* **Notes** (`notes`, note, **optional**):
	+ Add any additional comments or notes about the cancellation.
