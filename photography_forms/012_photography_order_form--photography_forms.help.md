<thinking>
This form is for customers to place a photography order by providing necessary information about themselves and their desired session(s). The customer will select their choice(s) of photography session package(s), provide their contact and payment information, schedule a date and time for the session, and confirm their order. This form is likely used in a photography studio or agency context. I'm assuming the form is not already covered in existing documentation, and I will not duplicate that information. The form fields are mostly self-explanatory, but some clarification will be provided for unclear or ambiguous fields.
</thinking>

# photography_order_form - Help Guide
## Purpose
This form is designed for customers to place a photography order with the specified photography studio or agency. 

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "customer_info" field with your name and any other relevant personal details.
2. Select the session package(s) you would like to book by checking the corresponding box(es) under "session_packages".
3. In the "contact_info" field, enter your contact details, such as your phone number and email address.
4. In the "payment_info" field, provide your payment method and details.
5. Choose a date for the session in the "date_of_session" field.
6. Select a time for the session in the "time_of_session" field.
7. If you have any special requests, such as specific locations or props, type them in the "special_request" field.
8. Confirm your order by selecting "True" in the "confirm" field.
9. Add any additional notes about the session in the "session_notes" field.
10. Finally, enter your phone number in the "customer_phone" field and your email address in the "customer_email" field.

## Field-by-Field Explanation

* **customer_info** (`text`, required: false): This is where you provide your name and any other relevant personal details.
* **session_packages** (`select_multiple`, required: false): Select the session package(s) you would like to book by checking the corresponding box(es). The options are "Session 1", "Session 2", and "Session 3".
* **contact_info** (`text`, required: false): Enter your contact details such as your phone number and email address in this field.
* **payment_info** (`text`, required: false): Provide your payment method and details.
* **date_of_session** (`date`, required: false): Choose a date for the session from the calendar.
* **time_of_session** (`time`, required: false): Select a time for the session.
* **special_request** (`text`, required: false): If you have any special requests such as specific locations or props, type them in this field.
* **confirm** (`select_one`, required: false): Confirm your order by selecting "True".
* **session_notes** (`text`, required: false): Add any additional notes about the session in this field.
* **customer_phone** (`text`, required: false): Enter your phone number.
* **customer_email** (`email`, required: false): Enter your email address.
* **confirm** (`select_one`, required: false): Confirm your order by selecting "True". 

Please note that this form does not have any required fields, so you can fill it out partially or in full, depending on your needs.
