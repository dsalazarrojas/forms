# Sports Event Food Order Form - Help Guide
## Purpose
The Sports Event Food Order Form is a simple online form designed to gather information from attendees at a sports event about their food preferences and payment methods.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred food order from the Food Order field.
2. Choose your payment method from the Payment Method field (this is a required field).
3. Enter your email address in the E-Mail field.
4. Enter your phone number in the Phone field.
5. Enter the date of the sports event in the Date field.
6. Add any additional notes or comments in the Notes field (optional).
7. Enter the Order Id and Form Completion Date fields (these are not required but may be used for reference).

## Field-by-Field Explanation

* **User** (`user`, `text`, required: false): Enter your name, as you will be ordering food for yourself or a group.
* **Food Order** (`food_order`, `text`, required: false): Select the food option you prefer for the sports event. Please make sure to select only one option.
* **Total Amount** (`total_amount`, `number`, required: false): Enter the total amount you are willing to spend on food.
* **Payment Method** (`payment_method`, `select_one`, required: true): Choose how you plan to pay for your food order. Options include Cash, Credit Card, and Apple Pay.
* **E-Mail** (`email`, `email`, required: false): Enter your email address for any order confirmations or updates.
* **Phone** (`phone`, `text`, required: false): Enter your phone number in case we need to contact you.
* **Date** (`date`, `date`, required: false): Enter the date of the sports event you are attending.
* **Notes** (`notes`, `note`, required: false): Add any additional information or comments you'd like to share with us about your order.
* **Order Id** (`order_id`, `number`, required: false): Enter your unique order ID, if you have one (not usually required).
* **Form Completion Date** (`form_completion_date`, `date`, required: false): Enter the date you completed this form (not required).

## Tips
* Make sure to select your preferred food order and payment method accurately, as this will affect your food order processing.
* If you have any special requests or questions, you can add them in the Notes field.
* If you have any issues with your food order or need assistance, contact us at the phone number you provided.
