# Blood Draw Consent Form - Help Guide
## Purpose
This Blood Draw Consent Form is used to obtain the patient's voluntary consent for a blood draw procedure. It is required to be completed by the patient to provide information about their medical record number, date of birth, and other relevant details. The form is used to ensure that the patient is aware of the potential risks and benefits of the blood draw procedure and is able to provide informed consent.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name, date of birth, and medical record number.
2. Select the type of blood draw procedure that is to be performed.
3. Indicate whether you have understood the procedure, risks, and benefits associated with it.
4. Confirm that you have had all your questions answered.
5. Sign the form to indicate your voluntary consent.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Fill in your full legal name as it appears on your identification.
* **Date of Birth** (`date_of_birth`, date, required): Enter your birth date.
* **Medical Record Number** (`medical_record_number`, text, optional): If you have a medical record number, please provide it.
* **Date of Consent** (`consent_date`, date, required): Enter the date of this consent form.
* **Procedure Type** (`procedure_type`, select_one, required): Choose the type of blood draw procedure that is to be performed.
* **Purpose of Blood Draw** (`purpose_of_draw`, text, required): Describe the reason for the blood draw.
* **Procedure Understanding** (`procedure_understanding`, select_one, required): Indicate that you understand the procedure.
* **Risks Explained** (`risks_explained`, select_one, required): Confirm that the risks have been explained to you.
* **Risk Acknowledgment** (`risk_acknowledgment`, select_one, required): Indicate that you understand the potential risks.
* **Potential Risks** (`risk_details`, note, optional): If you have any questions or concerns about the potential risks, describe them.
* **Benefits Understanding** (`benefits_understanding`, select_one, required): Confirm that you understand the benefits of the blood draw procedure.
* **Alternatives Discussed** (`alternatives_discussed`, select_one, required): Confirm that alternatives have been discussed with your healthcare provider.
* **Questions Answered** (`questions_answered`, select_one, required): Confirm that all your questions have been answered.
* **Voluntary Consent** (`voluntary_consent`, select_one, required): Indicate that you are providing your consent voluntarily.
* **Right to Refuse** (`right_to_refuse`, select_one, required): Confirm that you understand you can refuse the blood draw procedure.
* **Previous Complications** (`previous_complications`, select_one, required): Confirm that you do not have any previous complications with blood draws.
* **Complication Details** (`complication_details`, text, optional): If you have had any previous complications with blood draws, describe them.
* **Difficult Venous Access** (`difficult_access`, select_one, required): Indicate whether you have had any difficulties with venous access.
* **Blood Thinners** (`blood_thinners`, select_one, required): Confirm that you are not currently on any blood thinners.
* **Patient Signature** (`patient_signature`, text, required): Sign your name as an indication of your consent.
* **Healthcare Provider Name** (`witness_name`, text, required): Enter the name of the healthcare provider who is obtaining your consent.
* **Additional Notes** (`additional_notes`, text, optional): Provide any additional comments or questions you may have.
