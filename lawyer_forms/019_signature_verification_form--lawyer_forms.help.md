# Signature Verification Form - Help Guide
## Purpose
This form is designed to collect and verify various details related to a customer's signature on documents. It is likely used by banks or financial institutions to ensure the authenticity and legitimacy of customer signatures.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "form_id" with a unique identifier for the form.
2. Enter the "Signature date" in the format "dd/mm/yyyy".
3. If applicable, enter the "Signature time" in the format "HH:MM:SS".
4. Enter the "customer_name" as it appears on the document.
5. Enter the "customer_id" number as it appears on the document.
6. Enter the "bank_name" of the branch where the signature was obtained.
7. Enter the "branch_code" which is likely a unique code for the branch.
8. Select the type of signature verification ("Bank Verification", "Non-Bank Verification", or "Verification not required").
9. Enter the "document_number" as it appears on the document.
10. Enter the "document_date" in the format "dd/mm/yyyy".
11. Enter the "document_time" in the format "HH:MM:SS".
12. Enter the "customer_address" of the branch where the signature was obtained.
13. Enter the "branch_address" of the branch where the signature was obtained.
14. Enter the "document_number2" as it appears on the document.
15. Enter the "document_date2" in the format "dd/mm/yyyy".
16. Enter the "document_time2" in the format "HH:MM:SS".
17. If applicable, enter "customer_id2" and "customer_id3" numbers as they appear on the document.
18. Select the "verification_result" ("Valid", "Invalid", or "Unknown") of the document.
19. Enter any "additional_comments" about the signature.
20. Enter the "assigned_user" who verified the signature.
21. Enter the "assigned_date" when the signature was verified.
22. Enter the "verification_code" and "verification_code2" which are likely verification codes used to verify the signature.
23. Select the "verification_result2" ("Valid", "Invalid", "Unknown") of the document.

## Field-by-Field Explanation
* **form_id** (`form_id`, `number`, required): Enter a unique identifier for the form.
* **Signature date** (`signature_date`, `date`, required): Enter the date of the signature in the format "dd/mm/yyyy".
* **Signature time** (`signature_time`, `time`, required): Enter the time of the signature in the format "HH:MM:SS".
* **customer_name** (`customer_name`, `text`, required): Enter the name of the customer as it appears on the document.
* **customer_id** (`customer_id`, `number`, required): Enter the customer ID number as it appears on the document.
* **bank_name** (`bank_name`, `text`, required): Enter the name of the bank.
* **branch_code** (`branch_code`, `text`, required): Enter the branch code of the bank.
* **signature_type** (`signature_type`, `select_one`, required): Select the type of signature verification ("Bank Verification", "Non-Bank Verification", or "Verification not required").
* **document_number** (`document_number`, `text`, required): Enter the number of the document.
* **document_date** (`document_date`, `date`, required): Enter the date of the document in the format "dd/mm/yyyy".
* **document_time** (`document_time`, `time`, required): Enter the time of the document in the format "HH:MM:SS".
* **customer_address** (`customer_address`, `text`, required): Enter the address of the customer.
* **branch_address** (`branch_address`, `text`, required): Enter the address of the bank branch.
* **document_number2** (`document_number2`, `text`, required): Enter the number of the second document.
* **document_date2** (`document_date2`, `date`, required): Enter the date of the second document in the format "dd/mm/yyyy".
* **document_time2** (`document_time2`, `time`, required): Enter the time of the second document in the format "HH:MM:SS".
* **customer_id2** (`customer_id2`, `text`, required): Enter the ID number of the second customer.
* **customer_id3** (`customer_id3`, `text`, required): Enter the ID number of the third customer.
* **verification_result** (`verification_result`, `select_one`, required): Select the verification result of the document ("Valid", "Invalid", or "Unknown").
* **additional_comments** (`additional_comments`, `text`, required): Enter any additional comments about the signature.
* **assigned_user** (`assigned_user`, `text`, required): Enter the name of the user who verified the signature.
* **assigned_date** (`assigned_date`, `date`, required): Enter the date when the signature was verified.
* **verification_code** (`verification_code`, `text`, required): Enter the verification code used to verify the signature.
* **verification_code2** (`verification_code2`, `text`, required): Enter the second verification code used to verify the signature.
* **verification_result2** (`verification_result2`, `select_one`, required): Select the verification result of the document ("Valid", "Invalid", or "Unknown").

## Tips
* Please ensure that all fields are filled in accurately and completely.
* If you are unsure about any field, please contact the relevant authority for clarification.
* Please note that some fields may not be required for specific purposes, but are still necessary for a comprehensive verification process.
