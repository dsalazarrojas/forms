# Basic Order Form - Help Guide
## Purpose
The Basic Order Form is used to collect information from customers for a basic order, such as a product purchase or service request. This form helps gather essential details about the customer, their order, and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer information section with your name, email address, and phone number.
2. Provide your company name (if applicable) in the Company name field.
3. Enter your shipping address, including street address, city, state/province, and postal code.
4. Select the product you are ordering, including product name, product code or item number, and quantity.
5. Enter the unit price of the product.
6. Choose your preferred payment method.
7. Confirm that the order details are accurate.

## Field-by-Field Explanation
* **Customer name** (`customer_name`, `text`, required): Enter your full name as it appears on your identification.
* **Email address** (`email`, `email`, required): Enter your email address.
* **Phone number** (`phone`, `text`, required): Enter your phone number.
* **Company name** (`company`, `text`, optional): If you are representing a company, enter its name.
* **Street address** (`street_address`, `text`, required): Enter the address of your shipping location.
* **City** (`city`, `text`, required): Enter the city of your shipping location.
* **State/Province** (`state_province`, `text`, required): Enter the state or province of your shipping location.
* **Postal code** (`postal_code`, `text`, required): Enter the postal code of your shipping location.
* **Country** (`country`, `text`, optional): Enter the country of your shipping location.
* **Product name** (`product_name`, `text`, required): Select the product you are ordering.
* **Product code or item number** (`product_code`, `text`, optional): Enter the product code or item number.
* **Quantity** (`quantity`, `number`, required): Enter the quantity of the product you are ordering.
* **Unit price** (`unit_price`, `number`, required): Enter the unit price of the product.
* **Total amount** (`total_amount`, `number`, optional): This field will be calculated automatically.
* **Order date** (`order_date`, `date`, required): Enter the date of your order.
* **Requested delivery date** (`delivery_date`, `date`, optional): Enter the date you would like to receive your order.
* **Payment method** (`payment_method`, `select_one`, required): Choose your preferred payment method from the list.
* **Special requests or instructions** (`special_requests`, `text`, optional): If you have any special requests or instructions, enter them here.
* **I confirm this order is accurate** (`order_confirmation`, `select_one`, required): Confirm that the order details are accurate and complete.
