# Employee Equipment Issue Form - Help Guide
## Purpose
This form is designed to collect information about equipment issues reported by employees. By filling out this form, employees can report any issues they encounter with their equipment, which will help us track and address these issues effectively.

## How To Complete This Form
1. Fill out the form with the required information as accurately as possible.
2. Select the correct issue type from the "Issue Type" dropdown menu.
3. Provide detailed information about the issue in the "Issue Details" field.
4. Attach any relevant documentation or photos as needed.

## Field-by-Field Explanation
* **Issue Date** (`issue_date`, `date`, required: false): Enter the date the issue occurred. This will help us track the timeline of the issue.
* **Employee ID** (`employee_id`, `number`, required: false): This is your employee ID number. If you're unsure, you can ask your supervisor for assistance.
* **Equipment Description** (`equipment_description`, `text`, required: false): Describe the equipment that is experiencing the issue.
* **Equipment Issue Reported By** (`issue_reported`, `text`, required: false): If you're reporting the issue on behalf of someone else, enter their name here.
* **Issue Type** (`issue_type`, `select_one`, required: true): Choose from the following options:
	+ Equipment malfunction
	+ Equipment damage
	+ Other
* **Issue Details** (`issue_details`, `text`, required: false): Provide as much detail as possible about the issue, including any steps taken to resolve it.
* **Attachment** (`attachment`, `text`, required: false): If you have any supporting documentation or photos, attach them here.
* **Issue Status** (`issue_status`, `select_one`, required: true): Choose from the following options:
	+ Pending
	+ Resolved
	+ Closed
* **Employee Name** (`employee_name`, `text`, required: false): If you're reporting the issue on behalf of someone else, enter their name here.
* **Issue Resolved By** (`issue_resolved_by`, `text`, required: false): If the issue was resolved, enter the name of who resolved it.

## Tips
* Make sure to fill out the form accurately and completely.
* If you're unsure about any information, ask your supervisor for assistance.
* If you're reporting an issue on behalf of someone else, make sure to enter their name and any other relevant information.
