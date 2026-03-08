# fuel_expense_reimbursement_intake_form - Help Guide
## Purpose
The fuel expense reimbursement form is used for submitting fuel-related expenses for reimbursement. This form collects relevant information about the expense, including date, mileage, and fuel type, to process your request.

## How To Complete This Form
1. Ensure you are submitting for a genuine fuel expense.
2. Choose the correct purpose for your fuel expense (Personal, Business, or Both).
3. Attach a receipt for your fuel expense.
4. Complete the form with your actual employee name and ID.
5. Select the department you belong to (if applicable).

## Field-by-Field Explanation
- **Fuel Date** (`fuel_expense_date`, date, required: false): This is the date of your fuel expense.
  - Please enter the date you purchased or used fuel for your expense.
- **Mileage** (`mileage`, number, required: false): This is the total mileage used for your expense.
  - Enter the total number of miles your vehicle was used for your fuel expense.
- **Odometer Reading** (`odometer_reading`, number, required: false): This is the odometer reading of your vehicle before and after the expense.
  - Enter the odometer reading before and after your fuel expense to calculate the mileage.
- **Fuel Type** (`fuel_type`, select_one, required: false): This is the type of fuel you used.
  - Choose the type of fuel you used for your expense (Gasoline, Diesel, or Alternative).
- **Amount** (`amount`, number, required: false): This is the amount spent on your fuel expense.
  - Enter the total amount spent on your fuel expense.
- **Purpose** (`purpose`, select_multiple, required: false): This is the purpose of your fuel expense.
  - Choose the purpose of your fuel expense (Personal, Business, or Both).
- **Reimbursement Request** (`reimbursement_request`, text, required: false): This is a request for reimbursement.
  - Briefly describe the expense you are requesting reimbursement for.
- **Receipt Attachment** (`receipt_attachment`, text, required: false): This is a receipt attachment for your expense.
  - Attach a receipt for your fuel expense.
- **Employee Name** (`employee_name`, text, required: false): This is your employee name.
  - Enter your actual employee name.
- **Employee ID** (`employee_id`, number, required: false): This is your employee ID.
  - Enter your actual employee ID.
- **Department** (`department`, select_multiple, required: false): This is the department you belong to.
  - If applicable, select the department you belong to (Human Resources, Operations, or Engineering).

Note: Some fields are not required, but please ensure you fill out all relevant fields for accurate processing of your reimbursement request.
