# Airline Customer Service Report Form - Help Guide

## Purpose
The Airline Customer Service Report Form is designed to collect feedback from customers about their experience after flight. This form is used to identify areas for improvement and provide better services to our customers.

## How To Complete This Form
1. Fill out your personal details in the "Passenger Information" section.
2. Provide your contact information in the "Contact Details" section.
3. Enter your flight details in the "Flight Details" section.
4. Choose a category for your report from the "Report Type" section.
5. Describe the incident in as much detail as possible in the "Description of the Incident" section.
6. If applicable, provide the name of the staff member involved.
7. Finally, describe your desired outcome.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Enter your full name as it appears on your passport or government-issued ID.
* **Email Address** (`email_address`, email, required): Enter your email address where you can be contacted for follow-up.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number where you can be contacted for follow-up.
* **Booking Reference (PNR)** (`booking_reference`, text, required): Enter the six-character alphanumeric code provided to you by our booking system.
* **Flight Number** (`flight_number`, text, required): Enter the flight number as it appears on your boarding pass or ticket. For example, "AB123".
* **Date of Travel** (`travel_date`, date, required): Enter the date of your travel in the format "YYYY-MM-DD".
* **Departure Airport** (`departure_airport`, text, required): Enter the name of the airport you departed from.
* **Destination Airport** (`destination_airport`, text, required): Enter the name of the airport you arrived at.
* **Type of Report** (`report_type`, select_one, required): Select the category that best describes your report from the options:
	+ Staff Performance
	+ Baggage Issues
	+ In-flight Service
	+ Booking and Check-in
	+ Flight Delay or Cancellation
	+ Other
* **Description of the Incident** (`incident_description`, text, required): Please describe your experience in as much detail as possible.
* **Name of Staff Involved** (`staff_name_involved`, text, optional): If applicable, enter the name of the staff member who was involved in your incident.
* **What is your Desired Outcome?** (`desired_outcome`, text, optional): Describe the outcome you would like to see as a result of your report.

## Tips
* Make sure to enter accurate and detailed information in each field.
* If you are unsure about any field, please ask our customer service staff for assistance.
* Your feedback is greatly appreciated and will help us improve our service.
