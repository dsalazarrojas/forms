# technical_rehearsal_slot_booking_form - Help Guide
## Purpose
This form is designed to help users book a technical rehearsal slot, providing essential information to ensure a smooth and successful rehearsal process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields:
	* **Rehearsal Slot Date**: Enter the date of the rehearsal slot in mm/dd/yyyy format.
	* **Start Time**: Select the start time of the rehearsal slot using the provided time options.
	* **Location**: Enter the location where the rehearsal will take place.
	* **Contact Info**: Enter the contact information of the person responsible for the booking.
	* **Booking Manager**: Select the booking manager from the provided options.
	* **Rehearsal Type**: Choose the type of technical rehearsal (Technical Rehearsal, Dress Rehearsal, or Pre-Production Rehearsal).
2. Fill in the optional fields:
	* **Duration**: Enter the duration of the rehearsal slot in number of hours or minutes.
	* **Tech Requirement**: Enter any technical requirements or special requests.
	* **Special Request**: Enter any special requirements or requests.
3. Select the options for the following fields:
	* **Rehearsal Time**: Select whether the rehearsal will have a rehearsal time slot.
	* **Rehearsal Days**: Select the number of days for the rehearsal slot.
	* **Rehearsal Start Time**: Select the start time of the rehearsal slot.

## Field-by-Field Explanation

* **Rehearsal Slot Date** (`rehearsal_slot_date`, date, required): Enter the date of the rehearsal slot in mm/dd/yyyy format.
* **Start Time** (`start_time`, time, required): Select the start time of the rehearsal slot using the provided time options.
* **Duration** (`duration`, number, required): Enter the duration of the rehearsal slot in hours or minutes. This field is optional, but provides important information for scheduling purposes.
* **Location** (`location`, text, required): Enter the location where the rehearsal will take place.
* **Contact Info** (`contact_info`, text, required): Enter the contact information of the person responsible for the booking.
* **Booking Manager** (`booking_manager`, select_one, required): Select the booking manager from the provided options.
* **Rehearsal Type** (`rehearsal_type`, select_one, required): Choose the type of technical rehearsal (Technical Rehearsal, Dress Rehearsal, or Pre-Production Rehearsal).
* **Rehearsal Time** (`rehearsal_time`, select_multiple, optional): Select whether the rehearsal will have a time slot.
* **Rehearsal Days** (`rehearsal_days`, select_multiple, optional): Select the number of days for the rehearsal slot.
* **Rehearsal Start Time** (`rehearsal_start_time`, date, optional): Select the start time of the rehearsal slot.
* **Tech Requirement** (`tech_require`, text, optional): Enter any technical requirements or special requests.
* **Special Request** (`special_req`, text, optional): Enter any special requirements or requests.
* **Booking Date** (`booking_date`, date, optional): Enter the booking date (not to be confused with the rehearsal slot date).
* **Rehearsal Type** (`rehearsal_type`, select_one, optional): Select the type of technical rehearsal (Technical Rehearsal, Dress Rehearsal, or Pre-Production Rehearsal).
* **Rehearsal Time** (`rehearsal_time`, select_multiple, optional): Select the time slot for the rehearsal.
* **Rehearsal Days** (`rehearsal_days`, select_multiple, optional): Select the number of days for the rehearsal slot.
* **Rehearsal Start Time** (`rehearsal_start_time`, date, optional): Select the start time of the rehearsal slot.
