# <string> - Help Guide
## Purpose
The Travel Form is designed to collect information about travel-related events or activities.

## How To Complete This Form
To fill out the form, follow these steps:

1. Select the travel start date from the calendar picker.
2. Choose the travel end date from the calendar picker.
3. Choose the type of travel from the options provided (Domestic or International).
4. Enter the travel destination in the text field.
5. Select all applicable modes of transportation (e.g., Flight, Train, Car) from the multiple-choice field.
6. Enter the number of participants in the trip.
7. Enter the cost of the trip.
8. Add any additional notes about the trip.
9. Enter the contact email address.
10. Enter the contact phone number.

## Field-by-Field Explanation
* **Travel Start Date** (`travel_start_date`, date, required/optional): Enter the start date of the travel event.
* **Travel End Date** (`travel_end_date`, date, required/optional): Enter the end date of the travel event.
* **Travel Type** (`travel_type`, select_one, required): Choose the type of travel (Domestic or International).
* **Travel Destination** (`travel_destination`, text, optional): Enter the destination of the travel event.
* **Travel Mode** (`travel_mode`, select_multiple, optional): Select all applicable modes of transportation (e.g., Flight, Train, Car).
* **Travel Participants** (`travel_participants`, number, optional): Enter the number of participants in the travel event.
* **Travel Cost** (`travel_cost`, number, optional): Enter the cost of the travel event.
* **Travel Notes** (`travel_notes`, note, optional): Add any additional notes about the travel event.
* **Contact Email** (`contact_email`, email, optional): Enter the email address of the person to contact.
* **Contact Phone** (`contact_phone`, text, optional): Enter the phone number of the person to contact.
