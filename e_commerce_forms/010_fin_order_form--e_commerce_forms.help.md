# Fin Order Form - Help Guide
## Purpose
The Fin Order Form is used to collect information for a financial order. This form is designed to gather personal details and specific order-related information to facilitate the order process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name in the `name` field.
2. Enter your email address in the `email` field.
3. Provide your phone number in the `phone` field.
4. Enter your shipping address in the `shipping_address` field.
5. Enter your shipping city in the `shipping_city` field.
6. Enter your shipping zip code in the `shipping_zip` field.
7. Select the type(s) of financial order you would like to place in the `fin_type` field. You can select one or multiple options.
8. Choose the color of the financial order in the `fin_color` field.
9. Select the size of the financial order in the `fin_size` field.
10. If you have any additional order details, enter them in the `order_note` field.

## Field-by-Field Explanation
* **name**: Enter your name. (text, required: false)
* **email**: Enter your email address. (email, required: false)
* **phone**: Enter your phone number. (text, required: false)
* **shipping_address**: Enter your shipping address. (text, required: false)
* **shipping_city**: Enter your shipping city. (text, required: false)
* **shipping_zip**: Enter your shipping zip code. (text, required: false)
* **fin_type**: Select the type(s) of financial order. (select_multiple, required: false)
	+ Fin Type 1
	+ Fin Type 2
	+ Fin Type 3
	+ Fin Type 4
	+ Fin Type 5
* **fin_color**: Select the color of the financial order. (select_one, required: true)
	+ Color 1
	+ Color 2
	+ Color 3
	+ Color 4
* **fin_size**: Select the size of the financial order. (select_one, required: true)
	+ Size 1
	+ Size 2
	+ Size 3
	+ Size 4
* **order_date**: Enter the date of the order. (date, required: false)
* **order_time**: Enter the time of the order. (time, required: false)
* **order_note**: Enter any additional order details. (text, required: false)
