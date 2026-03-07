<thinking>...</thinking>

# Work Order Close Out Form - Help Guide

## Purpose
This form is used to close out a work order, capturing important information about the status and outcome of the order. It helps to ensure accurate record-keeping and provides a clear view of the order's completion.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out all required fields. While this form is not strictly enforcing field requirements, it's essential to provide accurate information for accurate record-keeping.
2. Choose the correct job status from the available options. This will indicate the current state of the work order.
3. Enter the total number of hours worked on the work order, if applicable.
4. If materials were used during the work order, list them in the "Materials Used" field.
5. Enter the total cost of the work order, if applicable.
6. Provide any additional notes about the work order in the "Notes" field.

## Field-by-Field Explanation

* **Work Order Close Out** (`work_order_close_out`, text, optional):
	+ Enter a brief description of the work order being closed out.
* **Job Status** (`job_status`, select_one, optional):
	+ Select the current status of the work order from the available options:
		- Active: The work order is currently active and being worked on.
		- Complete: The work order has been completed.
		- Cancelled: The work order has been cancelled.
* **Hours Worked** (`hours_worked`, number, optional):
	+ Enter the total number of hours worked on the work order.
* **Materials Used** (`materials_used`, text, optional):
	+ List any materials used during the work order.
* **Total Cost** (`total_cost`, number, optional):
	+ Enter the total cost of the work order.
* **Notes** (`notes`, note, optional):
	+ Provide any additional notes or comments about the work order.

## Tips
- Make sure to double-check the job status to ensure accuracy.
- Be as specific as possible when listing materials used and total cost.
- Use the "Notes" field to provide any additional context or information about the work order that may not be captured in other fields.
