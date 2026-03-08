# <string> - Help Guide
## Purpose
This guide will walk you through the <string> form, a generic medical survey/questionnaire used to collect information from patients. The form is designed to be adaptable and can be used by healthcare professionals or organizations for various purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Read through the form carefully to ensure you understand each field's purpose.
2. For each section, enter the required information as prompted.
3. If you're unsure about a field, refer to the field-by-field explanation section for clarification.

## Field-by-Field Explanation

### 1. Patient Information (page 1)
* **Patient Information** (`patient_info`, text, optional): Enter any relevant information about the patient, such as name, age, or medical history.

### 2. Contact Information (page 1)
* **Contact Information** (`contact_info`, text, optional): Enter any relevant contact information, such as phone numbers or email addresses, for the patient or their representative.

### 3. Travel Information (page 1)
* **Travel Information** (`travel_info`, text, optional): Enter any details about the patient's travel history, such as recent travel destinations or dates.

### 4. Medical Information (page 1)
* **Medical Information** (`medical_info`, text, optional): Enter any relevant medical information, such as allergies or medical conditions.

### 5. Symptoms (page 2)
* **Symptoms** (`symptoms`, select_multiple, optional):
	+ Select all the symptoms that apply to the patient, such as:
		- Fatigue
		- Cough
		- Chest pain
		- Other (specify)

### 6. Vaccine Information (page 2)
* **Vaccine Information** (`vaccine_info`, select_multiple, optional):
	+ Select all the vaccine information that applies to the patient, such as:
		- Received TB vaccine
		- Not Received TB vaccine
		- Unknown

### 7. Medical Procedure (page 2)
* **Medical Procedure** (`medical_procedure`, select_multiple, optional):
	+ Select all the medical procedures that apply to the patient, such as:
		- Chest X-ray
		- Blood test
		- Other (specify)

### 8. Additional Information (page 3)
* **Additional Information** (`additional_info`, note, optional): Enter any additional information about the patient's medical condition or treatment.

### 9. Consent (page 3)
* **Consent** (`consent`, select_one, optional):
	+ Select whether the patient has provided consent for their medical information:
		- 'True'
		- 'False'
