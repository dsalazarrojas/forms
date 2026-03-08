# hostel_booking_form_light_olive_and_responsive - Help Guide
## Purpose
This form is used for booking a room at the hostel.

## How To Complete This Form
1. Fill out the checkin and checkout dates in the format mm/dd/yyyy.
2. Select your room type from the dropdown menu.
3. Enter your room number (if applicable).
4. Enter your name.
5. Enter your email address.
6. Enter your phone number.
7. Choose a payment method.
8. Enter any additional comments or messages in the "Message" field.
9. Confirm your phone number and email address.
10. Confirm your arrival and departure dates (this may be necessary for each date field).
11. Click the "Submit" button to complete the form.

## Field-by-Field Explanation
* **Checkin** (`checkin`, `date`, optional): Enter your checkin date in the format mm/dd/yyyy.
* **Checkout** (`checkout`, `date`, optional): Enter your checkout date in the format mm/dd/yyyy.
* **Room Type** (`room_type`, `select_one`, optional): Select your desired room type (single, double, or triple).
* **Room Number** (`room_number`, `number`, optional): Enter your room number (if applicable).
* **Name** (`name`, `text`, optional): Enter your name.
* **Email** (`email`, `email`, optional): Enter your email address.
* **Phone** (`phone`, `text`, optional): Enter your phone number.
* **Arrival Date** (`arrival_date`, `date`, optional): Confirm your arrival date in the format mm/dd/yyyy.
* **Departure Date** (`departure_date`, `date`, optional): Confirm your departure date in the format mm/dd/yyyy.
* **Payment Method** (`payment_method`, `select_multiple`, optional): Choose a payment method (card, transfer, or other).
* **Message** (`message`, `note`, optional): Enter any additional comments or messages.
* **Confirm Phone** (`confirm_phone`, `text`, optional): Confirm your phone number.
* **Confirm Email** (`confirm_email`, `email`, optional): Confirm your email address.
* **Confirm Message** (`confirm_message`, `note`, optional): Confirm any additional comments or messages.
* **Confirm Arrival Date** (`confirm_arrival_date`, `date`, optional): Confirm your arrival date in the format mm/dd/yyyy.
* **Confirm Departure Date** (`confirm_departure_date`, `date`, optional): Confirm your departure date in the format mm/dd/yyyy.
* **Confirm Arrival Date 2**, **Confirm Departure Date 2**, **...**, **Confirm Arrival Date 9**, **Confirm Departure Date 9** (`confirm_arrival_date2`, `date`, optional), (`confirm_departure_date2`, `date`, optional), ... (`confirm_arrival_date9`, `date`, optional), (`confirm_departure_date9`, `date`, optional): Confirm your arrival and departure dates for each of the multiple confirm fields.

## Tips
* Make sure to double-check your dates and phone number.
* If you have any questions or concerns, you can ask the hostel staff for assistance.
