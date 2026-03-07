<thinking>...</thinking>

The purpose of this form is to create a new test run, which is a record of a test execution or a sequence of test actions. This form is part of a larger system for tracking and managing test runs.

Before starting, ensure you have a valid Form ID for the test run. If you're not sure what that is, please consult with your team or system administrators.

Also, be aware that this form has duplicate fields, but they serve different purposes. For example, "Output File" and "Output File Path" are related but not exactly the same. Please fill in the correct information accordingly.

</thinking>

# Test Run - Help Guide
## Purpose
The Test Run form is used to create a new test run, allowing you to document and track test executions or sequences of test actions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the following information:
	* Category: Select a category for the test run (e.g., tracking-forms).
	* Description: Enter a brief description for the test run.
	* Form ID: Input a valid Form ID for the test run.
	* Assigned Tool: Choose a tool to which the test run is assigned (e.g., chatjimmy).
2. If needed, provide more details:
	* Output File: If applicable, provide the output file for the test run.
	* Output File Path: Enter the file path where the output file will be stored.
3. Specify the output format:
	* Output Format: Choose the format of the output file (e.g., csv, json, excel).

## Field-by-Field Explanation

* **Category** (`category`, `select_one`, required: false): Choose a category for the test run. This helps with organization and searching.
* **Description** (`description`, `text`, required: false): Enter a brief description of the test run. This provides context and makes it easier to identify the test run.
* **Form ID** (`form_id`, `text`, required: false): Input a valid Form ID for the test run. This is a unique identifier for the test run.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Choose a tool to which the test run is assigned. This helps track which tool was used for the test run.
* **Output File** (`output_file`, `text`, required: false): If applicable, provide the output file for the test run.
* **Output File Path** (`output_file_path`, `text`, required: false): Enter the file path where the output file will be stored.
* **Output Format** (`output_format`, `select_one`, required: false): Choose the format of the output file (e.g., csv, json, excel).
