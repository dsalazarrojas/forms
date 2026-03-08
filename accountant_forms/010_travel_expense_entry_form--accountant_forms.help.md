# travel_expense_entry_form - Help Guide
## Purpose
The travel expense entry form is used to record and track business-related travel expenses for employees.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if this trip was for business or personal use. Select either "Yes" or "No" from the "business_trips" field.
2. Enter the amount of the expense in the "expense_amount" field.
3. Enter the start date of the trip in the "trip_start_date" field.
4. Select the type of expense (e.g. Hotel, Food, Transportation) from the "expense_type" field.
5. If you selected "Other" as the expense type, enter a brief description in the "expense_description" field.
6. Mark if the expense was reimbursed or not by the "expense_reimbursed" field.
7. Enter the date the expense was reimbursed in the "expense_reimbursed_date" field, if applicable.
8. Enter any notes about the expense in the "travel_expense_entry_form_notes" field.
9. Select the tool that was used during the trip from the "assigned_tool" field.
10. Enter a name for the output file in the "output_file_name" field.

## Field-by-Field Explanation
* **business_trips** (`Yes`, `No`, required: `false`): Select "Yes" if this trip was for business use, or "No" if it was for personal use.
* **expense_amount** (`number`, required: `false`): Enter the total amount of the expense.
* **trip_start_date** (`date`, required: `false`): Enter the start date of the trip.
* **expense_type** (Hotel, Food, Transportation, required: `false`): Select the type of expense (e.g. Hotel, Food, Transportation).
* **other_expense_type** (`text`, required: `false`): Enter a brief description of the expense type if it is not listed above.
* **expense_description** (`text`, required: `false`): Enter a brief description of the expense.
* **expense_date** (`date`, required: `false`): Enter the date the expense was incurred.
* **expense_reimbursed** (`Yes`, `No`, required: `false`): Mark whether the expense was reimbursed or not.
* **other_expense_reimbursed** (`text`, required: `false`): Enter a brief description of why the expense was not reimbursed, if applicable.
* **expense_reimbursed_date** (`date`, required: `false`): Enter the date the expense was reimbursed, if applicable.
* **travel_expense_entry_form_notes** (`note`, required: `false`): Enter any notes about the expense.
* **assigned_tool** (chatjimmy, Other, required: `false`): Select the tool that was used during the trip.
* **output_file_name** (`text`, required: `false`): Enter a name for the output file.
