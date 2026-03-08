<thinking>

# Cake Jar Order Form - Help Guide
## Purpose
The Cake Jar Order Form is a tool designed for customers to place orders for cake jars, specifying details such as customer information, order preferences, and delivery options.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill out the customer information section, providing your name and phone number. This is required to ensure that we can contact you to confirm your order.
2.  Enter your email address, which will be used for confirmation and future communication.
3.  Select your preferred cake flavor from the drop-down menu. This is required to determine the flavor of your jar.
4.  Choose the size of the cake jar you would like to order. This will determine the capacity of the jar.
5.  Specify the number of jars you would like to order. This is a required field, as we need to know how many jars to prepare.
6.  Select your preferred frosting type. This will determine the topping for your jar.
7.  Choose any toppings you would like to include on your jar. You can select multiple options if desired.
8.  If you have any dietary restrictions or allergies, please specify them in the "Dietary Restrictions or Allergies" field. This is optional, but we appreciate your note for our staff's reference.
9.  Select your desired delivery date and time for your order. This is required to ensure timely delivery.
10. Choose whether you would like to pick up your order or have it delivered. If you select delivery, enter your delivery address in the next field.
11. If you have any special requests or notes, please enter them in the "Special Instructions" field. This is optional, but we appreciate any additional information.
12. Finally, specify the occasion for which you are ordering the jar(s). This is optional, but we would be happy to know the purpose of your order.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required): Please enter your name as it appears on your identification.
* **Phone Number** (`contact_phone`, `text`, required): Enter your phone number so we can contact you to confirm your order.
* **Email Address** (`contact_email`, `email`, required): Enter your email address for order confirmation and future communication.
* **Cake Flavor** (`jar_flavor`, `select_one`, required): Choose the flavor of cake from the drop-down menu.
* **Jar Size** (`jar_size`, `select_one`, required): Select the size of the jar from Small (8 oz), Medium (12 oz), Large (16 oz), or Extra Large (20 oz).
* **Quantity of Jars** (`jar_quantity`, `number`, required): Specify the number of jars you would like to order.
* **Frosting Type** (`frosting_preference`, `select_one`, required): Choose the type of frosting from the drop-down menu.
* **Toppings** (`topping_options`, `select_multiple`, optional): Select any toppings you would like to include on your jar. You can choose multiple options.
* **Dietary Restrictions or Allergies** (`dietary_notes`, `text`, optional): If you have any dietary restrictions or allergies, please specify them here.
* **Delivery Date** (`delivery_date`, `date`, required): Enter the date you would like to receive your order.
* **Delivery Time** (`delivery_time`, `time`, optional): Choose the time you would like to receive your order. Note: This field is optional, but we will make our best effort to deliver your order at the selected time.
* **Pickup or Delivery?** (`pickup_vs_delivery`, `select_one`, required): Choose whether you would like to pick up your order or have it delivered.
* **Delivery Address (if applicable)** (`delivery_address`, `text`, optional): If you selected delivery, please enter your delivery address.
* **Special Instructions** (`special_instructions`, `text`, optional): Enter any special requests or notes you have for your order.
* **Occasion for Jars** (`occasion`, `select_one`, optional): Choose the occasion for which you are ordering the jar(s).
