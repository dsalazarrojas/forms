# City Hostel Dorm Booking Form - Help Guide
## Purpose
This form is designed to capture the necessary information for a guest to book their stay at the City Hostel. It helps the hostel staff to prepare for the guest's visit and ensure a comfortable stay.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the required information, making sure to provide accurate details.
2. Review your answers carefully before submission.

## Field-by-Field Explanation
* **Full Name of Primary Guest (Guest Name)** (`guest_name`, text, required): Enter the name of the primary guest booking the stay.
* **Email Address (Guest Email)** (`guest_email`, email, required): Enter the email address of the primary guest.
* **Phone Number (Guest Phone)** (`guest_phone`, text, required): Enter the phone number of the primary guest, including the country code.
* **Check-in Date (Arrival Date)** (`arrival_date`, date, required): Select the date when the guest plans to arrive at the hostel.
* **Check-out Date (Departure Date)** (`departure_date`, date, required): Select the date when the guest plans to leave the hostel.
* **Total Number of Guests (Number of Guests)** (`number_of_guests`, number, required): Enter the total number of guests in the booking.
* **Preferred Dorm Type (Dorm Type Preference)** (`dorm_type_preference`, select_one, required): Select the preferred type of dorm the guest would like to stay in.
* **Estimated Arrival Time (Arrival Time)** (`arrival_time_estimate`, time, optional): If the guest has a preferred arrival time, please input it here. This will help the staff prepare for their arrival.
* **Passport or National ID Number (Identification Number)** (`identification_number`, text, required): Enter the passport or national ID number of the primary guest.
* **Any special requirements or allergies? (Special Requirements)** (`special_requirements`, text, optional): If the guest has any special requirements or allergies, please list them here.
* **Purpose of Visit (Travel Purpose)** (`travel_purpose`, select_one, optional): Select the purpose of the guest's visit.
* **How did you hear about us? (Heard About Us)** (`heard_about_us`, select_one, optional): Select how the guest heard about the hostel.
* **I agree to the hostel house rules and cancellation policy (Agreement Terms)** (`agreement_terms`, select_one, required): Select "Yes, I agree" to acknowledge the hostel's policies.
* **Submission Date (Booking Timestamp)** (`booking_timestamp`, date, required): This is automatically generated upon form submission.

## Tips
Please make sure to double-check all fields for accuracy before submitting the form.
