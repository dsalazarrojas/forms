# Digital Signature Authorization Form - Help Guide
## Purpose
The Digital Signature Authorization Form is used to collect and verify user information, including their name, email, role, department, and other relevant details, to ensure accurate and up-to-date records.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **User Name** in the field provided.
2. Enter your **Email** address in the format `username@example.com`.
3. If applicable, enter your **Date of Birth** in the format `mm/dd/yyyy`.
4. Leave the **Signature** field blank, as it is not required for this form.
5. Select your **Role** from the options provided.
6. Select your **Department** from the options provided, separating multiple selections with commas (e.g., `Marketing, Sales`).
7. Enter the **Agreement Date** and **Contract Date** in the format `mm/dd/yyyy` for each.
8. If necessary, enter the **Expiration Date** in the format `mm/dd/yyyy`.
9. Select the **Document Type** from the options provided.
10. Upload the required **File Upload**.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, required): Enter your full name as it appears on your official identification.
* **Email** (`email`, email, required): Enter your email address in the format `username@example.com`.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth in the format `mm/dd/yyyy` if applicable.
* **Signature** (`signature`, note, optional): Leave this field blank, as it is not required for this form.
* **Role** (`role`, select_one, required): Select your role from the provided options, which may include:
	+ Option 1
	+ Other (please specify in the text field provided)
* **Department** (`department`, select_multiple, required): Select your department from the options provided, separating multiple selections with commas (e.g., `Marketing, Sales`).
* **Agreement Date** (`agreement_date`, date, required): Enter the date of your agreement in the format `mm/dd/yyyy`.
* **Contract Date** (`contract_date`, date, required): Enter the date of your contract in the format `mm/dd/yyyy`.
* **Expiration Date** (`expiration_date`, date, optional): Enter the expiration date of your contract in the format `mm/dd/yyyy`, if applicable.
* **Document Type** (`document_type`, select_one, optional): Select the type of document related to your agreement or contract from the options provided, which may include:
	+ Letter
	+ Contract
	+ Memo
* **File Upload** (`file_upload`, text, optional): Upload any relevant files required for your agreement or contract.

Note: The **File Upload** field is not currently supported in this help guide, but it will be added in a future update.
