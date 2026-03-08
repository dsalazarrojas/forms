# Expense Reimbursement Form With Calculations - Help Guide
## Purpose
This form is designed for submitting expense reimbursement requests, including detailed calculations for various scenarios. It's intended for employees to provide accurate financial information for reimbursement purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your employee name in the **Employee Name** field.
2. Select the relevant **Date** of the expense.
3. Enter the **Amount** spent on the expense.
4. Choose the **Expense Type** (e.g., Air Travel, Hotel Stay, Meal, or Other).
5. Upload or enter details about the **Receipt** associated with the expense.
6. Provide the **Location** where the expense occurred.
7. Calculate and select the **Expense Calculations** needed (e.g., Total Amount, Count of Expenses, Average Amount per Item).
8. Enter the **Reimbursement Amount**, which will be automatically calculated based on the selected **Expense Calculations**.
9. Add any **Notes** about the expense.
10. Select the **Expense Frequency** (e.g., Daily, Weekly, Monthly, Yearly).
11. Choose the **Category** of the expense (e.g., Office Supplies, Travel, Food, Other).
12. Select the **Frequency** of the expense (e.g., Daily, Weekly, Monthly, Yearly).
13. Enter the **Department** where the expense occurred.
14. Enter the **Date** of the expense.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required: false): Please enter your employee name to identify yourself.
* **Date** (`date`, date, required: false): Select the date of the expense.
* **Amount** (`expense_amount`, number, required: false): Enter the total amount spent on the expense.
* **Expense Type** (`expense_type`, select_one, required: false): Choose the type of expense (e.g., Air Travel, Hotel Stay, Meal, Other).
* **Receipt** (`receipt`, text, required: false): Upload or enter details about the receipt associated with the expense.
* **Location** (`expense_location`, text, required: false): Enter the location where the expense occurred.
* **Expense Calculations** (`expense_calculations`, select_multiple, required: false): Select the calculation options needed for the expense (e.g., Total Amount, Count of Expenses, Average Amount per Item).
* **Reimbursement Amount** (`reimbursement_amount`, number, required: false): This field will be automatically calculated based on the selected **Expense Calculations**.
* **Notes** (`notes`, note, required: false): Add any notes about the expense.
* **Expense Frequency** (`expense_frequency`, select_one, required: false): Select the frequency of the expense (e.g., Daily, Weekly, Monthly, Yearly).
* **Category** (`expense_category`, select_one, required: false): Choose the category of the expense (e.g., Office Supplies, Travel, Food, Other).
* **Frequency** (`expense_frequency_2`, select_one, required: false): This field is redundant, please ignore it.
* **Department** (`employee_department`, text, required: false): Enter the department where the expense occurred.
* **Date** (`expense_date`, date, required: false): This field is duplicate, please use the initial **Date** field.
