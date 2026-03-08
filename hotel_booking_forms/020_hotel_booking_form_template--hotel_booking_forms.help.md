> <thinking>
We are developing a hotel booking form template to facilitate the reservation process for guests. This form will collect essential information about the guest, such as their name, email, arrival and departure dates, room type, number of guests, payment details, and additional comments. The purpose of this form is to ensure accurate and efficient communication with the guest and to provide a seamless booking experience. Please make sure to fill out this form accurately and completely to ensure a smooth check-in process.
</thinking>

# Hotel Booking Form Template - Help Guide
## Purpose
The Hotel Booking Form Template is designed to collect essential information from guests to facilitate a smooth and efficient booking process.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill out the "Guest Name" field with the guest's full name.
2.  Enter the guest's email address in the "Guest Email" field.
3.  Select a date for arrival in the "Arrival Date" field.
4.  Choose a time for arrival in the "Arrival Time" field.
5.  Select a date for departure in the "Departure Date" field.
6.  Choose a room type from the options provided in the "Room Type" field.
7.  Enter the number of guests in the "Number of Guests" field.
8.  Select the type of card to be used for payment in the "Card Type" field.
9.  Enter the card number in the "Card Number" field.
10. Enter the CVV/CVV2 of the card in the "CVV/CVV2" field.
11. Enter your name in the "Name" field.
12. Enter your phone number in the "Phone" field.
13. Enter your address in the "Address" field.
14. If you have any additional comments, enter them in the "Comments" field.

## Field-by-Field Explanation

*   **Guest Name** (`guest_name`, `text`, required): Enter the guest's full name, including their first and last name.
*   **Guest Email** (`guest_email`, `email`, required): Enter the guest's email address where they can be contacted.
*   **Arrival Date** (`arrival_date`, `date`, optional): Select the date of arrival. If left blank, the system will use the current date as default.
*   **Arrival Time** (`arrival_time`, `time`, optional): Select the time of arrival.
*   **Departure Date** (`departure_date`, `date`, optional): Select the date of departure.
*   **Room Type** (`room_type`, `select_one`, optional): Choose from Single Room, Double Room, or Family Room.
*   **Number of Guests** (`number_of_guests`, `number`, required): Enter the number of guests staying in the room.
*   **Card Type** (`card_type`, `select_one`, optional): Choose from Credit Card, Debit Card, or PayPal.
*   **Card Number** (`card_number`, `text`, required): Enter the card number of the payment method.
*   **CVV/CVV2** (`cvv`, `text`, required): Enter the CVV/CVV2 of the card.
*   **Name** (`name`, `text`, required): Enter your name as the person making the booking.
*   **Phone** (`phone`, `text`, required): Enter your phone number where you can be contacted.
*   **Address** (`address`, `text`, required): Enter your address for billing purposes.
*   **Comments** (`comments`, `note`, optional): Enter any additional comments about your booking.
