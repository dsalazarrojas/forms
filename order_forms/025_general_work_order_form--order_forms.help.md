# General Work Order Form - Help Guide
## Purpose
The General Work Order Form is used to collect and record information about work orders from customers. This form is essential for the maintenance team or customer service team to efficiently manage and track work orders.

## How To Complete This Form
To complete this form, follow these steps:

* Enter the unique work order number assigned to the task.
* Provide the customer's name and email address for communication.
* Enter the date the work order is due.
* Describe the task or job to be performed.
* List any materials needed to complete the task.
* Set the deadline for completion.
* Specify the person assigned to complete the task.
* Enter any additional comments about the task.
* Choose the current status of the work order (In Progress, Completed, or Canceled).
* Select the category of the work order (Order Forms, Service Forms, or Quote Forms).
* Choose the tool assigned to complete the task (chatjimmy or Other).
* Specify the priority level of the task (Low, Medium, or High).
* Enter the due date and start/end time for the task.
* Provide the project name and status.
* Enter the work order ID (if available).
* Record the person who created and updated the form.

## Field-by-Field Explanation
* **Work Order Number** (`work_order_number`, number, required): Enter a unique number assigned to the task.
* **Customer Name** (`customer_name`, text, not required): Enter the customer's name.
* **Customer Email** (`contact_email`, email, required): Enter the customer's email address for communication.
* **Work Order Date** (`work_order_date`, date, not required): Enter the date the work order is due.
* **Task Description** (`task_description`, text, not required): Describe the task or job to be performed.
* **Materials Needed** (`materials_needed`, text, not required): List any materials needed to complete the task.
* **Deadline** (`deadline`, date, not required): Set the deadline for completion.
* **Assigned To** (`assigned_to`, text, not required): Specify the person assigned to complete the task.
* **Comments** (`comments`, note, not required): Enter any additional comments about the task.
* **Status** (`work_order_status`, select_one, required): Choose the current status of the work order (In Progress, Completed, or Canceled).
* **Category** (`work_order_form_category`, select_one, required): Select the category of the work order (Order Forms, Service Forms, or Quote Forms).
* **Tool** (`assigned_tool`, select_one, required): Choose the tool assigned to complete the task (chatjimmy or Other).
* **Priority** (`work_order_priority`, select_one, required): Specify the priority level of the task (Low, Medium, or High).
* **Due Date** (`due_date`, date, not required): Enter the due date for the task.
* **Start Time** (`start_time`, time, not required): Enter the start time for the task.
* **End Time** (`end_time`, time, not required): Enter the end time for the task.
* **Location** (`location`, text, not required): Provide the location where the task will be completed.
* **Project Name** (`project_name`, text, not required): Enter the project name.
* **Project Status** (`project_status`, select_one, not required): Choose the project status (In Progress, Completed, or Canceled).
* **Work Order ID** (`work_order_id`, number, not required): Enter the work order ID (if available).
* **Created By** (`created_by`, text, not required): Record the person who created the form.
* **Created On** (`created_on`, date, not required): Record the date the form was created.
* **Updated By** (`updated_by`, text, not required): Record the person who updated the form.
* **Updated On** (`updated_on`, date, not required): Record the date the form was updated.

Note: Required fields are marked with `*`.
