# COVID 19 Patient Pre Screening Disclosure Form V2 - Help Guide

## Purpose

This help guide is intended for patients who need to complete a pre-screening form before receiving medical care. The form aims to gather essential information about the patient's health status before proceeding with the screening process. Please note that this form is a mandatory requirement for patients who wish to receive medical care.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out your name, date of birth, email address, phone number, and appointment date on pages 1-5.
2. Answer the pre-screening assessment questions on pages 6-13, indicating your symptoms and health status.
3. Acknowledge that you have read the pre-screening instructions, responded truthfully, understand the potential spread of COVID-19, and accept the pre-screening process.
4. Finally, submit the form on page 19, which will record the date of your screening submission.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, `text`, required): Enter your full name as it appears on your government-issued ID.
* **Date of Birth** (`patient_dob`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Email Address** (`patient_email`, `email`, required): Enter your email address where you can be reached.
* **Phone Number** (`patient_phone`, `text`, required): Enter your contact phone number where you can be reached.
* **Appointment Date** (`appointment_date`, `date`, required): Enter the date of your scheduled appointment.
* **COVID-19 Symptoms** (`covid_symptoms`, `select_one`, required): Answer whether you currently experience COVID-19 symptoms, such as fever, cough, or shortness of breath.
* **Diagnosed with COVID-19 in the past 14 days** (`diagnosed_last_14_days`, `select_one`, required): Confirm whether you have been diagnosed with COVID-19 in the past 14 days.
* **Close contact with a confirmed COVID-19 case in the past 14 days** (`close_contact_last_14_days`, `select_one`, required): Answer whether you have had close contact with someone confirmed to have COVID-19 in the past 14 days.
* **Temperature above 100.4F or feel feverish** (`temperature_fever`, `select_one`, required): Confirm whether you have a temperature above 100.4F or feel feverish.
* **New or persistent cough** (`cough`, `select_one`, required): Answer whether you have a new or persistent cough.
* **Shortness of breath or difficulty breathing** (`shortness_of_breath`, `select_one`, required): Confirm whether you experience shortness of breath or difficulty breathing.
* **I have read the pre-screening instructions** (`read_instructions`, `select_one`, required): Acknowledge that you have read the pre-screening instructions.
* **My responses are truthful and accurate** (`truthful_responses`, `select_one`, required): Confirm that your responses are truthful and accurate.
* **I understand COVID-19 can spread from asymptomatic individuals** (`understand_covid_spread`, `select_one`, required): Confirm that you understand the potential spread of COVID-19.
* **I accept this pre-screening process** (`accept_screening`, `select_one`, required): Accept the pre-screening process.
* **Screening Submission Date** (`screening_date`, `date`, required): This field is automatically populated with the current date. Please do not alter it.
