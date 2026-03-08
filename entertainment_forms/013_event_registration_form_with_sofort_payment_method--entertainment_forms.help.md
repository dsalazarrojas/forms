<thinking>
This form is intended for users to register for an event, providing essential details such as event name, date, time, and location. The form also collects payment information, allowing users to choose a preferred payment method and the amount to be paid. Finally, it captures contact information (email and phone number) and any additional notes.
To avoid duplication, the form should only be used for event registration purposes and not for other types of submissions.
</thinking>

# event_registration_form_with_sofort_payment_method - Help Guide
## Purpose
This form is designed to collect registration information and payment details for an event. It includes fields for event name, date, time, location, payment method, payment amount, email, phone number, and notes.

## How To Complete This Form
1. Fill out the registration information sections with your event details.
2. Choose your preferred payment method from the options provided.
3. Enter your email address.
4. Enter your phone number.
5. Add any additional notes if needed.

## Field-by-Field Explanation

* **Registration Information** (`registration_information`, `text`, `required: false`): Enter a brief description of the event, including any necessary details for the registrants.
* **Event Name** (`event_name`, `text`, `required: false`): Enter the name of the event.
* **Event Description** (`event_description`, `text`, `required: false`): Provide a detailed description of the event.
* **Event Date** (`event_date`, `date`, `required: false`): Enter the date of the event in the standard date format.
* **Event Time** (`event_time`, `time`, `required: false`): Enter the time of the event.
* **Event Location** (`event_location`, `text`, `required: false`): Enter the location of the event.
* **Payment Method** (`payment_method`, `select_one`, `required: false`): Choose the method of payment for the event. Options include:
	+ Sofort
	+ PayPal
	+ Stripe
	+ Authorizenet
	+ Authorize.net
	+ Bank
	+ Bank Transfer
	+ Cheque
	+ Cheque/ Money Order
	+ Cash
	+ Wire
	+ Wire Transfer
* **Payment Amount** (`payment_amount`, `number`, `required: false`): Enter the amount to be paid for the event.
* **Email** (`email`, `email`, `required: false`): Enter your email address.
* **Phone** (`phone`, `text`, `required: false`): Enter your phone number.
* **Note** (`note`, `note`, `required: false`): Add any additional notes or comments for the event.
* **Form Submissions** (`form_submissions`, `select_multiple`, `required: false`): Choose whether to submit this form for approval or not. Options are:
	+ Yes
	+ No
