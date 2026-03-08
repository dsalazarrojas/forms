<thinking>
The purpose of this form is to collect information about flight reservations from passengers. The form is intended to capture details such as passenger name, travel dates, cities of departure and arrival, flight numbers, and contact information. This form will be used by travel agents to book flights for their customers. It's possible that this form will be used in conjunction with existing booking systems, but for now, it's being used as a standalone tool for manual booking purposes.

This form should be reviewed for potential duplication with existing systems to ensure that it doesn't overlap with them. Additionally, it should be reviewed for potential security concerns, as it will be handling sensitive passenger information.

</thinking>

# Flight Reservation Form - Help Guide
## Purpose
The Flight Reservation Form is used to collect information about flight reservations from passengers.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the passenger name in the "Passenger Name" field.
2. Enter the travel date in the "Travel Date" field.
3. Select the departure city from the "Departure City" field.
4. Select the arrival city from the "Arrival City" field.
5. If you have the flight number, enter it in the "Flight Number" field.
6. Enter your contact phone number in the "Passenger Phone" field.
7. Select the travel agent from the "Travel Agent" field.
8. Choose the type of flight by selecting one or more options from the "Flight Type" field.
9. Enter the seat number in the "Seat Number" field.
10. If applicable, select the travel date range in the "Travel Date Range" field.
11. Enter any additional flight details in the "Flight Details" field.

## Field-by-Field Explanation

* **Passenger Name** (`passenger_name`, text, required): Enter the passenger's name.
* **Travel Date** (`travel_date`, date, required): Enter the date of travel.
* **Departure City** (`departure_city`, text, required): Select the city of departure.
* **Arrival City** (`arrival_city`, text, required): Select the city of arrival.
* **Flight Number** (`flight_number`, number, optional): Enter the flight number if known.
* **Passenger Phone** (`passenger_phone`, text, optional): Enter your contact phone number.
* **Travel Agent** (`travel_agent`, select_one, optional): Select the travel agent.
* **Flight Type** (`flight_type`, select_multiple, optional): Choose one or more types of flight (economy, business, first).
* **Seat Number** (`seat_number`, number, optional): Enter the seat number.
* **Travel Date Range** (`travel_date_range`, date, optional): If applicable, select the travel date range.
* **Flight Details** (`flight_details`, text, optional): Enter any additional flight details.

## Tips

* Make sure to fill in all required fields.
* Double-check your entries for accuracy.
* Review this guide for any additional questions or concerns.
