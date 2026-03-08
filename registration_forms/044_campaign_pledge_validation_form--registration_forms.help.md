# Campaign Pledge Validation Form - Help Guide
## Purpose
The Campaign Pledge Validation Form is used to collect and verify information from supporters who have made a pledge to a campaign. This form helps to ensure that all pledges are properly recorded and validated in the system.

## How To Complete This Form
1. Fill in the **Supporter Name** field with the name of the supporter who made the pledge.
2. Enter the **Contact Email** of the supporter in the **Contact Email** field.
3. Type in the **Pledge Amount** made by the supporter.
4. Provide the **Pledge Date** when the pledge was made.
5. Select the **Verification Method** used to verify the pledge (e.g. Email Confirmation, Bank Statement, or Verbal Confirmation).
6. Check the **Matched by Employer** field if the pledge was matched by the supporter's employer.
7. Enter the **Expected Fulfillment Date** when the pledge will be paid.
8. Add any additional **Notes** that may be relevant to the validation process.
9. Enter the **Validator Name**, the person validating the pledge.
10. Finally, select the **Validation Status** of the pledge (Validated, Pending, or Rejected).

## Field-by-Field Explanation
- **Supporter Name** (`supporter_name`, text): The name of the supporter who made the pledge.
- **Contact Email** (`contact_email`, email): The email address of the supporter to confirm pledge details.
- **Pledge Amount** (`pledge_amount`, number): The amount pledged by the supporter.
- **Pledge Date** (`pledge_date`, date): The date when the pledge was made.
- **Verification Method** (`verification_method`, select_one): The method used to verify the pledge (e.g. Email Confirmation, Bank Statement, or Verbal Confirmation).
  - Select one of the following options: Email Confirmation, Bank Statement, or Verbal Confirmation.
- **Matched by Employer** (`matched_by_employer`, select_one): Check if the pledge was matched by the supporter's employer.
  - Select one of the following options: True or False.
- **Expected Fulfillment Date** (`fulfillment_date`, date): The date when the pledge will be paid.
- **Notes** (`notes`, text): Any additional details relevant to the validation process.
- **Validator Name** (`validator_name`, text): The person validating the pledge.
- **Validation Status** (`validation_status`, select_one): The result of the validation process (Validated, Pending, or Rejected).
  - Select one of the following options: Validated, Pending, or Rejected.
