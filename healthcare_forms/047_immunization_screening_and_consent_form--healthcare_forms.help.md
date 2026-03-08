# Immunization Screening And Consent Form - Help Guide

## Purpose
The Immunization Screening And Consent Form is used to gather essential information from patients about their immunization status, medical history, and other relevant details. This form is typically used in healthcare settings to ensure patient safety and well-being.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Provide your demographic information on page 1.
2. Answer the questions about your medical history on page 2.
3. Indicate your allergy status and medications taken on page 3.
4. Confirm your vaccination status on page 4.
5. Choose your consent for immunization on page 5.
6. Enter your contact information on page 6.
7. Select your contact relationship on page 7.

## Field-by-Field Explanation

* **Patient Information** (`id: 1`, `type: text`, `required: true`): Please enter your name, date of birth, and other demographic details as prompted.
* **Medical History** (`id: 2`, `type: text`, `required: true`): Answer questions about your medical history, including any previous illnesses, surgeries, or medical conditions.
* **Allergies** (`id: 3`, `type: select_multiple`, `required: false`): If you have any allergies, please select 'Yes' for each allergy you have.
* **Meds** (`id: 4`, `type: text`, `required: true`): List any medications you are currently taking.
* **Vaccinations** (`id: 5`, `type: select_multiple`, `required: false`): If you have been vaccinated against any diseases, please select 'Yes' for each vaccination you have received.
* **Patient Consent** (`id: 6`, `type: select_one`, `required: true`): Please select 'Yes' if you agree to be immunized.
* **Contact Information** (`id: 7`, `type: text`, `required: true`): Enter the contact information for the person who will be responsible for contacting you, including their name, phone number, and email.
* **Contact Relationship** (`id: 8`, `type: select_multiple`, `required: false`): Select the relationship you have with the contact person (e.g., family member, friend, healthcare provider).
