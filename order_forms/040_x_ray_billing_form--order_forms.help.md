# X Ray Billing Form - Help Guide
## Purpose
The X Ray Billing Form is a medical billing form used to collect patient information, billing details, and other essential data for efficient and accurate medical billing processes.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the patient's information, including their contact details and medical record number.
* Provide the insurance provider and claim type information.
* Specify the patient's status and payment terms.
* Enter the billing address and contact information.
* Add any additional comments or service descriptions.

## Field-by-Field Explanation
* **Patient Information** (`patient_name`, `text`, required: false): Enter the patient's name.
* **Billing Details** (`billing_details`, `text`, required: false): Enter any relevant billing information.
* **Service Specifics** (`service_specifics`, `text`, required: false): Enter any service-specific details.
* **Insurance Information** (`insurance_information`, `text`, required: false): Enter the insurance provider and other relevant information.
* **Service Charges** (`service_charges`, `text`, required: false): Enter any service charges related to the patient's visit.
* **Signature** (`signature`, `text`, required: false): Sign and date the form to confirm accuracy.
* **Contact Information** (`contact_information`, `text`, required: false): Enter the patient's or representative's contact information.
* **Additional Comments** (`additional_comments`, `text`, required: false): Add any additional comments or notes about the patient's visit.
* **Service Type** (`service_type`, `select_multiple`, required: false): Select the service type related to the patient's visit (e.g., emergency, non-emergency).
* **Medical Record Number** (`medical_record_number`, `text`, required: false): Enter the patient's medical record number.
* **Date of Birth** (`date_of_birth`, `date`, required: false): Enter the patient's date of birth.
* **Address** (`address`, `text`, required: false): Enter the patient's address.
* **Phone Number** (`phone_number`, `text`, required: false): Enter the patient's phone number.
* **Email** (`email`, `email`, required: false): Enter the patient's email address.
* **Insurance Provider** (`insurance_provider`, `text`, required: false): Enter the insurance provider and other relevant information.
* **Claim Type** (`claim_type`, `select_one`, required: false): Select the claim type related to the patient's visit (e.g., Yes, No).
* **Patient Status** (`patient_status`, `select_multiple`, required: false): Select the patient's status (e.g., Active, Inactive).
* **Payment Terms** (`payment_terms`, `select_one`, required: false): Select the payment terms related to the patient's visit (e.g., Yes, No).
* **Service Description** (`service_description`, `text`, required: false): Enter a brief description of the services rendered.
* **Billing Address** (`billing_address`, `text`, required: false): Enter the billing address.
* **Billing City** (`billing_city`, `text`, required: false): Enter the billing city.
* **Billing Postal Code** (`billing_postal_code`, `text`, required: false): Enter the billing postal code.
* **Billing Country** (`billing_country`, `text`, required: false): Enter the billing country.
* **Signature Date** (`signature_date`, `date`, required: false): Sign and date the form to confirm accuracy.
