# Disposable Menu Order Form - Help Guide

## Purpose
The Disposable Menu Order Form is a simple form designed for ordering menu items on a single serving or takeout basis. This form is meant for customers to submit their orders for a specific menu item, along with their contact information.

## How To Complete This Form
1. Select the menu type from the available options (e.g., "Option 1", "Option 2", etc.).
2. Enter the date of the order.
3. Choose a time for the order (e.g., "08:00" for 8:00 am).
4. Enter your name and email (optional).
5. Enter your phone number (optional).

## Field-by-Field Explanation

* **menu-type** (`menu_type`, select_one, required): Choose the type of menu item you'd like to order from the available options.
* **menu-name** (`menu_name`, text, required): Enter the specific name of the menu item you'd like to order.
* **order-date** (`order_date`, date, required): Enter the date of the order in the format "YYYY-MM-DD" (e.g., "2022-07-25").
* **order-time** (`order_time`, time, required): Choose the time of the order in the format "HH:MM" (e.g., "08:00" for 8:00 am).
* **customer-name** (`customer_name`, text, optional): Enter your name (if providing a phone number, your name is not required but is optional).
* **customer-email** (`customer_email`, email, optional): Enter your email address.
* **customer-phone** (`customer_phone`, text, optional): Enter your phone number.

## Tips
* Make sure to fill in all required fields (menu type and order date/time).
* If you're providing a phone number, it's recommended to also provide your name.
* If you're providing an email address, make sure it's a valid email format.
