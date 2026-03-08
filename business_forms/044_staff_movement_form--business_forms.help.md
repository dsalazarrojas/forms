# Staff Movement Form - Help Guide
## Purpose
The Staff Movement Form is used to record the movement of staff members between different sites within the organization. This form captures essential information about the movement, including the date of the movement, the staff member involved, and the reason for the movement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the staff member's name and select the date of the movement from the calendar.
2. Indicate whether the staff member is moving from or to a site.
3. Select the reason for the movement from the provided options.
4. Enter any comments, if necessary.
5. If approved by the system or a user, indicate the date and time of approval.

## Field-by-Field Explanation

* **Form Title** (`form_title`, `text`, required/optional): Enter a short description of the staff movement.
	+ This field is used to provide a brief summary of the staff movement.
* **Date of Movement** (`date_of_movement`, `date`, required): Select the date of the staff movement from the calendar.
	+ This field is used to record the date of the staff movement.
* **From Site** (`from_site`, `select_one`, required): Indicate whether the staff member is moving from a site.
	+ This field indicates the site from which the staff member is moving.
* **To Site** (`to_site`, `select_one`, required): Indicate whether the staff member is moving to a site.
	+ This field indicates the site to which the staff member is moving.
* **Staff Member** (`staff_member`, `text`, required): Enter the staff member's name.
	+ This field is used to record the staff member's name.
* **Reason for Movement** (`reason_for_movement`, `select_multiple`, required): Select the reason for the staff movement from the provided options.
	+ This field is used to capture the reason for the staff movement.
* **Comments** (`comments`, `text`, optional): Enter any additional comments about the staff movement.
	+ This field is used for any additional information about the staff movement.
* **Approved By** (`approved_by`, `select_one`, optional): Indicate whether the staff movement was approved by the system or a user.
	+ This field indicates whether the staff movement was approved by the system or a user.
* **Date Approved** (`date_approved`, `date`, optional): Select the date of approval.
	+ This field is used to record the date of approval.
* **Time Approved** (`time_approved`, `time`, optional): Select the time of approval.
	+ This field is used to record the time of approval.
* **Approved By User** (`approved_by_user`, `text`, optional): Enter the name of the user who approved the staff movement.
	+ This field is used to record the name of the user who approved the staff movement.
* **Assigned To** (`assigned_to`, `text`, optional): Enter the name of the staff member or user assigned to the staff movement.
	+ This field is used to record the assigned staff member or user.
* **Comments Approved By** (`comments_approved_by`, `text`, optional): Enter any comments from the user who approved the staff movement.
	+ This field is used to record any comments from the user who approved the staff movement.
