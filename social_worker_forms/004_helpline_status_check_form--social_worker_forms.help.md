# helpline_status_check_form - Help Guide
## Purpose
The helpline_status_check_form is used for checking the status of a helpline interaction.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's name, phone number, and email in the customer details section.
2. Provide any additional comments about the interaction in the comments field.
3. Select the current status of the customer or the follow-up actions to be taken from the status/actions section.
4. Double-check the form for accuracy before submitting.

## Field-by-Field Explanation

* **customer_name** (`customer_name`, text, optional): Enter the customer's name.
* **customer_number** (`customer_number`, number, optional): Enter the customer's phone number.
* **customer_email** (`customer_email`, email, optional): Enter the customer's email address.
* **comments** (`comments`, text, optional): Provide any additional comments about the interaction.
* **status** (`status`, select_one, optional): Select the current status of the customer.
	+ Select one of the following options:
		- Status 1
		- Status 2
		- Status 3
		- Status 4
* **follow_up_actions** (`follow_up_actions`, select_multiple, optional): Select the follow-up actions to be taken for the customer.
	+ Select one or more of the following options:
		- action1
		- action2
		- action3
		- action4
