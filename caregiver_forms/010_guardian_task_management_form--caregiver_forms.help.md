<thinking>
The Guardian Task Management Form is a critical tool for caregivers and coordinators to manage tasks assigned to caregivers. This form is used to track and update the status of tasks, ensuring that caregivers receive the necessary support and resources to provide high-quality care. The form is designed to be user-friendly and easy to navigate, with clear fields and labels that provide a clear understanding of the required information. Before completing the form, please ensure you have the necessary permissions to access and update task information.

Form fields should only be filled out by authorized personnel. Duplicate entries can lead to confusion and errors in task management. Please ensure that you are filling out the correct information for the assigned tasks.
</thinking>

# Guardian Task Management Form - Help Guide
## Purpose
The Guardian Task Management Form is a tool used to track and manage tasks assigned to caregivers. It helps caregivers and coordinators to efficiently manage tasks, ensure timely completions, and prioritize support.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the form with the required information for the assigned task.
2. Select the correct priority level of the task (High, Medium, or Low).
3. Choose the status of the task (Complete, In Progress, or Pending).
4. Add any relevant notes or comments about the task.
5. Enter the email address of the caregiver or coordinator assigned to the task.
6. Enter the phone number of the caregiver or coordinator assigned to the task.
7. Select the assignee of the task (Caregiver, Coordinator, or Guardian).
8. Choose whether the task is assigned to one or multiple people (Yes or No).
9. Set the due date of the task.
10. Submit the form once you have completed all the necessary fields.

## Field-by-Field Explanation
* **Guardian Task Form**: This is the main task title, briefly describe the task in a few words.
	+ (`guardian_task_form`, text, required)
* **Due Date**: The date when the task is due to be completed.
	+ (`due_date`, date, required)
* **Priority**: The level of importance or urgency of the task.
	+ (`priority`, select_one, required)
	+ Options: High, Medium, Low
* **Status**: The current state of the task.
	+ (`status`, select_one, required)
	+ Options: Complete, In Progress, Pending
* **Notes**: Additional comments or notes about the task.
	+ (`notes`, note, required)
* **Email**: The email address of the caregiver or coordinator assigned to the task.
	+ (`email`, email, required)
* **Phone Number**: The phone number of the caregiver or coordinator assigned to the task.
	+ (`phone_number`, text, required)
* **Assignee**: The person or entity assigned to the task.
	+ (`assignee`, select_one, required)
	+ Options: Caregiver, Coordinator, Guardian
* **Assigned To**: A list of people assigned to the task.
	+ (`assigned_to`, select_multiple, required)
	+ Options: Yes, No
* **Task Due Date**: The date when the task is due to be completed.
	+ (`task_due_date`, date, required)
