# COVID 19 Test Registration Form - Help Guide
## Purpose
This form is designed to collect information from patients for COVID-19 testing. It's essential to fill it out accurately to aid in efficient testing and result processing.

## How To Complete This Form
1. Fill out the form completely and accurately to provide the necessary information for testing and result processing.
2. Ensure that all required fields are filled in, indicated by a red asterisk (\*).

## Field-by-Field Explanation
* **Registration Date** (`registration_date`, `date`, required): The date of registration for testing.
* **Patient First Name** (`patient_first_name`, `text`, required): The patient's legal first name.
* **Patient Last Name** (`patient_last_name`, `text`, required): The patient's legal last name.
* **Date of Birth** (`date_of_birth`, `date`, required): The patient's date of birth (MM/DD/YYYY).
* **Gender** (`gender`, `select_one`, required): Select the patient's gender (Male, Female, Non-binary, Prefer not to say, Other).
* **Race** (`race`, `select_one`, optional): Select the patient's race for demographic reporting (American Indian or Alaska Native, Asian, Black or African American, Native Hawaiian or Other Pacific Islander, White, Other, Prefer not to say).
* **Ethnicity** (`ethnicity`, `select_one`, optional): Select the patient's ethnicity for demographic reporting (Hispanic or Latino, Not Hispanic or Latino, Prefer not to say).
* **Phone Number** (`phone_number`, `text`, required): The patient's contact phone number.
* **Email Address** (`email_address`, `email`, required): The patient's contact email address.
* **Home Address** (`address`, `text`, required): The patient's street address.
* **City** (`city`, `text`, required): The city of the patient's address.
* **State** (`state`, `text`, required): The state of the patient's address.
* **ZIP Code** (`zip_code`, `text`, required): The patient's zip code.
* **Preferred Language** (`preferred_language`, `select_one`, required): Select the patient's preferred language for communication (English, Spanish, Chinese, Vietnamese, Korean, Tagalog, Other).
* **Do you have health insurance?** (`insurance_status`, `select_one`, required): Select whether the patient has health insurance or not (True, False).
* **Insurance Provider** (`insurance_provider`, `text`, optional): If applicable, enter the patient's insurance provider.
* **Insurance Policy Number** (`insurance_policy_number`, `text`, optional): If applicable, enter the patient's insurance policy number.
* **Reason for Testing** (`reason_for_testing`, `select_one`, required): Select the reason for testing (Experiencing symptoms, Close contact with positive case, Work requirement, School requirement, Travel requirement, Medical procedure requirement, Event requirement, Personal peace of mind).
* **Are you currently experiencing any symptoms?** (`current_symptoms`, `select_one`, required): Select whether the patient is currently experiencing symptoms (True, False).
* **Symptoms** (`symptom_list`, `select_multiple`, optional): Select all symptoms the patient is experiencing (Fever or chills, Cough, Shortness of breath, Fatigue, Muscle aches, Headache, Loss of taste or smell, Sore throat, Congestion, Nausea or vomiting, Diarrhea).
* **When did symptoms start?** (`symptom_onset_date`, `date`, optional): If applicable, enter the date the patient's symptoms started.
* **Date of Known Exposure** (`exposure_date`, `date`, optional): If applicable, enter the date of known exposure.
* **Preferred Test Type** (`preferred_test_type`, `select_one`, required): Select the patient's preferred test type (PCR test - most accurate, Rapid antigen test - fast results, No preference).
* **Preferred Appointment Date** (`preferred_appointment_date`, `date`, required): Select the patient's preferred appointment date.
* **Preferred Appointment Time** (`preferred_appointment_time`, `time`, optional): If applicable, select the patient's preferred appointment time.
* **Preferred Testing Location** (`testing_location_preference`, `select_one`, required): Select the patient's preferred testing location (Main testing site, Drive-through location, Mobile testing unit, Home collection).
* **How will you get to the testing site?** (`transportation_method`, `select_one`, required): Select the patient's transportation method (Personal vehicle, Public transportation, Ride from friend or family, Ride share service, Walking).
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required): Enter the emergency contact's full name.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): Enter the emergency contact's phone number.
* **How would you like to receive results?** (`result_delivery_method`, `select_one`, required): Select the preferred result delivery method (Email, Text message, Phone call, Patient portal, Mail).
* **I consent to COVID-19 testing** (`consent_to_testing`, `select_one`, required): Select that you consent to COVID-19 testing.
* **I acknowledge receipt of HIPAA privacy notice** (`hipaa_acknowledgment`, `select_one`, required): Select that you have acknowledged the HIPAA privacy notice.
* **Signature Date** (`patient_signature_date`, `date`, required): Date signed.

**Tips**
* Ensure all fields with a red asterisk (\*) are filled out.
* If you experience any issues or have questions, please contact us at [support email/phone number].
* This form is for COVID-19 testing registration only; it's not intended for any other purpose.
