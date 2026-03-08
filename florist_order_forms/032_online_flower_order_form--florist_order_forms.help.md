<thinking>
This help guide is used to document a form used in an online flower delivery business. The form is meant to capture information necessary for a user to place an order for flowers. The form is designed to be simple and easy to use, with clear and concise labels. The form fields include contact information, payment method, date and time of order, additional comments, email and phone number, and order status.
</thinking>

# Online Flower Order Form - Help Guide
## Purpose
The online flower order form is designed to help users place an order for flowers. This form captures the necessary information to fulfill the order, including contact details, payment method, and order status.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `Flower Order` field with the type of flowers you would like to order.
2. Choose your `Contact Info` by selecting either "Yes" or "No" to indicate if you have provided your contact information.
3. Select your `Payment Method` by choosing one or more options from the dropdown list.
4. Enter the `Date Order` and `Time of Day` fields to schedule the delivery of your flowers.
5. Add any `Additional Comments` in the `Additional Comments` field if necessary.
6. Enter your `Email` and `Phone` numbers to ensure we can contact you.
7. Select the `Flower Type` and `Flower Color` options that you desire.
8. Enter the `Flower Quantity` you would like to order.
9. Enter the `Payment Amount` for your order.
10. Select the `Delivery Date` and `Delivery Time` for your order.
10. If necessary, enter any `Special Instructions` for your order.
11. Enter your `Order Confirmation` to ensure we have all the necessary information.
12. Select the `Order Status` by choosing either "Active" or "Inactive".

## Field-by-Field Explanation

* **Flower Order** (`flower_order`, text, required): Enter the type of flowers you would like to order.
* **Contact Info** (`contact_info`, select_one, required): Choose "Yes" to indicate if you have provided your contact information.
* **Payment Method** (`payment_method`, select_multiple, required): Select one or more options from the dropdown list.
* **Additional Comments** (`note`, note, required): Add any additional comments or instructions for your order.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Flower Type** (`flower_type`, select_one, required): Select the type of flowers you would like to order.
* **Flower Color** (`flower_color`, select_one, required): Select the color of flowers you would like to order.
* **Flower Quantity** (`flower_quantity`, number, required): Enter the quantity of flowers you would like to order.
* **Payment Amount** (`payment_amount`, number, required): Enter the payment amount for your order.
* **Delivery Date** (`delivery_date`, date, required): Enter the delivery date for your order.
* **Delivery Time** (`delivery_time`, time, required): Enter the delivery time for your order.
* **Special Instructions** (`special_instructions`, note, required): Add any special instructions for your order.
* **Order Confirmation** (`order_confirmation`, text, required): Enter your order confirmation.
* **Order Status** (`order_status`, select_one, required): Select the order status by choosing "Active" or "Inactive".
