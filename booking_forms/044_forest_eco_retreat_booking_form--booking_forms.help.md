# forest_eco_retreat_booking_form - Help Guide
## Purpose
The forest eco retreat booking form is designed to collect information from users to finalize a booking at the retreat. It is a comprehensive form that requires input on personal details, room preferences, and payment status.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your guest name, email address, and contact number in the respective fields.
2. Select the checkin and checkout dates from the calendar.
3. Choose the preferred room type (Cottage, Hut, or Cabin) and select the guest type (Adult, Child, or Infant).
4. Enter the room number and select the room price.
5. Choose the payment method (Credit Card, Cash, or PayPal).
6. Select the payment status (Paid, Pending, or Unpaid).
7. Fill in any special requests or additional information in the "Special Requests" and "Additional Info" fields.
8. Select "True" or "False" to confirm the booking.
9. Enter the confirm date.

## Field-by-Field Explanation

* **Guest Name** (`guest_name`, `text`, required): Enter your name as it appears on your identification.
* **Email** (`email`, `email`, required): Enter your email address that we can use to contact you.
* **Contact Number** (`contact_number`, `text`, required): Enter your contact number that we can use to contact you.
* **Checkin Date** (`checkin_date`, `date`, required): Select the date you want to check-in.
* **Checkout Date** (`checkout_date`, `date`, required): Select the date you want to check-out.
* **Room Type** (`room_type`, `select_one`, required): Choose the type of room you prefer (Cottage, Hut, or Cabin).
* **Booking Date** (`booking_date`, `date`, required): Select the date you want to book the room.
* **Guest Type** (`guest_type`, `select_multiple`, required): Choose the type of guests (Adult, Child, or Infant) that will be staying in the room.
* **Room Number** (`room_number`, `number`, required): Enter the number of the room you want to book.
* **Room Price** (`room_price`, `number`, required): Enter the price of the room.
* **Payment Method** (`payment_method`, `select_one`, required): Choose the payment method (Credit Card, Cash, or PayPal).
* **Payment Status** (`payment_status`, `select_one`, required): Select the payment status (Paid, Pending, or Unpaid).
* **Special Requests** (`special_requests`, `note`, optional): Enter any special requests or additional information.
* **Notes** (`notes`, `note`, optional): Enter any additional notes or comments.
* **Confirm Booking** (`confirm_booking`, `select_one`, required): Select "True" or "False" to confirm the booking.
* **Confirm Date** (`confirm_date`, `date`, required): Enter the confirm date of the booking.
* **Special Info** (`special_info`, `note`, optional): Enter any special information about the booking.
* **Additional Info** (`additional_info`, `note`, optional): Enter any additional information about the booking.
* **Terms and Conditions** (`terms_and_conditions`, `note`, optional): Read and agree to the terms and conditions of the retreat.
