# COVID 19 Vaccination Clinic Registration Form - Help Guide
## Purpose
The COVID 19 Vaccination Clinic Registration Form is a crucial document that helps the clinic staff understand your medical history, contact information, and preferences for a smooth and efficient vaccination process.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your full name and date of birth in the "Patient Full Name" and "Date of Birth" fields respectively.
2. Ensure you provide your age, which is a required field.
3. Select your gender from the given options.
4. Enter your contact information, including email and phone numbers.
5. Provide your current address and other relevant contact information.
6. If you have any chronic diseases or medical conditions, specify them in the "Chronic Diseases" field.
7. Provide your insurance status and ID number if applicable.
8. Answer whether you have any chronic diseases or not.
9. If yes, specify the diseases in the "Disease Details" field.
10. Answer whether you have any allergies.
11. List any current medications you are taking.
12. Answer whether you are currently pregnant or breastfeeding.
13. Select your preferred vaccine type.
14. Provide any accessibility needs or accommodations.
15. Finally, confirm your consent to COVID-19 vaccination and provide accurate information.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter your full name as per your identification documents.
* **Date of Birth** (`patient_dob`, date, required): Enter your date of birth in the YYYY-MM-DD format.
* **Age** (`patient_age`, number, required): Enter your current age.
* **Gender** (`gender`, select_one, required): Select your gender from the given options.
* **Contact Information** (`contact_section`, note, optional): Enter your contact information, which includes your email address and phone number(s). Please ensure the email and phone numbers are accurate.
* **Email Address** (`email`, email, required): Enter your email address where clinic staff can contact you.
* **Primary Phone Number** (`phone_primary`, text, required): Enter your primary phone number where clinic staff can contact you.
* **Secondary Phone Number** (`phone_secondary`, text, optional): Enter your secondary phone number if you have one.
* **Street Address** (`address_street`, text, required): Enter your street address.
* **City** (`address_city`, text, required): Enter the city name.
* **State or Province** (`address_state`, text, required): Enter the state or province name.
* **Postal or Zip Code** (`address_zip`, text, required): Enter the postal or zip code.
* **Medical History** (`medical_section`, note, optional): Provide any medical history or conditions that may be relevant to your vaccination.
* **Insurance Status** (`insurance_status`, select_one, required): Select your insurance status.
* **Insurance ID Number** (`insurance_id`, text, optional): Enter your insurance ID number if you are insured.
* **Do you have chronic diseases** (`chronic_diseases`, select_one, required): Answer whether you have chronic diseases or not.
* **If yes, please specify** (`disease_details`, text, optional): If yes, list the diseases in the "Disease Details" field.
* **Known allergies** (`allergies`, text, optional): List any known allergies.
* **Current Medications** (`current_medications`, text, optional): List any current medications you are taking.
* **Are you currently pregnant** (`pregnancy`, select_one, required): Answer whether you are currently pregnant or not.
* **Are you currently breastfeeding** (`breastfeeding`, select_one, required): Answer whether you are currently breastfeeding or not.
* **Vaccination History** (`vaccination_section`, note, optional): Provide any vaccination history.
* **Have you had COVID-19 before** (`previous_covid`, select_one, required): Answer whether you have had COVID-19 before.
* **If yes, when were you diagnosed** (`covid_date`, date, optional): If yes, enter the date when you were diagnosed with COVID-19.
* **Vaccine Preference** (`vaccine_preference`, select_one, required): Select your preferred vaccine type.
* **Appointment Preferences** (`appointment_section`, note, optional): Provide your preferred appointment date and time.
* **Preferred Appointment Date** (`preferred_date`, date, optional): Enter your preferred appointment date.
* **Preferred Appointment Time** (`preferred_time`, time, optional): Enter your preferred appointment time.
* **Accessibility Needs** (`accessibility_needs`, text, optional): Provide any accessibility needs or accommodations.
* **Consent** (`consent`, select_one, required): Confirm your consent to COVID-19 vaccination and ensure you provide accurate information.
