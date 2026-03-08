# Square Product Order Form - Help Guide
## Purpose
This form is used to record orders for products sold through the Square platform. It is used to gather information about each order, including customer details, product and quantity details, payment method, and order status.

## How To Complete This Form
1. Fill in the required fields: product, customer name, quantity, unit price, subtotal, payment method, order date, and order time.
2. Select the correct product from the dropdown menu.
3. Enter the customer's name and email (if available).
4. Choose a payment method from the available options.
5. Optionally, enter a payment method other if using a method not listed.
6. Enter any notes about the order.
7. Choose the order status from the available options.

## Field-by-Field Explanation
* **product** (`product`, select, required): Choose the product being ordered.
	+ Select one of the available options: Apple, Banana, or Orange.
* **customer_name** (`customer name`, text, required): Enter the customer's name.
* **customer_email** (`customer email`, text, optional): Enter the customer's email address (if available).
* **quantity** (`quantity`, number, required): Enter the number of units of the product being ordered.
* **unit_price** (`unit price`, number, required): Enter the price per unit of the product.
* **subtotal** (`subtotal`, text, optional): This field is automatically calculated and will be displayed, but can be overridden if needed.
* **payment_method** (`payment method`, select_multiple, required): Choose one or more payment methods from the available options: credit card, bank transfer, or cash.
* **payment_method_other** (`payment method other`, text, optional): Enter an alternative payment method if not listed.
* **order_date** (`order date`, date, required): Enter the date of the order.
* **order_time** (`order time`, time, required): Enter the time of the order.
* **order_notes** (`order notes`, note, optional): Enter any notes about the order.
* **order_status** (`order status`, select_multiple, optional): Choose the status of the order from the available options: pending, shipped, or delivered.
