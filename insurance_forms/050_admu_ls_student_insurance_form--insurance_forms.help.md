<thinking>...</thinking>

# Admu Ls Student Insurance Form - Help Guide
## Purpose
This form is for students to submit insurance claims for medical expenses, dental expenses, vision care, accidents, prescription medication, mental health, and other types of claims. The form requires information about the student's identification, claim details, and supporting documents.

## How To Complete This Form

- Start by filling in your full name, email, phone number, address, city, state/province, zip/postal code, and country of residence. These details are required as they help us to contact you and verify your identity.
- Provide your student identification number, date of birth, and insurance policy number. These details are essential for processing your claim.
- Specify the date when the incident occurred and the date you are submitting the claim. Be accurate as these dates are crucial for claim processing.
- Describe the incident that led to the claim and the type of claim you are filing. Choose from the provided options for type of claim.
- List any supporting documents you are submitting.
- If applicable, provide the name of the medical provider or hospital, date of treatment, medical diagnosis, treatment description, total charges, amount paid, and amount claiming.
- Indicate if you have filed a similar claim before and specify the amount you are claiming from the insurance.
- Finally, sign the form with your electronic signature to confirm your claim submission.

## Field-by-Field Explanation

- **Full Name** (`student_full_name`, text, required): Enter your legal name.
- **Student ID** (`student_id`, text, required): Your student identification number.
- **Email Address** (`student_email`, email, required): Enter a valid email for communication.
- **Phone Number** (`student_phone`, text, required): Enter your contact phone number.
- **Address** (`student_address`, text, required): Your current residential address.
- **City** (`student_city`, text, required): Your city of residence.
- **State/Province** (`student_state`, text, required): Your state or province of residence.
- **ZIP/Postal Code** (`student_zip`, text, required): Your postal code of residence.
- **Country** (`student_country`, text, required): Your country of residence.
- **Date of Birth** (`date_of_birth`, date, required): Enter your birth date.
- **Insurance Policy Number** (`insurance_policy_number`, text, required): Enter your student insurance policy number.
- **Date of Claim** (`claim_date`, date, required): Enter the date when the claim is being submitted.
- **Date of Incident** (`incident_date`, date, required): Enter the date when the incident occurred.
- **Location of Incident** (`incident_location`, text, required): Describe where the incident happened.
- **Description of Incident** (`incident_description`, text, required): Provide a detailed description of what happened.
- **Type of Claim** (`type_of_claim`, select_one, required): Choose from the options: Medical Expense, Dental Expense, Vision Care, Accident, Prescription Medication, Mental Health, or Other.
- **Medical Provider** (`medical_provider`, text, optional): Name of the medical provider or hospital.
- **Date of Treatment** (`treatment_date`, date, optional): When did you receive treatment?
- **Diagnosis** (`diagnosis`, text, optional): Medical diagnosis code or description.
- **Description of Treatment** (`treatment_description`, text, optional): What treatment was received?
- **Total Charges** (`total_charges`, number, optional): Total amount charged for treatment.
- **Amount Paid** (`amount_paid`, number, optional): Amount you have already paid.
- **Amount Claiming** (`insurance_claim_amount`, number, optional): Amount you are claiming from insurance.
- **Previous Claims** (`previous_claims`, select_one, required): Have you filed a similar claim before? Choose from Yes or No.
- **Additional Information** (`additional_information`, text, optional): Provide any additional information about the claim.
- **Supporting Documents** (`supporting_documents`, text, optional): List any supporting documents being submitted.
- **Claim Status** (`claim_status`, select_one, optional): Current status of the claim. Choose from options: Submitted, Under Review, Approved, Denied, Additional Info Required, or Closed.
- **Assigned Reviewer** (`assigned_reviewer`, text, optional): Name of the person reviewing the claim (to be filled by administrator).
- **Date Submitted** (`claim_date_submitted`, date, required): Date when the claim was submitted.
- **Student Signature** (`student_signature`, text, required): Electronic signature to confirm claim submission.
