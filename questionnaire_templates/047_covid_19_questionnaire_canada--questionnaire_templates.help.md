<Thinking>

This form is designed to gather information for the assessment of COVID-19 vaccination eligibility in Canada. It is intended to be completed by patients who are candidates for vaccination. The form is divided into several sections, including patient information, vaccination eligibility assessment, vaccination history, and health screening. The purpose of this form is to ensure that patients who are eligible for vaccination can be properly assessed and scheduled for vaccination in a timely manner.

To avoid duplication, please make sure to complete the form accurately and truthfully. If you have any doubts or concerns, please consult with the healthcare professional administering the form.

</Thinking>

# COVID 19 Questionnaire Canada - Help Guide
## Purpose
The COVID 19 Questionnaire Canada is designed to gather information for the assessment of COVID-19 vaccination eligibility in Canada.

## How To Complete This Form
To complete this form, please read each section carefully and answer the questions truthfully. You may need to refer to your health records or ask a family member for help.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, text, required): Enter your full name as it appears on your government-issued ID.
* **Provincial Health Card Number** (`health_card_number`, text, required): Enter your provincial health card number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in YYYY-MM-DD format.
* **Phone Number** (`phone_number`, text, required): Enter your phone number.
* **Email Address** (`email_address`, email, required): Enter your email address.
* **Province or Territory** (`province`, select_one, required): Select your province or territory of residence.
* **Age** (`age`, number, required): Enter your age.
* **Are you in a priority group for vaccination?** (`priority_group`, select_one, required): Please select from the following options:
	+ Healthcare worker
	+ Long-term care resident
	+ Indigenous community member
	+ Immunocompromised
	+ Essential worker
	+ 65 years or older
	+ False
* **Do you have any underlying medical conditions?** (`medical_conditions`, select_multiple, required): Please select all conditions that apply:
	+ Diabetes
	+ Heart disease
	+ Lung disease
	+ Cancer
	+ Immunocompromised
	+ Chronic kidney disease
	+ Other
* **Have you received a COVID-19 vaccine?** (`previous_covid_vaccine`, select_one, required): Please select from the following options:
	+ False
	+ Yes, one dose
	+ Yes, two doses
	+ Yes, three or more doses
* **Type of COVID-19 vaccine received** (`vaccine_type`, select_multiple, required): If applicable, please select all types of vaccine you have received:
	+ Pfizer-BioNTech
	+ Moderna
	+ AstraZeneca
	+ Janssen
	+ Other
* **Date of Last Dose** (`last_dose_date`, date, required): If you have received a COVID-19 vaccine, enter the date of your last dose.
* **Any severe allergies?** (`allergies`, text, required): If you have any severe allergies, please describe them.
* **History of severe vaccine reactions?** (`vaccine_reaction`, select_one, required): Please select from the following options:
	+ False
	+ True
* **Do you currently have any illness?** (`current_illness`, select_one, required): Please select from the following options:
	+ False
	+ True
* **Describe current illness** (`illness_description`, text, required): If you currently have any illness, please describe it.
* **I confirm the above information is accurate** (`confirm_accurate`, select_one, required): Please select from the following options:
	+ True
	+ False
* **I consent to receive the COVID-19 vaccine** (`consent_vaccination`, select_one, required): Please select from the following options:
	+ True
	+ False
* **Questionnaire Date** (`questionnaire_date`, date, required): Enter the date you completed this questionnaire.

Please note that this form is intended to be completed by patients who are candidates for vaccination. If you have any doubts or concerns, please consult with the healthcare professional administering the form.
