# AI Medical Scribe Consent Form - Help Guide
## Purpose
The AI Medical Scribe Consent Form is a tool designed to obtain patient consent for the use of an AI medical scribe in taking notes during medical visits. The form aims to ensure that patients are informed and agree to the terms of data collection and storage.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your patient's information, including their first and last name.
2. Provide your date of birth in the format YYYY-MM-DD.
3. Enter the name of the clinician or healthcare provider who will be using the AI scribe.
4. Briefly describe the service provided by the AI medical scribe.
5. Read and agree to the consent statement to use AI-assisted medical scribe.
6. Choose your preferred data retention period for the captured notes.
7. If you have any specific concerns or questions about data use, please provide them in the "Privacy or data use questions" field.
8. Sign the form with your full name and date.

## Field-by-Field Explanation

* **Patient name** (`patient_name`, `text`, required): Enter your first and last name as it appears on your official documents.
* **Date of birth** (`patient_dob`, `date`, required): Provide your date of birth in the format YYYY-MM-DD.
* **Clinician name** (`clinician_name`, `text`, required): Enter the name of the healthcare provider who will be using the AI scribe.
* **Description of AI scribe service** (`description_of_service`, `note`, not required): Briefly describe how the AI medical scribe will assist with note-taking during your visit.
* **Consent to use AI-assisted medical scribe** (`consent_statement`, `select_one`, required): Choose "I consent" if you agree to the terms of data collection and storage.
* **Data retention preference** (`data_retention`, `select_one`, required): Select how long the captured notes can be stored:
	+ 30 days
	+ 1 year
	+ Indefinitely until request to delete
* **Privacy or data use questions** (`privacy_questions`, `text`, not required): If you have specific concerns about data use, provide them here.
* **Electronic signature name** (`signature`, `text`, required): Type your full name as your electronic signature.
* **Signature date** (`signature_date`, `date`, required): Date of consent.
