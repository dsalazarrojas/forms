# Return To Work Discussion Form - Help Guide
## Purpose
The Return To Work Discussion Form is used to record discussions or decisions made during an employee's absence and return to work.

## How To Complete This Form
1. Fill out the form after discussing the matter with the employee.
2. Enter the employee's first name, last name, and date and time of return.
3. Select the department that the employee belongs to.
4. Select whether the employee was absent due to a valid reason or not.
5. Select whether the employee's supervisor was involved in the discussion.
6. Enter the reason for the employee's absence.
7. Enter any comments or comments for next action.
8. Select the date and time when the next action will be taken.
9. Select the user who will be assigned to follow up on the matter.
10. Record the date and time when the form was created and last updated.
11. Enter the name of the person who submitted the form.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter the employee's first name.
* **Last Name** (`last_name`, text, required): Enter the employee's last name.
* **Date of return** (`date_of_return`, date, required): Enter the date when the employee will return to work.
* **Time of return** (`time_of_return`, time, required): Enter the time when the employee will return to work.
* **Location** (`location`, text, required): Enter the location where the employee will be returning to work.
* **Department** (`department`, select_one, required): Select the department that the employee belongs to.
* **Supervisor** (`supervisor`, select_multiple, required): Select whether the employee's supervisor was involved in the discussion.
* **Manager** (`manager`, select_one, required): Select whether the employee's manager was involved in the discussion.
* **Reason for return** (`reason`, text, required): Enter the reason for the employee's absence.
* **Comments** (`comments`, text): Enter any comments or comments for next action.
* **E-mail** (`email`, email, required): Enter the employee's email address.
* **Phone** (`phone`, text): Enter the employee's phone number.
* **Assigned User** (`assigned_user`, select_one, required): Select the user who will be assigned to follow up on the matter.
* **Date of absence** (`date_of_absence`, date): Enter the date of the employee's absence.
* **Time of absence** (`time_of_absence`, time): Enter the time of the employee's absence.
* **Reason for absence** (`reason_for_absence`, text): Enter the reason for the employee's absence.
* **Comments for absence** (`comments_for_absence`, text): Enter any comments for the absence.
* **Next action** (`next_action`, select_one, required): Select the next action to be taken.
* **Comments for next action** (`comments_for_next_action`, text): Enter comments for the next action.
* **Assigned Date** (`assigned_date`, date): Enter the date assigned to follow up on the matter.
* **Assigned Time** (`assigned_time`, time): Enter the time assigned to follow up on the matter.
* **Assigned User** (`assigned_user`, select_one, required): Select the user assigned to follow up on the matter.
* **Created At** (`created_at`, note): Record the date and time when the form was created.
* **Updated At** (`updated_at`, note): Record the date and time when the form was last updated.
* **Submitted By** (`submitted_by`, text): Enter the name of the person who submitted the form.

Note: Some fields may not be required depending on the specific business logic and rules of the company.
