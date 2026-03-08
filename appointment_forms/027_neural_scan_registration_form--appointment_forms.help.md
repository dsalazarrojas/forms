<thinking>
This form is likely used to collect information about patients for medical purposes. It might be used in a hospital, clinic, or other healthcare setting. Given the fields present, it's likely that the form is for some sort of neural scan procedure or imaging study. The presence of a "scan details" field suggests that it's related to imaging technology. The "medical insurance" field and "consent" fields also imply that the form is used for medical purposes.
</thinking>

# neural scan registration form - Help Guide
## Purpose
This form is used to collect information about patients for medical purposes, specifically for neural scan procedures or imaging studies.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Enter patient information in the "patient info" field.
3. Provide details about the scan in the "scan details" field.
4. Select "Yes" or "No" to indicate if the patient has a medical insurance.
5. Select "Yes" or "No" to indicate if you have obtained the patient's consent.
6. If the patient has given consent, sign the "patient consent signature" field.
7. Enter any additional notes or comments in the "additional notes" field.

## Field-by-Field Explanation

* **patient info** (`patient_info`, text, required: false): Enter the patient's name, date of birth, and any other relevant information.
* **scan details** (`scan_details`, text, required: false): Describe the scan procedure, including the type, date, and any other relevant details.
* **scan type** (`scan_type`, select_one, required: false): Select "Yes" to indicate that the patient has undergone the neural scan, "No" otherwise.
* **medical insurance** (`medical_insurance`, select_multiple, required: false): Select "None" if the patient does not have medical insurance, or "Other" to specify the insurance provider.
* **consent** (`consent`, select_one, required: true): Select "Yes" to indicate that the patient has given consent for the procedure.
* **contact details** (`contact_details`, text, required: false): Enter the patient's contact information, including phone number and email.
* **additional notes** (`additional_notes`, note, required: false): Enter any additional comments or notes about the patient or scan.
* **patient consent signature** (`patient_consent_signature`, select_one, required: true): Select "True" to indicate that the patient has given consent and signed the form.

Note: The fields marked "required: true" are mandatory fields that must be filled out before submission.
