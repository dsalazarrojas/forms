<thinking>...</thinking>

# Screen Printing Order Form - Help Guide

## Purpose
The Screen Printing Order Form is designed to collect information and order details from customers for a screen printing service. This form helps to ensure accurate and efficient processing of orders.

## How To Complete This Form
1. Fill in the customer's information, including their email address and phone number.
2. Select the T-shirt size and color.
3. Enter the quantity of the T-shirt to be ordered.
4. Choose the payment method (card, PayPal, or bank transfer).
5. Provide a detailed description of the order.
6. Select the shipping method (standard, express, or local delivery).

## Field-by-Field Explanation
* **Customer Info** (`customer_info`, text, optional): Enter the customer's name, address, and other relevant details.
* **T-Shirt Size** (`t_shirt_size`, text, optional): Select the size of the T-shirt from the available options.
* **T-Shirt Color** (`t_shirt_color`, select_one, optional): Choose the color of the T-shirt from the available options.
* **Quantity** (`quantity`, number, optional): Enter the number of T-shirts to be ordered.
* **Price** (`price`, number, optional): Enter the price of the T-shirt.
* **Payment Method** (`payment_method`, select_one, optional): Select the method of payment (card, PayPal, or bank transfer).
* **Payment Details** (`payment_details`, text, optional): Enter any additional payment details, such as the card number or PayPal account email.
* **Order Summary** (`order_summary`, note, optional): Briefly describe the order for internal reference.
* **Customer Email** (`customer_email`, email, optional): Enter the customer's email address for communication.
* **Customer Phone** (`customer_phone`, text, optional): Enter the customer's phone number for contact.
* **Order Status** (`order_status`, select_one, optional): Select the current status of the order (pending, shipping, or delivered).
* **Shipping Method** (`shipping_method`, select_multiple, optional): Choose the shipping method (standard, express, or local delivery).
