<thinking>
This form is intended to gather information from patients to screen for potential COVID-19 risk factors. The purpose is to ensure that patients receive proper medical attention and guidance. It is essential to complete this form accurately and thoroughly to provide healthcare providers with the necessary information to make informed decisions. Please note that this form should not be filled out for patients who have already been diagnosed or treated for COVID-19.
</thinking>

# daily_covid_19_pre_screening_questionnaire - Help Guide
## Purpose
This form is designed to gather essential information from patients to identify potential risks associated with COVID-19. It helps healthcare providers to make informed decisions and provide proper medical attention.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the patient's information in the **Patient Information** field (page 1).
2.  Enter the patient's email address in the **Patient Email** field (page 2), which is required for follow-up communication.
3.  Enter the name of the healthcare provider who referred the patient to this screening (page 3).
4.  Select the medical condition that best describes the patient's current health status (page 4).
5.  Write any relevant medical history or concerns in the **Patient Medical History** field (page 5).
6.  Indicate if the patient is interested in receiving a vaccine (page 6).
7.  Select any current symptoms the patient is experiencing (page 7).
8.  Answer whether the patient has a history of medical travel (page 8).
9.  Select any current medical conditions the patient is managing (page 9).
10.  List any previous vaccinations the patient has received (page 10).
11.  Indicate if the patient uses any medical devices (page 11).

## Field-by-Field Explanation
* **Patient Information (page 1)** (`patient_info`, text, required: false): Enter the patient's name, date of birth, and other relevant identifying information.
* **Patient Email (page 2)** (`patient_email`, email, required: true): Enter the patient's email address for follow-up communication.
* **Healthcare Provider (page 3)** (`healthcare_provider`, text, required: true): Enter the name of the healthcare provider who referred the patient.
* **Medical Condition (page 4)** (`medical_condition`, select_one, required: false): Select the medical condition that best describes the patient's current health status.
	+ No Medical Condition
	+ Medical Condition Present
	+ Unknown Medical Condition
* **Patient Medical History (page 5)** (`patient_medical_history`, note, required: false): Write any relevant medical history or concerns.
* **Interested in Vaccine (page 6)** (`vaccine_interest`, select_one, required: false): Indicate if the patient is interested in receiving a vaccine.
	+ True
	+ False
	+ Undecided
* **Patient Symptoms (page 7)** (`patient_symptoms`, select_multiple, required: false): Select any current symptoms the patient is experiencing.
	+ Fever
	+ Chills
	+ Muscle
	+ Fatigue
	+ Headache
* **Medical Travel History (page 8)** (`medical_travel_history`, select_one, required: false): Answer whether the patient has a history of medical travel.
	+ False
	+ True
* **Medical Conditions Present (page 9)** (`medical_conditions_present`, select_multiple, required: false): Select any current medical conditions the patient is managing.
	+ High Blood Pressure
	+ Diabetes
	+ Other
* **Previous Vaccinations (page 10)** (`previous_vaccinations`, select_multiple, required: false): List any previous vaccinations the patient has received.
	+ None
	+ Vaccinated
* **Medical Device Use (page 11)** (`medical_device_use`, select_multiple, required: false): Indicate if the patient uses any medical devices.
	+ None
	+ True

## Tips
- Please answer all questions accurately and thoroughly to ensure the patient receives proper medical attention.
- If you are unsure about any question, ask the healthcare provider for guidance.
- The patient's information will only be used for medical purposes and in accordance with HIPAA guidelines.
