# Running Shoe Demo Day Registration - Help Guide
## Purpose
The Running Shoe Demo Day Registration form is a simple, user-friendly form designed to collect basic information from attendees for the event "Running Shoe Demo Day". The form is meant to gather details about the attendees, such as their contact information and scheduling preferences.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter your name and any relevant details in the `attendee_details` field.
2. Indicate whether you would like to schedule a demo session by selecting 'Yes' or 'No' in the `schedule_demo_session` field.
3. Check all relevant boxes if you require any waivers or permissions to be managed. You can select multiple options in the `manage_waivers` field.
4. Enter your address in the `attendee_address` field.
5. Enter the date of the event in the `event_date` field in the format 'MM/DD/YYYY'.
6. Enter the time of the event in the `event_time` field in the format 'HH:MM AM/PM'.
7. Enter your email address in the `contact_email` field.
8. Enter your phone number in the `contact_phone` field.

## Field-by-Field Explanation
* **attendee_details** (`attendee_details`, text, required): Enter any relevant details about yourself as an attendee.
* **schedule_demo_session** (`schedule_demo_session`, select_one, required): Choose whether you would like to schedule a demo session for the event.
* **manage_waivers** (`manage_waivers`, select_multiple, required): Check the boxes for any waivers you need to be managed.
* **attendee_address** (`attendee_address`, text, required): Enter your full address for contact and delivery purposes.
* **event_date** (`event_date`, date, required): Enter the date of the event in the format 'MM/DD/YYYY'.
* **event_time** (`event_time`, time, required): Enter the time of the event in the format 'HH:MM AM/PM'.
* **contact_email** (`contact_email`, email, required): Enter your email address that we can use to contact you.
* **contact_phone** (`contact_phone`, text, required): Enter your phone number that we can use to contact you.

## Tips
* Make sure to double-check your contact information for accuracy.
* If you have any special requests or needs, please include them in the `attendee_details` field.
* If you select 'Yes' for `manage_waivers`, please be prepared to discuss and sign any necessary documents.
* If you have any questions, feel free to reach out to us at the contact information provided.
