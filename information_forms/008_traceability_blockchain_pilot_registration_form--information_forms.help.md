# traceability_blockchain_pilot_registration_form - Help Guide
## Purpose
The Traceability Blockchain Pilot Registration form is designed for users to register their participation in a pilot project.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the pilot program you wish to participate in.
2. Enter your organization's name in the 'organization_name' field.
3. Provide a brief description of your organization in the 'description' field.
4. If required, enter your website, phone number, and email address.
5. Select the category you belong to.
6. Provide the output file for your submission.
7. Enter a unique form ID.
8. Add any additional descriptions as needed.

## Field-by-Field Explanation
* **pilot_program** (`pilot_program`, select_one, required: false): Select the pilot program you wish to participate in.
* **organization_name** (`organization_name`, text, required: false): Enter your organization's name.
* **description** (`description`, text, required: true): Provide a brief description of your organization.
* **website** (`website`, text, required: false): Enter your organization's website, if applicable.
* **phone** (`phone`, text, required: false): Enter your organization's phone number, if applicable.
* **email** (`email`, email, required: false): Enter your organization's email address, if applicable.
* **category** (`category`, select_multiple, required: false): Select the category you belong to.
* **output_file** (`output_file`, text, required: true): Provide the output file for your submission.
* **form_id** (`form_id`, text, required: true): Enter a unique form ID.
* **description_2**, **description_3**, ..., **description_15** (`description_2`, text, required: false): Add any additional descriptions as needed.
* **assigned_tool** (`assigned_tool`, select_one, required: false): Select the assigned tool, if applicable.

## Tips
* Be sure to provide accurate and clear information for each field.
* If you are unsure about any field, please refer to the pilot program documentation or contact the program administrators for clarification.
