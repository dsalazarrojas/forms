# Coronavirus Suspected Patient Intake Form - Help Guide
## Purpose
This form is designed to gather information from suspected patients about their potential exposure or symptoms of the coronavirus. The information collected here will help healthcare professionals assess the situation and provide necessary support.

## How To Complete This Form
1. Please fill out the form completely and honestly, including all relevant information about your medical condition and contact details.
2. Select the correct medical conditions from the list of options provided.
3. Be as detailed as possible in the "Medical History" and "Medical History Description" sections.
4. Choose the correct options for your symptoms.
5. Select the correct medical department and provider if you are already under treatment.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required: false): Your full name, as it appears on your official identification documents.
* **Medical Condition** (`medical_condition`, select_one, required: false): Select one of the following options:
	+ COVID-19
	+ Flu
	+ Allergies
	+ Other (please describe below)
* **Patient Contact** (`patient_contact`, text, required: false): Your contact information, including phone number and address.
* **Patient Email** (`patient_email`, email, required: false): Your email address for follow-up communication.
* **Medical History** (`medical_history`, text, required: false): Briefly describe any pre-existing medical conditions, including previous treatments or surgeries.
* **Medical History Description** (`medical_history_description`, text, required: false): Provide a detailed description of your medical history.
* **Symptoms** (`symptoms`, select_multiple, required: false): Select all that apply from the list of symptoms:
	+ Fever
	+ Cough
	+ Fatigue
	+ Headache
	+ Sore Throat
	+ Runny Nose
	+ Shortness of Breath
	+ Loss of Taste
	+ Other (please describe below)
* **Medical Facility** (`medical_facility`, text, required: false): The hospital or clinic where you received or will receive treatment.
* **Medical Department** (`medical_department`, select_one, required: false): Select one of the following options:
	+ Primary Care
	+ Urgent Care
	+ Specialty Care
	+ Other (please describe)
* **Medical Provider** (`medical_provider`, text, required: false): Your healthcare provider's name and title.
