# Expense Reimbursement Form With Calculations Template - Help Guide
## Purpose
This form is used to request reimbursement for business-related expenses incurred during travel. It captures key information such as dates of travel, types of expenses, and calculations for tax and net amount.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: **Expense Form**, **Date of Travel**, **Start Date**, and **End Date**.
2. Select the **Type of Expense** from the dropdown menu.
3. Enter the **Gross Amount** of the expense.
4. Enter the **Tax Rate** as a percentage.
5. The **Net Amount** and **Tax** fields will be calculated automatically based on the values you entered.
6. Enter your **Form ID** and **User ID** for identification purposes.

## Field-by-Field Explanation

* **Expense Form** (`expense_form`, text, required): A brief description of the expense.
* **Date of Travel** (`date_of_travel`, date, required): The date when the travel occurred.
* **Start Date** (`start_date`, date, required): The start date of the travel period.
* **End Date** (`end_date`, date, required): The end date of the travel period.
* **Type of Expense** (`expense_type`, select_one, required): A selection of pre-defined expense types (e.g. "Item A" or "Item B").
* **Gross Amount** (`gross_amount`, number, required): The total cost of the expense before tax.
* **Tax Rate** (`tax_rate`, number, required): The tax rate applied to the expense as a percentage.
* **Net Amount** (`net_amount`, number, calculated): The total cost of the expense after tax, calculated based on the values entered.
* **Tax** (`tax`, number, calculated): The tax amount calculated based on the values entered.
* **Form ID** (`form_id`, text, optional): A unique identifier for the form (e.g. a reference number).
* **User ID** (`user_id`, text, optional): The identifier of the user who submitted the form.

Note: The **Net Amount** and **Tax** fields are calculated automatically based on the values entered in the **Gross Amount** and **Tax Rate** fields.
