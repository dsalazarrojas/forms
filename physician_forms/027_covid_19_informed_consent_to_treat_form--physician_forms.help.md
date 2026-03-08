# COVID 19 Informed Consent To Treat Form - Help Guide
## Purpose
This form is used to gather informed consent from patients for COVID-19 treatment.

## How To Complete This Form
1. Review each section carefully and answer all questions truthfully.
2. Fill in your patient information, including name, date of birth, medical record number, phone number, and email address.
3. Review the treatment information, including the type of treatment being offered, the reasons for the treatment, and the potential benefits and risks.
4. Indicate if alternative treatments were discussed and if they are available.
5. Answer questions about the consequences of refusing treatment.
6. Provide information about the treating physician, including their name and specialty.
7. Confirm that you have discussed the treatment fully with your physician and that all your questions have been answered.
8. Provide informed consent for the proposed treatment.
9. Record the date of consent.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_name`, `text`, required): Enter your full name as it appears on your identification documents.
* **Date of Birth** (`patient_dob`, `date`, required): Enter your date of birth in the format of MM/DD/YYYY.
* **Medical Record Number** (`mrn`, `text`, required): Enter your medical record number.
* **Phone Number** (`patient_phone`, `text`, required): Enter your phone number.
* **Email Address** (`patient_email`, `email`, required): Enter your email address.
* **Guardian or Representative Name** (`guardian_name`, `text`, optional): If you have a guardian or representative, enter their name.
* **Type of Treatment Being Offered** (`treatment_type`, `select_one`, required): Select the type of treatment being offered from the available options.
* **Reason for Treatment** (`treatment_reason`, `text`, required): Enter the reason for the treatment.
* **I understand the potential benefits** (`treatment_benefits`, `select_one`, required): Select whether you understand the potential benefits of the treatment.
* **I understand the potential risks** (`treatment_risks`, `select_one`, required): Select whether you understand the potential risks of the treatment.
* **Potential side effects explained** (`side_effects`, `select_one`, required): Select whether the potential side effects of the treatment have been explained to you.
* **Alternative treatment options discussed** (`alternatives_discussed`, `select_one`, required): Select whether alternative treatments were discussed.
* **Alternatives available** (`alternatives_list`, `text`, optional): If alternative treatments were discussed, enter the available options.
* **Consequences of refusing treatment** (`refusal_consequences`, `text`, required): Enter the potential consequences of refusing treatment.
* **Treating Physician Name** (`physician_name`, `text`, required): Enter the name of the treating physician.
* **Physician Specialty** (`physician_specialty`, `text`, optional): Enter the treating physician's specialty.
* **I have discussed treatment fully with physician** (`discussion_occurred`, `select_one`, required): Select whether you have discussed the treatment fully with your physician.
* **All my questions have been answered** (`questions_answered`, `select_one`, required): Select whether all your questions have been answered.
* **I consent to the proposed treatment** (`informed_consent`, `select_one`, required): Select whether you consent to the proposed treatment.
* **Date of Consent** (`consent_date`, `date`, required): Enter the date of consent in the format of MM/DD/YYYY.

Note: Completing this form is a critical step in the treatment process. Please answer each question carefully and truthfully to provide accurate and informed consent.
