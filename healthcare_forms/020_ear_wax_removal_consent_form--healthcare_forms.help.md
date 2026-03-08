<thinking>
This help guide is for the "Ear Wax Removal Consent Form" which is used to obtain consent from patients before performing an ear wax removal procedure. The form is designed to collect relevant patient information, medical history, and other related details to ensure a safe and effective procedure. 
</thinking>

# Ear Wax Removal Consent Form - Help Guide
## Purpose
The Ear Wax Removal Consent Form is used to obtain consent from patients before performing an ear wax removal procedure. It is essential to understand the form's purpose and ensure you fill it out accurately to avoid any complications or issues during the procedure.

## How To Complete This Form
To complete this form, follow these steps:

1. Please provide your personal details and medical history in the "Patient Information" section.
2. Answer the question "Have you had any previous ear surgeries or procedures?" in the "Medical History" section.
3. If you have any medical conditions or allergies, please list them in the "Medical condition" and "Medication allergies" sections.
4. Confirm if you have a medical condition that may affect your ear wax removal in the "Medical condition" section.
5. Indicate the type of ear you want the procedure performed on in the "Type of ear" section.
6. Select the date and time of the procedure in the "Date of procedure" and "Time of procedure" sections.
7. Finally, sign the "Signature of patient" section to confirm your consent.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required: false)
	+ Please provide your name, address, phone number, and other relevant personal details.
* **Medical History** (`medical_history`, text, required: false)
	+ Describe your medical history, including any previous surgeries or procedures.
* **Have you had any previous ear surgeries or procedures?** (`medical_history_question`, select_one, required: false)
	+ Answer "Yes" or "No" to this question.
* **Medication allergies** (`medication_allergies`, text, required: false)
	+ List any medications you are allergic to.
* **Allergies** (`allergies`, select_multiple, required: false)
	+ Select "Yes" or "No" for each of the listed allergies.
* **Medical condition** (`medical_condition`, text, required: false)
	+ Describe any medical conditions that may affect your ear wax removal.
* **Do you have a medical condition that may affect your ear wax removal?** (`medical_condition_question`, select_one, required: false)
	+ Answer "Yes" or "No" to this question.
* **Medication** (`medication`, text, required: false)
	+ Please list any medications you are currently taking.
* **Type of ear** (`ear_type`, select_one, required: false)
	+ Select "Yes" or "No" for the type of ear you want the procedure performed on.
* **What type of ear is the procedure to be performed on?** (`ear_type_question`, select_one, required: false)
	+ Select the type of ear you want the procedure performed on.
* **Date of procedure** (`procedure_date`, date, required: false)
	+ Select the date of the procedure.
* **Time of procedure** (`procedure_time`, time, required: false)
	+ Select the time of the procedure.
* **Signature of patient** (`consent`, note, required: false)
	+ Please sign this section to confirm your consent for the procedure.
* **Signature of patient** (`patient_signature`, text, required: false)
	+ Sign your name to confirm your consent.

## Tips
* Please answer all questions accurately and truthfully.
* If you have any questions or concerns, feel free to ask your healthcare provider.
* This form is confidential and for the purpose of ensuring your safety during the procedure.
