<thinking>
This form is intended for capturing order details from customers, including delivery and customer information, order specifics, and other relevant details. This form appears to be designed for a green grocer or produce market, but its purpose is not entirely clear without further context. It may be used for online or offline order submission, or both. It is also unclear whether the form is for internal use or customer-facing, but it seems likely to be for customer-facing purposes. The form does not appear to be redundant, as each field seems to have a unique purpose.</thinking>

# green_grocer_order_form - Help Guide
## Purpose
The green grocer order form is for capturing customer orders, including delivery and customer information, order specifics, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your order details on page 1.
2. Provide delivery information on page 2.
3. Enter customer information on page 3.
4. Add customer address on page 4.
5. Enter delivery address on page 5.
6. Specify the total number of items on page 6.
7. Choose your preferred delivery method on page 7.
8. Enter the pickup time on page 8.
9. Select a delivery date on page 9.
10. Enter your email address on page 10.
11. Enter your phone number on page 11.
12. Add any additional order notes on page 12.
13. Include any customer comments on page 13.
14. Add any order comments on page 14.
15. Indicate who submitted the order on page 15.

## Field-by-Field Explanation
- **Order Details** (`order_details`, `text`, required: false): Enter your order details, including what you would like to order.
- **Delivery Info** (`delivery_info`, `text`, required: false): Enter your delivery information.
- **Customer Info** (`customer_info`, `text`, required: false): Enter your customer information.
- **Customer Address** (`customer_address`, `text`, required: false): Enter your customer address.
- **Delivery Address** (`delivery_address`, `text`, required: false): Enter the address where you would like the order to be delivered.
- **Total Items** (`total_items`, `text`, required: false): Enter the total number of items you are ordering.
- **Delivery Method** (`delivery_method`, `select_one`, required: false): Choose your preferred delivery method.
  - Select 'Yes' to indicate you would like to use a delivery service.
  - Select 'No' to indicate you would like to pick up your order yourself.
- **Pickup Time** (`pickup_time`, `time`, required: false): Enter the time you would like to pick up your order.
- **Delivery Date** (`delivery_date`, `date`, required: false): Select the date you would like to receive your delivery.
- **Customer Email** (`customer_email`, `email`, required: false): Enter your email address.
- **Customer Phone** (`customer_phone`, `text`, required: false): Enter your phone number.
- **Order Notes** (`order_notes`, `note`, required: false): Add any additional order notes.
- **Customer Comments** (`customer_comments`, `text`, required: false): Include any customer comments.
- **Order Comments** (`order_comments`, `text`, required: false): Add any order comments.
- **Order Submitted By** (`order_submitted_by`, `select_one`, required: false): Indicate who submitted the order.
  - Select 'Jimmy' to indicate that Jimmy submitted the order.
  - Select 'Jane' to indicate that Jane submitted the order.
