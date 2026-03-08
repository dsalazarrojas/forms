# Hotel Booking Form - Help Guide
## Purpose
This guide is intended to assist users in filling out the Hotel Booking Form accurately and efficiently.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Ensure that you have all the required information ready before starting.
2. Fill in the form with accurate and relevant details.
3. Review your submission for accuracy.

## Field-by-Field Explanation
* **First name** (`first_name`, text, optional): Enter your first name.
* **Last name** (`last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address in the correct format (e.g., `username@example.com`).
* **Date** (`date`, date, optional): Select the date of your visit.
* **Time** (`time`, time, optional): Select the time of your arrival.
* **Checkin** (`checkin`, date, optional): Select the date and time you would like to check-in.
* **Guest count** (`guests`, number, optional): Enter the number of guests accompanying you.
* **Rooms** (`rooms`, select_one, optional):
	+ Select "Yes" if you require a room.
	+ Select "No" if you do not require a room.
* **Room type** (`room_type`, select_multiple, optional):
	+ Select "Yes" if you want a specific room type.
	+ Select "No" if you do not have a preference for room type.
* **Rate** (`rate`, number, optional): Enter the rate or tariff for your booking.
* **Message** (`message`, note, optional): Enter any additional message or special requests you may have.
