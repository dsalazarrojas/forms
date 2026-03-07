<thinking>
This form is designed for customers to submit an order for beverage line cleaners. The customer needs to select the order type, enter contact and billing/shipping information, and provide other relevant details such as quantity, special instructions, payment method, and shipping details. The form also includes fields for customer and ship to options, which are not used in the provided YAML. 

The form is likely used in an e-commerce or retail environment where customers can place orders for beverage line cleaners online or over the phone. 

The fields on this form are likely used by the business to process the order and fulfill the order accurately. The fields are designed to be completed by the customer, but some fields like customer and ship to options may not be necessary for every order and can be skipped. 

The business may use this form to track the order, process the payment, and communicate with the customer regarding the order status.
</thinking>

# Smart Beverage Line Cleaner Order Form - Help Guide
## Purpose
The Smart Beverage Line Cleaner Order Form is used to place an order for a beverage line cleaner. This form collects relevant information to process the order accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of order you would like to place (e.g., "Yes" for a standard order, "No" for a special order).
2. Enter the quantity of the beverage line cleaner you would like to order.
3. Enter any special instructions or comments regarding your order.
4. Select the payment method you would like to use (e.g., "Yes" for a specific payment method).
5. Enter your contact information, including email.
6. Select the shipping address and contact name.
7. Enter the shipping address details, including city, state, zip, and country.
8. Enter the assigned tool or equipment number.
9. Enter any comments or notes regarding your order.
10. Review and submit your order to complete the form.

## Field-by-Field Explanation

* **order_type** (`order_type`, select_multiple, required): Select the type of order you would like to place (e.g., "Yes" for a standard order, "No" for a special order).
* **quantity** (`quantity`, number, optional): Enter the quantity of the beverage line cleaner you would like to order.
* **order_comments** (`order_comments`, note, optional): Enter any special instructions or comments regarding your order.
* **customer** (`customer`, select_one, required): Select whether or not you are a customer (e.g., "Yes" for a customer, "No" for other).
* **contact** (`contact`, text, optional): Enter your contact information.
* **email** (`email`, email, required): Enter your email address.
* **ship_to** (`ship_to`, select_one, required): Select whether or not you want to ship to yourself (e.g., "Yes" for shipping to yourself, "No" for other).
* **special_instructions** (`special_instructions`, note, optional): Enter any special instructions or comments regarding your order.
* **payment_method** (`payment_method`, select_multiple, required): Select the payment method you would like to use (e.g., "Yes" for a specific payment method, "No" for other).
* **order_date** (`order_date`, date, required): Enter the date of the order.
* **order_time** (`order_time`, time, required): Enter the time of the order.
* **order_notes** (`order_notes`, note, optional): Enter any comments or notes regarding your order.
* **billing_address** (`billing_address`, note, optional): Enter your billing address information.
* **billing_city** (`billing_city`, text, required): Enter the city of your billing address.
* **billing_state** (`billing_state`, text, required): Enter the state of your billing address.
* **billing_zip** (`billing_zip`, text, required): Enter the zip code of your billing address.
* **billing_country** (`billing_country`, text, required): Enter the country of your billing address.
* **ship_name** (`ship_name`, text, required): Enter the name of the person to ship to.
* **ship_street** (`ship_street`, text, required): Enter the shipping street address.
* **ship_city** (`ship_city`, text, optional): Enter the city of the shipping address.
* **ship_state** (`ship_state`, text, required): Enter the state of the shipping address.
* **ship_zip** (`ship_zip`, text, required): Enter the zip code of the shipping address.
* **ship_country** (`ship_country`, text, required): Enter the country of the shipping address.
* **assigned_tool** (`assigned_tool`, text, required): Enter the assigned tool or equipment number.
* **comments** (`comments`, note, optional): Enter any comments or notes regarding your order.
