# moderna_covid_19_vaccine_consent_form_cpesn--coronavirus_response_forms - Help Guide

## Purpose
This form is designed to collect patient consent and information for the Moderna COVID-19 vaccination process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your patient's information, including contact details, in the "Patient Information" section.
2. Select the vaccine manufacturer from the "Vaccine Manufacturer" dropdown list.
3. Indicate your consent to the terms and conditions of the vaccination process in the "Consent To Terms and Conditions" section.
4. Answer the vaccine screening questions in the "Vaccine Screening Questions" section.
5. Choose your preferred vaccination options in the "Vaccine Administration" section.
6. Enter your patient's address and phone number in the "Patient Address" and "Patient Phone Number" sections.
7. Enter your patient's email address in the "Patient Email" section.
8. Check the "Patient Consent" box to confirm your consent.
9. Add any additional notes in the "Patient Consent Note" section.

## Field-by-Field Explanation

### Patient Information (id: 1)
**Patient Information** (`patient_information`, text, required): Enter your patient's name, address, phone number, and email address.

### Vaccine Manufacturer (id: 2)
**Vaccine Manufacturer** (`vaccine_manufacturer`, select_one, required): Select the manufacturer of the vaccine you are receiving.

### Consent To Terms and Conditions (id: 3)
**Consent To Terms and Conditions** (`consent_to_terms_and_conditions`, select_multiple, required): Indicate your consent to the terms and conditions of the vaccination process.

### Vaccine Details (id: 4)
**Vaccine Details** (`vaccine_details`, select_multiple, required): Answer the following questions:
* Do you have a fever over 100.4F?
* Do you have a history of severe allergic reactions to vaccines?
* Do you have a bleeding disorder or are you taking medications that interfere with clotting?
* Do you have a history of autoimmune disorders?

### Vaccine Screening Questions (id: 5)
**Vaccine Screening Questions** (`vaccine_screening_questions`, select_multiple, required): Answer the following questions:
* Do you have a history of severe allergies?
* Do you have a history of seizures or convulsions?
* Do you have a history of heart disease or heart condition?

### Vaccine Administration (id: 6)
**Vaccine Administration** (`vaccine_administration`, select_multiple, required): Choose your preferred vaccination options:
* How long will the vaccination take?
* What are your vaccination options (in arm)?

### Patient Contact Information (id: 7)
**Patient Contact Information** (`patient_contact_information`, text, required): Enter your patient's contact information.

### Terms And Conditions (id: 8)
**Terms And Conditions** (`terms_and_conditions`, select_multiple, required): Indicate your consent to the terms and conditions of the vaccination process.

### Vaccine Dosage (id: 9)
**Vaccine Dosage** (`vaccine_dosage`, number, required): Enter your patient's dosage information.

### Patient Consent (id: 10)
**Patient Consent** (`patient_consent`, select_one, required): Check the box to confirm your consent.

### Patient Consent Note (id: 11)
**Patient Consent Note** (`patient_consent_note`, text, required): Add any additional notes.

### Patient Address (id: 12)
**Patient Address** (`patient_address`, text, required): Enter your patient's address.

### Patient Phone Number (id: 13)
**Patient Phone Number** (`patient_phone_number`, text, required): Enter your patient's phone number.

### Patient Email (id: 14)
**Patient Email** (`patient_email`, email, required): Enter your patient's email address.
