# Classic Hair and Beauty COVID-19 Salon Services Consent Form - Help Guide

## Purpose
This form is designed to gather essential information from clients about their health status and vaccination history to ensure a safe and healthy environment for both clients and staff during the COVID-19 pandemic.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your name, email address, and phone number in the respective fields.
2. Select the date of your scheduled appointment.
3. Answer the health screening questions truthfully, selecting 'True' or 'False' for each symptom.
4. Indicate your COVID-19 vaccination status and whether you have received a booster dose (if applicable).
5. Confirm that you have read and understand the risks associated with in-person salon services.
6. Declare that the information provided is accurate and true.
7. Consent to receiving salon services during the pandemic.
8. Acknowledge that you have read and understood the consent form.
9. Finally, sign and date your consent.

## Field-by-Field Explanation

- **Client Name** (`client_name`, `text`, required): Please enter your full name, as it will be used for communication and contact purposes.

- **Email Address** (`client_email`, `email`, required): Enter a valid email address for contact and communication.

- **Phone Number** (`client_phone`, `text`, required): Enter your contact telephone number for communication and appointment reminders.

- **Appointment Date** (`service_date`, `date`, required): Select the date of your scheduled appointment.

- **-- Health Screening --** (`section_header_health`): This section is for health screening questions. Please answer truthfully to ensure a safe environment for all.

  - **Fever or Chills** (`fever_symptoms`, `select_one`, required): Answer 'True' if you have experienced fever or chills in the last 14 days.

  - **Cough, Shortness of Breath, or Difficulty Breathing** (`respiratory_symptoms`, `select_one`, required): Answer 'True' if you have experienced any of these symptoms in the last 14 days.

  - **Loss of Taste or Smell** (`taste_smell_symptoms`, `select_one`, required): Answer 'True' if you have lost your sense of taste or smell.

  - **Muscle or Body Aches** (`muscle_ache_symptoms`, `select_one`, required): Answer 'True' if you have experienced muscle or body aches in the last 14 days.

  - **Headache** (`headache_symptoms`, `select_one`, required): Answer 'True' if you have had a headache.

  - **Gastrointestinal Symptoms** (`gastrointestinal_symptoms`, `select_one`, required): Answer 'True' if you have experienced sore throat, nausea, vomiting, or diarrhea.

- **-- Exposure Risk --** (`section_header_exposure`): This section is for potential exposure risks.

  - **COVID-19 Exposure** (`covid_exposure`, `select_one`, required): Answer 'True' if you have been in close contact with someone confirmed to have COVID-19 in the last 14 days.

  - **Travel Exposure** (`travel_exposure`, `select_one`, required): Answer 'True' if you have traveled to a high-risk area recently.

- **-- Vaccination Status --** (`section_header_vaccination`): This section is for your COVID-19 vaccination status.

  - **COVID-19 Vaccination Status** (`vaccination_status`, `select_one`, required): Indicate whether you are Fully Vaccinated, Partially Vaccinated, Not Vaccinated, or Prefer Not to Disclose.

  - **Received Booster Dose** (`booster_status`, `select_one`, optional): If you are vaccinated, answer 'True' if you have received a booster dose.

- **-- Consent and Acknowledgment --** (`section_header_consent`): This section is for consent and acknowledgment.

  - **Acknowledge Risks** (`acknowledge_risks`, `select_one`, required): Confirm that you have read and understand the potential risks of in-person salon services.

  - **Health Declaration** (`health_declaration`, `select_one`, required): Declare that the information provided is true and accurate.

  - **Consent to Services** (`consent_to_services`, `select_one`, required): Confirm that you consent to receiving salon services during the COVID-19 pandemic.

  - **Signature Acknowledgment** (`signature_acknowledgment`, `select_one`, required): Acknowledge that you have read and understood the consent form.

  - **Consent Date** (`consent_date`, `date`, required): Sign and date your consent.

Note: This guide is based on the provided YAML fields, and explanations are provided for each field's label to ensure clarity and accuracy.
