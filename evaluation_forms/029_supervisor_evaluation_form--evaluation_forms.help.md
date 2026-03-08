# Supervisor Evaluation Form - Help Guide
## Purpose
The Supervisor Evaluation Form is designed to help supervisors evaluate employee performance, providing a structured and systematic review process.

## How To Complete This Form

1. **Enter the employee's name**: Enter the name of the employee being evaluated in the `employee_name` field.
2. **Enter the employee's title**: Enter the employee's job title in the `employee_title` field.
3. **Select the evaluation date**: Select the date of the evaluation in the `evaluation_date` field.
4. **Select the evaluation time**: Select the time of the evaluation in the `evaluation_time` field.
5. **Enter the evaluation location**: Enter the location of the evaluation in the `evaluation_location` field.
6. **Provide supervisor comments**: Enter any comments or feedback from the supervisor in the `supervisor_comments` field.
7. **Provide employee comments**: Enter any comments or feedback from the employee in the `employee_comments` field.
8. **Choose the evaluation outcome**: Select the evaluation outcome from the options:
	* Unsatisfactory
	* Satisfactory
	* Needs Improvement
9. **Provide additional outcome comments**: If the evaluation outcome is "Needs Improvement", enter any additional comments in the `evaluation_outcome_other` field.
10. **Enter the employee ID**: Enter the employee's ID number in the `employee_id` field. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
11. **Enter the manager's name**: Enter the name of the employee's manager in the `manager_name` field. (Note: This field may not be relevant for all evaluators.)
12. **Enter the form ID**: Enter a unique identifier for the evaluation form in the `evaluation_form_id` field. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
13. **Select the form status**: Select the status of the evaluation form from the options:
	* Draft
	* Published
	* Deleted

## Field-by-Field Explanation

* **employee_name** (`employee_name`, text, optional): Enter the name of the employee being evaluated.
* **employee_title** (`employee_title`, text, optional): Enter the job title of the employee being evaluated.
* **evaluation_date** (`evaluation_date`, date, optional): Select the date of the evaluation.
* **evaluation_time** (`evaluation_time`, time, optional): Select the time of the evaluation.
* **evaluation_location** (`evaluation_location`, text, optional): Enter the location of the evaluation.
* **supervisor_comments** (`supervisor_comments`, text, optional): Enter any comments or feedback from the supervisor.
* **employee_comments** (`employee_comments`, text, optional): Enter any comments or feedback from the employee.
* **evaluation_outcome** (`evaluation_outcome`, select_one, optional): Select the evaluation outcome:
	+ Unsatisfactory
	+ Satisfactory
	+ Needs Improvement
* **evaluation_outcome_other** (`evaluation_outcome_other`, text, optional): Enter any additional comments if the evaluation outcome is "Needs Improvement".
* **employee_id** (`employee_id`, number, optional): Enter the employee's ID number. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **manager_name** (`manager_name`, text, optional): Enter the name of the employee's manager. (Note: This field may not be relevant for all evaluators.)
* **evaluation_form_id** (`evaluation_form_id`, text, optional): Enter a unique identifier for the evaluation form. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **date_submitted** (`date_submitted`, date, optional): Enter the date the form was submitted. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_status** (`evaluation_form_status`, select_multiple, optional): Select the status of the evaluation form:
	+ Draft
	+ Published
	+ Deleted
* **supervisor_id** (`supervisor_id`, number, optional): Enter the supervisor's ID number. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **supervisor_name** (`supervisor_name`, text, optional): Enter the name of the supervisor. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_assigned_to** (`evaluation_form_assigned_to`, text, optional): Enter the user to whom the evaluation form was assigned. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_on** (`evaluation_form_last_updated_on`, date, optional): Enter the date the evaluation form was last updated. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_by** (`evaluation_form_last_updated_by`, text, optional): Enter the user who last updated the evaluation form. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_time** (`evaluation_form_last_updated_time`, time, optional): Enter the time the evaluation form was last updated. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_user** (`evaluation_form_last_updated_user`, text, optional): Enter the user who last updated the evaluation form. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_ip** (`evaluation_form_last_updated_ip`, text, optional): Enter the IP address of the user who last updated the evaluation form. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_user_agent** (`evaluation_form_last_updated_user_agent`, text, optional): Enter the user agent of the user who last updated the evaluation form. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)
* **evaluation_form_last_updated_user_browser** (`evaluation_form_last_updated_user_browser`, text, optional): Enter the browser used by the user who last updated the evaluation form. (Note: This field is likely for internal system tracking purposes and can be skipped for most users.)

## Tips

* Make sure to fill out all required fields to ensure a complete evaluation.
* Use the "Needs Improvement" option for evaluations that require further development or support.
* Review and update the evaluation form regularly to track progress and changes.
* Use the system's tracking features to monitor and manage evaluations and employee performance.
