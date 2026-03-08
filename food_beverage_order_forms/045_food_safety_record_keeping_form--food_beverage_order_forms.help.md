# Food Safety Record Keeping Form - Help Guide

## Purpose
This form is used to record food safety checks and inspections, providing a structured way to track and document important information on food safety compliance.

## How To Complete This Form

To complete this form, please follow these steps:

1. Select "Inspections" to indicate if the food safety inspection was performed.
2. Select "Follow-ups" to indicate if follow-up actions are needed.
3. Choose the correct date and time of the inspection.
4. Enter any food safety notes or comments.
5. Confirm the assigned inspector's information, including their name and ID.
6. Sign and date the form as both the employee and supervisor.
7. Enter the food safety rating and score.
8. Enter any comments or feedback from the employee and supervisor.

## Field-by-Field Explanation

* **Food Safety Form** (`food_safety_form`, text, optional): Enter any general notes or comments related to the food safety inspection.
* **Inspections** (`inspections`, select_multiple, required): Select "Yes" to indicate that the food safety inspection was performed.
* **Follow-ups** (`follow_ups`, select_multiple, optional): Select "Yes" to indicate if follow-up actions are needed.
* **Supervisor Verification** (`supervisor_verification`, select_one, required): Select "Yes" to verify that the supervisor has reviewed the form.
* **Date of Inspection** (`date_of_inspection`, date, required): Enter the date of the inspection in MM/DD/YYYY format.
* **Time of Inspection** (`time_of_inspection`, time, required): Enter the time of the inspection in HH:MM AM/PM format.
* **Assigned Inspector** (`assigned_inspector`, text, required): Enter the name of the assigned inspector.
* **Employee Signature** (`employee_signature`, text, required): Sign and date the form as the employee.
* **Supervisor Signature** (`supervisor_signature`, text, optional): Sign and date the form as the supervisor.
* **Employee Name** (`employee_name`, text, required): Enter the employee's name.
* **Employee ID** (`employee_id`, number, optional): Enter the employee's ID number.
* **Supervisor Name** (`supervisor_name`, text, required): Enter the supervisor's name.
* **Supervisor ID** (`supervisor_id`, number, required): Enter the supervisor's ID number.
* **Shift Start Time** (`shift_start_time`, time, optional): Enter the start time of the shift.
* **Shift End Time** (`shift_end_time`, time, optional): Enter the end time of the shift.
* **Food Safety Rating** (`food_safety_rating`, number, required): Enter a rating of food safety on a scale of 1-5.
* **Food Safety Score** (`food_safety_score`, number, optional): Enter a score of food safety on a scale of 0-5.
* **Food Safety Comments** (`food_safety_comments`, text, optional): Enter any comments or feedback on food safety.
* **Employee Comments** (`employee_comments`, text, optional): Enter any comments or feedback from the employee.
* **Supervisor Comments** (`supervisor_comments`, text, optional): Enter any comments or feedback from the supervisor.
* **Assigned Tool** (`assigned_tool`, text, optional): Enter the ID of the tool assigned for the inspection.
* **Form IDs** (`form_ids`, text, required): Enter the IDs of completed forms.
* **Date Created** (`date_created`, date, required): The date the form was created.

Note: The fields marked as optional may still be relevant and should be completed if applicable.
