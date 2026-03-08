# COVID 19 Vaccine Wait List Sign Up Form - Help Guide

## Purpose
This form is intended for individuals seeking to join the COVID-19 vaccine wait list. It collects essential information to determine the priority and schedule for vaccine administration.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your full name in the "Full Name" field.
2. Enter your date of birth in the "Date of Birth" field in the format MM/DD/YYYY.
3. Provide your email address for wait list notification in the "Email Address" field.
4. Enter your phone number in the "Phone Number" field, which will be used for appointment confirmation.
5. Choose your preferred contact method in the "Preferred Contact Method" field.
6. Provide your street address in the "Street Address" field.
7. Enter the city where you reside in the "City" field.
8. Enter the state where you reside in the "State" field.
9. Enter your ZIP code in the "ZIP Code" field.
10. Indicate your current COVID-19 vaccination status in the "Vaccination Status" field.
11. Select your vaccine type preference, if any, in the "Vaccine Type Preference" field.
12. Choose the dose you are seeking in the "Dose Being Sought" field.
13. If you have a priority status, select the reason in the "Priority Status" field.
14. If you have any known allergies, provide them in the "Known Allergies" field.
15. If you have any serious medical conditions, provide them in the "Medical Conditions" field.
16. Choose your preferred appointment window in the "Preferred Appointment Window" field.
17. If you require transportation assistance, select the option in the "Need Transportation Assistance" field.
17. Finally, confirm your consent to join the vaccine wait list by selecting "Yes, I consent" in the "Consent" field.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, text, **required**): Enter your full name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, date, **required**): Enter your date of birth in the MM/DD/YYYY format.
* **Email Address** (`email`, email, **required**): Provide a valid email address for wait list notification.
* **Phone Number** (`phone`, text, **required**): Enter a phone number for appointment confirmation.
* **Preferred Contact Method** (`preferred_contact`, select_one, **required**): Choose how you want to be contacted for appointments (Email, Phone call, Text message).
* **Street Address** (`street_address`, text, **required**): Enter your street address where you reside.
* **City** (`city`, text, **required**): Enter the city where you reside.
* **State** (`state`, text, **required**): Enter the state where you reside.
* **ZIP Code** (`zip_code`, text, **required**): Enter your ZIP code.
* **Vaccination Status** (`vaccination_status`, select_one, **required**): Indicate your current COVID-19 vaccination status (Unvaccinated, One dose received, Fully vaccinated, Boosted).
* **Vaccine Type Preference** (`vaccine_preference`, select_one, **optional**): Choose your preferred vaccine type (Pfizer-BioNTech, Moderna, Johnson & Johnson, No preference).
* **Dose Being Sought** (`dose_seeking`, select_one, **required**): Choose the dose you are seeking (First dose, Second dose, Booster dose, Additional booster).
* **Priority Status** (`priority_status`, select_one, **optional**): If you have a priority status, select the reason (Healthcare worker, Essential worker, Age 65 or older, Medical condition, No priority).
* **Known Allergies** (`allergies`, text, **optional**): If you have any known allergies, provide them.
* **Medical Conditions** (`medical_conditions`, text, **optional**): If you have any serious medical conditions, provide them.
* **Preferred Appointment Window** (`appointment_availability`, select_one, **required**): Choose your preferred appointment window (As soon as possible, Weekday mornings, Weekday afternoons, Weekends, Flexible).
* **Need Transportation Assistance** (`transportation_needed`, select_one, **optional**): If you require transportation assistance, select the option.
* **Consent** (`consent`, select_one, **required**): Confirm your consent to join the vaccine wait list (Yes, I consent, No, I do not consent).
