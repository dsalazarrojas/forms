<thinking>
This form is designed for citizens to upload their ID documents for various purposes, such as verification, account updates, application submissions, and more. The form asks for personal details like citizen name, email, phone number, date of birth, citizen ID number, current address, and purpose of document upload. It also requires the upload of a document with its front and back sides (if applicable), specifying the type and format of the document, as well as its size and quality. Additionally, the form inquires about the expiration date and issuing authority of the document, whether the citizen needs to upload additional documents, lists those additional documents, and confirms their consent to secure document handling. Finally, the form confirms the accuracy of the uploaded information and allows the citizen to add additional comments if needed.
</thinking>

# Citizen ID Document Upload Form - Help Guide
## Purpose
This form is used to upload identification documents for various purposes such as verification, account updates, application submissions, and more.

## How To Complete This Form
1. Fill in the required fields:
	* Full Legal Name: Enter your name as it appears on your ID.
	* Email Address: Enter your email address.
	* Phone Number: Enter your phone number.
	* Date of Birth: Enter your date of birth.
	* Citizen ID Number: Enter your ID number.
	* Current Address: Enter your current address.
	* Purpose of Document Upload: Select the purpose of the document upload.
	* Type of Document: Select the type of document you are uploading.
	* File Format: Select the format of the uploaded document.
	* File Size: Enter the size of the uploaded document in MB.
	* Document Quality: Confirm if the document is clearly readable.
	* Document Expiration Date: If applicable, enter the expiration date of the document.
	* Issuing Authority: Enter the issuing authority of the document.
	* Document Issue Date: If applicable, enter the date the document was issued.
2. Upload the front and back of the document:
	* Upload Front of Document: Upload a clear photo or scan of the front side of the document.
	* Upload Back of Document: If applicable, upload a clear photo or scan of the back side of the document.
3. Confirm additional information:
	* Do You Need to Upload Additional Documents: Confirm if you need to upload additional documents.
	* List Additional Document Types: If yes, list the additional document types.
	* Privacy Consent: Confirm that you consent to secure document handling.
	* Accuracy Statement: Confirm that the information is accurate.
	* Digital Signature: Type your full name.
	* Date of Submission: Enter the date of submission.
	* Any Additional Comments: If needed, add any additional comments.

## Field-by-Field Explanation
* **Full Legal Name** (`citizen_name`, text, required): Enter your name as it appears on your ID.
* **Email Address** (`email`, email, required): Enter your email address.
* **Phone Number** (`phone`, text, required): Enter your phone number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.
* **Citizen ID Number** (`citizen_id_number`, text, required): Enter your ID number.
* **Current Address** (`address`, text, required): Enter your current address.
* **Purpose of Document Upload** (`upload_purpose`, select_one, required): Select the purpose of the document upload.
* **Type of Document** (`document_type`, select_one, required): Select the type of document.
* **File Format** (`file_format`, select_one, required): Select the format of the document.
* **File Size** (`file_size`, number, required): Enter the size of the document in MB.
* **Document Quality** (`document_quality`, select_one, required): Confirm if the document is clearly readable.
* **Document Expiration Date** (`expiration_date`, date, optional): If applicable, enter the expiration date of the document.
* **Issuing Authority** (`issuing_authority`, text, required): Enter the issuing authority of the document.
* **Document Issue Date** (`issue_date`, date, optional): If applicable, enter the date the document was issued.
* **Do You Need to Upload Additional Documents** (`additional_documents`, select_one, required): Confirm if you need to upload additional documents.
* **List Additional Document Types** (`additional_document_types`, text, optional): If yes, list the additional document types.
* **Privacy Consent** (`privacy_consent`, select_one, required): Confirm that you consent to secure document handling.
* **Accuracy Statement** (`accuracy_statement`, select_one, required): Confirm that the information is accurate.
* **Digital Signature** (`signature`, text, required): Type your full name.
* **Date of Submission** (`submission_date`, date, required): Enter the date of submission.
* **Any Additional Comments** (`additional_comments`, text, optional): If needed, add any additional comments.
