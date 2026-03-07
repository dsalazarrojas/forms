<thinking>...</thinking>

# Flight Rescheduling Request Form - Help Guide

## Purpose
The Flight Rescheduling Request Form is designed to assist users in requesting changes to their flight bookings. This form helps to gather essential information about the flight, the traveler, and the reason for the reschedule request.

## How To Complete This Form

To complete this form, follow the steps below:

1. Fill in the required information:
	* First Name: Enter the traveler's first name.
	* Last Name: Enter the traveler's last name.
	* Travel Date: Enter the date of the original flight booking.
	* Flight Status: Select the current status of the flight (Active, Inactive, or Canceled).
	* Confirmation: Confirm that you have reviewed and agree to the changes.
2. Optional information:
	* Flight Number: Enter the flight number if available.
	* Travel Agency: Select the travel agency involved in the flight booking.
	* Airline: Enter the airline name if available.
	* Reason: Provide a brief explanation for the reschedule request.
	* Email: Enter the traveler's or requester's email address (if applicable).
	* Phone: Enter the traveler's or requester's phone number (if applicable).
	* Traveler Details: Add any additional information about the traveler (e.g., seat preferences).
	* Requester Details: Add any additional information about the requester (e.g., approval authority).
3. Upload attachments (if necessary):
	* Attach relevant documents or information to support the reschedule request.

## Field-by-Field Explanation

* **First Name** (`travel_booking_forms_first_name`, `text`, required): Enter the traveler's first name.
* **Last Name** (`travel_booking_forms_last_name`, `text`, required): Enter the traveler's last name.
* **Travel Date** (`travel_booking_forms_travel_date`, `date`, required): Enter the date of the original flight booking.
* **Flight Number** (`travel_booking_forms_flight_number_2`, `text`, optional): Enter the flight number if available.
* **Airline** (`travel_booking_forms_airline`, `text`, optional): Enter the airline name if available.
* **Flight Status** (`travel_booking_forms_flight_status`, `select_one`, required): Select the current status of the flight (Active, Inactive, or Canceled).
* **Reason** (`travel_booking_forms_reason`, `text`, optional): Provide a brief explanation for the reschedule request.
* **Email** (`travel_booking_forms_email`, `email`, optional): Enter the traveler's or requester's email address (if applicable).
* **Phone** (`travel_booking_forms_phone`, `text`, optional): Enter the traveler's or requester's phone number (if applicable).
* **Travel Agency** (`travel_booking_forms_travel_agency`, `select_multiple`, optional): Select the travel agency involved in the flight booking.
* **Traveler Details** (`travel_booking_forms_traveler_details`, `note`, optional): Add any additional information about the traveler (e.g., seat preferences).
* **Requester Details** (`travel_booking_forms_requester_details`, `note`, optional): Add any additional information about the requester (e.g., approval authority).
* **Attachment 1-9** (`travel_booking_forms_attachment_1`, `text`, optional): Upload relevant documents or information to support the reschedule request.
* **Confirmation** (`travel_booking_forms_confirmation`, `select_one`, required): Confirm that you have reviewed and agree to the changes.

Note: The attachments can be uploaded as text files or other supported formats, depending on the system's capabilities.
