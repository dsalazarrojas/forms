# Company Financial Ranking Form - Help Guide
## Purpose
The Company Financial Ranking Form is designed to evaluate company performance based on several key financial metrics. This form is used to collect and compare data from various companies in the industry, providing insights into their financial health and stability.

## How To Complete This Form
1. **Company Name**: Enter the full legal name of your company.
2. **Company ID/Registration Number**: Enter your company's official registration number.
3. **Industry Sector**: Select the primary industry sector of your company.
4. **Sub-Industry/Specialization**: Enter a more specific category within the chosen industry (optional).
5. **Fiscal Year for This Report**: Enter the period covered by this report.
6. **Reporting Currency**: Select the currency used in the report.
7. **Recurring Revenue Metrics**:
	* **Total Annual Revenue**: Enter the total revenue generated in the fiscal year (in millions).
	* **Year-over-Year Revenue Growth**: Enter the percentage growth in revenue compared to the previous year.
	* **Recurring Revenue Percentage**: Enter the percentage of recurring revenue (if applicable).
8. **Primary Revenue Source**: Select the main revenue driver of your company.
9. **Profitability Metrics**:
	* **Gross Profit Margin**: Enter the gross profit margin percentage.
	* **Operating Profit Margin**: Enter the operating profit margin percentage.
	* **Net Profit Margin**: Enter the net profit margin percentage.
	* **EBITDA**: Enter the EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) in millions.
	* **EBITDA Margin**: Enter the EBITDA margin percentage.
10. **Asset Metrics**:
	* **Total Assets**: Enter the total assets (in millions).
	* **Current Assets**: Enter the current assets (in millions).
	* **Fixed Assets**: Enter the fixed assets (in millions).
	* **Intangible Assets**: Enter the intangible assets (in millions).
11. **Liability Metrics**:
	* **Total Liabilities**: Enter the total liabilities (in millions).
	* **Current Liabilities**: Enter the current liabilities (in millions).
	* **Long-term Debt**: Enter the long-term debt (in millions).
	* **Debt-to-Equity Ratio**: Enter the debt-to-equity ratio.
12. **Liquidity Metrics**:
	* **Current Ratio**: Enter the current ratio.
	* **Quick Ratio**: Enter the quick ratio.
	* **Cash and Cash Equivalents**: Enter the cash and cash equivalents (in millions).
	* **Operating Cash Flow**: Enter the operating cash flow (in millions).
13. **Efficiency Metrics**:
	* **Asset Turnover Ratio**: Enter the asset turnover ratio.
	* **Inventory Turnover**: Enter the inventory turnover (if applicable).
	* **Days Sales Outstanding (DSO)**: Enter the days sales outstanding.
14. **Employee Metrics**:
	* **Total Number of Employees**: Enter the total number of employees.
	* **Revenue per Employee**: Enter the revenue per employee (in thousands).
	* **Year-over-Year Employee Growth**: Enter the percentage growth in employees compared to the previous year.
15. **Market Metrics**:
	* **Market Capitalization**: Enter the market capitalization (in millions, if public).
	* **Estimated Market Share**: Enter the estimated market share (percentage).
	* **Geographic Presence**: Enter the number of countries where your company operates.
16. **Ranking Criteria**:
	* **Ranking Category**: Select the primary ranking category for your company.
	* **Peer Comparison**: Select how you compare to industry peers.
17. **Additional Information**:
	* **Key Financial Highlights**: Enter any notable financial achievements.
	* **Source of Financial Data**: Select where the data comes from.
	* **Verification Status**: Select the verification status of the data.
	* **Submitted By**: Enter the name of the submitter.
	* **Submitter Title**: Enter the title of the submitter.
	* **Submission Date**: Enter the date of submission.

## Field-by-Field Explanation

* **Company Name**: The full legal name of your company.
	+ Type: `text`, Required: `true`
* **Company ID/Registration Number**: The official registration number of your company.
	+ Type: `text`, Required: `true`
* **Industry Sector**: The primary industry sector of your company.
	+ Type: `select_one`, Required: `true`, Options: `["Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Energy", "Telecommunications", "Consumer Goods", "Industrial", "Real Estate", "Other"]`
* **Sub-Industry/Specialization**: A more specific category within the chosen industry (optional).
	+ Type: `text`, Required: `false`
* **Fiscal Year for This Report**: The period covered by this report.
	+ Type: `text`, Required: `true`
* **Reporting Currency**: The currency used in the report.
	+ Type: `select_one`, Required: `true`, Options: `["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "Other"]`
* **Total Annual Revenue**: The total revenue generated in the fiscal year (in millions).
	+ Type: `number`, Required: `true`
* **Year-over-Year Revenue Growth**: The percentage growth in revenue compared to the previous year.
	+ Type: `number`, Required: `true`
* **Recurring Revenue Percentage**: The percentage of recurring revenue (if applicable).
	+ Type: `number`, Required: `false`
* **Primary Revenue Source**: The main revenue driver of your company.
	+ Type: `select_one`, Required: `true`, Options: `["Product Sales", "Services", "Subscriptions", "Licensing", "Advertising", "Other"]`
* **Gross Profit Margin**: The gross profit margin percentage.
	+ Type: `number`, Required: `true`
* **Operating Profit Margin**: The operating profit margin percentage.
	+ Type: `number`, Required: `true`
* **Net Profit Margin**: The net profit margin percentage.
	+ Type: `number`, Required: `true`
* **EBITDA**: The EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) in millions.
	+ Type: `number`, Required: `false`
* **EBITDA Margin**: The EBITDA margin percentage.
	+ Type: `number`, Required: `false`
* **Total Assets**: The total assets (in millions).
	+ Type: `number`, Required: `true`
* **Current Assets**: The current assets (in millions).
	+ Type: `number`, Required: `false`
* **Fixed Assets**: The fixed assets (in millions).
	+ Type: `number`, Required: `false`
* **Intangible Assets**: The intangible assets (in millions).
	+ Type: `number`, Required: `false`
* **Total Liabilities**: The total liabilities (in millions).
	+ Type: `number`, Required: `true`
* **Current Liabilities**: The current liabilities (in millions).
	+ Type: `number`, Required: `false`
* **Long-term Debt**: The long-term debt (in millions).
	+ Type: `number`, Required: `false`
* **Debt-to-Equity Ratio**: The debt-to-equity ratio.
	+ Type: `number`, Required: `false`
* **Current Ratio**: The current ratio.
	+ Type: `number`, Required: `false`
* **Quick Ratio**: The quick ratio.
	+ Type: `number`, Required: `false`
* **Cash and Cash Equivalents**: The cash and cash equivalents (in millions).
	+ Type: `number`, Required: `false`
* **Operating Cash Flow**: The operating cash flow (in millions).
	+ Type: `number`, Required: `false`
* **Asset Turnover Ratio**: The asset turnover ratio.
	+ Type: `number`, Required: `false`
* **Inventory Turnover**: The inventory turnover (if applicable).
	+ Type: `number`, Required: `false`
* **Days Sales Outstanding (DSO)**: The days sales outstanding.
	+ Type: `number`, Required: `false`
* **Total Number of Employees**: The total number of employees.
	+ Type: `number`, Required: `true`
* **Revenue per Employee**: The revenue per employee (in thousands).
	+ Type: `number`, Required: `false`
* **Year-over-Year Employee Growth**: The percentage growth in employees compared to the previous year.
	+ Type: `number`, Required: `false`
* **Market Capitalization**: The market capitalization (in millions, if public).
	+ Type: `number`, Required: `false`
* **Estimated Market Share**: The estimated market share (percentage).
	+ Type: `number`, Required: `false`
* **Geographic Presence**: The number of countries where your company operates.
	+ Type: `number`, Required: `false`
* **Ranking Category**: The primary ranking category for your company.
	+ Type: `select_one`, Required: `true`, Options: `["Revenue Rank", "Profitability Rank", "Growth Rank", "Efficiency Rank", "Overall Financial Health"]`
* **Peer Comparison**: How you compare to industry peers.
	+ Type: `select_one`, Required: `false`, Options: `["Top 10%", "Top 25%", "Top 50%", "Below average", "Not sure"]`
* **Key Financial Highlights**: Any notable financial achievements.
	+ Type: `text`, Required: `false`
* **Source of Financial Data**: Where the data comes from.
	+ Type: `select_one`, Required: `true`, Options: `["Audited financial statements", "Internal financial reports", "Public filings", "Management estimates", "Other"]`
* **Verification Status**: The verification status of the data.
	+ Type: `select_one`, Required: `true`, Options: `["Yes, by external auditor", "Yes, by internal audit", "Yes, by management", "No, preliminary"]`
* **Submitted By**: The name of the submitter.
	+ Type: `text`, Required: `true`
* **Submitter Title**: The title of the submitter.
	+ Type: `text`, Required: `true`
* **Submission Date**: The date of submission.
	+ Type: `date`, Required: `true`

## Tips
* Ensure that all required fields are completed accurately.
* Verify the accuracy of the financial data provided.
* Provide the most up-to-date financial data available.
* If unsure about any field, please refer to the options list or seek guidance from a financial expert.
