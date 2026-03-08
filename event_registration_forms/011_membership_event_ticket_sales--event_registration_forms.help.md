# membership_event_ticket_sales - Help Guide
## Purpose

This form is used to register and manage event ticket sales for membership events. It allows users to select the type of event and provide contact information for payment and registration.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the type of event you are registering for (Public or Private).
2. Enter the event name and date.
3. Select the event time and location.
4. Enter event details and status.
5. Select the type of ticket(s) you would like to purchase.
6. Choose the payment method (Online or Offline).
7. Enter the payment amount (if applicable).
8. Provide your contact information (email and phone number).

## Field-by-Field Explanation

* **Title** (`membership_event_ticket_sales`, `text`, required/optional): This is the title of the form and is displayed at the top of the page.
* **Event Information** (`membership_event_ticket_sales_page1`, `text`, required/optional): This is a description of the event and its purpose.
* **Event Name** (`event_name`, `text`, required/optional): Enter the name of the event.
* **Event Date** (`event_date`, `date`, required/optional): Enter the date of the event.
* **Event Time** (`event_time`, `time`, required/optional): Select the time of the event.
* **Event Location** (`event_location`, `text`, required/optional): Enter the location of the event.
* **Event Details** (`event_details`, `text`, required/optional): Enter any additional information about the event.
* **Event Status** (`event_status`, `select_one`, required/optional): Select the status of the event (Public or Private).
* **Member Status** (`member_status`, `select_multiple`, required/optional): Select the status of the member (Member or Non Member).
* **Ticket Selections** (`ticket_selections`, `select_multiple`, required/optional): Select the type of ticket(s) you would like to purchase.
* **Payment Method** (`payment_method`, `select_one`, required/optional): Choose the payment method (Online or Offline).
* **Payment Amount** (`payment_amount`, `number`, required/optional): Enter the payment amount (if applicable).
* **Payment Notes** (`payment_notes`, `note`, required/optional): Enter any additional notes about the payment.
* **Email** (`email`, `email`, required/optional): Enter your email address.
* **Phone** (`phone`, `text`, required/optional): Enter your phone number.
* **Confirm Email** (`confirm_email`, `email`, required/optional): Confirm your email address.
* **Confirm Phone** (`confirm_phone`, `text`, required/optional): Confirm your phone number.
* **Confirm Email Error** (`confirm_email_error`, `note`, required/optional): Check to ensure your email confirmation was correct.

Note: Please note that some fields may not be required depending on the event status and type.
