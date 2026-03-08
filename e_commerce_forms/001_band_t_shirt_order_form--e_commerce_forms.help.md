# Band T Shirt Order Form - Help Guide
## Purpose
This form is for customers to place an order for a band t-shirt. Please fill out the form with your information and preferences.

## How To Complete This Form
1. Please enter your full name.
2. Enter your email address, which will be used to confirm your order.
3. Enter your phone number, which will be used for order updates.
4. Select the size of the t-shirt you prefer.
5. Select the color of the t-shirt you prefer.
6. Choose the style of the t-shirt you prefer.
7. Enter the number of shirts you would like to order.
8. If you have any special print or design requests, describe them here.
9. Select any additional customization options you would like.
10. Enter the delivery address where your order should be shipped.
11. Enter the city for the delivery address.
12. Enter the state or province for the delivery address.
13. Enter the ZIP or postal code for the delivery address.
14. Enter the country for the delivery address.
15. Select your preferred shipping method.
16. Choose how you would like to pay for your order.
17. If you have any special requests or notes, enter them here.
18. Accept the terms and conditions of the order.

## Field-by-Field Explanation
* **Full Name** (`customer_name`, `text`, required): Enter your full name as it appears on your identification.
* **Email Address** (`email_address`, `email`, required): Enter your email address, which will be used to confirm your order.
* **Phone Number** (`phone_number`, `text`, optional): Enter your contact number for order updates.
* **T-Shirt Size** (`shirt_size`, `select_one`, required): Select the size of the t-shirt you prefer (XS, S, M, L, XL, XXL).
* **T-Shirt Color** (`shirt_color`, `select_one`, required): Select the color of the t-shirt you prefer (Black, White, Navy Blue, Red, Gray, Charcoal).
* **T-Shirt Style** (`shirt_style`, `select_one`, required): Select the style of the t-shirt you prefer (Classic Crew Neck, V-Neck, Polo Style, Long Sleeve).
* **Quantity** (`quantity`, `number`, required): Enter the number of shirts you would like to order.
* **Special Print or Design** (`special_print`, `text`, optional): Describe any custom printing or design requests.
* **Additional Customization Options** (`additional_customization`, `select_multiple`, optional): Select any additional customization options you prefer (Front Pocket Print, Back Large Print, Sleeve Print, Custom Neckline).
* **Delivery Address** (`delivery_address`, `text`, required): Enter the address where you would like your order shipped.
* **City** (`city`, `text`, required): Enter the city for the delivery address.
* **State or Province** (`state_province`, `text`, required): Enter the state or province for the delivery address.
* **Postal Code** (`postal_code`, `text`, required): Enter the ZIP or postal code for the delivery address.
* **Country** (`country`, `text`, required): Enter the country for the delivery address.
* **Shipping Method** (`shipping_method`, `select_one`, required): Select your preferred shipping method (Standard Shipping, Express Shipping, Overnight Shipping).
* **Payment Method** (`payment_method`, `select_one`, required): Choose how you would like to pay for your order (Credit Card, Debit Card, PayPal, Bank Transfer).
* **Special Requests or Notes** (`special_requests`, `text`, optional): Enter any special requests or notes.
* **I agree to the terms and conditions** (`terms_accepted`, `select_one`, required): Accept the terms and conditions of the order.
