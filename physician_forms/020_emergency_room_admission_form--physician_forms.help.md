# Emergency Room Admission Form - Help Guide
## Purpose
The Emergency Room Admission Form is used to collect essential information from patients in emergency situations, enabling medical professionals to provide prompt and appropriate care.

## How To Complete This Form

1. Review the form carefully to understand the purpose and the fields required.
2. Ensure you have the patient's consent before proceeding.
3. Complete the form accurately and thoroughly, providing all relevant information requested.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, `note`, required: false)
	+ This section is a free-text area for capturing any important patient information not covered by other fields.
* **Medical History** (`medical_history`, `text`, required: false)
	+ Describe the patient's medical history, including any relevant allergies, previous treatments, or previous hospitalizations.
* **Allergy Information** (`allergy_info`, `select_multiple`, required: false)
	+ Select all known allergies, such as medication allergies, food allergies, or environmental allergies.
* **Medication List** (`medication_list`, `select_one`, required: false)
	+ List any medications the patient is currently taking, including dosages and frequencies.
* **Diagnosis** (`diagnosis`, `text`, required: false)
	+ Briefly describe the reason for the patient's emergency admission.
* **Treatment Plan** (`treatment_plan`, `text`, required: false)
	+ Outline the proposed treatment and care plan for the patient.
* **Discharge Information** (`discharge_info`, `select_one`, required: false)
	+ Select the patient's expected discharge status, such as home, rehab, or other.
* **Patient Concerns** (`patient_concerns`, `text`, required: false)
	+ Record any concerns or questions the patient has about their care.

## Tips

* Be thorough and accurate when filling out the form to ensure the patient receives the best possible care.
* If unsure about any information, consult with the patient or other medical professionals as needed.
* Complete the form in real-time, ideally with the patient's consent.
