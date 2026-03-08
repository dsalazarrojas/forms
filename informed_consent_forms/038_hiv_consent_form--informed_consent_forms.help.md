# HivConsentForm - Help Guide
## Purpose
The HivConsentForm is designed to document and track HIV test consent and related medical information. This form is intended for patients undergoing HIV testing and for healthcare providers to record test results, medical status, and other relevant details.

## How To Complete This Form
To complete this form accurately, follow these steps:
1. Enter patient information (ID, date of birth, etc.) on page 1.
2. Select the testing method and location on pages 2-3.
3. Document test results, their interpretation, and verification on pages 4-7.
4. Provide medical information on pages 8-12.
5. Sign and date the form to confirm consent and completion.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required): Enter the patient's ID number, date of birth, and any other relevant personal details.
* **Patient Signature** (`patient_signature`, select_one, not required): Choose how the patient's signature will appear on the form (Signature, Initials, None).
* **Test Request** (`test_request`, text, not required): Enter the reason for the HIV test (e.g., screening, diagnosis, etc.).
* **Testing Method** (`testing_method`, select_one, not required): Select the type of HIV test conducted (HIV Test Kit, Rapid HIV Test, Rapid HIV Test with Results).
* **Results Interpreted By** (`results_interpreted_by`, select_one, not required): Choose who interpreted the test results (Doctor, Nurse, Laboratory Staff).
* **Testing Site** (`testing_site`, select_multiple, not required): Select the location where the test was performed (Local Laboratory, Satellite Laboratory, Other).
* **Consent Status** (`consent_status`, select_one, not required): Confirm if consent was obtained (Obtained, Not Obtained).
* **Date of Birth** (`date_of_birth`, date, not required): Enter the patient's date of birth.
* **Consent Date** (`consent_date`, date, not required): Enter the date when consent was obtained.
* **Medical Provider Info** (`medical_provider_info`, text, not required): Enter any relevant medical provider information (e.g., doctor's name, clinic details).
* **Witness Signature** (`witness_signature`, select_one, not required): Choose how the witness's signature will appear on the form (Signature, Initials, None).
* **Test Results** (`test_results`, text, not required): Enter the test results (e.g., positive, negative, etc.).
* **Test Results Status** (`test_results_status`, select_one, not required): Select the status of the test results (Positive, Negative, Invalid).
* **Test Results Date** (`test_results_date`, date, not required): Enter the date when test results were obtained.
* **Medical Status** (`medical_status`, select_multiple, not required): Select the patient's current medical status (Alive, Deceased, Alive and Well).
* **Medical Status Description** (`medical_status_description`, text, not required): Provide a description of the patient's medical status.
* **Test Ordered By** (`test_ordered_by`, text, not required): Enter the person who ordered the test.
* **Test Performed By** (`test_performed_by`, text, not required): Enter the person who performed the test.
* **Test Site** (`test_site`, text, not required): Enter the location where the test was performed.
* **Test Results Verified By** (`test_results_verified_by`, text, not required): Enter who verified the test results.
* **Test Ordered Status** (`test_ordered_status`, select_multiple, not required): Select the status of the test order (Ordered, Re-Ordered, Cancelled).
* **Test Performed Status** (`test_performed_status`, select_multiple, not required): Select the status of the test performance (Performed, Re-Performed, Cancelled).
* **Test Verified Status** (`test_verified_status`, select_multiple, not required): Select the status of test verification (Verified, Re-Verified, Cancelled).
* **Test Status** (`test_status`, select_multiple, not required): Select the final status of the test (Positive, Negative, Invalid).
* **Test Results Notes** (`test_results_notes`, text, not required): Enter any additional notes about the test results.
