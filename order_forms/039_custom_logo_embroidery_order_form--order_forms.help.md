# Custom Logo Embroidery Order Form - Help Guide
## Purpose
The Custom Logo Embroidery Order Form is designed to collect information from customers for custom logo embroidery orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Select "Yes" or "No" for **logo_design** to indicate if you need custom logo design for the order.
2. Choose your preferred **product** from the list, if applicable.
3. Select "Yes" or "No" for **product_preferences** to specify if you have any product preferences.
4. Enter the number of **quantities** of the order.
5. Add any **custom_options** in the **custom_options** field if applicable.
6. Select "Yes" or "No" for **payment_gateway** to specify if you are using a payment gateway.
7. Choose a date for **order_date**.

## Field-by-Field Explanation
* **Logo Design** (`logo_design`, number, optional): Select "Yes" to indicate that you need custom logo design for the order, or "No" otherwise.
* **Product** (`product`, select_one, optional): Choose a product type from the list, if applicable.
* **Product Preferences** (`product_preferences`, select_multiple, optional): Select "Yes" to specify if you have any product preferences.
* **Quantities** (`quantities`, number, optional): Enter the number of items in the order.
* **Custom Options** (`custom_options`, note, optional): Add any custom options for the order.
* **Payment Gateway** (`payment_gateway`, select_one, optional): Select "Yes" to specify if you are using a payment gateway.
* **Order Date** (`order_date`, date, optional): Enter the date of the order.
