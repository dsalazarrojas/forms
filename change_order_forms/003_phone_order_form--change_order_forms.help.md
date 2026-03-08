To create a user-facing help guide for this "phone-order-form" form, we'll focus on explaining its purpose, how to complete it, and what each field means. This guide is designed to be concise and practical.

# phone-order-form - Help Guide

## Purpose

The phone-order-form is used to record and process phone orders. It's a form used by customers to provide their phone number, preferences, and other relevant information for processing their phone order. By using this form, customers can efficiently submit their orders, which will be reviewed and processed by our team.

## How To Complete This Form

To complete the phone-order-form, follow these steps:

1. Enter your phone number in the "Phone Number" field. This is the main contact information we need to reach you regarding your order.
2. Select "Yes" or "No" for "Phone Model" to indicate if you're interested in purchasing a specific phone model or not.
3. Choose "Yes" or "No" for "Accessory Options" to select any additional accessories you'd like with your order.
4. Enter the date you'd like to place your order in the "Order Date" field. Use the standard date format (e.g., YYYY-MM-DD).
5. Select the time you'd like to place your order in the "Order Time" field. Use the 24-hour format (e.g., HH:MM).

## Field-by-Field Explanation
* **Phone Number** (`phone_number`, `text`, required/optional): Enter your phone number for us to contact you about your order.
* **Phone Model** (`phone_model`, `select_one`, required/optional): Indicate if you're interested in purchasing a specific phone model or not.
* **Accessory Options** (`accessory_choices`, `select_multiple`, required/optional): Choose any additional accessories you'd like with your order.
* **Order Date** (`order_date`, `date`, required/optional): Enter the date you'd like to place your order (YYYY-MM-DD format).
* **Order Time** (`order_time`, `time`, required/optional): Select the time you'd like to place your order in the 24-hour format (HH:MM).
