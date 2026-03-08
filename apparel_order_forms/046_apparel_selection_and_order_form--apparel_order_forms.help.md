<thinking>

I'm assuming the purpose of this form is for customers to order apparel items with various options and details. To confirm, this form will allow customers to input their information, select the type of apparel and collection, choose their desired item, color, and size, enter the quantity, and select their payment and shipping methods. 

This form is likely designed for a business-to-consumer (B2C) or business-to-business (B2B) context, where customers can order apparel items from a collection with options for different shipping and payment methods. I'll be using the provided YAML fields to generate a clear and concise help guide for end-users. 

</thinking>

# Apparel Selection And Order Form - Help Guide
## Purpose
The Apparel Selection And Order Form is designed to help customers select and order their desired apparel items. To complete this form, please follow the steps outlined below.

## How To Complete This Form
To complete this form, follow these steps:

1. **Full Name** (`full_name`, text, **required**): Enter your full name as you would like it to appear on your order and potential gift receipt.
2. **Email Address** (`email_address`, email, **required**): Enter your email address for order tracking updates and communication from our team.
3. **Select Collection** (`collection_category`, select_one, **required**): Choose the collection you're interested in from the available options:
	* Spring / Summer 2026
	* Autumn / Winter 2026
	* Essential Basics
	* Limited Edition Drop
4. **Choose Your Item** (`item_selection`, select_one, **required**): Select the apparel item you'd like to order from the available options:
	* Silk Blouse
	* Tailored Trousers
	* Cashmere Sweater
	* A-Line Skirt
	* Oversized Blazer
5. **Color Choice** (`item_color`, text, **required**): Enter the color you'd like to choose for your selected item.
6. **Size** (`item_size`, select_one, **required**): Choose the size you need from the available options:
	* XS
	* S
	* M
	* L
	* XL
7. **Quantity** (`quantity`, number, **required**): Enter the number of items you'd like to order.
8. **Personalization or Monogramming** (`personalization_request`, text, **optional**): If you'd like to add a personal message or initials to your item, you can specify it here (e.g. "Congratulations, Emily!" or "ABCD").
9. **Shipping Method** (`shipping_speed`, select_one, **required**): Choose your shipping method from the available options:
	* Standard (5-7 business days)
	* Express (2-3 business days)
	* Next Day Delivery
10. **Payment Method** (`payment_option`, select_one, **required**): Select your payment method from the available options:
	* Credit Card
	* PayPal
	* Buy Now Pay Later
11. **Is this a gift?** (`gift_option`, select_one, **optional**): If this is a gift, select "True" and we'll include a gift receipt with your order. If not, select "False".

## Tips
* Please ensure you select the correct collection and item to avoid any errors in processing your order.
* If you have any issues with your order, please contact our customer support team for assistance.
* We'll send you an order confirmation email once your form is submitted.
