# Certificate Inventory Management - Help Guide
## Purpose
The Certificate Inventory Management form is designed to track and manage certificates issued to individuals or organizations. It provides a structured platform to collect and store information about certificates, including details such as issue dates, expiration dates, and status.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide a unique Certificate ID to identify each certificate.
2. Enter the full name of the certificate holder in the "Recipient Name" field.
3. Enter the date the certificate was issued in the "Issue Date" field.
4. Specify the type of certificate in the "Certificate Type" field (e.g., Completion, Competency, Attendance, or Other).
5. Enter the date the certificate expires, if applicable, in the "Expiration Date" field.
6. Select the status of the certificate (Active, Expired, Revoked, or Pending) in the "Status" field.
7. Add any additional notes about the record in the "Notes" field.
8. If applicable, enter the name of the staff member responsible for this certificate in the "Record Owner" field.
9. Optionally, provide additional information about the certificate in the "Issuing Authority" field.

## Field-by-Field Explanation
* **Certificate ID** (`Certificate ID`, `text`, required):
	+ Unique identifier for the certificate.
* **Recipient Name** (`Recipient Name`, `text`, required):
	+ Full name of the certificate holder.
* **Issue Date** (`Issue Date`, `date`, required):
	+ Date the certificate was issued.
* **Expiration Date** (`Expiration Date`, `date`, optional):
	+ Date the certificate expires, if applicable.
* **Certificate Type** (`Certificate Type`, `select_one`, required):
	+ Classification or program name of the certificate (e.g., Completion, Competency, Attendance, or Other).
* **Issuing Authority** (`Issuing Authority`, `text`, optional):
	+ Department or organization issuing the certificate.
* **Status** (`Status`, `select_one`, required):
	+ Current status of the certificate (Active, Expired, Revoked, or Pending).
* **Notes** (`Notes`, `text`, optional):
	+ Additional remarks about the record.
* **Record Owner** (`Record Owner`, `text`, optional):
	+ Staff member responsible for this certificate.
* **Certificate Type (Other)** (optional):
	+ If "Certificate Type" is set to "Other", select one of the available options (e.g., Course Completion, Certification Course, Other).
* **Status (Pending)** (optional):
	+ If "Status" is set to "Pending", provide a note about the reason for the pending status.

## Tips
* Ensure that all fields are filled out completely and correctly to avoid duplication and inaccuracy.
* Double-check the form before submitting it to ensure that all necessary information is provided.
* Use the available options in the "Certificate Type" and "Status" fields to select the most accurate classification for the certificate.
* Provide clear and concise notes about the reason for the "Pending" status, if applicable.
