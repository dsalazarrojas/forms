# Cheap Sports Jersey Payment Form With Sofort - Help Guide
## Purpose
This form is designed to collect information from customers for payment processing related to sports jersey orders, specifically with the Sofort payment method.

## How To Complete This Form
1. Start by selecting the team you would like to order a jersey for.
2. Choose the desired jersey size from the provided options.
3. Select the jersey color from the available options.
4. If you would like to customize your jersey with a player's name and number, select "True" for the "Do you want player name and number?" field.
5. Enter the player's name and number for customization (if applicable).
6. Specify the quantity of jerseys you would like to order.
7. Enter the unit price for the order (this will be used to calculate the total cost).
8. Fill in your shipping address, including city, state or province, postal code, and country.
9. Select your preferred shipping method from the options provided.
10. Choose whether you would like to add gift wrapping to your order.
11. Enter any special instructions or notes for the order.
12. Select your preferred payment method for the order.
13. Confirm whether your billing address is the same as your shipping address.
14. Finally, confirm that you agree to the terms and conditions.

## Field-by-Field Explanation
* **-- Sports Jersey Order and Payment --** (Page 1): This is the introduction page to the form, providing a brief description of the form's purpose.
* **First name** (`customer_first_name`, text, required): Enter your first name.
* **Last name** (`customer_last_name`, text, required): Enter your last name.
* **Email address** (`customer_email`, email, required): Enter your email address.
* **Phone number** (`customer_phone`, text, required): Enter your phone number.
* **Team selection** (`jersey_team`, select_one, required): Select the team you would like to order a jersey for.
* **Jersey size** (`jersey_size`, select_one, required): Select the desired jersey size.
* **Jersey color** (`jersey_color`, select_one, required): Select the desired jersey color.
* **Do you want player name and number?** (`player_customization`, select_one, required): If you would like to customize your jersey with a player's name and number, select "True".
* **Player name for customization** (`player_name`, text, optional): If you selected "True" for the previous field, enter the player's name here.
* **Player number for customization** (`player_number`, number, optional): If you selected "True" for the previous field, enter the player's number here.
* **Quantity** (`quantity`, number, required): Specify the quantity of jerseys you would like to order.
* **Unit price** (`unit_price`, number, required): Enter the unit price for the order (this will be used to calculate the total cost).
* **Shipping address** (`shipping_address`, text, required): Fill in your shipping address, including city, state or province, and postal code.
* **City** (`city`, text, required): Enter the city of your shipping address.
* **State or province** (`state_province`, text, required): Enter the state or province of your shipping address.
* **Postal code** (`postal_code`, text, required): Enter the postal code of your shipping address.
* **Country** (`country`, text, required): Enter the country of your shipping address.
* **Shipping method** (`shipping_method`, select_one, required): Select your preferred shipping method.
* **Add gift wrapping?** (`gift_wrap`, select_one, optional): If you would like to add gift wrapping to your order, select "True".
* **Special instructions or notes** (`order_notes`, text, optional): Enter any special instructions or notes for the order.
* **Payment method** (`payment_method`, select_one, required): Select your preferred payment method.
* **Billing address same as shipping?** (`billing_same`, select_one, required): Confirm whether your billing address is the same as your shipping address.
* **I agree to the terms and conditions** (`terms_acceptance`, select_one, required): Confirm that you agree to the terms and conditions.
