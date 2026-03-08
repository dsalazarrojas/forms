# Purchase Approval Form - Help Guide
## Purpose
The Purchase Approval Form is used to collect information about an employee's purchase and obtain approval from their supervisor before the purchase is processed.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the Employee Name field with the name of the employee who made the purchase.
2. Enter the Purchase Date in the correct format (MM/DD/YYYY).
3. Enter the Purchase Amount, which should be a numerical value representing the cost of the purchase.
4. Briefly describe the Purchase Description in the text field.
5. If applicable, enter the Supervisor Name, which should be the name of the employee's supervisor.
6. Select 'Yes' or 'No' to indicate if the purchase has been approved by the supervisor.
7. If the purchase has been approved, enter the Approval Date in the correct format (MM/DD/YYYY).

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required: false): Enter the name of the employee who made the purchase.
* **Purchase Date** (`purchase_date`, date, required: false): Enter the date the purchase was made in the correct format (MM/DD/YYYY).
* **Purchase Amount** (`purchase_amount`, number, required: false): Enter the total cost of the purchase.
* **Purchase Description** (`purchase_description`, text, required: false): Briefly describe the purchase, including any relevant details.
* **Supervisor Name** (`supervisor_name`, text, required: false): Enter the name of the employee's supervisor, if applicable.
* **Approved By** (`approved_by`, select_one, required: false): Select 'Yes' if the purchase has been approved by the supervisor or 'No' otherwise.
* **Approval Date** (`approval_date`, date, required: false): Enter the date the purchase was approved, if applicable.
