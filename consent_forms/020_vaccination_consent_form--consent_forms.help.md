<thinking>
This form appears to be a general-purpose vaccination consent form, but without further context, it's difficult to determine the specific use case or the type of vaccination being administered. It's essential to verify that this form is being used for the correct purpose and not duplicating efforts with other forms.
The form seems to capture patient demographic information, medical history, allergies, and contact information, which are standard requirements for vaccination administration. However, the specific fields and their purposes should be reviewed to ensure accuracy.
The form allows patients to select their preferred vaccination type, which may indicate that it's intended for a variety of vaccinations. The "Consent Given" field is a select_multiple type, which could imply that patients may be consenting to multiple vaccination types or that it's meant to capture multiple consent dates.
The form also includes fields for medical notes, which could be used for recording any necessary medical information or instructions.
The "Patient Signature" and "Provider Signature" fields are included, which is a standard requirement for consent forms.
The "Medical Provider" and "Facility" fields suggest that the form is used in a clinical setting.
The "Patient Age," "Height," "Weight," "Patient Email," "Patient Phone," "Patient Address," "City," "State," and "Country" fields indicate that the form is gathering demographic information.
</thinking>

# Vaccination Consent Form - Help Guide

## Purpose
This form is designed to gather necessary information for vaccination administration, including patient demographics, medical history, allergies, and contact information. However, please verify that this form is being used for the correct purpose and not duplicating efforts with other forms.

## How To Complete This Form
To fill out this form, follow these steps:

1. Fill in your patient information, including name, age, height, weight, email, phone number, address, city, state, and country.
2. Select the type of vaccination you are receiving.
3. Provide any medical history, allergies, or medical notes that the healthcare provider should be aware of.
4. Select your preferred emergency contact.
5. Sign and date the form to indicate your consent for the vaccination.
6. Sign and date the form as the healthcare provider to confirm that you have received the information and consent.

## Field-by-Field Explanation

* **Patient Information** (`patient_information`, `text`, required: false): This field is used to capture the patient's name, and other identifying information.
* **Vaccination Type** (`vaccination_type`, `select_one`, required: false): Select the type of vaccination you are receiving.
* **Consent Given** (`consent_given`, `select_multiple`, required: false): This field allows you to select multiple vaccination types you are consenting to.
* **Medical History** (`medical_history`, `text`, required: false): Provide any relevant medical history that the healthcare provider should be aware of.
* **Allergies** (`allergies`, `text`, required: false): List any allergies the patient has.
* **Contact Information** (`contact_information`, `text`, required: false): Provide emergency contact information.
* **Emergency Contact** (`emergency_contact`, `text`, required: false): Select your preferred emergency contact.
* **Medical Notes** (`medical_notes`, `note`, required: false): Enter any necessary medical information or instructions.
* **Vaccination Date** (`vaccination_date`, `date`, required: false): Enter the date of the vaccination.
* **Vaccination Time** (`vaccination_time`, `time`, required: false): Enter the time of the vaccination.
* **Patient Signature** (`patient_signature`, `select_one`, required: false): Sign and date the form to confirm your consent.
* **Provider Signature** (`provider_signature`, `select_one`, required: false): Sign and date the form to confirm that you have received the information and consent.
* **Medical Provider** (`medical_provider`, `text`, required: false): Enter your healthcare provider's name.
* **Facility** (`facility`, `text`, required: false): Enter the healthcare facility or clinic name.
* **Patient Age** (`patient_age`, `number`, required: false): Enter your age.
* **Height** (`height`, `number`, required: false): Enter your height in centimeters or feet and inches.
* **Weight** (`weight`, `number`, required: false): Enter your weight in kilograms or pounds.
* **Patient Email** (`patient_email`, `email`, required: false): Enter your email address.
* **Patient Phone** (`patient_phone`, `text`, required: false): Enter your phone number.
* **Patient Address** (`patient_address`, `text`, required: false): Enter your address.
* **City** (`patient_city`, `text`, required: false): Enter the city where you live.
* **State** (`patient_state`, `text`, required: false): Enter the state where you live.
* **Country** (`patient_country`, `text`, required: false): Enter the country where you live.
* **Zip** (`patient_zip`, `text`, required: false): Enter your zip code.
* **Signature** (`provider_signature`, `select_one`, required: false): Sign and date the form to confirm that you have received the information and consent.

Note: The fields marked as "required: false" are not mandatory, but it's recommended that you fill them out for the healthcare provider's reference.
