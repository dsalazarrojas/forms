<thinking>
To determine the purpose of this form, we need to analyze its fields. The form is called "Work Order Completion Form" and has fields for customer, work order ID, completion date, comments, and customer comments. This suggests that the form is used to record the completion of a work order, likely for internal use. The fields are likely meant to provide information about the customer, the specific work order being completed, the date of completion, and any additional comments or feedback from the customer.

Looking at the fields:

* "customer" is a text field, which could be used to store the customer's name or contact information.
* "work_order_id" is a number field, which could be used to store the unique identifier of the work order being completed.
* "completion_date" is a date field, which could be used to record the date the work order was completed.
* "comments" and "customer_comments" are both note fields, which could be used to store any additional comments or feedback from the user or customer.

Given the fields, it seems that the form is used to update a work order's status and collect feedback from customers.

The form is likely used in a workflow or production environment where work orders need to be tracked and updated.

There are no duplicate fields or obvious red flags, so we can proceed with creating the help guide.

</thinking>

# Work Order Completion Form - Help Guide
## Purpose
The Work Order Completion Form is used to record the completion of a work order. This form is used to update a work order's status and collect feedback from customers.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's information in the "Customer" field.
2. Enter the unique identifier of the work order being completed in the "Work Order ID" field.
3. Enter the date the work order was completed in the "Completion Date" field.
4. Enter any additional comments or feedback from the customer in the "Comments" and "Customer Comments" fields.

## Field-by-Field Explanation

* **Customer** (`customer`, text, required: false): Enter the customer's name or contact information.
* **Work Order ID** (`work_order_id`, number, required: false): Enter the unique identifier of the work order being completed.
* **Completion Date** (`completion_date`, date, required: false): Enter the date the work order was completed.
* **Comments** (`comments`, note, required: false): Enter any additional comments or feedback from the user.
* **Customer Comments** (`customer_comments`, note, required: false): Enter any additional comments or feedback from the customer.

## Tips
* Make sure to enter accurate and complete information for each field to ensure proper tracking and follow-up communication with the customer.
* Use the "Comments" field for general comments or feedback, while the "Customer Comments" field is specifically for customer feedback.
