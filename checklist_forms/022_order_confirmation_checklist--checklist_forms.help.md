# Order Confirmation Checklist - Help Guide
## Purpose
This form is used to confirm the details of an order, ensuring that all necessary information is accurate and up-to-date.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the order details section to ensure all information is accurate.
2. Enter the customer's name, order date, and order total.
3. Provide shipping details, including the customer's address and shipping address.
4. Enter the customer's email and phone number.
5. Select the order status (Pending, Processing, Complete, or Cancelled).
6. Enter any review notes, shipping notes, or order notes if necessary.
7. Enter the order ID and order tracking number (if applicable).

## Field-by-Field Explanation

* **Order Details**
	+ **Customer Name** (`customer_name`, text, required): Enter the customer's name.
	+ **Order Date** (`order_date`, date, required): Enter the date the order was placed.
	+ **Order Total** (`order_total`, number, required): Enter the total cost of the order.
* **Customer Information**
	+ **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
	+ **Customer Phone** (`customer_phone`, text, required): Enter the customer's phone number.
	+ **Customer Address** (`customer_address`, text, required): Enter the customer's address.
* **Shipping Information**
	+ **Shipping Details** (`shipping_details`, text, optional): Enter any additional shipping details.
	+ **Shipping Address** (`shipping_address`, text, required): Enter the shipping address.
* **Order Status**
	+ **Order Status** (`order_status`, select_one, required): Select the order status (Pending, Processing, Complete, or Cancelled).
* **Notes**
	+ **Review Notes** (`review_notes`, text, optional): Enter any review notes.
	+ **Shipping Notes** (`shipping_notes`, text, optional): Enter any shipping notes.
	+ **Order Notes** (`order_notes`, text, optional): Enter any order notes.
* **Order Information**
	+ **Order ID** (`order_id`, text, required): Enter the order ID.
	+ **Order Tracking Number** (`order_tracking_number`, text, optional): Enter the order tracking number (if applicable).
	+ **Fulfillment Team Member** (`fulfillment_team_member`, text, optional): Enter the name of the fulfillment team member (if applicable).

Note: This form is a checklist to confirm the details of an order. Please review all fields carefully before submitting.
