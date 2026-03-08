# outdoor_dining_application_form - Help Guide
## Purpose
This form is used to create a new outdoor dining application for an event that will be hosted outdoors. It is required to be filled out completely and accurately.

## How To Complete This Form
1. Select the form of payment for your event.
2. Enter the date of the event in the format MM/DD/YY.
3. Enter the time of the day for the event, if applicable.
4. Select the establishment that will be hosting the event.
5. Enter the start and end dates of the event in the format MM/DD/YY.
6. Enter the duration of the event, in minutes.
7. Select the method of payment for your event.
8. Enter the contact information for the establishment.
9. Enter the email address of the establishment.
10. Add any additional notes about the event.
11. Enter the address of the establishment.

## Field-by-Field Explanation
* **Form of Payment** (<code>form_of_payment</code>, select_one, required): Select the form of payment for your event. This can be <code>credit</code>, <code>debit</code>, or <code>cash</code>.
* **Reservation Date** (<code>reservation_date</code>, date, required): Enter the date of the event in the format MM/DD/YY.
* **Reservation Time** (<code>reservation_time</code>, time, optional): Enter the time of the day for the event, if applicable.
* **Event Host** (<code>event_host</code>, select_one, required): Select the establishment that will be hosting the event.
* **Start Date** (<code>event_start_date</code>, date, required): Enter the start date of the event in the format MM/DD/YY.
* **Start Time** (<code>event_start_time</code>, time, optional): Enter the start time of the day for the event, if applicable.
* **End Date** (<code>event_end_date</code>, date, optional): Enter the end date of the event in the format MM/DD/YY.
* **Event Duration** (<code>event_duration</code>, number, required): Enter the duration of the event, in minutes.
* **Payment Method** (<code>payment_method</code>, select_one, optional): Select the method of payment for your event. This can be <code>check</code>, <code>credit card</code>, <code>bank transfer</code>, or <code>other</code>.
* **Establishment Contact** (<code>establishment_contact</code>, text, required): Enter the contact information for the establishment.
* **Establishment Email** (<code>establishment_email</code>, email, optional): Enter the email address of the establishment.
* **Notes** (<code>notes</code>, note, optional): Add any additional notes about the event.
* **Establishment Address** (<code>establishment_address</code>, text, optional): Enter the address of the establishment.
* **Submitted** (<code>form_submitted</code>, select_one, optional): Select whether the form has been submitted, saved, or is a draft.
