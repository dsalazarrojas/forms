# Community Paramedicine Reimbursement Request Form - Help Guide
## Purpose
This form is used to request reimbursement for expenses incurred by Community Paramedicine team members while performing their duties. The completed form will be reviewed and processed for approval.

## How To Complete This Form

1.  Review the form fields below and fill out the required information.
2.  For each field, provide the requested information in the space provided.

## Field-by-Field Explanation

*   **First Name** (`id: 2`, `name: first_name`, `type: text`, `required: true`): Enter your name as it appears on your identification.
*   **Last Name** (`id: 3`, `name: last_name`, `type: text`, `required: true`): Enter your last name as it appears on your identification.
*   **Employee ID** (`id: 4`, `name: employee_id`, `type: text`, `required: false`): If you are an employee, enter your employee ID number. If you are not an employee, please leave this field blank.
*   **Email Address** (`id: 5`, `name: email`, `type: email`, `required: true`): Enter your email address.
*   **Phone Number** (`id: 6`, `name: phone`, `type: text`, `required: true`): Enter your phone number.
*   **Department or Unit** (`id: 7`, `name: department`, `type: text`, `required: true`): Enter your department or unit name.
*   **Claim Details** (`id: 8`, `name: claim_details`, `type: note`, `required: false`): Briefly describe the purpose of the claim and any other necessary details.
*   **Date of Claim Submission** (`id: 9`, `name: claim_date`, `type: date`, `required: true`): Enter the date you submitted the claim.
*   **Date of Service** (`id: 10`, `name: service_date`, `type: date`, `required: true`): Enter the date the expense was incurred.
*   **Type of Expense** (`id: 11`, `name: expense_type`, `type: select_one`, `required: true`): Select one of the following options:
    +   Mileage
    +   Fuel
    +   Parking
    +   Tolls
    +   Vehicle Maintenance
    +   Medical Supplies
    +   Equipment
    +   Training
    +   Other
*   **Expense Description** (`id: 12`, `name: expense_description`, `type: text`, `required: true`): Provide a detailed description of the expense.
*   **Patient ID or Reference** (`id: 13`, `name: patient_id`, `type: text`, `required: false`): If this expense is related to patient care, enter the patient ID or reference number. If not, please leave this field blank.
*   **Service Location** (`id: 14`, `name: service_location`, `type: text`, `required: true`): Enter the location where the service was provided.
*   **Mileage Information** (`id: 15`, `name: mileage_details`, `type: note`, `required: false`): For mileage claims, provide any additional information.
*   **Starting Odometer Reading** (`id: 16`, `name: starting_mileage`, `type: number`, `required: false`): Enter the starting odometer reading.
*   **Ending Odometer Reading** (`id: 17`, `name: ending_mileage`, `type: number`, `required: false`): Enter the ending odometer reading.
*   **Total Miles** (`id: 18`, `name: total_miles`, `type: number`, `required: false`): Enter the total miles traveled.
*   **Amount Requested** (`id: 20`, `name: amount_requested`, `type: number`, `required: true`): Enter the total amount you are requesting.
*   **Receipts Attached** (`id: 21`, `name: receipt_attached`, `type: select_one`, `required: true`): Select one of the following options:
    +   Yes - All Receipts Included
    +   Yes - Partial Receipts
    +   No - Receipts Not Available
    +   Not Applicable
*   **Number of Receipts** (`id: 22`, `name: receipt_count`, `type: number`, `required: false`): Enter the number of receipts attached.
*   **Justification for Expense** (`id: 23`, `name: justification`, `type: text`, `required: true`): Describe why this expense was necessary.
*   **Supervisor Name** (`id: 24`, `name: supervisor_name`, `type: text`, `required: true`): Enter your supervisor's name for approval.
*   **Additional Notes** (`id: 25`, `name: additional_notes`, `type: text`, `required: false`): Enter any other relevant information.

## Tips

*   Please ensure that all fields are filled out completely and accurately to ensure proper processing.
*   For mileage claims, please provide the required information in "Mileage Information".
*   Please attach receipts if you are selecting "Yes - All Receipts Included" or "Yes - Partial Receipts".
