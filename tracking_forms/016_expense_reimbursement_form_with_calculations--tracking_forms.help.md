# expense_reimbursement_form_with_calculations - Help Guide
## Purpose
The purpose of this form is to track and record expenses incurred during travel, allowing managers to keep track of expenses, reimbursement amounts, and approval status.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the **Expense Details** field with a brief description of your expenses.
2. Enter the **Date of Travel** in the designated date field.
3. Enter the **Total Expenses** amount.
4. Select whether **Reimbursable Expenses** are "Yes" or "No".
5. Enter the **Reimbursement Amount** (if applicable).
6. Select the current **Approval Status** (Active or Inactive).
7. Enter your **Manager Name** and **Department** (if applicable).
8. Record the **Approval Date** (if applicable).
9. Add any **Manager Notes** (if applicable).

## Field-by-Field Explanation
- **Expense Details** (`expense_details`, `text`, optional): Enter a brief description of your expenses.
- **Date of Travel** (`date_of_travel`, `date`, optional): Enter the date of your travel.
- **Total Expenses** (`total_expenses`, `number`, optional): Enter the total amount of expenses incurred.
- **Reimbursable Expenses** (`reimbursable_expenses`, `select_multiple`, optional): Select "Yes" if the expenses are reimbursable, "No" otherwise.
- **Reimbursement Amount** (`reimbursement_amount`, `number`, optional): Enter the amount to be reimbursed (if applicable).
- **Approval Status** (`approval_status`, `select_one`, optional): Select "Active" if the approval status is active, "Inactive" otherwise.
- **Manager Name** (`manager_name`, `text`, optional): Enter your manager's name (if applicable).
- **Department** (`department`, `text`, optional): Enter your department (if applicable).
- **Approval Date** (`approval_date`, `date`, optional): Record the approval date (if applicable).
- **Manager Notes** (`manager_notes`, `text`, optional): Add any additional notes for your manager (if applicable).
