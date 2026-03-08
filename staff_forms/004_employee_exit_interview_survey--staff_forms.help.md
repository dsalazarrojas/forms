# employee_exit_interview_survey - Help Guide
## Purpose
This form is used to collect feedback from employees who are leaving the company. The information collected will help management understand the reasons behind their departure and identify areas for improvement.

## How To Complete This Form
To complete this form, please follow these steps:

1. Read the introduction to understand the purpose of the form.
2. Answer the questions regarding your reason for leaving the company.
3. Provide feedback on your job satisfaction, company culture, benefits, and communication.
4. Share your suggestions for improvement and future plans.
5. Provide comments on your experience and any other relevant information.

## Field-by-Field Explanation

* **Introduction** (1) (`intro`, `note`, required: false):
  This is a note field where you can introduce yourself and provide any necessary context for your answers.
* **Reason for Leaving** (2) (`reason_leaving`, `select_one`, required: false):
  Please select the reason why you are leaving the company. The options are:
  * Yes
  * No
* **Manager Leaving** (3) (`manager_leaving`, `select_one`, required: false):
  If your manager is leaving, please select 'Yes'. Otherwise, select 'No'.
* **Future Job** (4) (`future_job`, `text`, required: false):
  Please enter your future job title and company.
* **Company** (5) (`company`, `text`, required: false):
  Please enter the name of the company you are joining or where you will be working in the future.
* **Feedback** (6) (`feedback`, `text`, required: false):
  Please provide any feedback you have about your experience in the company.
* **Comments** (7) (`comments`, `text`, required: false):
  Please provide any additional comments or suggestions.
* **Suggestions** (8) (`suggestions`, `text`, required: false):
  Please provide any suggestions for improvement.
* **Manager Feedback** (9) (`manager_feedback`, `text`, required: false):
  Please provide feedback about your manager.
* **Future Manager** (10) (`future_manager`, `text`, required: false):
  Please enter the name of your future manager.
* **Company Culture** (11) (`company_culture`, `select_one`, required: false):
  Please select whether you think the company culture is positive or not.
* **Benefits** (12) (`benefits`, `select_multiple`, required: false):
  Please select the benefits you are leaving or would like to have:
  * Yes
  * No
* **Communication** (13) (`communication`, `select_multiple`, required: false):
  Please select the level of communication you experienced or would like to have:
  * Yes
  * No
* **Job Satisfaction** (14) (`job_satisfaction`, `select_multiple`, required: false):
  Please select your level of job satisfaction:
  * Satisfied
  * Dissatisfied
* **Future Company** (15) (`future_company`, `text`, required: false):
  Please enter the name of your future company.
* **Job Type** (16) (`job_type`, `text`, required: false):
  Please enter your job type (e.g., full-time, part-time, etc.).
* **Job Title** (17) (`job_title`, `text`, required: false):
  Please enter your job title in the future company.
* **Location** (18) (`location`, `text`, required: false):
  Please enter your future work location.
* **Job Level** (19) (`job_level`, `text`, required: false):
  Please enter your job level (e.g., intern, manager, etc.).
* **Manager Leaving Reason** (20) (`manager_leaving_reason`, `text`, required: false):
  Please provide the reason why your manager is leaving.
* **Manager Leaving Reason Others** (21) (`manager_leaving_reason_others`, `select_multiple`, required: false):
  Please select the reasons why your manager is leaving:
  * Yes
  * No
* **Manager Leaving Comment** (22) (`manager_leaving_comment`, `text`, required: false):
  Please provide any additional comments about your manager leaving.
* **Future Manager Leaving Reason** (23) (`future_manager_leaving_reason`, `select_multiple`, required: false):
  Please select the reasons why your future manager might leave:
  * Yes
  * No
* **Future Manager Leaving Comment** (24) (`future_manager_leaving_comment`, `text`, required: false):
  Please provide any additional comments about your future manager leaving.
