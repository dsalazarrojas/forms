# Guest House Reservation Form - Help Guide
## Purpose
The Guest House Reservation Form is designed to collect information from guests who want to book a stay at a guest house. This form is used to ensure that the guest's reservation details are accurately recorded and processed efficiently.

## How To Complete This Form
1. Fill in the required fields as accurately and completely as possible.
2. Ensure that all fields are filled in before submitting the form.

## Field-by-Field Explanation

* **Name** (`name`, `text`, required): Please enter your name as it appears on your identification.
* **Guest House** (`guest_house`, `text`, required): Enter the name of the guest house you are booking.
* **Check-in** (`check_in`, `date`, required): Select the date you plan to arrive at the guest house.
* **Check-out** (`check_out`, `date`, required): Select the date you plan to depart from the guest house.
* **Guests** (`guests`, `number`, required): Enter the number of guests you are booking for.
* **Room Type** (`room_type`, `select_one`, required): Select the type of room you prefer, which can be Single, Double, or Suite.
* **Services** (`services`, `select_multiple`, required): Select any additional services you would like during your stay, such as Breakfast or Wi-Fi.
* **Additional Services** (`additional_services`, `select_multiple`, optional): Select any extra services you would like, which can be Yes or No.
* **Comments** (`comments`, `note`, optional): If you have any comments or requests, please enter them here.
* **Contact** (`contact`, `email`, required): Enter your contact email address.
* **Phone** (`phone`, `text`, required): Enter your phone number.
* **Payment Method** (`payment_method`, `select_one`, required): Choose how you plan to pay for your stay, which can be Online, Bank Transfer, or Cash.
* **Payment Amount** (`payment_amount`, `number`, required): Enter the amount you plan to pay.
* **Payment Method Details** (`payment_method_details`, `text`, optional): If you are paying by bank transfer, please enter the relevant details.
* **Guest House Details** (`guest_house_details`, `text`, optional): If you have any specific preferences or requests for your guest house, please enter them here.
* **Guest House Name** (`guest_house_name`, `text`, optional): If you are booking for a specific guest house, enter the name here.
* **Guest House Address** (`guest_house_address`, `text`, required): Enter the address of the guest house.
* **Reservation Date** (`reservation_date`, `date`, required): Select the date you are making this reservation.
* **Reservation Details** (`reservation_details`, `text`, required): Enter any additional details about your reservation.
* **Cancellation Policy** (`cancellation`, `select_one`, required): Choose your cancellation policy, which can be None, 3 Days, or 1 Week.
* **Guest House Reservation Message** (`guest_house_reservation_message`, `text`, optional): If you have any special requests or messages for the guest house, please enter them here.
* **Guest House Confirmation** (`guest_house_confirmation`, `date`, required): Select the date you would like to confirm your reservation.
* **Additional Info** (`guest_house_additional_info`, `text`, optional): If you have any further information to provide, please enter it here.
* **Confirmation Method** (`confirmation_method`, `select_one`, required): Choose how you would like to receive confirmation, which can be Mail, Message, Call, or SMS.
