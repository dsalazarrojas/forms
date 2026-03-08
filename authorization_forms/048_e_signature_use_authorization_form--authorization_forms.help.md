# e-signature-use-authorization-form - Help Guide
## Purpose
The e-signature-use-authorization-form is used to capture information for obtaining electronic signatures from users and witnesses. This includes signature types, dates, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, indicated by an asterisk (\*) in the label.
2. For "Signature Type", select the relevant option that describes the type of signature required (E-Signature or Digital Signature).
3. For "Use Authorizations", choose the option that best describes the authorization process (E-Signature, E-Signature with Witness, or Witness Signature).
4. Enter the signature document date and time if applicable.
5. Enter the witness's name, title, and issuer for the witness's signature.
6. Select the "Signature Verification Status" to indicate whether the signature has been verified (Not Verified or Verified).

## Field-by-Field Explanation

* **User** (`user`, text, optional): Enter the user's name and other identifying information. This field is not required but can be useful for tracking purposes.
* **Date** (`date`, date, optional): Enter the date on which the signature was taken. This field is not required but can be useful for record-keeping.
* **Signature Type** (`signature_type`, select_one, required): Choose the type of signature required (E-Signature or Digital Signature).
* **Use Authorizations** (`use_authorizations`, select_multiple, required): Choose the option that best describes the authorization process (E-Signature, E-Signature with Witness, or Witness Signature).
* **Signature Document Date** (`signature_document_date`, date, optional): Enter the date on which the signature document was issued. This field is not required but can be useful for record-keeping.
* **Signature Document Time** (`signature_document_time`, time, optional): Enter the time on which the signature document was issued. This field is not required but can be useful for record-keeping.
* **Witness Document Date** (`witness_document_date`, date, optional): Enter the date on which the witness document was issued. This field is not required but can be useful for record-keeping.
* **Witness Document Date Time** (`witness_document_time`, time, optional): Enter the time on which the witness document was issued. This field is not required but can be useful for record-keeping.
* **Witness Name** (`witness_name`, text, optional): Enter the name of the witness who signed the document. This field is not required but can be useful for tracking purposes.
* **Witness Title** (`witness_title`, text, optional): Enter the title of the witness who signed the document. This field is not required but can be useful for identification purposes.
* **Witness Document Issuer** (`witness_document_issuer`, text, optional): Enter the issuer of the witness document. This field is not required but can be useful for record-keeping.
* **Signature Type 2** (`signature_type_2`, text, optional): Enter any additional information about the signature type. This field is not required but can be useful for clarification purposes.
* **Signature Verification Status** (`signature_verification_status`, select_one, required): Select the status of the signature verification (Not Verified or Verified).

## Tips

* Use this form for situations where electronic signatures are required.
* Be sure to fill out the form accurately and completely.
* If you have any questions or concerns, contact your supervisor or administrator for guidance.
