# Authorize.Net Hotel Reservation Form - Help Guide

## Purpose
This form is designed to collect information from guests for a hotel reservation, ensuring accurate and complete data collection for a smooth booking process.

## How To Complete This Form

1. Fill in the required fields with your details to make a booking with our hotel.
2. Choose your preferences for accommodation and amenities.
3. Enter your payment information to complete the reservation.

## Field-by-Field Explanation

* **Booking Date (id: 1)** (`booking_date`, date, required):
    Enter the date of your booking, in `YYYY-MM-DD` format.
* **First Name (id: 2)** (`first_name`, text, required):
    Enter your first name as it appears on your ID or passport.
* **Last Name (id: 3)** (`last_name`, text, required):
    Enter your last name as it appears on your ID or passport.
* **Email Address (id: 4)** (`email_address`, email, required):
    Enter your email address for communication and confirmation.
* **Phone Number (id: 5)** (`phone_number`, text, required):
    Enter your contact phone number for easy communication.
* **Street Address (id: 6)** (`street_address`, text, required):
    Enter your street address for delivery or pickup services.
* **City (id: 7)** (`city`, text, required):
    Enter your city for location and delivery services.
* **State or Province (id: 8)** (`state_province`, text, required):
    Enter your state or province for location and delivery services.
* **ZIP or Postal Code (id: 9)** (`postal_code`, text, required):
    Enter your zip or postal code for location and delivery services.
* **Country (id: 10)** (`country`, text, optional):
    Select your country for location and delivery services (if necessary).
* **Check-In Date (id: 11)** (`check_in_date`, date, required):
    Enter the date you will arrive.
* **Check-Out Date (id: 12)** (`check_out_date`, date, required):
    Enter the date you will depart.
* **Number of Nights (id: 13)** (`number_of_nights`, number, required):
    Select the number of nights you will stay.
* **Room Type (id: 14)** (`room_type`, select_one, required):
    Choose your preferred room type.
* **Number of Guests (id: 15)** (`number_of_guests`, number, required):
    Select the number of guests staying.
* **Names of Additional Guests (id: 16)** (`guest_names`, text, optional):
    Enter names of any additional guests (if applicable).
* **Bed Preference (id: 17)** (`bed_preference`, select_one, required):
    Select your preferred type of bed.
* **Smoking Preference (id: 18)** (`smoking_preference`, select_one, required):
    Choose your preference (non-smoking, smoking, or no preference).
* **Floor Preference (id: 19)** (`floor_preference`, select_one, optional):
    Select a floor preference (if any).
* **Special Requests (id: 20)** (`special_requests`, text, optional):
    Enter any special requests or needs you may have.
* **Desired Amenities (id: 21)** (`amenities_desired`, select_multiple, optional):
    Choose any desired amenities.
* **Rate Per Night (id: 22)** (`rate_per_night`, number, required):
    Enter the total cost per night.
* **Total Reservation Cost (id: 23)** (`total_cost`, number, required):
    Enter the total cost for your entire stay.
* **Payment Method (id: 24)** (`payment_method`, select_one, required):
    Select your payment method.
* **Reservation Confirmed (id: 25)** (`reservation_confirmed`, select_one, required):
    Confirm your reservation by agreeing to the terms.
