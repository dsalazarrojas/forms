</thinking>

# custom_form_template - Help Guide

## Purpose
This form is designed to collect data for a customer order. It includes fields for customer information, order details, and additional notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required and optional fields as needed.
2. Make sure to choose the correct options for the "Equipment Ordered", "Order Status", and "Assigned User" fields.
3. Enter any additional notes or comments in the "Customer Note" field.
4. Double-check your entries before submitting the form.

## Field-by-Field Explanation
- **Customer Order** (`customer_order`, text, optional): Enter a brief description of the customer's order.
- **Order Date** (`order_date`, date, optional): Enter the date of the order.
- **Order Time** (`order_time`, time, optional): Enter the time of the order.
- **Equipment Ordered** (`equipment_ordered`, select_multiple, optional): Select the equipment ordered by the customer. Options: Yes, No.
- **Customer Details** (`customer_details`, text, optional): Enter any additional customer details.
- **Order Status** (`order_status`, select_one, optional): Select the status of the order. Options: Active, Inactive.
- **Order Total** (`order_total`, number, optional): Enter the total cost of the order.
- **Notes** (`notes`, note, optional): Enter any additional notes or comments about the order.
- **Customer Email** (`customer_email`, email, optional): Enter the customer's email address.
- **Customer Phone** (`customer_phone`, text, optional): Enter the customer's phone number.
- **Customer Note** (`customer_note`, text, optional): Enter any additional notes or comments about the customer.
- **Assigned User** (`assigned_user`, select_one, optional): Select whether the user is assigned to the order. Options: Yes, No.
