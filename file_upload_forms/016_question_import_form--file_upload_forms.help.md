> <thinking>
This form is designed to import questions from a file, typically in a CSV or Excel format, into our question bank. The file should contain the questions, categories, and other relevant metadata. The form helps us to validate and process the uploaded file efficiently.
The form is meant to be used by content team members and educators to import questions into the system. To avoid duplication, please ensure that the questions you are importing are not already present in the system.
</thinking>

# Question Import Form - Help Guide
## Purpose
This form is designed to import questions from a file into our question bank.

## How To Complete This Form
To complete this form, follow these steps:

1. Click on the "Upload a File" button to select the file containing the questions.
2. Select the category for the questions being uploaded.
3. Enter a title for the questions.
4. Provide a description for the questions.
5. Choose the questions from the list of available options.
6. If necessary, select a question bank file for additional context.
7. Enter the name of the educator or content team member who uploaded the questions.
8. Choose the type of file being uploaded.
9. Enter the file size in bytes.

## Field-by-Field Explanation

* **Upload a File** (`file_upload`, `text`, required/optional): Upload a file containing the questions to be imported. This field is required.
* **Category** (`category`, `text`, required/optional): Select the category for the questions being uploaded. This field is optional.
* **Title** (`title`, `text`, required/optional): Enter a title for the questions being imported.
* **Description** (`description`, `text`, required/optional): Provide a brief description for the questions.
* **Questions** (`questions`, `select_multiple`, required/optional): Choose the questions to be imported from the available options.
* **Question Bank File** (`question_bank_file`, `text`, required/optional): If necessary, select a question bank file for additional context.
* **Educator Name** (`educator_name`, `text`, required/optional): Enter the name of the educator or content team member who uploaded the questions.
* **Trainer Name** (`trainer_name`, `text`, required/optional): Enter the name of the trainer who uploaded the questions.
* **Content Team** (`content_team`, `text`, required/optional): Enter the name of the content team who uploaded the questions.
* **Uploaded By** (`uploaded_by`, `text`, required/optional): Enter the name of the user who uploaded the questions.
* **Upload Date** (`upload_date`, `date`, required/optional): Enter the date the questions were uploaded.
* **File Type** (`file_type`, `select_one`, required/optional): Choose the type of file being uploaded.
* **File Size** (`file_size`, `number`, required/optional): Enter the file size in bytes.

## Tips
* Ensure the uploaded file is in the correct format (CSV or Excel) and is not already present in the system.
* Use the correct category for the questions being uploaded.
* Make sure the title and description are clear and concise.
* Only select the questions you want to import, as selecting too many questions can cause duplicate entries.
* Use the correct file type and size for accurate processing.
