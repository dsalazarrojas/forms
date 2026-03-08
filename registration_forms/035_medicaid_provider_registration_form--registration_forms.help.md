# medicaid_provider_registration_form - Help Guide
## Purpose
The Medicaid Provider Registration Form is designed to collect necessary information from Medicaid providers for the purpose of registering them in the program. This form is a one-time registration process and requires accurate and detailed information to ensure providers are successfully added to the Medicaid directory.

## How To Complete This Form

1.  Enter your name as it appears on your license and other official documents.
2.  Provide your address where you can be reached for business purposes.
3.  Enter your phone number and email where you can be contacted.
4.  Enter your fax number (if applicable).
5.  Select your Medicaid provider license type from the options provided.
6.  Enter your Medicaid provider license number (if applicable).
7.  Enter your enrollment date in the program.
8.  Enter your start date in the program.
9.  Enter your end date in the program (if applicable).
10. Select your provider type from the options provided.
11.  Review and submit the form for review and verification.

## Field-by-Field Explanation

*   **Provider Name** (`provider_name`, `text`, required: false): Enter the name as it appears on your official documents.
*   **Address** (`address`, `text`, required: false): Enter your business address.
*   **Zip** (`zip`, `number`, required: false): Enter your zip code.
*   **Phone** (`phone`, `text`, required: false): Enter your business phone number.
*   **Email** (`email`, `email`, required: false): Enter your official email address.
*   **Fax** (`fax`, `text`, required: false): Enter your fax number (if applicable).
*   **License Type** (`license_type`, `select_one`, required: true): Select your Medicaid provider license type from the options provided.
*   **License Number** (`license_num`, `number`, required: false): Enter your Medicaid provider license number (if applicable).
*   **Enrollment Date** (`enrollment_date`, `date`, required: false): Enter your enrollment date in the Medicaid program.
*   **Start Date** (`start_date`, `date`, required: false): Enter your start date in the program.
*   **End Date** (`end_date`, `date`, required: false): Enter your end date in the program (if applicable).
*   **Provider Type** (`provider_type`, `select_multiple`, required: true): Select your provider type from the options provided.
*   **Submit** (`submit`, `text`, required: false): Review and submit your registration information for review and verification.
