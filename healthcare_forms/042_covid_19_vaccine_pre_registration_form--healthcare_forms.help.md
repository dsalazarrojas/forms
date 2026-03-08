<thinking>...</thinking>

# COVID 19 Vaccine Pre Registration Form - Help Guide
## Purpose
This form is designed to collect pre-registration information for COVID-19 vaccinations. It helps healthcare providers and administrators to understand your vaccination preferences and medical history before administering the vaccine. Please provide accurate and up-to-date information to ensure a smooth and efficient vaccination process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields marked as "required" (indicated by an asterisk \*).
2. Enter your personal and contact information, including your name, date of birth, insurance status, and emergency contact details.
3. Provide your preferred vaccination location, date, and time.
4. Answer questions about your medical history, allergies, and previous COVID-19 diagnosis.
5. Select your vaccine type preference and reason for registration.
6. Review and confirm the accuracy of the information provided.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, \*): Enter your full name as it appears on your official identification documents.
* **Date of Birth** (`patient_dob`, date, \*): Enter your date of birth in the format MM/DD/YYYY.
* **Last 4 Digits of Social Security Number** (`patient_ssn`, text, optional): Enter the last 4 digits of your Social Security Number, if applicable.
* **Gender** (`gender`, select_one, \*): Select your gender from the provided options (Male, Female, Non-binary, Prefer to specify, Prefer not to answer).
* **Email Address** (`email`, email, \*): Enter your email address where you can be contacted for vaccination scheduling and updates.
* **Primary Phone Number** (`phone_primary`, text, \*): Enter your primary phone number for communication and scheduling.
* **Secondary Phone Number** (`phone_secondary`, text, optional): Enter your secondary phone number, if you have one.
* **Street Address** (`address`, text, \*): Enter your street address where you can be reached for vaccination.
* **City** (`city`, text, \*): Enter the city where you can be reached for vaccination.
* **State** (`state`, text, \*): Enter the state where you can be reached for vaccination.
* **Zip Code** (`zip_code`, text, \*): Enter your zip code for vaccination location purposes.
* **Preferred Vaccination Location** (`vaccination_location`, text, optional): Select the preferred location for vaccination.
* **Preferred Vaccination Date** (`preferred_date`, date, optional): Select the preferred date for vaccination.
* **Preferred Vaccination Time** (`preferred_time`, time, optional): Select the preferred time for vaccination.
* **Vaccine Type Preference** (`vaccine_preference`, select_one, \*): Select your preferred vaccine type (Pfizer, Moderna, Johnson and Johnson, No preference).
* **Reason for Registration** (`registration_reason`, select_one, \*): Select the reason for your registration (First dose, Second dose, Booster dose, Unsure).
* **Insurance Status** (`insurance_status`, select_one, \*): Select your insurance status (Insured, Uninsured, Medicaid, Medicare, Self-pay).
* **Insurance Provider Name** (`insurance_provider`, text, optional): Enter your insurance provider name, if applicable.
* **Insurance Member ID** (`insurance_member_id`, text, optional): Enter your insurance member ID, if applicable.
* **Allergies to medications or vaccine components** (`allergies`, text, optional): Enter any allergies or sensitivities to medications or vaccine components.
* **Chronic medical conditions** (`chronic_conditions`, text, optional): Enter any chronic medical conditions you have.
* **Current medications** (`current_medications`, text, optional): Enter any current medications you are taking.
* **Immunocompromised status** (`immunocompromised`, select_one, \*): Select your immunocompromised status (True, False, Unsure).
* **Pregnant or planning pregnancy** (`pregnancy`, select_one, \*): Select your pregnancy status (True, False, Unsure, Not applicable).
* **Previously diagnosed with COVID-19** (`prior_covid`, select_one, \*): Select if you have previously been diagnosed with COVID-19 (True, False, Unsure).
* **Date of COVID-19 diagnosis** (`covid_diagnosis_date`, date, optional): Enter the date of your COVID-19 diagnosis, if applicable.
* **Emergency Contact Name** (`emergency_contact_name`, text, \*): Enter the name of your emergency contact person.
* **Emergency Contact Phone Number** (`emergency_contact_phone`, text, \*): Enter the phone number of your emergency contact person.
* **I confirm the information provided is accurate** (`registration_acknowledgment`, select_one, \*): Select to confirm that the information provided is accurate (I agree, I do not agree).
