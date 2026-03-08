<thinking>
The purpose of the Weekly Expense Calculation Form is to collect information on individual expenses and categorize them for further analysis. It is essential to ensure that the form is filled out for the correct week of the month to accurately track expenses. Please confirm the start date of the week before proceeding.
</thinking>

# Weekly Expense Calculation Form - Help Guide
## Purpose
The Weekly Expense Calculation Form is used to collect and categorize individual expenses for further analysis and tracking.

## How To Complete This Form
To complete this form, follow these steps:
1. Ensure that the start date of the week matches the actual week you are reporting expenses for.
2. Select the category of the expense from the provided options (Food, Transportation, Rent, Entertainment, or Miscellaneous).
3. Enter the expense amount in the Expense field.
4. If you have a weekly budget, enter it in the Weekly Budget field.
5. Calculate the Total Expenses by adding up all individual expenses.
6. Write a brief summary of your expenses in the Weekly Summary field.
7. Add any additional notes regarding your expenses in the Notes field.
8. If you have an email address, enter it in the Email field for contact purposes.
9. Enter your phone number in the Phone field for further contact.

## Field-by-Field Explanation
* **Weekly Start Date** (`week_start_date`, `date`, required: false): Enter the start date of the week you are reporting expenses for (e.g., 2024-01-01).
* **Category** (`category`, `select_one`, required: true): Select the category that best fits your expense (e.g., Food).
* **Expense** (`expense`, `number`, required: false): Enter the amount of your expense (e.g., 15.99).
* **Weekly Budget** (`weekly_budget`, `number`, required: false): Enter your weekly budget amount (e.g., 100.00).
* **Total Expenses** (`total_expenses`, `number`, required: false): Calculated by adding up all individual expenses.
* **Weekly Summary** (`weekly_summary`, `text`, required: false): Briefly describe your expenses in this field (e.g., "Dined out twice this week").
* **Notes** (`notes`, `note`, required: false): Add any additional notes regarding your expenses.
* **Email** (`email`, `email`, required: false): Enter your email address for contact purposes.
* **Phone** (`phone`, `text`, required: false): Enter your phone number for further contact.
* **Confirm Email** (`confirm_email`, `email`, required: false): Re-enter your email address for verification purposes.
