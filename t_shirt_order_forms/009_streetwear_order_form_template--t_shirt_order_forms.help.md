# Streetwear Order Form Template - Help Guide
## Purpose
This form is designed for customers to submit orders for streetwear products.

## How To Complete This Form
To fill out the form, follow these steps:

1. Provide your customer information, including your name and any additional notes about your order.
2. Enter your shipping information, including address, city, and zip code.
3. Select the product you wish to purchase from the options provided.
4. Choose the size and color of your selected product.
5. Enter your email address and phone number for contact purposes.
6. Confirm your email address and phone number for verification.
7. Accept the terms and conditions of the sale.

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, text, optional): Enter your name and any additional notes about your order.
* **Shipping Info** (`shipping_info`, text, optional): Enter your shipping address, city, and zip code.
* **Product Info** (`product_info`, select_one, optional): Select the product you wish to purchase from the options provided:
	+ Sweater
	+ Hoodie
	+ Jacket
	+ Tank Top
	+ Sneakers
* **Size** (`size`, select_multiple, optional): Choose the size of your selected product:
	+ Small
	+ Medium
	+ Large
	+ Extra Large
	+ Extra Extra Large
* **Color** (`color`, select_one, optional): Select the color of your selected product:
	+ Black
	+ White
	+ Grey
	+ Blue
	+ Green
* **Price** (`price`, number, optional): Enter the price of your order (not provided as an option, but will be calculated automatically).
* **Quantity** (`quantity`, number, optional): Enter the quantity of the product you wish to purchase.
* **Total** (`total`, number, optional): The total cost of your order (not editable).
* **Shipping Address** (`shipping_address`, text, optional): Enter the shipping address.
* **Shipping City** (`shipping_city`, text, optional): Enter the shipping city.
* **Shipping State** (`shipping_state`, select_one, optional): Select the shipping state:
	+ California
	+ New York
	+ Florida
	+ Texas
	+ Illinois
* **Shipping Zip** (`shipping_zip`, text, optional): Enter the zip code.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Confirm Email** (`confirm_email`, email, optional): Confirm your email address.
* **Confirm Phone** (`confirm_phone`, text, optional): Confirm your phone number.
* **Terms and Conditions** (`terms_and_conditions`, date, optional): Select a date for your terms and conditions acceptance.
* **Store Location** (`store_location`, text, optional): Enter the store location.
* **Store Open Time** (`store_open_time`, time, optional): Enter the store open time.
* **Store Close Time** (`store_close_time`, time, optional): Enter the store close time.
* **Store Hours** (`store_hours`, time, optional): Enter the store hours.
* **Confirm Terms** (`confirm_terms`, select_one, optional): Confirm acceptance of terms and conditions:
	+ True
	+ False
