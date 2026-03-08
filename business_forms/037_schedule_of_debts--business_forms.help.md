<thinking>
This form is used to schedule and track debts, such as loan payments, bills, or other financial obligations. It is a flexible form that allows users to input various details about the debt, including start and end dates, amounts, and frequency of payments. The form is designed to be completed by individuals who need to keep track of multiple debts with different characteristics.

To avoid duplicating data and ensure accurate tracking, it is recommended to create a new schedule for each unique debt. This form is not intended to be used for tracking multiple debts with the same characteristics.

When filling out this form, it is essential to ensure that all required fields are completed accurately to prevent errors in tracking and scheduling. The form will automatically adjust its layout based on the user's input, displaying only the relevant fields for the selected debt.

Note: This form is designed for users who are familiar with the concept of scheduling and tracking financial obligations. If you are unsure about any field or its purpose, please contact the form administrator for assistance.
</thinking>

# schedule_of_debts - Help Guide
## Purpose
The "Schedule of Debts" form is used to schedule and track debts, such as loan payments, bills, or other financial obligations.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of debt you wish to schedule by selecting "Yes" or "No" in the "Frequency" field.
2. If you selected "Yes" in the "Frequency" field, fill in the "Start Date" and "End Date" fields with the relevant dates.
3. If you selected "No" in the "Frequency" field, fill in the "Amount" field with the amount of the debt.
4. If you selected "Yes" in the "Frequency" field and the debt has a specific frequency (e.g., monthly), fill in the "Frequency Other" field with the frequency (e.g., monthly).
5. If you selected "Yes" in the "Frequency" field and the debt has a specific frequency, fill in the "Amount Other" field with the amount (e.g., $100).
6. If you selected "Yes" in the "Frequency" field and the debt has a specific frequency, fill in the "End Date" field with the end date of the debt.

## Field-by-Field Explanation
* **Schedule of Debts** (`schedule_of_debts`, `text`, required): This is the main field to select the type of debt you wish to schedule.
* **Start Date** (`start_date`, `date`, required): Fill in the start date of the debt.
* **End Date** (`end_date`, `date`, required): Fill in the end date of the debt.
* **Amount** (`amount`, `number`, required): Fill in the amount of the debt.
* **Frequency** (`frequency`, `select_one`, required): Select "Yes" or "No" to indicate if the debt has a specific frequency.
* **Frequency Other** (`frequency_other`, `text`, optional): Fill in the frequency of the debt if it is not one of the standard frequencies (e.g., monthly).
* **Amount Other** (`amount_other`, `text`, optional): Fill in the amount of the debt if it is not a standard amount.
* **End Date 2** (`end_date_2`, `date`, optional): Fill in the end date of the debt if it has a specific end date.
* **Start Date 2** (`start_date_2`, `text`, optional): Fill in the start date of the debt if it has a specific start date.
