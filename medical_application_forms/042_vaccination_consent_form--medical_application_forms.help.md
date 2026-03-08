# Vaccination Consent Form - Help Guide
## Purpose
The Vaccination Consent Form is designed to obtain consent from patients before administering vaccinations. This form ensures that patients are aware of the vaccination process, potential risks and benefits, and are willing to receive the vaccination.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide patient information in the `Patient Information` section.
2. Select the type of vaccination you will be administering in the `Vaccination Type` section.
3. If applicable, provide guardian information in the `Guardian Information` section.
4. Answer whether the patient has a medical history in the `Medical History` section.
5. Confirm whether you have obtained consent from the patient in the `Consent` section.
6. Sign and date the form in the `Signature Date` section.
7. Sign your name and title in the `Signature` section.
8. Confirm whether the patient has signed the form in the `Patient Signature` section.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, text, required/optional): This section is for providing the patient's basic contact and demographic information.
* **Vaccination Type** (`vaccination_type`, select_one, required/optional): This section asks about the type of vaccination you will be administering. Please select one of the provided options.
* **Guardian Information** (`guardian_info`, text, required/optional): If the patient is a minor or has a guardian, provide the guardian's contact information in this section.
* **Medical History** (`medical_history`, select_multiple, required/optional): This section asks about the patient's medical history. Select all applicable answers.
* **Consent** (`consent`, select_one, required/optional): Confirm whether you have obtained consent from the patient. Select one of the provided options.
* **Signature Date** (`signature_date`, date, required/optional): This section is for signing and dating the form. Please ensure it is completed in the correct format (MM/DD/YYYY).
* **Signature** (`signature`, note, required/optional): This is a field for signing your name and title.
* **Patient Signature** (`patient_signature`, select_one, required/optional): Confirm whether the patient has signed the form. Select one of the provided options.
