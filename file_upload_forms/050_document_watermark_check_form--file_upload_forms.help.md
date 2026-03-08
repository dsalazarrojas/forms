<thinking>

The Document Watermark Check Form is a form used to verify the integrity and authenticity of a document. It's essential to ensure that the document's details match the uploaded file. 

**Internal note: This form is used to check for duplication before proceeding with further actions.**

</thinking>

# Document Watermark Check Form - Help Guide
## Purpose
The Document Watermark Check Form is used to verify the integrity and authenticity of a document by checking its details against the uploaded file.

## How To Complete This Form
1. Select the file you wish to upload using the "Upload File" dropdown.
2. Enter the correct "Document ID" and "Document Status" for the uploaded file.
3. Enter the correct "File Name" and "File Size" for the uploaded file.
4. Choose the "File Type" and "File Location" for the file.
5. Enter the correct "File Date" and "File Time" for the file.
6. Enter any additional "Review Comments" and "Document Reviewer Comments" about the file.
7. Select the "Assigned to" and "Document Reviewer Status" for the file.
8. Enter the "Document Watermark" and "Document Status" for the file.

## Field-by-Field Explanation
* **File to Upload** (`file_to_upload`, text, optional): Enter the file you wish to upload.
* **Upload File** (`upload_file`, select_one, required): Choose the file you wish to upload from the dropdown options.
* **Document ID** (`document_id`, number, required): Enter a unique identifier for the document.
* **File Name** (`file_name`, text, optional): Enter the name of the file.
* **File Size** (`file_size`, number, required): Enter the size of the file in bytes.
* **File Type** (`file_type`, select_multiple, required): Choose the type of file from the dropdown options.
* **File Location** (`file_location`, text, required): Enter the location where the file is located.
* **File Date** (`file_date`, date, required): Enter the date the file was created or modified.
* **File Time** (`file_time`, time, required): Enter the time the file was created or modified.
* **File Comments** (`file_comments`, text, optional): Enter any additional comments about the file.
* **Email** (`email`, email, optional): Enter an email address associated with the file.
* **Phone** (`phone`, text, optional): Enter a phone number associated with the file.
* **Notes** (`notes`, note, optional): Enter any additional notes about the file.
* **Assigned to** (`assigned_to`, select_one, required): Choose who the document is assigned to from the dropdown options.
* **Review Status** (`review_status`, select_one, required): Choose the status of the review from the dropdown options.
* **Review Comments** (`review_comments`, text, required): Enter comments about the review.
* **Document Watermark** (`document_watermark`, text, required): Enter a watermark for the document.
* **Document Status** (`document_status`, select_multiple, required): Choose the status of the document from the dropdown options.
* **Document Version** (`document_version`, text, required): Enter the version of the document.
* **Document Version Date** (`document_version_date`, date, optional): Enter the date the document version was created or modified.
* **Document Version Time** (`document_version_time`, time, optional): Enter the time the document version was created or modified.
* **Document Version Comments** (`document_version_comments`, text, optional): Enter comments about the document version.
* **Document Reviewer Comments** (`document_reviewer_comments`, text, required): Enter comments from the document reviewer.
* **Document Reviewer Status** (`document_reviewer_status`, select_one, required): Choose the status of the document reviewer from the dropdown options.
