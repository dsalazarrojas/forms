<thinking>
This form is intended for users to order insurance add-ons for their policies. The form will be used to gather information about the type of policy, start and end dates, coverage, and additional coverage options. The purpose of this form is not to be a comprehensive policy application or to replace any existing policy documents, but rather to supplement existing policies with specific add-ons. The form should not be used for policies that are already active or past due.
</thinking>

# Insurance Add On Order Form - Help Guide
## Purpose
This form is designed to help agents and clients order insurance add-ons for their policies in a quick and efficient manner.

## How To Complete This Form
1. Select the type of policy you would like to order add-ons for.
2. Enter the start and end dates of the policy period.
3. Choose the coverage and additional coverage options you require.
4. Select the clients associated with the policy.
5. Enter the policy number (if applicable).
6. Confirm the coverage start date.
7. Confirm the coverage end date.

## Field-by-Field Explanation

* **Form Header** (`form_header`, `note`, required: false): This section is an informational header for the form, providing a brief description of the form purpose.
* **Policy Type** (`policy_type`, `select_one`, required: false): Select the type of policy you would like to order add-ons for. This will help us understand which add-ons are available for your policy.
* **Coverage** (`coverage`, `number`, required: false): Enter the coverage amount for the policy add-ons.
* **Policy Start Date** (`policy_start_date`, `date`, required: false): Enter the start date of the policy period.
* **Policy End Date** (`policy_end_date`, `date`, required: false): Enter the end date of the policy period.
* **Agent** (`agent`, `text`, required: false): Enter the name of the agent associated with the policy.
* **Client** (`client`, `select_multiple`, required: false): Select the clients associated with the policy. This will help us understand which clients will be impacted by the add-ons.
* **Policy Number** (`policy_number`, `number`, required: false): If your policy already exists, enter the policy number.
* **Coverage Start Date** (`coverage_start_date`, `date`, required: false): Confirm the start date of the coverage period.
* **Coverage End Date** (`coverage_end_date`, `date`, required: false): Confirm the end date of the coverage period.
* **Additional Coverage** (`additional_coverage`, `select_multiple`, required: false): Choose any additional coverage options you require for the policy.

## Tips
* Make sure to select the correct policy type to ensure you are ordering the correct add-ons.
* Enter accurate start and end dates to avoid any issues with the policy period.
* Select all applicable clients to ensure all relevant parties are included.
* If you have an existing policy number, enter it to avoid duplication.
