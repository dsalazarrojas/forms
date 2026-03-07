<thinking>
This form is intended to gather information about employee holiday requests. It is meant to be used by employees to submit their holiday requests for approval. Please ensure that only relevant information is submitted, as this form is designed to collect accurate and up-to-date details. To avoid duplication, please ensure that you have not already submitted a similar request before.
</thinking>

# Holiday Request Form - Help Guide
## Purpose
The Holiday Request Form is designed to gather information about employee holiday requests. It is a tool for employees to submit their holiday requests for approval to their superiors.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your employee details, including your name and any other relevant information.
2. Select the type of holiday you are requesting (e.g., Yes or No).
3. Provide the start and end dates of your holiday.
4. Specify the number of days off you are requesting.
5. Give a brief reason for your holiday request.
6. Summarize your holiday request in the "Holiday request" field.
7. Select the submission status of your request (e.g., Approved, Rejected, or Pending).

## Field-by-Field Explanation
* **holiday_request_form** (`holiday_request_form`, text, required: false): This is the main form field where you can type in your holiday request.
* **Employee details** (`employee_details`, text, required: false): Please provide your employee details, including your name and any other relevant information.
* **Holiday type** (`holiday_type`, select_multiple, required: false): Select the type of holiday you are requesting (e.g., Yes or No).
* **Start date** (`start_date`, date, required: false): Enter the start date of your holiday.
* **End date** (`end_date`, date, required: false): Enter the end date of your holiday.
* **Days off** (`days_off`, number, required: false): Specify the number of days off you are requesting.
* **Reason** (`reason`, text, required: false): Provide a brief reason for your holiday request.
* **Holiday request** (`holiday_request`, text, required: false): Summarize your holiday request in this field.
* **Submission Status** (`submission_status`, select_one, required: false): Select the submission status of your request (e.g., Approved, Rejected, or Pending).
* **Submitted by** (`submitted_by`, text, required: false): This field will be automatically populated with your name.
