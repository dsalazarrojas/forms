# preliminary_vacation_itinerary - Help Guide
## Purpose
The "preliminary_vacation_itinerary" form is used to collect information from clients about their travel plans for a vacation.

## How To Complete This Form

1. To complete this form, the client needs to provide the following information:
   - Client ID: Enter the client's ID number.
   - Client Name: Enter the client's name.
   - Arrival Date: Enter the date of arrival.
   - Departure Date: Enter the date of departure.
   - Travel Type: Select the type of travel from the options provided.
   - Travel Agent:
     - Yes: Select this option if the travel agent will be assisting with the travel plans.
     - No: Select this option if the client will not be using a travel agent.
   - Travel Agent Note: Provide any additional information about the travel agent or their role in the travel plans.
   - Travel Agent Email: Enter the email of the travel agent.
   - Travel Agent Phone: Enter the phone number of the travel agent.
   - Client Message: Enter any message or comments from the client.
   - Hotel:
     - Yes: Select this option if the client plans to stay at a hotel.
     - No: Select this option if the client does not plan to stay at a hotel.
   - Hotel Note: Provide any additional information about the hotel or the client's stay.
   - Hotel Email: Enter the email of the hotel.
   - Hotel Phone: Enter the phone number of the hotel.
   - Car Rental:
     - Yes: Select this option if the client plans to rent a car.
     - No: Select this option if the client does not plan to rent a car.
   - Car Rental Note: Provide any additional information about the car rental or the client's plans.
   - Car Rental Email: Enter the email of the car rental company.
   - Car Rental Phone: Enter the phone number of the car rental company.
   - Activities:
     - Yes: Select this option if the client plans to participate in activities.
     - No: Select this option if the client does not plan to participate in activities.
   - Activity Note: Provide any additional information about the activities or the client's plans.
   - Activity Email: Enter the email of the activity provider.
   - Activity Phone: Enter the phone number of the activity provider.
   - Additional Activity Information: Enter any additional details about the activities.

## Field-by-Field Explanation

* **Client ID**: (`client_id`, number, required): Enter the client's ID number.
* **Client Name**: (`client_name`, text, required): Enter the client's name.
* **Arrival Date**: (`arrival_date`, date, required): Enter the date of arrival.
* **Departure Date**: (`departure_date`, date, required): Enter the date of departure.
* **Travel Type**: (`travel_type`, select_one, required): Select the type of travel.
* **Travel Agent**:
	+ (`travel_agent`, select_one, required): Select whether or not to use a travel agent.
*   **Travel Agent Note**: (`travel_agent_note`, note, required): Provide additional information about the travel agent or their role.
*   **Travel Agent Email**: (`travel_agent_email`, email, required): Enter the email of the travel agent.
*   **Travel Agent Phone**: (`travel_agent_phone`, text, required): Enter the phone number of the travel agent.
*   **Client Message**: (`client_message`, text, required): Enter any message or comments from the client.
*   **Hotel**:
	+ (`hotel`, select_one, required): Select whether or not to stay at a hotel.
*   **Hotel Note**: (`hotel_note`, note, required): Provide any additional information about the hotel or the client's stay.
*   **Hotel Email**: (`hotel_email`, email, required): Enter the email of the hotel.
*   **Hotel Phone**: (`hotel_phone`, text, required): Enter the phone number of the hotel.
*   **Car Rental**:
	+ (`car_rental`, select_one, required): Select whether or not to rent a car.
*   **Car Rental Note**: (`car_rental_note`, note, required): Provide any additional information about the car rental or the client's plans.
*   **Car Rental Email**: (`car_rental_email`, email, required): Enter the email of the car rental company.
*   **Car Rental Phone**: (`car_rental_phone`, text, required): Enter the phone number of the car rental company.
*   **Activities**:
	+ (`activity`, select_multiple, required): Select whether or not to participate in activities.
*   **Activity Note**: (`activity_note`, note, required): Provide any additional information about the activities or the client's plans.
*   **Activity Email**: (`activity_email`, email, required): Enter the email of the activity provider.
*   **Activity Phone**: (`activity_phone`, text, required): Enter the phone number of the activity provider.
*   **Additional Activity Information**: (`activity_additional_info`, text, required): Enter any additional details about the activities.

## Tips

* Make sure to enter accurate and up-to-date information to ensure that the form is filled out correctly. 
* If you are unsure about any information, do not hesitate to ask the travel agent for clarification. 
* The form should be filled out by the client before the travel plan is finalized. 

Note: The above guide is based on the provided YAML fields and attempts to explain each field in a best-effort manner.
