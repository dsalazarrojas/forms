# Accounting Task Management Board - Help Guide
## Purpose
The Accounting Task Management Board form is a tool for tracking and managing accounting tasks. It helps users to create, track, and interact with tasks efficiently.

## How To Complete This Form
1. **Fill out the task details**: 
	- Enter a short descriptive title for the task in the "Task title" field.
	- Write a detailed description of the work to be done in the "Task description" field.
2. **Assign the task**: 
	- Select the person or team responsible for the task in the "Assigned to" field.
3. **Set the task priority and status**: 
	- Choose the task priority from the "Priority" field (Low, Medium, High, or Urgent).
	- Select the current status of the task from the "Status" field (Backlog, In progress, Blocked, or Completed).
4. **Add optional details (if applicable)**: 
	- If required, select the start date and target completion date in the "Start date" and "Due date" fields respectively.
	- Enter the estimated effort in hours in the "Estimated hours" field.
	- Categorize the task using labels in the "Tags" field.
	- Reference any relevant documents in the "Related documents" field.
	- Add progress updates in the "Progress updates" field.
	- Finalize the task by adding completion notes in the "Completion notes" field.

## Field-by-Field Explanation
* **Task title** (`task_title`, text, required): Enter a short descriptive title for the task.
* **Task description** (`task_description`, text, required): Write a detailed description of the work to be done.
* **Assigned to** (`assigned_to`, text, required): Select the person or team responsible for the task.
* **Priority** (`priority`, select_one, required): Choose the task priority (Low, Medium, High, or Urgent).
* **Status** (`status`, select_one, required): Select the current status of the task (Backlog, In progress, Blocked, or Completed).
* **Start date** (`start_date`, date, optional): If required, select the start date when work on the task should begin.
* **Due date** (`due_date`, date, optional): If required, select the target completion date.
* **Estimated hours** (`estimated_hours`, number, optional): Enter the estimated effort in hours.
* **Tags** (`tags`, text, optional): Categorize the task using labels.
* **Related documents** (`related_documents`, text, optional): Reference any relevant documents.
* **Progress updates** (`progress_updates`, text, optional): Add short updates on task progress.
* **Completion notes** (`completion_notes`, text, optional): Finalize the task by adding completion notes.

## Tips
- Ensure you provide accurate and up-to-date information about each task.
- Use labels to categorize similar tasks or projects.
- Track progress updates regularly to stay on top of task status.
- Set realistic due dates and estimated hours to avoid delays.
- Keep completion notes clear and concise for future reference.
