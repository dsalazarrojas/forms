<thinking>
This form is designed to collect employment-related information from new employees. The purpose of this form is to gather necessary data for administrative and compliance purposes. It is intended for employees with a new job assignment or transfer, as well as those who require updates to their status or other employee details. This form should not be used for promotions or other changes to existing employment status. If you are unsure, please consult with a supervisor or HR representative before submitting this form.
</thinking>

# employment_terms_questionnaire - Help Guide
## Purpose
This form collects employment-related information from new employees for administrative and compliance purposes.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your employee ID number in the "new_employees_info_employee_id" field.
2. Select your department ID from the list of available options in the "new_employees_info_department_id" field.
3. Choose your current status from the list of options in the "new_employees_info_employee_status" field.
4. If you are eligible for overtime work, select "Yes" in the "overtime_work" field. If not, select "No".
5. If you are allowed to work from home, select "Yes" in the "work_from_home" field. If not, select "No".
6. If you have flexible time arrangements, select "Yes" in the "flex_time" field. If not, select "No".
7. Enter your job title in the "job_title" field.
8. Enter a brief description of your job in the "job_description" field.
9. If applicable, provide a list of job requirements in the "job_requirements" field.
10. Attach your resume as a note in the "resume" field.
11. Enter your Social Security number in the "ssn" field.
12. Enter your emergency contact person's name and relationship to you in the "emergency_contact" field.
13. If you have a driver's license, enter the number in the "drivers_license" field. This is optional.
14. If you have medical certifications, attach them as a note in the "medical_cert" field. This is optional.

## Field-by-Field Explanation

* **new_employees_info_employee_id** (`employee_id`, `number`, **required**): Enter your employee ID number.
* **new_employees_info_department_id** (`department_id`, `number`, **required**): Select your department ID from the list of available options.
* **new_employees_info_employee_status** (`employee_status`, `select_one`, **required**): Choose your current status from the list of options.
* **overtime_work** (`overtime_work`, `select_multiple`, **optional**): Select "Yes" if you are eligible for overtime work.
* **work_from_home** (`work_from_home`, `select_multiple`, **optional**): Select "Yes" if you are allowed to work from home.
* **flex_time** (`flex_time`, `select_multiple`, **optional**): Select "Yes" if you have flexible time arrangements.
* **job_title** (`job_title`, `text`, **required**): Enter your job title.
* **job_description** (`job_description`, `text`, **required**): Enter a brief description of your job.
* **job_requirements** (`job_requirements`, `text`, **optional**): Enter a list of job requirements if applicable.
* **resume** (`resume`, `note`, **required**): Attach your resume as a note.
* **ssn** (`ssn`, `number`, **required**): Enter your Social Security number.
* **emergency_contact** (`emergency_contact`, `text`, **required**): Enter your emergency contact person's name and relationship to you.
* **drivers_license** (`drivers_license`, `text`, **optional**): Enter your driver's license number if you have one.
* **medical_cert** (`medical_cert`, `note`, **optional**): Attach your medical certifications as a note if applicable.
