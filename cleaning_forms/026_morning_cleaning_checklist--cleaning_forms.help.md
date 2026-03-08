# morning_cleaning_checklist - Help Guide
## Purpose
The morning cleaning checklist is used to track the status of morning cleaning tasks. It's a daily form used by staff members or custodians to report on the cleaning status of floors and rooms.
## How To Complete This Form
To complete this form, follow these steps:
1. Ensure you have the correct date for the form. The due date field should reflect the current day's date.
2. Check the "Is the floor cleaned?" field and select "True" if the floor is clean, "False" if it's not, or "Not Yet" if it's not clean and still being worked on.
3. If you're reporting on a room that was cleaned, select the room type from the "Which rooms are cleaned today?" field. You can select multiple rooms if applicable.
4. If you have any comments or notes about the cleaning process, enter them in the "Comments" field.
5. If you've assigned the cleaning task to someone else, select their name from the "Assigned To" field.
6. Enter the start and end times when the cleaning was completed.

## Field-by-Field Explanation

* **morning_cleaning_task** (`morning_cleaning_task`, text, optional): Enter the task name or a brief description of the task being completed.
* **Is the floor cleaned?** (`cleaning_status`, select_one, required): Select "True" if the floor is clean, "False" if it's not, or "Not Yet" if it's not clean and still being worked on.
* **Which rooms are cleaned today?** (`clean_rooms`, select_multiple, optional): Select one or more rooms that were cleaned.
* **Comments** (`comments`, note, optional): Enter any comments or notes about the cleaning process.
* **Assigned To** (`assigned_to`, select_one, optional): Select the name of the staff member or custodian assigned to complete the cleaning task.
* **Due Date** (`due_date`, date, optional): Enter the date that the form should be submitted by.
* **Start Time** (`start_time`, time, optional): Enter the start time of the cleaning task.
* **End Time** (`end_time`, time, optional): Enter the end time of the cleaning task.
