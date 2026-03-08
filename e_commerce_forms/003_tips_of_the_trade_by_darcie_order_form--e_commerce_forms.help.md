# Tips Of The Trade By Darcie: Order Form - Help Guide
## Purpose
This form is designed to gather information from customers about their order, allowing us to process their request accurately and efficiently.

## How To Complete This Form
1. Select the products you would like to order.
2. Provide details about the products you have chosen.
3. Choose your preferred shipping options.
4. Decide if you would like to review your order.

## Field-by-Field Explanation
* **Order** (`order_form`, select_one, required: false): Select 'Yes' to place an order, and 'No' to indicate that you do not wish to order.
* **Product** (`product_details`, select_multiple, required: false): Choose one or multiple products to order.
* **Shipping** (`shipping_details`, select_one, required: false): Select 'Yes' to opt for shipping, and 'No' to indicate that you do not need shipping.
* **Order Review** (`order_review`, select_one, required: false): Select 'Yes' to review your order, and 'No' to indicate that you do not need to review your order.
