# Expense Reimbursement Form With Calculations - Help Guide
## Purpose
This form is designed to capture essential details for processing expense reimbursements related to business trips or activities. It will help the finance department to calculate and verify the total expense, reimbursed amount, and remaining amount accurately.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your company's name in the "Company" field.
2. Provide the date of the trip or activity in the "Date Of Trip" field.
3. Enter the total expense incurred during the trip or activity in the "Total Expense" field.
4. Select "Business" if the expense is for official business purposes or "Personal" if it's for personal use in the "Business Use" field.
5. Calculate the reimbursed amount will be auto-filled based on the "Total Expense" and "Business Use" fields.
6. The "Reimbursed Amount" field will display the calculated amount.
7. The "Remaining Amount" field will display the remaining amount after reimbursement.
8. Select the "Approval Status" accordingly based on the reimbursement process (Approved, Denied, or Pending).
9. Finally, select "Submit" to finish the form and send it for approval.

## Field-by-Field Explanation
* **Company** (`company`, `text`, **Required**): Enter the name of your company.
* **Date Of Trip** (`date_of_trip`, `date`, **Required**): Enter the date of the trip or activity in YYYY-MM-DD format.
* **Total Expense** (`total_expense`, `number`, **Required**): Enter the total expense incurred during the trip or activity.
* **Business Use** (`business_use`, `select_multiple`, **Required**): Select "Business" if the expense is for official business purposes or "Personal" if it's for personal use.
* **Calculated Total** (`calculated_total`, `number`, **Required**): This field will display the auto-calculated total based on the "Total Expense" and "Business Use" fields.
* **Reimbursed Amount** (`reimbursed_amount`, `number`, **Required**): This field will display the calculated amount after reimbursement.
* **Remaining Amount** (`remaining_amount`, `number`, **Required**): This field will display the remaining amount after reimbursement.
* **Approval Status** (`approval_status`, `select_one`, **Required**): Select "Approved", "Denied", or "Pending" based on the reimbursement process.
* **Submit** (`submit`, `select_one`, **Optional**): Select "Submit" to finish the form and send it for approval or "Cancel" to cancel the form submission.
