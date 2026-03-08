# Butcher Shop Order Form - Help Guide

## Purpose
The "Butcher Shop Order Form" is a tool used to capture customer information and order details for butchering and delivery purposes.

## How To Complete This Form

1. Fill out the form completely and accurately, following the on-screen guidance and instructions.
2. Enter your First Name and Last Name in the corresponding fields.
3. Enter your Email Address and Phone Number in the corresponding fields.
4. Select your preferred Pickup or Delivery option.
5. Enter your desired Order Date.
6. Select your preferred Pickup or Delivery Time.
7. Choose your preferred products and quantities for Beef, Pork, and Chicken products.
8. Provide any Special Instructions for custom cuts.
9. Enter your Special Preparation Instructions.
10. Select your preferred Payment Method.
11. Review and submit the form.

## Field-by-Field Explanation

* **First Name** (`customer_first_name`, text, required): Enter your first name.
* **Last Name** (`customer_last_name`, text, required): Enter your last name.
* **Email Address** (`customer_email`, email, required): Enter your contact email address.
* **Phone Number** (`customer_phone`, text, required): Enter your contact phone number.
* **Pickup or Delivery** (`pickup_or_delivery`, select_one, required): Select your preferred option for receiving your order.
* **Delivery Address** (`delivery_address`, text, not required): Enter the full address if you selected delivery.
* **City** (`delivery_city`, text, not required): Enter the city for delivery address.
* **State** (`delivery_state`, text, not required): Enter the state for delivery address.
* **ZIP Code** (`delivery_zip`, text, not required): Enter the zip code for delivery address.
* **Desired Order Date** (`order_date`, date, required): Enter the date when you need your order.
* **Preferred Pickup or Delivery Time** (`order_time`, time, required): Enter the preferred time for pickup or delivery.
* **Beef Products** (`beef_products`, select_multiple, not required): Choose beef products you want to order.
* **Beef Quantities** (`beef_quantities`, text, not required): Enter the quantity for each beef selection.
* **Pork Products** (`pork_products`, select_multiple, not required): Choose pork products you want to order.
* **Pork Quantities** (`pork_quantities`, text, not required): Enter the quantity for each pork selection.
* **Chicken Products** (`chicken_products`, select_multiple, not required): Choose chicken products you want to order.
* **Chicken Quantities** (`chicken_quantities`, text, not required): Enter the quantity for each chicken selection.
* **Specialty or Custom Cuts** (`specialty_cuts`, text, not required): Enter any special requests.
* **Special Preparation Instructions** (`special_instructions`, text, not required): Enter any special preparation instructions.
* **Estimated Total Price** (`total_price`, number, required): Review and confirm the estimated total price.
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method.
* **Additional Notes** (`order_notes`, text, not required): Enter any additional comments or notes.
