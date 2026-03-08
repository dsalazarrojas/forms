# Adverse Event Reporting Form - Help Guide

## Purpose

This form is designed to collect information about adverse events related to vaccinations. Adverse events are any unexpected or undesirable reactions to vaccines. The form is intended for healthcare providers and other individuals to report adverse events in a standardized and efficient manner.

## How To Complete This Form

To complete this form, follow these steps:

1.  Enter the patient's information:
    *   Patient Full Name: Enter the patient's legal full name.
    *   Date of Birth: Enter the patient's date of birth.
    *   Gender: Select the patient's gender.
    *   Patient Contact: Enter the patient's phone number or email.
2.  Enter the reporter's information:
    *   Reporter Name: Enter the name of the person reporting the event.
    *   Reporter Role: Select the reporter's role (Patient, Parent/Guardian, Healthcare Provider, or Other).
    *   Reporter Contact: Enter the contact information for the reporter.
3.  Enter the vaccination information:
    *   Vaccine Name: Enter the name of the vaccine received.
    *   Vaccine Lot Number: Enter the lot number of the vaccine administered.
    *   Vaccination Date: Enter the date when the vaccine was administered.
    *   Vaccination Site: Enter where the vaccine was administered.
4.  Describe the adverse event:
    *   Event Description: Provide a detailed description of the adverse event.
    *   Symptom Onset Date: Enter the date when the symptoms first appeared.
    *   Severity Level: Select the severity level of the symptoms.
5.  Report the outcome:
    *   Medical Attention Sought: Select whether the patient sought medical attention for this event.
    *   Outcome: Enter the outcome of the adverse event.

## Field-by-Field Explanation

*   **Patient Full Name** (`patient_full_name`, text, required): Enter the patient's legal full name.
*   **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth.
*   **Gender** (`gender`, select_one, required): Select the patient's gender.
*   **Patient Contact** (`patient_contact`, text, required): Enter the patient's phone number or email.
*   **Reporter Name** (`reporter_name`, text, required): Enter the name of the person reporting the event.
*   **Reporter Role** (`reporter_role`, select_one, required): Select the reporter's role (Patient, Parent/Guardian, Healthcare Provider, or Other).
*   **Reporter Contact** (`reporter_contact`, text, required): Enter the contact information for the reporter.
*   **Vaccine Name** (`vaccine_name`, text, required): Enter the name of the vaccine received.
*   **Vaccine Lot Number** (`vaccine_lot_number`, text, required): Enter the lot number of the vaccine administered.
*   **Vaccination Date** (`vaccination_date`, date, required): Enter the date when the vaccine was administered.
*   **Vaccination Site** (`vaccination_site`, text, required): Enter where the vaccine was administered.
*   **Event Description** (`event_description`, text, required): Provide a detailed description of the adverse event.
*   **Symptom Onset Date** (`symptom_onset_date`, date, required): Enter the date when the symptoms first appeared.
*   **Severity Level** (`severity_level`, select_one, required): Select the severity level of the symptoms.
*   **Medical Attention Sought** (`medical_attention_sought`, select_one, required): Select whether the patient sought medical attention for this event.
*   **Outcome** (`outcome`, text, required): Enter the outcome of the adverse event.
