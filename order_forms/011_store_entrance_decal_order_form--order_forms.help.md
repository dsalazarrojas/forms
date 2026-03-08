<thinking>
This form is used to collect order information from customers. The purpose of this form is to gather data about the customer, their business, the product they are interested in purchasing, and the shipping details. The form collects information such as the customer's name, business name, product style, color, type, quantity, shipping address, and any additional notes. It also allows the customer to confirm their order details.
The form will be completed by a customer or user who wants to purchase a product.
</thinking>

# store_entrance_decal_order_form - Help Guide
## Purpose
The store entrance decal order form is a tool used to gather information from customers about their decal purchase order.
## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your customer information, including your name and any other relevant details.
2. Enter your business information, if applicable.
3. Choose the product style by selecting "Yes" or "No" in the Decal Design field.
4. Select the color of the decal you wish to purchase.
5. Choose the type of decal you need, from the options provided.
6. Enter the quantity of decals you require.
7. Provide your shipping address and any additional shipping information.
8. Add any notes about your order.
9. Confirm your order details by selecting "True".

## Field-by-Field Explanation
* **Customer Information** (`customer_info`, `text`, required: false): Fill in your name and any other relevant details.
* **Business Information** (`business_info`, `text`, required: false): Enter any business name, address, or other details related to your business.
* **Product Information** (`product_info`, `text`, required: false): Choose the product style by selecting "Yes" or "No" in the Decal Design field.
* **Decal Design** (`deca_design`, `select_multiple`, required: false): Select one or more of the following options:
	+ "Yes"
	+ "No"
* **Color** (`color`, `select_one`, required: false): Select one of the following options:
	+ Red
	+ Blue
	+ Green
	+ Yellow
* **Decal Type** (`deca_type`, `select_one`, required: false): Select one of the following options:
	+ Vinyl
	+ Magnetic
	+ Acrylic
* **Quantity** (`quantity`, `number`, required: false): Enter the number of decals you require.
* **Shipping Address** (`shipping_address`, `text`, required: false): Enter your shipping address.
* **Shipping Information** (`shipping_info`, `text`, required: false): Enter any additional shipping details.
* **Notes** (`notes`, `text`, required: false): Add any notes or additional information about your order.
* **Confirm** (`confirm`, `select_one`, required: false): Confirm your order details by selecting "True".
