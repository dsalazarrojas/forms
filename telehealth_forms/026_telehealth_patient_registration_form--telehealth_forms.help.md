<thinking>As I review the form schema, it appears to be designed for patient registration in a telehealth setting. The form collects various personal and medical information from the patient, including name, contact method, email, phone number, insurance status, address, date of birth, emergency contact information, medical history, and consent. This form likely serves as an intake process for new patients, helping healthcare providers to gather essential information for patient care and treatment. To avoid duplication, it's essential to ensure that the form is filled out by the patient only once, and the information is accurately and thoroughly completed.</thinking>

# Telehealth Patient Registration Form - Help Guide
## Purpose
This form collects essential information from patients for telehealth care and services.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your **Patient Name** in the corresponding field.
2. Select your **Contact Method** by choosing "Yes" or "No" in the dropdown menu.
3. Enter your **Email** address.
4. Enter your **Phone** number.
5. Indicate your **Insurance** status by choosing "Yes" or "No" in the dropdown menu.
6. Enter your **Address**.
7. Select your **Date of Birth** from the calendar.
8. Fill in your **Emergency Contact Name**.
9. Choose your **Emergency Contact Relationship** by selecting "Yes" or "No" in the dropdown menu.
10. Select whether you have a **Primary Care Provider** by choosing "Yes" or "No" in the dropdown menu.
11. Enter your **Medical Record Number**.
12. Fill in your **Medical History**.
13. List any **Meds** you are currently taking.
14. List any **Allergies** you have.
15. Mention any **Medical Conditions** you may have.
16. List any **Medical Procedures** you've undergone.
17. Provide any additional **Medical History** information.
18. Indicate your **Consent** by choosing "Yes" or "No" in the dropdown menu.
19. If necessary, specify your **Emergency Contact Relationship Other**.
20. Enter the **Emergency Contact Phone** number.
21. List any **Medical History Medications** you are currently taking.
22. List any **Medical History Allergies** you may have.
23. If necessary, specify your **Emergency Contact Name Other**.
24. Provide any additional **Medical History Procedures** information.
25. If necessary, provide any additional **Medical History Other** information.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your full name, as it appears on your identification.
* **Contact Method** (`contact_method`, select_one, required: false): Indicate whether you have a preferred contact method, such as phone or email.
* **Email** (`email`, email, required): Enter your valid email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Insurance** (`insurance`, select_one, required): Indicate your insurance status.
* **Address** (`address`, text, required): Enter your address.
* **Date of Birth** (`date_of_birth`, date, required): Select your date of birth from the calendar.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, required): Choose your emergency contact relationship from the options.
* **Primary Care Provider** (`primary_care_provider`, select_one, required): Indicate whether you have a primary care provider.
* **Medical Record Number** (`medical_record_number`, text, required): Enter your medical record number.
* **Medical History** (`medical_history`, text, required): Describe any medical history you may have.
* **Meds** (`medications`, text, required): List any medications you are currently taking.
* **Allergies** (`allergies`, text, required): List any allergies you may have.
* **Medical Conditions** (`medical_conditions`, text, required): Describe any medical conditions you may have.
* **Medical Procedures** (`medical_procedures`, text, required): List any medical procedures you have undergone.
* **Consent** (`consent`, select_one, required): Indicate your consent.
* **Emergency Contact Relationship Other** (`emergency_contact_relationship_other`, text, required): If necessary, specify your emergency contact relationship other.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Medical History Medications** (`medical_history_medications`, text, required): List any medications you may have in your medical history.
* **Medical History Allergies** (`medical_history_allergies`, text, required): List any allergies you may have in your medical history.
* **Emergency Contact Name Other** (`emergency_contact_name_other`, text, required): If necessary, specify your emergency contact name other.
* **Medical History Procedures** (`medical_history_procedures`, text, required): Provide any additional medical history procedures information.
* **Medical History Other** (`medical_history_other`, text, required): Provide any additional medical history information.
