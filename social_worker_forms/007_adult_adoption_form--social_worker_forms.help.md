# Adult Adoption Form - Help Guide

## Purpose
This form is used to facilitate the adult adoption process. It is meant to gather information from the applicant regarding their identification, contact details, reason for adoption, and consent for background checks. Please note that this form is for internal use only and the information provided will be kept confidential.

## How To Complete This Form
1. Ensure you have all the required documents and information before filling out this form.
2. Fill out the form completely and accurately.
3. If you need help or clarification, contact your social worker.
4. Review the "Field-by-Field Explanation" section for specific instructions on each field.

## Field-by-Field Explanation
* **Applicant full name** (`applicant_name`, text, required):
	+ This field is used to collect the legal name of the individual requesting adult adoption.
* **Date of birth** (`date_of_birth`, date, required):
	+ Enter the date of birth for the individual requesting adult adoption.
* **Contact information** (`contact_information`, text, required):
	+ Provide your phone number and email address for any further communication regarding this adoption request.
* **Reason for adult adoption request** (`reason_for_adoption`, text, required):
	+ Clearly explain the purpose and background of the adoption request.
* **Legal documents attached** (`legal_documents_attached`, select_one, true/false, required):
	+ Indicate if supporting documents are attached to this request.
* **Social worker notes** (`social_worker_notes`, text, not required):
	+ This field is for internal use by social workers, and it is not required to be filled out.
* **Consent to background checks and investigation** (`consent_to_investigation`, select_one, true/false, required):
	+ Check "I consent" if you agree to background checks and investigations.
* **Attorney contact if applicable** (`attorney_contact`, text, not required):
	+ If you are represented by an attorney, provide their name and phone number.
* **Signature date** (`signature_date`, date, required):
	+ Date and time of submission of this form.

Note that the provided YAML fields were reviewed and the help guide was generated accordingly.
