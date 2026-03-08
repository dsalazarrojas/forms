<thinking> 
We are designing the "oral_surgery_referral_form" to gather information for oral surgery referrals. This form is essential for patients undergoing oral surgery procedures, and the referral process helps to ensure that patients receive the best possible care. To prevent duplication of referral efforts, please ensure that this form is completed only when a new referral is needed. If you are unsure, please check with your supervisor or the relevant department before completing this form. 

</thinking>
# oral_surgery_referral_form - Help Guide
## Purpose
The oral surgery referral form is used to gather patient information for oral surgery procedures. It helps ensure that patients receive the best possible care and prevents duplication of referral efforts.

## How To Complete This Form
To complete this form, please follow these steps:

1. **Patient Information (Page 1)**: Enter the patient's information, including their name and date of birth.
2. **Medical History and Current Medications (Page 1)**: Provide a list of the patient's current medical conditions, medications, and allergies.
3. **Chief Complaint (Page 1)**: Describe the reason for the referral.
4. **Referral Information (Page 2)**: Select the reason for the referral and enter the date and time of the referral.
5. **Referring Doctor's Information (Page 2)**: Enter the referring doctor's information, including their name and signature.
6. **Surgeon's Information (Page 3)**: Enter the surgeon's information, including their name, signature, and contact details.
7. **Date and Signature (Page 4)**: Enter the date of the surgeon's signature and the patient's signature.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): The patient's full name.
* **Date of Birth** (`patient_dob`, `date`, required): The patient's date of birth.
* **Medical History** (`medical_history`, `text`, required): A brief description of the patient's medical history.
* **Current Medications and Allergies** (`current_medications`, `text`, required): A list of the patient's current medications and allergies.
* **Chief Complaint** (`chief_complaint`, `text`, required): A description of the reason for the referral.
* **Reason for Referral** (`reason_for_referral`, `select_one`, required): Select the reason for the referral (Oral Surgery).
* **Date of Referral** (`date_of_referral`, `date`, required): The date of the referral.
* **Time of Referral** (`time_of_referral`, `time`, required): The time of the referral.
* **Referring Doctor's Name** (`referring_doctor_info`, `text`, required): The referring doctor's name.
* **Referring Doctor's Signature** (`referring_physician_signature`, `text`, required): The referring doctor's signature.
* **Date of Referring Doctor's Signature** (`date_signature`, `date`, required): The date of the referring doctor's signature.
* **Surgeon's Name** (`surgeon_info`, `text`, required): The surgeon's name.
* **Surgeon's Phone Number** (`surgeon_phone`, `text`, required): The surgeon's phone number.
* **Surgeon's Email** (`surgeon_email`, `text`, required): The surgeon's email address.
* **Surgeon's Signature** (`physician_signature`, `text`, required): The surgeon's signature.
* **Patient's Signature** (`patient_signature`, `text`, required): The patient's signature.
* **Date of Surgeon's Signature** (`date_surgeon`, `date`, required): The date of the surgeon's signature.
* **Surgeon's Information** (`surgeon_name`, `text`, required): Additional information about the surgeon.
