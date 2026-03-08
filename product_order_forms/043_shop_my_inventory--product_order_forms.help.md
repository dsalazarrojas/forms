# shop-my-inventory - Help Guide
## Purpose
This form is designed to collect customer information and order details for products from the shop-my-inventory.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields:
	* customer: Enter the customer's name and contact information.
	* product: Enter the product code or name.
	* quantity: Enter the quantity of the product ordered.
	* unit price: Enter the price per unit of the product.
	* subtotal: Select the subtotal of the order.
	* order date: Enter the date of the order.
	* order time: Enter the time of the order.
	* shipping cost: Enter the shipping cost of the order.
	* tax rate: Select the tax rate of the order.
	* tax: Calculate the tax based on the subtotal and tax rate.
	* subtotal tax: Calculate the subtotal tax based on the tax rate and subtotal.
	* total: Calculate the total cost of the order.
	* payment method: Select the payment method used for the order.
2. Optionally, fill in the following fields:
	* product description: Enter a description of the product.
	* product image: Upload an image of the product.
	* order comments: Add any additional comments about the order.
	* customer notes: Add any additional notes from the customer.
	* customer email: Enter the customer's email address.
	* customer phone: Enter the customer's phone number.
	* customer address: Enter the customer's address.
	* order status: Select the status of the order.
3. Review and submit the form.

## Field-by-Field Explanation
- **customer** (`customer`, `text`, **required**): Enter the customer's name and contact information.
- **product** (`product`, `text`, **required**): Enter the product code or name.
- **quantity** (`quantity`, `number`, **required**): Enter the quantity of the product ordered.
- **unit price** (`unit price`, `number`, **required**): Enter the price per unit of the product.
- **subtotal** (`subtotal`, `select_one`, **required**): Select the subtotal of the order.
- **order notes** (`order notes`, `note`, **optional**): Add any additional comments about the order.
- **customer email** (`customer email`, `email`, **required**): Enter the customer's email address.
- **customer phone** (`customer phone`, `text`, **required**): Enter the customer's phone number.
- **customer address** (`customer address`, `text`, **required**): Enter the customer's address.
- **product description** (`product description`, `text`, **optional**): Enter a description of the product.
- **product image** (`product image`, `text`, **optional**): Upload an image of the product.
- **order date** (`order date`, `date`, **required**): Enter the date of the order.
- **order time** (`order time`, `time`, **required**): Enter the time of the order.
- **order status** (`order status`, `select_multiple`, **optional**): Select the status of the order.
- **customer notes** (`customer notes`, `note`, **optional**): Add any additional notes from the customer.
- **order comments** (`order comments`, `note`, **optional**): Add any additional comments about the order.
- **shipping cost** (`shipping cost`, `number`, **required**): Enter the shipping cost of the order.
- **tax rate** (`tax rate`, `select_one`, **required**): Select the tax rate of the order.
- **tax** (`tax`, `number`, **required**): Calculate the tax based on the subtotal and tax rate.
- **subtotal tax** (`subtotal tax`, `number`, **required**): Calculate the subtotal tax based on the tax rate and subtotal.
- **total** (`total`, `number`, **required**): Calculate the total cost of the order.
- **payment method** (`payment method`, `select_one`, **required**): Select the payment method used for the order.
- **other payment method** (`other payment method`, `select_multiple`, **optional**): Select any additional payment methods used for the order.
