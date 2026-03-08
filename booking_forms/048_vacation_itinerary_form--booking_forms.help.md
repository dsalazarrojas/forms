# Vacation Itinerary Form - Help Guide

## Purpose
This form is designed to gather information about a user's upcoming trip, including travel dates, destinations, activities, flights, and other details. This will help create a comprehensive itinerary for the user.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your travel dates in the format MM/DD/YYYY (e.g., 01/01/2024).
2. Select your destination from the provided options.
3. Specify your travel duration in hours or days.
4. List the activities you plan to do at your destination.
5. Enter your departure and arrival flight information.
6. Choose your preferred mode of transportation.
7. List your accommodations for your trip.
8. Select your travel agent from the provided options.

## Field-by-Field Explanation

- **Travel Date** (`travel_date`, date, optional): Enter your travel dates in the format MM/DD/YYYY (e.g., 01/01/2024).
- **Travel Time** (`travel_time`, time, optional): Select the time of your travel, if applicable.
- **Destination** (`destination_id`, text, optional): Enter the name of your destination (e.g., Paris, New York City).
- **Travel Duration** (`travel_duration`, number, optional): Specify the length of your trip in hours or days.
- **Activities** (`activities`, select_multiple, optional): Choose activities you plan to do at your destination, such as visiting museums, hiking, or visiting beaches.
	+ Example: Select all that apply.
- **Departure Flight** (`departure_flight`, text, optional): Enter your departure flight information, including flight number and departure time.
- **Arrival Flight** (`arrival_flight`, text, optional): Enter your arrival flight information, including flight number and arrival time.
- **Transportation** (`transportation`, text, optional): Choose your preferred mode of transportation (e.g., car, train, bus).
- **Accommodations** (`accommodations`, text, optional): List your accommodations for your trip, including hotel or Airbnb information.
- **Travel Agent** (`travel_agent`, select_one, optional): Select your travel agent from the provided options.
