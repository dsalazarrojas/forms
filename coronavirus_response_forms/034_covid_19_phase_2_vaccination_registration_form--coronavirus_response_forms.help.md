# COVID 19 Phase 2 Vaccination Registration Form - Help Guide

## Purpose
This form is for registering for COVID-19 Phase 2 vaccination. It helps us understand your eligibility and medical background for vaccination, and ensures that you understand the vaccine information and consent to receive the vaccine.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Fill in your personal details, such as your name, date of birth, and contact information.
2. Confirm that you are 65 years of age or older to be eligible for Phase 2 vaccination.
3. List any chronic health conditions you may have.
4. Report any severe vaccine reactions in your past.
5. Indicate your current vaccination status for COVID-19.
6. Confirm that you have received and understand the vaccine information.
7. Consent to receive the COVID-19 vaccine.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD format (e.g., 01/01/2000).
* **Age** (`age`, number, required): Confirm that you are 65 years of age or older.
* **Email Address** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone`, text, required): Enter your phone number.
* **Street Address** (`address`, text, required): Enter your street address.
* **City** (`city`, text, required): Enter your city.
* **State** (`state`, text, required): Enter your state.
* **ZIP Code** (`zip_code`, text, required): Enter your ZIP code.
* **I am 65 years of age or older** (`age_65_plus`, select_one, required): Confirm that you are 65 years of age or older.
* **I confirm I am eligible for Phase 2 vaccination** (`phase_2_confirmation`, select_one, required): Confirm that you are eligible for Phase 2 vaccination.
* **Do you have chronic health conditions?** (`chronic_conditions`, select_one, required): If you have any chronic health conditions, select "True".
* **List your chronic conditions** (`condition_list`, text, optional): If you have chronic conditions, list them here.
* **Known Allergies** (`known_allergies`, text, optional): If you have any known allergies, list them here.
* **Current Medications** (`current_medications`, text, optional): If you are taking any medications, list them here.
* **History of severe vaccine reactions?** (`vaccine_reaction`, select_one, required): If you have any severe vaccine reactions, select "True".
* **Previous COVID-19 vaccine doses** (`previous_covid_doses`, select_one, required): Select how many doses of COVID-19 vaccine you have received.
* **I have received and understand vaccine information** (`understand_vaccine_info`, select_one, required): Confirm that you have received and understand vaccine information.
* **I consent to receive the COVID-19 vaccine** (`consent_vaccine`, select_one, required): Confirm that you consent to receive the COVID-19 vaccine.
* **Registration Date** (`registration_date`, date, required): Enter the date you are registering for vaccination.
