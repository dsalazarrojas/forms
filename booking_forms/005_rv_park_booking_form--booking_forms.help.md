<thinking>
This form appears to be a booking form for an RV park, collecting information from both the guest and the park staff. The form is likely used for managing bookings and reservations at the RV park. To ensure the form is filled out correctly, let's review the fields to understand their purpose and relevance.

*   `rv_park_name` and `rv_park_address` seem to be fields for collecting information about the RV park, likely to be used for internal management purposes.
*   `guest_name`, `guest_email`, and `guest_phone` appear to be fields for the guest's contact information.
*   `arrival_date` and `departure_date` are likely for booking dates.
*   `arrival_time` and `departure_time` could be for scheduling arrival and departure times.
*   `number_of_people` and `number_of_units` might be for planning purposes, such as arranging for the correct number of units and guests.
*   `unit_type` seems to be a selection of unit types available for booking.
*   `payment_method` is probably for selecting the payment method for the booking.
*   `reservation_note` and `message_to_staff` might be fields for additional comments and messages.
*   `agree` appears to be a field for the guest to agree to terms or policies.
*   `rv_park_reservation_id` could be an internal field for referencing the booking ID.
*   `rv_park_reservation_status` is likely for tracking the status of the booking.
*   `guest_message_to_rv_park` and `message_to_guest` might be fields for communication between the guest and park staff.
*   `rv_park_booking_status` and `rv_park_staff_response` are likely for tracking staff responses and booking status.
*   `payment_received` seems to be for indicating if payment has been received.
*   `rv_park_staff_response` and `message_to_guest` appear to be fields for staff responses and guest communication.

Given the fields, the form seems to be a comprehensive booking system, allowing for the collection of necessary information for both the guest and the park staff. However, the form does not seem to be entirely optimized for user experience, with many fields being required even if they might not be necessary for the booking process.

</thinking>

# rv park booking form - Help Guide
## Purpose
The RV park booking form is used for managing reservations and bookings at an RV park. This form collects information from both the guest and the park staff for efficient management of bookings.

## How To Complete This Form

To complete this form, follow these steps:

1.  Enter the Rv Park Name and Rv Park Address.
2.  Enter the Guest Name, Guest Email, and Guest Phone.
3.  Select the Arrival Date and Departure Date.
4.  Choose the Arrival Time and Departure Time.
5.  Enter the Number of People and Number of Units.
6.  Select the Unit Type.
7.  Choose the Payment Method.
8.  Enter the Reservation Note (if necessary).
9.  Enter a Message to Staff (if necessary).
10.  Agree to the terms and policies.
11.  Select the Rv Park Reservation Status.
12.  Enter the Guest Message to Rv Park (if necessary).
13.  Select the Rv Park Booking Status (if necessary).
14.  Select if Payment has been Received.
15.  Select the Rv Park Staff Response (if necessary).
16.  Enter a Message to Guest (if necessary).

## Field-by-Field Explanation

*   **Rv Park Name**: <code>rv_park_name</code> (Required, text)
    Enter the name of the RV park. This field is used for internal management purposes.
*   **Rv Park Address**: <code>rv_park_address</code> (Required, text)
    Enter the address of the RV park. This field is also used for internal management purposes.
*   **Guest Name**: <code>guest_name</code> (Required, text)
    Enter your name as the guest.
*   **Guest Email**: <code>guest_email</code> (Required, email)
    Enter your email address so the park staff can contact you.
*   **Guest Phone**: <code>guest_phone</code> (Required, text)
    Enter your phone number so the park staff can contact you.
*   **Arrival Date**: <code>arrival_date</code> (Required, date)
    Select the date you plan to arrive at the RV park.
*   **Departure Date**: <code>departure_date</code> (Required, date)
    Select the date you plan to depart from the RV park.
*   **Arrival Time**: <code>arrival_time</code> (Required, time)
    Select the time you plan to arrive at the RV park.
*   **Departure Time**: <code>departure_time</code> (Required, time)
    Select the time you plan to depart from the RV park.
*   **Number of People**: <code>number_of_people</code> (Required, number)
    Enter the number of people in your group.
*   **Number of Units**: <code>number_of_units</code> (Required, number)
    Enter the number of units you plan to book.
*   **Unit Type**: <code>unit_type</code> (Required, select_one)
    Select the type of unit you want to book.
*   **Payment Method**: <code>payment_method</code> (Required, select_one)
    Select the method of payment for your reservation.
*   **Reservation Note**: <code>reservation_note</code> (Optional, text)
    Add any additional comments about your reservation.
*   **Message to Staff**: <code>message_to_staff</code> (Optional, text)
    Add any messages for the park staff.
*   **Agree**: <code>agree</code> (Required, note)
    Agree to the terms and policies of the RV park.
*   **Rv Park Reservation ID**: <code>rv_park_reservation_id</code> (Required, number)
    This field is likely for internal referencing and is not visible to guests.
*   **Rv Park Reservation Status**: <code>rv_park_reservation_status</code> (Optional, select_one)
    Select the status of your reservation.
*   **Guest Message to Rv Park**: <code>guest_message_to_rv_park</code> (Optional, text)
    Add any messages to the park staff.
*   **Rv Park Booking Status**: <code>rv_park_booking_status</code> (Optional, select_multiple)
    Select the status of your booking.
*   **Payment Received**: <code>payment_received</code> (Required, select_multiple)
    Select if payment has been received.
*   **Rv Park Staff Response**: <code>rv_park_staff_response</code> (Optional, select_multiple)
    Select the response of the park staff.
*   **Message to Guest**: <code>message_to_guest</code> (Optional, text)
    Add any messages to the guest.
*   **Agree to Terms**: <code>agree</code> (Required, note)
    Agree to the terms and policies of the RV park.

## Tips

*   Make sure to fill out all required fields correctly.
*   Double-check your contact information for accuracy.
*   Select the correct dates and times for your booking.
*   Be clear and concise in your messages to staff and guests.
*   Review your booking status and park staff response for any updates or changes.
