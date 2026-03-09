# Sample Work Order Form - Help Guide

## Purpose
The Sample Work Order Form is designed to gather information about a job or task assigned to a technician or staff member.

## How To Complete This Form

To complete the form, follow the steps below:

1. **Fill in the basic information**:
	* Enter the "Title" of the work order, which should briefly describe the job or task assigned.
	* Enter the "Customer Details", providing the customer's name, address, and other relevant information.
2. **Specify the job details**:
	* In the "Job Specification" field, enter a brief description of the job or task assigned.
3. **Schedule the job**:
	* Enter the "Job Date" when the job is expected to start and finish.
4. **Calculate costs**:
	* Enter the "Quantity of Materials" required for the job.
	* Enter an estimate of the "Estimated Cost" for the materials and labor involved.
	* Enter the "Labor Cost" for the job.
5. **Record job duration**:
	* Enter the "Number of Hours Spent" on the job.

## Field-by-Field Explanation

* **Customer Details** (`customer_details`, `text`, required: `false`)
	+ This field is for recording the customer's name, address, and other relevant information.
	+ Please enter accurate and legible information.
* **Job Specification** (`job_specification`, `text`, required: `false`)
	+ Provide a brief description of the job or task assigned to the technician or staff member.
	+ This will help the technician understand the requirements and deliver the job correctly.
* **Job Date** (`job_date`, `date`, required: `false`)
	+ Enter the date when the job is expected to start and finish.
	+ Use the format "YYYY-MM-DD" for the date.
* **Quantity of Materials** (`quantity_of_materials`, `text`, required: `false`)
	+ Enter the quantity of materials required for the job.
	+ This will help in calculating the total cost and resources needed.
* **Estimated Cost** (`estimated_cost`, `text`, required: `false`)
	+ Enter an estimate of the cost for the materials and labor involved.
	+ Use the format "X dollars".
* **Labor Cost** (`labor_cost`, `text`, required: `false`)
	+ Enter the labor cost for the job.
	+ Use the format "X dollars".
* **Number of Hours Spent** (`number_hours_spent`, `number`, required: `false`)
	+ Enter the number of hours spent on the job.
	+ This will help in recording the total time spent on the job.
* **Job Description** (`job_description`, `text`, required: `false`)
	+ Enter a brief description of the job or task assigned.
	+ This will help in creating a detailed record of the job.
* **Title** (`title`, `text`, required: `true`)
	+ Enter a brief title for the work order.
	+ This will help in quickly identifying the job.
* **Work Order Form** (`work_order_form`, `text`, required: `false`)
	+ Enter a brief summary of the work order.
	+ This will help in referencing the job later.

## Tips

* Please ensure that all required fields are filled out carefully.
* Use legible and accurate information for all fields.
* Review the form before submitting to ensure all details are correct.
