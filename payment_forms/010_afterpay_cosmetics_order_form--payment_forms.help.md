<thinking>
We want to ensure that end-users understand the purpose and context of this form without duplicating information already provided in the form's fields. This form is for customers to place orders for cosmetics products, specifying their details such as full name, email address, the list of products ordered, quantity, and any special requests.
</thinking>

# Afterpay Cosmetics Order Form - Help Guide
## Purpose
This form is designed for customers to place orders for cosmetics products from Afterpay Cosmetics. To complete the form, please follow the steps below.

## How To Complete This Form
To place an order, please fill out the form with the required information. Start by providing your customer information, including your full name and email address. Then, list the products you'd like to order along with their quantities. If applicable, specify your preferred shade for any products. You can also choose to split the payment into installments using Afterpay. Lastly, provide your shipping address and contact phone number for updates.

## Field-by-Field Explanation

* **Full name** (`full_name`, `text`, required): Enter your full name as it appears on your identification documents.
* **Email address** (`email`, `email`, required): Enter your valid email address for confirmation and updates.
* **Products ordered** (`product_list`, `text`, required): List the names and shades of the cosmetics products you'd like to order.
* **Quantity** (`quantity`, `number`, required): Specify the total number of each item ordered.
* **Preferred shade** (`preferred_shade`, `text`, optional): If you've ordered a product with multiple shades, specify your preferred shade here.
* **Use Afterpay** (`afterpay`, `select_one`, required): Select 'Yes' to split the payment into installments.
* **Shipping address** (`shipping_address`, `text`, required): Enter your shipping address in the format: street, city, postal code.
* **Contact phone number** (`contact_phone`, `text`, optional): Enter your contact phone number for delivery updates.
* **Special requests** (`special_requests`, `text`, optional): If you have any allergies or special handling instructions, specify them here.
