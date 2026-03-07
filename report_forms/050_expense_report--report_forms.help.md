<thinking>
This form is designed to gather information about company expenses, and it's likely a part of a company's administrative or financial management system. The form might be used by employees to report their expenses for reimbursement or other business-related purposes. It's essential to ensure that only relevant and unique expenses are reported to avoid duplication.

Before filling out the form, please ensure you have all the necessary information and approvals required for reporting expenses.
</thinking>

# Expense Report - Help Guide

## Purpose
The Expense Report form is used to report company expenses, including travel, business-related costs, and other expenses incurred for work purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Expense Date** in the format of a date (mm/dd/yyyy).
2. Provide a brief **Description** of the expense.
3. Enter the **Expense Amount**.
4. If applicable, report the **Mileage Distance** and **Mileage Rate** for travel-related expenses.
5. Select one or multiple **Expense Categories** that relate to the expense (e.g., Travel, Entertainment, etc.).
6. Choose the **Expense Type** that best describes the nature of the expense (e.g., Business trip, Meeting, etc.).
7. Select the person to whom the expense was **Assigned To** (e.g., Department, Project, etc.).
8. Select who **Submitted** the expense report (e.g., Employee, Manager, etc.).
9. Optionally, enter the **Submit Date** if you know it.

## Field-by-Field Explanation

- **Expense Date** (expense_date, date, required: false): Enter the date when the expense occurred.
- **Description** (description, text, required: false): Provide a brief description of the expense.
- **Expense Amount** (expense_amount, number, required: false): Enter the total expense amount.
- **Mileage Distance** (mileage_distance, number, required: false): If applicable, enter the distance traveled for mileage-related expenses.
- **Mileage Rate** (mileage_rate, number, required: false): If applicable, enter the mileage rate applied to the expense.
- **Expense Category** (expense_category, select_multiple, required: false): Select one or multiple categories that relate to the expense (e.g., Travel, Entertainment, etc.).
- **Expense Type** (expense_type, select_one, required: true): Choose the type of expense that best describes the expense (e.g., Business trip, Meeting, etc.).
- **Assigned To** (assigned_to, select_one, required: true): Select the person or department that the expense was assigned to.
- **Submitted By** (submitted_by, select_one, required: true): Select the person who submitted the expense report.
- **Submit Date** (submit_date, date, required: false): Optionally, enter the date when the report was submitted.
