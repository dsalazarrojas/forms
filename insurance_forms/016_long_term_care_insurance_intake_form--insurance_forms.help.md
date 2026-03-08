<thinking>
This form is used to gather information about a client's long-term care insurance needs. Before proceeding, please ensure that the client has been assigned to the correct category and that this form is not a duplicate of any other form already in progress.
</thinking>

# long_term_care_insurance_intake_form - Help Guide
## Purpose
The long_term_care_insurance_intake_form is used to collect information about a client's long-term care insurance needs. This form should only be used for new client intakes and not for existing client updates.
## How To Complete This Form
To complete this form, follow the steps below:

1. Enter the client's basic information in the "basic_info" field.
2. Provide the client's contact and email information in the "client_info" field.
3. Indicate whether the client has coverage for long-term care insurance in the "coverage_1" field.
4. Select all applicable coverages for the client in the "coverage_2" field.
5. Enter the client's contact information in the "contact_info" field.
6. Enter the client's email address in the "email" field.
7. Enter the client's phone number in the "phone" field.
8. Enter the client's date of birth in the "date_of_birth" field.

## Field-by-Field Explanation

* **basic_info** (`text`, required/optional: false): Enter the client's basic information, including their name, address, and any other relevant details.
* **client_info** (`text`, required/optional: false): Provide the client's contact and email information, including their phone number and any other relevant details.
* **coverage_1** (`select_one`, required/optional: false): Indicate whether the client has coverage for long-term care insurance. Select 'Yes' if the client has coverage, and 'No' if they do not.
* **coverage_2** (`select_multiple`, required/optional: false): Select all applicable coverages for the client. Each option is a separate coverage type.
* **contact_info** (`text`, required/optional: false): Enter the client's contact information, including their phone number and any other relevant details.
* **email** (`email`, required/optional: false): Enter the client's email address.
* **phone** (`text`, required/optional: false): Enter the client's phone number.
* **date_of_birth** (`date`, required/optional: false): Enter the client's date of birth in the format MM/DD/YYYY.
