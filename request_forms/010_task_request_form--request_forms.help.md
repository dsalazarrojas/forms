<thinking>
This is a form to collect task-related information, likely from a project management or help desk context, with fields for task title, details, due date, start and end time, requestor's contact information, task status, category, type, and other relevant metadata. Before using this form, ensure that the task being requested isn't already in progress or has been resolved elsewhere in the system. 
</thinking>

# Task Request Form - Help Guide
## Purpose
This form is designed to collect information about a task request. It is intended for use in a project management or help desk context to gather details about tasks and their related metadata.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Task Title**, which should clearly and concisely describe the task in question.
2. Provide **Task Details**, which can include any additional context or information about the task.
3. If applicable, select the **Due Date** when the task is expected to be completed.
4. Enter the **Start Time** and **End Time**, which should be the expected timeframes for the task's completion.
5. Enter **Requestor**'s contact information, which helps track and follow up with the person requesting the task.
6. Optionally, select whether the task was requested by **Assignee** (Yes/No) and who the task was **Assigned To** (if applicable).
7. Choose the **Task Priority** based on the task's importance or urgency.
8. Select the **Task Status** to indicate its current state (Active/Inactive).
9. Choose the **Task Category** and **Task Type** based on the task's type and scope.
10. Enter any **Description** of the task for context or reference.
11. Enter any relevant **Tags** to categorize the task.
12. If applicable, provide any **Attachments** related to the task.
13. Optionally, add **Comments** for further discussion or context.
14. If applicable, enter the **Assigned Tool** to be used for the task.
15. Enter the **Created By** person to record the task originator.
16. The form also captures the **Created**, **Updated** and **Updated By** timestamps to track the task's history.
17. Finally, provide the **Requestor's Email**, **Phone**, and **Company** contact information.
</thinking>

## Field-by-Field Explanation

* **Task Title** (`task_title`, text, required): A brief description of the task.
* **Task Details** (`task_details`, text, optional): Additional context or information about the task.
* **Due Date** (`due_date`, date, optional): The date by which the task is expected to be completed.
* **Start Time** (`start_time`, time, optional): The expected start time of the task.
* **End Time** (`end_time`, time, optional): The expected end time of the task.
* **Requestor** (`requestor`, text, optional): Information about the person requesting the task.
* **Assignee** (`assigned_user`, select one, optional): Whether the task was requested by the assignee (yes/no).
* **Task Priority** (`task_priority`, number, optional): The importance or urgency of the task.
* **Task Status** (`task_status`, select multiple, optional): The current state of the task (Active/Inactive).
* **Task Category** (`task_category`, select one, optional): The category of the task.
* **Task Type** (`task_type`, select one, optional): The type of the task.
* **Description** (`description`, text, optional): Additional context or reference for the task.
* **Tags** (`tags`, text, optional): Categorize the task with relevant keywords.
* **Attachments** (`attachments`, text, optional): Any related documents or files.
* **Comments** (`comments`, text, optional): Further discussion or context.
* **Assigned Tool** (`assigned_tool`, text, optional): The tool used for the task.
* **Created By** (`created_by`, text, optional): The person who created the task.
* **Created** (`created_at`, date, required): Timestamp when the task was created.
* **Updated** (`updated_at`, date, optional): The last update timestamp.
* **Updated By** (`updated_by`, text, optional): The person who updated the task.
* **Requestor's Email** (`requestor_email`, email, optional): Contact information for the person requesting the task.
* **Requestor's Phone** (`requestor_phone`, text, optional): Contact information for the person requesting the task.
* **Requestor's Company** (`requestor_company`, text, optional): Company associated with the person requesting the task.
