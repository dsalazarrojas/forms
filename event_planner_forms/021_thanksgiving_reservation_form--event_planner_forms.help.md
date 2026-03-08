I'll assume the YAML input schema for this form is intended to collect basic information for a "Thanksgiving Reservation Form" likely used by a catering or event planning business. This form likely aims to gather details about the date and time of the event, the number of guests attending, and possibly some contact information (name and phone number). The "reservation_date" field is a date field, which might be used to select the date of the event, while "reservation_time" is a time field for choosing the time of the event. The "number_guests" field is likely used to determine the number of people attending the event, providing a more accurate headcount for planning purposes. The "name" and "phone" fields are probably used to capture the name and contact number of the person making the reservation or the primary point of contact.

# thanksgiving_reservation_form - Help Guide
## Purpose
This form is designed to collect information for a Thanksgiving event reservation. It's used by the event planning team to gather details about the date, time, number of guests, and contact information for the event.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the reservation date for your Thanksgiving event.
2. Enter the name of the person making the reservation or the primary point of contact.
3. Provide their contact phone number.
4. Choose the time for the event.
5. Enter the number of guests attending the event.

## Field-by-Field Explanation
* **Reservation Date** (`reservation_date`, Date, Optional): Select the date for your Thanksgiving event. This field is not required.
* **Name** (`name`, Text, Optional): Enter the name of the person making the reservation or the primary point of contact.
* **Phone** (`phone`, Text, Optional): Enter the contact phone number of the person making the reservation or the primary point of contact.
* **Reservations Time** (`reservation_time`, Time, Optional): Choose the time for your Thanksgiving event. This field is not required.
* **Number of Guests** (`number_guests`, Number, Optional): Enter the number of guests attending the event. This helps the event planning team get a headcount and plan accordingly.
