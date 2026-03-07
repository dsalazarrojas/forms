<thinking>
The helpline_status_check_form is used for checking the status of a helpline. It's meant to be completed by social workers to keep track of a customer's status during their helpline interaction. Before completing this form, it's essential to ensure you're using it for a valid customer case, and not duplicate the effort by checking for existing records with the provided customer details.

When using this form, you're expected to provide customer information and select their status or actions to be taken. This form is not for creating new customer cases, so please don't try to submit new case records through this form.

This form has two parts: the customer details section and the status/actions selection. In the customer details section, you can input the customer's name, phone number, email, and any additional comments about the interaction.

In the status/actions section, you can select the current status of the customer or the follow-up actions to be taken. Please note that this form is for status updates only and not for taking new actions, so select from the provided options carefully.

This form will help social workers to efficiently check and update customer status during their interactions. Please fill in the form accurately to ensure correct information is recorded and to avoid confusion.

</thinking>

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
