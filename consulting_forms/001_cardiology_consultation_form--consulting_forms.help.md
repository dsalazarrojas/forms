<thinking>Before creating the user-facing help guide, let's briefly discuss the purpose and requirements of the Cardiology Consultation Form. This form is designed to gather information about a patient's medical history, current symptoms, and contact details for cardiology consultation purposes. The form requires users to provide their demographic information (patient full name, date of birth, gender), contact details (phone number and email), emergency contact information, primary reason for visit, and current symptoms. Additionally, the form asks about relevant medical history, medications, family history of heart disease, lifestyle factors, previous cardiac tests, insurance provider, referral source, and additional notes. This guide will walk users through each field to complete the form accurately and effectively.</thinking>

# Cardiology Consultation Form - Help Guide

## Purpose
The Cardiology Consultation Form is designed to gather information about your medical history, current symptoms, and contact details for cardiology consultation purposes.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your patient information, including your full name, date of birth, and gender.
2. Provide your contact information, including your phone number and email address.
3. Enter your emergency contact's name and phone number.
4. Describe your primary reason for visiting the cardiology clinic.
5. Select all the symptoms you are currently experiencing.
6. Indicate how long you have been experiencing these symptoms.
7. Rate your pain level from 0 to 10.
8. List any relevant medical history, medications, and family history of heart disease.
9. Select any lifestyle factors that may be contributing to your condition.
10. Indicate if you have undergone any previous cardiac tests.
11. Provide the name of your insurance provider.
12. Specify who referred you to this consultation.
13. Add any additional notes or concerns you would like to share with the cardiology team.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_full_name`, text, required): Enter your full name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format `MM/DD/YYYY`.
* **Gender** (`gender`, select_one, required): Select your gender from the options provided.
* **Contact Phone Number** (`contact_phone`, text, required): Enter your phone number, including the area code.
* **Email Address** (`contact_email`, email, required): Enter your email address for appointment confirmations.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the full name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter your emergency contact's phone number.
* **Primary Reason for Visit** (`reason_for_visit`, text, required): Describe your main cardiac concern.
* **Current Symptoms** (`symptoms_checklist`, select_multiple, required): Select all the symptoms you are currently experiencing.
* **How Long Have You Experienced These Symptoms** (`symptom_duration`, select_one, required): Indicate how long you have been experiencing these symptoms.
* **Pain Level** (`pain_scale`, number, required): Rate your pain level from 0 to 10.
* **Relevant Medical History** (`medical_history`, select_multiple, required): Select all the relevant medical history that applies to you.
* **Current Medications** (`current_medications`, text, required): List all your current medications and their dosages.
* **Family History of Heart Disease** (`family_history`, select_multiple, required): Select all the family history of heart disease that applies to you.
* **Lifestyle Factors** (`lifestyle_factors`, select_multiple, required): Select all the lifestyle factors that may be contributing to your condition.
* **Previous Cardiac Tests** (`previous_cardiac_tests`, select_multiple, optional): Select any previous cardiac tests you have undergone.
* **Insurance Provider** (`insurance_provider`, text, required): Enter the name of your insurance provider.
* **Referral Source** (`referral_source`, select_one, required): Specify who referred you to this consultation.
* **Additional Notes or Concerns** (`additional_notes`, text, optional): Add any additional notes or concerns you would like to share with the cardiology team.
