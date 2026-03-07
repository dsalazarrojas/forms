<thinking>
This form is a critical component of our travel booking system, and it's essential to complete it accurately to ensure proper passenger information is captured. The form is used to collect essential details about the passenger, including their name, contact information, and travel dates. It's crucial to fill out this form correctly to avoid any issues during the travel process. Please review each section carefully to ensure you're providing the required information.

</thinking>

# passenger_information_form - Help Guide
## Purpose
The passenger_information_form is used to collect essential details about the passenger to facilitate smooth travel arrangements.

## How To Complete This Form

To complete this form, please follow these steps:

1. Enter the passenger's name in the `passenger_name` field.
2. Enter the passenger's surname in the `passenger_surname` field.
3. Enter the passenger's email address in the `passenger_email` field.
4. Enter the passenger's phone number in the `passenger_phone` field.
5. Enter the passenger's date of birth in the `passenger_dob` field.
6. Enter the travel date and time in the `travel_date` field (if applicable).
7. Enter the travel duration in the `travel_duration` field (if applicable).

## Field-by-Field Explanation

* **Travel Agent** (`travel_agent`, text, optional): Enter the name of the travel agent handling your booking.
* **passenger_name** (`passenger_name`, text, required): Enter your full name as it appears on your identification.
* **passenger_surname** (`passenger_surname`, text, required): Enter your surname as it appears on your identification.
* **passenger_email** (`passenger_email`, email, required): Enter a valid email address that can be used to contact you.
* **passenger_phone** (`passenger_phone`, text, required): Enter your phone number that can be used to contact you.
* **passenger_dob** (`passenger_dob`, date, required): Enter your date of birth in the format `YYYY-MM-DD`.
* **travel_date** (`travel_date`, date, optional): Enter the date of your travel (if different from your date of birth).
* **travel_time** (`travel_time`, time, optional): Enter the time of your travel (if different from your travel date).
* **travel_duration** (`travel_duration`, text, optional): Enter the duration of your travel (e.g., "1 hour, 2 days, 3 weeks", etc.)
