# Boat Rental Form - Help Guide
## Purpose
This form is designed to gather information from renters to facilitate the boat rental process. It collects personal and rental details to ensure a smooth and secure transaction between the renter and the boat rental service.

## How To Complete This Form

1. Fill in the required fields with accurate and complete information.
2. For fields with options, select the relevant value that best represents your choice.

## Field-by-Field Explanation

* **Renter First Name** (`renter_first_name`, text, required): Enter your first name.
* **Renter Last Name** (`renter_last_name`, text, required): Enter your last name.
* **Renter Email** (`renter_email`, email, required): Enter your contact email address.
* **Renter Phone** (`renter_phone`, text, required): Enter your contact phone number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth. Please note that you must be 21 or older to rent a boat.
* **Driver's License Number** (`drivers_license_number`, text, required): Enter your valid driver's license number.
* **License State** (`license_state`, text, required): Enter the state that issued your driver's license.
* **Rental Date** (`rental_date`, date, required): Select the date you need the boat for rent.
* **Rental Duration** (`rental_duration`, select_one, required): Select the duration of your rental (e.g., 2 Hours, 4 Hours, Half Day, etc.).
* **Return Date** (`return_date`, date, required): Select the date you plan to return the boat.
* **Boat Type Preference** (`boat_type_preference`, select_one, required): Select your preferred type of boat (e.g., Pontoon Boat, Bowrider, etc.).
* **Number of Passengers** (`number_of_passengers`, number, required): Enter the total number of passengers.
* **Boating Experience Level** (`boating_experience`, select_one, required): Indicate your level of boating experience (e.g., None - First Time, Beginner, etc.).
* **Captain Service Needed** (`captain_service_needed`, select_one, required): If you need a captain, select "Yes, hire a captain".
* **Additional Equipment** (`additional_equipment`, select_multiple, optional): Select any additional equipment you may need (e.g., Fishing Gear, Cooler, etc.).
* **Special Occasion** (`special_occasion`, select_one, optional): If this rental is for a special event, select the relevant option (e.g., Birthday, Anniversary, etc.).
* **Catering Requested** (`catering_requested`, select_one, optional): If you need catering, select "Yes, please contact me".
* **Security Deposit** (`security_deposit`, select_one, required): Select the security deposit amount ($250 - Standard, $500 - Premium Boat, etc.).
* **Rental Fee** (`rental_fee`, number, required): Enter the base rental cost.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method you will use (e.g., Credit Card, Debit Card, etc.).
* **Insurance Waiver** (`insurance_waiver`, select_one, required): Select whether you want to add an insurance protection waiver ($50).
* **Safety Briefing Required** (`safety_briefing_required`, select_one, required): Confirm you understand the safety briefing requirements.
* **Liability Waiver** (`liability_waiver`, select_one, required): Accept or decline the liability waiver terms.
* **Special Requests** (`special_requests`, text, optional): Enter any additional needs or requests.
* **Renter Signature** (`renter_signature`, text, required): Type your full name as a signature.
* **Signature Date** (`signature_date`, date, required): Enter the date of the agreement.

Note: The guide is designed to be user-friendly and easy to follow. Review each field carefully to ensure accurate and complete information.
