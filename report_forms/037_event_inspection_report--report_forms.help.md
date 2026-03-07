<thinking>
The Event Inspection Report form is used to collect information about events that have taken place at a venue. This form is intended for reporting on the events that have occurred at a specific venue, and the information gathered will be used for internal purposes. This form should not be used for reporting on events that have not yet occurred or events that are not associated with the venue in question. Additionally, this form should only be filled out once for each event at the venue.
</thinking>

# Event Inspection Report - Help Guide
## Purpose
This form is used to report on events that have taken place at a specific venue. The information collected will be used for internal purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the Venue Manager who managed the event.
2. Enter the name of the Event Planner, if applicable.
3. Upload a photo of the event (up to 10 photos, 5MB max each).
4. Choose the Safety Team members who were present, if any.
5. Enter any findings or details related to the event.
6. Add any comments or observations about the event.
7. Enter the date the event took place.
8. Enter the time the event started.
9. Enter the contact information (email and phone number) of the contact person.
10. Provide any additional comments or remarks about the event.

## Field-by-Field Explanation

* **Event Inspection Report Form** (`event_inspection_report_form`, text, required: false)
	+ This field is the title of the event.
* **Venue Manager** (`venue_manager`, select one, required: true)
	+ Select the person who managed the event.
* **Event Planner** (`event_planner`, text, required: false)
	+ Enter the name of the person who planned the event.
* **Photo Upload** (`photo_upload`, text, required: false)
	+ Upload up to 10 photos of the event, each 5MB max.
* **Safety Team** (`safety_team`, select multiple, required: false)
	+ Select the team members who were present during the event.
* **Findings** (`findings`, text, required: false)
	+ Enter any relevant findings or details related to the event.
* **Notes** (`notes`, note, required: false)
	+ Add any comments or observations about the event.
* **Event Date** (`event_date`, date, required: false)
	+ Enter the date the event took place.
* **Event Time** (`event_time`, time, required: false)
	+ Enter the start time of the event.
* **Email** (`email`, email, required: false)
	+ Enter the contact email of the person filling out the form.
* **Phone** (`phone`, text, required: false)
	+ Enter the contact phone number of the person filling out the form.
* **Comments** (`comments`, text, required: false)
	+ Add any additional comments or remarks about the event.
