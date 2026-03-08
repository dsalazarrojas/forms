<thinking>
This form is designed to facilitate the ordering process for wine enthusiasts.
Its primary goal is to gather information about customers who want to place an order for wine.
The form is structured in a way that allows customers to provide their personal details, select their wine order, enter payment information, and confirm their shipping details.
This form is a simple example and may not include all the complexities of a real-world wine ordering process.
</thinking>

# simple_wine_order_form_template - Help Guide
## Purpose
This form is designed to help wine enthusiasts place an order for wine.
## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the **CustomerDetails** page with your personal information.
2. Select the wine you would like to order on the **WineOrder** page.
3. Enter your **PaymentInfo** on the **PaymentInfo** page.
4. Confirm your **ShippingInfo** on the **ShippingInfo** page.
5. Review your **OrderSummary** on the last page.

## Field-by-Field Explanation
* **CustomerDetails** (1):
	+ **Name** (`customer_details`, text, required): Enter your name as it appears on your identification.
	+ **Email** (`customer_details`, text, required): Enter your email address.
	+ **Phone** (`customer_details`, text, optional): Enter your phone number (if available).
* **WineOrder** (2):
	+ **Select Wine** (`wine_order`, text, required): Choose the wine you would like to order from the available options.
* **PaymentInfo** (3):
	+ **CardNumber** (`payment_info`, text, required): Enter your credit or debit card number.
	+ **ExpirationDate** (`payment_info`, text, required): Enter the expiration date of your card.
	+ **CVV** (`payment_info`, text, required): Enter the Card Verification Value (CVV) of your card.
* **ShippingInfo** (4):
	+ **Address** (`shipping_info`, text, required): Enter your shipping address.
	+ **City** (`shipping_info`, text, required): Enter your city.
	+ **State** (`shipping_info`, text, required): Enter your state.
	+ **ZipCode** (`shipping_info`, text, required): Enter your zip code.
* **OrderSummary** (5):
	+ **OrderReview** (`order_summary`, text, required): Review your order to ensure accuracy before submitting.
