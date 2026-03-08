# COVID 19 Informed Consent To Treat Form - Help Guide

## Purpose
This form is used to gather essential information for the treatment of COVID-19 patients. It is a critical document that must be completed by the patient to ensure that they are fully informed and willing to undergo treatment.

## How To Complete This Form

1. Ensure that you are in a quiet and private setting while filling out this form.
2. Carefully read and understand each section of the form before proceeding.
3. Fill out the form in accordance with the instructions provided.
4. Sign the consent form after completing it.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, **Required**): Enter the patient's full name.
* **Date of Birth** (`patient_dob`, date, **Required**): Enter the patient's date of birth in MM/DD format.
* **Patient ID** (`patient_id`, text, **Required**): Enter the patient's ID number.
* **Phone Number** (`phone_number`, text, **Required**): Enter the patient's phone number.
* **Email Address** (`email_address`, email, **Required**): Enter the patient's email address.
* **Date of Treatment** (`treatment_date`, date, **Required**): Enter the date of the treatment.
* **COVID-19 Diagnosis Status** (`covid_diagnosis_status`, select_one, **Required**): Select one of the options:
	+ Confirmed positive
	+ Suspected COVID-19
	+ Exposure concern
	+ Other respiratory illness
* **Proposed Treatment** (`proposed_treatment`, text, **Required**): Enter the proposed treatment plan.
* **Rationale for Treatment** (`treatment_rationale`, text, **Required**): Enter the rationale for the treatment.
* **Chronic Conditions** (`chronic_conditions`, text, **Optional**): If the patient has any chronic conditions, list them here.
* **Current Medications** (`current_medications`, text, **Optional**): If the patient is taking any current medications, list them here.
* **Known Allergies** (`allergies`, text, **Optional**): If the patient has any known allergies, list them here.
* **Treatment Explained** (`treatment_explained`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **I understand the expected benefits** (`benefits_understood`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **I understand the potential risks and side effects** (`risks_understood`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **Alternative treatments have been discussed** (`alternatives_discussed`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **All my questions have been answered** (`questions_answered`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **I consent to the proposed treatment** (`consent_to_treatment`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **I understand that I can withdraw consent at any time** (`understanding_acknowledged`, select_one, **Required**): Select one of the options:
	+ Yes
	+ No
* **Date of Consent** (`consent_signature_date`, date, **Required**): Enter the date of consent in MM/DD format.
* **Physician Name** (`physician_name`, text, **Required**): Enter the name of the physician.

**Important Notes:**

* Ensure that the patient completes this form carefully and accurately.
* The patient must sign the consent form after completing it.
* The form must be filled out in a quiet and private setting.
