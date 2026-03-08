# halloween_candy_gram_order_form - Help Guide
## Purpose
This form is designed for customers to order Halloween candies. Please fill out the required fields to ensure your order is successful.

## How To Complete This Form
To fill out this form, follow these steps:

1. Enter your customer name in the `customer_name` field.
2. Enter your email address in the `email` field.
3. Enter your phone number in the `phone` field.
4. Enter your shipping name in the `shipping_name` field.
5. Enter your shipping address in the `shipping_address` field.
6. Enter your shipping city in the `shipping_city` field.
7. Enter your shipping zip code in the `shipping_zip` field.
8. Choose a date for shipping or order in the `shipping_date` field. (Note: Please ensure the date is in the correct format for your location.)
9. Select your candy type preference from the options in the `candy_type` field.
10. Enter the quantity of the candy you'd like to order in the `quantity` field. (Note: Please be sure to enter a whole number, as this will affect the order quantity.)
11. You may optionally add a message in the `message` field if you need to provide additional information.

## Field-by-Field Explanation
* **Customer Name**: 
  * (customer_name, text, required)
  Enter your name as you'd like to be addressed in the Halloween candy grams.
* **Email**: 
  * (email, email, required)
  Enter your email address so we can get in touch with you about your order.
* **Phone**: 
  * (phone, text, required)
  Enter your phone number so we can get in touch with you about your order.
* **Shipping Name**: 
  * (shipping_name, text, optional)
  Enter the name of the person who will be receiving the candy grams, if different from your name.
* **Shipping Address**: 
  * (shipping_address, text, required)
  Enter the address where the candy will be shipped.
* **Shipping City**: 
  * (shipping_city, text, required)
  Enter the city where the address is located.
* **Shipping Zip**: 
  * (shipping_zip, text, required)
  Enter the zip code of the address where the candy will be shipped.
* **Shipping Date**: 
  * (shipping_date, date, required)
  Choose a date for shipping or order in the correct format for your location.
* **Candy Type**: 
  * (candy_type, select_one, required)
  Select the type of candy you'd like to order.
* **Message**: 
  * (message, text, optional)
  Add any additional information you'd like to provide about your order.
* **Quantity**: 
  * (quantity, number, required)
  Enter the whole number of candies you'd like to order.
