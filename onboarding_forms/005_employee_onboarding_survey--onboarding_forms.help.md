<thinking>Here are the internal considerations for this form:

The purpose of this form is to collect feedback and information from new employees during the onboarding process. This data can be used by the management team to improve the onboarding process, understand employee satisfaction, and make data-driven decisions.

To ensure the integrity of the data, it is essential to verify that the form is only completed once per employee and that the responses are consistent with the actual onboarding process. This can be achieved by implementing controls to prevent duplicate submissions and validating the data against actual onboarding records.

The form collects feedback on various aspects of the onboarding process, including the job title, department, onboarding date, onboarding program, and satisfaction with different teams and departments. The form also asks for suggestions on how to improve the onboarding process.</thinking>

# Employee Onboarding Survey - Help Guide
## Purpose
This form is designed to collect feedback and information from new employees during the onboarding process. This data will be used by the management team to improve the onboarding process, understand employee satisfaction, and make data-driven decisions.

## How To Complete This Form
1. Please fill out the form completely and accurately, providing honest feedback on your onboarding experience.
2. Make sure to answer all the questions to provide a comprehensive view of your experience.
3. Use the options provided for each question as a guide to select your response.

## Field-by-Field Explanation

* **Onboarding Survey** (`onboarding_survey`, text, optional):
	+ This is the first question to get you started. Please write a brief introduction to your onboarding experience.
* **Job Title** (`job_title`, text, optional):
	+ Please enter your job title as it is currently used in the company.
* **Department** (`department`, text, optional):
	+ Please enter your department as it is currently used in the company.
* **Job Title Manager** (`job_title_manager`, select_one, optional):
	+ Select the type of manager you report directly to (Manager, Assistant, Director, CEO).
* **Job Title Level** (`job_title_level`, select_multiple, optional):
	+ Select the level of your job title (Junior, Senior, Manager, Director, CEO).
* **Onboarding Date** (`onboarding_date`, date, optional):
	+ Please enter the date you started the onboarding process.
* **Onboarding Program** (`onboarding_program`, select_one, optional):
	+ Select the type of onboarding program you were enrolled in (Standard, Extended, Custom).
* **How would you rate your onboarding experience?** (`feedback`, select_multiple, optional):
	+ Rate your onboarding experience as Positive, Neutral, or Negative.
* **What would you suggest to improve onboarding process?** (`onboarding_suggestions`, text, optional):
	+ Provide any suggestions you have on how to improve the onboarding process.
* **How satisfied are you with your job?** (`job_satisfaction`, select_one, optional):
	+ Rate your job satisfaction as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **Overall Satisfaction** (`overall_satisfaction`, select_multiple, optional):
	+ Rate your overall satisfaction as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **How long did it take to complete onboarding process?** (`time_to_complete`, time, optional):
	+ Please enter the actual time it took you to complete the onboarding process.
* **Comments** (`comments`, text, optional):
	+ Please provide any additional comments on your onboarding experience.
* **Have you ever referred or been referred to someone in your role or department?** (`employee_referral`, select_one, optional):
	+ Select True if you have referred or been referred to someone in your role or department, False if not, or Maybe if unsure.
* **How satisfied are you with your manager?** (`job_satisfaction_manager`, select_one, optional):
	+ Rate your satisfaction with your manager as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **How satisfied are you with developers?** (`job_satisfaction_developer`, select_one, optional):
	+ Rate your satisfaction with developers as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **How satisfied are you with team leaders/lead?** (`job_satisfaction_teamlead`, select_one, optional):
	+ Rate your satisfaction with team leaders/lead as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **How satisfied are you with team members?** (`job_satisfaction_team`, select_one, optional):
	+ Rate your satisfaction with team members as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **How satisfied are you with colleagues?** (`job_satisfaction_colleague`, select_one, optional):
	+ Rate your satisfaction with colleagues as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **Overall Satisfaction** (`overall_satisfaction`, select_multiple, optional):
	+ Rate your overall satisfaction as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **How long did it take to complete the onboarding process?** (`time_to_complete_program`, time, optional):
	+ Please enter the actual time it took you to complete the onboarding process.
* **How satisfied are you with the Human Resources team?** (`job_satisfaction_hr`, select_one, optional):
	+ Rate your satisfaction with the Human Resources team as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
* **What was the overall process of onboarding like?** (`onboarding_process`, select_one, optional):
	+ Select how you found the onboarding process (Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied).
* **What would you suggest to improve the onboarding process?** (`onboarding_process_improvement`, text, optional):
	+ Provide any suggestions you have on how to improve the onboarding process.
* **How satisfied are you with the IT department?** (`job_satisfaction_it`, select_one, optional):
	+ Rate your satisfaction with the IT department as Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied.
