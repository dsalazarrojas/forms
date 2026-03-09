# Travel Quote Request Form - Help Guide
## Purpose
This form is used to gather information about a customer's travel preferences for a quote request. This information helps us provide an accurate and personalized quote.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name in the "Name" field.
2. Enter your email address in the "Email" field.
3. Select your departure date in the "Departure Date" field.
4. Select your return date in the "Return Date" field.
5. Enter your travel origin in the "Origin" field.
6. Enter your travel destination in the "Destination" field.
7. Indicate if you will be traveling with or without dates in the "Travel Date Type" field.
8. Choose the type of travel class you would like (e.g., economy, business, etc.) in the "Travel Class" field.
9. If you have any special requests, enter them in the "Special Request" field.
10. Add any additional information about your trip in the "Additional Info" field.

## Field-by-Field Explanation
* **Name** (`name`, text, required): Enter your full name as it appears on your passport.
* **Email** (`email`, email, required): Enter your email address where you can be contacted for quote updates.
* **Departure Date** (`departure_date`, date, required): Select your departure date using the calendar picker.
* **Return Date** (`return_date`, date, required): Select your return date using the calendar picker.
* **Origin** (`origin`, text, required): Enter your departure city or airport code.
* **Destination** (`destination`, text, required): Enter your arrival city or airport code.
* **Travel Date Type** (`travel_date_type`, select_one, required): Check "Yes" if you will be traveling with dates, check "No" if you will be traveling without dates.
* **Travel Class** (`travel_class`, select_multiple, required): Choose the travel classes you are interested in (e.g., economy, business, etc.).
* **Special Request** (`special_request`, text, optional): Enter any special requests or instructions for your travel agent.
* **Additional Info** (`additional_info`, note, optional): Add any additional information about your trip that would be helpful for your travel agent.
