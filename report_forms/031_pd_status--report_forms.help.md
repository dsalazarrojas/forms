## pd_status - Help Guide

## Purpose
The "pd_status" form is used to report and track project status. It provides a simple and efficient way to update project status information.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out the **Report Date** field with the date you are reporting the project status.
* Select the **project_name** field to enter the name of the project you are reporting on.
* Choose the **pd_status** field to select the current status of the project from the options provided (e.g., status 1, status 2, or status 3).
* Select the **assigned_to** field to assign the project status to a team member (e.g., John, Jane, or Joe).
* Optionally, add any relevant notes or comments in the **pd_note** field.
* Enter the **pd_phone** field if you need to provide a phone number for further contact.
* If applicable, enter the **project_id** field with the project's unique ID number.

## Field-by-Field Explanation
### Report Date
 Report Date (`report_date`, date, required: false): Enter the date you are reporting the project status.

### project_name
Project Name (`project_name`, text, required: false): Enter the name of the project you are reporting on.

### pd_status
Project Status (`pd_status`, select_one, required: false): Select the current status of the project from the options provided.

### assigned_to
Assigned To (`assigned_to`, select_multiple, required: false): Select the team member responsible for the project status.

### pd_note
Project Note (`pd_note`, note, required: false): Add any relevant notes or comments about the project status.

### pd_phone
Phone Number (`pd_phone`, text, required: false): Enter a phone number for further contact.

### project_id
Project ID (`project_id`, number, required: false): Enter the project's unique ID number if applicable.
