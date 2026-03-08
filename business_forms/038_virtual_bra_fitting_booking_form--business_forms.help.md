# virtual_bra_fitting_booking_form - Help Guide
## Purpose
This is a form for customers to book a virtual bra fitting session. It gathers essential information to schedule a suitable time slot for the customer and the stylist.

## How To Complete This Form
To book a virtual bra fitting session, follow these steps:

1. Enter your customer name.
2. Provide your email address, which is required for communication purposes.
3. Optionally, you can provide your phone number for easier contact.
4. Indicate your available time for the session.
5. Decide on the type of booking you prefer.
6. Enter the date and time of the booking.
7. If necessary, add any comments or additional information.
8. Confirm your booking by entering a confirmation code (a number).

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, Text, Optional): Enter your full name.
* **Email** (`customer_email`, Email, Required): Enter a valid email address to receive booking updates.
* **Phone** (`customer_phone`, Text, Optional): Enter your phone number for easier contact.
* **Available Time** (`available_time`, Select One, Required): Choose whether you are available.
* **Stylist Info** (`st stylist_info`, Select Multiple, Optional): Indicate whether you want additional information or not.
* **Date** (`date`, Date, Required): Enter the date of the booking.
* **Time** (`time`, Time, Required): Enter the time of the booking.
* **Booking Type** (`booking_type`, Select One, Required): Decide on the type of booking.
* **Comments** (`comments`, Note, Optional): Add any additional comments or information.
* **Confirm** (`confirm`, Number, Required): Enter the confirmation code for the booking.
