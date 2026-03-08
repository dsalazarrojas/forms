# Travel Agent Booking Form - Help Guide

## Purpose
This form is for travel agents to collect client information and booking details for travel arrangements.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the client's name and contact information (phone and email) to identify them correctly.
2. Enter the travel agent's name and contact information (phone and email) for reference.
3. Provide a detailed description of the booking, including the travel date, travel time, and duration.
4. Enter the client's confirmation status to track their response to the booking.
5. Select a submission option to indicate how the form should be handled (Submit, Save for Later, or Cancel).

## Field-by-Field Explanation

* **Client Name** (`client_name`, `text`, required: `false`): Enter the client's name as it appears on their identification documents.
* **Client Phone** (`client_phone`, `text`, required: `false`): Enter the client's phone number for easy contact.
* **Client Email** (`client_email`, `text`, required: `false`): Enter the client's email address for future communication.
* **Travel Agent Name** (`travel_agent_name`, `text`, required: `false`): Enter the travel agent's name who made the booking.
* **Travel Agent Phone** (`travel_agent_phone`, `text`, required: `false`): Enter the travel agent's phone number for easy contact.
* **Booking Details** (`booking_details`, `text`, required: `false`): Enter a detailed description of the travel booking, including dates and times.
* **Travel Date** (`travel_date`, `date`, required: `false`): Enter the travel date for the booking.
* **Travel Time** (`travel_time`, `time`, required: `false`): Enter the travel time for the booking.
* **Travel Duration** (`travel_duration`, `number`, required: `false`): Enter the duration of the travel, usually measured in hours or days.
* **Travel Agent Comment** (`travel_agent_comment`, `note`, required: `false`): Enter any relevant comments or notes from the travel agent.
* **Client Confirmation** (`client_confirmation`, `select_one`, required: `false`): Select the client's confirmation status (Yes, No, Maybe).
* **Form Submission** (`form_submission`, `select_multiple`, required: `false`): Select how the form should be handled (Submit, Save for Later, Cancel).

## Tips

* Make sure to enter accurate and complete information for each field.
* Double-check the client's confirmation status for accurate tracking.
* Select the correct submission option to ensure the form is handled correctly.
* Use the travel agent comment field to add any relevant notes or comments about the booking.
* This form can be used to gather client feedback and manage bookings in an organized manner.
