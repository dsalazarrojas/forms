# Add Member Form - Help Guide

## Purpose
The Add Member Form is used to collect information from new members to facilitate their onboarding process. This form captures critical details required to create a member account and assign membership benefits accordingly.

## How To Complete This Form
To complete this form, follow these steps:

1. Read through each page carefully to understand what information is required for each field.
2. Enter your Full Name, Email Address, and Phone Number accurately.
3. Choose your Membership Tier/Type from the provided options.
4. Select your Areas of Interest from the list of available choices.
5. Decide on your Communication Preferences and agree to provide a profile photo and abide by the organization's Code of Conduct.
6. Confirm your Membership Start Date.
7. Optionally, provide your Occupation or Special Skills if you wish to contribute to the club.
8. Optionally, mention how you heard about the organization.
9. Choose whether you are ready to provide a profile photo for the member directory.
10. Finally, submit the form after ensuring all required fields are filled accurately.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, **required**): Enter your full name as it appears on official documents.
* **Email Address** (`email_address`, email, **required**): Type in your primary email address for membership updates and communication.
* **Phone Number** (`phone_number`, text, **required**): Enter your phone number for additional contact methods.
* **Date of Birth** (`date_of_birth`, date, **required**): Enter your date of birth in the format `mm/dd/yyyy`.
* **Membership Tier / Type** (`membership_type`, select_one, **required**): Select from the options to determine your membership level:
	+ Standard Member
	+ Premium Member
	+ Student / Senior Discounted
	+ Corporate Representative
	+ Honorary / Lifetime Member
* **Occupation or Special Skills** (`occupation_skills`, text, **optional**): Mention any occupation or special skills you have that may be beneficial to the organization.
* **Areas of Interest** (`interest_areas`, select_multiple, **optional**): Select from the list to indicate your areas of interest:
	+ Networking Events
	+ Educational Workshops
	+ Community Volunteering
	+ Social Gatherings
	+ Committee Leadership
* **How did you hear about us?** (`referral_source`, text, **optional**): If applicable, mention how you learned about the organization.
* **I am ready to provide a profile photo for the member directory** (`profile_photo_ack`, select_one, **required**): Choose whether you are ready to provide a profile photo.
* **I agree to abide by the organization's Code of Conduct** (`code_of_conduct_ack`, select_one, **required**): Select to agree to the Code of Conduct.
* **Communication Preferences** (`communications_pref`, select_multiple, **optional**): Choose your preferred communication methods:
	+ Monthly Newsletter
	+ Event SMS Alerts
	+ Partner Offers
* **Membership Start Date** (`onboarding_date`, date, **required**): Enter your desired membership start date in the format `mm/dd/yyyy`.
