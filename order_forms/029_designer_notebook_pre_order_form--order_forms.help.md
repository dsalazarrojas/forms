<thinking>...</thinking>

# designer_notebook_pre_order_form - Help Guide
## Purpose
The designer_notebook_pre_order_form is a form used to capture order details for a notebook design. This form is used by designers to create pre-orders for their products, providing information about the customer, billing and delivery details, payment preferences, and order notes. It helps designers to manage their orders efficiently and accurately.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer details, including their name, email, and other relevant information.
2. Provide billing details, such as their address, phone number, and contact method.
3. Enter delivery details, including delivery timeframe, shipping address, and other relevant information.
4. Choose a payment method (card payment, PayPal, or bank transfer).
5. Add any additional order notes or instructions.
6. Enter product details, including product name, quantity, and price per unit.
7. Calculate the subtotal, tax, and total cost of the order.

## Field-by-Field Explanation

* **Customer Details** (`customer_details`, text, required): Enter the customer's name, email, and other relevant information to identify the customer.
* **Billing Details** (`billing_details`, text, required): Enter the customer's billing address, phone number, and contact method to process payment and communicate with the customer.
* **Delivery Details** (`delivery_details`, text, required): Enter the delivery timeframe, shipping address, and other relevant information to ensure timely delivery.
* **Payment Preferences** (`payment_preferences`, text, required): Choose a payment method, such as card payment, PayPal, or bank transfer, to process the payment for the order.
* **Payment Method** (`payment_method`, select_multiple, required): Select one or more payment methods from the options provided.
* **Other Payment Method** (`payment_method_other`, text, optional): Enter any additional payment details if not using the options provided.
* **Order Notes** (`order_notes`, text, optional): Add any additional notes or instructions for the order.
* **Delivery Timeframe** (`delivery_timeframe`, select_one, required): Choose a delivery timeframe from the options provided to ensure timely delivery.
* **Other Delivery Timeframe** (`delivery_timeframe_other`, text, optional): Enter any alternative delivery timeframe if not using the options provided.
* **Delivery Instructions** (`delivery_instructions`, text, optional): Enter any specific instructions for delivery, such as delivery location or contact person.
* **Shipping Address** (`shipping_address`, text, required): Enter the shipping address to ensure accurate delivery.
* **Shipping City** (`shipping_city`, text, required): Enter the city of the shipping address.
* **Shipping State** (`shipping_state`, text, required): Enter the state of the shipping address.
* **Shipping Postal Code** (`shipping_postal_code`, text, required): Enter the postal code of the shipping address.
* **Delivery Country** (`delivery_country`, text, required): Enter the country of the delivery address.
* **Delivery Notes** (`delivery_notes`, text, optional): Add any additional delivery notes or instructions.
* **Designer ID** (`designer_id`, text, optional): Enter the ID of the designer who created the order.
* **Designer Name** (`designer_name`, text, optional): Enter the name of the designer who created the order.
* **Product ID** (`product_id`, text, optional): Enter the ID of the product being ordered.
* **Product Name** (`product_name`, text, optional): Enter the name of the product being ordered.
* **Quantity Ordered** (`quantity_ordered`, number, optional): Enter the quantity of the product being ordered.
* **Price per Unit** (`price_per_unit`, number, optional): Enter the price per unit of the product.
* **Subtotal** (`subtotal`, text, required): Calculate the subtotal of the order based on the product price and quantity.
* **Tax** (`tax`, text, required): Calculate the tax based on the subtotal and tax rate.
* **Total** (`total`, text, required): Calculate the total cost of the order based on the subtotal and tax.
