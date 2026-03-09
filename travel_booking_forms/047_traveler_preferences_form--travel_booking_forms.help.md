# Traveler Preferences Form - Help Guide
## Purpose
This form is designed to collect traveler preferences for travel bookings, allowing us to better understand your needs and provide more tailored services.
## How To Complete This Form
To complete this form, please follow these steps:
1. Fill out the required fields: Name, Email, Arrival Date, and Departure Date.
2. Select your preferred travel location(s) and travel type (if applicable) from the relevant fields.
3. Optional: Enter your phone number and/or select your preferences for travel (Low, Mid, High) if you wish to be contacted by our team.

## Field-by-Field Explanation
- **Form ID** (`form_id`, number, required: false): This is a unique identifier for the form, which is used internally for reference and tracking.
- **Name** (`name`, text, required: true): Enter your full name as you would like to be addressed.
- **Email** (`email`, email, required: true): Enter a valid email address that we can use to contact you about your booking.
- **Phone** (`phone`, text, required: false): Enter your phone number for us to contact you, if needed.
- **Travelers preferences** (`prophets_preferences`, select_multiple, required: false): Select your preferred level of travel flexibility: Low (limited travel options), Mid (moderate travel options), or High (flexible travel options).
- **Arrival Date** (`arrival_date`, date, required: true): Enter your planned arrival date in the format `YYYY-MM-DD`.
- **Departure Date** (`departure_date`, date, required: true): Enter your planned departure date in the format `YYYY-MM-DD`.
- **Travel Type** (`travel_type`, select_one, required: false): Select the type of travel you are planning (Domestic or International).
- **Travel Location** (`travel_location`, select_multiple, required: false): Choose one or more travel destinations (Beach, Mountain, City, or Forest).

## Tips
* Please use a valid email address and phone number for us to contact you effectively.
* Ensure that your arrival and departure dates are correct and in the correct format.
* Be as specific as possible with your travel location preferences to help us tailor your experience.
