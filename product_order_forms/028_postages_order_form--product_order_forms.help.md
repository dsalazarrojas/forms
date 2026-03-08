# Postages Order Form - Help Guide
## Purpose

The Postages Order Form is used to collect customer information for a postages order. It is a form with multiple fields to gather details such as customer name, email, phone number, address, and language preference. The form is designed to be completed by customers to provide their information for the order.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your first name in the "First Name (English)" field.
2. Enter your last name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. Enter your phone number in the "Phone Number (English)" field.
5. Select your country of residence from the "Country of Residence" dropdown menu.
6. Select your preferred language(s) from the "Language" dropdown menu.
7. Enter the date of your order in the "Date" field in the format MM/DD/YYYY.
8. Enter the time of your order in the "Time" field in the format HH:MM.
9. Enter your address in the "Address" field.
10. Enter any additional notes or comments in the "Notes" field.
11. If you are a customer who has ordered before, select "Yes" in the "Customer Type" field. Otherwise, select "No".

## Field-by-Field Explanation

* **First Name (English)** (`customer_info_en`, text, required/optional): Enter your first name in English.
* **Last Name** (`customer_last_name`, text, required/optional): Enter your last name.
* **Customer Info (Chinese)** (`customer_info_zh`, text, required/optional): Enter your customer information in Chinese.
* **Email** (`customer_email`, email, required/optional): Enter your email address. Please use the format `example@example.com`.
* **Phone Number (English)** (`customer_phone_en`, text, required/optional): Enter your phone number in English.
* **Country of Residence** (`customer_info`, select_one, required/optional): Select your country of residence from the list.
* **Language** (`customer_language`, select_multiple, required/optional): Select your preferred language(s) from the list.
* **Date** (`customer_date`, date, required/optional): Enter the date of your order in the format MM/DD/YYYY.
* **Time** (`customer_time`, time, required/optional): Enter the time of your order in the format HH:MM.
* **Address** (`customer_address`, text, required/optional): Enter your address.
* **Notes** (`notes`, text, required/optional): Enter any additional notes or comments.
* **Customer Type** (`customer_type`, select_one, required/optional): If you are a customer who has ordered before, select "Yes". Otherwise, select "No".
