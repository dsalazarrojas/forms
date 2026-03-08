# Contract Agreement Authorization Form - Help Guide
## Purpose
The Contract Agreement Authorization Form is used to collect information about contracts and agreements between the company and external parties. This form helps to ensure that all contracts are properly authorized and compliant with company policies and procedures.

## How To Complete This Form
Before starting, review the contract details and make sure you have all necessary information at hand. Follow these steps:
1. Fill in the official contract title to ensure it matches the original document.
2. Enter the full legal name of the second party (vendor/client).
3. Enter the total contract value in USD.
4. Select the requesting department from the provided options.
5. Enter the budget account code for financial tracking.
6. Enter the contract duration in months (or 0 for perpetual/indefinite contracts).
7. Select the legal review status.
8. Choose the financial/operational risk level.
9. Summarize the key terms of the contract in 3-5 points.
10. Enter the name of the authorizing officer and obtain their digital signature.
11. Enter the date of authorization.
12. Select the planned commencement date of the contract.

## Field-by-Field Explanation

* **Official Contract Title** (`contract_title_official`, text, required): Enter the official title of the contract as it appears on the original document.
* **Second Party (Vendor/Client)** (`second_party_vendor`, text, required): Enter the full legal name of the entity with whom you are contracting.
* **Total Contract Value (USD)** (`contract_value_usd`, number, required): Enter the estimated total spend or revenue of the contract in USD.
* **Requesting Department** (`requesting_department`, select_one, required): Select the department that requested this contract from the provided options.
* **Budget/GL Account Code** (`budget_account_code`, text, required): Enter the budget account code for financial tracking.
* **Contract Duration (Months)** (`contract_duration_months`, number, required): Enter the duration of the contract in months (or 0 for perpetual/indefinite contracts).
* **Legal Review Status** (`legal_review_status`, select_one, required): Select the status of the legal review from the provided options.
* **Financial/Operational Risk Level** (`risk_assessment_level`, select_one, required): Choose the risk level from the provided options.
* **Summary of Key Terms** (`primary_terms_summary`, text, required): Summarize the key terms of the contract in 3-5 points.
* **Authorizing Officer Name** (`authorizing_officer_name`, text, required): Enter the name of the authorizing officer.
* **Digital Signature of Authorizer** (`officer_signature_auth`, text, required): Obtain the digital signature of the authorizing officer.
* **Date of Authorization** (`authorization_date`, date, required): Enter the date of authorization.
* **Planned Commencement Date** (`effective_commencement_date`, date, required): Enter the planned commencement date of the contract.
