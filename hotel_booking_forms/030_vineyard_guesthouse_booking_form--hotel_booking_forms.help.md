<thinking>
To create an effective help guide, I'll first analyze the form's purpose and ensure the provided YAML fields are correctly understood.

The form appears to be for booking a room at a Vineyard Guesthouse. The form is designed to collect general information about the booking, including details about the guests, the dates of stay, and the payment method. The fields seem to be designed for both guests and the management/administrators of the guesthouse to use. The form does not have any fields that explicitly ask for the guest's address or payment details (such as credit card numbers), so it's assumed that this information will be collected separately or is already known to the guesthouse management. The form seems to be well-structured and straightforward.

The fields are:

*   **Booking Details**: A general page to collect the booking details.
*   **Guest Name**: A field to input the guest's name.
*   **Check-in Date**: A field to input the date the guest will be checking in.
*   **Check-out Date**: A field to input the date the guest will be checking out.
*   **Room Type**: A selection of room types (King, Queen, Single) for the guest to choose from.
*   **Room Quantity**: A field to input the number of rooms the guest is booking.
*   **Guest Quantity**: A field to input the number of guests.
*   **Contact Email**: A field for the guest to input their contact email.
*   **Contact Phone**: A field for the guest to input their phone number.
*   **Reservation Notes**: A field for the guest to input any additional notes about their reservation.
*   **Payment Method**: A selection of payment methods (Credit Card, PayPal, Bank Transfer) for the guest to choose from.
*   **Confirm Reservation**: A field to confirm the reservation (True/False).

</thinking>

# Vineyard Guesthouse Booking Form - Help Guide
## Purpose
This is the Vineyard Guesthouse Booking Form, designed to collect information about your stay and payment preferences for a booking at the Vineyard Guesthouse.

## How To Complete This Form
To complete this form, follow these steps:

1.  **Enter Booking Details**: Select the page for general information about your stay.
2.  **Fill out Guest Information**: Enter your name and any other relevant details.
3.  **Choose Check-in and Check-out Dates**: Select the dates you intend to stay with us.
4.  **Choose Room Type**: Select the type of room you would like to book.
5.  **Select Room and Guest Quantity**: Specify how many rooms and guests you are booking.
6.  **Enter Contact Information**: Input your contact email and phone number.
7.  **Add Reservation Notes**: If you have any special requests or needs, please add them here.
8.  **Choose Payment Method**: Select your preferred payment method.
9.  **Confirm Reservation**: Confirm that you would like to book.

## Field-by-Field Explanation
*   ***Booking Details* (`booking_details`, text, **Required:** no): A page for general information about your stay.*
*   ***Guest Name* (`guest_name`, text, **Required:** no): Please enter your name.*
*   ***Check-in Date* (`check_in_date`, date, **Required:** no): Enter the date you plan to arrive.*
*   ***Check-out Date* (`check_out_date`, date, **Required:** no): Enter the date you plan to leave.*
*   ***Room Type* (`room_type`, select_multiple, **Required:** no): Choose the type of room you would like to book (King, Queen, Single).*
*   ***Room Quantity* (`room_quantity`, number, **Required:** no): Specify the number of rooms you are booking.*
*   ***Guest Quantity* (`guest_quantity`, number, **Required:** no): Specify the number of guests in your party.*
*   ***Contact Email* (`contact_email`, email, **Required:** no): Input your email address for contact purposes.*
*   ***Contact Phone* (`contact_phone`, text, **Required:** no): Input your phone number for contact purposes.*
*   ***Reservation Notes* (`reservation_notes`, note, **Required:** no): Add any special requests or needs here.*
*   ***Payment Method* (`payment_method`, select_one, **Required:** no): Select your preferred payment method (Credit Card, PayPal, Bank Transfer).*
*   ***Confirm Reservation* (`confirm_reservation`, select_one, **Required:** no): Confirm that you would like to book.*
