# X RAY Release Form - Help Guide

## Purpose
The X RAY Release Form is a crucial document that provides essential information about a patient's X-ray procedure. It ensures that the patient's medical team has accurate and up-to-date information to provide proper care.

## How To Complete This Form
1. Gather all necessary information about the patient, including:
	* Patient Name
	* Patient Address (mandatory)
	* Patient Phone (optional)
	* Physician Name (mandatory)
	* Physician Title (optional)
	* X-Ray Date (mandatory)
	* Authorization (optional)
	* Patient Age (mandatory)
	* Medical History (optional)
	* Allergies (optional)
	* Medications (optional)
	* Physician Name 2 (optional)
	* X-Ray Status (optional)
	* Patient Relationship (mandatory)
	* Patient Informed Consent (mandatory)
2. Enter the information in the corresponding fields, following the instructions below.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their identification.
* **Patient Address** (`patient_address`, text, required): Enter the patient's address, including street address, city, state, and zip code.
* **Patient Phone** (`patient_phone`, text, optional): Enter the patient's phone number, if available.
* **Physician Name** (`physician_name`, text, required): Enter the name of the patient's attending physician.
* **Physician Title** (`physician_title`, select_one, optional): Select "Yes" or "No" to indicate if the physician has given their title.
* **X-Ray Date** (`xray_date`, date, required): Enter the date of the X-ray procedure.
* **Patient Age** (`patient_age`, number, required): Enter the patient's age at the time of the X-ray procedure.
* **Authorization** (`authorization`, text, optional): Enter any authorization or signature required for the patient.
* **Medical History** (`medical_history`, text, optional): Enter any relevant medical history or conditions.
* **Allergies** (`allergies`, text, optional): Enter any allergies or sensitivities the patient may have.
* **Medications** (`medications`, text, optional): Enter any medications the patient is currently taking.
* **Physician Name 2** (`physician_name_2`, text, optional): Enter the name of the patient's alternate physician.
* **X-Ray Status** (`xray_status`, select_one, optional): Select "Active" or "Inactive" to indicate the status of the X-ray procedure.
* **Patient Relationship** (`patient_relationship`, select_one, required): Select "Yes" or "No" to indicate the relationship between the patient and the healthcare provider.
* **Patient Informed Consent** (`patient_informed_consent`, select_multiple, required): Select "Yes" or "No" for each of the consent options provided.
