<thinking>
This is a form designed to handle special requests. The form's purpose is to gather information from users about their special requests, such as categorization, description, and any other relevant details. To prevent duplicate forms from being created, it is recommended to fill out this form only once per request. If a user has already filled out this form for the same request, they should not fill it out again.
</thinking>

# special_request_form - Help Guide
## Purpose
The special_request_form is a tool for users to provide information about their special requests. This form helps to categorize and describe the requests accurately, ensuring that the request is handled correctly.

## How To Complete This Form
To complete this form, follow these steps:
1. Choose the category that best describes your request.
2. Provide a brief description of your request in the text field.
3. Select whether any tools are assigned to your request.
4. Choose whether any tool 2 is assigned to your request.
5. Select whether any other special request form is assigned to your request.
6. Select the user responsible for handling your request.
7. Provide a file ID for your output.

## Field-by-Field Explanation
* **Category** (`category`, `select_one`, required: false): Select the category that best describes your request.
* **Description** (`description`, `note`, required: false): Provide a brief description of your request in this text field.
* **Special Request Form Description** (`special_request_form_description`, `text`, required: false): This field is for additional description of the special request form.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Select whether any tools are assigned to your request.
* **Assigned Tool 2** (`assigned_tool_2`, `select_one`, required: false): Select whether tool 2 is assigned to your request.
* **Special Request Form 2** (`special_request_form_2`, `select_multiple`, required: false): This field allows you to select multiple special request forms that are assigned to your request.
* **Assigned User** (`assigned_user`, `select_one`, required: false): Select the user responsible for handling your request.
* **Output File** (`output_file`, `number`, required: false): Provide a file ID for your output.
* **Form IDs** (`form_ids`, `text`, required: false): Enter any form IDs related to your request.
* **Special Request Form 3** (`special_request_form_3`, `select_one`, required: false): Select whether any special request form 3 is assigned to your request.
