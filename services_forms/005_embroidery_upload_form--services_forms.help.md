# embroidery_upload_form - Help Guide
## Purpose
This form is designed to help users upload embroidery files for review and processing. It is a simple, one-page form that allows users to select a file and provide some basic contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select a file to upload using the "File Uploader" field.
2. Enter the customer's name in the "Customer" field.
3. Enter the contact person's name in the "Contact Person" field.
4. Enter the email address of the person who will receive the uploaded file in the "Email" field.
5. Enter the phone number of the person who will receive the uploaded file in the "Phone" field.
6. Click the "Upload" button to submit the form and upload the selected file.

## Field-by-Field Explanation
* **File Uploader** (`file_uploader`, `text`, required): Select a file to upload using this field. This field is required to select a file for upload.
* **Customer** (`customer`, `text`, optional): Enter the customer's name for reference purposes.
* **Contact Person** (`contact_person`, `text`, optional): Enter the contact person's name who will receive the uploaded file.
* **Email** (`email`, `email`, optional): Enter the email address of the contact person who will receive the uploaded file.
* **Phone** (`phone`, `text`, optional): Enter the phone number of the contact person who will receive the uploaded file.
* **Upload** (`upload_button`, `text`, required): Click this button to submit the form and upload the selected file.
* **Upload Confirmation** (`upload_confirmation`, `note`, optional): This field is not intended to be filled out by users. It will display a confirmation message after a successful upload.
