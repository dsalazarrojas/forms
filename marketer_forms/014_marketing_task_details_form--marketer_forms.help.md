# marketing_task_details_form - Help Guide
## Purpose
The marketing_task_details_form is used to collect information about marketing tasks, helping to track and manage their progress.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form fields and ensure you have all the necessary information ready.
2. Complete each field with the relevant details, starting from the first page (marketing_task_form).
3. Fill in the marketing_task_date and marketing_task_time fields with the date and time the task is scheduled to start or is currently running.
4. Write a detailed marketing_task_description of the task, including any relevant details or context.
5. Select the marketing_task_status to indicate the current status of the task (Not Started, In Progress, or Done).
6. If applicable, choose the marketing_task_priority level for the task (High, Medium, or Low).
7. Review and submit the form to save your changes.

## Field-by-Field Explanation
### marketing_task_form
* **marketing_task_form** (`marketing_task_form`,  note, required: false): This is the introductory page where you'll find a note about the form's purpose and usage.
### marketing_task_date
* **marketing_task_date** (`marketing_task_date`, date, required: false): Enter the date the task is scheduled to start or is currently running.
### marketing_task_time
* **marketing_task_time** (`marketing_task_time`, time, required: false): Enter the time the task is scheduled to start or is currently running.
### marketing_task_description
* **marketing_task_description** (`marketing_task_description`, text, required: false): Provide a detailed description of the task, including any relevant details or context.
### marketing_task_status
* **marketing_task_status** (`marketing_task_status`, select_one, required: true): Select the current status of the task (Not Started, In Progress, or Done).
### marketing_task_priority
* **marketing_task_priority** (`marketing_task_priority`, select_multiple, required: false): Choose the priority level for the task (High, Medium, or Low).
