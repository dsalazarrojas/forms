# Luxury Travel Intake Form - Help Guide
## Purpose
The Luxury Travel Intake Form is used to collect information from users about their luxury travel plans, including destination, travel dates, budget, accommodation preferences, special requests, and contact information.

## How To Complete This Form
To complete the form, follow these steps:

1. Select your preferred destination from the available options.
2. Enter the travel dates for your trip.
3. Choose your preferred activities or interests from the options available.
4. Select your budget preference from the options (Budget, Limited, or Unrestricted).
5. Choose your preferred accommodation type from the available options (Hotel, Resort, Lodge, or Hostel).
6. If you have any special requests for your trip, enter them in the text field provided.
7. Enter your email address.
8. Enter your phone number.
9. Select your preferred travel agent from the options provided.
10. If you have any additional notes for your travel agent, enter them in the text field provided.

## Field-by-Field Explanation
* **Destination** (`destination`, `text`, optional): Enter the name of the destination you would like to visit.
* **Travel Dates** (`travel_dates`, `date`, optional): Enter the dates of your trip using the date format (MM/DD/YYYY).
* **Activities** (`preferred_activities`, `text`, optional): Choose your preferred activities or interests from the options available.
* **Budget** (`budget`, `select_one`, optional): Choose your budget preference from the options (Budget, Limited, or Unrestricted).
* **Accommodation Type** (`accommodation_type`, `select_multiple`, optional): Choose your preferred accommodation type from the available options (Hotel, Resort, Lodge, or Hostel).
* **Special Requests** (`special_requests`, `text`, optional): If you have any special requests for your trip, enter them in this text field.
* **Email** (`email`, `email`, required): Enter your email address to facilitate communication with our travel agents.
* **Phone** (`phone`, `text`, optional): Enter your phone number to ensure that our travel agents can contact you.
* **Travel Agent** (`travel_agent`, `select_one`, optional): Select your preferred travel agent from the options provided.
* **Travel Agent Notes** (`travel_agent_note`, `note`, optional): If you have any additional notes for your travel agent, enter them in this text field.
