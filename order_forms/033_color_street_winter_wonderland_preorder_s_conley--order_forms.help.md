<thinking>

The form is for pre-ordering the Winter Wonderland collection from Color Street. This form is likely used for customers to provide their information and select the sets they want to pre-order. The purpose of the form is to gather order details and payment information for the pre-order. It's not clear what the "B3G1 deal" option is, so it's worth further investigation to ensure it's not a duplicate or redundant field.

</thinking>

# Color Street Winter Wonderland Preorder - S. Conley - Help Guide
## Purpose
This form is for pre-ordering the Winter Wonderland collection from Color Street. It allows customers to provide their information and select the sets they want to pre-order.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name in the "Name" field.
2. Enter your email address in the "Email Address" field.
3. Enter your shipping address in the "Shipping Address" field.
4. Select the Winter Collection sets you want to pre-order in the "Winter Glitters" and "Holiday Solids and Designs" fields.
5. Choose your shipping speed in the "Shipping Choice" field.
6. Choose your payment method and handle in the "Payment Method and Handle" field.
7. If you're pre-ordering for a party, add a hostess name in the "Hostess" field.

## Field-by-Field Explanation

* **-- 2020 Winter Wonderland Pre-Order --** (`section_conley_holiday`, note, required: false): This is an informational header for the form.
* **Name** (`conley_customer_name`, text, required: true): Enter your name here.
* **Email Address** (`conley_email`, email, required: true): Enter your email address here.
* **Shipping Address** (`conley_address`, text, required: true): Enter your shipping address here.
* **-- Winter Collection Selection --** (`section_conley_winter_sets`, note, required: false): Select the Winter Collection sets you want to pre-order in the fields below.
* **Winter Glitters** (`conley_winter_glitters`, select_multiple, required: false):
	+ Select one or more of the following:
		- Ice to Meet You
		- Snow Biz
		- Under the Mistletoe
		- What a Catch
		- Blitzen
* **Holiday Solids and Designs** (`conley_holiday_solids`, select_multiple, required: false):
	+ Select one or more of the following:
		- Oh My Gourd
		- Buggin' Out
		- Gratitude is Everything
		- Feast Mode
		- Give Thanks
* **Any standard sets to add?** (`conley_standard_adds`, text, required: false): If you have any standard sets you want to add, enter them here.
* **-- Order Summary --** (`section_conley_math`, note, required: false): This is a summary of your order.
* **Total Sets Pre-Ordered** (`conley_total_sets`, number, required: true): Enter the total number of sets you're pre-ordering.
* **Is this a B3G1 deal?** (`conley_b3g1_deal`, select_one, required: true):
	+ Select "True" if you're ordering with a B3G1 deal, "False" otherwise.
* **-- Checkout --** (`section_conley_checkout`, note, required: false): This is the last step in the process.
* **Payment Method and Handle** (`conley_payment_id`, text, required: true): Enter your payment method and handle here (e.g., Venmo @User).
* **Shipping Choice** (`conley_shipping_speed`, select_one, required: true):
	+ Select "Standard ($3.50)" or "Priority ($8.50)" for your shipping choice.
* **Hostess (if for a party)** (`conley_hostess`, text, required: false): If you're pre-ordering for a party, enter the hostess's name here.
* **Message for me** (`conley_notes`, text, required: false): Leave a message for the seller here if you'd like.

## Tips

* Double-check your order details before submitting the form.
* Make sure to select the correct shipping speed for your order.
