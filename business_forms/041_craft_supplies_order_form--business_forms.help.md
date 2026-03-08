# craft_supplies_order_form - Help Guide
## Purpose
The craft supplies order form is a document used to gather information from customers for their orders.

## How To Complete This Form
To complete this form, follow these steps:
1. Go to the form and start by filling out the "Customer Info" page.
2. On the next page, fill out the "Shipping Address" and "Order Products" pages, which will help us understand your order requirements.
3. Then, you can add any "Customer Notes" on the following page.
4. Finally, fill out the "Payment Info" page to complete the form.

## Field-by-Field Explanation
* **Customer Info (id: 1)** (`title`, `text`, required: false): Enter your name, company name, and any other relevant information about yourself or your company.
* **Shipping Address (id: 2)** (`shipping_address`, `text`, required: false): Please enter your shipping address to ensure timely delivery of your order.
* **Order Products (id: 3)** (`order_products`, `text`, required: false): Describe the products you would like to order.
* **Payment Info (id: 4)** (`payment_info`, `text`, required: false): Enter your payment information or any special instructions for payment.
* **Customer Notes (id: 5)** (`customer_notes`, `text`, required: false): Add any additional comments or notes about your order.
* **Product Type (id: 11)** (`select_one_product_type`, `select_one`, required: false): Please select the type of product you would like to order.
* **Select Multiple Products (id: 12)** (`select_multiple_products`, `select_multiple`, required: false): Select the products you would like to order.
* **Decimal Price (id: 13)** (`decimal_price`, `number`, required: false): Enter the decimal price for the product(s) you are ordering.
* **Integer Price (id: 14)** (`integer_price`, `number`, required: false): Enter the integer price for the product(s) you are ordering.
* **Payment Method (id: 15)** (`select_one_payment_method`, `select_one`, required: false): Select the payment method you would like to use.
* **Select Multiple Payment Method (id: 16)** (`select_multiple_payment_method`, `select_multiple`, required: false): Select multiple payment methods you would like to use.
* **Note (id: 17)** (`note`, `note`, required: false): Add any additional comments or notes about your order.
* **Email (id: 18)** (`email_2`, `email`, required: false): Enter your email address.
* **Phone (id: 19)** (`phone_2`, `text`, required: false): Enter your phone number.
* **Date (id: 20)** (`date_2`, `date`, required: false): Enter the date for your order.
* **Time (id: 21)** (`time_2`, `time`, required: false): Enter the time for your order.
* **Select One Product Type (id: 22)** (`select_one_product_type_2`, `select_one`, required: false): Please select the type of product you would like to order.
* **Decimal Price 2 (id: 23)** (`decimal_price_2`, `number`, required: false): Enter the decimal price for the product(s) you are ordering.
* **Integer Price 2 (id: 24)** (`integer_price_2`, `number`, required: false): Enter the integer price for the product(s) you are ordering.
* **Select One Payment Method 2 (id: 25)** (`select_one_payment_method_2`, `select_one`, required: false): Select the payment method you would like to use.
