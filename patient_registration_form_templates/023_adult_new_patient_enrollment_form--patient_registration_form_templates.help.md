<thinking>
This form is designed to collect demographic information from adult patients, including their contact details, insurance information, and health screening data. It is intended to be used in a medical or healthcare setting to gather essential details necessary for patient enrollment and care planning. 

The form has 19 fields, divided into several sections for easier navigation. It includes fields for personal details like date of birth, gender, and contact information, as well as sections for insurance and emergency contact details. The form also includes fields for health screening data like current health conditions and medications. 

The form has a mix of required and optional fields, with the required fields being marked as such in the YAML. Some fields have specific hints to guide the user in providing accurate and complete information.

This form is intended to be filled out by adult patients, and the fields are designed to collect the necessary information for patient care and enrollment in a medical or healthcare setting. 

Please ensure you are completing the form accurately and thoroughly. If you have any doubts or questions, please don't hesitate to ask your healthcare provider for assistance.</thinking>

# Adult New Patient Enrollment Form - Help Guide
## Purpose
This form is designed to collect demographic information from adult patients, including contact details, insurance information, and health screening data, to facilitate patient enrollment and care planning in a medical or healthcare setting.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by filling in the demographic information section, which includes your full name, date of birth, and contact details.
2. Select your gender from the provided options.
3. Enter your street address, including city, state, and zip code.
4. Provide your primary phone number and patient email address.
5. Move on to the insurance section, where you will enter your primary insurance carrier and policy member ID.
6. If applicable, enter your group number.
7. In the emergency contact section, provide the name and phone number of an emergency contact person.
8. Specify your relationship to the patient.
9. Select all that apply to your current health conditions.
10. List your current medications, including dosage if known.
11. Finally, select the primary reason for your visit.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_full_name`, `text`, required): Enter your full name as it appears on your government-issued ID or passport.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format `MM/DD/YYYY`.
* **Gender** (`gender`, `select_one`, optional): Select your gender from the provided options.
* **Street Address** (`street_address`, `text`, required): Enter your street address, including city, state, and zip code.
* **Primary Phone Number** (`primary_phone_number`, `text`, required): Enter your primary phone number.
* **Patient Email** (`patient_email`, `email`, required): Enter your patient email address for appointment reminders and portal access.
* **Primary Insurance Carrier** (`primary_insurance_carrier`, `text`, required): Enter your primary insurance carrier.
* **Policy Member ID** (`policy_member_id`, `text`, required): Enter your policy member ID.
* **Group Number** (`group_number`, `text`, optional): Enter your group number if applicable.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required): Enter the name of your emergency contact person.
* **Relationship to Patient** (`relationship_to_patient`, `text`, required): Specify your relationship to the patient (e.g. family member, friend, etc.).
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): Enter the phone number of your emergency contact person.
* **Current Health Conditions** (`current_health_conditions`, `select_multiple`, optional): Select all that apply to your current health conditions.
* **Current Medications List** (`current_medications_list`, `text`, optional): List your current medications, including dosage if known.
* **Primary Reason for Visit** (`primary_reason_for_visit`, `select_one`, required): Select the primary reason for your visit from the provided options.
* **Current Health Screening** (`section_screening`, `note`, optional): This section is for health screening data. Please ask your healthcare provider for guidance on what to include.
* **Initial Health Screening** (`section_screening`, `note`, optional): This section is for initial health screening data. Please ask your healthcare provider for guidance on what to include.
