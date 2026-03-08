<thinking>
This form is intended to be completed by a patient or their authorized representative to authorize the release of immunization records to healthcare providers and educational institutions. This form helps to ensure that patients have control over who receives their medical records and for what purposes. Completing this form correctly will help to ensure that immunization records are released securely and only to authorized parties.
</thinking>

# Immunization Records Release Form - Help Guide
## Purpose
The Immunization Records Release Form is a document that enables patients to authorize the release of their immunization records to healthcare providers and educational institutions. It's essential for ensuring that medical records are released securely and only to authorized parties.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the patient's information, including their name and contact details.
2. Select the type of contact relationship you have with the patient (parent, guardian, or other).
3. Choose which immunization records you want to release (e.g., DTaP, MMR, etc.).
4. Indicate your consent to the release of immunization records.
5. Provide school information (if applicable).
6. Enter the name and contact details of the healthcare provider.
7. Select whether to release the school release form.
8. Review and submit the form.

## Field-by-Field Explanation
* **Patient Info** (`patient_info`, `text`, required: false): Enter the patient's name, date of birth, and any other relevant information.
* **Contact Info** (`contact_info`, `text`, required: false): Enter your contact name, phone number, and email address.
* **Contact Relationship** (`contact_relationship`, `select_one`, required: false): Choose "Parent", "Guardian", or "Other" to indicate your relationship with the patient.
* **Immunization Records** (`immunization_records`, `select_multiple`, required: false): Select the types of immunization records you want to release (e.g., DTaP, MMR, PCV, Rota, Hib).
* **Consent** (`consent`, `select_one`, required: false): Select "True", "False", or "Pending" to indicate your consent to the release of immunization records.
* **School Info** (`school_info`, `text`, required: false): Enter any relevant school information (e.g., school name, address).
* **Healthcare Provider** (`healthcare_provider`, `text`, required: false): Enter the name and contact details of the healthcare provider.
* **School Release Form** (`school_release_form`, `select_multiple`, required: false): Select "True", "False", or "Pending" to indicate whether to release the school release form.
* **School Release Form** (`school_release_form`, `select_multiple`, required: false): Select "True", "False", or "Pending" to indicate whether to release the school release form. (Note: Duplicate of `school_release_form`)

Note: Please review the form carefully before submission to ensure you're releasing the correct information to the right parties.
