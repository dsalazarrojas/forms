# thanksgiving_turkey_reservation_form - Help Guide
## Purpose
The Thanksgiving Turkey Reservation Form is a simple form designed to collect information for a Thanksgiving event. This form allows users to submit their reservation details, including their name, address, phone number, reservation date, and more. It's intended for individual or group reservations.

## How To Complete This Form
To complete this form successfully, follow these steps:

1. Enter the Reservation Date if you know it. This will help us ensure that your reservation is accurately recorded.
2. Fill in your Name as it appears on your official documents (e.g., driver's license).
3. Enter your complete Address for our records.
4. Provide your Phone Number so we can contact you for any updates.
5. Choose a Reservation Time slot that suits you best.
6. Add any additional Message if you have any special requests.
7. Enter your Email address so we can contact you with any important information.
8. Select the Reservation Type: Individual or Group.
9. If you're bringing a group, enter the Number of Guests in the accompanying field.

## Field-by-Field Explanation

* **Reservation Date** (`reservation_date`, date, optional): Enter the date of your reservation, if known. This will help us schedule your visit accurately.
* **Name** (`name`, text, optional): Enter your name as it appears on your official documents.
* **Address** (`address`, text, optional): Enter your complete address for our records.
* **Phone Number** (`phone_number`, text, optional): Provide your phone number so we can contact you for any updates.
* **Reservation Time** (`reservation_time`, time, optional): Choose a time that suits you best for your reservation.
* **Message** (`message`, text, optional): If you have any special requests or comments, add them here.
* **Email** (`email`, email, optional): Enter your email address so we can contact you with important information.
* **Reservation Type** (`reservation_type`, select_one, required): Select "Individual" for a solo visit or "Group" for a group reservation.
* **Number of Guests** (`number_of_guests`, number, optional): If you're bringing a group, enter the number of guests in attendance.
