<thinking>Before we begin, let's make sure that the form purpose is clear and we are not duplicating any information. This form is for participants to register for a beer tasting tournament. The goal is to gather necessary information from the participants, including contact details, eligibility and experience, tournament preferences, and waiver acceptance. Ensure that all required fields are clearly marked and easily accessible.</thinking>

# Beer Tasting Tournament Entry Form - Help Guide
## Purpose
The Beer Tasting Tournament Entry Form is designed for participants to register for a beer tasting tournament. This guide will help you complete the form accurately and efficiently.

## How To Complete This Form

To complete the form, follow these steps:

1. **Fill out the participant contact information**: Enter your full name, email address, and phone number in the provided fields.
2. **Confirm your age and eligibility**: Select "I Confirm" if you are 21 years of age or older, and choose your experience level as a beer taster.
3. **Provide your entry details**: Choose your preferred preliminary judging round and preferred palette cleanser (if applicable).
4. **Acknowledge dietary restrictions and allergies**: If you have any dietary restrictions or allergies, enter them in the text field.
5. **Accept the waiver and pledge**: Confirm that you accept the tournament liability waiver and pledge to drink responsibly.
6. **Confirm your entry fee understanding**: Acknowledge that you understand the non-refundable $25 entry fee.
7. **Sign your name digitally**: Enter your printed name as your digital signature.

## Field-by-Field Explanation

* **Full Name** (`participant_full_name`, `text`, `required`): Enter your full name as it appears on your government-issued identification.
* **Email Address** (`email_address`, `email`, `required`): Enter your valid email address.
* **Phone Number** (`phone_number`, `text`, `required`): Enter your phone number.
* **Date of Birth** (`birth_date`, `date`, `required`): Enter your date of birth.
* **What is your beer tasting experience level?** (`tasting_experience_level`, `select_one`, `required`): Choose your experience level as a beer taster:
	+ Novice / Enthusiast: You have little to no experience with beer tasting.
	+ Intermediate (Frequent taster): You have some experience with beer tasting.
	+ Advanced (Home-brewer): You have experience with home-brewing beer.
	+ Professional (Certified Cicerone / Judge): You are a certified beer judge or cicerone.
* **Have you participated in a tasting tournament before?** (`previous_tournament_participation`, `select_one`, `required`): Select "True" if you have participated in a tasting tournament before, "False" otherwise.
* **Preferred Preliminary Judging Round** (`preferred_judging_round`, `select_one`, `required`): Choose your preferred preliminary judging round:
	+ Friday Evening (6PM)
	+ Saturday Morning (10AM)
	+ Saturday Afternoon (2PM)
* **Preferred Palette Cleanser** (`palette_cleanser_preference`, `select_one`, `optional`): Choose your preferred palette cleanser:
	+ Water and Plain Crackers
	+ Sliced Apples
	+ Lemon Water
	+ None Required
* **Any dietary restrictions or allergies?** (`dietary_restrictions_beer_tasting`, `text`, `optional`): Enter any dietary restrictions or allergies you may have.
* **I accept the tournament liability waiver** (`liability_waiver_acceptance`, `select_one`, `required`): Select "I Accept" to confirm that you accept the liability waiver.
* **I pledge to drink responsibly** (`responsible_drinking_pledge`, `select_one`, `required`): Select "I Pledge" to confirm that you will drink responsibly.
* **I understand the entry fee** (`entry_fee_acknowledgment`, `select_one`, `required`): Select "I Understand" to confirm that you understand the non-refundable $25 entry fee.
* **Digital Signature** (`signature_name`, `text`, `required`): Enter your printed name as your digital signature.
* **Date** (`registration_timestamp`, `date`, `required`): Enter the current date.
