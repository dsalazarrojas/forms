# Orthopedic Surgery Patient Summary - Help Guide
## Purpose
The Orthopedic Surgery Patient Summary form is a vital document that helps the healthcare team to quickly gather and review critical information about patients undergoing orthopedic surgery. This form ensures that the necessary details are collected efficiently, allowing the medical team to provide the best possible care.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the patient's personal information (Page 1).
2. Provide a brief medical history, including any allergies, previous surgeries, and medical procedures (Pages 2-5).
3. Identify the patient's contacts, such as family members, friends, or medical professionals (Page 6).
4. Select the preferred method of contact (Page 7).
5. List any current medications and medical devices used by the patient (Pages 8-9).
6. Describe the expected patient outcome after surgery (Page 11).

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, `text`, required: false): This page is for entering the patient's basic details, such as name, date of birth, and contact information.
* **Medical History** (`medical_history`, `text`, required: false): Please provide a brief description of the patient's medical history, including any relevant medical conditions or procedures.
* **Allergies** (`medical_history_2`, `text`, required: false): List any known allergies or sensitivities the patient may have.
* **Surgical History** (`medical_history_3`, `text`, required: false): Describe any previous surgeries or medical interventions the patient has undergone.
* **Medical Procedures** (`medical_history_4`, `text`, required: false): List any current or past medical procedures the patient is undergoing.
* **Patient Contacts** (`patient_contacts`, `select_multiple`, required: false): Identify the people the patient would like to be contacted in case of an emergency, such as family, friends, or medical professionals.
* **Contact Preference** (`patient_contacts_2`, `select_one`, required: false): Choose the preferred method of contact (Phone, Email, or Mail) for the patient's contacts.
* **Current Medications** (`medical_history_5`, `text`, required: false): List any current medications the patient is taking.
* **Current Diagnoses** (`medical_history_6`, `text`, required: false): Describe any current medical diagnoses the patient has.
* **Medical Devices** (`medical_history_7`, `text`, required: false): List any medical devices the patient uses, such as pacemakers or oxygen tanks.
* **Patient Outcome** (`patient_outcome`, `time`, required: false): Estimate the expected patient outcome after surgery, including any expected recovery time or follow-up care.
