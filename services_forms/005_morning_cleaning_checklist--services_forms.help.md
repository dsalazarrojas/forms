<thinking> 
  The purpose of this form is to provide a comprehensive checklist for morning cleaning tasks, allowing users to track and manage their tasks efficiently. The form is used to record tasks that need to be performed, the people assigned to perform them, and other relevant details such as start and end times, locations, and tools required. It appears to be a generic form and does not have any specific business logic that would indicate it's for a specific team or group. It's possible that this form is a general template for any cleaning tasks that may need to be performed in the morning. The form includes fields for various details such as task status, assigned to, and additional notes, which could indicate that it's a dynamic form that allows users to customize the task according to their specific needs. Overall, this form is likely used to ensure that morning cleaning tasks are properly managed and recorded, and could be useful for anyone who needs to keep track of these tasks. I will now proceed to create the user-facing help guide for this form.</thinking>

# Morning Cleaning Checklist - Help Guide

## Purpose
The Morning Cleaning Checklist is a form used to record and manage morning cleaning tasks. It helps users track tasks, assign them to specific individuals, and keep track of progress.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the tasks to be performed in the morning under "morning_tasks".
2. Select the status of the task under "daily_tasks" - "True" for tasks that need to be performed daily and "False" for tasks that do not.
3. Assign the task to a specific person or team under "assigned_to".
4. Enter the start and end times for the task under "start_time" and "end_time", respectively.
5. Specify the location where the task will be performed under "location".
6. Enter any additional notes under "notes".
7. Select the tool assigned for the task under "assigned_tool".
8. Enter the name of the person who created this task under "created_by".
9. Enter the name of the person who updated this task under "updated_by".
10. Select the date when this task was created under "created_at".
11. Select the date when this task was updated under "updated_at".
12. Select the date when this task was completed under "completed_at".
13. Enter the name of the person who completed this task under "completed_by".
14. Select the person or team assigned to the task under "assigned_to_2".
15. Enter any details about the tool used for the task under "tool_details".
16. Select the status of the task under "task_status".
17. Enter any additional notes under "additional_notes".

## Field-by-Field Explanation
* **morning_tasks** (`morning_tasks`, text, required/optional): Enter a brief description of the task to be performed in the morning.
* **daily_tasks** (`daily_tasks`, select_multiple, required/optional): Select "True" if the task is performed daily, and "False" if it is not.
* **assigned_to** (`assigned_to`, select_one, required/optional): Select the person or team assigned to perform this task.
* **start_time** (`start_time`, time, required/optional): Enter the start time for the task.
* **end_time** (`end_time`, time, required/optional): Enter the end time for the task.
* **location** (`location`, text, required/optional): Enter the location where the task will be performed.
* **notes** (`notes`, note, required/optional): Enter any additional notes about the task.
* **assigned_tool** (`assigned_tool`, select_one, required/optional): Select the tool assigned for the task.
* **created_by** (`created_by`, text, required/optional): Enter the name of the person who created this task.
* **updated_by** (`updated_by`, text, required/optional): Enter the name of the person who updated this task.
* **created_at** (`created_at`, date, required/optional): Select the date when this task was created.
* **updated_at** (`updated_at`, date, required/optional): Select the date when this task was updated.
* **completed_at** (`completed_at`, date, required/optional): Select the date when this task was completed.
* **completed_by** (`completed_by`, text, required/optional): Enter the name of the person who completed this task.
* **assigned_to_2** (`assigned_to_2`, select_one, required/optional): Select the person or team assigned to the task.
* **tool_details** (`tool_details`, text, required/optional): Enter any details about the tool used for the task.
* **task_status** (`task_status`, select_one, required/optional): Select the status of the task - "Pending", "Completed", or "Cancelled".
* **additional_notes** (`additional_notes`, note, required/optional): Enter any additional notes about the task.
