<thinking>
To create a help guide for the "tax_filing_verification_form" form, we need to consider the following:
* The form is used for tax filing verification, which is an important administrative process to ensure accurate and compliant tax filings.
* The form collects various information related to the client, including their name, tax return status, address, phone number, and email. This is likely used to verify the client's identity and validate their tax filing information.
* The form also collects specific tax filing details, such as tax return amount, filing fee, and submission date. This is likely used to track and monitor tax filings.
* Some fields are required, while others are not. The required fields are likely crucial for the tax filing process, while the non-required fields provide additional information for reference or reporting purposes.

Given the fields and their descriptions, the form appears to be designed for tax authorities or financial institutions to verify and process tax filings. However, without additional context or business logic, we can only provide general explanations for each field.</thinking>

# tax_filing_verification_form - Help Guide
## Purpose
The "tax_filing_verification_form" is a form used to verify and process tax filings. It collects various information related to the client and their tax filings.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide the client's name and tax year.
2. Check the tax return status (pending, submitted, received, or rejected).
3. Enter the client's address.
4. Check if you have tax return documents.
5. Enter the client's phone number and email (if applicable).
6. Check if you have additional documents.
7. Enter the tax return amount and filing fee.
8. Enter the tax submission date.
9. Check the tax submission status (pending, submitted, received, or rejected).

## Field-by-Field Explanation
* **Client Info (1)** (`text`, optional): Enter the client's name and any relevant information related to them.
* **Client Name (2)** (`text`, required): Enter the client's name as it appears on their tax return.
* **Tax Year (3)** (`number`, required): Enter the tax year the client's return is for.
* **Tax Return Status (4)** (`select_one`, optional): Select the current status of the client's tax return (pending, submitted, received, or rejected).
* **Client Address (5)** (`text`, required): Enter the client's address as it appears on their tax return.
* **Tax Return Documents (6)** (`select_multiple`, optional): Check if you have the necessary tax return documents.
* **Client Phone (7)** (`text`, optional): Enter the client's phone number as it appears on their tax return.
* **Client Email (8)** (`email`, optional): Enter the client's email as it appears on their tax return.
* **Tax Submission Date (9)** (`date`, optional): Enter the date the client's tax return was submitted.
* **Tax Submission Status (10)** (`select_multiple`, optional): Select the status of the client's tax submission (pending, submitted, received, or rejected).
* **Tax Return Amount (11)** (`number`, required): Enter the amount of the client's tax return.
* **Tax Return Filing Fee (12)** (`number`, required): Enter the fee associated with the client's tax return filing.
* **Tax Return Documents (13)** (`select_multiple`, optional): Check if you have the necessary tax return documents.
* **Note (14)** (`note`, optional): Enter any additional notes or comments related to the client's tax return.
* **Additional Documents (15)** (`select_multiple`, optional): Check if you have any additional documents related to the client's tax return.
* **Tax Return Documents (16)** (`select_multiple`, optional): Check if you have the necessary tax return documents.
