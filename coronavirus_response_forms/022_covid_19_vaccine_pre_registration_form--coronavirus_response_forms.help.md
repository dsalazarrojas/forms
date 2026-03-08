# COVID 19 Vaccine Pre Registration Form - Help Guide

## Purpose
This form is designed to collect demographic and medical information from individuals interested in receiving a COVID-19 vaccine. The purpose of this form is to help healthcare providers and administrators assess the eligibility and priority status of each individual for vaccination.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal details such as name, date of birth, email address, phone number, and current address.
2. Select your gender and preferred contact method.
3. Provide your medical history, including any underlying conditions that may affect your vaccination eligibility.
4. Report your vaccination history, including the number of doses you have received and the type of vaccine you received.
5. Answer questions about your COVID-19 status, including any previous infections.
6. Affirm that all provided information is accurate and give permission to contact you when the vaccine is available.

## Field-by-Field Explanation

* **First Name** (`pre_reg_first_name`, text, required): Enter your first name to identify yourself in our records.
* **Last Name** (`pre_reg_last_name`, text, required): Enter your last name to identify yourself in our records.
* **Date of Birth** (`pre_reg_date_of_birth`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **Gender** (`pre_reg_gender`, select_one, optional): Select your gender to help us understand your demographic profile.
* **Email Address** (`pre_reg_email`, email, required): Enter your email address so we can contact you about your vaccination status.
* **Phone Number** (`pre_reg_phone`, phone, required): Enter your phone number for us to contact you about your vaccination schedule.
* **Current Address** (`pre_reg_address`, text, required): Enter your street address to provide accurate contact and location information.
* **City, State, and ZIP Code** (`pre_reg_city_state_zip`, text, required): Enter your city, state, and ZIP code for us to identify your location.
* **Employer or Organization** (`pre_reg_employer`, text, optional): Enter your employer or organization to provide additional context about your work status.
* **Are You a Healthcare Worker?** (`pre_reg_healthcare_worker`, select_one, required): Select 'True' if you are a healthcare worker, and 'False' otherwise.
* **Age Group** (`pre_reg_age_group`, select_one, required): Select your age category to determine your vaccination priority status.
* **Do You Qualify for Priority Vaccination?** (`pre_reg_priority_group`, select_one, required): Select any priority status that applies to you.
* **Do You Have Medical Conditions Qualifying for Priority?** (`pre_reg_medical_conditions`, text, optional): Enter any underlying medical conditions that affect your vaccination eligibility.
* **Vaccine History Header** (`pre_reg_vaccine_history_header`, note, optional): This section is for your previous vaccination history.
* **Number of COVID-19 Vaccine Doses Received** (`pre_reg_previous_doses`, integer, required): Enter the number of COVID-19 vaccine doses you have received so far.
* **Date of Last COVID-19 Vaccine Dose** (`pre_reg_last_dose_date`, date, optional): Enter the date of your most recent vaccine dose.
* **Previous Vaccine Type** (`pre_reg_vaccine_type_previous`, select_one, optional): Select the type of vaccine you received previously.
* **COVID-19 Status Header** (`pre_reg_covid_status_header`, note, optional): This section is for your previous COVID-19 status.
* **Have You Had COVID-19 Before?** (`pre_reg_had_covid`, select_one, required): Select 'True' if you had COVID-19 before, 'False' otherwise.
* **Date of COVID-19 Infection** (`pre_reg_covid_date`, date, optional): Enter the date of your COVID-19 infection.
* **Preferred Contact Method** (`pre_reg_contact_preference`, select_one, required): Select how you would like to be contacted about your vaccination schedule.
* **I Confirm That All Information is Accurate** (`pre_reg_confirmation`, select_one, required): Select 'I confirm' to affirm that all provided information is accurate.
* **May We Contact You When Vaccine Becomes Available?** (`pre_reg_follow_up`, select_one, required): Select 'Yes, contact me' to give permission to contact you when the vaccine becomes available.
