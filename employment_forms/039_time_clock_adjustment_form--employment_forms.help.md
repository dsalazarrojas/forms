<thinking>
This form is used to adjust employee time clock data. The purpose of this form is to correct or update employee work hours, dates, or project assignments. This form is typically used by employees to submit changes to their time clock records. To ensure that the form is filled out correctly, please review your employee data before submitting. If you've already submitted a time clock adjustment form for the same project or date, your new submission will replace the old one. Please be cautious of overwriting previous submissions if you've entered incorrect information. 
</thinking>

# Time Clock Adjustment Form - Help Guide
## Purpose
The Time Clock Adjustment Form is used to correct or update employee time clock data, including work hours, dates, and project assignments.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Review your employee data carefully before submitting this form.
2. Fill out the form completely and accurately.
3. Enter your employee name.
4. Enter the start and end time of your work period.
5. Select the date of your work period.
6. Choose whether you are assigned to a project or not.
7. Select any projects you are working on from the list.
8. Enter your total hours worked.
9. Add any additional notes about your work period.
10. Submit the form.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Please enter your employee name.
* **Start Time** (`start_time`, time, required): Enter the start time of your work period.
* **End Time** (`end_time`, time, required): Enter the end time of your work period.
* **Date** (`date`, date, required): Select the date of your work period.
* **Project** (`project_id`, select_one, optional): Check if you are assigned to a project.
* **Project 1** (`project_option_1`, select_multiple, optional): Select any projects you are working on from the list.
* **Project 2** (`project_option_2`, select_multiple, optional): Select any additional projects you are working on from the list.
* **Project 3** (`project_option_3`, select_multiple, optional): Select any other projects you are working on from the list.
* **Employee Hours** (`employee_hours`, number, optional): Enter your total hours worked.
* **Notes** (`notes`, note, optional): Enter any additional comments about your work period.
* **Submit** (`submit`, text, optional): This field is not displayed to the user as it's a submit button.

## Tips
- Make sure to double-check your information before submitting the form to avoid overwriting previous submissions.
- If you've already submitted a time clock adjustment form for the same project or date, your new submission will replace the old one.
