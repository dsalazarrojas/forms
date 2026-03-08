# degree_verification_form - Help Guide
## Purpose
The degree verification form is used to verify the completion status of student degrees.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the title of the form, which should be a brief description of the degree verification process.
2. Select the category of the degree completion from the options provided, which is either "School Counselor Forms" or "Other".
3. Provide a brief description of the degree completion.
4. Enter the form ID, which is a unique identifier for the form.
5. Enter the output file name, which will be used to save the verification details.

## Field-by-Field Explanation

* **Degree Verification Form (Form Title)** (`form_title`, text, required: false): Enter a brief title of the form that describes the degree verification process.
* **Category** (`category`, select_one, required: false): Select the category of the degree completion from the options provided. This is usually either "School Counselor Forms" or "Other".
* **Description** (`description`, text, required: false): Provide a brief description of the degree completion.
* **Form ID** (`form_id`, number, required: false): Enter the form ID, which is a unique identifier for the form.
* **Output File** (`output_file`, text, required: false): Enter the name of the output file that will be used to save the verification details.
* **Assigned Tool** (`assigned_tool`, select_one, required: false): Select the tool that is assigned to the degree verification form. This is usually "chatjimmy" or "Other".
