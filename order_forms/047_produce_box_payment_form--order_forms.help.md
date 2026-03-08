# produce_box_payment_form - Help Guide

## Purpose
This form is designed to help customers place an order for produce boxes. It's essential to fill out this form accurately and completely for efficient order processing.

## How To Complete This Form
1. Fill out the `order_form` field with the desired order information.
2. Select the type of box you'd like to order from the `box_type` dropdown.
3. Choose the delivery method that suits your needs from the `delivery_method` dropdown.
4. Select your preferred payment method from the `payment_method` dropdown.
5. Enter the date you'd like to order the produce box by filling out the `order_date` field.
6. If you'd like to schedule a delivery date, fill out the `delivery_date` field.
7. Select a time for delivery (optional).
8. Enter the farm name where you'd like to receive your produce box.
9. If you'd like to be contacted, provide your email address in the `contact_email` field.
10. If you'd like to be contacted, provide your phone number in the `contact_phone` field.
11. Add any order comments in the `order_comments` field (optional).
12. Add any additional order notes in the `order_notes` field (optional).

## Field-by-Field Explanation
* **order_form** (`order_form`, text, optional): Enter the order information in this field.
* **box_type** (`box_type`, select_one, required): Choose the type of box you'd like to order.
	+ Standard
	+ Organic
	+ Custom
* **delivery_method** (`delivery_method`, select_multiple, required): Select the delivery method that suits your needs.
	+ Weekly
	+ Bi-Weekly
	+ Monthly
* **payment_method** (`payment_method`, select_one, required): Select the payment method you'd like to use.
	+ Credit Card
	+ Cash
	+ Check
* **order_date** (`order_date`, date, required): Enter the date you'd like to order the produce box.
* **delivery_date** (`delivery_date`, date, optional): Enter the date you'd like to receive the produce box.
* **delivery_time** (`delivery_time`, time, optional): Select a time for delivery.
* **farm_name** (`farm_name`, text, required): Enter the farm name where you'd like to receive your produce box.
* **contact_email** (`contact_email`, email, optional): Enter the email address where you can be contacted.
* **contact_phone** (`contact_phone`, text, optional): Enter the phone number where you can be contacted.
* **order_comments** (`order_comments`, note, optional): Add any order comments or requests.
* **order_notes** (`order_notes`, note, optional): Add any additional order notes or details.
