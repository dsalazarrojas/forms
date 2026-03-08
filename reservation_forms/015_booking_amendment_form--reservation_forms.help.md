# Booking Amendment Form - Help Guide
## Purpose
The purpose of this form is to make amendments to an existing booking, allowing guests to modify their stay details, such as dates, room type, or services.

## How To Complete This Form
- Ensure you have your original booking reference number handy.
- Fill in your name as it appears on the original booking.
- Provide your email address associated with the booking.
- Enter your phone number for contact purposes.
- Confirm the original check-in and check-out dates of your booking.
- Indicate the type of amendment you need to make (e.g., changing dates, room type, etc.).
- If applicable, provide new dates for check-in and check-out if changing these details.
- If applicable, specify new room type or number of guests.
- Select any additional services you require (e.g., breakfast, spa treatments, etc.).
- State the reason for the amendment, if you'd like to provide context.
- Add any special requests or instructions.
- Finally, choose your preferred contact method for hotel communication (email, phone, or SMS).

## Field-by-Field Explanation

* **Booking Reference Number** (`booking_reference`, `text`, required):
  Enter the original booking reference number for identification purposes.

* **Guest Name** (`guest_name`, `text`, required):
  Enter your name as it appears on the original booking.

* **Email Address** (`guest_email`, `email`, required):
  Enter the email address associated with the original booking.

* **Phone Number** (`guest_phone`, `text`, optional):
  Enter your contact phone number for communication purposes.

* **Original Check-in Date** (`original_checkin_date`, `date`, required):
  Enter the current check-in date of your original booking.

* **Original Check-out Date** (`original_checkout_date`, `date`, required):
  Enter the current check-out date of your original booking.

* **What would you like to change** (`amendment_type`, `select_one`, required):
  Select the type of amendment you need to make (e.g., changing dates, room type, etc.).

* **New Check-in Date** (`new_checkin_date`, `date`, optional):
  If changing dates, enter the new check-in date.

* **New Check-out Date** (`new_checkout_date`, `date`, optional):
  If changing dates, enter the new check-out date.

* **New Number of Guests** (`new_number_of_guests`, `number`, optional):
  If changing guest count, enter the new number of guests.

* **New Room Type** (`new_room_type`, `select_one`, optional):
  If changing room type, select a new room type from the options provided.

* **Additional Services Needed** (`additional_services`, `select_multiple`, optional):
  Select any services you require (e.g., breakfast, spa treatments, etc.).

* **Reason for Amendment** (`reason_for_amendment`, `text`, optional):
  Provide a brief explanation for the amendment, if you'd like.

* **Special Requests** (`special_requests`, `text`, optional):
  Add any special instructions or notes.

* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, required):
  Choose how you'd like to be contacted (email, phone, or SMS).
