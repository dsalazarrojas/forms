# Book Box Order Form - Help Guide
## Purpose
The Book Box Order Form is a form used to collect information from customers who wish to order book boxes. The form helps to ensure that the customer's order is accurate and can be fulfilled efficiently.

## How To Complete This Form
To complete the form, simply follow these steps:

1. Fill in your full name in the "Full Name" field.
2. Enter your email address in the "Email Address" field.
3. Enter your phone number in the "Phone Number" field.
4. Fill in your full shipping address in the "Shipping Address" field.
5. Select your city in the "City" field.
6. Choose your state or province in the "State or Province" field.
7. Enter your postal or ZIP code in the "Postal or ZIP Code" field.
8. Select your country from the available options in the "Country" field.
9. Choose the size of book box you prefer from the "Book Box Size" field.
10. Select the genres you are interested in from the "Genre Preferences" field.
11. If you have specific book titles you'd like to order, list them in the "Specific Book Titles" field.
12. Enter the approximate number of books you would like to order in the "Total Quantity of Books" field.
13. Choose whether you'd like gift wrapping for your order in the "Gift Wrapping Service" field.
14. If you'd like to include a gift message, enter it in the "Gift Message" field.
15. Select your preferred delivery option from the "Delivery Preference" field.
16. If you'd like to specify a preferred delivery date, enter it in the "Preferred Delivery Date" field.
17. Select your preferred payment method from the "Payment Method" field.
18. If you have a promotional code, enter it in the "Promo Code" field.
19. If you have any special delivery instructions, enter them in the "Special Delivery Instructions" field.
20. Select whether you'd like to subscribe to our newsletter in the "Subscribe to our newsletter" field.

## Field-by-Field Explanation
* **Full Name** (`customer_name`, text, required): Enter your full name as it appears on your identification.
* **Email Address** (`email_address`, email, required): We will use this email to send order confirmations and updates.
* **Phone Number** (`phone_number`, text, required): For delivery coordination and communication.
* **Shipping Address** (`shipping_address`, text, required): Enter your full shipping address for delivery purposes.
* **City** (`city`, text, required): Enter your city or town.
* **State or Province** (`state_province`, text, required): Enter your state or province.
* **Postal or ZIP Code** (`postal_code`, text, required): Enter your postal or ZIP code.
* **Country** (`country`, select_one, required): Select your country of residence.
* **Book Box Size** (`box_size`, select_one, required): Choose the size of book box you prefer.
* **Genre Preferences** (`book_genre_preference`, select_multiple, required): Select the genres you are interested in.
* **Specific Book Titles** (`specific_book_titles`, text, optional): List specific book titles you'd like to order.
* **Total Quantity of Books** (`quantity_ordered`, number, required): Enter the approximate number of books you'd like to order.
* **Gift Wrapping Service** (`gift_wrapping`, select_one, required): Choose whether you'd like gift wrapping for your order.
* **Gift Message** (`gift_message`, text, optional): Enter an optional message for the gift card.
* **Delivery Preference** (`delivery_preference`, select_one, required): Select your preferred delivery option.
* **Preferred Delivery Date** (`preferred_delivery_date`, date, optional): Enter your preferred delivery date.
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method.
* **Promo Code** (`promo_code`, text, optional): Enter any promotional code you have.
* **Special Delivery Instructions** (`special_instructions`, text, optional): Enter any special delivery instructions.
* **Subscribe to our newsletter** (`newsletter_signup`, select_one, required): Select whether you'd like to subscribe to our newsletter.
