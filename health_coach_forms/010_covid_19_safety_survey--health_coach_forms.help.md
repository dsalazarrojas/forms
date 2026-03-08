<thinking>
A Covid-19 Safety Survey form is designed to gather patient information and medical history in order to provide a comprehensive understanding of their safety during the Covid-19 pandemic. This form will be used to identify areas of concern and take necessary precautions to ensure patient safety. Before proceeding, please review the form carefully to ensure that you are providing the most accurate information.

This form will only be completed by patients who are suspected or confirmed to have Covid-19 or those who are at high risk of exposure. Please answer the questions honestly and to the best of your ability.

Please note that this form may be duplicated or reviewed by healthcare staff, so please ensure that you provide accurate and up-to-date information.

</thinking>

# Covid 19 Safety Survey - Help Guide
## Purpose
This form is designed to gather information about patients who are suspected or confirmed to have Covid-19 or those who are at high risk of exposure to the virus. The information collected will help healthcare staff to identify areas of concern and take necessary precautions to ensure patient safety.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your name and other identifying information
2. Answer questions about your medical history, vaccination status, and current health status
3. Provide details about any vaccine you have received, including dosage and administration route
4. Share any allergies, medication, or medical history that may impact your care
5. Provide your contact information so we can reach out with any further questions or concerns

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, **required**): Your name as it appears on official documents.
* **Healthcare Provider** (`healthcare_provider`, text, **optional**): The name of your healthcare provider, if applicable.
* **Healthcare Provider ID** (`healthcare_provider_id`, number, **optional**): The ID number of your healthcare provider, if applicable.
* **Age** (`patient_age`, number, **required**): Your age in years.
* **Gender** (`patient_gender`, select_one, **required**): Select your gender:
	+ Male
	+ Female
	+ Other
* **Vaccine Administered** (`vaccine_administered`, select_multiple, **optional**): Have you received the Covid-19 vaccine?:
	+ True
	+ False
* **Vaccine Side Effects** (`vaccine_side_effects`, select_multiple, **optional**): If you have received the Covid-19 vaccine, have you experienced any side effects?:
	+ None
	+ Mild
	+ Moderate
	+ Severe
* **Health Status** (`patient_health_status`, select_one, **required**): Select your current health status:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
* **COVID-19 Status** (`patient_covid_status`, select_one, **required**): Select your COVID-19 status:
	+ Confirmed
	+ Suspected
	+ Asymptomatic
	+ Recovered
* **Survey Date** (`survey_date`, date, **required**): The date on which you completed this survey.
* **Survey Time** (`survey_time`, time, **optional**): The time at which you completed this survey.
* **Dosage of Vaccine** (`vaccine_dosage`, number, **optional**): If you received a vaccine, please enter the number of doses.
* **Administration Route of Vaccine** (`vaccine_administration_route`, text, **required**): The method through which the vaccine was administered (e.g., intramuscular, intradermal, oral).
* **Medical History** (`patient_medical_history`, text, **optional**): Any pre-existing medical conditions that may impact your care.
* **Allergies** (`patient_allergies`, text, **optional**): Any allergies or sensitivities you may have.
* **Medication** (`patient_medication`, text, **optional**): Any medications you are currently taking.
* **Vaccine Type** (`vaccine_type`, select_one, **required**): Select the type of vaccine you received:
	+ Covid-19
	+ Flu
	+ None
* **Health Insurance** (`patient_health_insurance`, text, **optional**): Your health insurance provider, if applicable.
* **Contact Number** (`patient_contact_number`, text, **required**): Your phone number so we can reach out with any further questions or concerns.
* **Email** (`patient_email`, email, **optional**): Your email address, if you prefer to be contacted via email.
* **Address** (`patient_address`, text, **optional**): Your street address, city, state, and zip code (if applicable).
* **City** (`patient_city`, text, **optional**): The city in which you currently reside.
* **State** (`patient_state`, text, **optional**): The state in which you currently reside.
* **Zip Code** (`patient_zip_code`, text, **optional**): The zip code in which you currently reside.
* **Message** (`patient_message`, note, **optional**): Any additional comments or concerns you may have.
