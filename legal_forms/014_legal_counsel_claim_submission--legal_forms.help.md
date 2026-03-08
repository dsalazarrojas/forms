# Legal Counsel Claim Submission - Help Guide
## Purpose
The Legal Counsel Claim Submission form is a formal document used for submission of claims to the legal counsel. It is intended for claimants, defendants, or attorneys to provide necessary information and supporting documents for official purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form to understand the required fields and optional fields.
2. Fill out the form completely and accurately.
3. Ensure you have the necessary supporting documents attached.

## Field-by-Field Explanation

- **First Name** (`first_name`, text, required=false): Enter your first name.
- **Email** (`email`, email, required=false): Enter a valid email address.
- **Phone** (`phone`, text, required=false): Enter your phone number.
- **Address Line 1** (`address_line_1`, text, required=false): Enter your address line 1.
- **Address Line 2** (`address_line_2`, text, required=false): Enter your address line 2.
- **City** (`city`, text, required=false): Enter your city.
- **State** (`state`, select_multiple, required=false): Select your state of residence from the list.
  - Note: This field is a select multiple field, meaning you can select multiple options if necessary.
- **Zip** (`zip`, text, required=false): Enter your zip code.
- **Claim Type** (`claim_type`, select_one, required=true): Select the type of claim you are submitting.
  - Claimant: I am claiming against another party.
  - Defendant: I am being claimed against.
  - Attorney: I am representing a claimant or defendant.
- **Supporting Documents** (`supporting_documents`, note, required=false): Attach any necessary supporting documents for your claim.
- **Date Signed** (`date_signed`, date, required=false): Enter the date the form was signed.
  - Note: This field is typically used by the attorney to track the date the form was signed.
