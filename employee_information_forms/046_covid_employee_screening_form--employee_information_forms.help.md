<thinking>

The purpose of this form is to gather information about an employee's health status regarding COVID-19, specifically their symptoms, travel history, contact with known positive cases, and test results. This form will help the employer to assess and mitigate the risk of COVID-19 transmission in the workplace.

To prevent duplication of effort, this form should not be filled out by employees who have already completed a similar form in the past week. Please ensure you have not completed a COVID-19 screening form recently before starting this process.

</thinking>

# Covid Employee Screening Form - Help Guide

## Purpose
This form is used to screen employees for COVID-19 symptoms, travel history, and test results to ensure a safe working environment.

## How To Complete This Form
1. Fill in the required information accurately and completely.
2. For questions with multiple options (e.g. "covid_symptoms" and "travel_history"), select all applicable options.
3. If you have not been tested for COVID-19, select "No" for "tested_positive", "tested_negative", and "not_tested".

## Field-by-Field Explanation

* **User Information** (`user_information`, text, required: false): This is a text field for any additional information you'd like to provide about yourself.
* **Employee Name** (`employee_name`, text, required: true): Please enter your full name as it appears on your company records.
* **Employee Email** (`employee_email`, email, required: true): Enter your company email address.
* **COVID-19 Symptoms** (`covid_symptoms`, select_one, required: true): If you have experienced any of the following COVID-19 symptoms in the past 14 days, select "Yes":
	+ Fever
	+ Cough
	+ Shortness of breath
	+ Fatigue
	+ Headache
	+ New loss of taste or smell
	+ Sore throat
	+ Muscle or body aches or pains
	+ Diarrhea
	+ Nausea or vomiting
* **Travel History** (`travel_history`, select_multiple, required: false): If you have traveled outside of the country or state in the past 14 days, select all applicable options:
	+ Country
	+ State
* **Close Contact with COVID-19 Positive Individual** (`close_contact`, select_one, required: false): If you have had close contact (within 6 feet) with someone who has tested positive for COVID-19, select "Yes".
* **Health Care Provider Name** (`health_care_provider_name`, text, required: false): Enter the name of your health care provider, if applicable.
* **Tested Positive for COVID-19** (`tested_positive`, select_one, required: true): Select "Yes" if you have tested positive for COVID-19.
* **Tested Negative for COVID-19** (`tested_negative`, select_one, required: true): Select "Yes" if you have tested negative for COVID-19.
* **Not Tested for COVID-19** (`not_tested`, select_one, required: true): Select "Yes" if you have not been tested for COVID-19.
