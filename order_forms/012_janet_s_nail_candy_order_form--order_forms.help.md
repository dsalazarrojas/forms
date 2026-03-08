# janets_nail_candy_order_form - Help Guide
## Purpose
The janets_nail_candy_order_form is an order form for customers to provide their details and confirm their orders at Janet's Nail Candy store.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's information on the customer_info page.
2. Enter the shipping address and any additional information on the shipping_address page.
3. List the product(s) ordered on the product_order page.
4. Fill in the payment information on the payment_info page.
5. Select the shipping method and payment method on the respective pages.
6. Enter the total cost of the order on the total_cost page.
7. Add any additional notes on the notes page.
8. Confirm the order on the confirm_order page.

## Field-by-Field Explanation

* **customer_info** (`customer_info`, text, required: false): Enter the customer's name, email, and phone number.
* **shipping_address** (`shipping_address`, text, required: false): Enter the customer's shipping address, including street address, city, state, and zip code.
* **product_order** (`product_order`, text, required: false): List the product(s) ordered, including quantity and description.
* **payment_info** (`payment_info`, text, required: false): Enter the payment method and card details.
* **shipping_method** (`shipping_method`, select_one, required: false): Select the shipping method (USPS, UPS, Fed Ex).
* **payment_method** (`payment_method`, select_one, required: false): Select the payment method (Credit Card, Bank Account).
* **total_cost** (`total_cost`, number, required: false): Enter the total cost of the order.
* **notes** (`notes`, note, required: false): Add any additional notes or instructions for the order.
* **confirm_order** (`confirm_order`, select_one, required: false): Confirm that the order is correct and complete.

## Tips
- Please ensure all fields are filled in accurately to avoid errors in processing the order.
- Use the provided options for shipping and payment methods to ensure timely and secure delivery.
- If you have any questions or need assistance, contact the store staff.
