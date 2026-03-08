# Autopsy Report Request Form - Help Guide
## Purpose
This form is used to request an autopsy report. To ensure a successful submission, please review this guide carefully.

## How To Complete This Form
To complete this form, simply fill in the required information in the corresponding fields. If you have any questions or concerns, please do not hesitate to contact us.

## Field-by-Field Explanation
* **Requestor Name** (`requestor_name`, text, required): Please provide your full name as recorded in our system.
* **Requestor Relationship to Decedent** (`requestor_relationship`, text, required): Describe your relationship to the decedent, for example, family member, friend, or colleague.
* **Requestor Contact Phone** (`requestor_contact_phone`, text, optional): If you want to be contacted about the status of the report, please provide a phone number.
* **Requestor Email** (`requestor_email`, email, optional): If you allow digital copies, we will send the report to your email. Please make sure to include the correct format (e.g., @example.com).
* **Decedent Full Name** (`decedent_full_name`, text, required): Provide the full legal name of the decedent as recorded.
* **Decedent Date of Birth** (`decedent_date_of_birth`, date, optional): If available, please provide the date of birth of the decedent.
* **Decedent Date of Death** (`decedent_date_of_death`, date, required): Provide the date of death of the decedent.
* **Case Number** (`case_number`, text, optional): If known, please provide the hospital or coroner case number.
* **Purpose of Report Request** (`report_purpose`, select_one, required):
	+ Choose one:
		- Legal
		- Insurance
		- Family Record
		- Research
		- Other
* **Copy Delivery Method** (`copy_delivery_method`, select_one, required):
	+ Choose one:
		- Electronic email
		- Physical mail
		- In person pickup
* **Authorization Name** (`authorization_signature`, text, required): Type your full name as authorization.
* **Authorization Date** (`authorization_date`, date, required): Date of authorization.
* **Additional Information** (`additional_information`, text, optional): Any other relevant details about the request.
