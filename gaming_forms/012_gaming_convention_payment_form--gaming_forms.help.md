<thinking>
To determine the purpose of this form, we will analyze the input schema.

Upon reviewing the YAML, we can see that the form is related to gaming conventions, and it appears to be used for processing payment and registration information for attendees. The form contains fields for event organizer, event name, attendee details, payment method, payment status, and event details. This suggests that the form is used for managing registrations and payments for gaming conventions.

We will assume that this form is intended for event organizers and attendees to input their information for the purpose of registering and paying for a gaming convention.

To avoid duplication, we will check for similar forms in our organization's documentation and update this form's documentation if needed.

</thinking>

# gaming_convention_payment_form - Help Guide
## Purpose
This form is used for registering and paying for a gaming convention. It is meant to be filled out by event organizers and attendees to process registration and payment information.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the event you are registering for from the dropdown menu.
2. Enter the attendee's name and email address.
3. Choose the payment method and amount.
4. Select the payment status and any additional notes.
5. Confirm your registration status.
6. Add any additional notes if necessary.

## Field-by-Field Explanation
* **Event Organizer** (`event_organizer`, text, not required): This field is for the event organizer to input their name.
* **Event Name** (`event_name`, text, not required): This field is for the event name.
* **Convention Type** (`convention_type`, select_one, true): This field is for selecting whether the event is gaming or non-gaming related.
* **Attendee Name** (`attendee_name`, text, not required): This field is for the attendee's name.
* **Attendee Email** (`attendee_email`, email, not required): This field is for the attendee's email address.
* **Attendee Phone** (`attendee_phone`, text, not required): This field is for the attendee's phone number.
* **Payment Method** (`payment_method`, select_one, true): This field is for selecting the payment method (Card, PayPal, or Bank Transfer).
* **Payment Amount** (`payment_amount`, number, not required): This field is for entering the payment amount.
* **Payment Date** (`payment_date`, date, not required): This field is for selecting the payment date.
* **Registration Fee** (`registration_fee`, number, not required): This field is for entering the registration fee.
* **Attendee Address** (`attendee_address`, note, not required): This field is a note for additional attendee address information.
* **Attendee City** (`attendee_city`, text, not required): This field is for the attendee's city.
* **Attendee State** (`attendee_state`, text, not required): This field is for the attendee's state.
* **Attendee Zip** (`attendee_zip`, text, not required): This field is for the attendee's zip code.
* **Attendee Country** (`attendee_country`, text, not required): This field is for the attendee's country.
* **Payment Status** (`payment_status`, select_one, true): This field is for selecting the payment status (Paid or Pending).
* **Payment Status Message** (`payment_status_message`, text, not required): This field is for any additional payment status messages.
* **Payment Note** (`payment_note`, note, not required): This field is a note for any additional payment information.
* **Registration Status** (`registration_status`, select_one, true): This field is for selecting the registration status (Registered or Not Registered).
* **Registration Note** (`registration_note`, note, not required): This field is a note for any additional registration information.
* **Event Start Date** (`event_start_date`, date, not required): This field is for selecting the event start date.
* **Event End Date** (`event_end_date`, date, not required): This field is for selecting the event end date.
* **Event Description** (`event_description`, note, not required): This field is a note for any additional event description information.
* **Event Terms** (`event_terms`, note, not required): This field is a note for any additional event terms information.
* **Event Image URL** (`event_image_url`, text, not required): This field is for the event image URL.
