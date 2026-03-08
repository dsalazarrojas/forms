# Covid 19 Symptom Checking Form - Help Guide

## Purpose
This form is designed to collect information about patients' symptoms, medical history, and contact information in the context of COVID-19. It helps healthcare providers quickly and accurately assess patients' conditions and make informed decisions about their care.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name, age, and address.
2. Select the symptoms the patient is experiencing.
3. Provide their travel history and exposure to COVID-19.
4. Indicate if they have had contact with someone infected with COVID-19.
5. Report their current health status and any medical conditions.
6. Choose their medical provider and facility.
7. Select their medical specialty and any medical conditions they may have.
8. Provide emergency contact information (if applicable).
9. Choose the contact relationship with the emergency contact.
10. Select the patient's contact method.
11. Confirm that you have obtained consent for the patient's treatment.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required):
	+ Enter the patient's full name.
* **Patient Age** (`patient_age`, number, required):
	+ Enter the patient's age.
* **Symptoms** (`symptoms`, select_multiple, required):
	+ Select all the symptoms the patient is experiencing from the list (Fever, Fatigue, Cough, Runny nose, Sore throat).
* **Travel History** (`travel_history`, date, required):
	+ Enter the date of their last travel.
* **Exposure to COVID-19** (`exposure_to_covid`, note, required):
	+ Provide any information about their exposure to COVID-19.
* **Contact with Infected** (`contact_with_infected`, select_one, required):
	+ Indicate if they have had contact with someone infected with COVID-19 (False or True).
* **Health Status** (`health_status`, text, required):
	+ Report their current health status.
* **Medical Conditions** (`medical_conditions`, text, required):
	+ List any pre-existing medical conditions.
* **Patient Address** (`patient_address`, note, required):
	+ Enter their home address (optional).
* **Contact Information** (`contact_information`, text, required):
	+ Enter their contact information (phone number, email, etc.).
* **Patient Gender** (`patient_gender`, select_one, required):
	+ Select their gender (Male, Female, Other).
* **Patient Urgent Care** (`patient_urgent_care`, select_one, required):
	+ Indicate if they require urgent care (False or True).
* **Patient Medication** (`patient_medication`, select_one, required):
	+ Indicate if they are taking any medication (None or True).
* **Patient Allergies** (`patient_allergies`, select_one, required):
	+ Indicate if they have any allergies (None or True).
* **Patient Medical Device** (`patient_medical_device`, select_one, required):
	+ Indicate if they have any medical device or implants (None or True).
* **Medical Provider** (`medical_provider`, select_one, required):
	+ Choose their medical provider (Primary Care Physician, Specialist, Other).
* **Medical Facility** (`medical_facility`, select_one, required):
	+ Choose their medical facility (Hospital, Clinic, Private).
* **Medical Department** (`medical_department`, select_one, required):
	+ Choose their medical department (Primary Care, Specialist, Emergency).
* **Medical Specialty** (`medical_specialty`, select_one, required):
	+ Choose their medical specialty (Cardiology, Dermatology, Gastroenterology, Nephrology, Pulmonology).
* **Medical Condition** (`medical_condition`, select_one, required):
	+ Choose any pre-existing medical conditions (None, Diabetes, Hypertension, Asthma, Heart disease, Cancer).
* **Emergency Contact Info** (`emergency_contact_info`, text, required):
	+ Enter the emergency contact information (phone number, email, etc.).
* **Emergency Contact Name** (`emergency_contact_name`, text, required):
	+ Enter the emergency contact name.
* **Contact Relationship** (`contact_relationship`, select_one, required):
	+ Choose their relationship with the emergency contact (None, Mother, Father, Spouse, Brother, Sister, Friend, Other).
* **Patient Contact Method** (`patient_contact_method`, select_one, required):
	+ Choose their contact method (Phone, Email, Mail).
* **Consent** (`consent`, select_one, required):
	+ Confirm that you have obtained their consent for their treatment.

## Tips

* Please be honest and accurate when filling out this form.
* If you are unsure about any of the questions, please ask for clarification.
* This form is for the assessment and management of patients with COVID-19 symptoms. If you have any concerns, please reach out to a healthcare professional.
