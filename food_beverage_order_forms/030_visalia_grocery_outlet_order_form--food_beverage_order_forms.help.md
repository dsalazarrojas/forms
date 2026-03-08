# Visalia Grocery Outlet Order Form - Help Guide
## Purpose
The Visalia Grocery Outlet Order Form is used to place orders with multiple stores or for the same store with multiple items. It collects customer information, order details, and item specifics to facilitate efficient order processing.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the customer information:
	* Store Name: Enter the name of the store where you'd like to place the order.
	* Address: Enter the address where you'd like to receive the order.
	* City: Enter the city where you'd like to receive the order.
	* Zip Code: Enter the zip code where you'd like to receive the order.
	* Phone Number: Enter your phone number.
	* Email: Enter your email address.
2. Fill in the order details:
	* Order Date: Enter the date you'd like to receive the order.
	* Order Time: Enter the time you'd like to receive the order.
	* Order Status: Select the status of the order (Available, Out of stock, or Sold Out).
	* Store ID: Enter the store ID (a numerical code for the store).
3. Fill in the item specifics:
	* Item Name: Enter the name of the item you'd like to order.
	* Item Description: Enter a brief description of the item.
	* Item Quantity: Enter the quantity of the item you'd like to order.
	* Order Subtotal: Enter the subtotal of the order.

## Field-by-Field Explanation

* **Store Name** (`store_name`, text, required): Enter the name of the store where you'd like to place the order.
* **Address** (`address`, text, required): Enter the address where you'd like to receive the order.
* **City** (`city`, text, optional): Enter the city where you'd like to receive the order.
* **Zip Code** (`zip_code`, text, optional): Enter the zip code where you'd like to receive the order.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number.
* **Email** (`email`, text, optional): Enter your email address.
* **Order Date** (`order_date`, date, required): Enter the date you'd like to receive the order.
* **Order Time** (`order_time`, time, required): Enter the time you'd like to receive the order.
* **Order Status** (`order_status`, select_one, required): Select the status of the order (Available, Out of stock, or Sold Out).
* **Store ID** (`store_id`, number, optional): Enter the store ID (a numerical code for the store).
* **Item Name** (`item_name`, text, required): Enter the name of the item you'd like to order.
* **Item Description** (`item_description`, text, optional): Enter a brief description of the item.
* **Item Quantity** (`item_quantity`, number, required): Enter the quantity of the item you'd like to order.
* **Order Subtotal** (`order_subtotal`, number, optional): Enter the subtotal of the order.

## Tips
* Double-check the store name and address to ensure accuracy.
* Use the correct format for date (MM/DD/YYYY) and time (HH:MM).
* Select the correct status for the order.
* Be specific about the item quantity to avoid errors.
* Review your order carefully before submitting to avoid mistakes.
