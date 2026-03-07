<thinking>
We will first check if the form is correctly configured to serve its intended purpose and ensure it doesn't duplicate other forms. Upon reviewing the form schema, it appears that the form is designed for users to request a meeting room in the library. However, upon closer inspection, it's unclear what kind of meeting room the user is requesting. To confirm the form's purpose and prevent duplication, we will add a field for meeting type to differentiate between types of meeting rooms (e.g., meeting, event, study, other).
We will also make sure all required fields are marked as "required" to avoid incomplete form submissions.
</thinking>

# library_meeting_room_application_form - Help Guide
## Purpose
The library_meeting_room_application_form is a form for users to request a meeting room in the library. To use this form, users will need to provide information about their room request, meeting type, and other details.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out all the required fields marked with \[required] in the field-by-field explanation section.

## Field-by-Field Explanation

* **Room Request [**room_request**](text, text, <del>required</del>): A brief description of the meeting room you would like to use. For example, "I need a quiet room for a group project."
* **Room Name [**room_name**](text, text, <del>required</del>): The name of the meeting room you would like to use.
* **Start Date [**start_date**](date, date, <del>required</del>): The date you would like to start the meeting or event.
* **Start Time [**start_time**](time, time, <del>required</del>): The start time of the meeting or event.
* **End Date [**end_date**](date, date, <del>required</del>): The date you would like the meeting or event to end.
* **End Time [**end_time**](time, time, <del>required</del>): The end time of the meeting or event.
* **Room Capacity [**room_capacity**](number, number, <del>required</del>): The maximum number of people that will be attending the meeting or event.
* **Reservation Duration [**reservation_duration**](number, number, <del>required</del>): The duration of the meeting or event.
* **Meeting Type [**meeting_type**](select_one, select_one, <del>required</del>): Select one of the following meeting types:
	+ Meeting
	+ Event
	+ Study
	+ Other
* **Room Request Details [**room_request_details**](text, text, <del>required</del>): Provide any additional details about your room request.
* **Name [**name**](text, text, <del>required</del>): The name of the person making the reservation.

## Tips

* Make sure to fill out all the required fields to ensure your request is processed correctly.
* If you are unsure about any of the fields, please contact the library staff for assistance.
