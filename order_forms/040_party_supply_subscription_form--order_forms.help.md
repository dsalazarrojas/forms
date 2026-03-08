<thinking>**This form is designed to collect information for a party supply subscription order. It is intended for customers to provide details about their party supply order, including party frequency, date, time, delivery address, and billing information. This form will help the system to efficiently process and fulfill the order. Please ensure that all required fields are filled out correctly to avoid delays in processing your order. If you have any questions or concerns, please contact our support team.**

# party_supply_subscription_form - Help Guide
## Purpose
This form is used to collect information for a party supply subscription order.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide order details in the first field.
2. Select the party supplies you would like to order.
3. Enter your delivery address.
4. Fill in your delivery city, state, and country.
5. Choose your party frequency from the dropdown menu.
6. Enter the date of your party (optional).
7. Select the time of your party (optional).
8. Specify the length of your subscription (optional).
9. Provide any special delivery notes.
10. Enter your billing name, email, and phone number (optional).

## Field-by-Field Explanation

* **Order Details** (`order_details`, text, required: false): Enter the details of your order.
* **Party Supplies** (`party_supplies`, select_multiple, required: false): Choose the party supplies you would like to order.
* **Delivery Address** (`delivery_address`, text, required: false): Enter your delivery address, including the address line 1.
* **City** (`delivery_city`, text, required: false): Enter the city where you would like to receive your order.
* **State** (`delivery_state`, text, required: false): Enter the state where you would like to receive your order.
* **ZIP** (`delivery_zip`, text, required: false): Enter the ZIP code where you would like to receive your order.
* **Country** (`delivery_country`, text, required: false): Enter the country where you would like to receive your order.
* **Party Frequency** (`party_frequency`, select_one, required: true): Choose the frequency of your party (Daily, Weekly, Monthly).
* **Party Date** (`party_date`, date, required: false): Enter the date of your party (optional).
* **Party Time** (`party_time`, time, required: false): Enter the time of your party (optional).
* **Subscription Length** (`subscription_length`, text, required: false): Specify the length of your subscription (optional).
* **Delivery Notes** (`delivery_notes`, text, required: false): Provide any special delivery instructions or notes.
* **Billing Name** (`billing_name`, text, required: false): Enter your billing name.
* **Billing Email** (`billing_email`, email, required: false): Enter your billing email address.
* **Billing Phone** (`billing_phone`, text, required: false): Enter your billing phone number.
