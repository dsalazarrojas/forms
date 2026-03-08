# Agency Ownership Assessment - Help Guide
## Purpose
The Agency Ownership Assessment form is used to gather detailed information about the agency's ownership structure. This includes the agency's registered business name, tax ID, and breakdown of primary owners and partners. The form helps to clarify the agency's ownership hierarchy, identify key stakeholders, and assess potential risks or liabilities.
## How To Complete This Form
1. Ensure you have all necessary information about the agency's ownership structure before starting the form.
2. Enter the agency's registered business name as per the registration documents in the "Registered Business Name" field.
3. Enter the agency's tax ID (EIN or equivalent) in the "Business Tax ID" field.
4. List all primary partners and owners in the "Ownership Breakdown" field.
5. For each owner/partner, enter their name in the "Principal Owner Name" field.
6. Enter the ownership percentage for each owner/partner in the "Ownership Percentage - %" field.
7. If applicable, enter the name of any secondary partners in the "Partner 2 Name" field.
8. Enter the ownership percentage for secondary partners in the "Partner 2 Percentage - %" field.
9. Select the legal structure of the business from the "Legal Structure of Business" dropdown menu.
10. Select all types of supporting documents on file, such as Articles of Incorporation, Operating Agreement, and Stock Certificates.
11. Indicate if there are any silent partners with financial interest but no voting power.
12. Enter the names of any external investors.
## Field-by-Field Explanation
* **Registered Business Name** (`business_name`, `text`, required): Enter the official name of the agency as registered with the relevant government authorities.
* **Business Tax ID** (`tax_id`, `text`, required): Enter the tax ID number assigned to the agency (e.g. EIN for US-based agencies).
* **Ownership Breakdown** (`ownership_header`, `note`, required): List all primary partners and owners of the agency.
* **Principal Owner Name** (`owner_name`, `text`, required): Enter the name of the primary owner of the agency.
* **Ownership Percentage - %** (`owner_percentage`, `number`, required): Enter the percentage of ownership for the primary owner.
* **Partner 2 Name** (`partner_2_name`, `text`, optional): Enter the name of any secondary partner(s).
* **Partner 2 Percentage - %** (`partner_2_percentage`, `number`, optional): Enter the percentage of ownership for secondary partner(s).
* **Legal Structure of Business** (`legal_structure`, `select_one`, required): Select the legal structure of the agency (e.g. LLC, Corporation, Partnership).
* **Types of supporting documents on file** (`document_types`, `select_multiple`, required): Select all types of documents on file, such as Articles of Incorporation, Operating Agreement, and Stock Certificates.
* **Financial Interest** (`financial_header`, `note`, optional): Note on financial interest of the agency.
* **Are there any silent partners?** (`silent_partners_check`, `select_one`, required): Indicate if there are any silent partners with financial interest but no voting power.
* **Names of external investors** (`external_investors`, `text`, optional): Enter the names of any external investors.
