<thinking>
## The purpose of this form is to gather information and provide a way for healthcare providers to request Medicare prior authorizations for patients' procedures. This form is intended to be used by physicians to submit requests for Medicare coverage for patient care.

## Before proceeding, please verify that this form does not need to be submitted again. If it already has a similar form, please do not continue.
</thinking>
# medicare_prior_authorization_form - Help Guide
## Purpose
This form is used by physicians to request Medicare coverage for patient procedures. It provides a structured way to gather required information and submit requests for prior authorization.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter patient information, including name, date of birth, and Medicare number.
2. Describe the medical condition that the procedure is for.
3. Specify the procedure requested.
4. Enter the date of the authorization request.
5. Add any additional physician information, as needed.
6. Provide a brief patient history.
7. Select the treatment options being considered.
8. Choose the supporting documents required for the request.
9. Indicate the authorization status.
10. Add any comments or additional information.
11. Sign the form with your physician's signature.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required: false): Enter the patient's name, date of birth, and Medicare number to identify the patient.
* **Medical Condition** (`medical_condition`, text, required: false): Describe the medical condition that the procedure is for.
* **Procedure Request** (`procedure_request`, text, required: false): Specify the procedure requested.
* **Authorization Request Date** (`authorization_request_date`, date, required: false): Enter the date the authorization request was made.
* **Physician Info** (`physician_info`, text, required: false): Add any additional physician information, as needed.
* **Patient History** (`patient_history`, text, required: false): Provide a brief patient history.
* **Treatment Options** (`treatment_options`, select_multiple, required: false): Select the treatment options being considered.
* **Supporting Documents** (`supporting_documents`, select_one, required: true): Choose the supporting documents required for the request (e.g., Document A, Document B, or Document C).
* **Authorization Status** (`authorization_status`, select_one, required: false): Indicate the authorization status (Approved, Denied, or Pending).
* **Comments** (`comments`, text, required: false): Add any comments or additional information.
* **Physician Signature** (`physician_signature`, text, required: false): Sign the form with your physician's signature.
