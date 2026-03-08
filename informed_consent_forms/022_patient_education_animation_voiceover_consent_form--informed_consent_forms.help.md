# Patient Education Animation Voiceover Consent Form - Help Guide
## Purpose
The Patient Education Animation Voiceover Consent Form is a document that ensures patients understand their rights, responsibilities, and the scope of the animation voiceover. It is used to obtain their informed consent for its use.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's information on the first page.
2. Select the animation type (radio, video, or animation) on the second page.
3. Enter the consent statement, which is a summary of the animation content and any important information about the patient's rights and responsibilities.
4. Specify the animation length and units (e.g., seconds, minutes) on the fourth page.
5. Confirm your consent to share the patient's information on the sixth page.
6. Specify whether you consent to share the patient's information on the seventh page.
7. Enter any comments about the consent form on the eighth page.
8. Sign the form with your signature on the 12th page.

## Field-by-Field Explanation

* **Patient Information (1)** (`patient_education_animation_voiceover_consent_form`, text, required: false): Please enter the patient's name, date of birth, and contact information on this page.
* **Animation Type (2)** (`animation_type`, select_one, required: false): Please select the type of animation (radio, video, or animation) that is being used for the patient's education.
* **Consent Statement (3)** (`consent_statement`, text, required: false): Please enter a summary of the animation content and any important information about the patient's rights and responsibilities.
* **Animation Length (4)** (`animation_length`, number, required: false): Please enter the length of the animation in seconds or minutes.
* **Consent Date (5)** (`consent_date`, date, required: false): Please enter the date you are obtaining consent from the patient.
* **Animation Voiceover Consent (6)** (`animation_voiceover_consent`, select_multiple, required: false): Please confirm whether you consent to the animation voiceover and whether the patient understands its content.
* **Patient Consent (7)** (`patient_consent`, select_one, required: false): Please confirm whether the patient consents to their information being shared.
* **Consent to Share (8)** (`consent_to_share`, select_multiple, required: false): Please confirm whether the patient's information will be shared and with whom (e.g., other healthcare providers).
* **Animation Length Units (9)** (`animation_length_units`, text, required: false): Please enter the units of time for the animation length (e.g., seconds, minutes).
* **Provider Consent (10)** (`provider_consent`, select_one, required: false): Please confirm whether the provider (e.g., doctor, nurse) consents to the patient's information being shared.
* **Consent Form Comments (11)** (`consent_form_comments`, note, required: false): Please enter any additional comments or information about the consent form.
* **Patient Signature (12)** (`patient_signature`, text, required: false): Please sign the form with your patient's signature.
* **Provider Signature (13)** (`provider_signature`, text, required: false): Please sign the form with your provider's signature.
