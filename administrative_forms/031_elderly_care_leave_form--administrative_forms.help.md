# Elderly Care Leave Form - Help Guide
## Purpose
The Elderly Care Leave Form is used to request leave for employees who need to care for an elderly family member or friend. 

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Employee ID in the "Employee ID" field.
2. In the "reason_for_care" field, explain in detail why you are requesting leave to care for an elderly family member or friend.
3. Select the start and end dates for your leave using the "start_date" and "end_date" fields.
4. Enter the start and end times for your leave using the "start_time" and "end_time" fields.
5. Provide any additional care details in the "care_details" field.
6. Select the care provider from the options in the "care_provider" field.
7. Enter the number of days you are requesting leave using the "days_requested" field.
8. Enter the date you expect to return to work using the "return_date" field.
9. Enter the time you expect to return to work using the "return_time" field.
10. Ensure that your manager has approved your leave by selecting "option 1" in the "manager_approval" field.
11. If applicable, select "Yes" or "No" in the "department" field.
11. Enter any additional comments or explanations in the "manager_note" field.

## Field-by-Field Explanation
* **Employee ID** (`employee_id`, `number`, `true`): Enter your unique employee ID number.
* **reason_for_care** (`reason_for_care`, `text`, `true`): Explain in detail why you are requesting leave to care for an elderly family member or friend.
* **start_date** (`start_date`, `date`, `true`): Select the date you will start your leave.
* **end_date** (`end_date`, `date`, `true`): Select the date you expect to return to work.
* **start_time** (`start_time`, `time`, `true`): Enter the start time for your leave.
* **end_time** (`end_time`, `time`, `true`): Enter the end time for your leave.
* **care_details** (`care_details`, `text`, `false`): Provide any additional care details, if necessary.
* **care_provider** (`care_provider`, `select_one`, `true`): Select the care provider from the options.
* **days_requested** (`days_requested`, `number`, `true`): Enter the number of days you are requesting leave.
* **return_date** (`return_date`, `date`, `true`): Enter the date you expect to return to work.
* **return_time** (`return_time`, `time`, `true`): Enter the time you expect to return to work.
* **manager_approval** (`manager_approval`, `select_multiple`, `true`): Ensure that your manager has approved your leave by selecting "option 1".
* **department** (`department`, `select_multiple`, `false`): If applicable, select "Yes" or "No" in the "department" field.
* **manager_note** (`manager_note`, `text`, `false`): Enter any additional comments or explanations, if necessary.
