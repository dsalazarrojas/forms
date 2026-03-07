<thinking>
This form is intended for users to provide information about their attendance at a theater performance. It captures details such as user contact information, ticket purchasing status, payment status, and other relevant performance details. This form likely serves to track attendee data for administrative purposes or to provide attendees with personalized experiences during and after the performance.

To avoid duplication, the form likely ensures that users can only submit one set of information per performance, and that users cannot submit multiple forms for the same performance.

This form is likely used by the theater management or staff to gather information about attendees and their interactions with the theater.

</thinking>

# theater_performance_attendance_form - Help Guide
## Purpose
This form is designed to collect information from users about their attendance at a theater performance. It is used to gather details such as user contact information, ticket purchasing status, and performance details. The form helps the theater management to track attendees' data and provide personalized experiences.

## How To Complete This Form
1. Fill out the form with your personal information in the **User Information** field.
2. Select your ticket purchasing status in the **Tickets Purchased** field.
3. Indicate your payment status in the **Payment Status** field.
4. Choose the type of ticket you purchased in the **Ticket Type** field.
5. Enter the price and quantity of your ticket(s) in the **Ticket Price** and **Ticket Quantity** fields, respectively.
6. Select the date and time of the performance in the **Performance Date** and **Performance Time** fields.
7. Enter the venue where the performance took place in the **Venue** field.
8. Add any additional notes about your experience in the **Notes** field.
9. Enter your email and phone number in the **Email** and **Phone** fields, respectively.
10. Finally, select the **Payment Status** field to indicate whether you have paid for your ticket or not.

## Field-by-Field Explanation

* **User Information** (`<name>`, `text`, optional): Enter your name.
* **Ticket Information** (`<name>`, `text`, optional): Enter information about your ticket, such as ticket number or ticket holder name.
* **Performance Information** (`<name>`, `text`, optional): Enter details about the performance, such as performance name or show title.
* **Payment Information** (`<name>`, `text`, optional): Enter payment information, such as payment method or payment status.
* **Tickets Purchased** (`<name>`, `select_multiple`, optional): Select 'Yes' if you purchased a ticket, 'No' otherwise.
* **User Payments** (`<name>`, `select_multiple`, optional): Select 'Yes' if you made a payment, 'No' otherwise.
* **Performance Details** (`<name>`, `text`, optional): Enter additional details about the performance.
* **Payment Status** (`<name>`, `select_one`, optional): Select whether you have paid for your ticket (Paid), or if payment is pending (Pending), or if payment was cancelled (Cancelled).
* **Ticket Type** (`<name>`, `select_one`, optional): Select the type of ticket you purchased (Full, Student, Senior).
* **Ticket Price** (`<name>`, `number`, optional): Enter the price of your ticket.
* **Ticket Quantity** (`<name>`, `number`, optional): Enter the quantity of tickets you purchased.
* **Performance Date** (`<name>`, `date`, optional): Select the date of the performance.
* **Performance Time** (`<name>`, `time`, optional): Select the time of the performance.
* **Venue** (`<name>`, `text`, optional): Enter the name of the venue where the performance took place.
* **Notes** (`<name>`, `note`, optional): Add any additional notes about your experience.
* **Email** (`<name>`, `email`, optional): Enter your email address.
* **Phone** (`<name>`, `text`, optional): Enter your phone number.

Note: Fields with 'optional' status can be left blank.
