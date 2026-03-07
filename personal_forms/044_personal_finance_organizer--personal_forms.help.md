<thinking>
We're creating a help guide for the "personal_finance_organizer" form, which aims to assist users in organizing their personal finance data. To confirm, this form is intended to collect information related to income, expenses, savings goals, money priorities, income type, and additional notes or contact information.
</thinking>

# personal_finance_organizer - Help Guide
## Purpose
This form is designed to help you track your personal finance, including income, expenses, savings goals, and income type. It's a comprehensive tool to keep all your financial information in one place.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Income" field with your total income for the month/quarter/year.
2. Enter your total expenses under "Expenses."
3. Choose your savings goals from the "Savings Goals" dropdown list.
4. Select your money priorities by choosing multiple options from the "Money Priorities" dropdown list.
5. Indicate your income type by selecting "Yes" or "No" from the "Income Type" dropdown list.
6. Add any additional notes or comments in the "Notes" field.
7. Enter your email address under "Email" for contact information.
8. Provide your phone number in the "Phone" field for further contact.

## Field-by-Field Explanation
* **Income** (`income`, number, required/optional): Enter your total income for the current period.
* **Expenses** (`expenses`, number, required/optional): Record your total expenses for the current period.
* **Savings Goals** (`savings_goals`, select_one, required/optional): Choose one goal from the list to set your financial objective.
	+ Goal 1
	+ Goal 2
	+ Goal 3
* **Money Priorities** (`money_priorities`, select_multiple, required/optional): Select all applicable priorities from the list.
	+ Priority 1
	+ Priority 2
	+ Priority 3
* **Income Type** (`income_type`, select_multiple, required/optional): Indicate if your income type is "Yes" or "No".
	+ Yes
	+ No
* **Notes** (`notes`, note, required/optional): Add any additional comments or notes related to your financial data.
* **Email** (`email`, email, required/optional): Enter your email address for contact purposes.
* **Phone** (`phone`, text, required/optional): Enter your phone number for further contact.

## Tips
* Please ensure the "Income" and "Expenses" fields are accurate and up-to-date.
* Choose one or multiple priorities depending on your financial objectives.
* Review and update your "Savings Goals" and "Money Priorities" regularly to track your progress.
