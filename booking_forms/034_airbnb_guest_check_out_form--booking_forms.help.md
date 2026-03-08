# Airbnb Guest Check Out Form - Help Guide
## Purpose
The Airbnb Guest Check Out Form is a critical tool for hosts to gather feedback from guests about their stay. It helps hosts to understand what guests liked or disliked about the property, their communication, and the overall cleanliness of the property. By filling out this form, guests can provide valuable insights that help hosts improve their services and provide a better experience for future guests.

## How To Complete This Form
To complete the form accurately, please follow these steps:

1. Fill out the required fields with your first name, last name, and email address.
2. Enter your Reservation Number to help us locate your booking.
3. Answer the questions regarding the property's condition upon arrival and departure.
4. Rate your overall experience with the property using the rating scale provided.
5. Provide any additional comments or feedback about your stay.

## Field-by-Field Explanation
* **First Name** (`guest_first_name`, text, required): Your first name as stated in your booking reservation.
* **Last Name** (`guest_last_name`, text, required): Your last name as stated in your booking reservation.
* **Reservation Number** (`reservation_number`, text, required): The number assigned to your booking reservation.
* **Email Address** (`email`, email, required): Your email address to ensure we can contact you.
* **Phone Number** (`phone`, text, required): Your contact number in case we need to reach out to you.
* **Check-out Date** (`check_out_date`, date, required): The date you left the property.
* **Check-out Time** (`check_out_time`, time, required): The time you departed the property.
* **Number of Nights Stayed** (`number_of_nights`, number, required): The total number of nights you stayed at the property.
* **Keys Returned** (`keys_returned`, select_one, required): Confirm that all keys have been returned.
* **Appliances Turned Off** (`appliances_turned_off`, select_one, required): Confirm that all appliances have been turned off.
* **Windows Closed** (`windows_closed`, select_one, required): Confirm that all windows and doors have been closed and locked.
* **Lights Turned Off** (`lights_turned_off`, select_one, required): Confirm that all lights have been turned off.
* **AC/Heating Adjusted** (`ac_heating_adjusted`, select_one, required): Confirm that the thermostat has been set to energy-saving mode.
* **Trash Disposed** (`trash_disposed`, select_one, required): Confirm that all trash has been disposed of properly.
* **Dishes Cleaned** (`dishes_cleaned`, select_one, required): Confirm that all dishes have been cleaned up.
* **Towels Used** (`towels_used`, select_one, required): Confirm where the towels are located.
* **Linens Stripped** (`linens_stripped`, select_one, optional): Confirm that bed linens have been stripped (this is an optional field).
* **Food Removed** (`food_removed`, select_one, required): Confirm that all perishable food items have been removed.
* **Damages Reported** (`damages_reported`, select_one, required): If there were any damages to the property, please select an option.
* **Damage Description** (`damage_description`, text, optional): Please describe any damages you found during your stay.
* **Items Lost or Broken** (`items_lost`, text, optional): If any items of the host were affected, please describe them.
* **Overall Experience** (`overall_experience`, select_one, required): Rate your overall experience with the property using the rating scale.
* **Cleanliness Rating** (`cleanliness_rating`, select_one, required): Rate the cleanliness of the property using the rating scale.
* **Accuracy Rating** (`accuracy_rating`, select_one, required): Rate whether the property matched your expectations.
* **Communication Rating** (`communication_rating`, select_one, required): Rate the host communication during your stay.
* **Location Rating** (`location_rating`, select_one, required): Rate the location of the property.
* **Value Rating** (`value_rating`, select_one, required): Rate the value for money of the property.
* **Would Recommend** (`would_recommend`, select_one, required): Would you recommend the property to others?
* **Would Return** (`would_return`, select_one, required): Would you stay at this property again?
* **Highlights of Your Stay** (`highlights`, text, optional): Please describe what you enjoyed most about your stay.
* **Areas for Improvement** (`improvements`, text, optional): Please suggest any areas the host could improve.
* **Additional Comments** (`additional_comments`, text, optional): Any other feedback you would like to provide.
* **Guest Signature** (`guest_signature`, text, required): Your digital signature to confirm that you filled out this form.

## Tips
- Please fill out this form accurately and thoroughly to ensure that hosts can improve their services.
- If you have any issues or concerns during your stay, please report them in the Damage Description field.
- If you would like to leave any additional feedback or comments, please use the Additional Comments field.
- Thank you for taking the time to fill out this form; it will help improve the property and the hosting service.
