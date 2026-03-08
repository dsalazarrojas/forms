To ensure this form is relevant and not duplicated, we need to check if there are any similar forms or fields that could be used in place of this form. After reviewing the provided YAML, it appears that this form is designed for customers to book a cruise, and it doesn't seem to overlap with any other forms. The fields seem to be focused on customer information, travel details, and cruise preferences, which should cover the necessary data for a cruise booking process.</thinking>

# Cruise Booking Form - Help Guide
## Purpose
The Cruise Booking Form is designed to collect information from customers who want to book a cruise. This form will ask for details such as customer contact information, travel dates, and cruise preferences to process their booking request.

## How To Complete This Form
To complete the form, follow these steps:
1. Fill in your Customer Name.
2. Enter your Email address.
3. If you're booking a trip through a travel agent, enter their name.
4. Specify the length of your trip in number of nights.
5. Choose the dates for your departure and return.
6. Select the type of cruise you're interested in (e.g., Caribbean, Europe, Asia).
7. If necessary, specify the name of the ship you're booking.
8. Submit the form once you've filled in all the required and optional fields.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required/optional: false): Enter your full name as it appears on your official government-issued ID or passport.
* **Email** (`customer_email`, email, required/optional: false): Enter your email address that we can use to contact you about your booking and any updates.
* **Travel Agent** (`travel_agent`, text, required/optional: false): If you're booking a trip through a travel agent, enter their name or agency name.
* **Trip Length** (`trip_length`, number, required/optional: false): Enter the number of nights you plan to stay on your cruise.
* **Departure Date** (`departure_date`, date, required/optional: false): Enter the date you want to depart on your cruise.
* **Return Date** (`return_date`, date, required/optional: false): Enter the date you want to return from your cruise.
* **Cruise Type** (`cruise_type`, select_multiple, required/optional: false): Select one or more cruise type(s) that interest you, such as Caribbean, Europe, or Asia.
* **Ship Name** (`ship_name`, text, required/optional: false): If you have a specific ship in mind, enter its name here.

## Tips
* Please make sure to double-check your email address for spelling and accuracy.
* If you're unsure about the cruise type or ship name, you can always contact our customer support for assistance.
* We'll use the information you provide to process your booking request and send you updates and confirmations.
