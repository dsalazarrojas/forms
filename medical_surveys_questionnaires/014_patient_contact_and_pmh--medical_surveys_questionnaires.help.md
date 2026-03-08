# Patient Contact And PMH - Help Guide
## Purpose
This form collects patient contact information and history of prior medical conditions (PMH). It's intended for clinical staff to gather details about a patient's medical background and contact preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's contact information:
	* Enter the patient's phone number in the 'phone' field.
	* Enter the patient's email address in the 'email' field.
	* Enter the patient's address in the 'address' field.
	* Enter the patient's city in the 'city' field.
	* Enter the patient's state in the 'state' field.
2. Select the patient's PMH status:
	* If the patient has a history of medical conditions, select 'Yes' in the 'pmh' field.
	* If the patient does not have a history of medical conditions, select 'No' in the 'pmh' field.
3. Enter the patient's medical record number in the 'medical_record_number' field (if applicable).

## Field-by-Field Explanation

* **Patient Contact** (`patient_contact`, text, required: false): This field is for the patient's contact information. Enter the patient's name or description.
* **phone** (`phone`, text, required: false): Enter the patient's phone number.
* **email** (`email`, email, required: false): Enter the patient's email address.
* **pmh** (`pmh`, select_one, required: false): Select 'Yes' if the patient has a history of medical conditions, 'No' otherwise.
* **address** (`address`, text, required: false): Enter the patient's address.
* **city** (`city`, text, required: false): Enter the patient's city.
* **state** (`state`, text, required: false): Enter the patient's state.
* **zip** (`zip`, number, required: false): Enter the patient's zip code.
* **medical_record_number** (`medical_record_number`, text, required: false): Enter the patient's medical record number (if applicable).
