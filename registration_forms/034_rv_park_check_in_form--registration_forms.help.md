# Guest Arrival Form - Help Guide
## Purpose
This form is used to collect information from guests arriving at a park for their stay. Please fill out the form accurately and completely to help us prepare for their visit.

## How To Complete This Form
1. Fill out the form for each guest arriving at the park.
2. Enter the required information for each guest, including their name, address, phone number, email, check-in date, check-out date, arrival time, vehicle type, payment method, license plate, vehicle registration, and vehicle year (if applicable).
3. Select the number of guests and rooms they will be occupying.
4. Enter any additional comments or notes about their arrival.
5. Submit the form to complete the registration process.

## Field-by-Field Explanation
* **Park Name** (`park_name`, text, required): Enter the name of the park where the guest will be staying.
* **Park Address** (`park_address`, text, required): Enter the address of the park where the guest will be staying.
* **Park Phone Number** (`park_phone_number`, text, required): Enter the phone number of the park where the guest will be staying.
* **Guest Name** (`guest_name`, text, required): Enter the name of the guest.
* **Guest Email** (`guest_email`, email, required): Enter the email of the guest.
* **Checkin Date** (`guest_checkin_date`, date, required): Enter the date the guest will be checking in.
* **Checkout Date** (`guest_checkout_date`, date, required): Enter the date the guest will be checking out.
* **Arrival Time** (`guest_arrival_time`, time, required): Enter the time of arrival for the guest.
* **Number of Guests** (`guest_number_of_guests`, number, required): Enter the number of guests in the party.
* **Number of Rooms** (`guest_number_of_rooms`, number, required): Enter the number of rooms the guest will be occupying.
* **Vehicle Type** (`guest_vehicle_type`, select_multiple, required): Select the type of vehicle the guest will be arriving in (RV, Camper, or Boat).
* **Payment Method** (`guest_payment_method`, select_one, required): Select the payment method the guest will be using (Cash, Credit Card, or Mobile Payment).
* **Comment** (`guest_comment`, note, optional): Enter any additional comments or notes about the guest's arrival.
* **Vehicle License Plate** (`guest_vehicle_license_plate`, text, required): Enter the license plate number of the guest's vehicle.
* **Vehicle Registration** (`guest_vehicle_registration`, text, required): Enter the registration information of the guest's vehicle.
* **Vehicle Year** (`guest_vehicle_year`, text, optional): Enter the year of the guest's vehicle (if applicable).
* **Vehicle Make** (`guest_vehicle_make`, text, optional): Enter the make of the guest's vehicle (if applicable).
* **Vehicle Model** (`guest_vehicle_model`, text, optional): Enter the model of the guest's vehicle (if applicable).
* **Vehicle Color** (`guest_vehicle_color`, text, optional): Enter the color of the guest's vehicle (if applicable).
* **Vehicle License Country** (`guest_vehicle_license_country`, text, optional): Enter the country of the guest's vehicle registration (if applicable).
* **Arrival Time** (`guest_arrival_time`, time, optional): Enter the time of arrival for the guest (if different from the checkin time).
* **Arrival Date** (`guest_arrival_date`, date, optional): Enter the date of arrival for the guest (if different from the checkin date).
* **Arrival Location** (`guest_arrival_location`, text, optional): Enter the location where the guest will be arriving (if different from the park location).
* **Arrival Notes** (`guest_arrival_notes`, note, optional): Enter any additional notes about the guest's arrival.
