# Complimentary Healthcare Consultation Application Form - Help Guide

## Purpose
This form is designed to collect patient information for a complimentary healthcare consultation. It is intended to be completed by patients prior to their consultation appointment. The form helps healthcare professionals understand the patient's medical history, concerns, and preferences to provide tailored care.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Enter your complete legal name as it appears on your official documents.
2.  Select your date of birth in the format of mm/dd/yy.
3.  Choose your gender from the provided options.
4.  Enter your email address, which will be used for appointment confirmation.
5.  Provide your phone number.
6.  Enter your home address.
7.  Enter the city where you reside.
8.  Enter your state or province.
9.  Enter your ZIP code.
10.  Indicate your insurance status.
11.  Choose the type of consultation you are seeking.
12.  Briefly describe your primary health concern.
13.  List any medications you are currently taking.
14.  Provide any significant medical conditions or surgeries you have had in the past.
15.  Disclose any significant family health conditions.
16.  Select a preferred appointment date.
17.  Choose a preferred appointment time, if applicable.
18.  Select where you would like to have your consultation (e.g., Main Clinic, Satellite Office, etc.).
19.  Choose your preferred language for the consultation.
20.  Indicate how you learned about our healthcare service.
21.  Indicate your consent for healthcare services.
22.  Confirm that you have read and acknowledged our privacy policy.
23.  Provide any additional information you would like to share about yourself.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_full_name`, text, required): Enter your complete legal name as it appears on your official documents.
* **Date of Birth** (`date_of_birth`, date, required): Your birth date in the format of mm/dd/yy.
* **Gender** (`gender`, select_one, required): Select your gender from the provided options (Male, Female, Other, Prefer Not to Say).
* **Email Address** (`email_address`, email, required): Your email address for appointment confirmation.
* **Phone Number** (`phone_number`, text, required): Your best contact number.
* **Street Address** (`address`, text, required): Your home address.
* **City** (`city`, text, required): The city where you reside.
* **State** (`state`, text, required): Your state or province.
* **ZIP Code** (`zip_code`, text, required): Your postal code.
* **Insurance Status** (`insurance_status`, select_one, required): Indicate your insurance status (Yes, Private Insurance, Yes, Government Insurance, No, Uninsured, Unsure).
* **Consultation Type** (`consultation_type`, select_one, required): Choose the type of consultation you are seeking (General Health Checkup, Nutrition Consultation, Mental Health Consultation, Chronic Disease Management, Preventive Care, Specialist Referral, Follow Up Consultation, Other).
* **Primary Health Concern** (`primary_concern`, text, required): Briefly describe your main health concern.
* **Current Medications** (`current_medications`, text, optional): List any medications you are currently taking.
* **Relevant Medical History** (`medical_history`, text, optional): Provide any significant medical conditions or surgeries you have had in the past.
* **Family Medical History** (`family_medical_history`, text, optional): Disclose any significant family health conditions.
* **Preferred Appointment Date** (`preferred_appointment_date`, date, required): Select a preferred appointment date.
* **Preferred Appointment Time** (`preferred_appointment_time`, select_one, optional): Choose a preferred appointment time, if applicable (Morning, Afternoon, Evening).
* **Appointment Location Preference** (`appointment_location`, select_one, required): Select where you would like to have your consultation (Main Clinic, Satellite Office, Telehealth Video Call, Phone Consultation).
* **Language Preference** (`language_preference`, select_one, required): Choose your preferred language for the consultation (English, Spanish, Mandarin, French, Other).
* **How Did You Hear About Us** (`how_did_you_hear`, select_one, optional): Indicate how you learned about our healthcare service.
* **Consent to Treatment** (`consent_to_treatment`, select_one, required): Indicate your consent for healthcare services (Yes, I consent, No, I do not consent).
* **Privacy Policy Acknowledgment** (`privacy_policy_acknowledgment`, select_one, required): Confirm that you have read and acknowledged our privacy policy (Yes, I acknowledge, No, I have not read it).
* **Additional Information** (`additional_information`, text, optional): Provide any other information you would like to share about yourself.
