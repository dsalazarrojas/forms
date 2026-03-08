# Custom T Shirt Order Form Template - Help Guide

## Purpose
This form is designed to gather information from customers for creating custom T-shirts. Please fill in the required and optional fields to place your order.

## How To Complete This Form
- Start by filling in the "T-shirt Color", "T-shirt Size", and "T-shirt Type" fields to specify your design requirements.
- Then, select "Yes" or "No" for "Design Type" and "Type of T-shirt Order" fields.
- Enter your "Customer Name", "Email", and "Phone Number" in the respective fields.
- Choose a "Date" and "Time" for the order, if required.
- If you have any additional "Note" or instructions for the order, please provide them in the "Order Note" field.
- Finally, fill in the "Order Date" and "Order Time" for the order details.

## Field-by-Field Explanation

* **T-shirt Color** (`tshirt_color`, `text`, required): Please select the color of the T-shirt you want.
* **T-shirt Size** (`tshirt_size`, `select_one`, required): Choose the size of the T-shirt.
* **T-shirt Design** (`tshirt_design`, `text`, optional): Provide any additional design specifications for your T-shirt.
* **Customer Name** (`customer_name`, `text`, required): Enter your name.
* **Email** (`email`, `email`, required): Enter your email address.
* **Phone** (`phone`, `text`, required): Enter your phone number.
* **Date** (`date`, `date`, optional): Choose the date for the order, if required.
* **Time** (`time`, `time`, optional): Choose the time for the order, if required.
* **Note** (`note`, `note`, optional): Provide any additional note or instructions for the order.
* **Order Date** (`order_date`, `date`, required): Choose the date for the order.
* **Order Time** (`order_time`, `time`, required): Choose the time for the order.
* **Order Note** (`order_note`, `note`, optional): Provide any additional note or instructions for the order.
* **Order Type** (`order_type`, `select_one`, required): Select "Yes" or "No".
* **Design Type** (`tshirt_design_type`, `select_one`, required): Select "Yes" or "No".
* **T-shirt Type** (`tshirt_type`, `select_multiple`, optional): Choose multiple T-shirt types.
* **T-shirt Color Type** (`tshirt_color_type`, `select_multiple`, optional): Choose multiple colors for the T-shirt.
* **Total** (`total`, `number`, optional): This field is likely for internal use or calculation purposes, so it's left blank.
* **Yes/No** (`tshirt_size`, `select_one`, required): Select "Yes" or "No".

Please review the form carefully and fill in all relevant fields for successful placement of your order. If you have any questions, feel free to ask!
