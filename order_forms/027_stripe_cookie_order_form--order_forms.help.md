# stripe_cookie_order_form - Help Guide
## Purpose
This form is used to order cookies and collect payment information for the order.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Cookie Order Form" field with any special comments or requests you have for your order.
2. Select the type of cookie you would like to order from the "Cookie Type" field.
3. Enter the quantity of cookies you would like to order in the "Quantity Ordered" field.
4. Add any special instructions or comments in the "Special Instructions" field.
5. Fill in your billing information, including your name, email, phone number, address, city, state, and zip code in the appropriate fields.
6. Select whether or not you have a payment card (this will be used for payment purposes).
7. Enter your card number, expiry date, and CVV for payment purposes.
8. Add any comments or instructions for the billing section.
9. Fill in who submitted the form and when it was submitted.

## Field-by-Field Explanation

* **Cookie Order Form** (`cookie_order_form`, text, optional): Enter any special comments or requests you have for your order.
* **Cookie Type** (`cookie_type`, text, optional): Select the type of cookie you would like to order.
* **Cookie Size** (`cookie_size`, number, optional): Enter the size of the cookie you would like to order (this field is likely not used based on the options, I assume it's for future reference).
* **Quantity Ordered** (`quantity_ordered`, number, optional): Enter the quantity of cookies you would like to order.
* **Special Instructions** (`special_instructions`, note, optional): Add any special requests or comments for your order.
* **Billing Details** (`billing_details`, text, optional): Fill in your billing information, including your name, email, phone number, address, city, state, and zip code.
* **First Name** (`billing_first_name`, text, optional): Enter your first name for billing purposes.
* **Last Name** (`billing_last_name`, text, optional): Enter your last name for billing purposes.
* **Email** (`billing_email`, email, optional): Enter your email address for billing purposes.
* **Phone** (`billing_phone`, text, optional): Enter your phone number for billing purposes.
* **Address** (`billing_address`, text, optional): Enter your address for billing purposes.
* **City** (`billing_city`, text, optional): Enter your city for billing purposes.
* **State** (`billing_state`, text, optional): Enter your state for billing purposes.
* **Zip** (`billing_zip`, text, optional): Enter your zip code for billing purposes.
* **Card Type** (`billing_card_type`, select_one, optional): Select whether or not you have a payment card.
* **Card Number** (`billing_card_number`, text, optional): Enter your card number for payment purposes.
* **Expiry Date** (`billing_expiry_date`, date, optional): Enter your card expiry date for payment purposes.
* **CVV** (`billing_cvv`, text, optional): Enter your CVV for payment purposes.
* **Comments** (`billing_comments`, text, optional): Add any comments or instructions for the billing section.
* **Instructions** (`billing_instructions`, text, optional): Add any additional instructions for the billing section.
* **Form Submitted By** (`form_submitted_by`, text, optional): Enter who submitted the form.
* **Form Submitted On** (`form_submitted_on`, time, optional): Enter when the form was submitted.
* **Order ID** (`order_id`, text, optional): Enter your order ID.
* **Order Date** (`order_date`, date, optional): Enter the date of your order.
* **Comments** (`order_comments`, text, optional): Enter any comments or notes for your order.

## Tips
* Make sure to fill in all required fields to ensure your order is processed correctly.
* Double-check your information for accuracy before submitting the form.
* If you have any questions or issues with your order, contact the cookie shop.
