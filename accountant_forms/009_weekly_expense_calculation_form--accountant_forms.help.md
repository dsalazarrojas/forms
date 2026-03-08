# weekly_expense_calculation_form - Help Guide
## Purpose
This form is used to calculate weekly expenses and income for a given period.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Weekly Expenses" section with your weekly expenses.
2. Fill out the "Total Income" section with your total income.
3. Fill out the "Date Last Updated" section with the date you last updated the form.
4. Fill out the "Expense 1", "Expense 2", "Expense 3", "Expense 4", and "Expense 5" fields with your individual expenses.
5. Fill out the "Category" field with the category of your expenses.
6. Fill out the "Currency" field with the currency of your expenses.
7. Fill out the "Notes" field with any additional comments or explanations.
8. Click the "Submit" button to calculate the total expenses and income.

## Field-by-Field Explanation

* **Weekly Expenses** (`1`, `text`, required): Enter your weekly expenses here.
* **Total Income** (`2`, `number`, required): Enter your total income here.
* **Date Last Updated** (`4`, `date`, required): Enter the date you last updated the form.
* **Expense 1** (`5`, `text`, required): Enter your first expense here.
* **Expense 2** (`6`, `text`, required): Enter your second expense here.
* **Expense 3** (`7`, `text`, required): Enter your third expense here.
* **Expense 4** (`8`, `text`, required): Enter your fourth expense here.
* **Expense 5** (`9`, `text`, required): Enter your fifth expense here.
* **Category** (`15`, `select_one`, optional): Select the category of your expenses (Personal, Business, or Other).
* **Currency** (`16`, `select_multiple`, optional): Select the currency of your expenses (USD, EUR, AUD, CAD, MXN, CNY, JPY, INR, BRL, KRW, HKD, CHF, MYR, TWD, SGD, AED, QAR, SAR, KWD).
* **Notes** (`14`, `note`, optional): Enter any additional comments or explanations.
* **Total Expenses Total** (`11`, `number`, calculated): This field will display the total expenses after calculating all the individual expenses.
* **Total Income Total** (`12`, `number`, calculated): This field will display the total income after calculating all the individual incomes.
* **Total Net** (`13`, `number`, calculated): This field will display the total net (total income minus total expenses).
* **Submit** (`17`, `text`, required): Click this button to calculate the total expenses and income.
