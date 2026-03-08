<thinking>
This form is designed to check the document watermark status. The form helps users determine whether a document has a watermark and where it is located. The form asks users to select the document's status, location, and other related information. This form is likely used by document management or administrative personnel to verify the authenticity of documents before they are used or shared.
</thinking>

# Document Watermark Check Form - Help Guide
## Purpose
The Document Watermark Check Form is a tool used to check if a document has a watermark and other relevant information about the document.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the status of the document regarding the presence of a watermark.
2. Choose the location of the watermark on the document.
3. Select the file type of the document.
4. Enter a brief description of the document's file type.
5. Enter the name of the person or organization that requested the review.
6. Choose the type of document being reviewed.
7. Enter the location of the document.
8. Enter the file size in bytes.
9. Choose the unit of measurement for the file size.
10. If applicable, upload a file to check its watermark status.

## Field-by-Field Explanation

* **Document Watermark Check (1)** (`document_watermark_check_form`, select_one, required: false): Select 'Yes' if the document has a watermark, 'No' otherwise.
* **Watermark Location (2)** (`watermark_location`, select_multiple, required: false): Choose where the watermark is located on the document.
* **Watermark Message (3)** (`watermark_message`, text, required: false): Enter a description of the watermark message or notice on the document.
* **File Type (4)** (`file_type`, select_one, required: false): Select the type of file the document is in (e.g., PDF, word document, image).
* **File Type Description (5)** (`file_type_description`, text, required: false): Enter a brief description of the file type (e.g., scanned document, printed document).
* **Review Requester (6)** (`review_requester`, text, required: false): Enter the name of the person or organization that requested the review.
* **Document Type (7)** (`document_type`, select_multiple, required: false): Choose the type of document being reviewed (e.g., contract, letter, report).
* **Document Location (8)** (`document_location`, text, required: false): Enter the location of the document (e.g., desk, shelf, folder).
* **File Size (9)** (`file_size`, number, required: false): Enter the size of the file in bytes.
* **File Size Unit (10)** (`file_size_unit`, text, required: false): Choose the unit of measurement for the file size (e.g., bytes, kilobytes, megabytes).
* **Upload File (11)** (`upload_file`, text, required: false): Upload a file to check its watermark status.
