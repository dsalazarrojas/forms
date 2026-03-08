<thinking>...</thinking>

# Physician Referral Form - Help Guide
## Purpose
The purpose of this form is to facilitate the referral process for patients between healthcare providers. This form collects essential information about the patient's referral, allowing healthcare staff to efficiently manage and track referrals.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate and relevant information.
2. Select the desired referral method (phone, email, or online) from the "Referral Method" dropdown menu.
3. Provide a brief description of the patient's referral details in the "Patient Referral Details" field.
4. Choose the status of the patient's referral (Pending, Approved, Rejected, or Closed) from the "Patient Referral Status" dropdown menu.
5. Enter the date of the patient's referral ID if applicable.
6. Enter the patient's name and address in their respective fields.

## Field-by-Field Explanation
- **Referred a Patient** (`refer_a_patient`, number, required/optional): Enter the number of patients referred.
- **Referred Doctor Name** (`referred_doctor_name`, text, required/optional): Enter the name of the doctor to whom the patient is being referred.
- **Referral Method** (`referral_method`, select_one, required/optional): Select the method by which the patient will be referred (Phone, Email, or Online).
  * Phone: The patient will be referred via phone call.
  * Email: The patient will be referred via email.
  * Online: The patient will be referred online.
- **Patient Referral Details** (`patient_referral_details`, text, required/optional): Enter a brief description of the patient's referral details.
- **Patient Referral Status** (`patient_referral_status`, select_multiple, required/optional): Choose the status of the patient's referral (Pending, Approved, Rejected, or Closed).
  * Pending: The referral is pending review or processing.
  * Approved: The referral has been approved.
  * Rejected: The referral has been rejected.
  * Closed: The referral is closed.
- **Patient Referral ID** (`patient_referral_id`, date, required/optional): Enter the date of the patient's referral ID if applicable.
- **Patient Name** (`patient_name`, text, required/optional): Enter the name of the patient.
- **Patient Address** (`patient_address`, text, required/optional): Enter the address of the patient.

Note: The required fields are marked as required/optional in the field explanations to indicate that they need to be filled out to submit the form. However, some fields are marked as required/optional because they might not always be relevant for every patient referral.
