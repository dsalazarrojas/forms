# Medical Necessity Receipt - Help Guide
## Purpose
The Medical Necessity Receipt form is a crucial tool for documenting a patient's visit, ensuring accurate billing, and insurance claims.

## How To Complete This Form
1.  To begin, fill in the patient's name in the "Patient Name" field.
2.  Select the date of the visit from the calendar provided in the "Date of Visit" field.
3.  Choose the services rendered by the healthcare provider from the "Services Provided" dropdown selection.
4.  Enter the monetary costs of services provided in the "Medical Costs" field.
5.  Indicate if the services were covered by insurance in the "Insurance Coverage" dropdown selection.
6.  Provide any additional comments or notes in the "Signature" field.
7.  Select the medical provider's signature from the "Medical Provider Signature" dropdown.

## Field-by-Field Explanation
*   **Patient Name** (`patient_name`, text, required: false): Enter the patient's name for accurate identification and billing purposes.
*   **Date of Visit** (`date_of_visit`, date, required: false): Record the date of the visit for accurate billing and insurance claims.
*   **Services Provided** (`services_provided`, select_multiple, required: false): Select the services rendered to the patient, such as "Primary Care Visit", "Specialist Visit", or "Lab or Imaging Procedure".
*   **Medical Costs** (`medical_costs`, number, required: false): Enter the monetary costs of services provided for accurate billing and insurance claims.
*   **Insurance Coverage** (`insurance_coverage`, select_multiple, required: false): Select "True" if the services were covered by insurance, "False" otherwise, or "Pending Review" for further verification.
*   **Signature** (`signature`, note, required: false): Enter any additional comments or notes about the visit, the patient, or services rendered.
*   **Medical Provider Signature** (`medical_provider_signature`, select_one, required: false): Select the signature of the healthcare provider, Dr. Smith, Dr. Johnson, or Dr. Lee, for verification and validation.

## Tips
*   Ensure you fill out each field accurately and truthfully for the sake of medical billing and insurance claims.
*   If unsure about any field, please consult with a healthcare professional for clarification.
*   This form should be filled out for each patient visit separately.
