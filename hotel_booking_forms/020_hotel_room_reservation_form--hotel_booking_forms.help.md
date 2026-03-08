# Hotel Room Reservation Form - Help Guide
## Purpose
This form is used to collect necessary information from guests making a hotel room reservation.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the guest's name.
2. Select the arrival date.
3. Select the departure date.
4. Choose the type of room the guest is interested in (e.g. Double, Single, Suite).
5. Indicate the number of rooms needed.
6. Select a room rate plan (e.g. Daily, Weekly, Monthly, Quarterly, Yearly).
7. If applicable, enter any special requests.
8. Provide the guest's contact email.
9. Provide the guest's contact phone number.
10. Enter any additional notes or messages for the reservation.
11. Select the room status (Active or Inactive).
12. Choose a payment method (e.g. Credit Card, PayPal).
13. Enter the credit card number.
14. Enter the credit card expiration date.
15. Enter the credit card code.
16. Enter the name of the credit card holder.
17. Add any additional notes or messages for the reservation.

## Field-by-Field Explanation

* **Guest Name** (`guest`, `text`, required/optional): Enter the guest's name.
* **Date of Arrival** (`date_arrival`, `date`, required/optional): Select the date the guest plans to arrive at the hotel.
* **Date of Departure** (`date_departure`, `date`, required/optional): Select the date the guest plans to depart from the hotel.
* **Room Type** (`room_type`, `select_one`, required/optional): Choose the type of room the guest is interested in (e.g. Double, Single, Suite).
* **Room Quantity** (`room_quantity`, `number`, required/optional): Indicate the number of rooms needed.
* **Room Rate** (`room_rate`, `number`, required/optional): Enter the room rate.
* **Special Request** (`special_request`, `text`, required/optional): Enter any special requests the guest may have.
* **Contact Email** (`contact_email`, `email`, required/optional): Enter the guest's contact email.
* **Contact Phone** (`contact_phone`, `text`, required/optional): Enter the guest's contact phone number.
* **Message** (`message`, `text`, required/optional): Enter any additional notes or messages for the reservation.
* **Room Rate Plan** (`room_rate_plan`, `select_multiple`, required/optional): Select multiple room rate plans (e.g. Daily, Weekly, Monthly, Quarterly, Yearly).
* **Room Rate Discount** (`room_rate_discount`, `number`, required/optional): Enter any room rate discounts.
* **Reservation Date** (`reservation_date`, `date`, required/optional): Select the date of the reservation.
* **Reservation Time** (`reservation_time`, `time`, required/optional): Select the time of the reservation.
* **Room Description** (`room_description`, `text`, required/optional): Enter a description of the room.
* **Room Status** (`room_status`, `select_one`, required/optional): Choose the room status (Active or Inactive).
* **Payment Method** (`payment_method`, `select_one`, required/optional): Choose a payment method (e.g. Credit Card, PayPal).
* **Card Number** (`card_number`, `number`, required/optional): Enter the credit card number.
* **Card Expiration** (`card_expiration`, `date`, required/optional): Enter the credit card expiration date.
* **Card Code** (`card_code`, `text`, required/optional): Enter the credit card code.
* **Card Holder** (`card_holder`, `text`, required/optional): Enter the name of the credit card holder.
* **Note** (`note`, `text`, required/optional): Enter any additional notes or messages for the reservation.
* **Note 2** (`note_2`, `text`, required/optional): Enter any additional notes or messages for the reservation.
* **Note 3** (`note_3`, `text`, required/optional): Enter any additional notes or messages for the reservation.
* **Note 4** (`note_4`, `text`, required/optional): Enter any additional notes or messages for the reservation.
