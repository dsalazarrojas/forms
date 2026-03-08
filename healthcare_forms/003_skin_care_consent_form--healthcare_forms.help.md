# Skin Care Consent Form - Help Guide
## Purpose
The Skin Care Consent Form is used to document a client's informed consent for skin care procedures. The form is designed to be completed by the client and serves as a record of their understanding of the procedure and their agreement to undergo it.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your client's details on the "Client Details" field.
2. Select the type of procedure you are consenting to from the "Consent Type" dropdown menu.
3. Provide any additional details about the procedure in the "Procedure Details" field.
4. Enter the date and time of the procedure in the "Date" and "Time" fields.
5. Sign the "Client Signature" field to confirm your consent.
6. Sign the "Practitioner Signature" field to confirm that you have explained the procedure to the client and obtained their informed consent.

## Field-by-Field Explanation
* **Client Details** (`client_details`, `text`, required: false): This field is where you enter your personal details such as your name, contact information, and any other relevant information.
* **Consent Type** (`consent_type`, `select_one`, required: true): Select the type of skin care procedure you are consenting to, such as "Skin Care Procedure" or "Other Procedure".
* **Procedure Details** (`procedure_details`, `text`, required: false): Provide any additional details about the procedure, such as the location of the procedure or any specific products or techniques that will be used.
* **Date** (`consent_date`, `date`, required: false): Enter the date of the procedure. This field is not necessarily tied to the date the form is completed.
* **Time** (`procedure_time`, `time`, required: false): Enter the time of the procedure.
* **Client Signature** (`client_signature`, `note`, required: false): Sign this field to confirm that you have read and understood the procedure and are consenting to it.
* **Practitioner Signature** (`practitioner_signature`, `note`, required: false): Sign this field to confirm that you have explained the procedure to the client and obtained their informed consent.

## Tips
* Please make sure to explain the procedure and its potential risks and benefits to the client before obtaining their signature.
* Please ensure that the client understands the procedure and its implications before obtaining their signature.
* This form is not intended for medical emergencies, but rather for routine skin care procedures.
