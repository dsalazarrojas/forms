<thinking>
The form is designed for customers to place an order for shoes with an "Afterpay" financing option. This form allows customers to provide their details and select their preferred shoes, including brand, model, size, color, and quantity. The form also allows customers to choose their payment method, which can be either Afterpay or a traditional credit card.
</thinking>

# Afterpay Shoes Order Form - Help Guide

## Purpose
The Afterpay Shoes Order Form is a tool for customers to place an order for shoes with the option to pay later using Afterpay financing. This form is used to collect essential information from customers, including their contact details, preferred shoes, and payment method.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form and ensure you have all the required information.
2. Fill in your customer details:
	* Enter your customer name in the field "Customer Name".
	* Enter your email address in the field "Email Address".
	* Enter your phone number in the field "Phone Number".
3. Select your preferred shoes:
	* Choose the brand and model of the shoe you want to purchase (e.g., Nike Air Max 270).
	* Select the shoe size system you are using (e.g., US Men, US Women, EU, or UK Sizing).
	* Enter the numerical size value of the shoe (e.g., 10.5).
	* Choose your preferred colorway (e.g., All White).
4. Add the order details:
	* Enter the quantity of shoes you want to purchase.
	* Enter the price per pair of shoes.
5. Choose your payment method:
	* Select either "Afterpay" or a traditional credit card (e.g., Visa, Mastercard, American Express).

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, `text`, `required`): Enter your name as it appears on your identification.
* **Email Address** (`email_address`, `email`, `required`): Enter a valid email address for order tracking and communication.
* **Phone Number** (`phone_number`, `text`, `required`): Enter your phone number for order tracking and delivery updates.
* **Shipping Address** (`shipping_address`, `text`, `required`): Enter your full street address for delivery.
* **Brand and Model** (`brand_model`, `text`, `required`): Enter the brand and model of the shoe you want to purchase (e.g., Nike Air Max 270).
* **Shoe Size - US Men, US Women, EU** (`size_system`, `select_one`, `required`): Select the shoe size system you are using (e.g., US Men, US Women, EU, or UK Sizing).
* **Size Value** (`size_value`, `number`, `required`): Enter the numerical size value of the shoe (e.g., 10.5).
* **Colorway** (`colorway`, `select_one`, `required`): Select your preferred colorway for the shoe (e.g., All White).
* **Quantity** (`quantity`, `number`, `required`): Enter the number of shoes you want to purchase.
* **Price** (`item_price`, `number`, `required`): Enter the price per pair of shoes.
* **Payment Method - Afterpay, Card** (`payment_method`, `select_one`, `required`): Choose either "Afterpay" or a traditional credit card for checkout.
