<thinking>...</thinking>

# Beneficiary Form - Help Guide
## Purpose
This form is used to gather information about a deceased person and their beneficiary, including their personal details, asset information, and legal aspects. The form is required for processing claims and providing benefits to the designated beneficiaries.

## How To Complete This Form
To complete this form, please follow these steps:

1. Provide the deceased person's information, including their name, date of birth, date of death, and social security number.
2. Enter the beneficiary's information, such as their full name, date of birth, phone number, email address, and current address.
3. Indicate the relationship between the deceased person and the beneficiary.
4. Provide details about the assets to be transferred, including the type and estimated value.
5. Confirm that the information provided is accurate and complete.

## Field-by-Field Explanation
- **Name of Deceased Person** (`deceased_name`, text, required): Enter the name of the deceased person as it appears on their government-issued ID or passport.
- **Date of Birth** (`deceased_dob`, date, required): Enter the deceased person's date of birth in the format MM/DD/YYYY.
- **Date of Death** (`deceased_dod`, date, required): Enter the date of death in the format MM/DD/YYYY.
- **Social Security Number** (`social_security_number`, text, required): Enter the deceased person's Social Security Number.
- **Last Known Address** (`last_address`, text, required): Enter the deceased person's last known address.
- **Marital Status at Time of Death** (`marital_status`, select_one, required): Select the marital status of the deceased person at the time of death.
- **Beneficiary Full Name** (`beneficiary_full_name`, text, required): Enter the beneficiary's full name as it appears on their government-issued ID or passport.
- **Beneficiary Date of Birth** (`beneficiary_dob`, date, required): Enter the beneficiary's date of birth in the format MM/DD/YYYY.
- **Relationship to Deceased Person** (`relationship_to_deceased`, select_one, required): Select the relationship between the deceased person and the beneficiary.
- **Phone Number** (`beneficiary_phone`, text, required): Enter the beneficiary's phone number.
- **Email Address** (`beneficiary_email`, email, required): Enter the beneficiary's email address.
- **Current Address** (`beneficiary_address`, text, required): Enter the beneficiary's current address.
- **Social Security Number** (`beneficiary_ssn`, text, required): Enter the beneficiary's Social Security Number.
- **Type of Asset to Receive** (`asset_type`, select_one, required): Select the type of asset to be transferred.
- **Estimated Value of Assets** (`estimated_value`, number, optional): Enter the estimated value of the assets.
- **Description of Assets** (`asset_description`, text, required): Provide a detailed description of the assets to be transferred.
- **Does Deceased Have a Will or Trust** (`has_will`, select_one, required): Select whether the deceased had a will or trust.
- **Name of Executor or Estate Administrator** (`executor_name`, text, optional): Enter the name of the executor or estate administrator.
- **Executor Contact Information** (`executor_contact`, text, optional): Enter the executor's contact information (phone number or email).
- **Do You Have Legal Representation** (`legal_representation`, select_one, optional): Select whether you have legal representation.
- **Attorney Name** (`attorney_name`, text, optional): Enter the name of the attorney.
- **I Declare that all information provided is accurate** (`information_accurate`, select_one, required): Select that all information provided is accurate.
- **Date of Form Submission** (`form_date`, date, required): Enter the date the form was submitted.
