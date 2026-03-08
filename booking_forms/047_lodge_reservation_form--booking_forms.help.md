# Lodge Reservation Form - Help Guide

## Purpose
The Lodge Reservation Form is designed to collect information for lodge reservations. Please fill out the form to provide the necessary details for your stay.

## How To Complete This Form
1. To begin, choose the reservation date for your stay in the "Reservation Date" field.
2. Select the start and end times for your stay in the "Start Time" and "End Time" fields.
3. Enter your guest name in the "Guest Name" field.
4. Provide your contact email address in the "Email" field.
5. Enter your phone number in the "Phone" field.
6. If you have any special instructions or messages for the lodge staff, you can add them in the "Guest Message" field.
7. Choose whether your stay is for business or leisure in the "Business or Leisure" field.
8. Confirm if you are traveling for business or not in the "Business Traveling" field.
9. Finally, select the type of reservation you need in the "Reservation Type" field.

## Field-by-Field Explanation
* **Reservation Date** (`reservation_date`, date, required: false): Choose the date for your reservation.
* **Start Time** (`start_time`, time, required: false): Select the start time for your reservation.
* **End Time** (`end_time`, time, required: false): Choose the end time for your reservation.
* **Guest Name** (`guest_name`, text, required: false): Enter the name of the guest.
* **Email** (`email`, email, required: false): Provide the email address for the guest's contact information.
* **Phone** (`phone`, text, required: false): Enter the guest's phone number.
* **Guest Message** (`guest_message`, note, required: false): Leave any special instructions or messages for the lodge staff.
* **Business or Leisure** (`business_leisure`, select_one, required: false): Choose whether the stay is for business or leisure.
* **Business Traveling** (`business_traveling`, select_one, required: false): Confirm whether you are traveling for business or not.
* **Reservation Type** (`reservation_type`, select_one, required: false): Select the type of reservation you need.
