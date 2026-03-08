# performance_seat_booking_access_form - Help Guide
## Purpose
This form is for booking access to a performance seat. It allows end users to input event details and other relevant information to complete the booking process.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter the name of the event in the "Event Name" field.
2. Select the date of the event in the "Event Date" field.
3. Choose the type of seat you want to book from the "Seat Type" dropdown menu.
4. If necessary, enter the number of the seat you want to book in the "Seat Number" field.
5. Select the method of booking you prefer from the "Booking Method" dropdown menu (e.g. Bank Transfer, Credit Card, PayPal).
6. Enter your email address in the "Email Address" field.
7. If you have a phone number, enter it in the "Phone Number" field. This is optional.
8. If you have any additional comments or notes, you can enter them in the "Notes" field.
9. Select a category for the form from the "Category" dropdown menu (e.g. Event Registration Forms, Payment Forms, Booking Forms).
10. If you want to provide a description of your booking, you can enter it in the "Description" field. This is optional.

## Field-by-Field Explanation

* **Event Name** (`event_name`, `text`, required): Enter the name of the event you are booking.
* **Event Date** (`event_date`, `date`, required): Select the date of the event.
* **Seat Type** (`seat_type`, `select_one`, optional): Choose the type of seat you want to book.
* **Seat Number** (`seat_number`, `number`, optional): If necessary, enter the number of the seat you want to book.
* **Booking Method** (`booking_method`, `select_multiple`, optional): Select the method of booking you prefer (e.g. Bank Transfer, Credit Card, PayPal).
* **Email Address** (`email_address`, `email`, required): Enter your email address.
* **Phone Number** (`phone_number`, `text`, optional): If you have a phone number, enter it.
* **Notes** (`note`, `note`, optional): If you have any additional comments or notes, enter them here.
* **Category** (`category`, `select_one`, optional): Select a category for the form from the dropdown menu (e.g. Event Registration Forms, Payment Forms, Booking Forms).
* **Description** (`description`, `text`, optional): If you want to provide a description of your booking, enter it here.
