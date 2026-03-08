# Scentsy Monthly Pre Order - Help Guide
## Purpose
This form is designed to help customers pre-order Scentsy products on a regular basis, either as a one-time order or on a recurring basis. The form allows customers to provide their contact information, preferences, and shipping details, ensuring that their orders are fulfilled accurately and on time.

## How To Complete This Form
To complete this form, simply fill out the required fields and provide any additional information as needed. Please note that some fields are required and must be filled out, while others are optional and can be left blank.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter your first name, which will be used to identify you for your order.
* **Last Name** (`last_name`, text, required: false): Enter your last name, which will be used to identify you for your order.
* **Email** (`email`, email, required: false): Enter your email address, which will be used to contact you about your order.
* **Phone Number** (`phone_number`, text, required: false): Enter your phone number, which will be used to contact you about your order.
* **Type** (`select_type`, select_one, required: true): Select your type from the following options:
	+ Customer
	+ Independent Consultant
	+ Independent Consultant - Existing Customer
* **Number of Children** (`number_of_children`, number, required: false): Enter the number of children you have, if any.
* **Number of Teens** (`number_of_teens`, number, required: false): Enter the number of teens (13-17 year olds) you have in your household.
* **Order Type** (`order_type`, select_one, required: true): Select your order type from the following options:
	+ Sample Order
	+ Sample Order - Existing Customer
* **Monthly Pre Order** (`monthly_pre_order`, date, required: false): If you have a preferred monthly order date, enter it here.
* **Order Frequency** (`order_frequency`, select_multiple, required: false): Select your order frequency from the following options:
	+ Monthly
	+ Bi-Monthly
	+ Quarter-ly
* **Shipping Date** (`shipping_date`, date, required: false): If you have a preferred shipping date, enter it here.
* **Shipping Address** (`shipping_address`, text, required: false): Enter your shipping address.
* **City** (`city`, text, required: false): Enter your city.
* **State** (`state`, text, required: false): Enter your state.
* **Zip** (`zip`, text, required: false): Enter your zip code.
* **Comments** (`comments`, text, required: false): Enter any additional comments you may have about your order.
