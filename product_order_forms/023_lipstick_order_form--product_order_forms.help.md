<thinking>... internal reasoning and checks for relevance and non-duplication:

This form seems to be designed for customers to place an order for lipsticks. The purpose of this form is to collect information about the lipsticks that the customer would like to order, such as the type of lipstick and the quantity they would like to purchase. The form also asks for information about the customer's shipping address and payment method, which suggests that the form is intended for online ordering and payment processing.

Upon reviewing the form, I notice that there are no required fields, which might make it difficult to ensure data quality and completion. However, the form does include fields for collecting customer information, such as email and phone number, which could be useful for follow-up communication.

The form also includes a range of custom fields, which could be used to collect additional information that is specific to the lipstick product or business process. However, it's not clear what information these custom fields are intended to collect.

Overall, the form appears to be a basic online ordering form, and with some additional guidance on required fields and field labels, it could be more effective in collecting the necessary information from customers. 

</thinking>

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
