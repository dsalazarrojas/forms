<thinking> 
This form is designed to collect information for a pizza order. The purpose of this form is to gather details about the customer's order, including their personal details, order preferences, and payment information. This form will be used to process the order and generate a receipt. I will assume that the form will be filled out by a customer, and the information will be used to create a pizza order.
</thinking>

# Pizza Order Form - Help Guide

## Purpose
The Pizza Order Form is used to collect information for a pizza order, including customer details, order preferences, and payment information.

## How To Complete This Form
1. Fill out the form with your details and preferences.
2. Make sure to enter your first name, last name, and email address correctly.
3. Choose your phone number and address for delivery or pick up.
4. Select the city and state where you would like to receive your order.
5. Enter the total number of pizzas you would like to order.
6. Choose the size and toppings for each pizza.
7. Enter the order date and time.
8. Add any additional notes about your order.
9. Select the payment gateway for processing your payment.
10. Enter any additional information about your first, second, and third (if applicable) pizzas, including toppings and sauces.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): Enter your first name.
* **Last Name** (`last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Address** (`address`, text, optional): Enter your address for delivery or pick up.
* **City** (`city`, text, optional): Enter the city where you would like to receive your order.
* **State** (`state`, select_one, optional): Choose your state of residence.
* **Zip** (`zip`, text, optional): Enter your zip code.
* **Total Pizzas** (`total_pizzas`, number, optional): Enter the total number of pizzas you would like to order.
* **Pizza Size** (`pizza_size`, select_multiple, optional): Choose the size for each pizza.
* **Order Date** (`order_date`, date, optional): Enter the date you would like to receive your order.
* **Order Time** (`order_time`, time, optional): Enter the time you would like to receive your order.
* **Order Notes** (`order_notes`, note, optional): Add any additional notes about your order.
* **Payment Gateway** (`payment_gateway`, select_one, optional): Select the payment gateway for processing your payment.
* **First Pizza** (`first_pizza`, text, optional): Enter any information about your first pizza, including toppings and sauce.
* **Toppings** (`first_toppings`, select_multiple, optional): Choose the toppings for each pizza.
* **Crust** (`first_crust`, select_multiple, optional): Choose the crust type for each pizza.
* **Sauce** (`first_sauce`, select_multiple, optional): Choose the sauce type for each pizza.
* **Toppings 2** (`first_toppings`, select_multiple, optional): Choose the toppings for your second pizza.
* **Second Pizza** (`second_pizza`, text, optional): Enter any information about your second pizza, including toppings and sauce.
* **Second Crust** (`second_crust`, select_multiple, optional): Choose the crust type for your second pizza.
* **Second Sauce** (`second_sauce`, select_multiple, optional): Choose the sauce type for your second pizza.
* **Third Pizza** (`third_pizza`, text, optional): Enter any information about your third pizza, including toppings and sauce.
* **Toppings 3** (`third_toppings`, select_multiple, optional): Choose the toppings for your third pizza.
* **Second Toppings 3** (`second_toppings`, select_multiple, optional): (This field has the same name as another field with a different id. Consider renaming it to avoid confusion.)
* **Second Toppings 3** (`second_toppings`, select_multiple, optional): Choose the toppings for your third pizza.
