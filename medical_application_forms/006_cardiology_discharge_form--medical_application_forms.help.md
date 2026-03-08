# Cardiology Discharge Form - Help Guide

## Purpose
The Cardiology Discharge Form is used to track a patient's discharge from the cardiology department. It captures essential information about the patient's status, medication, and follow-up instructions for a smooth transition back to home.

## How To Complete This Form
1. Start by entering the patient's name, discharge date, primary diagnosis at discharge, medications, and follow-up instructions. 
2. Provide the emergency contact's name and phone number.
3. If applicable, describe any activity restrictions or limitations for the patient.
4. Enter the name of the staff member overseeing the patient's discharge.
5. Confirm if the patient understands and is able to follow the provided instructions.

## Field-by-Field Explanation

* **Patient name** (`patient_name`, text, required): Enter the full legal name of the patient.
* **Discharge date** (`discharge_date`, date, required): Enter the date the patient is being discharged.
* **Diagnosis at discharge** (`diagnosis_at_discharge`, text, required): Enter the primary diagnosis the patient is being discharged for.
* **Medications at discharge** (`discharge_medications`, text, required): List the medications and dosages the patient needs to take at home.
* **Follow up instructions** (`follow_up_instructions`, text, required): Provide any necessary appointments, tests, or signs to watch out for after discharge.
* **Emergency contact** (`emergency_contact`, text, required): Enter the name and phone number of an emergency contact.
* **Activity restrictions** (`activity_restrictions`, text, optional): Describe any physical activity or work limitations the patient should be aware of.
* **Discharge coordinator** (`discharge_coordinator`, text, optional): Enter the name of the staff member overseeing the patient's discharge.
* **Patient understands instructions** (`patient_understands_instructions`, select_one, required): Confirm that the patient has comprehensively understood the provided instructions.
