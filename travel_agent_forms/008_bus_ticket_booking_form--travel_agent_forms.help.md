# Bus Ticket Booking Form - Help Guide
## Purpose
This form collects information for booking a bus ticket, including passenger name, contact details, travel dates, and payment method.

## How To Complete This Form
To complete this form, follow these steps:

1. Click on the form and start filling in the required information.
2. Ensure that all fields marked as required are filled in correctly.
3. Choose your preferred payment method and submit the form.

## Field-by-Field Explanation

* **Passenger name** (`passenger_name`, `text`, required): Enter the full name as it appears on the ID of the person booking the ticket.
* **Contact email** (`contact_email`, `email`, required): Enter the email address that will receive booking confirmation and updates.
* **Contact phone** (`contact_phone`, `text`, optional): Enter a phone number for urgent contact, if available.
* **Travel date** (`travel_date`, `date`, required): Choose the date of departure for the bus journey.
* **Preferred departure time** (`departure_time`, `time`, optional): Select the approximate time of day for the preferred departure.
* **Origin location** (`origin`, `text`, required): Enter the starting city or station for the bus journey.
* **Destination location** (`destination`, `text`, required): Enter the arrival city or station for the bus journey.
* **Seat preference** (`seat_preference`, `select_one`, optional): Choose from the available seat options or select 'No preference' if you don't mind.
* **Number of passengers** (`number_of_passengers`, `number`, required): Enter the number of tickets to book.
* **Payment method** (`payment_method`, `select_one`, required): Choose the method of payment for the bus ticket.

## Tips
* Double-check that all required fields are filled in correctly before submitting the form.
* Use the correct email format (e.g., `example@example.com`) for the contact email.
* Be aware that seat preferences will be allocated based on availability.
