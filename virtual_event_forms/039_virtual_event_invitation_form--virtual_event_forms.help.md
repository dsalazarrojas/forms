To determine the form purpose, we first need to understand the context in which it's being used. The form is designed for "Virtual Event Invitation Form" which suggests that it's used to invite people to virtual events. The form might be used to collect information about the event, such as the event title, description, date, time, location, and attendees. This information would typically be used to create a virtual invitation that can be shared with the attendees. To ensure that the form is not filled out unnecessarily, we should check for existing events before creating a new one. If the event already exists, it's not necessary to create a new one.

# Virtual Event Invitation Form - Help Guide
## Purpose
This form is designed to collect information about virtual events, such as title, description, date, time, location, and attendees. It will be used to create a virtual invitation that can be shared with the attendees.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the event title and description to give a brief overview of the event.
2. Enter the event start and end dates and times.
3. If the event has a physical location, enter the location.
4. If the event has a URL, enter the URL.
5. Select the attendees who will be attending the event.
6. If you're an attendee, fill in your email address and a message (optional).

## Field-by-Field Explanation
### Event Title (1)
* **Event Title** (`event_title`, text, required: false): Enter a brief title for the event.

### Event Description (2)
* **Event Description** (`event_description`, text, required: false): Briefly describe the event in a few sentences.

### Event Start Date (3)
* **Event Start Date** (`event_start_date`, date, required: false): Enter the date when the event starts.

### Event Start Time (4)
* **Event Start Time** (`event_start_time`, time, required: false): Enter the time when the event starts.

### Event End Date (5)
* **Event End Date** (`event_end_date`, date, required: false): Enter the date when the event ends.

### Event End Time (6)
* **Event End Time** (`event_end_time`, time, required: false): Enter the time when the event ends.

### Event Location (7)
* **Event Location** (`event_location`, text, required: false): Enter the physical location of the event, if applicable.

### Event URL (8)
* **Event URL** (`event_url`, text, required: false): Enter the URL of the event, if applicable.

### Event Attendees (9)
* **Event Attendees** (`event_attendees`, select_multiple, required: true): Select the attendees who will be attending the event.

### Attendee Email (10)
* **Attendee Email** (`attendee_email`, email, required: false): If you're an attendee, enter your email address.

### Attendee Phone (11)
* **Attendee Phone** (`attendee_phone`, text, required: false): If you're an attendee, enter your phone number.

### Attendee Message (12)
* **Attendee Message** (`attendee_message`, note, required: false): If you're an attendee, write a message to the event organizer.
