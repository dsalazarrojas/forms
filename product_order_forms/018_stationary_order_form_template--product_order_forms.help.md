# Stationary Order Form Template - Help Guide
## Purpose
The Stationary Order Form Template is used to gather information from customers for their stationary orders.

## How To Complete This Form
To complete this form, follow these steps:
* Fill in the required fields with the requested information, such as the product name and type.
* Choose the desired product color and quantity from the options provided.
* Select the payment method and payment amount for the order.
* Enter the order date and time.
* Add any additional comments or notes about the order.
* Enter the customer's contact email and phone number.
* Fill in the customer's name, company, and address.

## Field-by-Field Explanation
* **Product Name** (`product_name`, text, required): Enter the name of the product being ordered.
* **Product Type** (`product_type`, select_one, required): Select the type of product being ordered (e.g. A4, Letter, Legal, Card).
* **Product Color** (`product_color`, select_multiple, optional): Choose the desired color for the product (Red, Blue, Black, White).
* **Quantity** (`product_quantity`, number, optional): Enter the number of products being ordered.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method to be used for the order (Visa, Mastercard, Amex, Discover).
* **Payment Amount** (`payment_amount`, number, required): Enter the payment amount for the order.
* **Order Date** (`order_date`, date, optional): Enter the date of the order.
* **Order Time** (`order_time`, time, optional): Enter the time of the order.
* **Order Comment** (`order_comment`, note, optional): Add any additional comments or notes about the order.
* **Contact Email** (`contact_email`, email, required): Enter the customer's email address.
* **Contact Phone** (`contact_phone`, text, optional): Enter the customer's phone number.
* **Customer Name** (`customer_name`, text, required): Enter the customer's name.
* **Customer Company** (`customer_company`, text, optional): Enter the customer's company name.
* **Customer Address** (`customer_address`, text, required): Enter the customer's address.

Note: The fields with optional labels can be left blank if not necessary, but the required fields must be filled in to ensure accurate processing of the order.
