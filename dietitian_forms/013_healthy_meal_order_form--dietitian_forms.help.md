# Healthy Meal Order Form - Help Guide
## Purpose
The Healthy Meal Order Form is designed to gather information from customers for their meal orders. This includes their preferred meal type, contact details, and order specifics.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select your preferred meal type from the options provided.
2. Enter your order date in the format MM/DD/YY.
3. Enter the time you would like to place your order.
4. Fill in your name as it appears on your identification.
5. If you have an email address, enter it here (optional).
6. Enter your address for delivery or pickup purposes.
7. Select your preferred payment method.
8. Enter any special instructions or notes for your order.
9. Enter the total cost of your order.
10. Enter any applicable tax amount.
11. Enter any applicable discount amount.
12. Select whether you would like to have your order delivered or pick it up.
13. If delivery is selected, enter the date and time for delivery.
14. Enter your delivery address.
15. If pickup is selected, enter your preferred pickup time and address.

## Field-by-Field Explanation

* **Meal Type** (`meal_type`, select_one, required): Select your preferred meal type from the options provided. This will determine the type of food you would like to order.
* **Date** (`date`, date, required): Enter the date you would like to place your order in the format MM/DD/YY.
* **Time** (`time`, time, required): Enter the time you would like to place your order.
* **Name** (`name`, text, required): Fill in your name as it appears on your identification.
* **Email** (`email`, email, optional): If you have an email address, enter it here.
* **Phone** (`phone`, text, optional): This field is not currently used. Please disregard.
* **Address** (`address`, text, required): Enter your address for delivery or pickup purposes.
* **Notes** (`notes`, note, optional): Enter any special instructions or notes for your order.
* **Order** (`order`, text, required): Enter the specific details of your order.
* **Order Details** (`order_details`, text, optional): Enter any additional details about your order.
* **Special Instructions** (`special_instructions`, text, optional): Enter any special instructions or requests for your order.
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method from the options provided.
* **Payment Info** (`payment_info`, text, optional): Enter any additional payment information.
* **Order Total** (`order_total`, number, required): Enter the total cost of your order.
* **Tax** (`tax`, number, optional): Enter any applicable tax amount.
* **Discount** (`discount`, number, optional): Enter any applicable discount amount.
* **Total** (`total`, number, optional): This field is not currently used. Please disregard.
* **Delivery** (`delivery`, select_one, required): Select whether you would like to have your order delivered or pick it up.
* **Delivery Info** (`delivery_info`, text, optional): Enter any delivery information.
* **Delivery Date** (`delivery_date`, date, optional): Enter the date for delivery if selected.
* **Delivery Time** (`delivery_time`, time, optional): Enter the time for delivery if selected.
* **Delivery Address** (`delivery_address`, text, optional): Enter your delivery address if selected.
* **Pickup** (`pickup`, select_one, required): Select whether you would like to have your order delivered or pick it up.
* **Pickup Address** (`pickup_address`, text, optional): Enter your pickup address if selected.
* **Pickup Time** (`pickup_time`, time, optional): Enter your preferred pickup time if selected.
