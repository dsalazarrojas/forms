# Community Center Workshop Enrollment Form - Help Guide
## Purpose

The Community Center Workshop Enrollment Form is designed for participants to register in various workshops offered by the community center. This form is used for enrollment confirmation and workshop organization purposes.

## How To Complete This Form

1. Fill out all required fields marked with `required: true` to ensure accurate and complete information is submitted.
2. Select the workshops you are interested in from the provided options.
3. Make sure to specify any physical accessibility needs or dietary restrictions if applicable.
4. Provide a digital signature to confirm your enrollment.

## Field-by-Field Explanation

* **Full Name of Participant** (`participant_full_name_work`, text, `required: true`): Please enter your full name as it appears on your government-issued ID.
* **Email Address** (`participant_email_work`, email, `required: true`): Enter your valid email address to receive workshop details and confirmation.
* **Primary Contact Phone Number** (`participant_phone_work`, text, `required: true`): Enter your primary phone number for easy contact.
* **Date of Birth** (`participant_dob_work`, date, `required: true`): Enter your date of birth for age-specific workshops.
* **Workshop Category** (`primary_workshop_category_work`, select_one, `required: true`): Select the category of workshop you are interested in.
	+ Arts and Crafts
	+ Health and Wellness
	+ Technology and Digital Skills
	+ Personal Development
	+ Cooking and Nutrition
	+ Gardening and Sustainability
* **Specific Workshop Name** (`specific_workshop_name_work`, text, `required: true`): Enter the name of the workshop you have selected (e.g., Beginner's Pottery, Yoga for Seniors, Intro to Coding).
* **Preferred Workshop Date/Session** (`workshop_session_date_work`, date, `required: true`): Select the date and time for your preferred workshop session.
* **Preferred Workshop Time** (`workshop_session_time_work`, select_one, `required: true`): Select the time slot for your preferred workshop session.
	+ Morning (9am - 12pm)
	+ Afternoon (12pm - 4pm)
	+ Evening (4pm - 8pm)
* **Do you have any physical accessibility needs** (`physical_accessibility_needs_work`, text, `required: false`): If applicable, describe any physical accessibility needs for a smooth experience.
* **Any dietary restrictions (for cooking workshops)** (`dietary_restrictions_workshop_work`, text, `required: false`): If you have any dietary restrictions, enter them here (e.g., vegan, gluten-free).
* **Describe any previous experience relevant to this workshop** (`previous_exp_workshop_work`, text, `required: false`): Share any relevant experience for a better workshop experience.
* **I agree to abide by the community center's workshop rules and policies** (`workshop_rules_acknowledgment_work`, select_one, `required: true`): Agree to abide by the community center's rules and policies for a smooth experience.
	+ I agree
	+ Other
* **Date of Enrollment** (`submission_date_final_work`, date, `required: true`): Record the date of your enrollment.
* **Digital Signature (Type Full Name)** (`enrollment_signature_digital_work`, text, `required: true`): Enter your digital signature as per your full name.
* **I would like to receive the community center's newsletter** (`newsletter_opt_in_work`, select_one, `required: true`): Stay updated on our programs and events with our newsletter.
	+ Yes, sign me up!
	+ No, thank you
