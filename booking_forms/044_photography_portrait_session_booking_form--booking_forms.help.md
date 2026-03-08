# photography_portrait_session_booking_form - Help Guide
## Purpose
The purpose of this form is to collect information from clients who are interested in booking a photography portrait session.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Session Details section with the relevant information about the session.
2. Select the preferred Payment Method and Session Type.
3. Enter your Client Name, Email, and Phone Number.
4. Choose the services you require for the session.
5. Add any Notes about the session if necessary.
6. Select the Payment Status of the session.
7. Enter the Total Cost of the session.
8. Enter the Client ID if applicable.

## Field-by-Field Explanation

- **Session Details** (`session_details`, text, required: false): Enter the details of the session such as date, time, and location.
- **Payment Method** (`payment_method`, select_one, required: false): Select the method of payment you would like to use, such as PayPal or Stripe.
- **Session Type** (`session_type`, select_one, required: false): Choose the type of session you want, such as a Portrait or Event session.
- **Client Name** (`client_name`, text, required: false): Enter your name as the client.
- **Email** (`email`, email, required: false): Enter your email address.
- **Phone** (`phone`, text, required: false): Enter your phone number.
- **Start Time** (`start_time`, time, required: false): Enter the start time of the session.
- **End Time** (`end_time`, time, required: false): Enter the end time of the session.
- **Location** (`location`, text, required: false): Enter the location of the session.
- **Services** (`services`, select_multiple, required: false): Choose the services you require for the session, such as Standard, Premium, or Basic.
- **Notes** (`notes`, note, required: false): Add any notes about the session if necessary.
- **Payment Status** (`payment_status`, select_one, required: false): Select the status of the payment, such as Paid, Pending, or Failed.
- **Total Cost** (`total_cost`, number, required: false): Enter the total cost of the session.
- **Client Id** (`client_id`, number, required: false): Enter the client ID if applicable.

Note: All fields are not required, unless specified as required: true.
