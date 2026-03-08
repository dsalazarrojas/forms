# Disposable Menu Order Form - Help Guide
## Purpose
This form is for customers to submit their order information for the disposable menu service. It includes fields for menu items, special instructions, payment method, order date and time, and customer details such as address, city, state, zip, and country.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select one or more items from the "Menu Items" field.
2. If you have any special instructions for your order, you can enter them in the "Special Instructions" field.
3. Choose your payment method from the "Payment Method" field.
4. Enter your order date and time in the "Order Date" field.
5. Enter your customer address, city, state, zip, and country in the respective fields.
6. Enter any customer comments or additional information in the "Order Comments" field (optional).

## Field-by-Field Explanation
* **Menu Items** (`menu_items`, `select_multiple`, required): Select one or more items from the list to include in your order.
* **Special Instructions** (`special_instructions`, `note`, required): Enter any special instructions or notes for your order.
* **Payment Method** (`payment_method`, `select_one`, required): Choose how you will be paying for your order (e.g., Cash or Credit).
* **Order Date** (`order_date`, `date`, required): Enter the date of your order.
* **Order Time** (`order_time`, `time`, required): Enter the time of your order.
* **Customer Address** (`customer_address`, `text`, required): Enter your customer address.
* **Customer City** (`customer_city`, `text`, required): Enter your customer city.
* **Customer State** (`customer_state`, `text`, required): Enter your customer state.
* **Customer Zip** (`customer_zip`, `text`, required): Enter your customer zip code.
* **Customer Country** (`customer_country`, `text`, required): Enter your customer country.
* **Order Comments** (`order_comments`, `note`, required): Enter any additional comments or information about your order (optional).
