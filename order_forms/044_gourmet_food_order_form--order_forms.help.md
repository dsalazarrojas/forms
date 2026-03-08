# Gourmet Food Order Form - Help Guide

## Purpose
The Gourmet Food Order Form is designed to allow customers to place orders for specialty food items. By filling out this form, customers can specify their dish preferences, contact information, and any special instructions they would like to convey to the chef. This form is typically used by food establishments to gather information for catering, events, or special orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of dish you would like to order from the "Dish Type" dropdown menu.
2. Enter the quantity of the dish you would like to order.
3. If you have any special instructions or requests, type them in the "Special Instructions" field.
4. Enter your contact email address so we can get in touch with you to confirm your order and provide updates.
5. Enter your contact phone number so we can reach you if needed.

## Field-by-Field Explanation

* **Dish Type** (`dish_type`, select_one, required=false): Select the type of dish you would like to order from the available options.
* **Quantity** (`quantity`, number, required=false): Enter the number of dishes you would like to order.
* **Special Instructions** (`special_instructions`, note, required=false): If you have any special requests or instructions for the chef, type them in here. Examples: "Please add extra sauce" or "Please make it spicy".
* **Contact Email** (`contact_email`, email, required=false): Enter your email address so we can get in touch with you to confirm your order and provide updates.
* **Contact Phone** (`contact_phone`, text, required=false): Enter your phone number so we can reach you if needed.
