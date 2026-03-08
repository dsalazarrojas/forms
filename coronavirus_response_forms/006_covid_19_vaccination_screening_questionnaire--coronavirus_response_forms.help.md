<thinking>
This form is designed to collect information from patients to assess their eligibility for COVID-19 vaccination. The form will help healthcare professionals make informed decisions about vaccination administration. The form will ask for patient demographics, health screening questions, medical history, and consent to vaccination. This form is meant to be completed by patients or their authorized representatives and will help ensure that patients receive safe and appropriate care.
</thinking>

# COVID-19 Vaccination Screening Questionnaire - Help Guide

## Purpose
This form is designed to collect information from patients to assess their eligibility for COVID-19 vaccination. The form will help healthcare professionals make informed decisions about vaccination administration.

## How To Complete This Form
To complete this form, simply follow the instructions below:

1. Fill in your personal information, including your first name, last name, date of birth, email address, and phone number.
2. Answer the health screening questions honestly and accurately, including questions about severe allergic reactions, current illness, and previous COVID-19 vaccination history.
3. Provide information about your medical conditions, current medications, and blood thinner use.
4. Answer questions about your immunosuppressed status, pregnancy or breastfeeding status, and physician clearance.
5. Finally, indicate your consent to receive the COVID-19 vaccine.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Your first name.
* **Last Name** (`last_name`, `text`, required): Your last name.
* **Date of Birth** (`date_of_birth`, `date`, required): Your date of birth in MM-DD-YYYY format.
* **Email Address** (`patient_email`, `email`, required): Your current email address.
* **Phone Number** (`patient_phone`, `text`, required): Your contact phone number.
* **Severe Allergic Reactions to Vaccine Components** (`severe_allergic_reactions`, `select_one`, required): Do you have any severe allergic reactions to vaccine components?
* **If Yes, Please Describe the Allergy** (`allergic_reaction_details`, `text`, required): If you answered "Yes" to the previous question, please describe the allergy.
* **Are You Currently Ill** (`current_illness`, `select_one`, required): Do you have an acute illness or fever?
* **Describe Current Symptoms** (`illness_details`, `text`, required): If you answered "Yes" to the previous question, please describe your symptoms.
* **Have You Tested Positive for COVID-19 in the Last 90 Days** (`covid_positive_recently`, `select_one`, required): Have you tested positive for COVID-19 in the last 90 days?
* **Date of Positive Test if Applicable** (`positive_test_date`, `date`, required): If you answered "Yes" to the previous question, please provide the date of your positive test.
* **Previous COVID-19 Vaccines** (`previous_covid_vaccines`, `number`, required): How many doses of previous COVID-19 vaccines have you received?
* **Type of Previous COVID-19 Vaccine** (`previous_vaccine_type`, `select_one`, optional): What type of vaccine did you receive before?
* **Adverse Reactions to Previous COVID-19 Vaccines** (`adverse_reactions_previous_vaccines`, `select_one`, required): Did you experience any adverse reactions to previous COVID-19 vaccines?
* **Select Any Chronic Medical Conditions** (`chronic_conditions`, `select_multiple`, optional): Do you have any chronic medical conditions?
* **Current Medications** (`current_medications`, `text`, optional): List any current medications you are taking.
* **Do You Take Blood Thinning Medications** (`blood_thinner_use`, `select_one`, required): Do you take blood thinner medications like warfarin or aspirin therapy?
* **Are You Immunocompromised or Taking Immunosuppressive Medications** (`immunosuppressed`, `select_one`, required): Are you immunocompromised or taking immunosuppressive medications?
* **Are You Currently Pregnant or Breastfeeding** (`pregnancy_status`, `select_one`, optional): Are you currently pregnant or breastfeeding?
* **Do You Have Physician Clearance to Receive the Vaccine** (`physician_clearance`, `select_one`, required): Has your doctor approved this vaccination?
* **I Consent to COVID-19 Vaccination** (`consent_statement`, `select_one`, required): Do you consent to receive the COVID-19 vaccination?
