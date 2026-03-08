# Balance Sheet Form - Help Guide

## Purpose
The Balance Sheet Form is used to record and report the financial status of an organization, providing a snapshot of its financial position at a specific date. This form captures essential information about the organization's assets, liabilities, and equity, which helps in assessing its financial health and performance.

## How To Complete This Form
To complete the Balance Sheet Form, follow these steps:

1. **Fill out all required fields**:
	* Organization Name: Enter the name of the organization.
	* As of Date: Select the date of the balance sheet.
	* Reporting Period: Choose the reporting period (Monthly, Quarterly, Semi-Annual, or Annual).
	* Prepared By: Enter the name of the person preparing the form.
	* Total Assets: Calculate the total value of assets.
	* Total Liabilities: Calculate the total value of liabilities.
	* Stockholders Equity: Enter the value of stockholders or owner equity.
	* This Balance Sheet Form Has Been Completed and Verified: Select whether the form has been completed and verified.

## Field-by-Field Explanation

* **Organization Name** (`organization_name`, text, required): Enter the name of the organization.
* **As of Date** (`balance_sheet_date`, date, required): Select the date of the balance sheet.
* **Reporting Period** (`report_period`, select_one, required): Choose the reporting period (Monthly, Quarterly, Semi-Annual, or Annual).
* **Prepared By** (`prepared_by_name`, text, required): Enter the name of the person preparing the form.
* **Cash and Cash Equivalents** (`cash_equivalent`, decimal, required): Enter the value of cash and cash equivalents in dollars.
* **Marketable Securities** (`marketable_securities`, decimal, optional): Enter the value of marketable securities in dollars.
* **Accounts Receivable** (`accounts_receivable`, decimal, optional): Enter the value of accounts receivable in dollars.
* **Inventory** (`inventory_value`, decimal, optional): Enter the value of inventory in dollars.
* **Total Current Assets** (`current_assets_total`, decimal, required): This field is calculated and should be populated automatically.
* **Property, Plant, and Equipment** (`property_plant`, decimal, optional): Enter the value of property, plant, and equipment in dollars.
* **Less Accumulated Depreciation** (`accumulated_depreciation_value`, decimal, optional): Enter the value of less accumulated depreciation in dollars.
* **Long-Term Investments** (`long_term_investments`, decimal, optional): Enter the value of long-term investments in dollars.
* **Intangible Assets** (`intangible_assets_value`, decimal, optional): Enter the value of intangible assets (goodwill, patents, etc.) in dollars.
* **Total Assets** (`total_assets_value`, decimal, required): This field is calculated and should be populated automatically.
* **Accounts Payable** (`accounts_payable_value`, decimal, optional): Enter the value of accounts payable in dollars.
* **Short-Term Debt** (`short_term_debt_value`, decimal, optional): Enter the value of short-term debt in dollars.
* **Accrued Liabilities** (`accrued_liabilities`, decimal, optional): Enter the value of accrued liabilities in dollars.
* **Total Current Liabilities** (`total_current_liabilities_value`, decimal, required): This field is calculated and should be populated automatically.
* **Long-Term Debt** (`long_term_debt_value`, decimal, optional): Enter the value of long-term debt in dollars.
* **Total Liabilities** (`total_liabilities_value`, decimal, required): This field is calculated and should be populated automatically.
* **Stockholders or Owner Equity** (`stockholders_equity`, decimal, required): Enter the value of stockholders or owner equity in dollars.
* **This Balance Sheet Form Has Been Completed and Verified** (`form_submitted`, select_one, required): Select whether the form has been completed and verified.
