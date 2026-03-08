<thinking>...</thinking>

# new_guest_covid_19_consent_form - Help Guide

## Purpose
This form is used to collect information from new guests about their COVID-19 symptoms, medical history, and other relevant details. The form is designed to help healthcare professionals assess and provide appropriate care to the guest.

## How To Complete This Form
To complete this form, simply follow the instructions below:

1. Fill in your guest's information as prompted.
2. Select any of the COVID-19 symptoms you have experienced from the list provided.
3. Indicate if you have experienced any symptoms that require medical attention.
4. Provide your medical history, including any pre-existing conditions or allergies.
5. List your emergency contacts and their relationships to you.
6. If applicable, provide information about your medical insurance and any medical devices you are currently using.
7. List any current medications you are taking.

## Field-by-Field Explanation

* **Guest Consent** (`guest_consent`, `text`, required: false): Please indicate your willingness to provide your medical information.
* **Have you experienced any of the following COVID-19 symptoms?** (`covid_19_symptoms`, `select_multiple`, required: false): Select any of the COVID-19 symptoms you have experienced from the list provided. These include:
	+ Fever
	+ Cough
	+ Difficulty breathing
	+ Sore throat
	+ Shortness of breath
	+ Chills
	+ Muscle aches
	+ Loss of taste
	+ Loss of smell
	+ Diarrhea
	+ Nausea or vomiting
	+ Headache
	+ Sore eyes
	+ Fatigue
	+ Chest pain
	+ Dizziness
	+ Confusion
	+ Difficulty staying awake
	+ Loss of appetite
	+ Muscle pain
	+ Loss of consciousness
	+ Loss of coordination
	+ Loss of balance
	+ Difficulty swallowing
	+ Hoarseness
	+ Loss of hearing
	+ Loss of vision
	+ Loss of speech
	+ Loss of muscle
	+ Loss of bladder control
* **Medical Attention Needed** (`medical_attention`, `select_one`, required: false): Indicate if you have experienced any symptoms that require immediate medical attention.
* **Medical History** (`medical_history`, `text`, required: false): Please provide any information about your pre-existing medical conditions or allergies.
* **Emergency Contacts** (`emergency_contacts`, `text`, required: false): List the names and relationships of emergency contacts you have, such as family members or caregivers.
* **Relationship to Emergency Contact** (`emergency_contact_relationship`, `text`, required: false): Indicate your relationship to each emergency contact.
* **Medical Insurance** (`medical_insurance`, `text`, required: false): Provide information about your medical insurance coverage, including your policy number and provider.
* **Allergies** (`allergies`, `text`, required: false): List any allergies or sensitivities you have, including medications or substances.
* **Medical Devices** (`medical_devices`, `text`, required: false): List any medical devices you are currently using, such as pacemakers or oxygen tanks.
* **Current Medications** (`medications`, `text`, required: false): List any medications you are currently taking.
