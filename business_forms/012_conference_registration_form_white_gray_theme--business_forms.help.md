<thinking>
This form is for conference registration, and it seems to be a comprehensive form covering attendee information, contact details, package selection, workshop choices, meal preferences, dietary restrictions, and agreement to terms and conditions. I will assume that the form is intended for a conference or event registration process, possibly for attendees or participants. I will focus on providing clear explanations for each field, taking into account the provided YAML structure. I will also try to cover all the fields, considering their types and requirements.</thinking>

# Conference Registration Form White Gray Theme - Help Guide
## Purpose
This form is designed to gather necessary information from attendees for conference registration. It includes fields for personal details, contact information, package selection, workshop preferences, meal choices, and agreement to terms and conditions.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your first name, last name, email address, and contact phone number in the provided fields.
2. Select your organization name and position title.
3. Provide your mailing address, including city, state, and postal code.
4. Choose your country of residence.
5. Select your registration package type.
6. Select the primary focus area of the conference (track).
7. Choose your workshop preferences.
8. Select your meal preference.
9. If you have any food allergies, please specify them in the "Food Allergies" field.
10. If you have any special requests, please mention them in the "Special Requests" field.
11. Tell us how you heard about the conference.
12. Decide if you want to subscribe to our newsletter.
13. Finally, agree or disagree to the terms and conditions.

## Field-by-Field Explanation

* **First Name** (`attendee_first_name`, text, required): Enter your given name.
* **Last Name** (`attendee_last_name`, text, required): Enter your family name.
* **Email Address** (`email_address`, email, required): Enter your email address where we will send confirmation and updates.
* **Contact Phone** (`contact_phone`, text, required): Enter your contact phone number for daytime communication.
* **Organization Name** (`organization_name`, text, required): Enter your company or institution name.
* **Position Title** (`position_title`, text, required): Enter your job title.
* **Mailing Address** (`mailing_address`, text, required): Enter your full street address for mail and package delivery.
* **City** (`city`, text, required): Enter your city of residence.
* **State or Province** (`state`, text, required): Enter your state or province of residence.
* **ZIP or Postal Code** (`zip_code`, text, required): Enter your postal code for mail and package delivery.
* **Country** (`country`, select_one, required): Select your country of residence from the provided options.
* **Registration Type** (`registration_type`, select_one, required): Choose your package type from the available options.
* **Conference Track** (`conference_track`, select_one, required): Select the primary focus area of the conference (track).
* **Workshop Selection** (`workshop_selection`, select_multiple, optional): Choose one or more of the optional workshops available.
* **Lunch Preference** (`lunch_preference`, select_one, required): Select your meal preference from the options.
* **Food Allergies** (`allergies`, text, optional): If you have any food allergies, please specify them here.
* **Special Requests** (`special_requests`, text, optional): If you have any special requests, please mention them here.
* **How Did You Hear About Us** (`referral_source`, select_one, optional): Help us improve by telling us how you heard about the conference.
* **Subscribe to Newsletter** (`newsletter_signup`, select_one, required): Decide if you want to subscribe to our newsletter for updates and information.
* **I Agree to Terms and Conditions** (`terms_agreement`, select_one, required): Agree or disagree to our terms and conditions.
