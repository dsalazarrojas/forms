# small_booking_form_with_conditional_logic - Help Guide
## Purpose
This form is used to collect booking information from users for a small booking system.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the customer's status ('Yes' or 'No') in the "Customer" field.
2. Enter the checkin date in the "Checkin Date" field, if applicable.
3. Enter the checkout date in the "Checkout Date" field, if applicable.
4. Select the room type from the options in the "Room Type" field.
5. Enter the number of guests in the "Number of Guests" field.
6. Enter any special requests or notes in the "Special Request Note" field.
7. Enter the email address in the "Email" field.
8. Enter the phone number in the "Phone Number" field.
9. Select the payment method ('Yes' or 'No') in the "Payment Method" field.
10. Enter the payment amount in the "Payment Amount" field, if payment method is selected as 'Yes'.

## Field-by-Field Explanation

* **Customer** (`customer`, `select_one`, required): Select 'Yes' or 'No' to indicate the customer's status.
* **Checkin Date** (`checkin_date`, `date`, optional): Enter the date the customer is checking in, if applicable.
* **Checkout Date** (`checkout_date`, `date`, optional): Enter the date the customer is checking out, if applicable.
* **Room Type** (`room_type`, `select_one`, optional): Select the type of room required.
* **Number of Guests** (`number_of_guests`, `number`, optional): Enter the number of guests arriving.
* **Special Request** (`special_request`, `text`, optional): Enter any special requests or notes.
* **Email** (`email`, `email`, optional): Enter the customer's email address.
* **Phone Number** (`phone_number`, `text`, optional): Enter the customer's phone number.
* **Payment Method** (`payment_method`, `select_one`, optional): Select 'Yes' or 'No' to indicate if payment method is applicable.
* **Payment Amount** (`payment_amount`, `number`, optional): Enter the payment amount, if payment method is selected as 'Yes'.
* **Trip Date** (`trip_date`, `date`, optional): Enter the trip date, if applicable.
* **Special Request Note** (`special_request_note`, `text`, optional): Enter any additional notes about the special request.
