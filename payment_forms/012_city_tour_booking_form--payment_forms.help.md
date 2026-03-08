# City Tour Booking Form - Help Guide
## Purpose
This form is for booking a city tour. Please provide the required information to book your tour.

## How To Complete This Form
1. Fill in the form with your details and tour preferences.
2. Select your preferred tour from the options provided.
3. Choose a date for your tour.
4. Indicate the number of adults and children (if applicable) attending the tour.
5. Select your preferred tour language.
6. If you have a specific hotel for pickup, enter the details.
7. If you have any dietary restrictions for food tours/dinner, enter the information.
8. Review and accept the terms of service, including the 24-hour cancellation policy.

## Field-by-Field Explanation
* **Full Name** (`traveler_name`, `Text`, Required): Enter your full name as it appears on your passport or ID.
* **Email Address** (`traveler_email`, `Email`, Required): Enter your email address for booking confirmation and updates.
* **Phone Number** (`traveler_phone`, `Text`, Required): Enter your phone number in the international format (e.g., +1 555 123 4567).
* **Choose Your Tour** (`selected_tour`, `Select One`, Required): Select the tour that you would like to book from the options provided.
* **Preferred Tour Date** (`tour_date`, `Date`, Required): Enter the date you would like to take the tour on.
* **Number of Adults** (`number_of_adults`, `Number`, Required): Enter the number of adults attending the tour.
* **Number of Children (under 12)** (`number_of_children`, `Number`, Optional): Enter the number of children under 12 attending the tour.
* **Preferred Tour Language** (`language_preference`, `Select One`, Required): Select the language you would like the tour to be in.
* **Hotel for Pickup (if applicable)** (`pickup_location`, `Text`, Optional): If you have a specific hotel for pickup, enter the details.
* **Any dietary restrictions? (For food tours/dinner)** (`dietary_requirements`, `Text`, Optional): If you have any dietary restrictions, enter the information to be taken into account for food tours/dinner.
* **Note - Secure payment link will be sent to your email after booking confirmation** (`payment_notice`, `Note`, Optional): This is a note to inform you that a secure payment link will be sent to your email after booking confirmation.
* **I agree to the cancellation policy (24 hours notice required)** (`terms_acceptance`, `Select One`, Required): Review and accept the terms of service, including the 24-hour cancellation policy.
* **Booking Submission Date** (`booking_date`, `Date`, Required): This field is automatically generated and shows the date the form was submitted.
