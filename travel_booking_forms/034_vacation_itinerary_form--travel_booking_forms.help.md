# Vacation Itinerary Form - Help Guide

## Purpose
The Vacation Itinerary Form is used to record essential details about a traveler's trip, including their departure city, arrival city, travel dates, and other relevant information.

## How To Complete This Form

1. Start by selecting the "Departure City" field, where you should enter the city where the traveler is currently located.
2. Next, choose the "Arrival City" field and select the destination city for the trip.
3. Select the "Travel Dates" field and enter the start and end dates of the trip in the format `YYYY-MM-DD`.
4. In the "Travel Duration" field, enter the total number of days for the trip.
5. Choose the "Travel Type" field, which will be used to categorize the trip as "Yes" or "No" for further analysis.
6. Select the "Email" field and enter the traveler's email address.
7. Next, choose the "Phone" field and enter the traveler's phone number.
8. Finally, select the "Arrival Time" and "Departure Time" fields, where you should enter the corresponding times in the format `HH:MM`.

## Field-by-Field Explanation

* **Departure City** (`departure_city`, text, required): Enter the city where the traveler is currently located.
* **Arrival City** (`arrival_city`, text, required): Select the destination city for the trip.
* **Destination Country** (`destination_country`, text, required): Enter the country for the trip.
* **Travel Dates** (`travel_dates`, date, required): Enter the start and end dates of the trip in the format `YYYY-MM-DD`.
* **Travel Duration** (`travel_duration`, number, required): Enter the total number of days for the trip.
* **Travel Type** (`travel_type`, select_one, required): Categorize the trip as "Yes" or "No" for further analysis.
* **Travel Reason** (`travel_reason`, text, optional): Enter a brief description of the travel reason if necessary.
* **Email** (`email`, email, required): Enter the traveler's email address.
* **Phone** (`phone`, text, required): Enter the traveler's phone number.
* **Arrival Time** (`arrival_time`, time, required): Enter the arrival time in the format `HH:MM`.
* **Departure Time** (`departure_time`, time, required): Enter the departure time in the format `HH:MM`.
