<thinking>...</thinking>

# Beverage Flavor Concentrate Order Form - Help Guide

## Purpose
This form is for customers to place orders for beverage flavor concentrate products. It will ask for customer and shipping information, flavor preferences, order details, and payment and shipping options.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields with your full name, email address, phone number, and other information as requested.
2. Select the flavor category that best suits your needs.
3. Choose the specific flavors you want to order.
4. Select the type of concentrate you need.
5. Choose the quantity of concentrate you require.
6. Select the intended use of the concentrate.
7. Check any specific dietary requirements.
8. Select the shipping method you prefer.
9. Choose your payment method.
10. If you have a purchase order number, you can enter it for reference.
11. If you want to receive samples before placing the order, indicate so.
12. Add any special instructions or comments about your order.

## Field-by-Field Explanation

* **Full Name** (`customer_name`, text, required): Enter your full name to receive order updates and confirmation.
* **Email Address** (`customer_email`, email, required): Enter your email address for order confirmation and updates.
* **Phone Number** (`customer_phone`, text, required): Enter your phone number for order updates if needed.
* **Company Name** (`company_name`, text, optional): If you are representing a business or organization, enter your company name.
* **Shipping Address** (`shipping_address`, text, required): Enter the full address where you want the concentrate to be shipped.
* **City** (`city`, text, required): Enter the city for the shipping address.
* **State** (`state`, text, required): Enter the state for the shipping address.
* **ZIP Code** (`postal_code`, text, required): Enter the postal code for the shipping address.
* **Flavor Category** (`flavor_category`, select_one, required): Select the type of flavor concentrate you need (e.g., Fruit Flavors, Citrus Flavors, etc.).
* **Specific Flavors** (`specific_flavors`, select_multiple, required): Select the specific flavors you want to order (e.g., Strawberry, Blueberry, etc.).
* **Concentrate Type** (`concentrate_type`, select_one, required): Select the type of concentrate you need (e.g., Liquid, Powder, Emulsion, etc.).
* **Quantity** (`quantity`, select_one, required): Select the quantity of concentrate you need (e.g., 1 Liter, 5 Liters, etc.).
* **Intended Use** (`intended_use`, select_one, required): Select the intended use of the concentrate (e.g., Carbonated Beverages, Still Beverages, etc.).
* **Dietary Requirements** (`dietary_requirements`, select_multiple, required): Check any specific dietary requirements (e.g., Organic, Non-GMO, etc.).
* **Shipping Method** (`shipping_method`, select_one, required): Select the shipping method you prefer (e.g., Standard Shipping, Express Shipping, etc.).
* **Payment Method** (`payment_method`, select_one, required): Select the payment method you prefer (e.g., Credit Card, Debit Card, etc.).
* **Purchase Order Number** (`purchase_order_number`, text, optional): Enter your purchase order number for reference.
* **Would You Like Samples** (`sample_request`, select_one, optional): If you want to receive samples before ordering, indicate so.
* **Special Instructions** (`special_instructions`, text, optional): Add any special instructions or comments about your order.
* **Additional Comments** (`additional_comments`, text, optional): Add any other information about your order.
