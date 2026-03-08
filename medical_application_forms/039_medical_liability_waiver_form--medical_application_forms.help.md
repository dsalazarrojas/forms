# medical_liability_waiver_form - Help Guide
## Purpose
The medical_liability_waiver_form is a general-purpose medical liability waiver form used to collect participant contact and medical history information, review and sign a waiver, and acknowledge form completion.

## How To Complete This Form
1. To complete this form, please follow the steps below:
	* Fill out the Participant Details section with your contact information and medical history.
	* Review and sign the Waiver Information section, which includes the waiver text.
	* Provide your emergency contact information in the Emergency Contact section.
	* If applicable, provide insurance information in the Insurance Information section.
	* Fill out the Medical Information section with any relevant medical information.
	* If applicable, provide additional medical information in the Additional Medical Information section.
	* Acknowledge form completion in the Acknowledgement section.
	* Sign the Medical Liability Waiver at the end of the form.
2. Make sure to complete all required fields, marked with \*\*asterisk\*\*.

## Field-by-Field Explanation
* **Participant Details**:
	+ **Name**, **Email Address**, and **Phone Number** (`participant_details` , `string`, required: false): Fill out your contact information.
* **Waiver Information**:
	+ **Waiver Text** (`waiver_information`, `string`, required: false): Review and sign the waiver text.
* **Emergency Contact**:
	+ **Name** and **Contact Information** (`emergency_contact`, `string`, required: false): Provide emergency contact information.
* **Insurance Information**:
	+ **Insurance Provider** and **Policy Number** (`insurance_info`, `string`, required: false): Provide insurance information (if applicable).
* **Medical Information**:
	+ **Medical Condition(s)** and **Medication** (`medical_info`, `string`, required: false): Fill out any relevant medical information.
* **Additional Medical Information**:
	+ **Medical Condition(s)** and **Medication** (`additional_medical_info`, `string`, required: false): Provide additional medical information (if applicable).
* **Acknowledgement**:
	+ **Acknowledgement** (`acknowledgement`, `string`, required: false): Acknowledge form completion.
* **Medical Liability Waiver**:
	+ **Signature** (`medical_liability_waiver_form_9`, `string`, required: false): Sign the waiver to indicate agreement.
* **Acknowledgement 2**:
	+ **Acknowledgement** (`acknowledgement_2`, `string`, required: false): Acknowledge form completion again.
