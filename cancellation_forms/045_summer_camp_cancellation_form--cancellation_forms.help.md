# Summer Camp Cancellation Form - Help Guide

## Purpose
This form is used to collect information about the cancellation of a child's summer camp registration. Please fill out this form to provide the necessary details for the cancellation process.

## How To Complete This Form

1. Select the reason for cancellation from the provided options.
2. Choose the staff member responsible for the cancellation.
3. Provide any additional comments or remarks about the cancellation.
4. Enter the date of the cancellation.
5. Select the time of the cancellation (if applicable).
6. Indicate the parent's response to the cancellation.
7. Confirm the staff member selected is aware of the cancellation.

## Field-by-Field Explanation

* **Parent Request** (`parent_request`, note, optional): This field is a free-text note for the parent to provide any information they feel is relevant to the cancellation process.
* **Parent Reason** (`reason_select`, select_one, optional): Choose the reason for cancellation from the provided options:
	+ Cancellation due to change of schedule
	+ Cancellation due to family emergency
	+ Cancellation due to personal issue
* **Date** (`date`, date, optional): Enter the date of the cancellation.
* **Time** (`time`, time, optional): Enter the time of the cancellation (if applicable).
* **Parent Response** (`parent_response`, select_multiple, optional): Indicate the parent's response to the cancellation:
	+ 'Yes'
	+ 'No'
* **Staff** (`staff`, select_one, required): Choose the staff member responsible for the cancellation.
	+ Jimmy
	+ John
	+ Jane
* **Reason** (`reason`, note, optional): This field is a free-text note for any additional reasons or comments about the cancellation.
* **Comments** (`comments`, note, optional): Provide any additional comments or remarks about the cancellation.
* **Confirmation** (`_id`, select_one, required): Confirm that the selected staff member is aware of the cancellation.
