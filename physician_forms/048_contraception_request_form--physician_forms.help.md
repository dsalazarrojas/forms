<thinking>
This form is designed to collect information from patients seeking contraception services. It helps healthcare providers understand a patient's medical history, preferred contraception method, and reasons for requesting contraception. This information is crucial for safe and effective care. Please review the form carefully and provide accurate answers. This form is a required step before the patient can proceed with their contraception request.
</thinking>

# Contraception Request Form - Help Guide

## Purpose

This form is used to collect information from patients seeking contraception services. It helps healthcare providers understand the patient's medical history, preferred contraception method, and reasons for requesting contraception.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the patient's information, including name and date of birth.
2. Answer the medical history questions, including smoking status, migraines with aura, and blood clot history.
3. Choose your preferred contraception method.
4. Provide details about your current contraception use (if applicable).
5. Specify your reason for requesting contraception.
6. Enter the date of your last menstrual period.
7. Choose a preferred pharmacy for prescription routing.
8. Sign the form to confirm the accuracy of the information provided.

## Field-by-Field Explanation

* **Patient Name** (`patient_full_name`, text, **required**): Enter your full name as it appears on your official identification.
* **Date of Birth** (`patient_dob`, date, **required**): Enter your date of birth in the MM/DD/YYYY format.
* **Smoking Status** (`smoking_status`, select_one, **required**): Choose your current smoking status:
	+ Non-smoker
	+ Occasional smoker (less than 15 per day)
	+ Heavy smoker (15 plus per day)
	+ Former smoker (quit more than 1 year ago)
* **Migraines with Aura** (`migraine_with_aura`, select_one, **required**): Do you experience migraines with visual aura? Choose:
	+ True
	+ False
	+ Unsure
* **Blood Clot History** (`blood_clot_history`, select_one, **required**): Do you have a personal or family history of blood clots? Choose:
	+ Yes - Personal history
	+ Yes - Immediate family history
	+ No - No known history
* **Preferred Contraceptive Method** (`preferred_contraceptive_method`, select_one, **required**): Choose your preferred contraception method:
	+ Combined Pill (COCP)
	+ Progestogen-only Pill (POP)
	+ Contraceptive Patch
	+ Vaginal Ring
	+ Injectable (Depo-Provera)
	+ Hormonal IUD (Mirena/Kyleena)
	+ Subdermal Implant (Nexplanon)
* **Previous Method Feedback** (`previous_method_feedback`, text, **optional**): If you are currently using a contraception method, please provide details about it and any side effects.
* **Reason for Request** (`reason_for_request`, select_one, **required**): Choose your primary reason for requesting contraception:
	+ Contraception (Pregnancy Prevention)
	+ Menstrual Symptom Management
	+ Endometriosis/PCOS Treatment
	+ Emergency Contraception Follow-up
* **Date of Last Menstrual Period** (`last_menstrual_period_date`, date, **required**): Enter the start date of your most recent menstrual period.
* **Preferred Pharmacy Name and City** (`pharmacy_details`, text, **required**): Choose a preferred pharmacy for prescription routing.
* **Patient Digital Signature** (`patient_signature_auth`, text, **required**): Sign the form to confirm the accuracy of the information provided.
* **Date of Request** (`request_date`, date, **required**): Enter the date of your request.
