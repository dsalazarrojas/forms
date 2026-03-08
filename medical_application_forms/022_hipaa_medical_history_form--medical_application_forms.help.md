<thinking> This is a medical application form. It's used to collect information about a patient's medical history. This form is used to gather information from patients to help healthcare providers better understand their medical history. This form will ask questions about the patient's contact details, medical symptoms, medications, allergies, family medical history, medical condition, date of birth, contact information, medical record number, emergency contact, emergency contact relationship, emergency contact name, medical history, medical history details, medical insurance, medical insurance purpose, medical provider, medical provider address, medical provider phone, medical provider fax, medical provider website, medical provider license, and patient signature. </thinking>

# hipaa_medical_history_form - Help Guide
## Purpose
The hipaa_medical_history_form is a medical application form used to collect information about a patient's medical history.

## How To Complete This Form

1. Fill out the form completely and accurately, including your contact details, medical symptoms, medications, allergies, family medical history, medical condition, date of birth, contact information, medical record number, emergency contact, emergency contact relationship, emergency contact name, medical history, medical history details, medical insurance, medical insurance purpose, medical provider, medical provider address, medical provider phone, medical provider fax, medical provider website, medical provider license, and patient signature.

## Field-by-Field Explanation

* **Contact Details** (`contact_details`, `text`, required: false):
	+ This field is used to collect the patient's contact details.
* **Symptoms** (`symptoms`, `text`, required: false):
	+ This field is used to list any current symptoms, such as colds, flu, etc.
* **Medications** (`medications`, `text`, required: false):
	+ This field is used to list any medications the patient is currently taking.
* **Allergies** (`allergies`, `text`, required: false):
	+ This field is used to list any allergies the patient has.
* **Drug Use** (`drug_use`, `text`, required: false):
	+ This field is used to describe any drug use by the patient.
* **Family Medical History** (`family_medical_history`, `text`, required: false):
	+ This field is used to provide a brief description of any family medical history.
* **Medical Condition** (`medical_condition`, `select_one`, required: false):
	+ This field is used to select one of the following medical conditions:
		- Heart condition
		- Diabetes
		- Hypertension
		- Other
* **Date of Birth** (`date_of_birth`, `date`, required: false):
	+ This field is used to enter the patient's date of birth.
* **Contact Information** (`contact_information`, `text`, required: false):
	+ This field is used to enter contact information for the patient.
* **Medical Record Number** (`medical_record_number`, `number`, required: false):
	+ This field is used to enter the patient's medical record number.
* **Emergency Contact** (`emergency_contact`, `text`, required: false):
	+ This field is used to enter emergency contact information for the patient.
* **Relationship** (`emergency_contact_relationship`, `select_one`, required: false):
	+ This field is used to select the relationship of the emergency contact:
		- Spouse
		- Parent
		- Child
		- Other
* **Name** (`emergency_contact_name`, `text`, required: false):
	+ This field is used to enter the name of the emergency contact.
* **Medical History** (`medical_history`, `text`, required: false):
	+ This field is used to enter medical history information.
* **Medical History Details** (`medical_history_details`, `text`, required: false):
	+ This field is used to enter more detailed medical history information.
* **Medical Insurance** (`medical_insurance`, `text`, required: false):
	+ This field is used to enter medical insurance information.
* **Medical Insurance Purpose** (`medical_insurance_purpose`, `text`, required: false):
	+ This field is used to enter the purpose of the medical insurance.
* **Medical Provider** (`medical_provider`, `text`, required: false):
	+ This field is used to enter medical provider information.
* **Medical Provider Address** (`medical_provider_address`, `text`, required: false):
	+ This field is used to enter the medical provider's address.
* **Medical Provider Phone** (`medical_provider_phone`, `text`, required: false):
	+ This field is used to enter the medical provider's phone number.
* **Medical Provider Fax** (`medical_provider_fax`, `text`, required: false):
	+ This field is used to enter the medical provider's fax number.
* **Medical Provider Website** (`medical_provider_website`, `text`, required: false):
	+ This field is used to enter the medical provider's website.
* **Medical Provider License** (`medical_provider_license`, `text`, required: false):
	+ This field is used to enter the medical provider's license information.
* **Medical Provider Board Certification** (`medical_provider_board_certification`, `select_one`, required: false):
	+ This field is used to select whether or not the medical provider is board certified:
		- Yes
		- No
* **Patient Signature** (`patient_signature`, `text`, required: false):
	+ This field is used to enter the patient's signature.

## Tips
* Make sure to fill out the form completely and accurately.
* If you are unsure about any of the fields, please ask your healthcare provider for assistance.
* If you have any medical history, please provide as much detail as possible.
* If you have any medical insurance, please provide the purpose of the insurance.
* If you have any medical provider information, please provide as much detail as possible.
