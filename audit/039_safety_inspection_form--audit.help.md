# safety_inspection_form - Help Guide
## Purpose
This form is designed to collect information for a safety inspection in an auditing context.

## How To Complete This Form
To complete this form, follow these steps:
1. Choose the category of the inspection (e.g., Audit).
2. Enter a brief description of the safety inspection.
3. Select the assigned tool used for the inspection.
4. Choose the output type (e.g., PDF, Excel, CSV).
5. Select the output format (e.g., default, compact, wide).
6. Enter the output name and path.
7. Add a description of the output file.
8. Enter the name of the assigned user and the assigned date and time.
9. Enter the form ID and version.
10. Enter the category, description, and assigned tool for the form.

## Field-by-Field Explanation

* **Category** (`category`, select_one, required: false): Select the category of the inspection (e.g., Audit).
* **Description** (`description`, text, required: false): Enter a brief description of the safety inspection.
* **Assigned Tool** (`assigned_tool`, select_one, required: false): Choose the tool assigned for the inspection (e.g., chatjimmy).
* **Form Version** (`form_version`, select_one, required: false): Select the version of the form (e.g., 1, 2, 3).
* **Output Type** (`output_type`, select_one, required: false): Choose the output type (e.g., PDF, Excel, CSV).
* **Output Format** (`output_format`, select_one, required: false): Select the output format (e.g., default, compact, wide).
* **Output Name** (`output_name`, text, required: false): Enter the name of the output file.
* **Output Path** (`output_path`, text, required: false): Enter the path where the output file will be saved.
* **Output Description** (`output_description`, text, required: false): Add a description of the output file.
* **Assigned User** (`assigned_user`, text, required: false): Enter the name of the assigned user.
* **Assigned Date** (`assigned_date`, date, required: false): Enter the assigned date of the inspection.
* **Assigned Time** (`assigned_time`, time, required: false): Enter the assigned time of the inspection.
* **Form ID** (`safety_inspection_form_id`, text, required: false): Enter the ID of the form.
* **Form Version** (`safety_inspection_form_version`, text, required: false): Enter the version of the form.
* **Form Category** (`safety_inspection_form_category`, text, required: false): Enter the category of the form.
* **Form Description** (`safety_inspection_form_description`, text, required: false): Enter a description of the form.
* **Form Assigned Tool** (`safety_inspection_form_assigned_tool`, text, required: false): Enter the tool assigned to the form.
* **Form Output Type** (`safety_inspection_form_output_type`, text, required: false): Enter the output type of the form.
* **Form Output Format** (`safety_inspection_form_output_format`, text, required: false): Enter the output format of the form.
* **Form Output Name** (`safety_inspection_form_output_name`, text, required: false): Enter the name of the output file of the form.
* **Form Output Path** (`safety_inspection_form_output_path`, text, required: false): Enter the path where the output file of the form will be saved.
* **Form Output Description** (`safety_inspection_form_output_description`, text, required: false): Enter a description of the output file of the form.
* **Form Output File** (`safety_inspection_form_output_file`, text, required: false): Enter the name of the output file of the form.
