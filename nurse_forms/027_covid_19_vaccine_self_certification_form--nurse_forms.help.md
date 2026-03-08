# COVID 19 Vaccine Self Certification Form - Help Guide
## Purpose
This form is for applicants who wish to receive the COVID-19 vaccine and are required to self-certify their eligibility. It is used to verify their age, medical status, and willingness to receive the vaccine.

## How To Complete This Form
1. Read the form carefully and answer all questions truthfully.
2. Fill in your personal details, including your full name, date of birth, email address, phone number, and current address.
3. Choose the correct type of government-issued ID you have.
4. Enter your ID number and expiration date.
5. Certify your eligibility to receive the vaccine based on the provided options.
6. Answer questions about your medical status, including any allergies, contraindications, or current illness.
7. Self-certify your understanding of the vaccine's benefits, risks, and side effects.
8. Sign the form voluntarily, indicating that you understand the benefits and risks of the vaccine.

## Field-by-Field Explanation

* **Full Name** (`cert_full_name`, text, required): Please provide your complete legal name.
* **Date of Birth** (`cert_date_of_birth`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **Email Address** (`cert_email`, email, required): Enter your active email address.
* **Phone Number** (`cert_phone`, phone, required): Enter your phone number.
* **Current Address** (`cert_address`, text, required): Enter your street address.
* **City, State, ZIP Code** (`cert_city_state_zip`, text, required): Enter your city, state, and ZIP code.
* **Type of Government ID** (`cert_id_type`, select_one, required): Choose the type of government-issued ID you have:
	+ Driver License
	+ Passport
	+ State ID
	+ Military ID
	+ Other Government ID
* **ID Number** (`cert_id_number`, text, required): Enter your ID number.
* **ID Expiration Date** (`cert_id_expiration`, date, required): Enter your ID expiration date.
* **Eligibility Criteria** (`cert_meet_criteria`, select_one, required): Choose how you meet the eligibility criteria:
	+ Yes, I meet all criteria
	+ I partially meet criteria
	+ I do not meet criteria
* **Reason for Eligibility** (`cert_eligibility_reason`, select_one, required): Choose the reason you are eligible:
	+ Age 65 years or older
	+ Healthcare worker
	+ Essential worker
	+ Underlying medical condition
	+ Phase eligibility based on state guidelines
	+ Other reason
* **Medical Self-Certification** (`cert_no_contraindications`, select_one, required): Certify that you have no medical contraindications to the vaccine:
	+ I certify no contraindications
	+ I have contraindications
	+ I am unsure
* **Allergy Information** (`cert_no_allergies`, select_one, required): Certify that you have no known allergies to vaccine components:
	+ I certify no known allergies
	+ I have allergies
	+ I am unsure
* **Allergy Details** (`cert_allergy_details`, text, required): If you have allergies, describe them in detail.
* **Current Illness** (`cert_not_currently_ill`, select_one, required): Certify that you are not currently ill:
	+ I am not currently ill
	+ I am currently ill
	+ I have mild symptoms
* **Understanding and Acknowledgment** (`cert_understand_benefits`, select_one, required): Self-certify that you understand the benefits of the vaccine:
	+ Yes, I understand
	+ I have questions
	+ False
* **Understanding Risks and Side Effects** (`cert_understand_risks`, select_one, required): Self-certify that you understand the possible side effects and risks of the vaccine:
	+ Yes, I understand
	+ I have questions
	+ False
* **Voluntary Consent** (`cert_voluntary_consent`, select_one, required): Self-certify that your decision to receive the vaccine is voluntary:
	+ Yes, voluntary decision
	+ Under pressure or coerced
* **Authorization** (`cert_authorization`, select_one, required): Self-certify that you authorize the administration of the vaccine:
	+ I authorize
	+ I do not authorize
* **Date of Self-Certification** (`cert_signature_date`, date, required): Enter the date you are signing this form.
