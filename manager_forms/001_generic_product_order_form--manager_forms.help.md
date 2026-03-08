<thinking>
To create a user-facing help guide for the "generic_product_order_form", I'll assume the form's purpose is to collect order information from customers for generic products, and this form is not a duplicate of any other form. If you can provide more context about the form's purpose, it would be great!

For the sake of this exercise, I'll create the help guide based on the provided YAML fields.
</thinking>

# generic_product_order_form - Help Guide
## Purpose
This form is used to collect order information from customers for generic products. Fill out the form to place an order with our company.

## How To Complete This Form
1. Fill in the required fields with the customer's information.
2. Select the payment method.
3. Review the form for accuracy before submitting.

## Field-by-Field Explanation
* **Product Name** (`product_name`, text, optional): Enter the name of the product being ordered.
* **Product Description** (`product_description`, text, optional): Briefly describe the product being ordered.
* **Product Image** (`product_image`, text, optional): If applicable, provide a link to the product image.
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name.
* **Customer Email** (`customer_email`, email, optional): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, optional): Enter the customer's phone number.
* **Order Total** (`order_total`, number, optional): Enter the total amount of the order.
* **Payment Method** (`payment-method`, select_one, optional):
	+ Select 'cash'
	+ Select 'credit card'
	+ Select 'paypal'
* **Product Price** (`product_price`, number, optional): Enter the price of the product.
* **Customer Note** (`customer_note`, text, optional): Add any additional notes from the customer.

Note: Fields marked as 'required' should be filled out when prompted to do so, but the others are not mandatory and can be skipped if not applicable.
