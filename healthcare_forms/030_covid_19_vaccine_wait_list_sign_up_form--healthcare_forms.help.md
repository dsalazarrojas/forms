# COVID 19 Vaccine Wait List Sign Up Form - Help Guide
## Purpose
This form is designed to collect information from individuals who want to join a waitlist for COVID-19 vaccination. By completing this form, you will be able to provide your contact details, vaccination eligibility, and other relevant information to be added to the waitlist. This form will help us better understand who should receive the vaccine and how to contact you with further information.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your contact details in the "Patient Information" section.
2. Select your priority group and age group in the "Eligibility Information" section.
3. Answer questions about your underlying medical conditions and healthcare status.
4. If you have previously received the COVID-19 vaccine, provide information about your vaccine history.
5. Confirm that all provided information is accurate.

## Field-by-Field Explanation

* **First Name** (`waitlist_first_name`, text, required): Enter your first name.
* **Last Name** (`waitlist_last_name`, text, required): Enter your last name.
* **Middle Initial** (`waitlist_middle_initial`, text, optional): If you have a middle initial, enter it.
* **Date of Birth** (`waitlist_date_of_birth`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **Email Address** (`waitlist_email`, email, required): Enter your primary email address.
* **Phone Number** (`waitlist_phone`, phone, required): Enter your contact phone number.
* **Street Address** (`waitlist_address`, text, required): Enter your current street address.
* **City, State, ZIP Code** (`waitlist_city_state_zip`, text, required): Enter your city, state, and ZIP code.
* **Priority Group Status** (`waitlist_priority_group`, select_one, required): Select one of the following:
	+ Healthcare worker
	+ Essential worker
	+ Age 65 or older
	+ Age 50-64
	+ Underlying medical condition
	+ General population
* **Age Group** (`waitlist_age_group`, select_one, required): Select one of the following:
	+ Under 18
	+ 18-49
	+ 50-64
	+ 65-74
	+ 75+
* **Underlying Medical Conditions** (`waitlist_medical_conditions`, text, optional): If you have any underlying medical conditions, enter them.
* **Insurance Status** (`waitlist_insurance`, select_one, optional): Select one of the following:
	+ Yes, insured
	+ No, uninsured
	+ Medicare
	+ Medicaid
	+ Other
* **Primary Care Provider** (`waitlist_primary_provider`, select_one, optional): Check if you have a regular doctor or clinic.
* **Previous COVID-19 Vaccine Doses** (`waitlist_previous_doses`, integer, required): Enter the number of doses you have previously received.
* **Vaccine Type if Previously Vaccinated** (`waitlist_vaccine_type`, select_one, optional): Select the type of vaccine you received if you have been vaccinated.
* **Previous COVID-19 Infection** (`waitlist_had_covid`, select_one, required): Select one of the following:
	+ True
	+ False
	+ Unsure
* **Date of COVID-19 Infection** (`waitlist_covid_date`, date, optional): If you selected "True" for the previous question, enter the date of your COVID-19 infection.
* **Preferred Contact Method** (`waitlist_contact_preference`, select_one, required): Select one of the following:
	+ Email
	+ Phone Call
	+ Text Message
	+ Mail
	+ No preference
* **Confirmation of Accuracy** (`waitlist_confirmation`, select_one, required): Select one of the following:
	+ Confirmed accurate
	+ Needs correction
