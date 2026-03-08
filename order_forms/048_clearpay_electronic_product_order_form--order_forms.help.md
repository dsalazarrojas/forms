<thinking> 
- The form purpose is to collect customer information for a Clearpay Electronic Product Order. 
- This form is part of the order process for electronic products sold by Clearpay. 
- This form should only be used for new orders, not for modifications to existing orders.
- The form is not for internal use, but for end-users to provide their information to place an order.
- Please ensure you have the necessary permissions and authorization to use this form.
</thinking>

# Clearpay Electronic Product Order Form - Help Guide
## Purpose
The Clearpay Electronic Product Order Form is used to collect customer information and order details for electronic products sold by Clearpay. This form is designed for end-users to provide their information to place a new order.

## How To Complete This Form
1. Fill in the customer information section:
	* Enter your full name in the **Full Name** field.
	* Enter your email address in the **Email Address** field. This is for order confirmation and delivery purposes.
	* Enter your phone number in the **Phone Number** field.
2. Select the shipping option:
	* Choose if the shipping address is the same as the billing address or different.
3. Enter shipping address information:
	* If you selected a different shipping address, enter it in the **Shipping Address** field.
	* Enter the city and state in the **Shipping City** and **Shipping State** fields.
	* Enter the zip code in the **Shipping Zip** field.
4. Select products:
	* Enter the name of the first electronic product in the **Product 1 - Name** field.
	* Select the category of the product in the **Product 1 - Category** field.
	* Enter the model number of the product in the **Product 1 - Model Number** field.
	* Select the color or finish of the product in the **Product 1 - Color** field.
	* Select the warranty option for the product in the **Product 1 - Warranty** field.
	* Enter the quantity of the product in the **Product 1 - Quantity** field.
	* Enter the price per unit of the product in the **Product 1 - Unit Price** field.
	* Repeat this process for each additional product by filling in the **Product 2 - Name** to **Product 3 - Quantity** fields.
5. Review and confirm the order:
	* Review the **Subtotal** field to ensure accuracy.
	* Review the **Shipping Cost** field for the cost of delivery.
	* Review the **Tax Amount** field for sales tax or VAT.
	* Review the **Discount Code** field for any applicable discounts.
	* Review the **Discount Amount** field for the amount discounted.
	* Review the **Total Order Amount** field for the final amount due.

## Field-by-Field Explanation

- **Customer Information**
	+ **Full Name** (`customer_full_name`, text, required): Enter your full name.
	+ **Email Address** (`customer_email`, email, required): Enter your email address for order confirmation and delivery purposes.
	+ **Phone Number** (`customer_phone`, text, required): Enter your phone number for contact purposes.
- **Billing Address**
	+ **Street Address** (`billing_address`, text, required): Enter your billing address.
	+ **City** (`billing_city`, text, required): Enter your city.
	+ **State/Province** (`billing_state`, text, required): Enter your state or province.
	+ **ZIP/Postal Code** (`billing_zip`, text, required): Enter your zip or postal code.
- **Shipping Information**
	+ **Shipping Address Same as Billing?** (`same_as_billing`, select_one, required): Select if the shipping address is the same as the billing address.
	+ **Shipping Address** (`shipping_address`, text, optional): Enter the shipping address if different.
	+ **Shipping City** (`shipping_city`, text, optional): Enter the shipping city.
	+ **Shipping State** (`shipping_state`, text, optional): Enter the shipping state.
	+ **Shipping Zip** (`shipping_zip`, text, optional): Enter the shipping zip code.
- **Products**
	+ **Product 1 - Name** (`product_1_name`, text, required): Enter the name or model number of the first electronic product.
	+ **Product 1 - Category** (`product_1_category`, select_one, required): Select the category of the product (e.g. Smartphones, Laptops).
	+ **Product 1 - Model Number** (`product_1_model`, text, required): Enter the model number or SKU of the product.
	+ **Product 1 - Color** (`product_1_color`, text, optional): Enter the color or finish of the product.
	+ **Product 1 - Warranty** (`product_1_warranty`, select_one, required): Select the warranty option for the product (e.g. Standard, Extended, No Warranty).
	+ **Product 1 - Quantity** (`product_1_quantity`, number, required): Enter the quantity of the product.
	+ **Product 1 - Unit Price** (`product_1_price`, number, required): Enter the price per unit of the product.
	+ Repeat this process for each additional product by filling in the **Product 2 - Name** to **Product 3 - Quantity** fields.
- **Order Summary**
	+ **Subtotal** (`subtotal`, number, required): Review the subtotal for accuracy.
	+ **Shipping Cost** (`shipping_cost`, number, required): Review the shipping cost for accuracy.
	+ **Tax Amount** (`tax_amount`, number, optional): Review the tax amount for accuracy.
	+ **Discount Code** (`discount_code`, text, optional): Review the discount code for accuracy.
	+ **Discount Amount** (`discount_amount`, number, optional): Review the discount amount for accuracy.
	+ **Total Order Amount** (`total_amount`, number, required): Review the final amount due.
- **Delivery and Payment**
	+ **Shipping Method** (`shipping_method`, select_one, required): Select the shipping method (e.g. Standard, Express, Overnight, In-Store Pickup).
	+ **Payment Method** (`payment_method`, select_one, required): Select the payment method (e.g. Clearpay, Credit Card, Debit Card, PayPal).
	+ **Order Date** (`order_date`, date, required): Enter the date of the order.
