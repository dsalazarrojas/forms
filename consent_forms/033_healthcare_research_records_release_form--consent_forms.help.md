# Healthcare Research Records Release Form - Help Guide
## Purpose
The "Healthcare Research Records Release Form" is a crucial document that grants researchers permission to access and use a patient's medical records for research purposes. It is essential for researchers to obtain this consent before initiating any research studies to ensure compliance with relevant laws, regulations, and ethical standards.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your name and date of birth.
2. Choose the type of medical record you are releasing (e.g., Medical Record, Lab Results, etc.).
3. If you have chosen "Other," specify the type of medical record being released.
4. Enter your contact information (name, phone number, and email).
5. Provide your address.
6. Sign and date the form to confirm your consent.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format mm/dd/yyyy.
* **Medical Record Type** (`medical_record_type`, select_one, required): Select one of the following options:
	+ Medical Record
	+ Lab Results
	+ Other ( specify the type of medical record being released).
* **Other** (`medical_record_type_other`, text, optional): If you selected "Other," provide the type of medical record being released.
* **Contact Name** (`contact_name`, text, required): Enter your name as a contact person for research-related inquiries.
* **Contact Phone** (`contact_phone`, text, optional): Enter your phone number for research-related inquiries.
* **Contact Email** (`contact_email`, email, optional): Enter your email address for research-related inquiries.
* **Patient Address** (`patient_address`, text, optional): Provide your address for research-related mail or visits.
* **Signature of Patient or Guardian** (`signature_of_patient_or_guardian`, note, required): Sign and date this field to confirm your consent.
* **Signature Date** (`signature_date`, date, required): Enter the date you signed this form.
* **Signature Time** (`signature_time`, time, required): Enter the time you signed this form.
* **Date Research Started** (`date_research_started`, date, optional): Enter the date research began.
* **Date Research Ended** (`date_research_ended`, date, optional): Enter the date research ended.
* **Research Name** (`research_name`, text, optional): Provide the name of the research project.
* **Researcher Signature** (`researcher_signature`, note, optional): Sign and date this field to confirm researcher involvement.
* **Research Institution** (`research_institution`, text, optional): Enter the name of the research institution.
* **Research Project** (`research_project`, text, optional): Provide a brief description of the research project.
* **Research Supervisor** (`research_supervisor`, text, optional): Enter the name of the research supervisor.
* **Institutional Review Date** (`research_institutional_review_date`, date, optional): Enter the date of the institutional review.
* **Institutional Review Number** (`research_institutional_review_number`, text, optional): Enter the institutional review number.
* **Institutional Review Status** (`research_institutional_review_status`, select_one, required): Select one of the following options:
	+ Approved
	+ Not Reviewed
* **Institutional Review Date** (`research_institutional_review_date`, date, optional): Enter the date of the institutional review.
* **Institutional Review Notes** (`research_institutional_review_notes`, text, optional): Enter any notes from the institutional review.
