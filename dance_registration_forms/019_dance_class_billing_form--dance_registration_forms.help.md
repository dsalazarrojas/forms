# Dance Class Billing Form - Help Guide
## Purpose
The Dance Class Billing Form is used to collect information related to billing and payment details for dance classes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's name in the "Student Name" field.
2. Enter the student's email address in the "Student Email" field.
3. Enter the billing address in the "Billing Address" field.
4. Enter the total amount due in the "Total Amount" field.
5. Select the payment method from the "Payment Method" dropdown menu.
6. Select the payment term from the "Payment Term" dropdown menu.
7. Select the payment status from the "Payment Status" dropdown menu.
8. Enter any additional notes in the "Notes" field.
9. If applicable, select the assigned tool for the student.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required: false): Enter the student's name.
* **Student Email** (`student_email`, email, required: false): Enter the student's email address.
* **Billing Address** (`billing_address`, text, required: false): Enter the billing address.
* **Total Amount** (`total_amount`, number, required: false): Enter the total amount due.
* **Payment Method** (`payment_method`, select_one, required: false): Select the payment method from the dropdown menu.
	+ Options: 'Yes', 'No'
* **Payment Term** (`payment_term`, select_multiple, required: false): Select the payment term from the dropdown menu.
	+ Options: 'Yes', 'No'
* **Payment Status** (`payment_status`, select_one, required: false): Select the payment status from the dropdown menu.
	+ Options: 'Active', 'Inactive'
* **Notes** (`notes`, note, required: false): Enter any additional notes.
* **Assigned Tool** (`assigned_tool`, text, required: false): Enter the assigned tool if applicable.

## Tips
* Make sure to double-check the student's name and email for accuracy.
* Ensure that the billing address is entered correctly.
* Review the payment method and term selections carefully to ensure accuracy.
* Enter any additional notes if necessary.
* If you're unsure about any field, contact the dance class administrator for assistance.
