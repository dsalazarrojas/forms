<thinking>...</thinking>

# COVID 19 Vaccine Card Replacement Form - Help Guide

## Purpose
This form is to replace a lost, damaged, or worn-out COVID-19 vaccine card. It is designed to verify your vaccination information and provide accurate details for the replacement card. Please ensure that the information provided is accurate to ensure a smooth replacement process.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your **Full Name** as it appears on your original vaccine card.
2. Enter your **Date of Birth** in the format of MM/DD/YYYY.
3. Enter your **Email Address** for notification purposes.
4. Provide your **Phone Number** for contact.
5. Select the **Reason for Replacement** from the list of options provided (e.g., Lost, Damaged, Worn-out, Never received original).
6. If you selected a reason that requires additional details, provide an explanation in the **Additional Details** field.
7. For **Number of COVID-19 Doses Received**, select the correct number of doses you've received (e.g., One, Two, Three, Four or more).
8. Select the **First Dose Vaccine Type** from the list provided (e.g., Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Other, Unknown).
9. Enter the **Date of First Dose** in the format of MM/DD/YYYY.
10. If you've received more than one dose, select the **Second Dose Vaccine Type** and enter the **Date of Second Dose** in the format of MM/DD/YYYY.
11. Answer whether you have **Received Booster Doses** (True or False).
12. If you have booster doses, provide details in the **Booster Dose Information** field.
13. Enter the name of your **Healthcare Provider** who administered the vaccines.
14. Provide the **Provider Location** where you were vaccinated (city and state).
15. Select the **Type of Photo ID for Verification** from the list (e.g., Driver License, Passport, State ID, Military ID, Other).
16. Enter your **Mailing Address** where the replacement card should be sent.
17. Provide your **City, State, ZIP Code**.
18. Finally, select **I consent to the replacement request** to confirm the information provided.

## Field-by-Field Explanation
* **Full Name** (`patient_name`, text, **required**): Enter your full name as shown on your original vaccine card.
* **Date of Birth** (`date_of_birth`, date, **required**): Enter your date of birth in the format of MM/DD/YYYY.
* **Email Address** (`email`, email, **required**): Enter your email address for notification purposes.
* **Phone Number** (`phone`, text, **required**): Enter your phone number for contact.
* **Reason for Replacement** (`reason_for_replacement`, select_one, **required**): Select from the options provided.
* **Additional Details** (`reason_details`, text, **optional**): If you selected a reason that requires additional details, provide a brief explanation.
* **Number of COVID-19 Doses Received** (`vaccine_doses_received`, select_one, **required**): Select the correct number of doses you've received.
* **First Dose Vaccine Type** (`first_vaccine_type`, select_one, **required**): Select the vaccine type for your first dose.
* **Date of First Dose** (`first_vaccine_date`, date, **required**): Enter the date of your first dose in the format of MM/DD/YYYY.
* **Second Dose Vaccine Type** (`second_vaccine_type`, select_one, **optional**): Select the vaccine type for your second dose.
* **Date of Second Dose** (`second_vaccine_date`, date, **optional**): Enter the date of your second dose in the format of MM/DD/YYYY.
* **Received Booster Doses** (`booster_received`, select_one, **required**): Answer whether you've received booster doses (True or False).
* **Booster Dose Information** (`booster_details`, text, **optional**): If you've received booster doses, provide details in this field.
* **Healthcare Provider** (`healthcare_provider`, text, **required**): Enter the name of your healthcare provider who administered the vaccines.
* **Provider Location** (`provider_location`, text, **optional**): Enter the city and state where you were vaccinated.
* **Type of Photo ID for Verification** (`identification_type`, select_one, **required**): Select the type of photo ID you have for verification.
* **Mailing Address** (`address`, text, **required**): Enter your mailing address where the replacement card should be sent.
* **City, State, ZIP Code** (`city_state_zip`, text, **required**): Enter your city, state, and ZIP code.
* **I consent to the replacement request** (`consent`, select_one, **required**): Select **Yes, I consent** to confirm the information provided.
