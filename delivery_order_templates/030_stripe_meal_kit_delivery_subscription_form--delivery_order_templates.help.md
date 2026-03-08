<thinking>
This is a form to create a subscription for a meal kit delivery service. The form is designed to collect user information for subscription purposes, such as name, contact details, subscription preferences, payment method, and order details. Before filling out the form, please review the following steps to ensure you have all the necessary information ready.

The form is divided into two main sections: personal details and order details. Please fill out the form in this order.

Please note that the form is required to be filled out entirely to process the subscription request successfully.
</thinking>

# Stripe Meal Kit Delivery Subscription Form - Help Guide
## Purpose
This form is designed to create a subscription for a meal kit delivery service. It collects user information for subscription purposes, such as name, contact details, subscription preferences, payment method, and order details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the personal details section with your name, email address, phone number, and other required information.
2. Select your preferred subscription type (Monthly, Weekly, Bi-Weekly).
3. Choose the delivery frequency you would like to have your meal kits delivered (Monday to Sunday, Tuesday to Saturday).
4. Select a delivery date and time that suits you.
5. Fill out the address details (Address 1, Address 2, City, Postal Code).
6. Choose your preferred payment method (Credit Card, PayPal, Bank Transfer).
7. Enter the amount of meal kits you would like to subscribe to.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it appears on your official documents.
* **Email** (`email`, email, required): Enter your valid email address.
* **Phone** (`phone`, text, required): Enter your phone number for contact purposes.
* **Subscription Type** (`subscription_type`, select_one, required): Choose your preferred subscription type (Monthly, Weekly, Bi-Weekly).
* **Delivery Frequency** (`delivery_frequency`, select_multiple, required): Select the days of the week you would like to have your meal kits delivered (Monday to Sunday, Tuesday to Saturday).
* **Delivery Date** (`delivery_date`, date, required): Choose a date for your meal kit delivery.
* **Delivery Time** (`delivery_time`, time, required): Select a delivery time that suits you.
* **Address 1** (`address_1`, text, required): Enter the first line of your address.
* **Address 2** (`address_2`, text, required): Enter the second line of your address.
* **City** (`city`, text, required): Enter your city for delivery purposes.
* **Postal Code** (`postal_code`, text, required): Enter your postal code for delivery purposes.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method (Credit Card, PayPal, Bank Transfer).
* **Amount** (`amount`, number, required): Enter the number of meal kits you would like to subscribe to.
