# Rail Ticket Booking Form - Help Guide
## Purpose
The Rail Ticket Booking Form is used to collect information about rail ticket bookings from customers.

## How To Complete This Form
1. Select a date for your travel using the date field.
2. Enter the departure station in the Departure Station field.
3. Enter the destination station in the Destination Station field.
4. Choose your preferred class of service in the Class of Service field.
5. Enter the seat number for your ticket in the Seat Number field.
6. Provide your passenger's details in the Passenger Details field.
7. Enter your email address in the Email field.
8. Enter your phone number in the Phone field.
9. Add any additional comments about your booking in the Additional Comments field.
10. Select the status of your booking in the Booking Status field.

## Field-by-Field Explanation
* **Select a date** (`reservation_date`, date, required/optional): Select a date for your travel from the calendar input.
* **Departure Station** (`departure_station`, text, required/optional): Enter the station where your journey starts.
* **Destination Station** (`destination_station`, text, required/optional): Enter the station where your journey ends.
* **Class of Service** (`class_of_service`, select_one, required/optional): Choose from First Class, Second Class, or Third Class.
* **Seat Number** (`seat_number`, number, required/optional): Enter the seat number for your ticket.
* **Passenger Details** (`passenger_details`, text, required/optional): Provide information about the passenger(s) traveling with you.
* **Email** (`email`, email, required/optional): Enter your email address.
* **Phone** (`phone`, text, required/optional): Enter your phone number.
* **Additional Comments** (`additional_comments`, note, required/optional): Add any additional comments about your booking.
* **Booking Status** (`booking_status`, select_one, required/optional): Choose from Confirmed, Pending, or Cancelled.
