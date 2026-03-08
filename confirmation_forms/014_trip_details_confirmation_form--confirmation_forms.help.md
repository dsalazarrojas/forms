# Trip Details Confirmation Form - Help Guide

## Purpose
This form is used to confirm trip details for travel agencies and their clients.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Trip ID (if required).
2. Enter the Trip Name (if required).
3. Enter a brief description of the trip (if required).
4. Enter the Departure Date (if required).
5. Enter the Travel Agency information, including:
	* Phone number
	* Email
	* Address
	* Website (if available)
6. Enter the Flight information, including:
	* Flight Number
	* Flight Status (if available)
	* Arrival Date (if available)
7. Enter the Payment information, including:
	* Payment Method
	* Payment Method Fee (if applicable)
	* Payment Method Terms and Conditions (if available)
	* Total Amount
	* Payment Status
8. Sign and comments sections for the Travel Agency (if required)

## Field-by-Field Explanation

* **Trip ID** (`trip_id`, number, required): Enter the unique ID assigned to this trip.
* **Trip Name** (`trip_name`, text, required): Enter a descriptive name for this trip.
* **Trip Description** (`trip_description`, text, required): Provide a brief description of this trip.
* **Departure Date** (`departure_date`, date, required): Enter the date of departure for this trip.
* **Travel Agency** (`travel_agency`, text, required): Enter the name of the travel agency associated with this trip.
* **Travel Agency Phone** (`travel_agency_phone`, text, required): Enter the phone number of the travel agency.
* **Travel Agency Email** (`travel_agency_email`, email, required): Enter the email address of the travel agency.
* **Travel Agency Address** (`travel_agency_address`, text, required): Enter the address of the travel agency.
* **Travel Agency Website** (`travel_agency_website`, text, optional): Enter the website of the travel agency (if available).
* **Departure Flight Number** (`departure_flight_number`, text, required): Enter the number of the flight associated with this trip.
* **Flight Status** (`flight_status`, text, required): Enter the status of the flight (e.g., "On Time", "Delayed", "Cancelled", etc.).
* **Flight Arrival Date** (`flight_arrival_date`, date, required): Enter the date of arrival for this flight.
* **Travel Agency Contact Name** (`travel_agency_contact_name`, text, required): Enter the name of the contact person at the travel agency.
* **Travel Agency Contact Phone** (`travel_agency_contact_phone`, text, required): Enter the phone number of the travel agency contact.
* **Travel Agency Contact Email** (`travel_agency_contact_email`, email, required): Enter the email address of the travel agency contact.
* **Payment Method** (`payment_method`, text, required): Select the method of payment used for this trip.
* **Payment Method Fee** (`payment_method_fee`, number, optional): Enter any applicable fee for the payment method.
* **Payment Method Terms and Conditions** (`payment_method_terms`, text, optional): Attach any terms and conditions related to the payment method (if available).
* **Total Amount** (`total_amount`, number, required): Enter the total cost of the trip.
* **Payment Status** (`payment_status`, text, required): Enter the payment status of this trip.
* **Travel Agency Signature** (`travel_agency_signature`, text, required): Enter the signature of the travel agency representative.
* **Travel Agency Comments** (`travel_agency_comments`, text, optional): Add any additional comments about this trip.
