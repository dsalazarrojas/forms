<thinking>
This form is a Venue Booking Form, used for users to book events such as conferences, workshops, or meetings at venues. Its purpose is to collect information about the event, including its details, guests, and services required. This form should not be used for other purposes, and users should be guided through its completion process carefully.
</thinking>

# Venue Booking Form - Help Guide
## Purpose
The Venue Booking Form is designed to collect information for booking events at venues. This form will be used by users to provide details of the event, including its name, date, time, and guests.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the First Name field.
2. Enter your last name in the Last Name field.
3. Enter your email address in the Email field.
4. Provide the name of the event in the Event Name field.
5. Choose the date of the event in the Event Date field.
6. Choose the start time of the event in the Event Start field.
7. Choose the end time of the event in the Event End field.
8. Select the type of venue required in the Venue Type field. Options include:
	* Hotel
	* Event Space
	* Other (please specify in Event Description)
9. Provide a brief description of the event in the Event Description field.
10. Specify the number of guests attending the event in the Number of Guests field.
11. Select any services required for the event in the Event Services field. Options include:
	* Catering
	* Accommodations
	* Other (please specify in Event Description)
12. Choose the status of the event in the Event Status field. Options include:
	* Booked
	* Pending
	* Cancelled

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Enter your first name in this field.
* **Last Name** (`last_name`, text, optional): Enter your last name in this field.
* **Email** (`email`, email, optional): Enter your email address in this field. The format should be like `example@domain.com`.
* **Event Name** (`event_name`, text, optional): Provide the name of the event in this field.
* **Event Date** (`event_date`, date, optional): Choose the date of the event.
* **Event Start** (`event_start`, time, optional): Choose the start time of the event.
* **Event End** (`event_end`, time, optional): Choose the end time of the event.
* **Venue Type** (`venue_type`, select_one, optional): Select the type of venue required. Options include:
	+ Hotel
	+ Event Space
	+ Other (please specify in Event Description)
* **Event Description** (`event_description`, text, optional): Provide a brief description of the event.
* **Number of Guests** (`event_guests`, number, optional): Specify the number of guests attending the event.
* **Event Services** (`event_services`, select_multiple, optional): Select any services required for the event. Options include:
	+ Catering
	+ Accommodations
	+ Other (please specify in Event Description)
* **Event Status** (`event_status`, select_one, optional): Choose the status of the event. Options include:
	+ Booked
	+ Pending
	+ Cancelled

## Tips
* Please ensure that all fields are filled in completely and accurately.
* If you are unsure about the type of venue required, please select "Other" and provide a brief description in the Event Description field.
* If you are unsure about the services required, please select "Other" and provide a brief description in the Event Description field.
* Double-check the event details before submitting the form to ensure accuracy.
