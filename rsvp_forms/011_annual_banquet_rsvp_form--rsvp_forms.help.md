# Annual Banquet RSVP Form - Help Guide
## Purpose
This form is designed to collect information from attendees for the annual banquet event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name and email address in the required fields.
2. If you have been assigned to a table, enter your table number in the "Table Number" field.
3. Choose your meal selection and dietary preferences in the "Meal Selection" and "Dietary Restrictions" fields.
4. Select your preferred beverage package and program participation options.
5. Answer "Yes" or "No" to the questions about transportation assistance and parking needs.
6. Enter any special requests or accessibility requirements.
7. Choose your arrival time and whether you are interested in making a donation.
8. Confirm your interest in participating in the auction.
9. Give your consent for photos to be used for marketing purposes.
10. Enter any emergency contact information, if applicable.

## Field-by-Field Explanation

* **Full Name** (`guest_name`, text, required): This is your full name that will be used for event records and communication.
* **Email Address** (`email`, email, required): This is your contact email address for event updates and confirmation.
* **Phone Number** (`phone`, text, optional): Your preferred contact number for event organizers.
* **Organization Affiliation** (`organization_affiliation`, text, optional): Your company or organization name (if applicable).
* **Table Assignment** (`table_assignment`, select_one, required): If you have been assigned to a table, select "Yes, Assigned" and enter your table number.
* **Table Number** (`table_number`, text, optional): If assigned to a table, enter your table number here.
* **Will You Attend?** (`rsvp_status`, select_one, required): Confirm your attendance by selecting "Yes, I Will Attend".
* **Number of Guests** (`number_of_guests`, number, required): Enter the total number of guests, including yourself, attending the event.
* **Guest Names** (`guest_names`, text, optional): List the names of all attendees in your party.
* **Dietary Restrictions** (`dietary_restrictions`, select_multiple, required): Select all dietary restrictions that apply to you or your guests.
* **Dietary Details** (`dietary_details`, text, optional): Provide any additional dietary details or allergies.
* **Meal Selection** (`meal_selection`, select_one, required): Choose your preferred meal option.
* **Beverage Package** (`beverage_package`, select_one, optional): Select your preferred beverage package.
* **Program Participation** (`program_participation`, select_multiple, optional): Select any program elements you are interested in participating in.
* **Transportation Assistance Needed** (`transportation_needed`, select_one, optional): If you need help with transportation, select "True".
* **Parking Needed** (`parking_needed`, select_one, optional): If you need parking at the venue, select "True".
* **Accessibility Requirements** (`accessibility_requirements`, text, optional): Enter any special accessibility requirements.
* **Expected Arrival Time** (`arrival_time`, time, optional): Enter your expected arrival time.
* **Donation Interest** (`donation_interest`, select_one, optional): If you are interested in making a donation, select "True".
* **Auction Interest** (`auction_interest`, select_one, optional): Confirm your interest in participating in the auction.
* **Photo Consent** (`photo_consent`, select_one, required): Select "Yes, I Consent" to allow event photos to be used for marketing purposes.
* **Special Requests** (`special_requests`, text, optional): Enter any other requests or needs you may have.
* **Emergency Contact Name** (`emergency_contact`, text, optional): Enter the name of your emergency contact person.
* **Emergency Contact Phone** (`emergency_phone`, text, optional): Enter the contact phone number of your emergency contact person.
