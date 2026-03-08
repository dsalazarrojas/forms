<thinking>
The purpose of this form is to collect medical history information from clients, including demographic data (name and date of birth), medical background, family history, social history, and current health concerns. This form aims to help healthcare professionals gather comprehensive information about clients' medical backgrounds, facilitating informed decisions and effective care.

To avoid duplication and redundancy, this form should not be used for clients who have already provided medical history information through other means. Ensure that the form is only filled out once and in its entirety before submitting it.

This form is intended for clients to provide their medical history information accurately and thoroughly. Please take your time to fill out the form carefully and provide as much detail as possible.

</thinking>

# Client Medical History Form - Help Guide

## Purpose

The Client Medical History Form is a comprehensive tool designed to collect detailed information about clients' medical backgrounds. This form is essential for healthcare professionals to make informed decisions and provide effective care.

## How To Complete This Form

1. Fill out the form carefully and accurately.
2. Provide all necessary information, especially regarding medical background, family history, and current health concerns.
3. Ensure that the form is signed and certified by the client, confirming the accuracy of the provided information.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, `text`, required): Enter your full name as it appears on your official identification documents.
* **Date of Birth** (`dob`, `date`, required): Enter your date of birth in the correct format (MM/DD/YYYY).
* **Medical Background** (`section_medical_background`, `note`, optional): Provide any relevant medical background information, such as previous hospitalization or surgeries.
* **Have you ever been hospitalized for a serious illness or surgery?** (`hospitalization_history`, `select_one`, required): Select 'True' if you have been hospitalized in the past, and 'False' otherwise.
* **List any previous surgeries and approximate dates** (`surgery_list`, `text`, optional): Provide a list of previous surgeries and their corresponding dates.
* **Family History** (`section_family_history`, `note`, optional): Select all family members with a history of the following conditions:
	+ Diabetes
	+ Cancer
	+ Heart Disease
	+ Hypertension
	+ Stroke
	+ Glaucoma
* **Frequency of alcohol consumption** (`alcohol_consumption`, `select_one`, optional): Select your frequency of alcohol consumption:
	+ None
	+ Occasional
	+ Moderate
	+ Frequent
* **Do you use any recreational drugs?** (`recreational_drug_use`, `select_one`, optional): Select 'True' if you use recreational drugs, and 'False' otherwise.
* **How often do you exercise?** (`exercise_frequency`, `select_one`, optional): Select how often you exercise:
	+ Daily
	+ 2-3 times a week
	+ Weekly
	+ Monthly
	+ Never
* **Review of Systems** (`section_review_systems`, `note`, optional): Use this space to mention any current symptoms you are experiencing.
* **Current Symptoms** (`current_symptoms`, `select_multiple`, optional): Select any current symptoms you are experiencing:
	+ Chest Pain
	+ Shortness of Breath
	+ Chronic Cough
	+ Vision Changes
	+ Dizziness
	+ Fatigue
* **Any other health concerns?** (`other_health_concerns`, `text`, optional): Use this space to mention any other health concerns you would like to discuss with your doctor.
* **I certify that the information provided above is correct to the best of my knowledge** (`information_certification`, `select_one`, required): Select 'True' to confirm that the provided information is accurate.
* **Digital Signature - Type Full Name** (`signature`, `text`, required): Enter your full name as it appears on your official identification documents.
