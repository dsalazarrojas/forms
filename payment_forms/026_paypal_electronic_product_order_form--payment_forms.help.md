# paypal_electronic_product_order_form - Help Guide
## Purpose
The `paypal_electronic_product_order_form` is a form used for customers to place electronic product orders with the option to pay using either credit card or PayPal. 
## How To Complete This Form
1. Fill out all fields marked as required.
2. Select your preferred payment method (Credit Card or PayPal).
3. Enter any comments or special requests in the "Order Comments" field.
4. Click "Submit" to complete your order.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required/optional): Enter your first name.
* **Last Name** (`last_name`, `text`, required): Enter your last name.
* **Email** (`email`, `email`, required): Enter your email address.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number.
* **Address 1** (`address_1`, `text`, required): Enter the first line of your address.
* **Address 2** (`address_2`, `text`, optional): Enter the second line of your address (if applicable).
* **City** (`city`, `text`, required): Enter the city of your address.
* **State** (`state`, `text`, required): Enter the state of your address (e.g. California, New York, etc.).
* **Zip** (`zip`, `text`, required): Enter the zip code of your address.
* **Quantity** (`quantity`, `number`, required): Enter the quantity of the electronic product you wish to order.
* **Price** (`price`, `number`, required): Enter the price of the electronic product.
* **Payment Method** (`payment_method`, `select_one`, required): Select how you wish to pay (Credit Card or PayPal).
* **Order Comments** (`order_comments`, `text`, optional): Enter any special comments or requests for your order.
* **Submit** (`submit`, `select_one`, required): Confirm that your order is correct and ready to be submitted.
