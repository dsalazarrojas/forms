<thinking>
The purpose of this form is to collect patient information for pre-screening purposes during the COVID-19 pandemic. It aims to gather details about the patient's health status, vaccination history, and potential exposure to COVID-19. This form helps healthcare professionals assess the patient's risk level and ensure they meet the necessary clearance requirements for a health facility or service.

Before filling out this form, please make sure you have not filled it out previously, and that you have all necessary information ready. If you're unsure about any field, please ask a healthcare professional for guidance.

This guide will walk you through each section of the form to ensure you provide accurate and complete information.</thinking>

# COVID 19 Patient Pre Screening Disclosure Form V2 - Help Guide
## Purpose
The form is designed to collect patient information for pre-screening purposes during the COVID-19 pandemic.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill out each section thoroughly and accurately.
2. Review the form for any errors or missing information before submitting.
3. If you're unsure about any field, please ask a healthcare professional for guidance.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, `text`, required): Please enter your full name as it appears on your official identification.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the standard format (MM/DD/YYYY).
* **Phone Number** (`contact_phone`, `text`, required): Provide your contact phone number where you can be reached for follow-up.
* **Email Address** (`contact_email`, `email`, required): Enter a valid email address where you can be reached for follow-up.
* **Screening Date** (`screening_date`, `date`, required): Enter the date you plan to visit the health facility or service.
* **COVID-19 Symptoms or Signs in Past 14 Days** (`covid_symptoms`, `select_one`, required): Indicate if you have experienced any COVID-19 symptoms or signs in the past 14 days.
* **Symptom Onset Date** (`symptom_onset`, `date`, required): If you answered 'True' to the previous question, enter the date your symptoms first appeared.
* **Have You Tested Positive for COVID-19** (`positive_test`, `select_one`, required): Indicate if you have tested positive for COVID-19.
* **Date of Positive Test** (`positive_test_date`, `date`, required): If you answered 'True' to the previous question, enter the date of your positive test.
* **Known Exposure to Confirmed COVID-19 Case** (`exposure_recent`, `select_one`, required): Indicate if you have had known exposure to a confirmed COVID-19 case.
* **Date of Close Contact** (`close_contact_date`, `date`, required): If you answered 'True' to the previous question, enter the date of your close contact.
* **COVID-19 Vaccination Status** (`vaccination_status`, `select_one`, required): Indicate your current COVID-19 vaccination status.
* **Vaccine Type Received** (`vaccine_type`, `select_multiple`, required): If vaccinated, select the type of vaccine you received.
* **First Dose Date** (`first_dose_date`, `date`, required): If vaccinated, enter the date you received your first dose.
* **Second Dose Date** (`second_dose_date`, `date`, required): If vaccinated and received two doses, enter the date of your second dose.
* **Booster Dose Received** (`booster_received`, `select_one`, required): Indicate if you have received a booster dose.
* **Booster Date** (`booster_date`, `date`, required): If you answered 'True' to the previous question, enter the date you received your booster dose.
* **High-Risk Conditions or Immunocompromised** (`high_risk`, `select_one`, required): Indicate if you have high-risk conditions or are immunocompromised.
* **Describe Risk Conditions** (`risk_conditions`, `text`, required): If you answered 'True' to the previous question, describe your high-risk conditions or immunocompromised status.
* **Cleared for Health Facility or Service** (`clearance`, `select_one`, required): Indicate your clearance status for the health facility or service.
* **Risk Assessment** (`risk_header`, `note`, required): Review your answers to ensure you meet the necessary clearance requirements.
