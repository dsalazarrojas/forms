<thinking>
This form is designed to collect information for a Zoom appointment, including event details, client information, and payment-related data. It is intended for end-users to input their event details, client information, and payment preferences. This form is likely used in a business or professional setting where appointments are scheduled and payments are processed. The form has a mix of required and optional fields, ensuring that essential information is captured while allowing for additional context to be provided. The form fields are organized into a logical structure, with sections for event details, client information, and payment settings.
</thinking>

# Zoom Appointment Form - Help Guide
## Purpose
The Zoom Appointment Form is a tool for scheduling and managing appointments, capturing essential details and payment information for each session.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the title of the appointment, if desired.
2. Select the date and time of the appointment.
3. Choose the type of event (video or phone consultation).
4. Select the duration of the event (30, 60, or 90 minutes).
5. Enter the client's name, email, phone number, and address.
6. Choose the payment method and provider (Stripe or PayPal).
7. Enter the payment amount and status.
8. Select the HIPAA compliance option (compliant or not compliant).
9. Review and confirm the appointment details before submitting.

## Field-by-Field Explanation

* **Event Date** (`event_date`, required): Enter the date of the appointment in the format `MM/DD/YY` (e.g., 02/01/23).
* **Event Time** (`event_time`, required): Enter the time of the appointment in 24-hour format (e.g., 14:00 for 2:00 PM).
* **Event Type** (`event_type`, required): Select the type of event from the options provided (video or phone consultation).
* **Event Duration** (`event_duration`, required): Choose the duration of the event from the options (30, 60, or 90 minutes).
* **Client Name** (`client_name`, required): Enter the client's name.
* **Email** (`email`, required): Enter the client's email address.
* **Phone** (`phone`, required): Enter the client's phone number.
* **Client Address** (`client_address`, required): Enter the client's address.
* **Client Country** (`client_country`, not required): Enter the client's country of residence (if not specified, can be left blank).
* **Client City** (`client_city`, not required): Enter the client's city (if not specified, can be left blank).
* **Client State** (`client_state`, not required): Enter the client's state (if not specified, can be left blank).
* **Client Zip** (`client_zip`, not required): Enter the client's zip code (if not specified, can be left blank).
* **Payment Method** (`payment_method`, required): Select the payment method used for the appointment (Card or PayPal).
* **Payment Amount** (`payment_amount`, required): Enter the payment amount for the appointment.
* **Payment Status** (`payment_status`, required): Select the payment status of the appointment (Paid or Unpaid).
* **HIPAA Compliance** (`hipaa_compliance`, required): Select the HIPAA compliance option for the appointment (HIPAA Compliant or Not HIPAA Compliant).
* **Payment Provider** (`payment_provider`, required): Select the payment provider used for the appointment (Stripe or PayPal).
* **Payment Status 2** (`payment_status2`, not required): Select the payment status of the appointment (Paid or Unpaid).
* **Payment Status 3** (`payment_status3`, not required): Select the payment status of the appointment (Paid or Unpaid).
* **Payment Status 4** (`payment_status4`, not required): Select the payment status of the appointment (Paid or Unpaid).
* **Payment Status 5** (`payment_status5`, not required): Select the payment status of the appointment (Paid or Unpaid).
* **Notes** (`notes`, not required): Enter any additional notes or comments for the appointment.

Note: The payment fields (`payment_amount`, `payment_method`, `payment_status`, `payment_provider`, `payment_status2`, `payment_status3`, `payment_status4`, `payment_status5`) are related and should be filled out consistently to reflect the actual payment situation. The `Notes` field is optional and can be used for additional context or comments.
