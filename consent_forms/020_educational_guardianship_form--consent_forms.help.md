# educational_guardianship_form - Help Guide
## Purpose
The "educational_guardianship_form" is used to collect information about the relationship between an individual and their guardian or parent. 

## How To Complete This Form
1. Make sure you are the correct guardian or parent.
2. Complete each field as accurately and thoroughly as possible.
3. If you are unsure about any information, ask for help or clarification.

## Field-by-Field Explanation
* **parent_info** (`educational_guardianship_form_1`, text, required: false): Enter the name and information of the individual's parent or guardian.
* **guardian_name** (`guardian_name`, text, required: false): Enter the name of the guardian.
* **relationship_status** (`relationship_status`, select_one, required: false):
	+ Choose the relationship type between the individual and the guardian: 
	+ Parent
	+ Guardian
* **other_relationship** (`other_relationship`, text, required: false): If the relationship between the individual and the guardian is not listed, enter the type of relationship (e.g. foster parent, legal guardian).
* **guardian_consent** (`guardian_consent`, select_multiple, required: false):
	+ True: I hereby consent to this arrangement.
	+ False: I do not consent.
* **educational_consent** (`educational_consent`, select_multiple, required: false):
	+ True: Educational consent is granted.
	+ False: Educational consent is not granted.
* **health_consent** (`health_consent`, select_multiple, required: false):
	+ True: Health consent is granted.
	+ False: Health consent is not granted.
* **medical_consent** (`medical_consent`, select_multiple, required: false):
	+ True: Medical consent is granted.
	+ False: Medical consent is not granted.
* **contact_info** (`contact_info`, text, required: false): Enter a contact number and email address for the guardian.
* **guardian_contact_name** (`guardian_contact_name`, text, required: false): Enter the name of the contact person.
