<thinking>
To confirm that the form is complete and accurate, I'll review the provided YAML structure and explain the form's purpose, how to complete it, and what each field means.

The Apartment Booking Confirmation Form is used to gather important information for an apartment booking from a guest. The form captures details such as the booking reference number, guest contact information, apartment preferences, payment details, and emergency contact information. This form is essential for the property manager to understand the guest's requirements and preferences during their stay.

To complete the form, follow these steps:

1. Start by filling in the booking reference number, which is a unique identifier for the booking.
2. Enter the guest's contact information, including their name, email address, phone number, and emergency contact information.
3. Select the apartment type, number, and check-in and check-out dates and times.
4. Specify the number of guests and adults.
5. Choose the purpose of stay and any additional services required.
6. Provide payment details, including the total amount, deposit, and payment method.
7. Confirm the cancellation policy and house rules.
8. Enter any damage deposits and specify the amount.
9. Select the accessibility needs of the guest.
10. Confirm the parking requirements.
11. Add any additional comments or services requested.
12. Finally, sign and date the form.

Here is the field-by-field explanation:

* **Booking Reference Number** (`booking_reference`, text, required): A unique booking ID.
* **Booking Date** (`booking_date`, date, required): The date of the booking.
* **Guest Full Name** (`guest_name`, text, required): The primary guest's name.
* **Email Address** (`guest_email`, email, required): The contact email address of the guest.
* **Phone Number** (`guest_phone`, text, required): The contact phone number of the guest.
* **Number of Guests** (`number_of_guests`, number, required): The total number of guests.
* **Number of Adults** (`adults_count`, number, required): The number of adults staying.
* **Apartment Type** (`apartment_type`, select_one, required): The type of apartment booked (Studio, One bedroom, Two bedroom, Three bedroom, Penthouse, Other).
* **Apartment Number** (`apartment_number`, text, required): The unit number of the apartment.
* **Check-in Date** (`check_in_date`, date, required): The arrival date.
* **Check-in Time** (`check_in_time`, time, required): The expected arrival time.
* **Check-out Date** (`check_out_date`, date, required): The departure date.
* **Check-out Time** (`check_out_time`, time, required): The expected departure time.
* **Number of Nights** (`number_of_nights`, number, required): The total number of nights.
* **Purpose of Stay** (`purpose_of_stay`, select_one, required): The reason for the stay (Vacation, Business, Relocation, Family visit, Medical, Other).
* **Special Requests** (`special_requests`, text, optional): Any additional requirements or requests.
* **Accessibility Needs** (`accessibility_needs`, select_multiple, required): The accessibility needs of the guest (None, Wheelchair accessible, Ground floor, Elevator access, Visual aids, Hearing aids, Other).
* **Parking Required** (`parking_required`, select_one, required): Whether the guest requires parking (Yes, one space, Yes, multiple spaces, False).
* **Total Amount** (`total_amount`, number, required): The total booking cost.
* **Deposit Paid** (`deposit_paid`, number, required): The deposit amount.
* **Balance Due** (`balance_due`, number, required): The remaining amount.
* **Payment Method** (`payment_method`, select_one, required): The payment method (Credit card, Debit card, Bank transfer, Cash, Other).
* **Payment Status** (`payment_status`, select_one, required): The current payment status (Fully paid, Deposit paid, Pending, Pay on arrival).
* **Cancellation Policy Acknowledged** (`cancellation_policy`, select_one, required): Whether the guest has read and acknowledged the cancellation policy.
* **House Rules Acknowledged** (`house_rules`, select_one, required): Whether the guest agrees to the house rules.
* **Damage Deposit Required** (`damage_deposit`, number, required): The refundable deposit amount.
* **Additional Services** (`additional_services`, select_multiple, required): Select any additional services required (None, Daily housekeeping, Airport transfer, Welcome package, Grocery stocking, Late check-out, Early check-in, Other).
* **Emergency Contact Name** (`emergency_contact_name`, text, required): The name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): The phone number of the emergency contact person.
* **Confirmation Status** (`confirmation_status`, select_one, required): The booking status (Confirmed, Pending, Waitlisted, Cancelled).
* **Property Manager Name** (`property_manager`, text, required): The name of the property manager.
* **Manager Contact** (`manager_contact`, text, required): The contact information of the property manager.
* **Guest Signature** (`guest_signature`, text, required): The digital signature of the guest.
* **Confirmation Date** (`confirmation_date`, date, required): The date the booking was confirmed.

# Apartment Booking Confirmation Form - Help Guide
## Purpose
The Apartment Booking Confirmation Form is used to gather important information for an apartment booking from a guest.
## How To Complete This Form
To complete this form, follow the steps outlined above.
## Field-by-Field Explanation
* **Booking Reference Number**: Enter the unique booking ID.
* **Booking Date**: Enter the date of the booking.
* **Guest Full Name**: Enter the primary guest's name.
* **Email Address**: Enter the contact email address of the guest.
* **Phone Number**: Enter the contact phone number of the guest.
* **Number of Guests**: Specify the total number of guests.
* **Number of Adults**: Enter the number of adults staying.
* **Apartment Type**: Select the type of apartment booked.
* **Apartment Number**: Enter the unit number of the apartment.
* **Check-in Date**: Enter the arrival date.
* **Check-in Time**: Enter the expected arrival time.
* **Check-out Date**: Enter the departure date.
* **Check-out Time**: Enter the expected departure time.
* **Number of Nights**: Specify the total number of nights.
* **Purpose of Stay**: Select the reason for the stay.
* **Special Requests**: Enter any additional requirements or requests.
* **Accessibility Needs**: Select the accessibility needs of the guest.
* **Parking Required**: Choose whether the guest requires parking.
* **Total Amount**: Enter the total booking cost.
* **Deposit Paid**: Enter the deposit amount.
* **Balance Due**: Enter the remaining amount.
* **Payment Method**: Select the payment method.
* **Payment Status**: Select the current payment status.
* **Cancellation Policy Acknowledged**: Confirm that the guest has read and acknowledged the cancellation policy.
* **House Rules Acknowledged**: Confirm that the guest agrees to the house rules.
* **Damage Deposit Required**: Enter the refundable deposit amount.
* **Additional Services**: Select any additional services required.
* **Emergency Contact Name**: Enter the name of the emergency contact person.
* **Emergency Contact Phone**: Enter the phone number of the emergency contact person.
* **Confirmation Status**: Select the booking status.
* **Property Manager Name**: Enter the name of the property manager.
* **Manager Contact**: Enter the contact information of the property manager.
* **Guest Signature**: Enter the digital signature of the guest.
* **Confirmation Date**: Enter the date the booking was confirmed.
