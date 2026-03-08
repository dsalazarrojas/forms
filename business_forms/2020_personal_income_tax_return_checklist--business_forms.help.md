<thinking>
The provided YAML defines a comprehensive form for a 2020 Personal Income Tax Return Checklist. The form appears to be designed for collecting essential information from taxpayers, including personal details, income sources, tax withholdings, and supporting documents. The form also includes sections for the taxpayer's declaration of accuracy, preparer notes, and follow-up dates for outstanding items. This form likely serves as a guide for tax preparation and submission.

Upon reviewing the form's structure and fields, it seems that the primary objectives are:

* Gathering accurate and complete information about the taxpayer's personal details, income sources, and tax withholdings.
* Ensuring that the taxpayer has provided all necessary supporting documents.
* Validating the accuracy of the submitted information through the taxpayer's declaration.
</thinking>

# 2020 Personal Income Tax Return Checklist - Help Guide
## Purpose
The 2020 Personal Income Tax Return Checklist is a form designed to collect essential information from taxpayers for the purpose of tax preparation and submission. This guide will walk you through the form's sections and fields to help you understand what information is required and how to complete it accurately.

## How To Complete This Form
To complete the form, please follow these steps:

1. Fill in your personal details (Taxpayer full name, Social Insurance Number (SIN), Date of birth, and Tax year).
2. Select your marital status on Dec 31, 2020.
3. Provide your spouse or partner's full name if married or in a common-law relationship.
4. Enter your primary contact email and phone number.
5. Complete your residence address (street, city, postal code), and the province or territory of residence.
6. Select the sources of income you received in 2020 (e.g., Employment (T4), Self-employment (T2125), Investment (T5), etc.).
7. Enter your total income for 2020 before deductions.
8. Report any CPP/EI contributions.
9. Choose any deductions you plan to claim (e.g., RRSP Contributions, Childcare expenses, etc.).
10. Enter any tax withheld reported on slips (e.g., T4, T5, etc.).
11. Indicate if T4 slips were received.
12. Check the supporting documents you have provided to the tax preparer.
13. Sign the client declaration of accuracy.
14. Enter any preparer notes and action items.
15. Schedule a follow-up date for any outstanding items.

## Field-by-Field Explanation

* **Taxpayer full name** (`taxpayer_name`, text, **required**): Enter your full name as it appears on your government ID.
* **Social Insurance Number (SIN)** (`taxpayer_sin`, text, **required**): Enter your SIN without spaces or dashes.
* **Date of birth** (`date_of_birth`, date, **required**): Enter your date of birth in the YYYY-MM-DD format.
* **Tax year** (`tax_year`, integer, **required**): Enter 2020 as the tax year.
* **Marital status on Dec 31, 2020** (`marital_status`, select_one, **required**): Select your marital status on Dec 31, 2020 (e.g., Single, Married, Common-law, etc.).
* **Spouse or partner full name** (`spouse_or_partner_name`, text, **optional**): If married or in a common-law relationship, enter your spouse or partner's full name.
* **Primary contact email** (`contact_email`, email, **required**): Enter your primary email address used for correspondence and electronic documents.
* **Primary contact phone number** (`contact_phone`, phone, **optional**): Enter your primary phone number, including the country and area code if outside Canada.
* **Residence address (street, city, postal code)** (`residence_address`, text, **required**): Enter your residence address used for tax notices.
* **Province or territory of residence** (`province_or_territory`, text, **required**): Enter the province or territory where you reside on Dec 31, 2020.
* **Sources of income (select all that apply)** (`income_sources`, select_multiple, **required**): Select all the income sources you received in 2020 (e.g., Employment (T4), Self-employment (T2125), etc.).
* **Total income (CAD)** (`total_income`, decimal, **required**): Enter your total income for 2020 before deductions.
* **CPP / EI contributions reported** (`cpp_ei_contributions`, decimal, **optional**): Enter the sum of CPP and EI contributions reported on slips.
* **Deductions being claimed (select all)** (`deductions_claimed`, select_multiple, **optional**): Select any deductions you plan to report (e.g., RRSP Contributions, Childcare expenses, etc.).
* **Tax withheld reported on slips (CAD)** (`tax_withheld`, decimal, **optional**): Enter any tax withheld reported on slips (e.g., T4, T5, etc.).
* **Were T4 slips received?** (`t4_received`, select_one, **required**): Indicate if T4 slips were received.
* **Supporting documents checklist** (`section_header_supporting_documents`, note, **optional**): This section is for the tax preparer to note any supporting documents provided.
* **Documents provided to preparer (select all)** (`documents_provided`, select_multiple, **optional**): Select all the documents handed to the tax preparer (e.g., T4 slip, T5 slip, RRSP slip, etc.).
* **Client declaration of accuracy** (`client_declaration`, select_one, **required**): Sign and confirm that the information provided is accurate and complete.
* **Preparer notes and action items** (`preparer_notes`, text, **optional**): Enter any notes or action items for the tax preparer to follow up on.
* **Follow-up date for outstanding items** (`follow_up_date`, date, **optional**): Schedule a follow-up date for any outstanding items.

## Tips
* Ensure that you have all necessary supporting documents before submitting this form.
* Double-check your personal details and income sources for accuracy.
* Make sure to sign the client declaration of accuracy.
* If you have any questions or concerns, please don't hesitate to contact the tax preparer.
