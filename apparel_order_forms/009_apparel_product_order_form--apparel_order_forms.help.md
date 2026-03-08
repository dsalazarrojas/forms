<thinking>
This form is designed for ordering apparel products. The purpose of the form is for the customer to provide their contact information, select their preferred product, and specify their delivery details. Each page is divided into two main sections: "Contact Information" and "Order Details". The "Contact Information" section requires the customer to input their full name, email address, and phone number. The "Order Details" section requires the customer to select the product they want to order, provide their preferred size and color, specify the quantity of the product, and select the delivery method. The form also allows the customer to provide any special requests they may have. This form is intended to gather all the necessary information for processing the order.
</thinking>

# Apparel Product Order Form - Help Guide

## Purpose
This form is designed for customers to order apparel products, providing all necessary information for processing the order.

## How To Complete This Form
1. Fill out the "Contact Information" section with your full name, email address, and phone number.
2. Select the product you want to order from the "Product Name" dropdown menu.
3. Choose your preferred size and color for the selected product.
4. Specify the quantity of the product you want to order.
5. Select your preferred delivery method from the "Delivery Method" dropdown menu.
6. Enter your delivery address details, including street address, city, state, and postal code.
7. If you have any special requests, you can provide them in the "Special Requests" field.

## Field-by-Field Explanation

* **Full Name** (`name`, `text`, required): Enter your full name.
* **Email** (`email`, `email`, required): Enter your email address where the order confirmation will be sent.
* **Phone Number** (`phone`, `text`, required): Enter your phone number.
* **Product Name** (`product_name`, `select_one`, required): Select the product you want to order.
* **Size** (`size`, `select_one`, required): Choose your preferred size for the selected product.
* **Color** (`color`, `select_one`, required): Select your preferred color for the selected product.
* **Quantity** (`quantity`, `number`, required): Specify the quantity of the product you want to order.
* **Price per unit** (`price_per_unit`, `number`, optional): Enter the price per unit if you know it.
* **Delivery Address** (`delivery_address`, `note`, optional): This section is not required but provides space for any additional delivery information.
* **Street Address** (`street_address`, `text`, required): Enter the street address where the order will be delivered.
* **City** (`city_name`, `text`, required): Enter the city where the order will be delivered.
* **State** (`state`, `text`, required): Enter the state where the order will be delivered.
* **Postal Code** (`postal_code`, `text`, required): Enter the postal code where the order will be delivered.
* **Delivery Method** (`delivery_method`, `select_one`, required): Select your preferred delivery method.
* **Special Requests** (`special_requests`, `text`, optional): If you have any special requests, enter them here.
