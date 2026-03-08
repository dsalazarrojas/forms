<thinking>
This form is likely used for customers to place orders for healthy shakes at a food and beverage establishment. It may be used by customers to select their preferred pickup or delivery option, provide contact information, specify their shake preferences, and agree to certain terms. The form may be used by staff to quickly and accurately record customer orders and ensure that all necessary information is collected in one place.
</thinking>

# Healthy Shake Request Form - Help Guide
## Purpose
This form is designed to help customers place orders for healthy shakes at our establishment. It allows customers to select their preferred pickup or delivery option, provide contact information, and specify their shake preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred pickup or delivery option from the dropdown menu.
2. Enter your customer name and email address in the required fields.
3. Enter your phone number in the required field.
4. Select your preferred shake flavor from the dropdown menu.
5. Choose your shake size from the dropdown menu.
6. Enter the time you would like to pick up or have your shake delivered.
7. Select your preferred payment method and enter the payment amount.
8. Enter any additional notes or comments about your order.
9. Select your preferred shake type (e.g. yogurt, fruit, milkshake).
10. Choose any additional toppings or extra ingredients you would like to add to your shake.
11. Enter your preferred shake preferred time, if different from the order time.
12. Enter your signature to confirm your order.
13. Agree to our terms and conditions by typing "yes" in the text field.

## Field-by-Field Explanation

* **Pickup or Delivery**: Select either "Pickup" or "Delivery" to determine how you would like to receive your shake.
  * **Pickup or Delivery**: (`pickup_type`, select_one, required: false)
    * Choose the option that best suits your needs.
* **Customer Name**: Enter your full name. (customer_name, text, required: false)
  * This is the name by which we will address you.
* **Customer Email**: Enter your email address. (customer_email, email, required: true)
  * We will use this to contact you about your order and other promotions.
* **Customer Phone**: Enter your phone number. (customer_phone, text, required: true)
  * This is how we will contact you to confirm your order and answer any questions.
* **Shake Flavor**: Select your preferred shake flavor. (shake_flavor, select_multiple, required: false)
  * Choose one or more flavors from the dropdown menu.
* **Shake Size**: Choose your preferred shake size. (shake_size, select_one, required: false)
  * Select the size that best suits your needs.
* **Order Time**: Enter the time you would like to pick up or have your shake delivered. (order_time, time, required: true)
  * Enter the exact time you would like to pick up or have your shake delivered.
* **Additional Notes**: Enter any additional notes or comments about your order. (notes, text, required: false)
  * Use this field to include any special requests or instructions.
* **Payment Method**: Select your preferred payment method. (payment_method, select_one, required: false)
  * Choose the method that best suits your needs.
* **Payment Amount**: Enter the payment amount. (payment_amount, number, required: true)
  * Enter the exact amount you would like to pay.
* **Customer Address**: Enter your address. (customer_address, text, required: false)
  * This is your shipping address.
* **Customer City**: Enter your city. (customer_city, text, required: false)
  * This is the city where we will deliver your shake.
* **Customer Zip**: Enter your zip code. (customer_zip, text, required: false)
  * This is the zip code of your delivery address.
* **Customer State**: Enter your state. (customer_state, text, required: false)
  * This is the state where we will deliver your shake.
* **Customer Country**: Enter your country. (customer_country, text, required: false)
  * This is the country where we will deliver your shake.
* **Shake Type**: Select your preferred shake type. (shake_type, select_one, required: false)
  * Choose the type that best suits your needs.
* **Shake Toppings**: Select any additional toppings or extra ingredients you would like to add to your shake. (shake_toppings, select_multiple, required: false)
  * Choose one or more toppings from the dropdown menu.
* **Shake Extra Ingredients**: Select any additional toppings or extra ingredients you would like to add to your shake. (shake_extra_ingredients, select_multiple, required: false)
  * Choose one or more ingredients from the dropdown menu.
* **Shake Preferred Time**: Enter your preferred shake preferred time. (shake_preferred_time, time, required: false)
  * Enter the exact time you would like to have your shake prepared.
* **Customer Signature**: Enter your signature to confirm your order. (customer_signature, text, required: true)
  * This confirms that you have read and agree to our terms and conditions.
* **Customer Agreement**: Check the box to agree to our terms and conditions. (customer_agreement, text, required: true)
  * This confirms that you have read and agree to our terms and conditions.

## Tips

* Make sure to fill out all required fields to ensure that your order is processed correctly.
* Double-check your information for accuracy before submitting your order.
* If you have any questions or concerns, please don't hesitate to contact us.
