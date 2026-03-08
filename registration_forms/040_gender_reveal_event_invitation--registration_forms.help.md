# gender_reveal_event_invitation - Help Guide
## Purpose
The "gender_reveal_event_invitation" form is used to collect information from event guests for a gender-reveal event, allowing the host to organize and coordinate the event smoothly.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the guest's name in the "Guest Name" field.
2. Provide the guest's contact number in the "Contact Number" field (optional).
3. Select the event date in the "Event Date" field.
4. Choose the start time for the event from the options provided in the "Start Time" field.
5. Select the event location from the available options in the "Location" field.
6. Choose the type of event from the options in the "Event Type" field (optional).
7. Select your RSVP options in the "RSVP" field. Please note that this field is required.
8. Provide any additional event details in the "Event Details" field (optional).
9. Enter a message for the host or other guests in the "Message" field (optional).

## Field-by-Field Explanation
* **Guest Name** (`guest_name`, `text`, required): Please enter your guest's name.
* **Contact Number** (`contact_number`, `text`, optional): Provide your contact number for communication purposes.
* **Event Date** (`gender_reveal_event_date`, `date`, optional): Select the date of the event.
* **Start Time** (`start_time`, `time`, optional): Choose the start time for the event.
* **Location** (`location`, `select_one`, required): Select the location of the event.
* **Event Type** (`event_type`, `select_one`, optional): Choose the type of event.
* **RSVP** (`rsvp`, `select_multiple`, required): Select your RSVP options.
* **Event Details** (`event_details`, `note`, optional): Provide any additional details about the event.
* **Message** (`message`, `text`, optional): Enter a message for the host or other guests.
