# COVID 19 Exposure Agreement Form - Help Guide

## Purpose
This form is designed to gather information from patients or individuals who have been exposed to COVID-19. It will help healthcare professionals understand their exposure history, current health status, and agreement to follow recommended health guidelines.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the patient's personal details, including their name, date of birth, and contact information.
2. Provide information about the exposure event, including the date and location of exposure.
3. Answer questions about the patient's current health status, including whether they are experiencing symptoms and their vaccination status.
4. Confirm their understanding of quarantine and isolation requirements.
5. Acknowledge the risks of COVID-19 exposure and agree to follow recommended health guidelines.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their ID or government-issued document.
* **Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in the format `MM/DD/YY`.
* **Patient ID** (`patient_id`, text, required): Enter a unique patient ID or number assigned to the patient.
* **Phone Number** (`phone_number`, text, required): Enter the patient's phone number where they can be reached for further questions or instructions.
* **Email Address** (`email_address`, email, required): Enter the patient's email address where they can be reached for further questions or instructions.
* **Date of Potential Exposure** (`exposure_date`, date, required): Enter the date when the patient was potentially exposed to COVID-19.
* **Location of Exposure** (`exposure_location`, text, required): Enter the location where the patient was exposed to COVID-19.
* **Details of Exposure** (`exposure_details`, text, required): Describe the circumstances surrounding the exposure event, including how it occurred and any other relevant details.
* **Information About Person Exposed To** (`contact_person_info`, text, optional): If the patient was exposed to another person, provide their name and contact information.
* **Duration of Exposure** (`exposure_duration`, text, optional): Describe how long the patient was exposed to COVID-19.
* **Currently Experiencing Symptoms** (`current_symptoms`, select_one, required): Answer whether the patient is experiencing any COVID-19 symptoms. Options: Yes/No.
* **If yes, describe symptoms** (`symptoms_description`, text, optional): Describe the symptoms the patient is experiencing, if any.
* **Vaccination Status** (`vaccination_status`, select_one, required): Answer the patient's vaccination status. Options: Fully vaccinated with booster/Fully vaccinated without booster/Partially vaccinated/Not vaccinated.
* **Prior COVID-19 Diagnosis** (`prior_covid`, select_one, required): Answer whether the patient has had a prior COVID-19 diagnosis. Options: Yes/No/Unsure.
* **Understanding of Quarantine Requirements** (`quarantine_plan`, select_one, required): Confirm whether the patient understands the quarantine requirements. Options: Yes/No.
* **Will isolate for recommended number of days** (`isolation_days`, select_one, required): Answer whether the patient is willing to isolate for the recommended number of days. Options: Yes/No/Unable to comply.
* **Concerns About Isolation Compliance** (`isolation_concerns`, text, optional): If the patient has concerns, describe them.
* **I acknowledge the risks of COVID-19 exposure** (`risk_ackednowledge`, select_one, required): Confirm that the patient understands the risks of COVID-19 exposure. Options: Yes/No.
* **I agree to follow recommended health guidelines** (`agreement_signature`, select_one, required): Confirm that the patient agrees to follow recommended health guidelines. Options: Yes/No.
* **Date of Agreement** (`agreement_date`, date, required): Enter the date when the patient signed this form.

## Tips
* Please fill out this form accurately and thoroughly to ensure the healthcare professionals can provide the best care for your health.
* If you have any questions or concerns, please ask your healthcare provider for clarification.
* This form is confidential and will only be used for the purpose of providing healthcare services.
