# Club Membership Registration Form - Help Guide
## Purpose
The Club Membership Registration Form is a tool for individuals to register their interest in joining a club. It gathers essential information about the individual, including their personal details, club preferences, and communication preferences.

## How To Complete This Form

1. Fill in your First Name, Last Name, and Email Address, as these are all required fields.
2. Select the club you are interested in joining from the Club Selection dropdown menu.
3. Choose a desired membership start date, which will determine when your membership begins.
4. If you have experience with the club, select the relevant level from the Experience Level in Club Activity dropdown menu.
5. If you have an emergency contact, provide their name and phone number.
6. Acknowledge any required waivers by selecting "Yes, I Acknowledge" from the dropdown menu.
7. Indicate your preferred communication method and whether you want to subscribe to the club newsletter.
8. Provide any additional information you think is relevant to your membership.
9. Finally, select "I Consent" to agree to data collection and use.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email Address** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone_number`, text, optional): If you have an emergency contact, enter their phone number.
* **Club Selection** (`club_selection`, select_one, required): Select the club you are interested in joining.
* **Desired Membership Start Date** (`membership_start_date`, date, required): Choose when you would like your membership to begin.
* **Membership Year** (`membership_year`, number, optional): If applicable, select the academic or fiscal year you are registering for.
* **Experience Level in Club Activity** (`experience_level`, select_one, optional): Select your level of experience in the club activity.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): If you have an emergency contact, enter their name.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): If you have an emergency contact, enter their phone number.
* **I Acknowledge Any Required Waivers** (`waiver_acknowledgement`, select_one, required): Acknowledge any required waivers.
* **Preferred Communication Method** (`communication_preference`, select_one, optional): Select how you would like to be contacted.
* **Subscribe to Club Newsletter** (`newsletter_subscription`, select_one, optional): Indicate whether you want to subscribe to the club newsletter.
* **Additional Information** (`additional_info`, text, optional): Provide any other relevant information about your membership.
* **I Consent to Data Collection and Use** (`consent_checkbox`, select_one, required): Select "I Consent" to agree to data collection and use.
