<thinking>Before I start writing the help guide, let me make some internal notes about this form.

This form is meant to be a template for ordering stationary. It looks like it's for collecting some basic information about a customer's order. There doesn't seem to be any sensitive or critical data being collected, so it's likely for a simple, low-stakes order process. The "select multiple" and "select one" fields suggest the form is designed to allow customers to choose from a pre-defined list of options. The "payment details" field seems to be a text field, which is unusual for a payment field, so it may be intended for some other purpose or to be handled internally. Overall, it's likely this form will be filled out by a customer to place an order for stationary, but I'll need to confirm this when writing the guide.</thinking>

# Stationary Order Form Template - Help Guide
## Purpose
This form is for customers to submit their orders for stationary products. Please fill out the form below to place your order.
## How To Complete This Form
To complete this form, simply follow these steps:

1. Review the fields below to ensure you have all the necessary information.
2. Fill out the "Order Details" field with a brief description of your order.
3. Choose the products you would like to order using the "Select Product" field.
4. Enter the quantity of each product you would like to order.
5. Provide your payment details in the "Payment Details" field.
6. Choose the payment method for your order (if applicable).
7. Enter your shipping address in the "Shipping Address" field.
8. Add any additional comments or notes about your order in the "Order Note" field.
9. Finally, enter your contact information in the "Contact Info" field.

## Field-by-Field Explanation
- **Order Details (order_details)** (`Order Details`, text, required: false): Briefly describe the products you would like to order.
- **Select Product (product_selection)** (`Select Product`, select_multiple, required: false): Choose the products you would like to order.
- **Quantity (quantity)** (`Quantity`, number, required: false): Enter the quantity of each product you would like to order.
- **Payment Details (payment_details)** (`Payment Details`, text, required: false): Enter your payment details.
- **Payment Method (payment_method)** (`Payment Method`, select_one, required: false): Choose the payment method for your order.
- **Shipping Address (shipping_address)** (`Shipping Address`, text, required: false): Enter your shipping address.
- **Order Note (order_note)** (`Order Note`, note, required: false): Add any additional comments or notes about your order.
- **Contact Info (contact_info)** (`Contact Info`, text, required: false): Enter your contact information.
