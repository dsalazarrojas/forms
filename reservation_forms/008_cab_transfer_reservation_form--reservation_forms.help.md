# CAB Transfer Reservation Form - Help Guide

## Purpose
This form is used to book a cab transfer, providing essential information for a smooth and efficient transfer experience. 

## How To Complete This Form
1. **Enter the required details**: Ensure that you enter all necessary information to ensure a successful transfer.
2. **Choose your vehicle preference**: Select the type of vehicle that suits your needs.
3. **Provide accurate contact and pickup information**: Enter your contact number and the pickup address to ensure we can get in touch with you and pick you up at the correct location.
4. **Select a transfer date and time**: Choose a date and time for your transfer that is at least 24 hours in advance.
5. **Confirm your payment method**: Choose your preferred payment method for the transfer.

## Field-by-Field Explanation
* **Primary Passenger Name** (`primary_passenger`, `text`, Required): Enter the name of the primary passenger for this transfer.
* **Contact Phone Number** (`passenger_contact`, `text`, Required): Enter your contact phone number so we can get in touch with you.
* **Pickup Address** (`pickup_address`, `text`, Required): Enter the address where you would like to be picked up.
* **Destination Address** (`dropoff_address`, `text`, Required): Enter the address where you would like to be dropped off.
* **Transfer Date** (`transfer_date`, `date`, Required): Select the date for your transfer, ensuring it's at least 24 hours in advance.
* **Requested Pickup Time** (`pickup_time`, `time`, Required): Choose the time for your pickup.
* **Vehicle Class Preference** (`vehicle_class`, `select_one`, Required): Select the type of vehicle that suits your needs.
* **Number of Passengers** (`number_of_passengers`, `number`, Required): Enter the number of passengers for this transfer.
* **Number of Large Suitcases** (`luggage_count`, `number`, Required): Enter the number of large suitcases you will be bringing.
* **Flight Number** (`flight_number`, `text`, Optional): If this is an airport pickup, enter your flight number.
* **Child Safety Seat Required?** (`child_seat_required`, `select_one`, Required): Confirm if you require a child safety seat.
* **Special Requests or Needs** (`additional_requests`, `text`, Optional): Enter any special requests or needs you may have.
* **Intended Payment Method** (`payment_method_intent`, `select_one`, Required): Select your preferred payment method for this transfer.
* **Terms Acceptance** (`terms_acceptance`, `select_one`, Required): Confirm that you have read and agree to the cancellation policy.
