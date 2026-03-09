# testing_log_and_id_generator - Help Guide
## Purpose
This form is used for tracking testing runs and generating unique IDs for tests.

## How To Complete This Form
To complete this form, follow these steps:

1. Select "Yes" or "No" for the "Unique ID Generator" field to decide whether or not to generate a unique ID for the test run.
2. Enter the start and end dates for the test run in the "Start Date" and "End Date" fields, respectively.
3. Enter the start and end times for the test run in the "Start Time" and "End Time" fields, respectively.
4. Enter the test results in the "Test Results" field.
5. Attach any relevant results or files to the test run by selecting "Yes" or "No" for the "Result Attachment" field.
6. Click submit to complete and save the form.

## Field-by-Field Explanation
* **Unique ID Generator** (`id_generator`, `select_one`, required): This field allows you to choose whether or not to generate a unique ID for the test run. Select "Yes" to generate a unique ID, or "No" to skip it.
* **Test Run Log** (`log_form`, `note`, required): This is a text area where you can enter any additional information about the test run.
* **Result Attachment** (`result_attachment`, `select_multiple`, optional): This field allows you to attach relevant results or files to the test run. Select "Yes" to attach a file, or "No" to skip it.
* **Test Results** (`result`, `text`, required): Enter the results of the test run in this text field.
* **Start Date** (`start_date`, `date`, required): Enter the start date of the test run in this date field.
* **End Date** (`end_date`, `date`, optional): Enter the end date of the test run in this date field.
* **Start Time** (`start_time`, `time`, optional): Enter the start time of the test run in this time field.
* **End Time** (`end_time`, `time`, optional): Enter the end time of the test run in this time field.
