# Absence Record Form Template - Help Guide
## Purpose
The Absence Record Form Template is designed to document employee absences, ensuring that all relevant information is captured for future reference and compliance purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the employee information section with the employee's name, ID, department, job title, and supervisor's name.
2. Enter the absence start and end dates accurately, considering the total days absent field.
3. Select the type of absence from the provided options.
4. Provide a brief description of the reason for absence.
5. Indicate if supporting documentation has been provided.
6. If applicable, fill out the approval section with the supervisor's name and date of approval.

## Field-by-Field Explanation

* **Employee full name** (`employee_name`, text, required): Enter the employee's full name.
* **Employee ID** (`employee_id`, text, required): Enter the employee's ID number.
* **Department** (`department`, text, required): Enter the employee's department.
* **Job title** (`job_title`, text, required): Enter the employee's job title.
* **Supervisor name** (`supervisor_name`, text, required): Enter the supervisor's name.
* **Absence start date** (`absence_date_from`, date, required): Enter the start date of the absence.
* **Absence end date** (`absence_date_to`, date, required): Enter the end date of the absence.
* **Total days absent** (`total_days_absent`, number, required): Enter the total number of days the employee was absent.
* **Type of absence** (`absence_type`, select_one, required): Select the type of absence from the provided options.
* **Reason for absence** (`absence_reason`, text, required): Provide a brief description of the reason for absence.
* **Has supporting documentation been provided** (`documentation_provided`, select_one, required): Indicate if supporting documentation has been provided.
* **Approved by** (`approved_by`, text, optional): Enter the supervisor's name if approval is required.
* **Date of approval** (`approval_date`, date, optional): Enter the date of approval if applicable.
* **Additional notes** (`notes`, text, optional): Enter any additional information or notes about the absence.
