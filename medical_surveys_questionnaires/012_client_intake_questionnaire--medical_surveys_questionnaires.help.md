# Client Intake Questionnaire - Help Guide
## Purpose
The Client Intake Questionnaire is a crucial tool for healthcare providers to collect and document patient information. It is used to gather essential details about patients' demographics, medical history, and emergency contact information.

## How To Complete This Form

1. Please answer each question thoroughly and accurately.
2. If you are unsure about any field, please ask your healthcare provider for clarification.
3. Make sure to provide the required information for each field.
4. Review your answers before submitting the form to ensure accuracy.

## Field-by-Field Explanation

* **Patient Full Name (Page 1)** (`patient_name`, text, required): Please enter your full name, as it appears on your identification documents.
* **Date of Birth (Page 1)** (`dob`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Gender (Page 2)** (`gender`, select_one, not required): Select your gender from the options provided.
	+ Male
	+ Female
	+ Non-binary
	+ Prefer not to say
* **Phone Number (Page 2)** (`phone_number`, text, required): Enter your primary phone number.
* **Email Address (Page 2)** (`email_address`, email, required): Enter your email address.
* **Insurance Information (Page 3)** (`section_insurance`, note, not required): This section is for providing insurance information. You can skip this section if you do not have insurance.
* **Primary Insurance Provider (Page 3)** (`insurance_provider`, text, required): Enter the name of your primary insurance provider.
* **Policy Number (Page 3)** (`policy_number`, text, required): Enter your policy number.
* **Group Number (Page 3)** (`group_number`, text, not required): Enter your group number (if applicable).
* **Health Status (Page 4)** (`section_health`, note, not required): This section is for providing health status information. You can skip this section if you do not have any medical concerns.
* **Current Symptoms or Medical Concerns (Page 4)** (`current_symptoms`, text, required): Describe your current symptoms or medical concerns.
* **Past Medical History (Page 4)** (`medical_history`, select_multiple, not required): Select any past medical history from the options provided.
	+ Hypertension
	+ Diabetes
	+ Asthma
	+ Heart Disease
	+ Surgery
	+ None
* **Known Allergies (Page 5)** (`allergies`, text, required): List any known allergies.
* **Current Medications (Page 5)** (`medications`, text, not required): List any current medications.
* **Smoking Status (Page 5)** (`smoking_status`, select_one, not required): Select your smoking status.
	+ Never
	+ Former
	+ Current
* **Emergency Contact (Page 6)** (`section_emergency`, note, not required): This section is for providing emergency contact information. You can skip this section if you do not have an emergency contact.
* **Emergency Contact Name (Page 6)** (`emergency_name`, text, required): Enter the name of your emergency contact.
* **Emergency Contact Relationship (Page 6)** (`emergency_relationship`, text, not required): Enter the relationship of your emergency contact.
* **Emergency Contact Phone Number (Page 6)** (`emergency_phone`, text, required): Enter the phone number of your emergency contact.

## Tips
Please answer each question accurately and thoroughly. If you are unsure about any field, please ask your healthcare provider for clarification.
