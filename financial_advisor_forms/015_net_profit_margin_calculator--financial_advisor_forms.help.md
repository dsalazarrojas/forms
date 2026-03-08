<thinking>
To avoid duplicating effort, the form purpose and explanation will be based on the fields provided in the YAML. 
The form appears to be for calculating the net profit margin, which is a financial metric used to assess a company's profitability. 
The net profit margin is calculated by dividing the net profit by the revenue and then multiplying by 100. 
The form will allow users to input the revenue, cost of goods sold, operating expenses, and other expenses, and then select the type of calculation they want to perform (Gross Profit, Gross Profit Margin, or Operating Profit Margin). 
The form will also allow users to select the net profit type (Operating Loss, Operating Profit, or Net Profit). 
The form will then display the calculation result in a note field.
</thinking>

# Net Profit Margin Calculator - Help Guide
## Purpose
The Net Profit Margin Calculator is a tool to calculate a company's net profit margin, a financial metric that assesses profitability.

## How To Complete This Form
To use the form, follow these steps:
1. Enter your company's revenue.
2. Enter your company's cost of goods sold.
3. Enter your company's operating expenses.
4. Enter any other expenses.
5. Select the type of calculation you want to perform (Gross Profit, Gross Profit Margin, or Operating Profit Margin).
6. Select the net profit type (Operating Loss, Operating Profit, or Net Profit).
7. Click on "Calculate" to see the result.

## Field-by-Field Explanation
* **Revenue** (`revenue`, `number`, **Required**): Enter your company's total revenue.
* **Cost of Goods Sold** (`cost_of_goods_sold`, `number`, **Optional**): Enter your company's cost of goods sold.
* **Operating Expenses** (`operating_expenses`, `number`, **Optional**): Enter your company's operating expenses.
* **Other Expenses** (`other_expenses`, `number`, **Optional**): Enter any other expenses.
* **Net Profit** (`net_profit`, `select_multiple`, **Optional**): Select one of the following net profit types:
	+ Operating Loss
	+ Operating Profit
	+ Net Profit
* **Calculation Type** (`calculation_type`, `select_one`, **Optional**): Select one of the following calculation types:
	+ Gross Profit
	+ Gross Profit Margin
	+ Operating Profit Margin
* **Calculation Result** (`calculation`, `note`, **Optional**): This field displays the calculation result.

## Tips
* Make sure to enter accurate financial data to get a precise calculation result.
* Select the correct net profit type and calculation type for your specific use case.
* Note that this form is for illustrative purposes only and does not replace professional financial advice.
