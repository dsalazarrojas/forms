# software_survey_form - Help Guide
## Purpose

This form is designed to create or manage software surveys for IT projects. 

## How To Complete This Form

- Fill in the title of the survey in the `form_title` field.
- Select the category of the survey from the options in the `category` field.
- Provide a brief description of the survey in the `description` field.
- If necessary, select the tool assigned to the survey from the options in the `assigned_tool` field.
- Optionally, add comments about the survey in the `form_comments` field.
- To track the number of comments, you can use the `form_comments_count` field.

## Field-by-Field Explanation

* **form_title (text, required: false)**: Enter a brief title for the survey.
* **category (select_one, required: false)**: Select the category of the survey from the options.
* **description (text, required: false)**: Add a short description of the survey.
* **assigned_tool (select_one, required: false)**: If necessary, select the tool associated with the survey.
* **Form ID (number, required: false)**: Enter a unique number for the form.
* **created_by (text, required: false)**: Enter the name of the user who created the form.
* **created_at (date, required: false)**: Enter the date the form was created.
* **updated_at (date, required: false)**: Enter the date the form was last updated.
* **form_status (select_one, required: false)**: Select the status of the form from the options.
* **form_comments (text, required: false)**: Add any comments about the form.
* **form_comments_count (number, required: false)**: Enter the number of comments about the form.
* **Output File (text, required: false)**: Enter a file name or path for the output.
* **Output File Path (text, required: false)**: Enter the full path to the output file. 

Note: Some fields are optional and may be filled in as needed.
