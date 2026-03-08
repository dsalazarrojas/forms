# Gym Reservation Form - Help Guide

## Purpose
The Gym Reservation Form is a simple form used by members to reserve a time slot at the gym, select facilities or activities they want to use during that time, and receive a confirmation code or cancel the reservation if needed.

## How To Complete This Form

To complete this form, follow these steps:

1. Select a date and time for your reservation.
2. Choose the facilities or activities you want to use during your reserved time slot.
3. Enter your member details.
4. Add any reservation notes.
5. Confirm your reservation.
6. If you need to cancel your reservation, select "Cancel Reservation".

## Field-by-Field Explanation

* **Select Date and Time** (`reservation_time`, select_one): Select a date and time for your gym reservation.
* **Select Facilities** (`reservation_facility`, select_multiple): Choose the facilities you want to use during your reserved time slot. 
* **Select Activities** (`selected_activities`, select_multiple): Choose the activities you want to perform during your reserved time slot. 
* **Member Details** (`member_details`, text): Enter your member details to be associated with this reservation.
* **Reservation Notes** (`reservation_notes`, note): Add any notes or comments related to your reservation.
* **Confirmation Code** (`confirmation_code`, select_one): Receive a confirmation code for your reservation.
* **Confirm** (`confirm`, select_one): Confirm your reservation details.
* **Cancel Reservation** (`cancel_reservation`, select_one): Cancel your reservation if you need to.

## Tips
* Make sure to select a valid date and time for your reservation.
* Be specific about the facilities and activities you want to use.
* Double-check your member details for accuracy.
* Use reservation notes to communicate any special requests or requirements.
* Confirm your reservation carefully to avoid any mistakes.
