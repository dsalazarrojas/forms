# file_submission_form - Help Guide
## Purpose
The file_submission_form is a simple file upload form designed to collect files from end users. It consists of four fields: selecting the file type, uploading a file, specifying the file size, and naming the file.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the type of file you are uploading using the `file_type` field. You can choose between "documents" and "images".
2. If you are uploading a file, enter its details in the `uploaded_file` field.
3. If you have a large file, please enter its size in the `file_size` field.
4. Optionally, you can also enter a human-readable name for the file in the `file_name` field.

## Field-by-Field Explanation
* **file_type** (`documents`, `images`, required): Select the type of file you are uploading. This field is required.
* **uploaded_file** (`text`, optional): Enter a brief description of the file. This field is optional.
* **file_size** (`number`, optional): Enter the size of the file in MB. This field is optional.
* **file_name** (`text`, optional): Enter a human-readable name for the file. This field is optional.

## Tips
* Please ensure that the file you upload is of the selected type.
* The file size limit is checked after uploading, so please be aware that a large file may not be accepted.
* You can leave the `file_size` and `file_name` fields blank if you don't have that information.
* Make sure to review your submission carefully before submitting.
