# Cafe Order Form - Help Guide
## Purpose
The Cafe Order Form is used for customers to place cafe orders in advance, allowing the cafe to accurately and efficiently fulfill their orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer name field with your name.
2. Enter your contact phone number for delivery updates.
3. List the items you want to order, along with their quantities.
4. Choose whether you prefer pickup or delivery.
5. If you've chosen delivery, enter your address in the delivery address field.
6. Select your preferred payment method (card, cash, or online payment).
7. If necessary, provide any special instructions for your order (e.g., allergies or preferences).

## Field-by-Field Explanation
* **Customer name** (`customer_name`, text, required): Enter your name for the cafe staff to know who is placing the order.
* **Contact phone** (`contact_phone`, text, required): Enter your phone number for the cafe to contact you with delivery updates.
* **Order items and quantities** (`order_items`, text, required): List the items you want to order, along with their quantities (e.g., "Coffee, 1; Water, 2").
* **Pickup or delivery** (`pickup_or_delivery`, select_one, required): Choose whether you want to pick up your order or have it delivered.
* **Pickup time** (`pickup_time`, time, optional): If you've chosen pickup, select your preferred pickup time.
* **Delivery address** (`delivery_address`, text, optional): If you've chosen delivery, enter your address for the order to be delivered to.
* **Payment method** (`payment_method`, select_one, required): Choose how you want to pay for your order (card, cash, or online payment).
* **Special instructions** (`special_instructions`, text, optional): If you have any allergies or preferences, enter them here so the cafe can accommodate your needs.

## Tips
* Make sure to fill out all required fields to ensure your order can be accurately processed.
* If you're unsure about any field, refer to the provided hints for clarification.
* If you have any special instructions, please be as detailed as possible so the cafe staff can fulfill your order correctly.
