# COVID 19 Vaccine Screening Form - Help Guide
## Purpose
This form is designed to collect information for a COVID-19 vaccine screening. It helps to identify potential risks and allergies before administering the vaccine. The form is used by medical professionals to evaluate an individual's eligibility for vaccination.

## How To Complete This Form
To complete this form, please follow the instructions below:

* Fill out the form in its entirety, as indicated by the required fields.
* Enter accurate and truthful information in each field.
* If you are unsure about any of the questions, please ask a medical professional for guidance.

## Field-by-Field Explanation
* **Full Name** (`employee_name`, text, required): Please enter your full name.
* **Employee ID** (`employee_id`, text, optional): This is your employee ID number, if applicable.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the correct format (MM/DD/YY).
* **Department** (`department`, text, optional): This is your department or work location.
* **Email Address** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone`, text, required): Enter your phone number.
* **Screening Date** (`screening_date`, date, required): The date of the screening.
* **Previous COVID-19 Infection** (`previous_covid`, select_one, required): Answer 'True' if you have previously had COVID-19.
* **Date of Infection** (`covid_infection_date`, date, optional): If you answered 'True' to the previous question, enter the date of your previous COVID-19 infection.
* **Currently Experiencing Illness** (`current_illness`, select_one, required): Answer 'True' if you are currently experiencing fever, cough, or other symptoms.
* **Severe Allergies** (`severe_allergies`, select_one, required): Answer 'True' if you have severe allergies, especially to vaccine components.
* **Allergy Details** (`allergy_details`, text, optional): If you have severe allergies, describe them here.
* **Immunocompromised** (`immune_compromised`, select_one, required): Answer 'True' if you have a weakened immune system.
* **Medical Conditions** (`medical_conditions`, select_multiple, optional): Select any serious health conditions you have, such as heart disease, diabetes, etc.
* **Current Medications** (`medications`, text, optional): Enter any immunosuppressant medications you are currently taking.
* **Pregnant or Breastfeeding** (`pregnant`, select_one, optional): Answer 'Yes, pregnant' or 'Yes, breastfeeding' if applicable.
* **Previous Adverse Vaccine Reaction** (`previous_vaccine_reaction`, select_one, required): Answer 'True' if you have had a previous adverse reaction to the vaccine.
* **Reaction Details** (`reaction_details`, text, optional): Describe your previous adverse reaction.
* **Cleared for COVID-19 Vaccination** (`cleared_for_vaccine`, select_one, required): Answer 'Yes, cleared' if you are cleared for vaccination, or 'No, contraindicated' if not.
* **Physician Notes** (`physician_notes`, text, optional): Enter any additional information about your health status.

Note: Please answer all questions honestly and accurately to ensure the best possible outcome. If you are unsure about any question, please ask a medical professional for guidance.
