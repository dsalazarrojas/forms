<thinking>Before creating the help guide, let's first understand the purpose and context of the COVID-19 Antibody Screening Consent Form. This form is used for patients to provide information about themselves and their medical history to facilitate the antibody screening process. It's essential to ensure patients understand the form's purpose and their role in the screening process. We'll use this form to guide patients through the process and address any questions or doubts they may have.</thinking>

# COVID 19 Antibody Screening Consent Form - Help Guide
## Purpose
The COVID-19 Antibody Screening Consent Form is a patient-facing form designed to gather essential information about a patient's medical history, reason for testing, and consent for antibody screening. This form helps healthcare providers understand the patient's eligibility for testing and ensure they are aware of the risks and benefits associated with the screening process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Patient Full Name, Date of Birth, Email Address, and Phone Number.
2. Select your reason for the antibody screening (Symptomatic, Asymptomatic, Exposed Contact, Healthcare Worker, Research, or Other).
3. Indicate if you have experienced COVID-19 symptoms in the past 14 days (True or False).
4. If you have symptoms, provide a description.
5. Provide the duration of your illness.
6. If applicable, report a prior positive COVID-19 test and the date it was taken.
7. Confirm your understanding of the antibody screening's risks and benefits.
8. Sign and date the consent form, indicating your willingness to participate in the screening process.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, `text`, required): Enter your complete name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Email Address** (`patient_email`, `email`, required): Enter your valid email address where you can be reached for test results and updates.
* **Phone Number** (`patient_phone`, `text`, required): Enter your phone number where you can be reached for test results and updates.
* **Medical Record Number** (`medical_record_number`, `text`, optional): If you have an assigned medical record number, enter it here.
* **Reason for Testing** (`testing_reason`, `select_one`, required): Select the reason for your antibody screening:
	+ Symptomatic: You have symptoms consistent with COVID-19.
	+ Asymptomatic: You are asymptomatic but have been exposed to COVID-19.
	+ Exposed Contact: You have been in contact with someone infected with COVID-19.
	+ Healthcare Worker: You are a healthcare worker who may be at risk.
	+ Research: You are participating in a research study.
	+ Other: Select this option if you have other reasons for testing.
* **COVID-19 Symptoms** (`symptoms`, `select_one`, required): Indicate if you have experienced COVID-19 symptoms in the past 14 days:
	+ True: Yes, you have symptoms.
	+ False: No, you do not have symptoms.
* **Symptom Description** (`symptom_description`, `text`, optional): If you have symptoms, describe them in detail.
* **Duration of Illness** (`illness_duration`, `text`, optional): If you have symptoms, describe the duration of your illness.
* **Prior Positive Test** (`prior_positive_test`, `select_one`, required): If you have a prior positive COVID-19 test, select this option:
	+ True: You have had a prior positive test.
	+ False: You have not had a prior positive test.
	+ Unknown: You are unsure or do not know.
* **Date of Prior Test** (`test_date`, `date`, optional): If you have a prior positive test, enter the date of the test.
* **Understand Risks and Benefits** (`understanding_confirmation`, `select_one`, required): Confirm your understanding of the risks and benefits of antibody screening:
	+ Yes, I Understand: You understand the risks and benefits.
	+ No, I Need More Information: You require further information before proceeding.
* **Consent** (`consent`, `select_one`, required): Sign your consent to participate in the antibody screening:
	+ I Consent: You agree to participate.
	+ I Do Not Consent: You decline to participate.
* **Date of Consent** (`consent_date`, `date`, required): Enter the date of your consent.
