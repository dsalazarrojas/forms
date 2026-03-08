# Stripe Clothing Order Form - Help Guide
## Purpose
This form is used by merchants to create and manage orders for clothing items.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your first name and last name in the respective fields.
2. Enter your email address in the email field, if desired.
3. Enter your address in the address field, if desired.
4. Select the order items you wish to order from the drop-down list (T-Shirt, Towel, Phone Case).
5. Enter the order date in the date field in the format MM/DD/YYYY.
6. Select a payment method (Stripe, Bank Transfer, PayPal) for payment processing.
7. Provide any additional note or comments, if desired.
8. Enter your phone number in the phone field.
9. Enter the assigned tool name in the assigned tool field.
10. Enter any customer notes or comments in the customer note field, if desired.
11. Enter any merchant notes or comments in the merchant note field, if desired.
12. Enter the Stripe token for payment processing, if desired.
13. Enter the customer ID and merchant ID, if desired.
14. Select the order status as Active or Inactive.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your identification.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification.
* **Email** (`email`, email, optional): Enter your email address if you want to be contacted regarding your order.
* **Address** (`address`, text, optional): Enter your address for delivery purposes.
* **Zip Code** (`zip_code`, number, optional): Enter your zip code for delivery purposes.
* **Order Items** (`order_items`, select_multiple, optional): Select the clothing items you wish to order from the drop-down list (T-Shirt, Towel, Phone Case).
* **Order Date** (`order_date`, date, required): Enter the date in the format MM/DD/YYYY.
* **Payment Method** (`payment_method`, select_one, optional): Select the payment method for processing (Stripe, Bank Transfer, PayPal).
* **Note** (`note`, text, optional): Enter any additional comments or notes regarding your order.
* **Phone** (`phone`, text, required): Enter your phone number for contact purposes.
* **Assigned Tool** (`assigned_tool`, text, required): Enter the name of the assigned tool.
* **Customer Note** (`customer_note`, text, optional): Enter any comments or notes from the customer, if desired.
* **Merchant Note** (`merchant_note`, text, optional): Enter any comments or notes from the merchant, if desired.
* **Stripe Token** (`stripe_token`, text, optional): Enter the Stripe token for payment processing, if desired.
* **Customer ID** (`customer_id`, number, optional): Enter the customer ID, if desired.
* **Merchant ID** (`merchant_id`, number, optional): Enter the merchant ID, if desired.
* **Order Status** (`order_status`, select_one, optional): Select the order status as Active or Inactive.

## Tips
* Please ensure all required fields are completed accurately to avoid any errors or issues with order processing.
* Review the form carefully before submitting to ensure all information is accurate and correct.
