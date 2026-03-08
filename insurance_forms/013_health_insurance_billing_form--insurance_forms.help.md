</thinking>

# health_insurance_billing_form - Help Guide
## Purpose
This form is used for billing purposes for health insurance. It is intended for patients to provide their personal and contact information, including their address, phone number, and date of birth, as well as billing information for their health provider. The form also collects medical group information and other relevant details.

## How To Complete This Form

To complete this form, follow these steps:

* Review each section carefully to ensure you have entered accurate information.
* Enter your personal information in the "Patient Information" section, including your name, contact details, and date of birth.
* Select "Yes" or "No" to indicate whether your health provider is part of a medical group.
* If you are part of a medical group, enter any additional notes or comments in the "Note" field.
* Enter your billing address, including your street address, city, state, zip code, and country.
* Enter your email address.
* Review your information and select the "Submit" option to confirm your submission.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, `text`, required: false): Enter your personal name and any other relevant details.
* **Contact Details** (`contact`, `text`, required: true): Enter your contact information, including your phone number.
* **Provider Details** (`provider_details`, `select_one`, required: false): Select "Yes" to indicate your health provider is part of a medical group.
* **Billing Information** (`billing_info`, `text`, required: true): Enter your billing information, including your address.
* **Address** (`billing_info_address`, `text`, required: true): Enter your billing address.
* **Date of Birth** (`billing_info_date_of_birth`, `date`, required: true): Enter your date of birth.
* **Phone Number** (`billing_info_phone_number`, `text`, required: true): Enter your phone number.
* **Medical Group** (`billing_info_medical_group`, `select_multiple`, required: true): Select "Yes" to indicate you are part of a medical group.
* **Note** (`billing_info_medical_group_other_note`, `text`, required: false): Enter any additional notes or comments.
* **Line 2** (`billing_info_address_line_2`, `text`, required: false): Enter any additional address line 2 information.
* **Address** (`billing_info_address_street`, `text`, required: true): Enter your billing address.
* **City** (`billing_info_city`, `text`, required: true): Enter the city of your billing address.
* **State** (`billing_info_state`, `text`, required: true): Enter the state of your billing address.
* **Zip Code** (`billing_info_zip_code`, `text`, required: true): Enter the zip code of your billing address.
* **Country** (`billing_info_country`, `text`, required: true): Enter the country of your billing address.
* **Email** (`billing_info_email`, `email`, required: true): Enter your email address.
* **Medical Group (Other)** (`billing_info_medical_group_other`, `text`, required: false): Enter any other medical group information.
* **Patient Signature** (`patient_signature`, `text`, required: false): Enter your signature.
* **Provider Signature** (`provider_signature`, `text`, required: false): Enter your provider's signature.
* **Submit** (`submit`, `select_one`, required: true): Select the "Submit" option to confirm your submission.
* **Cancel** (`cancel`, `select_one`, required: true): Select the "Cancel" option to cancel your submission.
* **Back** (`back`, `select_one`, required: true): Select the "Back" option to return to the previous page.
* **Save** (`save`, `select_one`, required: true): Select the "Save" option to save your progress.
* **Reset** (`reset`, `select_one`, required: true): Select the "Reset" option to reset the form.

## Tips

* Review your information carefully before submitting the form.
* Ensure all required fields are completed accurately and truthfully.
* If you are unsure about any section, ask your provider for clarification.
* Take a moment to review and verify your submission before confirming.
