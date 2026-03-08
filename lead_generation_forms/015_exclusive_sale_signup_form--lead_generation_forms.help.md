# Exclusive Sale Signup Form - Help Guide

## Purpose
The exclusive sale signup form is designed to collect information from users for a sale or promotion.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your email address in the "Email" field.
2. Enter your name in the "Name" field.
3. Enter your phone number in the "Phone" field.
4. Select your interests from the list provided in the "Interests" field.
5. Choose your location from the list provided in the "Location" field.
6. Optionally, enter any additional comments or notes in the "Comments" field.
7. Select the sale date and time in the "Sale Date" and "Sale Time" fields, respectively.
8. If you have a promo code, enter it in the "Promo Code" field.

## Field-by-Field Explanation

* **Email** (`user_email`, email, required/optional): Enter your email address.
* **Name** (`user_name`, text, required/optional): Enter your name.
* **Phone** (`user_phone`, text, required/optional): Enter your phone number.
* **Interests** (`user_interests`, select_multiple, required): Select all the interests that apply to you.
	+ Options: Fashion, Sports, Beauty, Technology, Food, Music, Travel, Gaming, Home, Art
* **Location** (`user_location`, select_one, required): Choose your location.
	+ Options: New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose
* **Comments** (`user_comments`, note, required/optional): Enter any additional comments or notes.
* **Sale Date** (`sale_date`, date, required/optional): Select the sale date.
* **Sale Time** (`sale_time`, time, required/optional): Select the sale time.
* **Promo Code** (`promo_code`, text, required/optional): Enter your promo code (if applicable).
