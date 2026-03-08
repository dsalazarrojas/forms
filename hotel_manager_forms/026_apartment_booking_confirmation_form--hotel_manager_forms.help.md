<thinking>Apartment Booking Confirmation Form is a crucial tool for ensuring accurate and efficient communication between the hotel management and guests. Its primary purpose is to confirm the booking details, including guest information, room assignments, and payment details. This form helps the management to verify the booking and ensure that the guest has all the necessary information before their arrival. The form should only be used for confirmed bookings. If a booking is not confirmed, please do not use this form. It is essential to carefully complete this form to avoid any misunderstandings or miscommunications with the guest. Please ensure you have all the necessary information before filling out this form, and if you are unsure about any field, please contact the hotel management for clarification.</thinking>

# Apartment Booking Confirmation Form - Help Guide
## Purpose
The Apartment Booking Confirmation Form is used to confirm the details of a guest's booking, including their personal information, room assignment, and payment details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the guest's **Full Name** in the "Guest Full Name" field.
2. Enter the **Booking Reference ID** in the "Booking Reference ID" field.
3. Select the **Apartment Name or Unit Number** from the list.
4. Choose the **Check-In Date** and **Check-Out Date** according to your booking details.
5. Enter the **Total Number of Guests** and **Total Price of Stay**.
6. Pay the **Deposit Amount** and fill in the remaining **Balance Due**.
7. Choose the **Type of Identification Provided** (Passport, Driver License, or National ID).
8. If required, fill in any **Special Requests or Dietary Needs**.
9. Provide the **Primary Contact Number** for urgent communication during your stay.

## Field-by-Field Explanation
* **Guest Full Name** (`guest_full_name`, text, required): Please enter the guest's full name as it appears on their identification.
* **Booking Reference ID** (`booking_id`, text, required): Enter the booking reference ID provided by the hotel management.
* **Apartment Name or Unit Number** (`apartment_assigned`, text, required): Select the name of the apartment or unit number assigned to you.
* **Check-In Date** (`check_in_date`, date, required): Choose the date you will be checking-in according to your booking details.
* **Check-Out Date** (`check_out_date`, date, required): Select the date you will be checking-out according to your booking details.
* **Total Number of Guests** (`guest_count`, number, required): Enter the total number of guests staying in the apartment.
* **Total Price of Stay** (`total_stay_price`, number, required): Enter the total price of stay including all taxes and fees.
* **Deposit Amount Paid** (`amount_deposited`, number, required): Fill in the deposit amount paid.
* **Remaining Balance Due** (`balance_due`, number, required): Fill in the remaining balance due to be paid upon arrival.
* **Estimated Time of Arrival** (`arrival_method`, time, optional): If available, choose the estimated time of arrival.
* **Type of Identification Provided** (`identification_provided`, select_one, required): Select the type of identification you have provided (Passport, Driver License, or National ID).
* **Special Requests or Dietary Needs** (`special_requests`, text, optional): If required, fill in any special requests or dietary needs.
* **Primary Contact Number** (`contact_number`, text, required): Provide the primary contact number for urgent communication during your stay.
