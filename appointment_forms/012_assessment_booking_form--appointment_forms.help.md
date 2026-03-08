# Assessment Booking Form - Help Guide
## Purpose
The Assessment Booking Form is designed to gather information from individuals who want to book an assessment with the organization. This form is intended for those who have not had the assessment before and need to provide information to facilitate the booking process.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your name as it appears on your identification documents.
2. Enter your date of birth in MM-DD-YYYY format.
3. Provide your email address for confirmation and reminder purposes.
4. Enter your phone number for easy contact.
5. Enter your full address for the assessment location.
6. Select the type of assessment you need.
7. Choose your preferred date for the assessment.
8. Select an alternative date if the first choice is not available.
9. Choose your preferred time of day for the assessment.
10. Select your location preference for the assessment.
11. Indicate if you have had the assessment before.
12. If necessary, provide any special needs or accommodations required.
13. Select your preferred language for the assessment.
14. Provide the name of the person who referred you to the organization.
15. If applicable, enter your insurance provider and ID number.
16. Choose your payment method.
17. Enter the name of the emergency contact person.
18. Enter the contact number of the emergency contact person.
19. Confirm that you understand and agree to the assessment terms.
20. Acknowledge that you have read and agreed to the privacy policy.
21. Enter today's date for the booking date.

## Field-by-Field Explanation
- **Full Name** (`applicant_name`, `text`, required): Enter your full name as it appears on your identification documents.
- **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in MM-DD-YYYY format.
- **Email Address** (`email`, `email`, required): Enter the email address where you can be reached for confirmation and reminder purposes.
- **Phone Number** (`phone`, `text`, required): Enter your phone number for easy contact.
- **Mailing Address** (`address`, `text`, required): Enter your full address for the assessment location.
- **Type of Assessment** (`assessment_type`, `select_one`, required): Select the type of assessment you need.
- **Preferred Assessment Date** (`preferred_date`, `date`, required): Choose your preferred date for the assessment.
- **Alternative Date** (`alternative_date`, `date`, optional): Select an alternative date if the first choice is not available.
- **Preferred Time of Day** (`preferred_time`, `select_one`, required): Choose your preferred time of day for the assessment.
- **Location Preference** (`location_preference`, `select_one`, required): Select your location preference for the assessment.
- **Have You Had This Assessment Before** (`previous_assessments`, `select_one`, required): Indicate if you have had the assessment before.
- **Special Needs or Accommodations** (`special_needs`, `text`, optional): If necessary, provide any special needs or accommodations required.
- **Language Preference** (`language_preference`, `select_one`, required): Select your preferred language for the assessment.
- **Referral Source** (`referral_source`, `text`, optional): Provide the name of the person who referred you to the organization.
- **Insurance Provider** (`insurance_provider`, `text`, optional): If applicable, enter your insurance provider and ID number.
- **Payment Method** (`payment_method`, `select_one`, required): Choose your payment method.
- **Emergency Contact Name** (`emergency_contact_name`, `text`, required): Enter the name of the person to contact if needed.
- **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): Enter the contact number of the emergency contact person.
- **I Agree to Assessment Terms** (`consent_agreement`, `select_one`, required): Confirm that you understand and agree to the assessment terms.
- **I Acknowledge Privacy Policy** (`privacy_acknowledgment`, `select_one`, required): Acknowledge that you have read and agreed to the privacy policy.
- **Booking Date** (`booking_date`, `date`, required): Enter today's date for the booking date.
