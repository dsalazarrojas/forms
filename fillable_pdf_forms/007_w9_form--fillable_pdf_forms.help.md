# W9 Form - Help Guide
## Purpose
The W9 Form is a document used by employees to report their income and taxes. It's essential to complete this form accurately to ensure correct tax withholding and compliance with IRS guidelines.

## How To Complete This Form

1.  Fill out the form carefully and accurately, ensuring all required fields are completed.
2.  Review each field carefully to ensure you have the correct information before proceeding.
3.  If you're unsure about any field, seek guidance from your employer or relevant authorities.

## Field-by-Field Explanation

*   **tax_year** (`tax_year`, `select_one`, required): Select either 'Yes' or 'No' to indicate whether you have received any non-employee compensation.
*   **employer_identification_number** (`employer_identification_number`, `text`, optional): Enter your employer's identification number for tax purposes.
*   **employee_name** (`employee_name`, `text`, required): Enter your name as it appears on your tax return.
*   **employee_address** (`employee_address`, `text`, optional): Enter your home address for tax purposes.
*   **employer_address** (`employer_address`, `text`, optional): Enter your employer's address.
*   **tax_withholding** (`tax_withholding`, `number`, required): Enter the amount of tax withheld during the year.
*   **signature_block** (`signature_block`, `text`, optional): This field is intended for a signature block where you can sign the document. You can enter your signature here.
*   **signature_drawing** (`signature_drawing`, `note`, optional): This field is for drawing your signature. If you have a pen and paper available, you can sign the document and attach it here.
*   **employee_signature** (`employee_signature`, `text`, required): Sign the document with your actual signature.
*   **employee_date** (`employee_date`, `date`, optional): Enter the date you sign the document.
*   **employer_ein** (`employer_ein`, `text`, required): Enter your employer's Employer Identification Number for tax purposes.
