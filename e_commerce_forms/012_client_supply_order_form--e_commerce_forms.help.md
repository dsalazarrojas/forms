# <thinking>
This form is designed for clients to place orders for supplies with the company. The form is used for both internal employees and external clients. It's meant to gather necessary information to process the order and ensure accurate delivery.
</thinking>

# Client Supply Order Form - Help Guide

## Purpose
This form is used for clients to place orders for supplies. It is an essential part of the ordering process, and it must be completed accurately to ensure timely and correct delivery.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your full name in the "Full Name" field. This is a required field.
2. Enter your email address in the "Email Address" field. This is a required field.
3. Enter your phone number in the "Phone Number" field. This is a required field.
4. Select the date you would like to receive your order from the calendar in the "Order Date" field. This is a required field.
5. Select the date you would like your order to be delivered from the calendar in the "Requested Delivery Date" field. This is a required field.
6. Describe the item you are ordering in the "Item Description" field. This is a required field.
7. Enter the quantity you would like to order in the "Quantity" field. This is a required field.
8. Choose the unit type (Pieces, Boxes, Cases, Packs, Bulk, or Other) in the "Unit Type" field. This is a required field.
9. Enter the price per unit in the "Unit Price" field. This is a required field.
10. If you have additional items to order, select "Yes" in the "Additional items to order?" field.
11. Enter your shipping address in the "Shipping Street Address" field. This is a required field.
12. Enter your city in the "City" field. This is a required field.
13. Enter your state or province in the "State/Province" field. This is a required field.
14. Enter your ZIP or postal code in the "ZIP/Postal Code" field. This is a required field.
15. Enter your country in the "Country" field. This is a required field.
16. Choose your preferred shipping method (Standard Shipping, Express Shipping, Overnight, or Pickup) in the "Preferred shipping method" field. This is a required field.
17. If you have any special delivery instructions, enter them in the "Special delivery instructions" field. This is an optional field.
18. If your billing address is the same as your shipping address, select "Yes" in the "Billing address same as shipping?" field.

## Field-by-Field Explanation

* **Full Name** (`customer_name`, text, required): Enter your full name as it appears on your identification.
* **Email Address** (`email`, email, required): Enter a valid email address where you can be reached.
* **Phone Number** (`phone`, text, required): Enter your phone number where you can be reached.
* **Order Date** (`order_date`, date, required): Select the date you would like to receive your order.
* **Requested Delivery Date** (`requested_delivery_date`, date, required): Select the date you would like your order to be delivered.
* **Item Description** (`item_description`, text, required): Describe the item you are ordering.
* **Quantity** (`quantity`, number, required): Enter the quantity of the item you would like to order.
* **Unit Type** (`unit_type`, select_one, required): Choose the unit type for your order.
* **Unit Price** (`unit_price`, number, required): Enter the price per unit for your order.
* **Additional items to order?** (`additional_items`, select_one, optional): If you have additional items to order, select "Yes".
* **Shipping Street Address** (`shipping_address`, text, required): Enter your shipping address.
* **City** (`shipping_city`, text, required): Enter the city where you would like your order to be delivered.
* **State/Province** (`shipping_state`, text, required): Enter the state or province where you would like your order to be delivered.
* **ZIP/Postal Code** (`shipping_zip`, text, required): Enter your ZIP or postal code where you would like your order to be delivered.
* **Country** (`shipping_country`, text, required): Enter your country where you would like your order to be delivered.
* **Preferred shipping method** (`shipping_method`, select_one, required): Choose your preferred shipping method.
* **Special delivery instructions** (`special_instructions`, text, optional): If you have any special delivery instructions, enter them here.
* **Billing address same as shipping?** (`same_as_shipping`, select_one, required): If your billing address is the same as your shipping address, select "Yes".
