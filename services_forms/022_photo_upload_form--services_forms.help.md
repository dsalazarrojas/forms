# Photo Upload Form - Help Guide
## Purpose
The Photo Upload Form is used to upload and manage photos. To ensure that this form is completed correctly and to prevent errors, make sure you have the required permissions and that the form is not duplicated.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the "Photo Upload" page to begin the upload process.
2. Click on the "Select File" field to choose a photo from your computer.
3. If you wish to upload multiple photos, select "Yes" for "Uploaded Photos" and "Yes" for "Uploaded Phones".
4. Provide a description of the photo in the "Description" field.
5. Add any relevant tags to the photo in the "Tags" field.
6. Set the "Date Uploaded" and "Time Uploaded" fields according to the photo's upload details.
7. Add any comments about the photo in the "Comments" field.
8. Click "Submit" to complete the form.

## Field-by-Field Explanation
### Photo Upload
* **Photo Upload** (`photo_upload_form_page_1`, text, required: false): This is the main page of the form where you upload the photo.
### Select File
* **Select File** (`upload_photo`, text, required: false): Select a photo from your computer to upload it.
### Uploaded Photos
* **Uploaded Photos** (`uploaded_photos`, select_multiple, required: false): Select "Yes" if you are uploading multiple photos.
### Uploaded Phones
* **Uploaded Phones** (`uploaded_phones`, select_multiple, required: false): Select "Yes" if you are uploading multiple phones.
### Description
* **Description** (`photo_upload_description`, text, required: false): Briefly describe the photo in this field.
### Tags
* **Tags** (`photo_upload_tags`, select_multiple, required: false): Add relevant tags to the photo in this field.
### Date Uploaded
* **Date Uploaded** (`date_uploaded`, date, required: false): Set the date the photo was uploaded.
### Time Uploaded
* **Time Uploaded** (`time_uploaded`, time, required: false): Set the time the photo was uploaded.
### Comments
* **Comments** (`photo_upload_form_comments`, note, required: false): Add any comments about the photo in this field.
 
Note: The "Required" field in the original YAML file was set to "false" for all fields. However, in the help guide, I assumed that "Photo Upload" and "Select File" are required for the form to be completed correctly. If not, these fields could be removed and the guide adjusted accordingly.
