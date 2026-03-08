# Bakery Advent Box Registration - Help Guide
## Purpose
This form is designed for customers to register their order for a Bakery Advent Box, a festive holiday gift item that includes a selection of baked goods. The form will help you complete your order by providing necessary information about your preferences and requirements.

## How To Complete This Form
To complete this form, follow the steps outlined below:

1. Enter your full name
2. Enter your email address
3. Enter your phone number
4. Choose the size and theme of your Advent Box
5. Select the quantity of boxes to order
6. Choose your dietary preferences and customization options
7. Specify any custom item requests
8. Choose your gift wrapping and presentation preferences
9. Select your fulfillment option (local delivery, customer pickup, or shipping)
10. Select a preferred delivery or pickup date
11. Enter the delivery address or preferred pickup location (if applicable)
12. Enter the recipient's name and any gift message (if different)
13. Confirm your order is complete and accurate

## Field-by-Field Explanation

* **Full Name** (`customer_name`, text, required): Please enter your full name as it appears on your official identification.
* **Email Address** (`customer_email`, email, required): Enter your email address where we can send order confirmations and updates.
* **Phone Number** (`customer_phone`, phone, required): Enter your phone number where we can reach you with any questions or updates.
* **Box Size** (`box_size`, select_one, required): Choose the size of the box you'd like to order: Small, Medium, Large, Family, or Corporate.
* **Theme Preference** (`theme_preference`, select_one, required): Select the theme for your Advent Box from Traditional, Chocolate, Artisan Sourdough, Festive Pastries, Mixed Selection, or Custom.
* **Number of Boxes to Order** (`quantity`, integer, required): Enter the number of boxes you'd like to order.
* **Dietary Preferences** (`dietary_options`, select_multiple, required): Select all the dietary options that apply to you: Vegan, Gluten-Free, Dairy-Free, Nut-Free, or None.
* **Custom Item Requests** (`custom_items`, text, optional): Specify any custom item requests you'd like to include in your order.
* **Gift Wrapping and Presentation** (`gift_wrapping`, select_one, optional): Choose your gift wrapping and presentation preferences: Standard Wrapping, Premium Gift Wrap, Plain Box, or Custom Design.
* **Fulfillment Option** (`fulfillment_option`, select_one, required): Select how you'd like to receive your order: Local Delivery, Customer Pickup, or Shipping.
* **Preferred Delivery or Pickup Date** (`delivery_date`, date, required): Enter the date you'd prefer to receive your order.
* **Delivery Address (if applicable)** (`delivery_address`, text, optional): Enter the delivery address if you've chosen local delivery.
* **Preferred Pickup Location (if applicable)** (`pickup_location`, text, optional): Enter the preferred pickup location if you've chosen customer pickup.
* **Recipient Name (if different)** (`recipient_name`, text, optional): Enter the recipient's name if it's different from yours.
* **Gift Message** (`gift_message`, text, optional): Enter any gift message you'd like to include with the order.
* **Order Total (Calculated)** (`order_total`, decimal, optional): This field is automatically calculated and displayed for your convenience.
* **Payment Method** (`payment_method`, select_one, required): Select your payment method: Credit Card, Debit Card, PayPal, Bank Transfer, or Cash on Pickup.
* **Special Requests or Notes** (`special_requests`, text, optional): Enter any special requests or notes about your order.
* **I Confirm This Order is Complete and Accurate** (`order_confirmation`, select_one, required): Confirm that your order is complete and accurate.
