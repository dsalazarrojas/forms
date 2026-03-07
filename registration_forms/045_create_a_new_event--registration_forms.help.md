<thinking>
To create a helpful guide for this form, let's first break down its purpose and the potential pitfalls that might arise during its completion. This form is used to register new events, which likely includes conferences, meetings, workshops, or other types of events that require specific details such as time, date, venue, and description. To prevent duplication and ensure accuracy, it's essential to verify that the event doesn't already exist in the system before proceeding with the creation process.

When considering the fields provided in the YAML, we can anticipate that users might need clarification on the difference between a time selection and a date input, as well as understanding the correct format for entering session length. Additionally, the event location field might not be clearly understood as it seems more like a general description field, not an actual geographic location. This guide will address these potential areas of confusion to create a smooth and efficient user experience.
</thinking>

# Create A New Event - Help Guide
## Purpose
The "Create A New Event" form is designed to collect essential details about a new event, such as its title, time, date, venue, description, and other relevant information. This form helps prevent duplication of events by checking against existing events before creating a new one.

## How To Complete This Form
1. **Start by selecting the "Create Event" label** (`create_a_new_event`, text, required): Type a brief title for your new event to get started.
2. **Enter Event Details** (`event_details`, text, optional): Provide any additional details about your event, if necessary.
3. **Choose the Event Time** (`event_time`, select_one, optional): Select the event time from the provided options (09:00, 600, 660, etc.). Note that the time format seems to be in 24-hour format or minutes past midnight.
4. **Specify the Venue** (`event_venue`, text, optional): Type the name of the venue where your event will take place.
5. **Select a Date** (`event_date`, date, optional): Enter the date of your event in the desired format.
6. **Set Session Length** (`session_length`, number, optional): Enter the session length in hours. For example, if your event will be 1 hour long, type "1".
7. **Provide a Description** (`event_description`, text, optional): Briefly describe your event.
8. **Set Event Capacity** (`event_capacity`, number, optional): Specify the maximum number of attendees allowed.
9. **Enter the Event Location** (`event_location`, text, optional): Type the address or location of your event. Note that this field might be intended for a more general description rather than a specific geographic location.

## Field-by-Field Explanation
* **Create Event**: This is the starting point for your new event title.
* **Event Details**: A field for any additional details about your event.
* **Time**: Choose the time of your event from the given options, which seem to be in 24-hour format.
* **Venue**: Type the name of the venue where your event will take place.
* **Date**: Enter the date of your event.
* **Session Length**: Set the length of your event's session in hours.
* **Event Description**: Provide a brief description of your event.
* **Event Capacity**: Set the maximum number of attendees allowed.
* **Event Location**: Type the address or location of your event.
