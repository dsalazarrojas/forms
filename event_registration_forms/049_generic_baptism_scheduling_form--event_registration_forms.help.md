<thinking>
This form is designed to collect information related to the scheduling of a generic baptism event. It will gather details about the event, including the date, time, location, type, and other relevant details. This form aims to provide a unified structure for capturing information about different types of baptisms, allowing event organizers to collect all necessary data in one place.
</thinking>

# Generic Baptism Scheduling Form - Help Guide
## Purpose
This form collects information about the generic baptism event details, including the date, time, location, type, and other relevant details. It's designed to be used by event organizers to gather all necessary data in one place.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the parent information, including the name and contact details.
2. Select the date of the baptism event.
3. Choose the time of the baptism event.
4. Enter the location where the baptism will take place.
5. Choose the type of baptism.
6. Indicate whether a minister is involved.
7. Select the type of ceremony.
8. Enter any notes about the event.
9. Provide your contact email and phone number.
10. Confirm if additional event details are required.

## Field-by-Field Explanation

* **Parent Information** (`parent_info`, `text`, required: false): Fill in the parent's name, contact number, and any other relevant details.
* **Baptism Date** (`baptism_date`, `date`, required: false): Select the date of the baptism event from the calendar.
* **Baptism Time** (`baptism_time`, `time`, required: false): Choose the time of the baptism event.
* **Baptism Location** (`baptism_location`, `text`, required: false): Enter the location where the baptism will take place.
* **Baptism Type** (`baptism_type`, `select_one`, required: false):
	+ Select "Yes" if it's a valid baptism type.
	+ Select "No" otherwise.
* **Baptism Minister** (`baptism_minister`, `select_multiple`, required: false):
	+ Select "Yes" if a minister is involved.
	+ Select "No" otherwise.
* **Ceremony Type** (`ceremony_type`, `select_one`, required: false):
	+ Select "Yes" if it's a valid ceremony type.
	+ Select "No" otherwise.
* **Ceremony Name** (`ceremony_name`, `text`, required: false): Enter the name of the ceremony.
* **Notes** (`notes`, `note`, required: false): Add any relevant notes about the event.
* **Email** (`email`, `email`, required: false): Enter your contact email.
* **Phone** (`phone`, `text`, required: false): Enter your contact phone number.
* **Event Details** (`event_details`, `select_multiple`, required: false):
	+ Select "Yes" if additional event details are required.
	+ Select "No" otherwise.
