# Medicare Claim Form Template - Help Guide

## Purpose
This form is designed to be used for submitting Medicare claims. It collects relevant information about the patient, provider, and claim details. Please ensure that all required fields are filled in accurately to avoid any delays or issues with the claim submission process.

## How To Complete This Form
- Fill out the form in sections, starting from the top of the page.
- Ensure that you have all necessary information before filling out the form, especially if it is for a patient's claim.
- Double-check that all required fields are filled in accurately.

## Field-by-Field Explanation

### Page 1: Medicare Claim Form
- **Medicare Claim Form** (`medicare_claim_form`, Text, Required): This is the title of the page. It is a required field and should be left as is.

### Page 2: Patient Information
- **Patient Name** (`patient_name`, Text, Required): Please enter the patient's full name.
- **Provider Name** (`provider_name`, Text, Required): Please enter the name of the healthcare provider who is submitting the claim.
- **Claim Date** (`claim_date`, Date, Required): Enter the date the claim is being submitted.
- **Claim Amount** (`claim_amount`, Number, Required): Enter the total amount of the claim.

### Page 3: Claim Details
- **Claim Type** (`claim_type`, Select One, Required): Please select the type of claim being submitted (e.g., Type 1, Type 2, Type 3).
- **Patient Address** (`patient_address`, Text, Not Required): Enter the patient's address if necessary.
- **Provider Address** (`provider_address`, Text, Not Required): Enter the provider's address if necessary.
- **Email** (`email`, Email, Not Required): Enter the email address of the provider or patient if necessary.
- **Phone** (`phone`, Text, Not Required): Enter the phone number of the provider or patient if necessary.

### Page 4: Patient Information (continued)
- **Patient Gender** (`patient_gender`, Select Multiple, Required): Please select the patient's gender (Male, Female, Other).
- **Patient Date Of Birth** (`patient_dob`, Date, Required): Enter the patient's date of birth.
- **Patient Medical Record Number** (`patient_medical_record_number`, Text, Not Required): Enter any medical record number if necessary.
- **Patient Medical Record Number Type** (`patient_medical_record_number_type`, Select One, Not Required): Enter the type of medical record number if necessary.

### Page 5: Claim Status and Submission
- **Claim Status** (`claim_status`, Select One, Required): Please select the current status of the claim (Pending, Approved, Denied).
- **Claim Submitted By** (`claim_submitted_by`, Select One, Required): Please select who submitted the claim (Provider, Patient, Insurance).
- **Claim Deny Reason** (`claim_deny_reason`, Text, Not Required): Enter any reason why the claim was denied if necessary.
- **Claim Fax Number** (`claim_fax_number`, Text, Required): Enter the fax number for the claim.
- **Provider License Number** (`provider_license_number`, Text, Required): Enter the provider's license number.
- **Provider Tax ID Number** (`provider_tax_id_number`, Text, Not Required): Enter the provider's tax ID number if necessary.
- **Fax Number** (`claim_fax_number`, Text, Not Required): Enter any additional fax number if necessary.
- **Patient Phone** (`patient_phone`, Text, Not Required): Enter the patient's phone number if necessary.

### Page 6: Additional Information
- **Claims Comments** (`claim_comments`, Text, Required): Please enter any additional comments about the claim.
- **Claim Submitted By** (`claim_submitted_by`, Select One, Not Required): This field is a duplicate and can be ignored.
- **Claim Deny Reason** (`claim_deny_reason`, Text, Not Required): This field is a duplicate and can be ignored.
