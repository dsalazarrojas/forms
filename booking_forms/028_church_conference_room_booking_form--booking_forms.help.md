# Church Conference Room Booking Form - Help Guide
## Purpose
The Church Conference Room Booking Form is a crucial tool for planning and scheduling events within the church. This form is used to gather essential information about the event, ensuring that your event runs smoothly and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Requestor Information" section with your details.
2. Provide your primary contact person's information in the "Primary Contact Person" field.
3. Enter the name of the ministry or organization hosting the event in the "Ministry or Organization Name" field.
4. Enter your contact email in the "Contact Email" field.
5. Enter your contact phone number in the "Contact Phone" field.
6. Select the preferred conference room in the "Preferred Conference Room" field.
7. Choose the date of the meeting or event in the "Date of Meeting/Event" field.
8. Enter the start and end time of the meeting, including setup and cleanup time.
9. Estimate the number of attendees in the "Estimated Number of Attendees" field.
10. Provide a brief description of the event's purpose in the "Purpose of Meeting" field.
11. If required, select the necessary AV equipment and setup options in the "AV and Setup Requirements" section.
12. Select the furniture setup style for the event in the "Furniture Setup Style" field.
13. Confirm if custodial cleanup is required in the "Is custodial cleanup requested" field.
14. Finally, confirm that you agree to follow the facility use policy and return the room to its original state.

## Field-by-Field Explanation

* **Requestor Information** (`-- Requestor Information --`, `header_requestor`, required: false)
	+ This section is intended to capture information about the person or entity requesting the event.
* **Primary Contact Person** (Primary Contact Person, text, required: true)
	+ Please enter your primary contact person's name and information.
* **Ministry or Organization Name** (Ministry or Organization Name, text, required: true)
	+ Enter the name of the ministry or organization hosting the event.
* **Contact Email** (Contact Email, email, required: true)
	+ Enter your contact email address.
* **Contact Phone** (Contact Phone, text, required: true)
	+ Enter your contact phone number.
* **Preferred Conference Room** (Preferred Conference Room, select_one, required: true)
	+ Select the conference room that best fits your event's needs.
* **Date of Meeting/Event** (Date of Meeting/Event, date, required: true)
	+ Choose the date of the meeting or event.
* **Start Time** (Start Time, time, required: true)
	+ Enter the start time of the meeting, including setup time.
* **End Time** (End Time, time, required: true)
	+ Enter the end time of the meeting, including cleanup time.
* **Estimated Number of Attendees** (Estimated Number of Attendees, number, required: true)
	+ Estimate the number of attendees for the event.
* **Purpose of Meeting** (Purpose of Meeting, text, required: true)
	+ Briefly describe the purpose of the event.
* **AV and Setup Requirements** (`-- AV and Setup Requirements --`, note, required: false)
	+ If necessary, select the required audio-visual equipment and setup options for the event.
* **Furniture Setup Style** (Furniture Setup Style, select_one, required: true)
	+ Select the furniture setup style for the event.
* **Is custodial cleanup requested?** (Is custodial cleanup requested?, select_one, required: true)
	+ Confirm if custodial cleanup is required for the event.
* **I agree to follow the facility use policy and return room to original state** (I agree to follow the facility use policy and return room to original state, select_one, required: true)
	+ Confirm that you agree to follow the facility use policy and return the room to its original state.
