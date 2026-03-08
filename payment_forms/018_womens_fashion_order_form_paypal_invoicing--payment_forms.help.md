# Womens Fashion Order Form Paypal Invoicing - Help Guide
## Purpose
The Womens Fashion Order Form Paypal Invoicing is used to generate a PayPal invoice for a customer's order in the womens fashion industry.

## How To Complete This Form

To complete this form, follow these steps:

* Provide your shipping address, including your name, address, and any other relevant contact information.
* Enter your customer name.
* Enter your email address for communication purposes.
* If you have a phone number, please enter it. This is not required.
* Describe your order details, such as the items purchased and their prices.
* Enter the subtotal of your order.
* Select the tax rate applicable to your order (10%, 5%, or 20%).
* If you would like to add shipping cost, please enter it. This is not required.
* Choose your preferred payment method (PayPal, Credit Card, or Bank Transfer).
* Calculate the total cost of your order by multiplying the subtotal by the tax rate and adding the shipping cost (if applicable).

## Field-by-Field Explanation
* **Shipping Address** (`shipping_address`, `text`, `true`): This field is used to enter your shipping address. Please ensure that you enter your full address, including your name, address, and any relevant contact information.
* **Customer Name** (`customer_name`, `text`, `true`): This field is used to enter your customer name.
* **Email** (`email`, `email`, `true`): This field is used to enter your email address for communication purposes.
* **Phone** (`phone`, `text`, `false`): This field is used to enter your phone number. This is not required.
* **Order Details** (`order_details`, `note`, `true`): This field is used to describe your order details, such as the items purchased and their prices.
* **Order Subtotal** (`order_subtotal`, `number`, `true`): This field is used to enter the subtotal of your order.
* **Tax Rate** (`tax_rate`, `select_one`, `true`): This field is used to select the tax rate applicable to your order (10%, 5%, or 20%).
* **Shipping Cost** (`shipping_cost`, `number`, `false`): This field is used to enter the shipping cost. This is not required.
* **Payment Method** (`payment_method`, `select_one`, `true`): This field is used to choose your preferred payment method (PayPal, Credit Card, or Bank Transfer).
* **Total Cost** (`total_cost`, `number`, `true`): This field is used to calculate the total cost of your order by multiplying the subtotal by the tax rate and adding the shipping cost (if applicable).
