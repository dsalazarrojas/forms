# COVID 19 Client Health Questionnaire - Help Guide
## Purpose
This form collects information about a patient's health status, medical history, and contact information for COVID-19 assessment and treatment. It helps healthcare professionals gather essential data for patient care and risk assessment.

## How To Complete This Form
1. Fill in your personal details: Provide your full name, date of birth, email, phone number, address, city, state, and zip code.
2. Select your gender.
3. List your emergency contact name and phone number.
4. Answer questions about your current symptoms, medical conditions, medications, and allergies.
5. Provide information about your vaccination status and travel history.
6. Select your healthcare worker status and essential worker status.
7. Specify your living situation, household members, and potential high-risk household members.
8. Choose your reason for visit and provide any additional health notes.
9. Sign the form by typing your full name.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your full legal name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **Gender** (`gender`, select_one, required): Select your gender from Male, Female, Other, or Prefer Not to Say.
* **Email Address** (`email_address`, email, required): Enter your email address for communication purposes.
* **Phone Number** (`phone_number`, text, required): Enter your best contact number.
* **Street Address** (`address`, text, required): Enter your complete address.
* **City** (`city`, text, required): Enter the city where you reside.
* **State** (`state`, text, required): Enter your state or province of residence.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the full name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter your contact phone number.
* **Primary Care Physician** (`primary_care_physician`, text, not required): Enter your doctor's name, if applicable.
* **Physician Phone** (`physician_phone`, text, not required): Enter your doctor's phone number, if applicable.
* **Insurance Provider** (`insurance_provider`, text, not required): Enter your insurance company name, if applicable.
* **Insurance ID** (`insurance_id`, text, not required): Enter your member ID number, if applicable.
* **Questionnaire Date** (`questionnaire_date`, date, required): Enter the current date.
* **Current Symptoms** (`current_symptoms`, select_multiple, required): Select all the symptoms that apply from the list.
* **Symptom Severity** (`symptom_severity`, select_one, not required): If symptomatic, select the severity of your symptoms from Mild, Moderate, Severe, or Not Applicable.
* **Known COVID-19 Exposure** (`known_exposure`, select_one, required): Select Yes - Confirmed case, Yes - Suspected case, False, or Unsure if you have known exposure in the past 14 days.
* **Recent Travel** (`recent_travel`, select_one, required): Select No travel, Domestic travel, or International travel if you have traveled in the past 14 days.
* **Travel Locations** (`travel_locations`, text, not required): Enter the locations you have visited, if applicable.
* **Previous COVID-19 Infection** (`previous_covid_infection`, select_one, required): Select Yes - Confirmed by test, Yes - Suspected, False, or Unsure if you have had COVID-19.
* **Infection Date** (`infection_date`, date, not required): Enter the date of your previous COVID-19 infection, if known.
* **Vaccination Status** (`vaccination_status`, select_one, required): Select Not vaccinated, Partially vaccinated - 1 dose, Fully vaccinated - Primary series, Boosted, or Prefer not to say if you are not vaccinated.
* **Vaccine Brand** (`vaccine_brand`, text, not required): Enter the brand of the COVID-19 vaccine you received, if applicable.
* **Underlying Medical Conditions** (`medical_conditions`, select_multiple, required): Select all the medical conditions that apply from the list.
* **Current Medications** (`current_medications`, text, not required): List all your current medications, if applicable.
* **Allergies** (`allergies`, text, not required): List any allergies you have, if applicable.
* **Smoking Status** (`smoking_status`, select_one, required): Select Never smoked, Former smoker, or Current smoker.
* **Occupation** (`occupation`, text, required): Enter your current job.
* **Healthcare Worker** (`healthcare_worker`, select_one, required): Select True or False if you are a healthcare worker.
* **Essential Worker** (`essential_worker`, select_one, required): Select True or False if you are an essential worker.
* **Living Situation** (`living_situation`, select_one, required): Select Single family home, Apartment, Dormitory, Group home, Long-term care facility, Homeless or shelter, or Other.
* **Number of Household Members** (`household_members`, number, required): Enter the number of people living with you.
* **High Risk Household Members** (`high_risk_household`, select_one, required): Select True, False, or Unsure if you have high-risk household members.
* **Reason for Visit** (`reason_for_visit`, select_one, required): Select COVID-19 testing, Vaccination, Symptoms evaluation, Follow-up, or Other medical care.
* **Additional Health Notes** (`additional_health_notes`, text, not required): Enter any other health information.
* **Patient Signature** (`patient_signature`, text, required): Type your full name.
* **Date Signed** (`date_signed`, date, required): Enter the current date.

## Tips
* Ensure you fill out the form accurately and honestly.
* If you are unsure about any of the questions, select the corresponding option or enter the information as best as you can.
* Review the form carefully before submitting it.
* If you need assistance, please ask your healthcare professional for help.
