<thinking>
The purpose of this form is to collect information from declarants for the purpose of declaration, specifically for filing and reporting. It's essential to ensure that the information provided is accurate and true to the best of the declarant's knowledge. Please note that this form is intended for declarants who are filing under their own capacity, and not for any other individual or organization. Before starting, review the form carefully and answer all questions truthfully. If you're unsure about any field or question, it's recommended to consult with the relevant authorities or seek clarification from the form administrator.
</thinking>

# Accumulation Declaration Form - Help Guide
## Purpose
This form is used to gather information from declarants for the purpose of declaration and reporting. It is essential to provide accurate and truthful information to the best of your knowledge.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter your full name as it appears on your official identification documents.
2. Provide your Tax ID or Social Security Number for tax purposes.
3. Select the reason for your filing.
4. Fill in the approximate values of your liquid assets such as cash and equivalents.
5. Enter the estimated market value of your real estate holdings.
6. List your investment securities and enter their values.
7. Mention any other tangible assets you hold.
8. Explain the source of funds for the accumulated assets.
9. Provide the date of the valuation of your assets.
10. Confirm that the information provided is true and accurate.
11. Sign the form with your digital signature.
12. Finally, enter the date of declaration.

## Field-by-Field Explanation

* **Declarant Full Name** (`declarant_full_name`, text, required): Enter your full name as it appears on your official identification documents.
* **Tax ID or SSN** (`tax_id_or_ssn`, text, required): Provide your Tax ID or Social Security Number for tax purposes.
* **Declaration Type** (`declaration_type`, select_one, required): Select the reason for your filing:
	+ Annual Asset Update
	+ New Account Opening
	+ Regulatory Audit
* **-- Declared Assets --** (`asset_header`, note, required): Provide approximate values for your liquid assets, such as cash and equivalents.
* **Cash and Equivalents** (`cash_and_equivalents`, number, required): Enter the approximate value of your liquid assets.
* **Real Estate Holdings** (`real_estate_holdings`, number, optional): Enter the estimated market value of your real estate holdings.
* **Investment Securities** (`investment_securities`, number, optional): List and enter the values of your investment securities.
* **Other Tangible Assets** (`other_tangible_assets`, number, optional): Mention any other tangible assets you hold.
* **Source of Funds Explanation** (`source_of_funds_explanation`, text, required): Explain the source of funds for the accumulated assets.
* **Valuation As Of Date** (`valuation_as_of_date`, date, required): Enter the date of the valuation of your assets.
* **-- Legal Acknowledgment --** (`legal_header`, note, optional): This section is for legal acknowledgment purposes, please review carefully.
* **I declare the above information is true and accurate** (`truthfulness_confirmation`, select_one, required): Confirm that the information provided is true and accurate:
	+ Yes, I so declare
	+ False
* **Digital Signature** (`digital_signature`, text, required): Type your full legal name as your digital signature.
* **Date of Declaration** (`date_of_declaration`, date, required): Enter the date of declaration.
