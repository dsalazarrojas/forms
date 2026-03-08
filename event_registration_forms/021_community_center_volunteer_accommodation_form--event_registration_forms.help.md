# Volunteer Accommodation Form - Help Guide
## Purpose
This form is designed to collect information from volunteers about their accommodation needs for an event.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your full name in the "Volunteer name" field.
2. Enter the name of the event you are volunteering for in the "Event name" field.
3. If you have any accommodation needs, describe them in the "Accommodation needed" field.
4. If you have specific arrival and departure dates, enter them in the "Arrival date" and "Departure date" fields respectively.
5. Select your room sharing preference in the "Room sharing preference" field. If you don't have a preference, select "No preference".
6. List any dietary requirements or allergies in the "Dietary requirements" field.
7. Enter the name and phone number of your emergency contact in the "Emergency contact" field.

## Field-by-Field Explanation
* **Volunteer name** (`volunteer_name`, text, required): Enter your full name.
* **Event name** (`event_name`, text, required): Enter the name of the event you are volunteering for.
* **Accommodation needed** (`accommodation_needed`, text, optional): Describe any accommodation needs you may have, such as sleeping requirements or dietary needs.
* **Arrival date** (`arrival_date`, date, optional): Enter the date you plan to arrive for the event.
* **Departure date** (`departure_date`, date, optional): Enter the date you plan to depart after the event.
* **Room sharing preference** (`room_sharing_preference`, select_one, optional): Select if you would like to share a room or have your own private room.
	+ Single: You prefer to have your own room.
	+ Shared: You would like to share a room with another volunteer.
	+ No preference: You don't have a preference.
* **Dietary requirements** (`dietary_requirements`, text, optional): List any dietary restrictions or requirements, such as vegetarian or gluten-free.
* **Emergency contact** (`emergency_contact`, text, required): Enter the name and phone number of your emergency contact.
