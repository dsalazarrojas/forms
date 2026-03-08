# Blood Donation Check In Form - Help Guide

## Purpose
The Blood Donation Check In Form is used to collect vital information from blood donors during the check-in process. This information includes personal details, medical history, and contact information, which is essential for the smooth processing of the donation.

## How To Complete This Form
1. Please answer the questions accurately and truthfully.
2. If you have already completed this form in the current session, do not fill it out again.
3. Ensure that all required fields are completed before proceeding.

## Field-by-Field Explanation

### Page 1: Blood Donation Check-In Form

* **Full Name** (`donor_name`, `text`, required): Please enter your full name as it appears on your ID.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in MM/DD/YYYY format.
* **Donor ID Number** (`donor_id`, `text`, optional): If you have a donor ID number, please enter it.
* **Email Address** (`email`, `email`, required): Enter your email address for our records.
* **Phone Number** (`phone`, `text`, required): Enter your contact phone number.

### Page 2: Contact Information

* **Current Address** (`address`, `text`, required): Enter your current street address.
* **City** (`city`, `text`, required): Enter the city where you currently reside.
* **State** (`state`, `text`, required): Enter the state where you currently reside.
* **ZIP Code** (`zip_code`, `text`, required): Enter your current ZIP code.

### Page 3: Medical Information

* **Walk-In Donor** (`walk_in`, `select_one`, required): Indicate if you have a scheduled appointment or are a walk-in donor.
* **Donation Type Today** (`donation_type_today`, `select_one`, required): Select the type of donation you will be making today (e.g., Whole Blood, Platelets, Plasma, Power Red).
* **Feeling Well Today** (`feeling_well`, `select_one`, required): Indicate if you are feeling well or have any health concerns.
* **Recent Travel** (`traveled_recently`, `select_one`, required): Indicate if you have traveled outside the country in the past 3 months.
* **Current Medications** (`medications`, `select_one`, required): Indicate if you are currently taking any medications.
* **Medication List** (`medication_list`, `text`, optional): If you are taking medications, list them here.
* **Have You Eaten Today** (`eaten_today`, `select_one`, required): Indicate if you have eaten within the past 3 hours.
* **Hydration Status** (`hydrated`, `select_one`, required): Indicate your hydration status.
* **Hours of Sleep Last Night** (`sleep_hours`, `number`, required): Enter the number of hours you slept last night.

### Page 4: Additional Information

* **First Time Donor** (`first_time`, `select_one`, required): Indicate if this is your first time donating.
* **Previous Adverse Reactions** (`previous_reactions`, `select_one`, required): Indicate if you have had any issues with past donations.
* **Emergency Contact** (`emergency_contact`, `text`, required): Enter the name and phone number of your emergency contact.
* **Special Requests** (`special_requests`, `text`, optional): If you have any special requests or accommodations, list them here.
