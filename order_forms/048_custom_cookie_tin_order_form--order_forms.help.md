<thinking>
To create the help guide for this form, I'll first review the provided YAML file and analyze the form's purpose and fields. The form is titled "custom_cookie_tin_order_form" and is used for ordering custom cookies in various types, sizes, colors, and messages. Each field is categorized into pages with unique IDs and names. The fields include customer name, contact number, tin type, cookie type, tin size, tin color, cookie color, tin design, tin message, and tin quantity. The form has multiple select_one and select_multiple fields for different options, and text fields for custom tin design and message.

To ensure the form's purpose is understood, I'll provide an internal reasoning block that explains the form's intention and potential issues with duplication:

The form is designed for customers to order custom-made cookies with various options. Each field is designed to collect specific information about the customer and their order. However, it's essential to ensure that each order is unique and not a duplication of an existing one. This can be achieved by verifying the customer name and contact number against a database or registry of previous orders. Additionally, the select_one fields for tin type, size, color, and design should be validated to prevent incorrect or contradictory choices. The customer name and contact number fields should also be checked for validity and completeness.

</thinking>

# custom_cookie_tin_order_form - Help Guide
## Purpose
The custom cookie tin order form is designed for customers to order custom-made cookies with various options such as type, size, color, and design. To place an order, please ensure that all required fields are completed correctly.

## How To Complete This Form
1. Fill in your customer name and contact number in the respective fields.
2. Select the type of tin you'd like to order from the options provided.
3. Choose the cookie type and color from the options listed.
4. Select the size and color of the tin from the options provided.
5. Write a custom message for your tin, if desired.
6. Indicate the quantity of tins you'd like to order.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, required): Enter your full name as it appears on your identification.
* **Contact Number** (`contact_number`, optional): Enter your contact number for us to reach you for confirmation and delivery details.
* **Tin Type** (`tin_type`, optional): Select the type of tin you'd like to order from the options provided.
* **Cookie Type** (`cookie_type`, optional): Choose the type of cookie you'd like to have in your tin from the options listed.
* **Tin Size** (`tin_size`, optional): Select the size of the tin you'd like to have from the options provided.
* **Tin Color** (`tin_color`, optional): Choose the color of the tin from the options listed.
* **Cookie Color** (`cookie_color`, optional): Select the color of the cookie from the options provided.
* **Tin Design** (`tin_design`, optional): Enter any custom design you'd like to have on your tin.
* **Tin Message** (`tin_message`, optional): Write a message for the tin, if desired.
* **Tin Quantity** (`tin_quantity`, optional): Indicate the quantity of tins you'd like to order.
