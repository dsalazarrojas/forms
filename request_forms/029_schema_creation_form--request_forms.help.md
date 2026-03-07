<thinking>
The purpose of this form is to collect information about a schema request from the user, including the type of request (e.g., schema, database, or data model), team size, data sources, database type, database version, data model, database name, and a brief description. This form is designed to guide users through the process of creating a new schema request, ensuring that all necessary information is collected for the request to be properly processed and managed.

Before proceeding, please note that this form is intended for new schema requests. If you are updating an existing schema request, please refer to our <a href="existing_request_form.html" target="_blank">existing request form</a> for the specific guidance.

To avoid duplication of effort, we will check if a similar request has been made recently. If a similar request already exists, we will alert you and guide you to that existing request instead.
</thinking>

# schema_creation_form - Help Guide
## Purpose
The schema creation form is used to create new schema requests. It helps us understand what you need and provides a platform for our team to work on your schema request.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of request you are making: schema, database, or data model.
2.  Choose the size of your team that will be working on the project.
3.  Enter any available data sources you have for your project.
4.  Select the type of database you require for your project.
5.  Choose the version of the database you are using.
6.  Briefly describe your project's purpose and requirements.
7.  Optionally, provide more details about your data model.
8.  Enter a name for your database, if applicable.
9.  Click the "Submit" or "Save Draft" button to save your request.

## Field-by-Field Explanation
### 1. **form_submission** (`form_submission`, `note`, false)
    This field is for a brief explanation of the request, if needed.

### 2. **request_type** (`request_type`, `select_one`, false)
    This field determines the type of request: schema, database, or data model.

### 3. **team_size** (`team_size`, `select_multiple`, false)
    This field is used to select the size of your team that will be working on the project.

### 4. **data_sources** (`data_sources`, `text`, false)
    Enter any available data sources you have for your project.

### 5. **database_type** (`database_type`, `select_one`, false)
    This field is used to select the type of database you require for your project.

### 6. **database_version** (`database_version`, `select_multiple`, false)
    Choose the version of the database you are using.

### 7. **data_model** (`data_model`, `text`, false)
    Provide more details about your data model, if necessary.

### 8. **database_name** (`database_name`, `text`, false)
    Enter a name for your database, if applicable.

### 9. **description** (`description`, `text`, false)
    Briefly describe your project's purpose and requirements.

### 10. **submit** (`submit`, `select_one`, false)
    Click "Submit" to save your request and "Save Draft" to save a draft of your request.

### 11. **cancel** (`cancel`, `select_one`, false)
    Click "Cancel" or "Exit" to exit the form and return to the previous page.
</pre>
