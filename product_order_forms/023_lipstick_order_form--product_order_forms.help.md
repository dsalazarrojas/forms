# Lipstick Order Form - Help Guide
## Purpose
This form is designed for customers to place an order for lipsticks. It collects information about the lipsticks you would like to purchase, including the type and quantity, and your shipping address and payment method.

## How To Complete This Form
1. Select the type of lipstick you would like to purchase from the list below.
	* Apple
	* Cherry
	* Plum
	* Raspberry
	* Strawberry
	* Watermelon
2. Enter the quantity of lipsticks you would like to purchase.
3. Enter your shipping address.
4. Enter your email address.
5. Enter your phone number.
6. Select your preferred payment method:
	* Stripe
	* PayPal
	* Bank Transfer
7. (Optional) You can also enter any additional information in the custom fields below.

## Field-by-Field Explanation

* **Product** (`product`, select_multiple): Select the type of lipstick you would like to purchase.
* **Quantity** (`quantity`, number): Enter the number of lipsticks you would like to purchase.
* **Shipping Address** (`shipping-address`, text): Enter your shipping address where you would like to receive the lipsticks.
* **Email** (`email`, email): Enter your email address so we can contact you.
* **Phone** (`phone`, text): Enter your phone number so we can contact you.
* **Payment Gateway** (`payment-gateway`, select_one): Select your preferred payment method:
	+ Stripe
	+ PayPal
	+ Bank Transfer
* **Custom Fields** (`custom-field-1`, `custom-field-2`, ..., `custom-field-17`, text): These fields are optional and can be used to enter any additional information you would like to provide.
