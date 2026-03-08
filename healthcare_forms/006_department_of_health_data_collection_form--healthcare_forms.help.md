# Department Of Health Data Collection Form - Help Guide
## Purpose
This form is designed to collect patient information for healthcare services. It's meant to be filled out by patients or their representatives to provide essential data for healthcare providers.

## How To Complete This Form

1.  Start by filling out the user information section, where you will be asked to provide your name, and any other relevant personal details.
2.  In the Contact Information section, provide your contact details, such as phone number and email, for follow-up and communication purposes.
3.  In the Medical History section, you are required to report any allergies you may have or have had in the past.
4.  In the Allergies section, you can select any allergies you have. You may choose one or multiple options.
5.  In the Medications section, select the type of medications you are taking. You may choose only one option from the provided list.
6.  In the Medical Conditions section, answer whether you currently have any of the provided medical conditions or have had them in the past. You may select only one option.
7.  In the Health Status section, report whether you are currently active or inactive in terms of medical care.
8.  In the Family History section, fill out any medical history that you think may be important for your care. Please be as thorough as you can.
9.  In the Contact Details section, answer whether you have any contact details that should be known for your care. You may select only one option.
10.  In the Medical Care Information section, provide any information about your current medical care, such as appointments and visits. Please be detailed as possible.
11.  In the Health Insurance section, answer whether you have health insurance coverage or not. You may select only one option.

## Field-by-Field Explanation

* **User Information** (user_info): This is the first section of the form where you will be asked to provide your name and any other personal details.
	+ Label: User Information
	+ Type: text
	+ Required: false
* **Contact Information** (contact_info): In this section, please provide your contact details such as phone number and email for follow-up and communication purposes.
	+ Label: Contact Information
	+ Type: text
	+ Required: false
* **Medical History** (medical_history): In this section, please report any allergies you may have or have had in the past.
	+ Label: Medical History
	+ Type: number
	+ Required: true
* **Allergies** (allergies): Select any allergies you have from the provided options.
	+ Label: Allergies
	+ Type: select_multiple
	+ Required: false
* **Medications** (medications): Select the type of medications you are taking from the provided options.
	+ Label: Medications
	+ Type: select_one
	+ Required: false
* **Medical Conditions** (medical_conditions): Answer whether you currently have any of the provided medical conditions or have had them in the past.
	+ Label: Medical Conditions
	+ Type: select_one
	+ Required: false
* **Health Status** (health_status): Report whether you are currently active or inactive in terms of medical care.
	+ Label: Health Status
	+ Type: select_one
	+ Required: false
* **Family History** (family_history): Fill out any medical history that you think may be important for your care.
	+ Label: Family History
	+ Type: text
	+ Required: true
* **Contact Details** (contact_details): Answer whether you have any contact details that should be known for your care.
	+ Label: Contact Details
	+ Type: select_one
	+ Required: false
* **Medical Care Information** (medical_care_info): Provide any information about your current medical care, such as appointments and visits.
	+ Label: Medical Care Information
	+ Type: text
	+ Required: true
* **Health Insurance** (health_insurance): Answer whether you have health insurance coverage or not.
	+ Label: Health Insurance
	+ Type: select_one
	+ Required: false
