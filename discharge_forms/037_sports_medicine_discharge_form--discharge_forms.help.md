<thinking>
We have to create a user-facing help guide for the Sports Medicine Discharge Form. The form is used for recording the details of a patient's sports medicine visit, including general information, return to activity instructions, physical status, treatment plan, medication, discharge instructions, follow-up appointments, patient information, medical notes, athletic injury report, other injury report, medical history, concussion protocol, injury type, symptoms, treatment location, provider signature, staff signature, and patient signature. This guide will help ensure that users understand the purpose and requirements of the form. It is essential to complete the form accurately and efficiently, and this guide will provide detailed explanations for each field to minimize errors and confusion.

To prevent duplication and ensure accuracy, it is crucial to verify the patient's information and medical history before completing the form. Please review the patient's chart and medical history before starting the discharge form. If the patient's chart is not available or up-to-date, please contact the patient's primary care physician or the medical record department for assistance.

Please note that some fields may require additional information or clarification from the patient or other healthcare providers. As a healthcare professional, it is essential to ensure the accuracy and completeness of the information collected in this form to provide the best possible care for the patient.</thinking>

# Sports Medicine Discharge Form - Help Guide
## Purpose
The Sports Medicine Discharge Form is used to document the details of a patient's sports medicine visit, including their general information, physical status, treatment plan, and discharge instructions.

## How To Complete This Form
To complete the form, please follow these steps:

1. Review the patient's chart and medical history to ensure accuracy and completeness.
2. Enter the patient's general information, including their return to activity instructions, physical status, and treatment plan.
3. Select the appropriate options for the patient's physical status and treatment plan.
4. Enter the patient's medication information.
5. Provide discharge instructions for the patient.
6. Schedule follow-up appointments as necessary.
7. Enter the patient's information, including their medical history.
8. Complete the concussion protocol section if applicable.
9. Enter the patient's injury type and symptoms.
10. Specify the treatment location.
11. Obtain a signature from the provider, staff, and patient.

## Field-by-Field Explanation

* **General Information** (`general_information`, `text`, required): Enter the patient's general information, including their name, date of birth, and contact information.
* **Return to Activity** (`return_to_activity_instruction`, `text`, required): Provide instructions for the patient's return to activity, including any restrictions or limitations.
* **Physical Status** (`physical_status`, `select_one`, required): Select the patient's physical status, which may be Active, Active with restriction, Non-Active, Non-Active with restriction, Unable to perform, or Other (please specify).
* **Treatment Plan** (`treatment_plan`, `select_one`, required): Select the patient's treatment plan, which may be None, Rest and Ice, Stretching and Mobilization, Activity modification, Activity cessation, Other (please specify), or Other (please specify).
* **Medication** (`medication`, `text`, required): Enter the patient's medication information.
* **Discharge Instructions** (`discharge_instructions`, `text`, optional): Provide discharge instructions for the patient, including any important information or advice.
* **Follow-up Appointments** (`follow_up_appointments`, `select_multiple`, required): Schedule follow-up appointments as necessary.
* **Patient Information** (`patient_information`, `text`, optional): Enter the patient's information, including their medical history.
* **Medical Notes** (`medical_notes`, `text`, optional): Enter any medical notes or comments.
* **Athletic Injury Report** (`athletic_injury_report`, `text`, optional): Enter an athletic injury report.
* **Other Injury Report** (`other_injury_report`, `text`, optional): Enter an other injury report.
* **Medical History** (`medical_history`, `text`, optional): Enter the patient's medical history.
* **Concussion Protocol** (`concussion_protocol`, `select_one`, required): Select the concussion protocol, which may be True, False, or Not required.
* **Injury Type** (`injury_type`, `text`, required): Enter the patient's injury type.
* **Symptoms** (`symptoms`, `text`, required): Enter the patient's symptoms.
* **Treatment Location** (`treatment_location`, `text`, required): Specify the treatment location.
* **Provider Signature** (`provider_signature`, `text`, optional): Obtain a signature from the provider.
* **Staff Signature** (`staff_signature`, `text`, optional): Obtain a signature from the staff.
* **Patient Signature** (`patient_signature`, `text`, required): Obtain a signature from the patient.
