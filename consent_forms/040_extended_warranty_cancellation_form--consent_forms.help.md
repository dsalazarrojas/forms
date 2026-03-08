# extendedWarrantyCancellationForm - Help Guide
## Purpose
This form is used to cancel extended warranties for a customer.

## How To Complete This Form
To complete this form, follow these steps:

1. Review each page carefully and fill out all required fields.
2. Enter the customer's information in the "customerinfo" page.
3. Enter the customer's name, contact number, and email address.
4. Enter the reason for cancellation.
5. Confirm the date of cancellation.
6. Confirm the method of cancellation confirmation.

## Field-by-Field Explanation
- **Customer Information** (`customerinfo`, text, required: false)
	* This page is for the customer's basic information. Please fill in the customer's details as required.
- **Customer Name** (`customername`, text, required: false)
	* Enter the customer's name as it appears on their identification document or as they would like to be addressed.
- **Contact Number** (`contactnumber`, text, required: false)
	* Enter the customer's contact number, if available.
- **Email** (`email`, email, required: false)
	* Enter the customer's email address, if available.
- **Reason for Cancellation** (`reasonforcancellation`, text, required: false)
	* Enter the reason for cancelling the extended warranty.
- **Date of Cancellation** (`dateofcancellation`, date, required: false)
	* Enter the date the cancellation is effective.
- **Comments** (`comments`, note, required: false)
	* Enter any additional comments or information.
- **Confirmation Sent** (`confirmationsent`, select_one, required: true)
	* Please confirm that the cancellation has been sent to the customer.
- **Confirmation Received** (`confirmationreceived`, select_multiple, required: true)
	* Please confirm that the customer has received the cancellation notification.
- **Confirmation Method** (`confirmationmethod`, select_one, required: true)
	* Please select the method used to confirm the cancellation (e.g. email, phone, mail).
- **Cancellation Confirmation Number** (`cancellationconfirmationnumber`, note, required: false)
	* This is an optional field for entering the cancellation confirmation number.
- **Comments** (`comments2`, note, required: false)
	* Enter any additional comments or information.
- **Confirmation** (`confirmation`, note, required: false)
	* Enter any additional comments or information.
- **Date** (`date`, date, required: false)
	* This field is currently not being used in the form, but please enter the current date for your reference.
- **Time** (`time`, time, required: false)
	* This field is currently not being used in the form, but please enter the current time for your reference.
- **Timezone** (`timezone`, select_one, required: true)
	* Please confirm that the cancellation was made in the correct timezone.
- **Comments** (`comments7`, note, required: false)
	* Enter any additional comments or information.
- **Comments** (`comments8`, note, required: false)
	* Enter any additional comments or information.
- **Comments** (`comments9`, note, required: false)
	* Enter any additional comments or information.
- **Comments** (`comments10`, note, required: false)
	* Enter any additional comments or information.
- **Confirmation** (`confirmation`, note, required: false)
	* Enter any additional comments or information.

Note: This form has a lot of fields that are currently not being used. It's possible that these fields will be removed or updated in the future.
