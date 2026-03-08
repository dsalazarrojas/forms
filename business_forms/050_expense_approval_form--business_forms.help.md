<thinking>... internal logic: the form is for employees to report their work-related expenses, which will be reviewed and approved by managers or accounting staff. The form is optional, not mandatory. Users can skip fields if they're not necessary or if they're unsure about what information to provide. The form is meant to capture details about the expense, such as expense category, date, amount, and notes. Users can choose one of the provided options for expense category and approval status. Users do not need to worry about selecting an option for every field, they just need to fill out what they know or have on hand... </thinking>

# Expense Approval Form - Help Guide
## Purpose
This form is a tool for employees to report their work-related expenses to be reviewed and approved by managers or accounting staff. It is designed to capture relevant information about the expense, such as category, date, amount, and notes.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out the form with the required information. You can skip fields if you are unsure or if the information is not necessary.
* For fields marked as "optional", you can leave them blank if you prefer.
* Select one of the provided options for expense category and approval status if you know the correct information.
* Enter your expense date using the date format MM/DD/YY.

## Field-by-Field Explanation
* **Expense Approval Form** (`title`, `text`, required): This is the title of the form. This field is not editable.
* **Expense Details** (`expense_details`, `text`, optional): Provide a brief description of the expense, including what it was for and why it was incurred.
* **Expense Category** (`expense_category`, `select_multiple`, optional): Choose one of the provided options to select the category of the expense. This can be multiple categories, if necessary.
* **Expense Date** (`expense_date`, `date`, optional): Enter the date of the expense using the MM/DD/YY format.
* **Expense Amount** (`expense_amount`, `number`, optional): Enter the total amount of the expense.
* **Approval Status** (`approval_status`, `select_one`, optional): Choose one of the provided options to indicate the current status of the approval. This can be "Active" or "Inactive".
* **Notes** (`notes`, `note`, optional): Provide any additional information about the expense that may be helpful for the reviewer to know.
