<thinking>

To create a user-facing help guide for the "Virtual Screening Slot Booking Form", we need to understand the form's purpose, how to complete it, and what each field means.

The form is intended for users to book a virtual screening slot. To complete this form, users will need to provide information about their booking preferences, including the time they wish to book, the duration of the screening, the slot they wish to book, any notes or comments, their phone number, email, and confirmation of their booking.

The form has a few fields that require special attention:

* "screening_start_time" and "screening_end_time" are both time fields, but they might be confusing as they are not explicitly linked. It seems like "screening_start_time" should be the start time of the screening and "screening_end_time" should be the end time of the screening, but it's not specified in the form's schema. This could be clarified to avoid confusion.
* "booking_slot" is a select one field with a long list of options, which might be overwhelming for users. Consider rephrasing the label to "Available Booking Slots" to make it clearer.
* "confirm_booking" is a select one field with "True" and "False" options, which seems to be an error. It's likely that this field was intended to be a checkbox or a boolean field with a more descriptive label like "Confirm Booking" and two options "Yes" and "No" or a checkbox with a label like "Confirm".
* "phone_number" and "email" seem redundant, as they both ask for contact information. Consider merging them into a single field for "Contact Information".

</thinking>

# Virtual Screening Slot Booking Form - Help Guide
## Purpose

The Virtual Screening Slot Booking Form is a simple form designed to book a virtual screening slot. It collects information about your preferences and booking details to confirm your booking.

## How To Complete This Form

To complete this form, follow these steps:

* Choose a booking slot from the list of available options.
* Enter the start and end times of the screening.
* Select the duration of the screening.
* Add any notes or comments about your booking.
* Provide your contact information (phone number and email).
* Confirm your booking by selecting "True" (or the equivalent of a checkbox).

## Field-by-Field Explanation

* **screening_start_time** (`screening_start_time`, `time`, required): Enter the start time of your screening. This will help us to ensure that we start the virtual screening on time.
* **screening_end_time** (`screening_end_time`, `time`, required): Enter the end time of your screening. This will help us to ensure that we end the virtual screening on time.
* **duration** (`duration`, `number`, required): Select the length of your screening in hours.
* **booking_slot** (`booking_slot`, `select_one`, required): Choose an available booking slot for your virtual screening. Please select a slot that works best for you.
* **notes** (`notes`, `note`, optional): Add any additional comments or notes about your booking. This is an opportunity to let us know if you have any specific requests.
* **phone_number** (`phone_number`, `text`, optional): Enter your phone number so we can contact you about your booking.
* **email** (`email`, `email`, optional): Enter your email address so we can contact you about your booking.
* **confirm_booking** (`confirm_booking`, `select_one`, required): Confirm that you would like to book your virtual screening slot. Please select "True" to confirm your booking.
