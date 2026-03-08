<thinking>...</thinking>

The form "museum_visit_leave_form" is used to submit a leave request for a museum visit. The form is used to provide information about the user's visit to the museum, such as the date, time, and museum name, as well as their team's name and the manager's approval status. The form is not intended for repeated or duplicate submissions, so please make sure to fill it out only once for each museum visit. Please be accurate and complete in your submission to avoid any issues with your leave request.

# museum_visit_leave_form - Help Guide
## Purpose
The "museum_visit_leave_form" is used to submit a leave request for a museum visit.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date of your visit from the available options.
2. Choose the time of your visit from the available options.
3. Enter the name of the museum you plan to visit.
4. Enter the name of your team.
5. Select the status of your manager's approval (pending, approved, or rejected).
6. Provide a brief reason for your leave request (optional).
7. Add any additional comments or notes about your visit (optional).

## Field-by-Field Explanation
- **User Input** (`user_input`, `number`, required: false): This field is not used in this form.
- **Date** (`date`, `date`, required: false): Enter the date you plan to visit the museum.
- **Time** (`time`, `time`, required: false): Choose the time you plan to visit the museum.
- **Museum Name** (`museum_name`, `text`, required: false): Enter the name of the museum you plan to visit.
- **Team Name** (`team_name`, `text`, required: false): Enter the name of your team.
- **Manager Approval** (`manager_approval`, `select_one`, required: true): Select the status of your manager's approval (pending, approved, or rejected).
- **Reason** (`reason`, `text`, required: false): Provide a brief reason for your leave request.
- **Comment** (`comment`, `note`, required: false): Add any additional comments or notes about your visit.

## Tips
* Make sure to fill out all required fields accurately and completely.
* Be sure to select the correct status of your manager's approval.
* If you have any additional comments or notes, use the "Comment" field to provide them.
* Please submit only one form per museum visit.
