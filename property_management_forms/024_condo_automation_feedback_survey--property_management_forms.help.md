# Condo Automation Feedback Survey - Help Guide
## Purpose
Condo Automation Feedback Survey is designed to collect feedback from condominium residents on their experience with automation systems in their building. The goal is to gather information on satisfaction, usage, and potential improvements to these systems.

## How To Complete This Form

1. Start by reading the welcome page (Page 1) to understand the purpose and scope of the survey.
2. Provide your name, unit number, and the name of the building you reside in (Pages 2-4).
3. Select how long you have lived in the building (Page 5).
4. Choose which automation systems you use and how often (Pages 6-8).
5. Rate your satisfaction with the automation systems (Pages 9-11).
6. Select the frequency of issues you have experienced (Page 12).
7. Choose the types of issues you have experienced (Page 13).
8. Describe the most recent issue you have experienced (Page 14).
9. Suggest improvements and features you would like to see added (Pages 15-16).
10. Select the top improvement priorities (Page 17).
11. Choose whether you would recommend the automation systems to others (Page 18).
12. Provide any additional feedback you have (Pages 19-20).
13. Confirm your willingness to be contacted for follow-up purposes (Page 21).
14. Finally, confirm that you have completed the survey (Page 22).

## Field-by-Field Explanation

* **Resident Name** (`resident_name`, `text`, required: false): Enter your name for identification purposes.
* **Unit Number** (`unit_number`, `text`, required: true): Provide your condo unit number for reference.
* **Building Name** (`building_name`, `select_one`, required: true): Select the name of your building from the options provided.
* **Length of Residency** (`residency_duration`, `select_one`, required: true): Choose how long you have lived in the building.
* **Automation Usage** (`automation_usage`, `note`, required: false): Describe which automation systems you use, if any.
* **Smart Lighting Usage** (`smart_lighting`, `select_one`, required: false): Select how you use smart lighting in your building.
* **Climate Control Usage** (`climate_control`, `select_one`, required: false): Select how you use the climate control system in your building.
* **Security System Usage** (`security_system`, `select_one`, required: false): Select how you use the security system in your building.
* **Satisfaction Ratings** (`satisfaction_ratings`, `note`, required: false): Rate your overall satisfaction with the automation systems.
* **Overall Satisfaction** (`overall_satisfaction`, `select_one`, required: true): Choose your level of satisfaction with the automation systems.
* **Ease of Use** (`ease_of_use`, `select_one`, required: true): Select how easy or difficult it is to use the automation systems.
* **System Reliability** (`reliability`, `select_one`, required: true): Choose how reliable you find the automation systems.
* **Response Time** (`response_time`, `select_one`, required: false): Select how fast or slow the automation systems respond.
* **Issues Experienced** (`issues_experienced`, `note`, required: false): Describe any issues you have experienced with the automation systems.
* **Frequency of Issues** (`frequency_of_issues`, `select_one`, required: true): Choose how often issues occur with the automation systems.
* **Types of Issues** (`issue_types`, `select_multiple`, required: false): Select all types of issues you have experienced with the automation systems.
* **Most Recent Issue** (`most_recent_issue`, `text`, required: false): Describe the most recent issue you experienced with the automation systems.
* **Improvement Suggestions** (`improvement_suggestions`, `note`, required: false): Suggest features or improvements you would like to see added to the automation systems.
* **Desired Features** (`desired_features`, `text`, required: false): Describe features you would like to see added to the automation systems.
* **Priority Improvements** (`priority_improvements`, `select_multiple`, required: false): Select the top priority improvements you would like to see implemented.
* **Would Recommend** (`would_recommend`, `select_one`, required: true): Choose whether you would recommend the automation systems to others.
* **Additional Feedback** (`additional_feedback`, `text`, required: false): Provide any additional feedback you have about the automation systems.
* **Contact for Follow Up** (`contact_for_followup`, `select_one`, required: false): Choose whether you are willing to be contacted for follow-up purposes.
* **Survey Completion** (`survey_complete`, `select_one`, required: true): Confirm that you have completed the survey.

Please note that some fields are required for the survey to be completed, while others are optional and provide additional information. If you need help or have questions, please do not hesitate to contact us.
