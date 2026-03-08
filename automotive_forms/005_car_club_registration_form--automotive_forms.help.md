<thinking>
The form purpose is to collect information from car enthusiasts to register themselves for a car club. This form is part of the club's membership process and is used to collect demographic data about the member, their vehicle, and their interests. The form is designed to be completed by individuals who wish to join the club and become an active member. The goal is to ensure that the club has accurate and up-to-date information about its members, which is used to communicate with them and plan events that cater to their interests.
</thinking>

# Car Club Registration Form - Help Guide
## Purpose
The Car Club Registration Form is a crucial part of the membership process for the car club. It collects important information about the member, their vehicle, and their interests, which is used to tailor club activities and events to the members' needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details, including your first name, last name, date of birth, and email address.
2. Provide your contact information, including your phone number and street address.
3. Describe your vehicle, including its year, make, model, and color.
4. Choose your vehicle type (e.g., Muscle Car, Classic/Vintage, Sports Car, etc.).
5. List any modifications or upgrades you have made to your vehicle.
6. Select your membership type (e.g., Individual, Family, Student, etc.).
7. Choose your interests within the club (e.g., Car Shows, Track Days, etc.).
8. Indicate your level of interest in volunteering for events.
9. Select how you heard about the club (e.g., Friend/Member, Social Media, etc.).
10. Provide the name and phone number of an emergency contact.
11. Agree to follow the club rules and code of conduct.
12. Finally, select today's date and click the submit button.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Your first name is an identifier used by the club to address you.
* **Last Name** (`last_name`, `text`, required): Your last name is an identifier used by the club to address you.
* **Date of Birth** (`date_of_birth`, `date`, required): This is your birthdate.
* **Email Address** (`email`, `email`, required): This is the primary email address used for club communications.
* **Phone Number** (`phone_number`, `text`, required): This is your best contact number.
* **Street Address** (`address`, `text`, required): This is your mailing address.
* **City** (`city`, `text`, required): This is your city.
* **State** (`state`, `text`, required): This is your state or province.
* **ZIP Code** (`zip_code`, `text`, required): This is your ZIP or postal code.
* **Vehicle Year** (`vehicle_year`, `text`, required): This is the year of your primary car.
* **Vehicle Make** (`vehicle_make`, `text`, required): This is the manufacturer of your car.
* **Vehicle Model** (`vehicle_model`, `text`, required): This is the model of your car.
* **Vehicle Color** (`vehicle_color`, `text`, required): This is the primary color of your car.
* **VIN (Optional)** (`vehicle_vin`, `text`, required false): This is your Vehicle Identification Number.
* **Vehicle Type** (`vehicle_type`, `select_one`, required): This is the type of car you have (e.g., Muscle Car, Classic/Vintage, Sports Car, etc.).
* **Modifications** (`modifications`, `text`, required false): This is a field to list any modifications or upgrades you have made to your vehicle.
* **Club Membership Details** (`club_membership`, `note`, required false): This is a field to provide more information about your membership preferences.
* **Membership Type** (`membership_type`, `select_one`, required): This is the type of membership you choose (e.g., Individual, Family, Student, etc.).
* **Club Interests** (`interests`, `select_multiple`, required): This is the list of activities within the club that interest you.
* **Volunteer Interest** (`volunteer_interest`, `select_one`, required): This indicates your level of interest in volunteering for events.
* **How Did You Hear About Us** (`how_heard_about_us`, `select_one`, required false): This is how you heard about the club.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required): This is the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): This is the number of your emergency contact.
* **Club Rules Agreement** (`terms_agreement`, `select_one`, required): This is your agreement to follow club rules and codes of conduct.
* **Registration Date** (`registration_date`, `date`, required): This is today's date. 

Note: The fields with an asterisk (*) at the end of the label indicate a required field.
