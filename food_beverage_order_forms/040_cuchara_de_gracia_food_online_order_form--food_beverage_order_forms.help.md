# Cuchara De Gracia Food Online Order Form - Help Guide
## Purpose
The Cuchara De Gracia Food Online Order Form is designed to collect information from customers to fulfill their food and beverage orders. This form helps us understand their preferences, requirements, and payment details for a smooth and efficient order processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your order form with the required fields. The required fields are marked with an asterisk (*) symbol.
2. Select the payment method you would like to use for your order.
3. Fill in your delivery information, including date, time, and any special delivery notes.
4. Review all fields carefully before submitting your order.

## Field-by-Field Explanation
### Order Form (1)
*   **Order Form** (`order_form`, `text`, required: false): Enter a brief description of your order, if you have any.
*   **Customer Info** (`customer_info`, `text`, required: false): Provide your contact information to help us reach out to you.
*   **Contact Info** (`contact_info`, `text`, required: false): Enter your contact information to enable easy communication.
*   **Order Info** (`order_info`, `text`, required: false): Enter any additional order details or comments.
*   **Order Items** (`order_info_1`, `text`, required: false): Select from the following options to choose the items you'd like to order:
	+   Option 1
	+   Option 2
	+   Option 3
*   **Item 1** (`order_info_1_items`, `select_multiple`, required: false): Select the item(s) you want to order.
*   **Item Name** (`order_info_1_1`, `text`, required: false): Enter the name of the item you've chosen.
*   **Quantity** (`order_info_1_2`, `number`, required: false): Enter the quantity of each item you'd like to order.
*   **Price** (`order_info_1_3`, `number`, required: false): Enter the price of the item(s) you've chosen.
*   **Item Description** (`order_info_1_4`, `text`, required: false): Enter a description of the item, if you'd like.

### Payment Info
*   **Card Number** (`payment_info_1`, `text`, required: false): Enter your credit card number for payment.
*   **Expiration** (`payment_info_1`, `text`, required: false): Enter the expiration date of your card.
*   **CVV** (`payment_info_2`, `text`, required: false): Enter the CVV (Card Verification Value) for security purposes.
*   **Total** (`payment_info_3`, `number`, required: false): This field will display the total cost of your order.
*   **Payment Method** (`payment_info_4`, `select_multiple`, required: true): Select your preferred payment method:
	+   American Express
	+   Visa
	+   Mastercard

### Delivery Info
*   **Delivery Date** (`delivery_info_1`, `date`, required: false): Select the date for your delivery.
*   **Delivery Time** (`delivery_info_2`, `time`, required: false): Select the time for your delivery.
*   **Delivery Notes** (`delivery_info_3`, `text`, required: false): Enter any special delivery notes or instructions.
*   **Delivery Address** (`delivery_info_4`, `text`, required: false): Enter your delivery address.
*   **Delivery Zip** (`delivery_info_5`, `text`, required: false): Enter your delivery zip code.

Note: All fields are optional unless marked as required, marked with an asterisk (*) symbol.
