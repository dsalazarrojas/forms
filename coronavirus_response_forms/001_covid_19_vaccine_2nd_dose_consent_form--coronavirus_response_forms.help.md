<thinking>...</thinking>

# COVID 19 Vaccine 2nd Dose Consent Form - Help Guide
## Purpose
This form is designed to help individuals provide information and consent for the administration of the COVID-19 vaccine 2nd dose. It is intended to ensure that individuals are aware of any potential risks and allergies associated with the vaccine and confirm their consent to receive the vaccine.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal information, including your first name, last name, date of birth, email address, and phone number.
2. Answer the medical history questions, including whether you have any allergies to vaccine components, if you have had an adverse reaction to a previous vaccine, and if you are immunocompromised.
3. Confirm that you have read and understood the vaccine information provided.
4. Sign the consent section by typing your full name and date of consent.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it appears on your identification.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YY.
* **Email Address** (`email_address`, email, required): Enter your valid email address where you can be contacted.
* **Phone Number** (`phone_number`, text, required): Enter your phone number where you can be contacted.
* **Do you have any allergies to vaccine components?** (`have_allergies`, select_one, required): Please select 'Yes' if you have any allergies, 'No' if you do not, or 'Unknown' if you are unsure.
* **If yes, please describe** (`allergy_details`, text, optional): If you selected 'Yes', please describe your allergies.
* **Current Medications** (`current_medications`, text, optional): List any medications you are currently taking.
* **Have you had an adverse reaction to any previous vaccine?** (`previous_vaccine_reaction`, select_one, required): Please select 'Yes' if you have had an adverse reaction, 'No' if you have not, or 'Unknown' if you are unsure.
* **If yes, please describe the reaction** (`reaction_details`, text, optional): If you selected 'Yes', please describe the reaction.
* **Are you immunocompromised?** (`immunocompromised`, select_one, required): Please select 'Yes' if you are immunocompromised, 'No' if you are not, or 'Unknown' if you are unsure.
* **Consent Section: I have read and understood the vaccine information provided** (`read_information`, select_one, required): Please select 'Yes' to confirm that you have read and understood the vaccine information.
* **Consent Section: I consent to receive the COVID-19 vaccine 2nd dose** (`consent_vaccine`, select_one, required): Please select 'Yes' to confirm your consent.
* **Full Name - Signature** (`consent_signature`, text, required): Please type your full name to confirm your consent.
* **Date of Consent** (`consent_date`, date, required): Enter the date of your consent in the format MM/DD/YY.
