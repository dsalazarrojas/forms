<thinking>
This form is designed for restaurants to process customer orders, allowing them to specify the payment method, delivery time, pickup location, total price, customer name, customer phone number, order notes, and delivery address. The form is intended to be filled out by customers who are making purchases at a restaurant, and is used to capture relevant information for order fulfillment and payment processing.

To avoid duplication, ensure that the customer has not already completed this form.

</thinking>

# restaurant_order_form - Help Guide
## Purpose
This form is used to capture customer information for order fulfillment and payment processing when ordering at a restaurant.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select your preferred **Payment Method**: Choose between Card or Bank Transfer.
2. Select your desired **Delivery Time**:
	* Now
	* Within 1 hour
	* Within 2 hours
	* Within 3 hours
	* Pickup
3. Enter the **Pickup Location** where you would like to collect your order.
4. Enter the **Total Price** of your order.
5. Enter your **Customer Name** as it appears on your payment method or identification.
6. Enter your **Customer Phone Number** for contact purposes.
7. Enter any **Order Notes** if you have any specific requests or instructions.
8. Enter your **Delivery Address** for delivery purposes.

## Field-by-Field Explanation
* **Payment Method** (`payment_method`, `select_one`, required: false): This field allows you to choose how you would like to pay for your order, either by Card or Bank Transfer.
* **Delivery Time** (`delivery_time`, `select_multiple`, required: false): Select your desired delivery time for your order, which can be Now, Within 1 hour, Within 2 hours, Within 3 hours, or Pickup.
* **Pickup Location** (`pickup_location`, `text`, required: false): Enter the location where you would like to collect your order.
* **Total Price** (`total_price`, `number`, required: false): Enter the total price of your order.
* **Customer Name** (`customer_name`, `text`, required: false): Enter your name as it appears on your payment method or identification.
* **Customer Phone** (`customer_phone`, `text`, required: false): Enter your phone number for contact purposes.
* **Order Notes** (`order_notes`, `note`, required: false): Enter any notes or instructions you have for your order.
* **Delivery Address** (`delivery_address`, `text`, required: false): Enter the address where you would like to have your order delivered.
