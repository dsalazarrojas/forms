# RSVP For Exclusive FAM Trip - Help Guide
## Purpose
The purpose of this form is to gather information from employees about their attendance on an Exclusive FAM Trip. The form is used by the travel agency to organize and manage the trip efficiently.

## How To Complete This Form
- Start by selecting the "Travel Agency" field to choose the agency you will be working with during the trip.
- Choose your "RSVP Status" in the dropdown menu. This will determine if you will be attending the trip.
- Fill in your "Attendee First Name" and "Attendee Last Name" fields with your personal details.
- Provide your "Attendee Email" address, which will be used by the travel agency to contact you with any updates about the trip.
- Choose the "RSVP Date" for the trip, which should be the date you will be attending the trip.
- If required, fill in the "Travel Agency Details" with any additional information about your agency.
- Select your preferred airport from the list in the "Attendee Preferred Airport" field.
- Fill in the "Travel Agent Details" with any additional information about the agent.
- Enter the name of the travel agent in the "Travel Agent Name" field.
- Fill in the "RSVP Confirmation" field with any additional comments or questions you have.
- Enter the "Confirmation Details" in the field with any additional comments or questions you have.
- Choose the "Confirmation Deadline" for when you need to confirm your attendance.
- Fill in the "Trip Details" with any additional information about the trip.
- Choose the "Trip Dates" for the trip.
- Select the "Trip Type" from the dropdown menu to specify if this is a FAM Trip or not.
- Choose the "Trip Status" from the dropdown menu to specify if this trip has been approved or not.
- Fill in the "Travel Agent Phone" and "Travel Agent Email" fields with the agent's contact information.
- Fill in the "Travel Agency" field with any additional information about your agency.
- Choose the "Event Dates" for the event.
- Select the "Event Type" from the dropdown menu to specify if this is a conference, meeting, event or trade show.
- Enter the "Trip Lead Name", "Trip Lead Phone", and "Trip Lead Email" fields with the trip lead's contact information.
- Fill in the "Trip Details" with any additional information about the trip.

## Field-by-Field Explanation

* **Travel Agency**: (`travel_agency`, text, required) The travel agency you will be working with during the trip.
* **Status**: (`rsvp_status`, select_one, optional) Your RSVP status, which can be True, False, or Maybe.
* **Attendee First Name**: (`attendee_first_name`, text, required) Your first name.
* **Attendee Last Name**: (`attendee_last_name`, text, required) Your last name.
* **Attendee Email**: (`attendee_email`, email, required) Your email address.
* **RSVP Date**: (`rsvp_date`, date, required) The date you will be attending the trip.
* **Travel Agency Details**: (`travel_agency_details`, note, required) Any additional information about your agency.
* **Attendee Preferred Airport**: (`attendee_preferred_airport`, select_multiple, optional) The airport you would like to use for the trip.
* **Travel Agent Details**: (`travel_agent_details`, note, required) Any additional information about the agent.
* **Travel Agent Name**: (`travel_agent_name`, text, required) The name of the travel agent.
* **RSVP Confirmation**: (`rsvp_confirmation`, note, required) Any comments or questions you have.
* **Confirmation Details**: (`rsvp_confirmation_details`, note, required) Any additional comments or questions you have.
* **Confirmation Deadline**: (`confirmation_deadline`, date, required) The deadline for confirming your attendance.
* **Trip Details**: (`trip_details`, note, required) Any additional information about the trip.
* **Trip Dates**: (`trip_dates`, date, required) The dates of the trip.
* **Trip Type**: (`trip_type`, select_one, optional) The type of trip, which can be FAM or Non-FAM.
* **Trip Status**: (`trip_status`, select_one, optional) The status of the trip, which can be Approved or Not Approved.
* **Travel Agent Phone**: (`travel_agent_phone`, text, required) The phone number of the travel agent.
* **Travel Agent Email**: (`travel_agent_email`, email, required) The email address of the travel agent.
* **Travel Agency**: (`travel_agency`, text, required) Any additional information about your agency.
* **Event Dates**: (`event_dates`, date, required) The dates of the event.
* **Event Type**: (`event_type`, select_one, optional) The type of event, which can be conference, meeting, event, or trade show.
* **Trip Lead Name**: (`trip_lead_name`, text, required) The name of the trip lead.
* **Trip Lead Phone**: (`trip_lead_phone`, text, required) The phone number of the trip lead.
* **Trip Lead Email**: (`trip_lead_email`, email, required) The email address of the trip lead.
* **Trip Details**: (`trip_details`, note, required) Any additional information about the trip.
