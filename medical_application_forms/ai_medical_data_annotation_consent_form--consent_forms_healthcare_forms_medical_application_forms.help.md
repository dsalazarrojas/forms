<thinking>
We need to ensure that the form's purpose is understood by the users before proceeding with the guide. This form is used for obtaining consent from individuals for the annotation and use of their medical data for AI research purposes. The form is crucial for ensuring that the individuals understand what data they are consenting to share and for how long. It's essential that the form is completed accurately and honestly to maintain transparency and trust in the research process.

The form has several fields that require specific information from the individual, including their full name, date of birth, age, contact information, medical record number, types of medical data they consent to share, the primary research purpose, and their consent to share data with external research partners. Some fields, such as medical record number and date of birth, are essential for identifying the individual's medical history and demographic information. Others, like types of data and research purpose, are critical for ensuring that the data is used in an ethical and responsible manner.

Let's move on to the help guide.
</thinking>

# AI Medical Data Annotation Consent Form - Help Guide
## Purpose
This form is designed to obtain your consent for the annotation and use of your medical data for AI research purposes. We will use your information to understand your medical history, improve AI-powered diagnosis, and advance medical research.

## How To Complete This Form
To complete this form, please fill in the required fields accurately and honestly. You can refer to the field-by-field explanations below for more details.

## Field-by-Field Explanation

* **Full name** (`full_name`, text, required): Please enter your full name as it appears on your identification documents.
* **Date of birth** (`patient_dob`, date, required): Please enter your date of birth in the format `YYYY-MM-DD`.
* **Age** (`patient_age`, integer, required): Please enter your age.
* **Phone number** (`phone_number`, phone, optional): If you have a phone number, please enter it for follow-up questions.
* **Email address** (`email_address`, email, required): Please enter your email address to ensure we can contact you for further questions or updates.
* **Date of visit** (`visit_date`, date, required): Please enter the date of your most recent medical consultation.
* **Medical record number** (`medical_record_number`, text, required): Please enter your unique identifier assigned by your healthcare provider.
* **Types of medical data for AI annotation** (`data_types_consent`, select_multiple, required): Select all the types of data you consent to share for AI annotation.
* **Primary research purpose** (`research_purpose`, select_one, required): Select the primary purpose of the research project your data will be used for.
* **Do you consent to sharing your data with external research partners?** (`data_sharing_consent`, select_one, required): Select whether you consent to sharing your data with external research partners.
* **Preferred data retention period** (`data_retention_period`, select_one, required): Select how long you consent to keep your data in the research database.
* **I understand I can withdraw consent at any time** (`withdrawal_rights`, select_one, required): Select whether you understand you can withdraw your consent at any time.
* **Are you participating for compensation?** (`compensation_acknowledgment`, select_one, required): Select whether you are participating for compensation.
* **Electronic signature** (`signature_consent`, text, required): Please type your full name to serve as your electronic signature.
* **Date of consent** (`consent_date`, date, required): Please enter the date of your consent.
* **Witness signature (if applicable)** (`witness_signature`, text, optional): If applicable, please have a healthcare provider or staff member witness your consent by signing below.
* **Additional comments or concerns** (`additional_comments`, text, optional): If you have any additional comments or concerns, please enter them here.
