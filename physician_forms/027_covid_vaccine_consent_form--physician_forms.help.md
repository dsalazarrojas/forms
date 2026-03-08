...

# COVID Vaccine Consent Form - Help Guide
## Purpose
This form is used to obtain patient consent for COVID-19 vaccination and record patient information.

## How To Complete This Form

This form has multiple pages with various fields. Please fill out each page in order. Ensure that you have the patient's permission before filling out this form.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, `text`, required): Please enter the patient's full name as it appears on their identification documents.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the patient's date of birth in the correct format (MM/DD/YYYY).
* **Patient ID or Medical Record Number** (`patient_id`, `text`, optional): If the patient has a medical record number, please enter it here.
* **Email Address** (`email`, `email`, required): Enter the patient's email address.
* **Phone Number** (`phone`, `text`, required): Enter the patient's phone number.
* **COVID-19 Vaccine Type** (`vaccine_type`, `select_one`, required): Select the type of COVID-19 vaccine being administered (Pfizer-BioNTech, Moderna, Johnson & Johnson, Other).
* **Dose Number** (`dose_number`, `select_one`, required): Select the dose number of the vaccine (First dose, Second dose, Booster dose, Additional booster).
* **Benefits of COVID-19 Vaccine Explained** (`vaccine_benefits_explained`, `select_one`, required): Please confirm that the patient understands the benefits of the vaccine have been explained to them (True, False).
* **Risks of COVID-19 Vaccine Explained** (`vaccine_risks_explained`, `select_one`, required): Please confirm that the patient understands the risks of the vaccine have been explained to them (True, False).
* **Alternative Options Discussed** (`alternative_options_discussed`, `select_one`, required): Please confirm that the patient has discussed alternative options (Declining vaccine, waiting, etc.) (True, False).
* **All Patient Questions Answered** (`questions_answered`, `select_one`, required): Please confirm that all patient questions have been answered (True, False).
* **Known Drug Allergies** (`allergies`, `text`, optional): If the patient has any known drug allergies, please enter them here.
* **Allergy to Vaccine Components** (`vaccine_component_allergy`, `select_one`, required): Please confirm if the patient has an allergy to vaccine components (True, False, Unknown).
* **Previous Serious Vaccine Reaction** (`previous_vaccine_reaction`, `select_one`, required): Please confirm if the patient has had a previous serious vaccine reaction (True, False, Unknown).
* **Reaction Details** (`reaction_details`, `text`, optional): If the patient has had a previous serious vaccine reaction, please describe it here.
* **Serious Medical Conditions** (`medical_conditions`, `text`, optional): If the patient has any serious medical conditions that might affect vaccination, please enter them here.
* **Current Medications** (`current_medications`, `text`, optional): If the patient is currently taking any medications, please enter them here.
* **I Voluntarily Consent to Receive the Vaccine** (`consent_signature`, `select_one`, required): Please confirm that the patient consents to receive the vaccine (Yes, I consent, No, I do not consent).
* **Patient Signature** (`signature`, `text`, required): Please have the patient sign their full name.
* **Date of Consent** (`signature_date`, `date`, required): Enter the date of consent in the correct format (MM/DD/YYYY).
