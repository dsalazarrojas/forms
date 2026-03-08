# Amusement Ride Reservation Form - Help Guide
## Purpose
The Amusement Ride Reservation Form is used by guests to reserve a spot on various rides at an amusement park. To complete this form, you will be providing necessary information to ensure your safety and comfort during your visit.

## How To Complete This Form
1. Enter your Guest Full Name in the Guest Full Name field.
2. Enter your Guest Email Address in the Guest Email Address field.
3. Enter your Contact Phone Number in the Contact Phone Number field.
4. Select the Date of Visit for your reservation in the Date of Visit field.
5. Select the ride you would like to reserve in the Select Your Ride field.
6. Choose your preferred Time Slot in the Preferred Time Slot field.
7. Enter the Number of Riders in your group in the Number of Riders field.
8. Confirm your Health and Safety Requirements by selecting all that apply in the Health and Safety Confirmation field.
9. If necessary, enter any Special Accommodations Needed in the Special Accommodations Needed field.
10. Finally, select the type of reservation you would like to make in the Reservation Type field.

## Field-by-Field Explanation

* **Guest Full Name** (`guest_name`, `text`, required): Enter your name as it appears on your identification.
* **Guest Email Address** (`guest_email`, `email`, required): Enter your email address that we can use to contact you about your reservation.
* **Contact Phone Number** (`contact_number`, `text`, required): Enter your phone number that we can use to contact you about your reservation.
* **Date of Visit** (`visit_date`, `date`, required): Select the date you would like to visit the amusement park.
* **Select Your Ride** (`ride_selection`, `select_one`, required): Choose the ride you would like to reserve.
* **Preferred Time Slot** (`preferred_time_slot`, `time`, required): Choose a time slot that works best for your reservation.
* **Number of Riders** (`number_of_riders`, `number`, required): Enter the number of people in your group that will be riding with you.
* **Health and Safety Confirmation** (`rider_health_confirmation`, `select_multiple`, required): Confirm any health or safety requirements that may affect your ride experience.
* **Special Accommodations Needed** (`special_accommodations_needed`, `text`, optional): If you have any special accommodations that we should be aware of, please enter them here.
* **Reservation Type** (`reservation_type`, `select_one`, required): Choose the type of reservation you would like to make (Individual, Group Booking, or VIP Fast Pass).
* **Average Rider Height in cm** (`average_rider_height_cm`, `number`, optional): Enter your height in centimeters, if necessary.
* **Confirmation** (`section_confirmation_type`, `note`, optional): This section is for internal use and confirmation purposes.

## Tips

* Please ensure that all required fields are filled in correctly to avoid any issues with your reservation.
* If you have any questions or concerns, feel free to contact us using the contact phone number provided.
* We will review your reservation and confirm it according to your preferences and requirements.
