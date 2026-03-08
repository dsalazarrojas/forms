<thinking>
This form is designed to be a comprehensive evaluation tool for employees within the first 90 days of their employment. It's intended for managers or HR representatives to assess an employee's performance, provide feedback, and recommend action items for growth and development. This form ensures that all necessary information is gathered to make informed decisions about an employee's continued employment, potential extension of their probation period, or termination of their employment contract.
</thinking>

# 90 Day Employee Evaluation Form - Help Guide
## Purpose
The 90 Day Employee Evaluation Form is a structured assessment tool that helps managers and HR representatives evaluate an employee's performance during their first 90 days of employment. It provides a clear and concise way to gather feedback, identify areas of improvement, and make informed decisions about an employee's future.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's name, position, and hire date in the corresponding fields.
2. Select the evaluation date for the review.
3. Enter the evaluator's name and position.
4. Rate the employee's job knowledge, communication skills, productivity, teamwork, and punctuality using the provided scorecard (1-5).
5. Choose the overall outcome recommendation, which can be:
	* Continue employment
	* Extend probation
	* Terminate employment
	* Redeploy to a different role
6. Provide specific examples of the employee's strengths and areas needing improvement.
7. If necessary, recommend additional training or support for the employee.
8. Add any additional comments from the evaluator.

## Field-by-Field Explanation
* **Employee name** (`employee_name`, `text`, required): Enter the employee's first and last name.
* **Position / job title** (`position_title`, `text`, required): Enter the employee's job title or position.
* **Hire date** (`hire_date`, `date`, required): Enter the date the employee was hired.
* **Evaluation date** (`evaluation_date`, `date`, required): Enter the date of this review.
* **Evaluator name** (`evaluator_name`, `text`, required): Enter your name and position as the evaluator.
* **Job knowledge** (`job_knowledge_score`, `integer`, required): Rate the employee's job knowledge (1-5).
* **Communication skills** (`communication_score`, `integer`, required): Rate the employee's communication skills (1-5).
* **Productivity and output** (`productivity_score`, `integer`, required): Rate the employee's productivity and output (1-5).
* **Teamwork and collaboration** (`teamwork_score`, `integer`, required): Rate the employee's teamwork and collaboration (1-5).
* **Attendance and punctuality** (`punctuality_score`, `integer`, required): Rate the employee's attendance and punctuality (1-5).
* **Overall outcome recommendation** (`overall_recommendation`, `select_one`, required): Choose the most appropriate outcome from the provided options.
* **Key strengths observed** (`strengths_summary`, `text`, optional): Provide specific examples of the employee's strengths.
* **Areas needing improvement and plan** (`areas_for_improvement`, `text`, optional): Identify areas the employee needs to improve and suggest training or milestones for growth.
* **Recommended training or support** (`training_required`, `select_multiple`, optional): Select all relevant training or support options for the employee.
* **Additional evaluator comments** (`evaluator_comments`, `text`, optional): Add any additional comments from the evaluator.
