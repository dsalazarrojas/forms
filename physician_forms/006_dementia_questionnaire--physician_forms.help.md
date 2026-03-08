# Dementia Questionnaire - Help Guide

## Purpose
The Dementia Questionnaire is a form designed to collect information about a patient's symptoms, medical history, and social behavior. This form will help healthcare professionals gather valuable insights to better understand and manage dementia-related conditions.

## How To Complete This Form
To complete this form, follow these steps:

1. **Patient Information**: Answer the questions on page 1, "Patient Information," to provide basic details about the patient, such as their name, age, and contact information.
2. **Symptoms**: On page 2, "Symptoms," select all the symptoms that you believe the patient is experiencing, such as Alzheimer's Disease, Dementia, or Vascular Dementia.
3. **Medical History**: On page 3, "Medical History," select one medical condition from the list that may be relevant to the patient's situation.
4. **Social Behavior**: On page 4, "Social Behavior," select all behaviors that you have observed in the patient, such as social withdrawal or aggressive behavior.
5. **Medical Condition**: On page 5, "Medical Condition," take a note to describe the patient's medical condition in more detail if needed.
6. **Medications**: On page 6, "Medications," select all medications the patient is currently taking.
7. **Final Review**: Review all the information you have entered and ensure it is accurate and complete.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, text, required: false): Enter the patient's name, age, and contact information to help healthcare professionals identify the patient accurately.
* **Symptoms** (`symptoms`, select_multiple, required: false): Select all symptoms you believe the patient is experiencing, such as:
	+ Alzheimer's Disease
	+ Dementia
	+ Lewy Body Dementia
	+ Vascular Dementia
	+ Frontotemporal Dementia
	+ Mixed Dementia
	+ Normal Pressure Hydrocephalus
	+ Other
	+ Unknown
* **Cognitive Functioning** (`cognitive_functioning`, text, required: false): Describe the patient's current cognitive functioning, such as memory loss or difficulty with communication.
* **Medical History** (`medical_history`, select_one, required: false): Select one medical condition that may be relevant to the patient's situation, such as:
	+ Family history of cognitive decline
	+ Family history of dementia
	+ Stroke
	+ Head Injury
	+ Traumatic Brain Injury
	+ Other
	+ Unknown
* **Social Behavior** (`social_behavior`, select_multiple, required: false): Select all behaviors you have observed in the patient, such as:
	+ Social withdrawal
	+ Social isolation
	+ Social retraction
	+ Emotional lability
	+ Aggressive behavior
	+ Agitated behavior
	+ Unknown
* **Medical Condition** (`medical_condition`, note, required: false): Take a note to describe the patient's medical condition in more detail if needed.
* **Medications** (`medications`, select_multiple, required: false): Select all medications the patient is currently taking, such as Donepezil (Aricept) or Donezil (Aricept).
