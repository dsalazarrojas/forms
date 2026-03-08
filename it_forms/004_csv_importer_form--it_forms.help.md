<thinking>

This form is used for importing CSV data into our systems. Before proceeding, ensure that you have a valid CSV file and that you understand the import process. 

To avoid errors, please review each field carefully and ensure that it accurately reflects your needs. If you're unsure, please reach out to the IT team for guidance. 

The form will guide you through the process of providing necessary information about the CSV import, such as the type of data being imported, the target system, and the estimated number of records. You will also need to provide details about the CSV file, including its description, delimiter type, and encoding format. 

Additionally, you will be asked to indicate whether the data contains sensitive information and how duplicates should be handled. The form will also ask for any special requirements or additional notes that the IT team needs to know.

Please complete this form accurately and thoroughly to ensure that the import process is successful and meets your needs.

</thinking>

# CSV Importer Form - Help Guide
## Purpose
The CSV Importer Form is used to provide necessary information for importing CSV data into our systems.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form carefully and ensure that you have a valid CSV file ready for import.
2. Fill in the required fields accurately and thoroughly.
3. Provide clear and concise answers to each question.
4. If you're unsure about any field, please contact the IT team for guidance.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, text, required): Enter your full name so we can contact you regarding the import process.
* **Email Address** (`requester_email`, email, required): Enter your work email address for correspondence and updates.
* **Department** (`department`, select_one, required): Choose the department or team that this import belongs to.
* **Import Type** (`import_type`, select_one, required): Select the type of data you are importing, such as Customer Data or Product Catalog.
* **Target System** (`target_system`, select_one, required): Choose the system that will receive this data.
* **CSV File Description** (`csv_file_description`, text, required): Briefly describe the contents of your CSV file.
* **Estimated Number of Records** (`estimated_records`, select_one, required): Approximate the number of records in your CSV file.
* **Data Sensitivity Level** (`data_sensitivity`, select_one, required): Indicate whether the data contains sensitive information, such as PII.
* **CSV Has Headers** (`has_headers`, select_one, required): Indicate whether your CSV file includes column headers.
* **Delimiter Type** (`delimiter_type`, select_one, required): Select the character that separates columns in your CSV file, such as a comma.
* **Encoding Format** (`encoding_format`, select_one, required): Select the file encoding format, such as UTF-8.
* **Validation Required** (`validation_required`, select_one, required): Indicate whether data validation is required before import, such as strict validation.
* **Duplicate Handling** (`duplicate_handling`, select_one, required): Choose how duplicates should be handled, such as skipping them or overwriting existing records.
* **Import Deadline** (`import_deadline`, date, required): Set the deadline for the import, if applicable.
* **Special Requirements** (`special_requirements`, text, optional): Enter any specific requirements or formatting needs for the import.
* **Additional Notes** (`additional_notes`, text, optional): Provide any additional information for the IT team.

Note: The fields marked as "optional" can be left blank if not applicable. 

Tips: If you're unsure about any field, please contact the IT team for guidance.
