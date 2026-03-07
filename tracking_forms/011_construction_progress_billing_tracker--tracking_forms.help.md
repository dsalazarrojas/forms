<thinking>
This form is likely to be used for tracking progress and billing in the construction industry, specifically for submitting billings for projects. It is designed to collect key information about a project's progress and billing details, including the start and end dates of the billing period, the project's reference number or name, the total amount billed, the percentage of completion, any supporting documents attached, and the name of the certifying officer who approved the billing.
The form's purpose is to standardize the process of submitting billings and ensuring that all necessary information is collected and presented in a clear and consistent manner.
There is likely to be a central repository or database where the submitted form data will be stored, and this form will be one of the interfaces for users to interact with it.

</thinking>

# Construction Progress Billing Tracker - Help Guide

## Purpose
This form is used to track the progress and billings of construction projects. It is used to submit billing information, including the start and end dates of the billing period, project reference number, billed amount, percentage of completion, supporting documents, and certifying officer's name and approval date.

## How To Complete This Form

1. Fill in the `Project reference` field with the job number or project name.
2. Enter the start and end dates of the billing period in the `Billing period start date` and `Billing period end date` fields respectively.
3. Enter the `Billed amount` which is the total amount billed for this period.
4. If applicable, enter the percentage of completion in the `Percent complete` field.
5. Check the `Supporting documents provided note` field to indicate if any invoices or reports are attached separately.
6. Enter the name of the certifying officer who approved the submission in the `Certifying officer name` field.
7. If the submission has been approved, enter the approval date in the `Approval date` field.

## Field-by-Field Explanation

* **Billing period start date** (`billing_period_start`, `date`, required): The start date of the billing period for which the submission is being made.
* **Billing period end date** (`billing_period_end`, `date`, required): The end date of the billing period for which the submission is being made.
* **Project reference** (`project_reference`, `text`, required): The job number or name of the project being tracked.
* **Billed amount** (`billed_amount`, `number`, required): The total amount billed for this period.
* **Percent complete** (`percent_complete`, `number`, optional): The percentage of completion of the project to date.
* **Supporting documents provided note** (`supporting_documents`, `select_one`, optional): Check if supporting documents such as invoices or reports are attached separately. Options are `True` and `False`.
* **Certifying officer name** (`certifying_officer`, `text`, required): The name of the person approving the submission.
* **Approval date** (`approval_date`, `date`, optional): The date of approval for this submission.
