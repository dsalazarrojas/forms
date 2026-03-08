# Shopping By Appointment Form - Help Guide
## Purpose
The Shopping By Appointment Form is designed to help customers provide information about their shopping preferences and sessions. This information will help our staff understand customer habits and improve the overall shopping experience.

## How To Complete This Form
1. Select the category of your shopping session from the drop-down menu.
2. Provide a brief description of your shopping, including any relevant details about the items you are looking for.
3. If applicable, specify any required fields for your shopping session.
4. Choose the date and time of your shopping session.
5. Optionally, select the tool assigned to you for the shopping session.
6. Finally, provide a name for the output file, which will be generated after submitting the form.

## Field-by-Field Explanation
* **Category** (`category`, `select_one`, required: false): Select the category of your shopping session from the provided options.
* **Description** (`description`, `text`, required: false): Provide a brief description of your shopping session, including any relevant details about the items you are looking for.
* **Required Fields** (`required_fields`, `note`, required: false): If applicable, specify any required fields for your shopping session. This field is only required if the category is "Coronavirus Response Forms".
* **Shopping Session** (`shopping_session`, `date`, required: false): Choose the date of your shopping session.
* **Shopping Time** (`shopping_time`, `time`, required: false): Choose the time of your shopping session. Please ensure that this field is filled out in conjunction with the **Shopping Session** field.
* **Shopping Session Start Time** (`shopping_session_start_time`, `date`, required: false): Choose the start time of your shopping session. This field is only required if the category is "Coronavirus Response Forms".
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): If applicable, select the tool assigned to you for the shopping session. This field is only required if the category is "Coronavirus Response Forms".
* **Output File** (`output_file`, `text`, required: false): Provide a name for the output file, which will be generated after submitting the form. Please make sure to provide a unique and meaningful name for the file.
