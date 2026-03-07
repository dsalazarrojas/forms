<thinking>...</thinking>

# Pet Boarding Reservation Form - Help Guide
## Purpose
This form is designed to collect information for pet boarding reservations. It is intended for pet owners to provide details about their pet's stay, including pet information, owner contact details, and reservation specifics.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the pet's name and type (e.g., Dog, Cat, Bird, Fish, or Other).
2. Choose the pet's breed from the available options.
3. Enter your name and contact phone number.
4. Select the check-in and check-out dates for the pet's boarding stay.
5. Choose the boarding duration in days.
6. Select the boarding service type (Standard, Deluxe, or Basic).
7. Choose any additional services required (e.g., Grooming, Training, Feeding).
8. Enter any special requests or notes about the pet's stay.
9. Review and submit the form to complete the reservation.

## Field-by-Field Explanation
- **Pet Name** (`pet_name`, text, required): Enter the name of the pet to be boarded.
- **Pet Type** (`pet_type`, select_one, required): Select the type of pet (e.g., Dog, Cat, Bird, Fish, or Other).
- **Pet Breed** (`pet_breed`, select_multiple, required): Choose the pet's breed from the available options.
- **Owner Name** (`owner_name`, text, required): Enter your name as the pet's owner.
- **Owner Phone** (`owner_phone`, text, required): Enter your phone number for contact purposes.
- **Check In Date** (`reservation_date`, date, required): Choose the date for the pet's check-in.
- **Check Out Date** (`boarding_date`, date, required): Choose the date for the pet's check-out.
- **Reservation Time** (`reservation_time`, time, required): Choose the time for the pet's check-in.
- **Check Out Time** (`boarding_time`, time, required): Choose the time for the pet's check-out.
- **Reservation Length** (`reservation_length`, number, required): Enter the number of days for the pet's boarding stay.
- **Boarding Length** (`boarding_length`, number, required): Enter the number of days for the pet's boarding stay.
- **Boarding Service** (`boarding_service`, select_one, required): Choose the boarding service type (Standard, Deluxe, or Basic).
- **Additional Services** (`additional_services`, select_multiple, required): Choose any additional services required for the pet's stay (e.g., Grooming, Training, Feeding).
- **Special Requests** (`special_requests`, text, required): Enter any special requests or notes about the pet's stay.
- **Reservation Notes** (`reservation_notes`, text, required): Enter any additional information about the reservation.
