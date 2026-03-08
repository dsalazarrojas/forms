<thinking>
To create a user-facing help guide for the COVID 19 Antibody Screening Consent Form, I need to understand its purpose and relevance. This form is used for COVID-19 antibody screening, which is a test to detect the presence of antibodies to the SARS-CoV-2 virus in a patient's blood. This form aims to ensure that patients understand the purpose and process of the test, as well as the implications of the test results. It also requires patient consent for the test and the potential use of their sample for future testing or research. 

The form includes various fields to gather information about the patient, including their name, date of birth, ID number, email address, phone number, date of the test, type of test, and informed consent status. The form also includes fields for consent and other relevant information, such as the implications of positive or negative test results, sample collection, storage, and notification.

Before filling out this form, please make sure you have read and understood the information provided. If you have any questions or concerns, please do not hesitate to ask your healthcare provider.

</thinking>

# COVID 19 Antibody Screening Consent Form - Help Guide
## Purpose
The COVID-19 antibody screening form is used to gather information about you and your medical history to perform the COVID-19 antibody test. This form is required for you to provide informed consent for the test.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Make sure to answer all required questions.
3. Review and sign the form before submitting it to your healthcare provider.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your full legal name as it appears on your government-issued ID.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Patient ID Number** (`patient_id`, text, not required): If you have a medical record ID, enter it here. Otherwise, leave this blank.
* **Email Address** (`email_address`, email, required): Enter your email address where you can be reached for test results and other communication.
* **Phone Number** (`phone_number`, text, required): Enter your phone number where you can be reached for test results and other communication.
* **Date of COVID-19 Antibody Test** (`test_date`, date, required): Enter the date you will be taking the COVID-19 antibody test.
* **Type of Antibody Test** (`test_type`, select_one, required): Choose the type of test you are taking: IgG Antibody Test, IgM Antibody Test, IgG and IgM Combined, or Not Sure.
* **I understand the purpose and procedure of the COVID-19 antibody test** (`informed_consent_understanding`, select_one, required): Select Yes, I understand or No, I do not understand.
* **I understand the risks and benefits of this test** (`test_risks_benefits`, select_one, required): Select Yes, fully understand or Partially understand or Do not understand.
* **I understand test results can be false positive or false negative** (`false_positives_negatives`, select_one, required): Select Yes, I understand or No, I do not understand or Have questions.
* **I consent to blood sample collection for this test** (`sample_collection`, select_one, required): Select Yes, I consent or No, I do not consent or Need more information.
* **I understand my sample may be stored for future testing or research** (`sample_storage`, select_one, not required): If you are unsure or have questions about this, discuss with your healthcare provider.
* **I understand how and when I will receive my test results** (`result_notification`, select_one, required): Select Yes, I understand or No, I do not understand or Have questions.
* **I understand implications of a positive antibody result** (`positive_result_implications`, select_one, not required): Select if you are sure you understand, otherwise discuss with your healthcare provider.
* **I understand my health information will be kept confidential per HIPAA** (`privacy_hipaa`, select_one, required): Select Yes, I understand or No, I do not understand or Have questions.
* **I understand my participation is voluntary and I can withdraw anytime** (`voluntary_participation`, select_one, required): Select Yes, I understand or No, I do not understand or Have questions.
* **I have been informed of alternative testing options** (`alternative_declined`, select_one, not required): If applicable, discuss with your healthcare provider.
* **All my questions have been answered to my satisfaction** (`questions_answered`, select_one, not required): If you are unsure, discuss with your healthcare provider.
* **I voluntarily consent to the COVID-19 antibody screening test** (`formal_consent`, select_one, required): Select I consent or I do not consent.
* **Consent Date** (`consent_signature_date`, date, required): Enter the date you are providing this consent.
* **Healthcare Provider Name** (`provider_name`, text, required): Enter the name of the person obtaining your consent.
* **Healthcare Provider Title** (`provider_title`, text, not required): Enter the title of the person obtaining your consent.

## Tips

* Review the form carefully before submitting it to your healthcare provider.
* Do not hesitate to ask your healthcare provider if you have any questions or concerns.
* If you are unsure or have questions about any of the fields, discuss with your healthcare provider before proceeding.
* Make sure to keep a copy of this form for your records.
