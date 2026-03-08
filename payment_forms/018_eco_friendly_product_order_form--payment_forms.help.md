# eco_friendly_product_order_form - Help Guide
## Purpose
The "eco_friendly_product_order_form" is a form designed to help customers place orders for eco-friendly products. It's essential to fill out this form accurately to ensure your order is processed correctly.

## How To Complete This Form
To complete this form, follow these steps:

* Please fill out each field as instructed below.
* You can save your progress and come back to it later if needed.
* Once you've filled out all required fields (indicated by an asterisk*), submit the form to complete your order.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, `text`, required: false): Please enter your full name as it appears on your identification documents.
* **Product** (`product_name`, `text`, required: false): Enter the name of the eco-friendly product you'd like to order. If you're unsure about the product name, type "Unknown" and our team will assist you further.
* **Quantity** (`quantity`, `number`, required: false): Enter the number of eco-friendly products you'd like to order.
* **Shipping Address** (`shipping_address`, `text`, required: false): Enter your shipping address where the product will be delivered.
* **Order Date** (`order_date`, `date`, required: false): Select the date when you'd like to receive your order.
* **Order Status** (`order_status`, `select_one`, required: false, options: [Ordered, Shipping, Delivered]):
	+ *Ordered*: The order has been successfully placed.
	+ *Shipping*: The order is being shipped and should arrive soon.
	+ *Delivered*: The order has been successfully delivered.
* **Customer Email** (`customer_email`, `email`, required: false): Enter your email address for updates and notifications.
* **Customer Phone** (`customer_phone`, `text`, required: false): Enter your phone number for further contact.
* **Shipping Cost** (`shipping_cost`, `number`, required: false): Enter the shipping cost for your order, if applicable.
* **Payment Method** (`payment_method`, `select_multiple`, required: false, options: [Credit, Debit, Cash]):
	+ *Credit*: Use a credit card.
	+ *Debit*: Use a debit card.
	+ *Cash*: Use cash as payment.
* **Notes** (`notes`, `note`, required: false): Leave any additional notes about your order here, such as special requests or preferences.

## Tips
- Ensure all fields are accurate and up-to-date to avoid delays in processing your order.
- Review your order carefully before submitting to ensure everything is correct.
- If you have any questions or need further assistance, contact our customer service team.
