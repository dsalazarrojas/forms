# employee_retention_survey_form - Help Guide
## Purpose
The **employee_retention_survey_form** is a tool designed to collect employee feedback on various aspects of their job roles and work environment. By completing this form, you'll help the company understand your concerns, preferences, and suggestions for improvement.

## How To Complete This Form

1. Select the **Employee** dropdown to choose your name as listed in the company database.
2. Select the **Department** dropdown to choose your department.
3. Check the box next to **Manager** if you report directly to the person who will review this form.
4. For **What is your job satisfaction level**, choose your level of satisfaction with your current role.
5. For **How do you feel about your work environment?**, select all that apply.
6. For **How satisfied are you with your pay?**, choose how satisfied you are with your compensation.
7. For **Overall satisfaction with company policies?**, choose your level of satisfaction.
8. For **How likely is it that you will stay with this company?**, select your likelihood of staying.
9. For **What do you like/dislike about your job?**, provide a brief description of your positive and negative aspects of your job.
10. For **What is your job role in the company?**, describe your job title and responsibilities.
11. For **How can we improve this form?**, suggest any additional questions or features that you think would enhance the survey.

## Field-by-Field Explanation

* **Employee** (`employee_id`, Number, Required): Choose your name as listed in the company database.
* **Department** (`department_id`, Select One, Required): Select your department for this form.
* **Manager** (`manager_id`, Select Multiple, Optional): Check if you report directly to the person who will review this form.
* **What is your job satisfaction level** (`question1`, Select One, Required): Rate your overall satisfaction with your job role.
* **How do you feel about your work environment?** (`question2`, Select Multiple, Required): Select all that apply regarding your work environment.
* **How satisfied are you with your pay?** (`question3`, Select One, Required): Rate your satisfaction with your compensation.
* **Overall satisfaction with company policies?** (`question4`, Select One, Required): Rate your satisfaction with company policies.
* **How likely is it that you will stay with this company?** (`question5`, Select One, Required): Select your likelihood of staying with the company.
* **What do you like/dislike about your job?** (`question6`, Text, Required): Provide a brief description of your positive and negative aspects of your job.
* **What is your job role in the company?** (`question7`, Text, Required): Describe your job title and responsibilities.
* **How can we improve this form?** (`question8`, Text, Required): Suggest any additional questions or features that would enhance the survey.
