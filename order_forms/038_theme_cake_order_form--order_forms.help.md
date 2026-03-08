# Theme Cake Order Form - Help Guide
## Purpose

This form is designed to collect order information from customers for theme cakes, cupcakes, cookies, and cake pops. Please fill out the form carefully to ensure accurate and complete order details.

## How To Complete This Form

1. Fill out your contact information:
	* **Customer Name**: Enter your name as you would like it to be displayed on your order.
	* **Message**: Any additional message or special requests you have for your order.
2. Provide your contact information:
	* **Email**: Enter your email address so we can contact you with updates on your order.
	* **Phone**: Enter your phone number in case we need to contact you.
3. Select your order details:
	* **Order Type**: Choose the type of baked good you'd like to order (e.g., cake, cupcakes, cookies, or cake pops).
	* **Order Details 1**: Enter any additional information about your order, such as flavor or color preferences.
	* **Order Details 2**: Enter any further details about your order, such as special requests.
	* **Order Details 3**: Enter any other details about your order.
4. Choose your payment method:
	* **Payment Method**: Select how you'd like to pay for your order (e.g., credit card, paypal, or bank transfer).
5. Confirm your order:
	* **Confirm**: Confirm that your order is correct and complete.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter your name as you would like it to be displayed on your order.
* **Message** (`message`, note, optional): Any additional message or special requests you have for your order.
* **Email** (`email`, email, optional): Enter your email address so we can contact you with updates on your order.
* **Phone** (`phone`, text, optional): Enter your phone number in case we need to contact you.
* **Order Type** (`order_type`, select_multiple, optional): Choose the type of baked good you'd like to order (e.g., cake, cupcakes, cookies, or cake pops).
* **Order Type** (`order_type`, select_one, optional): This field is likely to be used for custom values associated with the selected order type.
* **Order Details 1** (`order_details`, text, optional): Enter any additional information about your order, such as flavor or color preferences.
* **Order Details 2** (`order_details_2`, text, optional): Enter any further details about your order, such as special requests.
* **Order Details 3** (`order_details_3`, text, optional): Enter any other details about your order.
* **Order Type Value** (`order_type_value`, number, optional): This field is likely associated with the selected order type and should be entered based on the value provided in the "Order Type" field.
* **Order Type Value 2** (`order_type_value_2`, number, optional): Another field for additional values associated with the order type.
* **Order Type Value 3** (`order_type_value_3`, number, optional): Yet another field for additional values associated with the order type.
* **Order Type Value 4** (`order_type_value_4`, number, optional): Another field for additional values associated with the order type.
* **Order Type Value 5** (`order_type_value_5`, number, optional): Another field for additional values associated with the order type.
* **Payment Method** (`payment_method`, select_one, optional): Select how you'd like to pay for your order (e.g., credit card, paypal, or bank transfer).
* **Confirm** (`confirm`, select_one, optional): Confirm that your order is correct and complete.
* **Confirm Option 1** (`confirm_option_1`, text, optional): This field is likely to be used to provide additional confirmations for your order.
* **Confirm Option 2** (`confirm_option_2`, text, optional): Another field for providing additional confirmations for your order.
