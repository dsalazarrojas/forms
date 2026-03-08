</thinking>

This is a form for employees to assess their own well-being and provide input to their managers. Before filling out this form, please note that it will only be used for internal purposes and will not be shared with anyone outside of the organization. If you have already filled out a similar form, please note that you can skip some fields and only provide updates on changes since your last assessment.

# employee_wellness_questionnaire - Help Guide
## Purpose
This form is designed to help employees assess their current well-being and provide input to their managers. It will help identify areas of improvement and opportunities for support.

## How To Complete This Form
To complete this form, please follow these steps:

1. Answer each question honestly and to the best of your ability.
2. For questions with options, select the response that best applies to you.
3. If you have any changes since your last assessment, please note them in the corresponding field.
4. If you are unsure about any question, please answer "Unknown" or "Not applicable".

## Field-by-Field Explanation

* **What is your job title** (`introduction`, `text`, required): This is the job title you hold within the organization.
* **How would you rate your current wellness status** (`employee_wellness_status`, `number`, required): On a scale of 1-5, rate your current well-being, where 1 is low and 5 is high.
* **On a scale of 1-10 how satisfied are you with your current job** (`job_satisfaction_score`, `number`, required): Rate your level of satisfaction with your current job, where 1 is low and 10 is high.
* **How often do you engage in physical activity** (`physical_activity_level`, `select_one`, required): Select how often you engage in physical activity, from "Never" to "Every day".
* **On a scale of 1-5 how would you rate your current emotional wellness level** (`emotional_wellness_level`, `number`, required): Rate your current emotional well-being, where 1 is low and 5 is high.
* **On a scale of 1-5 how would you rate the level of job-related stress** (`job_related_stress_level`, `number`, required): Rate the level of stress related to your job, where 1 is low and 5 is high.
* **What mental health services do you need** (`mental_health_services_needed`, `select_multiple`, required): Select the mental health services you need, from "Therapy", "Counseling", "Support group", "Online resources", or "Other".
* **What physical health services do you need** (`physical_health_services_needed`, `select_multiple`, required): Select the physical health services you need, from "Doctor visit", "Medication", "Therapy", or "Other".
* **What is your manager name** (`manager_name`, `text`, required): Enter your manager's name.
* **Manager contact phone number** (`manager_phone`, `text`, required): Enter your manager's phone number.
* **Manager email** (`manager_email`, `text`, required): Enter your manager's email.
* **What is your supervisor name** (`supervisor_name`, `text`, required): Enter your supervisor's name.
* **Supervisor contact phone number** (`supervisor_phone`, `text`, required): Enter your supervisor's phone number.
* **Supervisor email** (`supervisor_email`, `text`, required): Enter your supervisor's email.
* **What is your direct supervisor name** (`direct_supervisor_name`, `text`, required): Enter your direct supervisor's name.
* **Direct supervisor contact phone number** (`direct_supervisor_phone`, `text`, required): Enter your direct supervisor's phone number.
* **Direct supervisor email** (`direct_supervisor_email`, `text`, required): Enter your direct supervisor's email.
* **How many hours do you work** (`work_hours`, `number`, required): Enter the number of hours you work per week.
* **Work minutes** (`work_minutes`, `number`, required): Enter the number of minutes you work per week.
* **Work seconds** (`work_seconds`, `number`, required): Enter the number of seconds you work per week. (Note: This field is not clearly defined, as it seems redundant with "work hours".)
* **How many hours of vacation time do you have left** (`vacation_hours`, `number`, required): Enter the number of hours of vacation time you have left.
* **Time off request** (`time_off_request`, `select_one`, required): Select whether you have a time off request, from "True", "False", or "Unknown".
* **On a scale of 1-10 how would you rate your work-life balance** (`work_life_balance`, `number`, required): Rate your current work-life balance, where 1 is low and 10 is high.
* **On a scale of 1-10 how would you rate your current physical health score** (`physical_health_score`, `number`, required): Rate your current physical health score, where 1 is low and 10 is high.
* **On a scale of 1-10 how would you rate your current mental health score** (`mental_health_score`, `number`, required): Rate your current mental health score, where 1 is low and 10 is high.

Please note that some fields seem redundant (e.g., "work minutes" and "work seconds"). You may want to review the form structure to ensure accuracy and clarity.
