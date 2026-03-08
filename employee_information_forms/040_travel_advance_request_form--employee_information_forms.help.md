<thinking>... (internal reasoning block)

This form is designed to capture information for travel advance requests from employees. The form is used to gather details about the employee's travel plans, including their name, ID, business purpose, travel dates, destination, estimated expenses, department, form status, submitted and approved status, and any updates to the form status.

The form is likely to be used by employees to request travel advances for business trips, and the information collected will be used by management or HR to review and approve or reject the requests.

To avoid duplication of work and ensure that only one request is submitted per employee per trip, employees should check the form status before submitting their request and ensure that the request is not already in the 'Pending Review' status.

</thinking>

# travel_advance_request_form - Help Guide
## Purpose
The travel advance request form is used by employees to request travel advances for business trips.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your employee name.
2. Enter your employee ID.
3. Provide a brief description of the business purpose of your trip.
4. Enter the travel start date.
5. Enter the travel end date.
6. Specify the travel destination.
7. Estimate the travel expenses.
8. Select your department (e.g. Accounting, Finance, HR).
9. Indicate whether the form has been submitted (Yes/No) and whether it has been approved (Yes/No).
10. Enter any updates to the form status.

## Field-by-Field Explanation

* **Employee name** (`employee_name`, text, optional): Enter your name as it appears on your employee ID.
* **Employee ID** (`employee_id`, number, optional): Enter your employee ID number.
* **Business purpose** (`business_purpose`, text, optional): Briefly describe the reason for your business trip.
* **Travel start date** (`travel_start_date`, date, optional): Enter the start date of your trip.
* **Travel end date** (`travel_end_date`, date, optional): Enter the end date of your trip.
* **Travel destination** (`travel_destination`, text, optional): Specify the location of your business trip.
* **Estimated travel expenses** (`travel_expense_estimate`, number, optional): Estimate the cost of your trip.
* **Department** (`department`, select_one, optional): Select your department (e.g. Accounting, Finance, HR).
* **Form status** (`form_status`, select_one, optional): Select the current status of your form (Open, Closed, Pending Review).
* **Submitted by** (`submitted_by`, select_multiple, optional): Indicate whether you have submitted the form (Yes/No).
* **Approved by** (`approved_by`, select_multiple, optional): Indicate whether your form has been approved (Yes/No).
* **Form status update** (`form_status_update`, text, optional): Enter any updates to the form status.

## Tips

* Make sure to check the form status before submitting your request to avoid duplication.
* Only submit one request per employee per trip.
* Use the correct department selection from the options provided.
* Be accurate when estimating travel expenses.
* Enter any updates to the form status if necessary.
