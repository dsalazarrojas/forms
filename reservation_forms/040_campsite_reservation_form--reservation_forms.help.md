# Campsite Reservation Form - Help Guide
## Purpose
The Campsite Reservation Form is used to create new reservations for a campsite. This form collects information about the guest, reservation dates, campsite selection, meal preferences, and party information.

## How To Complete This Form

1. Fill out the guest information section with your first name, last name, email address, phone number, and any other relevant contact information.
2. Choose your reservation dates by selecting the start and finish dates of your stay.
3. Select your preferred arrival and departure times.
4. Indicate the total number of nights you plan to stay.
5. Choose your campsite category from the options provided.
6. If you have any meal preferences, select your choices for breakfast, lunch, and dinner.
7. If you have any dietary restrictions or special needs, enter them in the text field.
8. Enter the total number of people in your party.

## Field-by-Field Explanation

* **First Name** (`guest_first_name`, text, required): Enter your first name.
* **Last Name** (`guest_last_name`, text, required): Enter your last name.
* **Email Address** (`guest_email`, email, required): Enter your email address.
* **Phone Number** (`guest_phone`, text, required): Enter your phone number.
* **Street Address** (`guest_address`, text, optional): Enter your street address.
* **City** (`guest_city`, text, optional): Enter your city.
* **State** (`guest_state`, text, optional): Enter your state.
* **Zip Code** (`guest_zip`, text, optional): Enter your zip code.
* **Start Date** (`start_date`, date, required): Choose the start date of your reservation.
* **Finish Date** (`finish_date`, date, required): Choose the finish date of your reservation.
* **Arrival Time** (`arrival_time`, time, required): Select your preferred arrival time.
* **Departure Time** (`departure_time`, time, required): Select your preferred departure time.
* **Total Number of Nights** (`total_nights`, number, required): Indicate the total number of nights you plan to stay.
* **Campsite Category** (`campsite_category`, select one, required): Choose your campsite category from the options provided.
* **Preferred Site Number** (`preferred_site_number`, text, optional): Enter your preferred site number if you have one.
* **Breakfast Meals** (`breakfast_included`, select one, required): Select your breakfast meal preference.
* **Lunch Meals** (`lunch_included`, select one, required): Select your lunch meal preference.
* **Dinner Meals** (`dinner_included`, select one, required): Select your dinner meal preference.
* **Dietary Restrictions or Special Needs** (`dietary_restrictions`, text, optional): Enter any dietary restrictions or special needs you have.
* **Total Number of People in Party** (`number_of_people`, number, required): Enter the total number of people in your party.

## Tips

* Make sure to fill out all required fields to ensure your reservation can be processed successfully.
* If you have any questions or concerns, contact the campsite management directly.
* Review your reservation details carefully before submission.
