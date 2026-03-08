# Bike Share Booking Form - Help Guide
## Purpose
This form is used for users to book a bike share service, providing essential information such as user contact details, preferred pick-up and drop-off stations, requested start time, estimated trip duration, bike preference, and purpose of the trip.

## How To Complete This Form
To complete this form, please follow the steps outlined above.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Enter your full name as it will be associated with your booking.
* **Bike Share Member ID** (`user_id`, text, optional): If you are a member, enter your ID. If not, leave this field blank.
* **Contact Phone Number** (`contact_number`, text, required): Enter your contact phone number.
* **Preferred Pick-up Station** (`pickup_station`, select_one, required): Choose your preferred pick-up station from the drop-down list.
* **Intended Drop-off Station** (`drop_off_station`, select_one, required): Select your intended drop-off station from the drop-down list.
* **Requested Start Time** (`start_time`, time, required): Enter your requested start time.
* **Estimated Trip Duration** (`duration_estimate`, select_one, required): Choose your estimated trip duration from the drop-down list.
* **Bike Preference** (`bike_preference`, select_one, required): Select your bike preference from the drop-down list.
* **Purpose of Trip** (`purpose_of_trip`, select_one, optional): If applicable, select the reason for your trip.
* **Additional Users** (`additional_users`, number, optional): If booking for additional users, enter the number of users.
* **Any Suggestions for New Station Locations?** (`feedback_improvement`, text, optional): Optionally, suggest new station locations.
* **I Agree to Follow all Safety Rules and Wear a Helmet** (`agreement_safety`, select_one, required): Select "I Agree" to confirm safety rules.
