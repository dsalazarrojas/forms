<thinking>...</thinking>

This form is used to collect feedback from patients regarding their experience with hospice care. It's designed to understand the care provider's performance, identify areas of improvement, and help with quality assurance.

# Hospice Patient Satisfaction Survey - Help Guide
## Purpose
The goal of this form is to collect information about the patient's satisfaction with the care they received from our hospice team. This information will be used to improve the quality of care provided and identify areas that need improvement.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your name in the **Patient Name** field. This will help us identify the patient you are providing feedback for.
2. Enter the patient's contact information in the **Contact Phone** and **Contact Email** fields, if applicable.
3. Provide the patient's ID number, if you know it.
4. Check the box next to any **Care Team Members** who interacted with the patient.
5. Enter the **Survey Date**, the date the survey was completed.
6. Provide the name of the **Care Team** members who worked with the patient.
7. Choose a rating for the overall quality of care provided by selecting one of the options: **Excellent**, **Satisfactory**, **Needs Improvement**, or **Unsatisfactory**.
8. Provide any **Comments** you think might be helpful in improving care.
9. Confirm that the survey was **Survey Completed** by checking the corresponding box.
10. Record the time it took to complete the survey.
11. Enter the total number of **Care Days Provided** and **Care Hours Provided**.
12. Finally, rate your overall satisfaction on a scale of 1-5.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the name of the patient you are providing feedback for.
* **Contact Phone** (`contact_phone`, text, optional): Enter the patient's contact phone number, if available.
* **Contact Email** (`contact_email`, email, optional): Enter the patient's email address, if available.
* **Patient ID** (`patient_id`, text, optional): Enter the patient's ID number, if known.
* **Care Team Members** (`care_team_members`, select_multiple, optional): List all care team members who interacted with the patient. Choose from the options: Yes or No.
* **Care Team** (`care_team_name`, text, optional): Enter the name of the care team members who worked with the patient.
* **Survey Date** (`survey_date`, date, optional): Enter the date the survey was completed.
* **Care Provider Name** (`care_provider_name`, text, optional): Enter the name of the care provider.
* **Care Provider Type** (`care_provider_type`, text, optional): Enter the type of care provider.
* **Rating** (`rating`, select_one, optional): Choose a rating for the overall quality of care provided: Excellent, Satisfactory, Needs Improvement, or Unsatisfactory.
* **Comments** (`comments`, text, optional): Enter any comments that might be helpful in improving care.
* **Survey Completed** (`survey_completed`, checkbox, optional): Confirm that the survey was completed.
* **Started Survey** (`survey_started`, time, optional): Record the time the survey was started.
* **Ended Survey** (`survey_ended`, time, optional): Record the time the survey was ended.
* **Started Time** (`survey_started_time`, time, optional): Enter the time the survey was started.
* **Ended Time** (`survey_ended_time`, time, optional): Enter the time the survey was ended.
* **Survey Time** (`survey_time`, time, optional): Enter the total survey time.
* **Care Days Provided** (`care_days_provided`, number, optional): Enter the number of care days provided.
* **Care Hours Provided** (`care_hours_provided`, number, optional): Enter the number of care hours provided.
* **Rating (5)** (`rating_5`, number, optional): Rate your overall satisfaction on a scale of 1-5.
