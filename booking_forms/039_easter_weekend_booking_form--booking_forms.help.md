# easter_weekend_booking_form - Help Guide
## Purpose
This form is designed to capture information from guests who want to book their Easter weekend stay at our resort. It's essential to provide accurate and complete information to ensure a smooth and enjoyable experience for all.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the dates you plan to arrive and depart from our resort.
2. Select the time of your arrival.
3. Indicate if you'll be bringing guests with you.
4. Provide your name and email address for contact purposes.
5. Submit the form once you've filled out all required fields.

## Field-by-Field Explanation

* **start_date** (`start_date`, date, required): Enter the date you plan to arrive at our resort. This is a required field to ensure we can prepare for your arrival.
* **end_date** (`end_date`, date, required: false): If you're planning to stay with us for multiple days, enter the date you plan to depart from our resort. This field is optional, but it helps us understand your stay duration.
* **arrival_time** (`arrival_time`, time, required): Select the time you plan to arrive at our resort. This is crucial for our staff to be ready for your arrival.
* **guests** (`guests`, select_multiple, required): Indicate if you'll be bringing guests with you. Choose 'Yes' if you'll have companions, or 'No' if you'll be staying alone.
* **contact_name** (`contact_name`, text, required): Enter your name as the contact person for this booking.
* **contact_email** (`contact_email`, email, required): Enter your email address so we can contact you about your booking and any updates or changes.
