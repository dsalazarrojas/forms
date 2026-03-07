<thinking>
We need to consider that the form is intended for restaurant managers to collect order information from customers. It's likely that the form is designed to streamline the order-taking process, ensuring accurate and complete customer data for efficient order management. To confirm, the form includes fields for contact info, payment methods, pizza size, toppings, quantity, and order details such as date and time. This seems to be a straightforward form for ordering pizzas, and the fields provided cover the necessary information for a smooth and organized ordering process.
</thinking>

# Pizza Order Form - Help Guide
## Purpose
The Pizza Order Form is designed to collect accurate and complete information from customers for efficient order management.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the contact information (Contact Info) with your name and phone number.
2. Select the desired payment method (Payment Method).
3. Choose the size of the pizza you'd like to order (Pizza Size).
4. Select any desired toppings (Toppings).
5. Enter the quantity of the pizza you'd like to order (Quantity).
6. Enter the date and time of your order (Date and Time).

## Field-by-Field Explanation
* **Delivery Info** (`delivery_info`, text, Optional):
	+ Enter any additional delivery instructions or details you'd like to include.
* **Contact Info** (`contact_info`, text, Required):
	+ Fill in your name and phone number for efficient order processing.
* **Payment Method** (`payment_method`, select_one, Required):
	+ Choose from: Pay with card, Pay with cash, Pay with PayPal.
* **Order Info** (`order_info`, note, Optional):
	+ Enter any additional order details or comments.
* **Pizza Size** (`pizza_size`, select_one, Required):
	+ Choose from: Small, Medium, Large.
* **Toppings** (`toppings`, select_multiple, Optional):
	+ Select any or all of: Mozzarella, Tomato sauce, Mushrooms.
* **Quantity** (`quantity`, number, Required):
	+ Enter the number of pizzas you'd like to order.
* **Email** (`email`, email, Optional):
	+ Enter your email address if you'd like to receive updates or confirmations about your order.
* **Phone** (`phone`, text, Required):
	+ Fill in your phone number for easy communication with our staff.
* **Date** (`date`, date, Required):
	+ Enter the date you'd like to receive your order.
* **Time** (`time`, time, Required):
	+ Enter the time you'd like to receive your order.
* **Comments** (`comments`, note, Optional):
	+ Enter any additional comments or notes for our staff to consider during order processing.
