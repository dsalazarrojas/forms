# pipeline_inspection_form - Help Guide
## Purpose
The pipeline inspection form is used to collect information about the inspection status of a pipeline.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the inspection status of the pipeline from the options provided in the "pipeline_inspection" field.
2. Provide a brief description of the pipeline details in the "pipeline_details" field.
3. Enter the date and time of the inspection in the "inspection_date_time" field.
4. Enter the time of the inspection in the "inspection_time" field.
5. Enter the condition of the pipeline line in the "condition_of_line" field. Please note that this field is a note field, so you can enter any additional information about the pipeline's condition as needed.
6. Enter the location of the pipeline in the "pipeline_location" field.
7. Enter any additional notes about the pipeline in the "notes" field.
8. Indicate whether or not you are the assigned inspector for the pipeline by selecting "Yes" or "No" in the "assigned_inspector" field.
9. Enter your name in the "assigned_inspector_name" field if you are the assigned inspector.

## Field-by-Field Explanation

* **pipeline_inspection** (`pipeline_inspection_form`, `select_multiple`, required: false): Select "Yes" or "No" to indicate the status of the pipeline inspection.
* **pipeline_details** (`pipeline_details`, `text`, required: false): Enter a brief description of the pipeline's details, such as its location, diameter, and materials used.
* **inspection_date_time** (`inspection_date_time`, `date`, required: false): Enter the date and time of the inspection in the format `YYYY-MM-DD HH:MM:SS`.
* **inspection_time** (`inspection_time`, `time`, required: false): Enter the time of the inspection in the format `HH:MM:SS`.
* **condition_of_line** (`condition_of_line`, `note`, required: false): Enter the condition of the pipeline line, including any notes or observations about its condition.
* **pipeline_location** (`pipeline_location`, `text`, required: false): Enter the location of the pipeline, including its city, state, and other relevant details.
* **notes** (`notes`, `note`, required: false): Enter any additional notes or observations about the pipeline.
* **assigned_inspector** (`assigned_inspector`, `select_one`, required: false): Select "Yes" or "No" to indicate whether you are the assigned inspector for the pipeline.
* **assigned_inspector_name** (`assigned_inspector_name`, `text`, required: false): If you are the assigned inspector, enter your name in this field.
