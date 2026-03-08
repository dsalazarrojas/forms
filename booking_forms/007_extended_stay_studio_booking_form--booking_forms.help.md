# Extended Stay Studio Booking Form - Help Guide
## Purpose
This form is designed to collect information for extended stay bookings at the studio. Please fill out the form with your details and preferences to ensure your booking is processed correctly.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your **First Name** in the field labeled "First Name".
2. Enter your **Last Name** in the field labeled "last_name".
3. Provide your **Email** in the field labeled "email".
4. Select your preferred **Room Type** from the options: Single Room, Suite, or Other.
5. Choose your **Check-in Date** in the format mm/dd/yyyy.
6. Select your **Check-out Date** in the format mm/dd/yyyy.
7. Enter the number of days you wish to stay, using whole numbers only.
8. Choose your **Arrival Time** in the format HH:MM AM/PM.
9. Choose your **Departure Time** in the format HH:MM AM/PM.
10. Enter the room number if you have a specific room assignment or leave it blank if you want the studio to assign a room.
11. If you require an extra bed, specify the type in the field labeled "extra_bed_type" (e.g., King, Queen, Sofa Bed).
12. Enter the **Reservation Date** in the format mm/dd/yyyy.
13. Select the time you wish to make your reservation, using the format HH:MM AM/PM.
14. Enter any **Reservation Note** to provide additional information about your stay.
15. Specify any **Special Request** you might have for your stay.
16. Choose the **Reservation Source**, if applicable.
17. Select the **Payment Method** you prefer from the options: Bank Transfer, Cash, Credit Card, or Other.
18. Enter the **Payment Terms**, if any.
19. If paying by credit card, enter your **Card Number**.
20. Enter your **Card Expiration Date** in the format mm/yy.
21. Enter your **Card CVV**.
22. Enter your second **Card CVV** (only required for specific payment methods).
23. Enter your **Card ZIP**.
24. Review and agree to the **Form Terms**, which will be displayed below the form.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Room Type** (`room_type`, select_one, required): Select the type of room you prefer.
* **Check-in Date** (`checkin_date`, date, required): Enter the date you wish to check-in.
* **Check-out Date** (`checkout_date`, date, required): Enter the date you wish to check-out.
* **Stay Duration** (`stay_duration`, number, required): Enter the number of days you wish to stay.
* **Arrival Time** (`arrival_time`, time, required): Choose the time you wish to arrive.
* **Departure Time** (`departure_time`, time, required): Choose the time you wish to depart.
* **Room Number** (`room_number`, text, required): Enter the room number if you have a specific assignment or leave it blank.
* **Extra Bed** (`extra_bed`, text, optional): Specify if you require an extra bed.
* **Extra Bed Type** (`extra_bed_type`, select_multiple, optional): If you require an extra bed, select the type (e.g., King, Queen, Sofa Bed).
* **Reservation Date** (`reservation_date`, date, required): Enter the date you wish to make your reservation.
* **Reservation Time** (`reservation_time`, time, required): Choose the time you wish to make your reservation.
* **Reservation Note** (`reservation_note`, text, optional): Enter any additional information about your stay.
* **Special Request** (`special_request`, text, optional): Specify any special requests you have.
* **Reservation Source** (`reservation_source`, text, optional): Choose the source of your reservation.
* **Payment Method** (`payment_method`, select_multiple, required): Select the payment method you prefer (e.g., Bank Transfer, Cash, Credit Card).
* **Payment Terms** (`payment_terms`, text, optional): Enter any payment terms or instructions.
* **Card Number** (`card_number`, text, optional): Enter your credit card number (only if paying by credit card).
* **Card Expiration** (`card_expiration`, text, optional): Enter your credit card expiration date (in the format mm/yy).
* **Card CVV** (`card_cvv`, text, optional): Enter your card CVV.
* **Card CVV 2** (`card_cvv_2`, text, optional): Enter your second card CVV (only for specific payment methods).
* **Card ZIP** (`card_zip`, text, optional): Enter your card ZIP.
* **Form Terms** (`form_terms`, text, optional): Review and agree to the form terms, which will be displayed below the form.
