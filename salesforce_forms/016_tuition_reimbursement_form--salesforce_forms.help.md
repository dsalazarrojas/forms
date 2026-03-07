<thinking>
This form is used to collect information about employee education reimbursement. The purpose of this form is to gather details about the employee's education history, including their education type, level, start and end dates, and the amount of reimbursement requested. This form is likely used by HR or accounting departments to process and track employee reimbursement requests.

The form consists of 8 fields, and some of them are required while others are not. Before starting, ensure that all required fields are completed accurately to avoid any issues during processing.

The following explanations are based on the provided YAML fields, with an attempt to provide a clear and concise description of each field.
</thinking>

# Tuition Reimbursement Form - Help Guide
## Purpose
The Tuition Reimbursement Form is used to collect information about employee education reimbursement.

## How To Complete This Form
To complete this form accurately, follow these steps:

1. Fill in all required fields marked as required.
2. Ensure all dates are in the correct format (YYYY-MM-DD).

## Field-by-Field Explanation

* **employee_info** (`employee_info`, text, required/optional): Enter your employee ID or a brief description of yourself.
* **education_info** (`education_info`, text, required/optional): Describe the course or program you're seeking reimbursement for.
* **education_institution** (`education_institution`, text, required/optional): Enter the name of the institution where you attended the course or program.
* **tuition_type** (`tuition_type`, select_one, required/optional): Select the type of education (Undergraduate, Graduate, Certificate, or Other).
* **education_level** (`education_level`, select_multiple, required/optional): Select all relevant education levels (High School, Some College, Bachelor, Master, Doctoral).
* **start_date** (`start_date`, date, required/optional): Enter the start date of your education (in YYYY-MM-DD format).
* **end_date** (`end_date`, date, required/optional): Enter the end date of your education (in YYYY-MM-DD format).
* **tuition_amount** (`tuition_amount`, number, required/optional): Enter the amount of tuition you're seeking reimbursement for.
