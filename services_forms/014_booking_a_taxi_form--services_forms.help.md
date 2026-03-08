# Booking A Taxi Form - Help Guide
## Purpose
This form is designed to be used for booking a taxi service. It collects necessary information for pickup and drop-off addresses, passenger details, and ride preferences.

## How To Complete This Form
- To book a taxi, fill out the form completely with the required information.
- For each field, enter the requested details accurately and truthfully.
- Review your submission before submitting it for confirmation.

## Field-by-Field Explanation
* **Full Name** (`passenger_name`, text, required): Enter your full name as it appears on your identification.
* **Phone Number** (`passenger_phone`, text, required): Enter your contact number so we can reach you for any updates or issues.
* **Email Address** (`passenger_email`, email, optional): Enter your email address to receive a confirmation of your booking.
* **Pickup Address** (`pickup_address`, text, required): Enter the exact address where you would like to be picked up.
* **Pickup Location Details** (`pickup_location_details`, text, optional): Provide any additional details about the pickup location, such as building or floor number.
* **Drop-off Address** (`dropoff_address`, text, required): Enter the exact address where you would like to be dropped off.
* **Drop-off Location Details** (`dropoff_location_details`, text, optional): Provide any additional details about the drop-off location, such as building or floor number.
* **Pickup Date** (`booking_date`, date, required): Select the date of your pickup.
* **Pickup Time** (`booking_time`, time, required): Select the time of your pickup.
* **Vehicle Type** (`vehicle_type`, select_one, required): Choose the type of vehicle you prefer from the available options (Economy Sedan, Comfort Sedan, Premium Sedan, SUV, Van, Any available).
* **Number of Passengers** (`number_of_passengers`, number, required): Enter the number of people traveling with you.
* **Number of Luggage Items** (`number_of_luggage`, number, optional): Enter the number of luggage items you will be carrying.
* **Special Requirements** (`special_requirements`, select_multiple, optional): Check any special requirements you may have, such as pet-friendly or wheelchair access.
* **Payment Method** (`payment_method`, select_one, required): Choose how you would like to pay for your ride (Cash, Credit card, Debit card, Mobile payment).
* **Additional Notes** (`additional_notes`, text, optional): Enter any additional information or instructions for your driver.
