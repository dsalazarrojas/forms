# Winery Tour Reservation Form - Help Guide
## Purpose
This form is designed to collect information from users to book a tour at a winery.

## How To Complete This Form
To complete this form, follow these steps:

1. Click on the "Submit" button to begin.
2. Select the date and time of the tour you'd like to book.
3. Enter your guest's name and contact email.
4. Enter your guest's phone number.
5. Specify the number of guests attending the tour.
6. If you have any special requests, enter them in the "Special Requests" field.
7. Choose your preferred payment type (Credit Card, Cash, or Check).
8. Enter any additional payment terms (optional).
9. Enter any notes or comments about the tour you'd like to share with the winery staff.

## Field-by-Field Explanation
* **Tour Date** (`tour_date`, date, required/optional): Select the date you'd like to take the tour.
* **Tour Time** (`tour_time`, time, required/optional): Select the time you'd like to take the tour.
* **Guest Name** (`guest_name`, text, required/optional): Enter the name of the guest(s) attending the tour.
* **Contact Email** (`contact_email`, email, required/optional): Enter the contact email of the guest(s) attending the tour.
* **Guest Phone** (`guest_phone`, text, required/optional): Enter the phone number of the guest(s) attending the tour.
* **Number of Guests** (`num_guests`, number, required/optional): Enter the number of guests attending the tour.
* **Special Requests** (`special_requests`, text, required/optional): If you have any special requests or comments, enter them here.
* **Tour Time** (`reservation_time`, time, required/optional): Select the exact time you'd like to arrive for the tour (this is not necessarily the time you'll start the tour, but rather the time you'd like to arrive at the winery).
* **Payment Type** (`payment_type`, select_one, required/optional): Choose the method of payment you'd like to use (Credit Card, Cash, or Check).
* **Payment Terms** (`payment_terms`, number, required/optional): Enter any additional payment terms or details (e.g., number of guests, tour length).
* **Winery Notes** (`winery_notes`, note, required/optional): Enter any notes or comments about the tour you'd like to share with the winery staff.
