> <thinking>
This form is a generic event request form designed to collect event information for further processing and planning. 
This form is intended to be used for creating new events, and the provided fields cover the essential aspects of an event, including its type, category, dates, location, details, and status. To ensure that events are well-organized and non-duplicative, please use this form to submit new event requests.

</thinking>

# Create A New Event - Help Guide
## Purpose
This form is designed to collect essential information about a new event, which will be used for further processing and planning.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of event (online or in-person) that best describes the event you want to create.
2. Choose one or more event categories that apply to the event (e.g., workshops, community gatherings).
3. Enter the start and end dates of the event.
4. Specify the location of the event.
5. Provide a brief description of the event.
6. Add any additional details about the event.
7. Enter the name and contact information of the event organizer.
8. Enter any additional contact information.

## Field-by-Field Explanation

* **Event Type** (`event_type`, select_one, required): Choose the type of event you are creating (online or in-person).
* **Event Category** (`event_category`, select_multiple, required): Choose one or more categories that apply to the event (e.g., workshops, community gatherings).
* **Start Date** (`start_date`, date, required): Enter the start date of the event in the format MM/DD/YYYY.
* **End Date** (`end_date`, date, required): Enter the end date of the event in the format MM/DD/YYYY.
* **Location** (`location`, text, required): Enter the physical location where the event will take place.
* **Description** (`description`, text, required): Provide a brief description of the event.
* **Event Details** (`event_details`, text, optional): Add any additional details about the event.
* **Organizer** (`organizer`, text, required): Enter the name of the event organizer.
* **Contact** (`contact`, text, required): Enter any additional contact information for the event organizer.
* **Event Status** (`event_status`, select_one, optional): Choose the current status of the event (scheduled, pending, or cancelled).
