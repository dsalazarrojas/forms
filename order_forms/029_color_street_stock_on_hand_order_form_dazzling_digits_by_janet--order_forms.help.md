# Color Street Stock On Hand Order Form - Dazzling Digits By Janet - Help Guide
## Purpose
This form is for customers to place an order for stock from Janet's business, Dazzling Digits By Janet.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and email address in the respective fields.
2. Provide your shipping address in the "Shipping Address" field.
3. If you wish to provide a phone number, enter it in the "Phone (Optional)" field.
4. Select the sets you wish to order from the "Select from Janet's Stock" section.
5. Enter the total number of sets you are requesting.
6. Indicate if this is a "Buy 3 Get 1" order by selecting the corresponding option.
7. Choose how you would like to pay Janet (Venmo, PayPal, or Cash).
8. Enter your payment username.
9. Select your preferred shipping method (Standard, Priority, or Janet's Porch Pick-up).
10. If applicable, enter the name of the party hostess and a personal message for Janet.

## Field-by-Field Explanation
* **Name** (`janet_customer_name`, text, required): Enter your name as you would like to be addressed.
* **Email** (`janet_email`, email, required): Enter your email address for communication and order updates.
* **Shipping Address** (`janet_shipping`, text, required): Provide your shipping address for delivery of the ordered stock.
* **Phone (Optional)** (`janet_phone`, text, required/optional): Enter your phone number if you wish to provide it.
* **Select from Janet's Stock** (`section_janet_stock`, note, required): Select the sets you wish to order exactly as shown in the album.
* **Sets Requested** (`janet_sets_ordered`, text, required): Enter the total number of sets you are requesting.
* **Total number of sets** (`janet_total_sets`, number, required): Enter the total number of sets you are requesting.
* **Is this a Buy 3 Get 1 order?** (`janet_b3g1_check`, select_one, required): Select 'True' if this is a "Buy 3 Get 1" order.
* **How would you like to pay Janet?** (`janet_pay_type`, select_one, required): Choose how you would like to pay Janet (Venmo, PayPal, or Cash).
* **Payment Username** (`janet_pay_user`, text, required): Enter your payment username.
* **Delivery Choice** (`janet_shipping_type`, select_one, required): Select your preferred shipping method (Standard, Priority, or Janet's Porch Pick-up).
* **Party Hostess (if any)** (`janet_hostess`, text, required/optional): Enter the name of the party hostess if applicable.
* **Personal Message for Janet** (`janet_notes`, text, required/optional): Enter a personal message for Janet if you wish to do so.
