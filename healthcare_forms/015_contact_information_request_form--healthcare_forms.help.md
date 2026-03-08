# Contact Information Request Form - Help Guide
## Purpose
The Contact Information Request Form is a tool for medical facilities to gather essential patient information, including contact details, medical history, and preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name as the patient.
2. Enter your date of birth.
3. Choose your gender.
4. Provide your contact phone number.
5. Enter your contact email address.
6. Choose the best time to contact you.
7. Briefly describe your primary reason for consulting the clinic.
8. If applicable, enter your insurance provider.
9. Indicate how you heard about the clinic.
10. Enter the name and phone number of an emergency contact person.
11. Authorize the clinic to leave voicemails if needed.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter your full name as the patient.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format `YYYY-MM-DD`.
* **Gender** (`patient_gender`, select_one, required): Choose your gender from the options provided.
* **Contact Phone Number** (`contact_phone`, text, required): Enter your contact phone number.
* **Contact Email Address** (`contact_email`, email, required): Enter your email address.
* **Best Time to Contact** (`preferred_contact_time`, select_one, optional): Choose the best time to contact you from the options provided.
* **Primary Reason for Consultation** (`reason_for_request`, text, required): Briefly describe the main reason for consulting the clinic.
* **Insurance Provider** (`insurance_provider`, text, optional): If known, enter your insurance provider.
* **How did you hear about our clinic?** (`referral_source`, select_one, optional): Indicate how you heard about the clinic from the options provided.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of an emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of an emergency contact person.
* **Authorize to Leave Voicemails** (`consent_to_call`, select_one, required): Indicate whether you authorize the clinic to leave voicemails if needed.
