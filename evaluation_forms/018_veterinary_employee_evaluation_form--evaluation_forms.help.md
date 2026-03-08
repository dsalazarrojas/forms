# Veterinary Employee Evaluation Form - Help Guide
## Purpose
The Veterinary Employee Evaluation Form is designed to help evaluate the performance of veterinary employees. It collects information about their work experience, job title, department, and overall performance. The form provides a space for comments and areas of improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's name in the "Employee Name" field.
2. Select the department the employee belongs to in the "Department" field.
3. Enter the employee's job title in the "Job Title" field.
4. Provide a brief description of the employee's work experience in the "Work Experience" field.
5. Enter the date of the evaluation in the "Evaluation Date" field.
6. Indicate whether the employee has been evaluated in the "Evaluation Period" field.
7. Assign a score out of 10 in the "Evaluation Score" field.
8. Provide comments about the employee's performance in the "Evaluation Comments" fields.
9. Select the overall rating of the employee's performance in the "Overall Rating" field.
10. Identify areas of improvement for the employee in the "Areas for Improvement" field.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter the name of the employee being evaluated.
* **Department** (`department`, select_one, required): Select the department the employee belongs to from the provided options.
* **Job Title** (`job_title`, text, required): Enter the employee's job title.
* **Work Experience** (`work_experience`, text, required): Provide a brief description of the employee's work experience.
* **Evaluation Date** (`evaluation_date`, date, required): Enter the date of the evaluation.
* **Evaluation Period** (`evaluation_period`, select_one, required): Indicate whether the employee has been evaluated.
* **Evaluation Score** (`evaluation_score`, number, required): Assign a score out of 10 for the employee's performance.
* **Overall Rating** (`overall_rating`, select_multiple, required): Select the overall rating of the employee's performance from the provided options.
* **Evaluation Comments** (`evaluation_comments`, note, optional): Provide comments about the employee's performance.
* **Areas for Improvement** (`areas_for_improvement`, note, optional): Identify areas of improvement for the employee.
* **Evaluation Comments 2-16** (`evaluation_comments_2-16`, note, optional): Provide additional comments about the employee's performance.
Note: Fields 2-16 are optional and provide additional space for comments.
