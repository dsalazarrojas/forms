# Schema Creation Form - Help Guide
## Purpose
The purpose of this form is to collect data and metadata related to the creation of a new schema for the database. It gathers relevant information about the database name, table name, column name, and other essential details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: Database Name, Table Name, Column Name, and Schema Version.
2. Select the correct Column Type from the options provided.
3. Provide a Description of the database and its changes.
4. Enter the Submitter's information, including their Email, Phone, and Team.
5. Optionally, add a Note if needed.

## Field-by-Field Explanation
* **Database Name** (`db_name`, `text`, required): Enter the name of the database.
* **Table Name** (`db_table_name`, `text`, required): Enter the name of the table within the database.
* **Column Name** (`db_column_name`, `text`, required): Enter the name of the column within the table.
* **Column Type** (`db_column_type`, `select_one`, required): Select the type of the column from the options provided.
* **Column Size** (`db_column_size`, `number`, optional): Enter the size of the column.
* **Description** (`db_description`, `text`, optional): Provide a brief description of the database.
* **Schema Version** (`db_schema_version`, `text`, optional): Enter the version of the schema.
* **Schema Change Description** (`db_schema_change_description`, `text`, optional): Enter a description of the changes made.
* **Submitter** (`schema_creation_form_submitter`, `text`, optional): Enter your name.
* **Team** (`team`, `select_multiple`, optional): Select the team that created the database.
* **Date** (`date`, `date`, optional): Enter the date the schema was created.
* **Time** (`time`, `time`, optional): Enter the time the schema was created.
* **Email** (`email`, `email`, optional): Enter your email.
* **Phone** (`phone`, `text`, optional): Enter your phone number.
* **Note** (`note`, `note`, optional): Add any additional notes about the schema.
* **Submitter Email** (`schema_creation_form_submitter_email`, `email`, optional): Enter your email.
* **Submitter Phone** (`schema_creation_form_submitter_phone`, `text`, optional): Enter your phone number.
* **Submitter Time** (`schema_creation_form_submitter_time`, `time`, optional): Enter the time.
* **Submitter Team** (`schema_creation_form_submitter_team`, `select_multiple`, optional): Select the team that created the schema.
* **Schema Creation Form Data Schema Version** (`schema_creation_form_data_schema_version`, `text`, optional): Enter the schema version.
* **Schema Creation Form Data Database Change Description** (`schema_creation_form_data_database_change_description`, `text`, optional): Enter a description of the changes made.
* **Schema Creation Form Data Date** (`schema_creation_form_data_date`, `date`, optional): Enter the date the schema was created.
* **Schema Creation Form Data Time** (`schema_creation_form_data_time`, `time`, optional): Enter the time the schema was created.
* **Schema Creation Form Data Email** (`schema_creation_form_data_email`, `email`, optional): Enter your email.
* **Schema Creation Form Data Phone** (`schema_creation_form_data_phone`, `text`, optional): Enter your phone number.

Note: Please be sure to fill in all required fields and provide accurate information for the other fields as needed.
