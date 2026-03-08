# Agile Work Item Details Form - Help Guide
## Purpose
The Agile Work Item Details Form is used to collect and track information about specific work items in an Agile project management context.

## How To Complete This Form
1. Enter the unique identifier for the work item in the "Work Item ID" field.
2. Provide a brief title for the work item in the "Work Item Title" field.
3. Select the type of work item from the list of options in the "Work Item Type" field.
4. Enter the name of the project the work item belongs to in the "Project Name" field.
5. If applicable, enter the sprint or iteration the work item is assigned to in the "Sprint/Iteration" field.
6. Enter the name of the person assigned to this work item in the "Assignee Name" field.
7. Provide a detailed description of the work item in the "Work Item Description" field.
8. Define the acceptance criteria for this work item in the "Acceptance Criteria" field.
9. Select the priority level of this work item from the list of options in the "Priority Level" field.
10. Enter the estimated effort for this work item in "Story Points/Effort" field.
11. Provide an update on the status of this work item, including the date of the update, in the "Status Update" field.
12. Enter the percentage of completion for this work item in the "Progress Percentage" field.
13. List any impediments or blockers affecting this work item in the "Impediments/Blockers" field.
14. List any work items or tasks this item depends on in the "Upstream Dependencies" field.
15. List any work items or tasks that depend on this item in the "Downstream Dependencies" field.
16. Describe any changes being requested for this work item in the "Change Request Description" field.
17. Select the priority level for the requested changes from the list of options in the "Change Priority" field.
18. Enter the name of the person requesting changes in the "Requested By" field.
19. Add any additional notes or information about this work item in the "Additional Notes" field.

## Field-by-Field Explanation

* **Work Item ID** (`work_item_id`, text, required): Enter the unique identifier for the work item.
* **Work Item Title** (`work_item_title`, text, required): Provide a brief title for the work item.
* **Work Item Type** (`work_item_type`, select_one, required): Select the type of work item.
* **Project Name** (`project_name`, text, required): Enter the name of the project this work item belongs to.
* **Sprint/Iteration** (`sprint_iteration`, text, optional): If applicable, enter the sprint or iteration this work item is assigned to.
* **Assignee Name** (`assignee_name`, text, optional): Enter the name of the person assigned to this work item.
* **Work Item Description** (`work_item_description`, text, required): Provide a detailed description of the work item.
* **Acceptance Criteria** (`acceptance_criteria`, text, optional): Define the acceptance criteria for this work item.
* **Priority Level** (`priority_level`, select_one, required): Select the priority level of this work item.
* **Story Points/Effort** (`story_points_effort`, number, optional): Enter the estimated effort for this work item (in story points or hours).
* **Current Status** (`current_status`, select_one, required): Select the current status of the work item.
* **Status Update Date** (`status_update_date`, date, required): Enter the date of this status update.
* **Progress Percentage** (`progress_percentage`, number, optional): Enter the percentage of completion for this work item.
* **Impediments/Blockers** (`impediments_blockers`, text, optional): List any impediments or blockers affecting this work item.
* **Upstream Dependencies** (`upstream_dependencies`, text, optional): List any work items or tasks that this item depends on.
* **Downstream Dependencies** (`downstream_dependencies`, text, optional): List any work items or tasks that depend on this item.
* **Change Request Description** (`change_request_description`, text, optional): Describe any changes being requested for this work item.
* **Change Priority** (`change_priority`, select_one, optional): Select the priority level for the requested changes.
* **Requested By** (`requested_by`, text, optional): Enter the name of the person requesting changes.
* **Additional Notes** (`additional_notes`, text, optional): Add any additional notes or information about this work item.
