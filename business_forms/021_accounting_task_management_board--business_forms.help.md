<thinking>
  This guide is intended to be used by end users who will be interacting with the Accounting Task Management Board form. This form is designed to be a centralized tool for managing and tracking tasks within the accounting department. It is essential to complete the form accurately to ensure proper task assignment, prioritization, and tracking. This guide will walk you through each field's purpose and required information to help you get started with the form.
</thinking>

# Accounting Task Management Board - Help Guide
## Purpose
The Accounting Task Management Board is a form designed to centralize task management and tracking within the accounting department. It allows users to create, assign, and monitor tasks, ensuring accurate progress and timely completion.

## How To Complete This Form
To complete the Accounting Task Management Board form, follow these steps:
1. Enter the Brief name of the task under "Task Title".
2. Assign the task to a team member by inputting their Name in the "Assigned To" field.
3. Select the task's priority level from the options: Low, Medium, High, or Critical.
4. Enter the Deadline for task completion under "Due Date".
5. Choose the task's current progress from the options: To Do, In Progress, Review, or Completed.
6. Select the functional area that the task belongs to from the options: Tax, Payroll, Audit, General Ledger, or Reporting.
7. Provide Detailed instructions or notes for the task under "Task Description".
8. Optionally, input the Estimated time to complete the task under "Estimated Hours".
9. If applicable, select the project phase from the options: Initial, Execution, or Closing.
10. Add any additional information under the note field, "Tracking Info --".
11. Check the box to notify the manager upon task completion or leave it unchecked if not required.

## Field-by-Field Explanation
* **Task Title** (`task_title`, text, required): Enter the brief name of the task.
* **Assigned To** (`assigned_to`, text, required): Input the name of the team member responsible for the task.
* **Task Priority** (`task_priority`, select_one, required): Select the task's priority level from the options: Low, Medium, High, or Critical.
* **Due Date** (`due_date`, date, required): Enter the deadline for task completion.
* **Task Status** (`task_status`, select_one, required): Choose the task's current progress from the options: To Do, In Progress, Review, or Completed.
* **Category** (`category`, select_one, required): Select the functional area that the task belongs to from the options: Tax, Payroll, Audit, General Ledger, or Reporting.
* **Task Description** (`task_description`, text, optional): Provide detailed instructions or notes for the task.
* **Estimated Hours** (`estimated_hours`, number, optional): Input the estimated time to complete the task.
* **Project Phase** (`project_phase`, select_one, optional): Select the project phase from the options: Initial, Execution, or Closing.
* **Tracking Info --** (`tracking_header`, note, optional): Add any additional information about the task.
* **Internal Task ID** (`internal_task_id`, text, optional): Input the internal task ID.
* **Notification Required?** (`notification_required`, select_one, required): Check the box to notify the manager upon task completion, or leave it unchecked if not required.
