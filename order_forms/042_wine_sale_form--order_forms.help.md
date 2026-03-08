<thinking>
We need to ensure that the form is being used for its intended purpose and not duplicating effort. This form is meant to be a simple sales form for wines, where customers can select their preferred wine type, provide some basic contact information, and place an order. We will be using this form to gather data for our sales team, so the goal is to get the most relevant information possible to process the order efficiently.
</thinking>

# Wine Sale Form - Help Guide

## Purpose
The Wine Sale Form is a tool for customers to place orders for wines in a simple and efficient manner.

## How To Complete This Form
1. To complete this form, please select the type of wine you are interested in from the Wine Options dropdown menu.
2. Provide your contact information, including your email address and phone number.
3. If you have any special requests or notes about your order, you can enter them in the Order Notes field.
4. Enter the quantity of wine you would like to purchase.
5. Select the price range you are willing to pay.
6. If you have a date of birth, please enter it in the format MM/DD.
7. Finally, submit the form to send your order to our sales team for processing.

## Field-by-Field Explanation
* **Customer Details** (`customer_details`, text, required: false): This field is meant for customers to provide some basic contact information, including name, address, and other details. However, it seems that this field is not actually being used for any purpose, so it can be ignored.
* **Wine Options** (`wine_options`, select_multiple, required: false): Select the type of wine you are interested in from this dropdown menu. You can choose one or multiple options.
* **Customer Order** (`customer_order`, number, required: false): This field is meant to be a unique identifier for each order, but it seems that it's not being used for any purpose. You can leave this field blank.
* **Quantity** (`quantity`, number, required: false): Enter the quantity of wine you would like to purchase.
* **Price** (`price`, number, required: false): Select the price range you are willing to pay. You can choose a price range, but please be aware that our prices may vary depending on the specific wine and availability.
* **Date of Birth** (`date_of_birth`, date, required: false): If you have a date of birth, please enter it in the format MM/DD. This information is not being used for any specific purpose, so it's optional.
* **Email** (`email`, email, required: false): This field is meant for customers to provide their email address, which will be used for communication and confirmation of order details. You can leave this field blank.
* **Phone** (`phone`, text, required: false): This field is meant for customers to provide their phone number, which will be used for communication and confirmation of order details. You can leave this field blank.
* **Order Notes** (`order_notes`, note, required: false): If you have any special requests or notes about your order, you can enter them here. This information will be seen by our sales team when processing your order.
