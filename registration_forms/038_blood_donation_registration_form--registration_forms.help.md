# Blood Donation Registration Form - Help Guide
## Purpose

The Blood Donation Registration Form is used to collect information from potential blood donors to help us determine their eligibility and schedule for donation. Please answer the following questions to register your interest in donating blood.

## How To Complete This Form

1. Fill in your full name and contact information (email and phone number) to get started.
2. Enter your date of birth and age to confirm your eligibility.
3. Select your gender and blood type if known.
4. Choose your preferred donation type and location.
5. Select your availability schedule for donation.
6. If applicable, enter your employer or school information.
7. Let us know how you heard about us.
8. Provide the name and contact information of your emergency contact person.
9. Add any additional information that may be helpful for us.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Enter your legal name as it appears on your identification documents.
* **Email Address** (`email`, email, required): Enter a valid email address where you can be reached for communications.
* **Phone Number** (`phone`, text, required): Enter your best contact number where we can reach you.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Age** (`age`, number, required): Enter your age, which must be 17 or older.
* **Gender** (`gender`, select_one, required): Select your gender to help us keep accurate records.
* **Address Line 1** (`address_line_1`, text, required): Enter your street address.
* **Address Line 2** (`address_line_2`, text, optional): Enter your apartment or suite number.
* **City** (`city`, text, required): Enter your city.
* **State** (`state`, text, required): Enter your state.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Weight in Pounds** (`weight_lbs`, number, required): Enter your current weight in pounds.
* **Do You Know Your Blood Type** (`blood_type_known`, select_one, required): If you know your blood type, select 'True', otherwise select 'False'.
* **Blood Type** (`blood_type`, select_one, optional): Select your blood type if you know it.
* **First Time Donor** (`first_time_donor`, select_one, required): Select 'True' if this is your first donation.
* **Number of Previous Donations** (`donations_count`, number, optional): Enter the number of times you have donated blood if applicable.
* **Preferred Donation Type** (`preferred_donation_type`, select_one, required): Select the type of donation you prefer.
* **Preferred Donation Center** (`preferred_center`, select_one, required): Choose the location where you would like to donate.
* **Availability** (`availability_schedule`, select_multiple, required): Select the days and times you are available for donation.
* **Employer or School** (`employer`, text, optional): Enter your employer or school name if applicable.
* **How Did You Hear About Us** (`referral_source`, select_one, optional): Let us know how you heard about us.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the contact number of your emergency contact person.
* **Additional Information** (`additional_info`, text, optional): Provide any other details that may be helpful for us.

Note: Please make sure to answer all required fields to complete the registration form.
