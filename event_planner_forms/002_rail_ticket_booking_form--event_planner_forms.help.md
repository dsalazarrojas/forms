# Rail Ticket Booking Form - Help Guide
## Purpose
The Rail Ticket Booking Form is a user-facing form used to collect information from passengers for ticket booking purposes.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the departure and arrival stations from the provided options.
2. Choose the travel date from the calendar.
3. Select the class type (First Class or Second Class) and ticket type (Single Ticket or Return Ticket).
4. Enter your email address and phone number, if applicable.
5. Click the "Submit" button to complete the booking process.

## Field-by-Field Explanation

* **Passenger Name** (`passenger_name`, text, optional): Enter the name of the passenger.
* **Departure Station** (`departure_station`, select_one, optional): Select the departure station from the options provided (e.g., London Paddington).
* **Arrival Station** (`arrival_station`, select_one, optional): Select the arrival station from the options provided (e.g., Bristol Temple Mead).
* **Departure Date** (`departure_date`, date, optional): Choose the departure date from the calendar.
* **Class Type** (`class_type`, select_multiple, optional): Choose the class type (First Class or Second Class).
* **Ticket Type** (`ticket_type`, select_one, optional): Choose the ticket type (Single Ticket or Return Ticket).
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Submit** (`submit`, note, optional): Click this button to complete the booking process.
