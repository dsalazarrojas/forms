<thinking>
This guide will help you understand the purpose and requirements of the document verification form. Please review the form's internal purpose and logic to ensure it's relevant to your specific use case. Also, note that some fields are not required, which may cause issues if not filled correctly. Double-check the form's options for consistency and correct usage.
</thinking>

# Document Verification Form - Help Guide
## Purpose
This form is used to verify documents and their associated details. It collects information about the document type, date, number, and status, as well as metadata about the document's upload and verification.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the correct document type from the "document_type" field.
2. Enter the document number in the "document_number" field.
3. Enter the document date in the "document_date" field.
4. Choose the verification status from the "verification_status" field.
5. (Optional) Enter the time when verified by in the "verified_by" field.
6. (Optional) Select the users who uploaded the document from the "uploaded_by" field.
7. Enter the document file in the "document_file" field.
8. Enter your email address in the "email" field.
9. Enter your phone number in the "phone" field.
10. (Optional) Choose the upload status from the "upload_status" field.
11. (Optional) Select the user who uploaded the document from the "upload_user" field.
12. (Optional) Enter the upload date and time in the "upload_date" and "upload_time" fields.
13. (Optional) Enter the verified date and time in the "verified_date" and "verified_time" fields.
14. For duplicate documents, repeat steps 1-13 for each document.

## Field-by-Field Explanation
* **document_type** (`document_type`, select_one, **Required**): Select the type of document you are verifying.
* **document_number** (`document_number`, number, **Required**): Enter the number of the document.
* **document_date** (`document_date`, date, **Required**): Enter the date of the document.
* **verification_status** (`verification_status`, select_one, **Required**): Choose the status of the document's verification.
* **verified_by** (`verified_by`, time, **Optional**): Enter the time when the document was verified by.
* **uploaded_by** (`uploaded_by`, select_multiple, **Optional**): Select the users who uploaded the document.
* **document_file** (`document_file`, text, **Required**): Upload the document file.
* **email** (`email`, email, **Required**): Enter your email address.
* **phone** (`phone`, text, **Required**): Enter your phone number.
* **upload_status** (`upload_status`, select_one, **Optional**): Choose the status of the document's upload.
* **upload_user** (`upload_user`, select_one, **Optional**): Select the user who uploaded the document.
* **upload_date** (`upload_date`, date, **Optional**): Enter the date of the document's upload.
* **upload_time** (`upload_time`, time, **Optional**): Enter the time of the document's upload.
* **verified_date** (`verified_date`, date, **Optional**): Enter the date of the document's verification.
* **verified_time** (`verified_time`, time, **Optional**): Enter the time of the document's verification.
* **document_number1** (`document_number1`, number, **Optional**): Enter the number of the document's duplicate.
* **document_date1** (`document_date1`, date, **Optional**): Enter the date of the document's duplicate.
* **verification_status1** (`verification_status1`, select_one, **Optional**): Choose the status of the document's duplicate.
* **verified_by1** (`verified_by1`, time, **Optional**): Enter the time when the document's duplicate was verified by.
* **uploaded_by1** (`uploaded_by1`, select_multiple, **Optional**): Select the users who uploaded the document's duplicate.
* **document_file1** (`document_file1`, text, **Optional**): Upload the document file for the duplicate.
* **email1** (`email1`, email, **Optional**): Enter the email address for the document's duplicate.
* **phone1** (`phone1`, text, **Optional**): Enter the phone number for the document's duplicate.
* **upload_status1** (`upload_status1`, select_one, **Optional**): Choose the status of the document's upload.
* **upload_user1** (`upload_user1`, select_one, **Optional**): Select the user who uploaded the document's duplicate.
* **upload_date1** (`upload_date1`, date, **Optional**): Enter the date of the document's upload.
* **upload_time1** (`upload_time1`, time, **Optional**): Enter the time of the document's upload.
* **verified_date1** (`verified_date1`, date, **Optional**): Enter the date of the document's verification.
* **verified_time1** (`verified_time1`, time, **Optional**): Enter the time of the document's verification.

Note: This guide is based on the provided YAML form structure and explanations are provided for each field based on its label, type, and options.
