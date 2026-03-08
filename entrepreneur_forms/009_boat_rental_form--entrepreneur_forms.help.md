<thinking>... internal logic checks: 
- The form is designed to collect information about boat rental bookings.
- The form asks for basic contact information of the renter.
- The form asks for specific boat preferences, rental dates, and duration.
- The form requires boating experience, captain request, and license verification.
- The form also asks for additional information like insurance coverage, purpose of rental, and preferred payment method.
- Each field is designed to be straightforward and easy to understand, with some fields being optional.
- The form has a clear and simple layout, with each field having a distinct label and a brief explanation.
... </thinking>

# Boat Rental Form - Help Guide
## Purpose
This form is designed to collect information from renters for booking a boat rental. It will help us understand your needs and preferences to provide a smooth and enjoyable rental experience.

## How To Complete This Form
1. Fill in your contact information: First name, Last name, Email, Phone number, and Home address.
2. Select the type of boat you would like to rent from the options provided.
3. Choose the rental start and end dates.
4. Specify the number of passengers.
5. Indicate if you need a captain or if you have enough experience to captain the boat.
6. Select your boating experience level.
7. Confirm if you have a boating license and provide the license number if applicable.
8. Indicate if you have boat liability insurance or if you will purchase it.
9. Specify the purpose of your rental (e.g., fishing, leisure, etc.).
10. Choose your preferred rental package and duration.
11. Enter the total rental cost and deposit amount.
12. Select your preferred payment method.
13. Accept the rental terms and waiver.

## Field-by-Field Explanation

* **First Name** (renter_first_name, text, required): Enter your first name for identification purposes.
* **Last Name** (renter_last_name, text, required): Enter your last name for identification purposes.
* **Email Address** (renter_email, email, required): Enter your valid email address.
* **Phone Number** (renter_phone, text, required): Enter your phone number for contact purposes.
* **Home Address** (renter_address, text, required): Enter your home address for billing purposes.
* **City - State - Zip** (renter_city_state_zip, text, required): Enter your city, state, and zip code for location purposes.
* **Which Boat Would You Like to Rent** (boat_selection, select_one, required): Choose from the available boat options (Fishing Boat - 22ft, Speedboat - 26ft, Sailboat - 30ft, Cabin Cruiser - 32ft, Luxury Yacht - 45ft, Pontoon - 25ft).
* **Rental Start Date** (rental_start_date, date, required): Choose the start date of your rental period.
* **Rental End Date** (rental_end_date, date, required): Choose the end date of your rental period.
* **Number of Passengers** (number_of_passengers, number, required): Specify the total number of passengers including yourself.
* **Do You Need a Captain** (captain_request, select_one, required): Select "Yes, include captain" if you need a captain, or choose "No, I will captain" if you have enough experience.
* **Boating Experience Level** (experience_level, select_one, required): Choose your level of experience (Beginner, Intermediate, Advanced, Professional, Not Applicable).
* **Do you have a Boating License** (license_verification, select_one, required): Select "True" if you have a boating license, or choose "False" or "Not Required for This Boat" if applicable.
* **Boating License Number** (license_number, text, required only if boating license is true): Enter your license number if you have a boating license.
* **Do you have boat liability insurance** (insurance_coverage, select_one, required): Select "True" if you have boat liability insurance, or choose "False" or "Will Purchase Coverage" if you will purchase it.
* **Purpose of Rental** (rental_purpose, select_one, required): Choose the purpose of your rental (Fishing, Leisure Cruising, Water Sports, Family Outing, Business Event, Wedding, Other).
* **Rental Package** (rental_package, select_one, required): Choose the rental package (Half Day, Full Day, Overnight, Multi-Day, Weekly).
* **Total Rental Cost** (total_rental_cost, number, required): Enter the total rental cost amount due.
* **Deposit Amount** (deposit_amount, number, required): Enter the refundable security deposit amount.
* **Preferred Payment Method** (payment_method, select_one, required): Choose your preferred payment method (Credit Card, Debit Card, Bank Transfer, Cash, Check).
* **I accept the rental terms and waiver** (waiver_acceptance, select_one, required): Confirm your acceptance of the rental terms and waiver.
* **Additional Comments or Concerns** (additional_comments, text, optional): Enter any additional comments or concerns you may have.
