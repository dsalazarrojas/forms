# material_order_form - Help Guide
## Purpose
The material_order_form is used to capture information about material orders from customers. It contains fields for customer details, material specifications, and order status.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's details such as their name, email, and phone number.
2. Select the materials being ordered (yes/no).
3. Enter the material name, quantity, and unit price.
4. Add any additional customer notes if needed.
5. Assign the order to a specific person (if required).
6. Fill in the submitted date and time.
7. Save the form to save your input values.

## Field-by-Field Explanation

* **Materials** (`materials`, select_multiple, optional):
	+ This field allows you to indicate if materials are being ordered or not.
* **Material Name** (`material_name`, text, optional):
	+ Enter the name of the material being ordered.
* **Quantity** (`quantity`, number, optional):
	+ Specify the quantity of the material being ordered.
* **Unit Price** (`unit_price`, number, optional):
	+ Enter the unit price of the material being ordered.
* **Total Cost** (`total_cost`, text, optional):
	+ This field will automatically calculate the total cost of the order if you provide the quantity and unit price.
* **Customer Name** (`customer_name`, text, optional):
	+ Enter the customer's name.
* **Customer Email** (`customer_email`, email, optional):
	+ Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, optional):
	+ Enter the customer's phone number.
* **Customer Note** (`customer_note`, note, optional):
	+ Add any additional notes about the customer.
* **Assignee** (`assignee`, select_one, optional):
	+ Select the person to whom the order will be assigned.
* **Assigned** (`assigned`, text, optional):
	+ This field will be automatically populated with the assignee's name.
* **Submitted** (`submitted`, date, optional):
	+ Enter the date when the order was submitted.
* **Submitted Time** (`submitted_time`, time, optional):
	+ Enter the time when the order was submitted.
* **Form ID** (`form_id`, text, optional):
	+ A unique identifier for the form.
* **Customer ID** (`customer_id`, text, optional):
	+ A unique identifier for the customer.
* **Created At** (`created_at`, text, optional):
	+ The date and time when the form was created.
* **Updated At** (`updated_at`, text, optional):
	+ The date and time when the form was last updated.
* **Created By** (`created_by`, text, optional):
	+ The person who created the form.
* **Updated By** (`updated_by`, text, optional):
	+ The person who last updated the form.
* **Submitted By** (`submitted_by`, text, optional):
	+ The person who submitted the form.
* **Form Version** (`form_version`, text, optional):
	+ The version of the form being used.
* **Form Status** (`form_status`, text, optional):
	+ The status of the form.
* **Form Notes** (`form_notes`, note, optional):
	+ Add any additional notes about the form.
* **Submitter Note** (`submitter_note`, note, optional):
	+ Add any additional notes about the form submission.

This form guide is designed to help you fill out the fields accurately and efficiently. If you have any questions or concerns, feel free to ask.

Please note that not all fields are required, and you can leave blank fields as needed. However, be aware that leaving fields blank may impact the form's functionality.
