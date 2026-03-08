# Army Counseling Form - Help Guide
## Purpose
The Army Counseling Form is designed to collect information from Army personnel about their mental health concerns, including combat exposure, current symptoms, medical history, and treatment history. This form helps the Army's mental health services understand the individual's situation and provide appropriate support.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in your full name and email address in the "Full Name" and "Email Address" fields, respectively.
* Enter your phone number in the "Phone Number" field.
* If you have a military rank, enter it in the "Military Rank - if applicable" field.
* Select your current service status from the options in the "Current Service Status" field.
* If applicable, provide referral information in the "Referral Information" section.
* Select how you were referred to counseling from the options in the "How were you referred to counseling" field.
* Enter the date of your referral in the "Date of Referral" field, if applicable.
* In the "Presenting Concerns" section, select the primary reason you are seeking counseling from the options.
* Describe your concerns in detail in the "Please describe your concerns in detail" field.
* Select how long you have experienced the symptoms from the options in the "How long have you experienced these symptoms" field.
* If applicable, describe any combat-related trauma in the "If yes, describe combat-related trauma" field.
* In the "Current Symptoms" section, select any symptoms you are currently experiencing from the options.
* Select your level of suicidal thoughts from the options in the "Are you having thoughts of harming yourself" field.
* In the "Medical and Treatment History" section, list any current medications and whether you have had previous counseling or therapy.
* Select your level of substance use concerns from the options in the "Substance use or alcohol concerns" field.
* In the "Support System" section, select your level of family support from the options.
* If you have additional comments or information you would like to share, enter them in the "Additional information you would like to share" field.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, `text`, required): Enter your full name as it appears on your official identification.
* **Email Address** (`patient_email`, `email`, required): Enter your official email address.
* **Phone Number** (`patient_phone`, `text`, required): Enter your phone number.
* **Military Rank - if applicable** (`rank`, `text`, optional): If you have a military rank, enter it here.
* **Current Service Status** (`service_status`, `select_one`, required): Select your current service status from the options.
* **How were you referred to counseling** (`referral_source`, `select_one`, required): Select how you were referred to counseling from the options.
* **Date of Referral** (`referral_date`, `date`, optional): Enter the date of your referral.
* **Primary reason for seeking counseling** (`primary_concern`, `select_one`, required): Select the primary reason you are seeking counseling from the options.
* **Please describe your concerns in detail** (`concern_details`, `text`, required): Describe your concerns in detail.
* **How long have you experienced these symptoms** (`symptom_duration`, `select_one`, required): Select how long you have experienced the symptoms from the options.
* **Have you had combat exposure** (`combat_exposure`, `select_one`, optional): Select whether you have had combat exposure.
* **If yes, describe combat-related trauma** (`combat_trauma`, `text`, optional): If you have had combat exposure, describe the trauma you experienced.
* **Which symptoms are you experiencing** (`symptom_list`, `select_multiple`, required): Select any symptoms you are currently experiencing from the options.
* **Are you having thoughts of harming yourself** (`suicide_risk`, `select_one`, required): Select your level of suicidal thoughts from the options.
* **Current medications** (`current_medications`, `text`, optional): List any current medications.
* **Previous counseling or therapy** (`previous_counseling`, `select_one`, required): Select whether you have had previous counseling or therapy.
* **Substance use or alcohol concerns** (`substance_use`, `select_one`, required): Select your level of substance use or alcohol concerns from the options.
* **Family support available** (`family_support`, `select_one`, optional): Select your level of family support from the options.
* **Additional information you would like to share** (`additional_comments`, `text`, optional): Enter any additional information you would like to share.
