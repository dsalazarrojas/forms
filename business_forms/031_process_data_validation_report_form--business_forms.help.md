# Process Data Validation Report Form - Help Guide
## Purpose
This form is used to document and report the validation status of business processes. It captures information about the process validation, including whether it was successful or not, and captures details about the activities, findings, actions taken, next steps, validation status, comments, and validation date and time.

## How To Complete This Form

1. Select the validation status of the process: Choose whether the process was Active, Inactive, or another option from the drop-down menu.
2. Indicate whether you were involved in the activities: Select Yes or No from the drop-down menu.
3. Specify the findings: Select Yes or No from the drop-down menu for any findings that were encountered during the validation.
4. Describe the actions taken: Select Yes or No from the drop-down menu for any actions that were taken during the validation.
5. Outline the next steps: Select Yes or No from the drop-down menu for any next steps that are planned.
6. Enter the validation date and time: Use the date picker to enter the date and time when the validation took place.
7. Enter the submitter's information: Enter your name, email address, and phone number to submit the report.
8. Enter the reviewer's information (optional): Enter the reviewer's name and email address, if applicable.

## Field-by-Field Explanation

* **Process Data Validation** (`process_data_validation_form_section`, `note`, required: false): This is a section header that serves as a title for the form.
* **Process Data Validation** (`activities`, `select_one`, required: true): This field is used to determine whether you were involved in the activities during the validation process. Select Yes or No from the drop-down menu.
* **Findings** (`findings`, `select_multiple`, required: true): This field allows you to specify any findings that were encountered during the validation process. Select Yes or No from the drop-down menu for each finding.
* **Actions Taken** (`actions_taken`, `select_multiple`, required: true): This field is used to describe the actions taken during the validation process. Select Yes or No from the drop-down menu for each action.
* **Next Steps** (`next_steps`, `select_multiple`, required: true): This field is used to outline the next steps that are planned for improvement. Select Yes or No from the drop-down menu for each next step.
* **Validation Status** (`validation_status`, `select_one`, required: true): This field is used to select the validation status of the process. Choose from Active, Inactive, or another option.
* **Comments** (`comments`, `text`, required: false): This field is used to enter any additional comments or notes about the validation process.
* **Comments Additional Info** (`comments_additional_info`, `text`, required: false): This field is used to enter any additional information about the validation process.
* **Validation Date** (`validation_date`, `date`, required: true): This field is used to enter the date when the validation took place.
* **Validation Time** (`validation_time`, `time`, required: true): This field is used to enter the time when the validation took place.
* **Submitter** (`submitter`, `text`, required: true): This field is used to enter your name.
* **Submitter Email** (`submitter_email`, `email`, required: true): This field is used to enter your email address.
* **Submitter Phone** (`submitter_phone`, `text`, required: true): This field is used to enter your phone number.
* **Reviewer** (`reviewer`, `text`, required: false): This field is used to enter the reviewer's name.
* **Reviewer Email** (`reviewer_email`, `email`, required: false): This field is used to enter the reviewer's email address.
* **Reviewer Phone** (`reviewer_phone`, `text`, required: false): This field is used to enter the reviewer's phone number.
