# Refund Tracker Form - Help Guide
## Purpose
The Refund Tracker Form is a tool used to track and manage refund requests from customers. By filling out this form, you will be able to accurately record important information about the customer, order, and refund status.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's information in the "Customer Info" field.
2. Provide the customer's name in the "Customer Name" field.
3. Enter the customer's email address in the "Customer Email" field.
4. Enter the customer's phone number in the "Customer Phone" field.
5. Enter the order number in the "Order Number" field.
6. Enter the refund amount in the "Refund Amount" field.
7. Select the date of the order in the "Order Date" field.
8. Choose the refund status from the available options in the "Refund Status" field.
9. Enter any additional comments or details about the refund in the "Notes" field (optional).

## Field-by-Field Explanation
- **Customer Info** (`customer_info`, text, required):
  This field captures essential information about the customer, including their name.
- **Customer Name** (`customer_name`, text, required):
  Enter the name of the customer who is requesting the refund.
- **Customer Email** (`customer_email`, email, required):
  Enter the customer's email address so that we can contact them about their refund.
- **Customer Phone** (`customer_phone`, text, required):
  Enter the customer's phone number so that we can contact them about their refund.
- **Order Number** (`order_number`, text, required):
  Enter the number of the order for which the customer is requesting a refund.
- **Refund Amount** (`refund_amount`, number, required):
  Enter the amount of the refund the customer is requesting.
- **Order Date** (`order_date`, date, required):
  Enter the date of the order for which the customer is requesting a refund.
- **Refund Status** (`refund_status`, select_one, required):
  Choose the status of the refund from the available options: pending, approved, declined, or cancelled.
- **Notes** (`notes`, note, optional):
  Enter any additional comments or details about the refund, if necessary.
