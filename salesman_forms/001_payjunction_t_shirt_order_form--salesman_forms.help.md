<thinking>...
To create a help guide for a user-facing form, I'll need to understand its purpose and how it's used within your organization. This form appears to be a sales order form for a company called PayJunction, and it's likely used by salespeople to gather information from customers. The fields included suggest that the form is used to collect contact information, order details, and any additional notes or comments from the customer. I'll review the form layout to see if there are any potential issues or improvements needed.

Based on the form's structure, it seems like the "Form Data" page is the main entry point for the form, and the subsequent pages appear to be additional sections within the form. The "Form Submit" page has a select_one field with three options: "Submit", "Cancel", and "Back". This suggests that the form is designed to guide the user through a specific workflow.

The form collects the following fields:

* First Name
* Last Name
* Address 1 ( likely a physical address)
* Email
* Phone
* Date
* Time
* Notes (a text field for additional comments)
* Form Submit (with three options: "Submit", "Cancel", and "Back")

The form doesn't have any required fields, but it does have a "Form Submit" page with a required "Form Submit" field. This might imply that the form needs to be completed in its entirety before being submitted.

</thinking>
# PayJunction T Shirt Order Form - Help Guide

## Purpose

This form is used by salespeople to collect contact information, order details, and any additional notes from customers when placing an order with PayJunction.

## How To Complete This Form

1. Fill in your First Name and Last Name.
2. Enter your physical Address 1.
3. Provide your Email and Phone numbers.
4. Select the Date and Time of the order.
5. Add any additional notes or comments in the Notes field.
6. Click on the "Submit" button to complete the form.
7. Review and confirm the information before submitting the form.

## Field-by-Field Explanation

* **Form Data** (`form_data`, text, required: false):
	+ This is the main entry point for the form where you can enter any additional information.
* **First Name** (`first_name`, text, required: false):
	+ Enter your first name as it appears on your identification.
* **Last Name** (`last_name`, text, required: false):
	+ Enter your last name as it appears on your identification.
* **Address 1** (`address_1`, text, required: false):
	+ Enter your physical address.
* **Email** (`email`, email, required: false):
	+ Enter a valid email address associated with your account.
* **Phone** (`phone`, text, required: false):
	+ Enter your phone number.
* **Date** (`date`, date, required: false):
	+ Select the date of the order.
* **Time** (`time`, time, required: false):
	+ Select the time of the order.
* **Notes** (`notes`, note, required: false):
	+ Add any additional notes or comments for the order.
* **Form Submit** (`form_submit`, select_one, required: true):
	+ Select "Submit" to complete the form, "Cancel" to discard the changes, or "Back" to return to the previous page.

## Tips

* Make sure to fill in all the required fields before submitting the form.
* Double-check the information you enter before submitting the form.
* Use the "Notes" field to add any additional context or details about the order.
