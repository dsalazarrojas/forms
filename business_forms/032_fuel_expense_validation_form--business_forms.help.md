# Fuel Expense Validation Form - Help Guide
## Purpose
The "Fuel Expense Validation Form" is a tool used to validate fuel expenses submitted by users for reimbursement.

## How To Complete This Form

1.  To start, ensure that you are logged in with the correct permissions to access this form.
2.  Review the form sections carefully and complete each field according to the instructions provided.
3.  Fill out the form with accurate and complete information about the fuel expense.

## Field-by-Field Explanation

*   **Company** (`company_id`, `text`, required: false): Enter the ID of the company submitting the fuel expense.
*   **Date Submitted** (`date_submitted`, `date`, required: false): Enter the date the fuel expense was submitted.
*   **Date Of Travel** (`date_of_travel`, `date`, required: false): Enter the date of the travel associated with the fuel expense.
*   **Purpose Of Travel** (`purpose_of_travel`, `text`, required: false): Enter a brief description of the purpose of the travel.
*   **Expense Description** (`expense_description`, `text`, required: false): Provide a detailed description of the fuel expense.
*   **Expense Amount** (`expense_amount`, `number`, required: false): Enter the total amount of the fuel expense.
*   **Total Expense Amount** (`total_expense_amount`, `number`, required: false): Enter the total amount of the fuel expense including taxes and other fees.
*   **Expense Frequency** (`expense_frequency`, `text`, required: false): Enter the frequency of the fuel expense.
*   **Expense Status** (`expense_status`, `select_one`, required: false):
    *   **Approved**: The fuel expense has been approved.
    *   **Denied**: The fuel expense has been denied.
    *   **Approved with conditions**: The fuel expense has been approved with conditions.
    *   **Pending**: The fuel expense is still pending.
*   **Expense Category** (`expense_category`, `select_multiple`, required: false):
    *   **Business Travel**: The fuel expense was for business travel.
    *   **Other**: The fuel expense was not for business travel.
*   **Assigned User ID** (`assigned_user_id`, `number`, required: false): Enter the ID of the user assigned to review the fuel expense.

## Tips

*   Ensure that all fields are filled out accurately and completely.
*   Review the form carefully before submitting it.
*   If you are unsure about any field, contact the designated reviewer or submitter for clarification.
