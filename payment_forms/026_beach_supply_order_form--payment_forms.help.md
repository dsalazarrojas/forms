<thinking>
This form is designed to collect information from customers for their beach supply orders. The form is divided into several sections, including customer information (name, email, and phone number), order details (order date, delivery date, and delivery address), and order items (beach chairs, umbrellas, towels, coolers, boogie boards, surfboards, snorkel sets, beach toys, sunscreen, and other items). The form also requires the customer to select a payment method and provide a subtotal, shipping cost, and total amount. The "other items" field allows customers to list any additional items they would like to order. This form is intended for customers who wish to place an order for beach supplies. It is likely used by a business that sells beach supplies, such as surf shops or beach rental companies.
</thinking>

# Beach Supply Order Form - Help Guide

## Purpose
This form is for customers to place an order for their beach supply needs. Please fill out the form completely and accurately to ensure we can fulfill your order correctly.

## How To Complete This Form
1. Fill out the form in its entirety.
2. Make sure to provide your correct contact information.
3. Choose the items you would like to order and select the correct quantity.
4. Enter the delivery date and address.
5. Select your preferred payment method.
6. Review the subtotal, shipping cost, and total amount carefully before submitting the form.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required):
	+ This is where you will enter your full name as the customer.
* **Email Address** (`email_address`, `email`, required):
	+ This is the email address we will use to contact you with order updates and confirmations.
* **Phone Number** (`phone_number`, `text`, required):
	+ This is your contact phone number in case we need to reach you with order updates or issues.
* **Company Name** (`company_name`, `text`, optional):
	+ If you are placing an order on behalf of a business, enter the company name here.
* **Order Date** (`order_date`, `date`, required):
	+ This is the date you would like to receive your order.
* **Delivery Date** (`delivery_date`, `date`, required):
	+ This is the date you would like to receive your delivery.
* **Delivery Address** (`delivery_address`, `text`, required):
	+ This is the full address where you would like to receive your delivery.
* **Beach Chairs Quantity** (`beach_chairs_qty`, `number`, optional):
	+ Enter the number of beach chairs you would like to order.
* **Beach Umbrellas Quantity** (`beach_umbrellas_qty`, `number`, optional):
	+ Enter the number of beach umbrellas you would like to order.
* **Beach Towels Quantity** (`beach_towels_qty`, `number`, optional):
	+ Enter the number of beach towels you would like to order.
* **Coolers Quantity** (`coolers_qty`, `number`, optional):
	+ Enter the number of coolers you would like to order.
* **Boogie Boards Quantity** (`boogie_boards_qty`, `number`, optional):
	+ Enter the number of boogie boards you would like to order.
* **Surfboards Quantity** (`surfboards_qty`, `number`, optional):
	+ Enter the number of surfboards you would like to order.
* **Snorkel Sets Quantity** (`snorkel_sets_qty`, `number`, optional):
	+ Enter the number of snorkel sets you would like to order.
* **Beach Toys Quantity** (`beach_toys_qty`, `number`, optional):
	+ Enter the number of beach toys you would like to order.
* **Sunscreen Quantity** (`sunscreen_qty`, `number`, optional):
	+ Enter the number of bottles of sunscreen you would like to order.
* **Other Items** (`other_items`, `text`, optional):
	+ List any other items you would like to order that are not listed above.
* **Subtotal** (`subtotal`, `number`, optional):
	+ This will display the total cost of your order before tax and shipping.
* **Shipping Cost** (`shipping_cost`, `number`, optional):
	+ Enter the shipping cost for your order.
* **Total Amount** (`total_amount`, `number`, required):
	+ This is the final total cost of your order.
* **Payment Method** (`payment_method`, `select_one`, required):
	+ Choose how you would like to pay for your order (Credit Card, Debit Card, PayPal, Bank Transfer, or Invoice).
* **Special Instructions** (`special_instructions`, `text`, optional):
	+ Enter any special delivery instructions or notes for your order.

Please review the form carefully and fill out all required fields to ensure your order is processed correctly.
