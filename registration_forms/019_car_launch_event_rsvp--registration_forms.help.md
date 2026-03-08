# Car Launch Event RSVP - Help Guide

## Purpose
The Car Launch Event RSVP form is designed to collect information from guests about their attendance and preferences for the car launch event.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your Guest Full Name, Email Address, and Phone Number in the respective fields.
2. Select your attendance status for the car launch event.
3. Indicate the number of additional guests you're bringing, if any.
4. List any dietary restrictions you may have.
5. Express your level of interest in the new vehicle on a scale of 1 to 5.
6. Choose whether you'd like to schedule a test drive.
7. Select your preferred method of receiving more information about the event.
8. Confirm that you have read and agree to the event terms and conditions.
9. Sign your name for RSVP confirmation.
10. Provide any additional comments or requests related to the event.

## Field-by-Field Explanation

* **Guest Full Name** (`guest_full_name`, text, required): Enter your first and last name as it appears on your official ID or driver's license.
* **Email Address** (`guest_email_address`, email, required): Enter your email address for event confirmation and updates.
* **Phone Number** (`guest_phone_number`, text, required): Enter your primary contact phone number for the event.
* **Will you be attending the car launch event?** (`attendance_status`, select_one, required): Select "Yes, I'll be there!" if you plan to attend the event, "No, I can't make it" if unable to attend, or "Maybe" if unsure.
* **Number of Additional Guests** (`number_of_guests`, number, optional): If bringing guests, enter the number of additional guests.
* **Dietary Restrictions** (`dietary_restrictions`, text, optional): List any allergies or preferences you may have.
* **Level of Interest in the New Vehicle** (`vehicle_interest_level`, number, required): Express your level of interest on a scale of 1 to 5.
* **Would you like to schedule a test drive?** (`vehicle_test_drive_interest`, select_one, required): Choose "Yes, absolutely!" if you'd like to schedule a test drive or "No, just attending the event" if you're only attending.
* **How would you like to receive more information?** (`vehicle_information_preference`, select_multiple, optional): Select your preferred method of receiving more information (email, phone call, text message, or physical brochure).
* **I acknowledge the event terms and conditions** (`event_acknowledgement`, select_one, required): Confirm that you have read and agree to the event terms and conditions.
* **Type your name for RSVP confirmation** (`signature_confirmation_rsvp`, text, required): Sign your name for RSVP confirmation.
* **Any additional comments or requests?** (`additional_rsvp_comments`, text, optional): Provide any additional details or requests related to the event.
