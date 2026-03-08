<thinking>
To create a user-facing help guide for this form, I need to understand the purpose of the form and the fields it contains. Based on the provided YAML fields, it appears that this form is for collecting information from medical cannabis patients for intake purposes.

The form has multiple pages, each with a label (e.g. "Patient Information", "Medical History", etc.), and contains various fields such as text inputs, select options, and notes. Some fields are required, while others are optional. The fields are likely used for different aspects of the patient's medical history, consent, and submission process.

Before creating the help guide, I would like to clarify a few points:

* What is the expected use case for this form? Is it for patients to fill out before a doctor's visit, or is it for administrative purposes only?
* What is the purpose of the "Medical History Context" and "Doctor Info" fields? Are they for additional context or supplementary information?
* Why are the "Submission" and "Consent" fields select_multiple fields with only two options ("Yes" and "No")? Are they asking for a yes/no response or multiple selections?

Assuming I can make some educated guesses, I will create the help guide based on the provided YAML fields.

</thinking>

# Medical Cannabis Patient Intake Form - Help Guide
## Purpose
This form is for patients to provide their information and consent for medical cannabis use.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Patient Information" page with your basic contact and identification details.
2. Move on to the "Medical History" page and provide a brief description of your medical history.
3. On the "Consent" page, indicate whether you give your consent for medical cannabis use (Yes/No).
4. On the "Submission" page, confirm whether you agree to submit your information (Yes/No).
5. On the "Medical History Context" page, provide additional context or information about your medical history, if necessary.
6. On the "Doctor Info" page, provide any relevant information about your doctor or healthcare provider.
7. Sign and date the "Patient Signature" page to confirm you have filled out the form truthfully.
8. Finally, sign and date the "Doctor Signature" page to confirm your doctor has reviewed and approved your information.

## Field-by-Field Explanation
* **Patient Information (patient_info)** (`Patient Information`, `text`, false): This section is for you to provide your basic contact and identification details.
* **Medical History (medical_history)** (`Medical History`, `text`, false): Please describe your medical history in this section.
* **Consent (consent)** (`Consent`, `select_multiple`, true): Indicate whether you give your consent for medical cannabis use.
* **Submission (submission)** (`Submission`, `select_multiple`, true): Confirm whether you agree to submit your information.
* **Medical History Context (medical_history_context)** (`Medical History Context`, `text`, false): Provide additional context or information about your medical history, if necessary.
* **Doctor Info (doctor_info)** (`Doctor Info`, `text`, false): This section is for you to provide any relevant information about your doctor or healthcare provider.
* **Patient Signature (patient_signature)** (`Patient Signature`, `note`, true): Sign and date this page to confirm you have filled out the form truthfully.
* **Doctor Signature (doctor_signature)** (`Doctor Signature`, `note`, true): Sign and date this page to confirm your doctor has reviewed and approved your information.

## Tips
* Please fill out the form truthfully and accurately.
* Ensure your doctor reviews and signs the form before submission.
* If you have any questions or concerns, contact your healthcare provider.
