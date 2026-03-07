<thinking>
This form appears to be a reservation form for a farm stay, which could be a type of accommodation or lodging on a farm or rural setting. The form might be used by guests or travelers to book a stay on a farm, potentially for leisure or business purposes. To confirm, the form does not seem to be a duplicate of any known forms within the company, and it is likely designed for a specific business or operational use case.

Based on the provided YAML, the form is likely used for booking and reserving accommodations on a farm, allowing users to input their personal and reservation details. To avoid any potential confusion, it's essential to break down the form into smaller, actionable steps, explaining each field's purpose and requirement clearly.

</thinking>

# Farm Stay Reservation Form - Help Guide

## Purpose
This form is designed for guests and travelers to book a stay on a farm. It collects necessary information for the farm's management to accommodate their reservation needs.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your personal details:
	* **Guest Name**: Enter your full name as it appears on your identification.
	* **Phone**: Provide your contact phone number.
	* **Email**: Enter your valid email address.
2. Plan Your Stay:
	* **Checkin**: Choose a check-in date for your reservation.
	* **Checkout**: Choose a check-out date for your reservation.
	* **Number of Guests**: Specify the number of guests in your party.
	* **Number of Nights**: Indicate the duration of your stay.
	* **Arrival Time**: Select your estimated arrival time.
3. Select Your Accommodation:
	* **Farm Stay Type**: Choose your preferred accommodation type from the options Farm Stay, Farm Stay Deluxe, or Farm Stay Suite. If none of the options match your preferences, you can also provide a specific accommodation type in the field "Other Farm Stay Type".
4. Review and Confirm:
	* **Reservation Message**: Leave a message for the farm's management with any special requests or requirements.
	* **Reservation Date**: Confirm the date of your reservation.
5. Submit your reservation.

## Field-by-Field Explanation

* **Guest Name** (`guest_name`, text, required: false): Enter your full name as it appears on your identification.
* **Checkin** (`checkin_date`, date, required: false): Choose a check-in date for your reservation.
* **Checkout** (`checkout_date`, date, required: false): Choose a check-out date for your reservation.
* **Number of Guests** (`num_guests`, number, required: false): Specify the number of guests in your party.
* **Number of Nights** (`num_nights`, number, required: false): Indicate the duration of your stay.
* **Arrival Time** (`arrival_time`, time, required: false): Select your estimated arrival time.
* **Farm Stay Type** (`farmstay_type`, select_one, required: false): Choose your preferred accommodation type from the options Farm Stay, Farm Stay Deluxe, or Farm Stay Suite. If none of the options match your preferences, you can also provide a specific accommodation type in the field "Other Farm Stay Type".
* **Other Farm Stay Type** (`farmstay_type_other`, text, required: false): If none of the options match your preferences, provide a specific accommodation type.
* **Reservation Message** (`reservation_message`, text, required: false): Leave a message for the farm's management with any special requests or requirements.
* **Phone** (`phone`, text, required: false): Provide your contact phone number.
* **Email** (`email`, email, required: false): Enter your valid email address.
* **Reservation Date** (`reservation_date`, date, required: false): Confirm the date of your reservation.

## Tips

* Make sure to fill out all required fields.
* Double-check your accommodation preferences and dates before submitting your reservation.
* If you have any special requests or requirements, include them in the "Reservation Message" field.
* Ensure your contact information is accurate to facilitate smooth communication.
