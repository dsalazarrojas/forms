<Thinking>
We need to ensure that the supplementary data uploaded is relevant and not duplicated. The purpose of this form is to collect supplementary information about uploaded files. It's crucial to provide accurate and concise information to avoid confusion. Please review the form carefully before submitting it to ensure that all required fields are completed accurately.
</Thinking>

# Supplementary Data Upload Form - Help Guide
## Purpose
This form is designed to collect supplementary data about uploaded files. It helps us keep track of the files uploaded and their associated information.

## How To Complete This Form
1. Review the form carefully to understand the required and optional fields.
2. Choose the correct answer for "Supporting Documents" (Yes or No).
3. Enter the file name and date of upload in the respective fields.
4. Upload the file by specifying the correct file type and size.
5. Enter the name of the person who uploaded the file and the department it's uploaded for (e.g., HR, Education, etc.).
6. Add any comments or notes about the file (optional).

## Field-by-Field Explanation
* **Supporting Documents** (`supporting_documents`, select_multiple, required=False): This field allows you to indicate if the file is a supporting document or not.
* **File Name** (`file_name`, text, required=False): Enter the name of the file you are uploading.
* **Date of Upload** (`date_of_upload`, date, required=False): Enter the date you uploaded the file.
* **Upload File** (`upload_file`, text, required=False): Upload the file itself.
* **File Type** (`file_type`, select_one, required=False): Choose the type of file you are uploading (e.g., PDF, DOCX, JPG, etc.).
* **File Size** (`file_size`, number, required=False): Enter the size of the file in KB or MB.
* **Uploaded by** (`uploaded_by`, text, required=False): Enter the name of the person who uploaded the file.
* **Uploaded for** (`uploaded_for`, select_one, required=False): Choose the department the file was uploaded for (e.g., HR, Education, Operations, etc.).
* **Comments** (`comments`, note, required=False): Add any notes or comments about the file.

## Tips
- Be sure to upload a relevant file type.
- Avoid uploading duplicate files to prevent confusion.
- Enter accurate file size and upload date for easy tracking.
