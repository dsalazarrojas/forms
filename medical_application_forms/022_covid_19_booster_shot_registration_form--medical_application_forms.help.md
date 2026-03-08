<thinking>Form purpose: 
This form is intended to collect information from patients who are eligible for the COVID-19 booster shot. It includes fields for personal identification (patient name, date of birth, email, phone number, and address), insurance information, medical history, vaccination details (initial vaccine type, date of initial vaccination, booster eligibility status, and number of previous boosters), and appointment preferences. The form aims to ensure that patients provide accurate and comprehensive information, which will be used to assess their eligibility for the booster shot and schedule their appointment accordingly.</thinking>

# COVID 19 Booster Shot Registration Form - Help Guide
## Purpose
This form is designed to collect information from patients who are eligible for the COVID-19 booster shot. Please fill in the required fields to register for a booster shot.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your patient name and date of birth.
2. Provide your email address and phone number for contact purposes.
3. Enter your street address and postal code.
4. If applicable, provide your insurance information (carrier and member ID).
5. If you have a primary care physician, please enter their name.
6. Answer the following questions:
   * What type of initial COVID-19 vaccine did you receive?
   * When did you complete the primary series?
   * Do you qualify for a booster dose (6+ months after primary or 3+ months if immunocompromised)?
   * How many previous booster doses have you received?
   * Are you due for a booster dose?
7. If you have any medical conditions or known vaccine allergies, please provide details.
8. Specify your preferred booster vaccine type (if different from your initial vaccine).
9. Choose a preferred appointment date.
10. Select a preferred appointment time.
11. If you have any accessibility needs (wheelchair, parking, etc.), please let us know.
12. If you have any allergies to vaccine components, provide details.
13. If you have any relevant medical conditions, provide details.
14. Finally, confirm your registration date and time.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter your full legal name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Email Address** (`email_address`, email, required): Enter your personal email address for contact purposes.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Street Address** (`street_address`, text, required): Enter your street address.
* **City** (`city`, text, required): Enter the city where you reside.
* **State/Province** (`state_province`, text, required): Enter the state or province where you reside.
* **Postal Code** (`postal_code`, text, required): Enter your postal code.
* **Insurance Carrier** (`insurance_carrier`, text, optional): If you have health insurance, please enter the name of your carrier.
* **Insurance Member ID** (`insurance_member_id`, text, optional): If you have health insurance, please enter your member ID.
* **Primary Care Physician** (`primary_care_physician`, text, optional): If you have a primary care physician, please enter their name.
* **Initial COVID-19 Vaccine Type** (`initial_vaccine_type`, select_one, required): Select the type of vaccine you initially received (Pfizer, Moderna, Johnson and Johnson, AstraZeneca, or Other).
* **Date of Initial Vaccination** (`initial_vaccine_date`, date, required): Enter the date you completed the primary series.
* **Booster Eligibility Status** (`booster_eligibility`, select_one, required): Select your eligibility status (Yes - 6+ months after primary, Yes - 3+ months if immunocompromised, Not sure, or Need to check).
* **Number of Previous Booster Doses** (`previous_boosters`, number, optional): If you have received previous boosters, enter the number.
* **Preferred Booster Vaccine Type** (`preferred_vaccine`, select_one, optional): If different from your initial vaccine, select a preferred vaccine type (Pfizer, Moderna, Johnson and Johnson, or No preference).
* **Preferred Appointment Date** (`preferred_appointment_date`, date, required): Choose a preferred appointment date for your booster shot.
* **Preferred Time** (`preferred_time`, select_one, optional): Select a preferred appointment time (Morning - 8am to 12pm, Afternoon - 12pm to 5pm, Evening - 5pm to 8pm, or Flexible).
* **Preferred Clinic Location** (`location_preference`, text, optional): If multiple locations are available, please specify a preferred location.
* **Accessibility Needs** (`accessibility_needs`, text, optional): If you have any accessibility needs (wheelchair, parking, etc.), please let us know.
* **Known Vaccine Allergies** (`allergies`, text, optional): If you have known allergies to vaccine components, provide details.
* **Relevant Medical Conditions** (`medical_conditions`, text, optional): If you have any relevant medical conditions (diabetes, heart disease, cancer, etc.), please provide details.
* **Registration Date** (`registration_date`, date, required): This field will be populated automatically upon form submission.
