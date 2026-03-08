# mental_health_service_claim_form - Help Guide
## Purpose
The mental health service claim form is used to document the mental health services provided to a patient, facilitating insurance claims and reimbursement processes.

## How To Complete This Form

### Step 1: Collect Patient Information
- Fill out the patient's details such as name, email, and phone number in the "patient_info" section.

### Step 2: Claimant Details
- Enter the claimant's details such as name, address, city, state, zip, date of birth, and claim ID in the respective fields.

### Step 3: Service Details
- Fill out the service date and time in the "service_date" and "service_time" fields respectively.
- Enter the healthcare provider's name and address in the "healthcare_provider" and "healthcare_provider_address" fields.
- Provide the healthcare provider's city and state in the "healthcare_provider_city" and "healthcare_provider_state" fields.
- Enter the claimant's signature and signature date and time in the "claimant_signature", "claimant_signature_date", and "claimant_signature_time" fields.

### Step 4: Additional Information
- Enter the claimant's diagnosis and service date range in the "claimant_diagnosis" and "claimant_service_date_range" fields.
- Enter any additional notes about the claimant in the "claimant_notes" field.

## Field-by-Field Explanation

### Patient Info
- **Patient Info** (`patient_info`, `text`, required): Enter the patient's name, email, and phone number.

### Claimant Details
- **Claimant Name** (`claimant_name`, `text`, required): Enter the claimant's name.
- **Claimant Phone** (`claimant_phone`, `text`, required): Enter the claimant's phone number.
- **Claimant Notes** (`claimant_notes`, `note`, required): Enter any additional notes about the claimant.
- **Claimant Signature** (`claimant_signature`, `text`, required): Enter the claimant's signature.
- **Claimant Signature Date** (`claimant_signature_date`, `date`, required): Enter the date of the claimant's signature.
- **Claimant Signature Time** (`claimant_signature_time`, `time`, required): Enter the time of the claimant's signature.
- **Claimant Address** (`claimant_address`, `text`, required): Enter the claimant's address.
- **Claimant City** (`claimant_city`, `text`, required): Enter the claimant's city.
- **Claimant State** (`claimant_state`, `select_one`, required): Select the claimant's state from the drop-down list.
- **Claimant Zip** (`claimant_zip`, `text`, required): Enter the claimant's zip code.
- **Claimant Date of Birth** (`claimant_dob`, `date`, required): Enter the claimant's date of birth.
- **Claimant Claim ID** (`claimant_claim_id`, `text`, required): Enter the claimant's claim ID.

### Healthcare Provider Details
- **Healthcare Provider** (`healthcare_provider`, `text`, required): Enter the healthcare provider's name.
- **Healthcare Provider Address** (`healthcare_provider_address`, `text`, required): Enter the healthcare provider's address.
- **Healthcare Provider City** (`healthcare_provider_city`, `text`, required): Enter the healthcare provider's city.
- **Healthcare Provider State** (`healthcare_provider_state`, `select_one`, required): Select the healthcare provider's state from the drop-down list.
- **Healthcare Provider Zip** (`healthcare_provider_zip`, `text`, required): Enter the healthcare provider's zip code.

### Additional Information
- **Claimant Diagnosis** (`claimant_diagnosis`, `text`, required): Enter the claimant's diagnosis.
- **Service Date Range** (`claimant_service_date_range`, `date`, required): Enter the service date range.
- **Healthcare Provider Name** (`healthcare_provider_name`, `text`, required): Enter the healthcare provider's name.
- **Healthcare Provider Zip** (`healthcare_provider_zip`, `text`, required): Enter the healthcare provider's zip code.

## Tips
- Double-check all fields for accuracy before submitting the form.
- If a field is not required, it can be left blank.
- The form can be printed or exported for easy reference.
