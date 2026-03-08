<thinking>...</thinking>

## COVID 19 Client Health Questionnaire - Help Guide

## Purpose
This form is designed to gather information about the client's health status, COVID-19 history, and vaccination status. It is meant to be filled out by the client or their representative, and the data collected will be used to assess the client's risk factors for COVID-19 and provide guidance on next steps.

## How To Complete This Form
To complete this form, simply fill out the required fields with your information. If you are unsure about any field, please ask your healthcare provider or a member of our staff for assistance.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Please enter your full legal name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Age** (`age`, number, optional): If you know your age, please enter it.
* **Email Address** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone`, text, required): Enter your phone number.
* **Questionnaire Date** (`questionnaire_date`, date, required): This field is automatically filled out with the current date.
* **-- Health Status --** (`note_health_status`, note, optional): Please describe your current health status in the space provided.
* **Overall Health Status** (`general_health`, select_one, required): Select the best description of your overall health status:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
* **Chronic Conditions** (`chronic_conditions`, select_multiple, optional): Select all chronic health conditions that apply:
	+ Heart disease
	+ High blood pressure
	+ Diabetes
	+ Kidney disease
	+ Liver disease
	+ COPD
	+ Asthma
	+ Cancer
	+ Immunocompromised
	+ Other
* **-- COVID-19 History --** (`note_covid_history`, note, optional): Please describe your COVID-19 history in the space provided.
* **Have you had COVID-19 previously?** (`previous_covid_infection`, select_one, required): Answer this question:
	+ No
	+ Yes - confirmed diagnosis
	+ Yes - probable
	+ Not sure
* **Date of COVID-19 Diagnosis** (`covid_diagnosis_date`, date, optional): If applicable, enter the date of your COVID-19 diagnosis.
* **Severity of Previous COVID-19** (`covid_severity`, select_one, optional): If you had COVID-19, select the severity of your symptoms:
	+ Asymptomatic
	+ Mild
	+ Moderate
	+ Severe
	+ Critical
	+ Not applicable
* **Long COVID Symptoms** (`long_covid_symptoms`, text, optional): If you had COVID-19, describe any ongoing symptoms.
* **-- Vaccination History --** (`note_vaccination`, note, optional): Please describe your vaccination history in the space provided.
* **COVID-19 Vaccination Status** (`vaccination_status`, select_one, required): Select your vaccination status:
	+ Not vaccinated
	+ Partially vaccinated - 1 dose
	+ Fully vaccinated - primary series
	+ Vaccinated with booster
	+ Multiple boosters
	+ Unknown
* **Date of First Vaccine Dose** (`first_vaccine_date`, date, optional): If applicable, enter the date of your first vaccine dose.
* **Vaccine Type Received** (`vaccine_type`, text, optional): If applicable, enter the type of vaccine you received.
* **Vaccine Reactions or Side Effects** (`vaccine_reactions`, text, optional): If applicable, describe any vaccine reactions or side effects.
* **-- Current Health Status --** (`note_current_health`, note, optional): Please describe your current health status in the space provided.
* **Do you have a fever?** (`fever`, select_one, required): Answer this question:
	+ No
	+ Yes
	+ Not sure
* **Do you have a cough?** (`cough`, select_one, required): Answer this question:
	+ No
	+ Yes
	+ Not sure
* **Do you have shortness of breath?** (`shortness_of_breath`, select_one, required): Answer this question:
	+ No
	+ Yes
	+ Not sure
* **Loss of taste or smell?** (`loss_taste_smell`, select_one, optional): Answer this question:
	+ No
	+ Yes
	+ Not sure
* **Unusual fatigue or weakness?** (`fatigue`, select_one, optional): Answer this question:
	+ No
	+ Yes
	+ Not sure
* **-- Recent Exposure --** (`note_recent_exposure`, note, optional): Please describe any recent exposure in the space provided.
* **Recent COVID-19 Exposure** (`covid_exposure`, select_one, required): Answer this question:
	+ No exposure
	+ Possible exposure
	+ Confirmed exposure
	+ Not sure
	+ Prefer not to say
* **Details of Exposure** (`exposure_details`, text, optional): If applicable, describe the details of your recent exposure.
* **Recent Travel** (`recent_travel`, select_one, optional): Answer this question:
	+ No travel
	+ Domestic travel
	+ International travel
* **Current Medications** (`medications`, text, optional): List all medications you are currently taking.

## Tips
- Please answer all questions honestly and accurately to ensure the best possible outcome.
- If you have any concerns or questions, do not hesitate to reach out to your healthcare provider or a member of our staff.
- This form is for assessment purposes only and the data collected will be used to provide guidance on next steps.
