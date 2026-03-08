# Christmas Party Room Registration Form - Help Guide
## Purpose
This form is designed to collect information from guests interested in booking a room for a Christmas party weekend. It is essential to provide accurate and complete details to ensure a smooth and enjoyable experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Primary Guest Name.
2. Provide your Contact Email and Contact Phone Number.
3. Select your preferred Room Category.
4. Choose a Check-in Date for the party weekend (Dec 20-22).
5. Specify the Number of Nights you plan to stay.
6. If there are additional guests in your room, enter their number.
7. Choose your preferred Payment Method for room incidentals.
8. Confirm that you understand the 48-hour cancellation policy.
9. Optionally, add any Special Requests or Notes.

## Field-by-Field Explanation

* **Primary Guest Name** (`guest_name`, text, required): Enter the name of the primary guest registering for the room.
* **Contact Email** (`email`, email, required): Enter the email address of the primary guest or someone who can be contacted for further details.
* **Contact Phone Number** (`phone`, text, required): Enter the phone number of the primary guest or someone who can be contacted for further details.
* **Preferred Room Category** (`room_type`, select_one, required): Choose a room type from the available options: Standard Queen, Double Full, Deluxe King, or Suite (Living Area).
* **Check-in Date** (`check_in_date`, date, required): Select a check-in date within the party weekend (Dec 20-22).
* **Number of Nights** (`number_of_nights`, number, required): Indicate the number of nights you plan to stay in the room.
* **Number of Additional Guests in Room** (`additional_guests`, number, required): Enter the number of guests staying in the room, excluding the primary guest.
* **Do you require an ADA accessible room?** (`accessible_room`, select_one, required): Choose whether you need an ADA accessible room.
* **Dietary Requirements for Morning Breakfast** (`dietary_requirements_breakfast`, select_multiple, required): Select any dietary requirements from the provided options (None, Vegan, Gluten Free, Nut Allergy, Dairy Free).
* **Request Early Check-in (if available)** (`early_check_in`, select_one, required): Choose if you would like to request early check-in, subject to an additional $25 fee.
* **Other Special Requests or Notes** (`special_requests`, text, optional): Add any other special requests or notes you'd like to share with the staff.
* **Preferred Payment Method for Room Incidentals** (`payment_method`, select_one, required): Select your preferred payment method from the available options (Credit Card, Cash, Direct Billing (Pre-approved corporate only)).
* **I understand the 48-hour cancellation policy** (`cancellation_agreement`, select_one, required): Confirm that you understand the 48-hour cancellation policy.
