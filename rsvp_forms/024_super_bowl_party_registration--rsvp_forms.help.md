# super_bowl_party_registration - Help Guide
## Purpose
This form is designed to collect information from individuals RSVPing to a Super Bowl party, allowing the host to plan and prepare for the event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the RSVP section to indicate if you will be attending the party.
2. Provide the name(s) of the guest(s) attending.
3. Select your food and drink preferences from the options provided.
4. Enter your contact information, including email and phone number.
5. Provide any additional comments or special requests.
6. Select the event time and date for the party.

## Field-by-Field Explanation

* **RSVP** (`rsvp`, `text`, required/optional): Indicate if you will be attending the party.
* **Attending Guests** (`attending_guests`, `number`, required/optional): Enter the number of guests attending.
* **Name of Guests Attending** (`name_of_guests_attending`, `text`, required/optional): List the names of the guests attending, separated by commas.
* **Food and Drink** (`food_pantry_preferences`, `select_one`, required/optional): Select your preferred food options for the party.
* **Food Preferences** (`food_preferences`, `text`, required/optional): Enter any additional food preferences or requests.
* **Drink Preferences** (`drink_preferences`, `select_multiple`, required/optional): Select your preferred drink options for the party.
* **Special Requests** (`special_requests`, `note`, required/optional): Enter any special requests or instructions for the host.
* **Email** (`email`, `email`, required/optional): Enter your email address.
* **Phone** (`phone_number`, `text`, required/optional): Enter your phone number.
* **Comments** (`comments`, `text`, required/optional): Enter any additional comments or feedback.
* **RSVP Status** (`rsvp_status`, `select_one`, required/optional): Select your RSVP status (Attending, Not Attending, Undecided).
* **Guest Count** (`guest_count`, `number`, required/optional): Enter the number of guests you plan to bring.
* **Food Count** (`food_count`, `number`, required/optional): Enter the number of food items you would like to order.
* **Drink Count** (`drink_count`, `number`, required/optional): Enter the number of drink items you would like to order.
* **Parking Info** (`parking_info`, `text`, required/optional): Enter any parking information or instructions.
* **Transportation Info** (`transportation_info`, `text`, required/optional): Enter any transportation information or instructions.
* **Other Info** (`other_info`, `text`, required/optional): Enter any other information or requests.
* **Signature** (`signature`, `text`, required/optional): Enter your signature.
* **Date** (`date`, `date`, required/optional): Enter the date of the party.
* **Time** (`time`, `time`, required/optional): Enter the time of the party.
* **Time of Arrival** (`time_of_arrival`, `time`, required/optional): Enter your expected time of arrival.
* **Event Time** (`event_time`, `time`, required/optional): Enter the event time.
* **RSVP By** (`rsvp_by`, `date`, required/optional): Enter the RSVP deadline.
* **Food Options** (`food_options`, `select_one`, required/optional): Select your preferred food options for the party.
* **Drink Options** (`drink_options`, `select_multiple`, required/optional): Select your preferred drink options for the party.

Note: The required/optional status for each field is based on the YAML configuration provided. If a field is marked as required, it is essential to fill it in. If it's marked as optional, it's not necessary but can be filled in for additional information.
