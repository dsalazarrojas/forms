# quarterly_owner_feedback_survey - Help Guide
## Purpose
The quarterly_owner_feedback_survey form is used to collect feedback from business owners on a quarterly basis.

## How To Complete This Form
To complete the quarterly_owner_feedback_survey form, follow these steps:
1. Fill in the title of the survey to provide a brief overview of the form's purpose.
2. Select the category that best describes the form (Business Surveys).
3. Provide a description of the purpose and scope of the survey.
4. Enter the contact name and email address of the person submitting the feedback.
5. Answer the following questions:
  * What is the current status of your property? (Select one: Active, Inactive)
  * How can we improve our service? (Open-ended text response)
  * What do you like most about our service? (Select multiple options: Yes, No)
  * What do you like least about our service? (Select multiple options: Yes, No)
  * Any other comments or suggestions? (Open-ended text response)
6. Select the date the form is submitted.

## Field-by-Field Explanation
* **survey_title** (`title`, text, required): A brief title of the survey.
* **category** (`category`, select_one, optional): Select the category that best describes the form (Business Surveys).
* **description** (`description`, text, required): A brief description of the purpose and scope of the survey.
* **Contact Name** (`contact_name`, text, required): Enter the name of the person submitting the feedback.
* **Contact Email** (`contact_email`, email, required): Enter the email address of the person submitting the feedback.
* **What is the current status of your property?** (`survey_questions_1`, select_one, optional): Select one of the two options to describe the current status of your property (Active, Inactive).
* **How can we improve our service?** (`survey_questions_2`, text, required): Provide open-ended feedback on how we can improve our service.
* **What do you like most about our service?** (`survey_questions_3`, select_multiple, optional): Select multiple options that describe what you like most about our service (Yes, No).
* **What do you like least about our service?** (`survey_questions_4`, select_multiple, optional): Select multiple options that describe what you like least about our service (Yes, No).
* **Any other comments or suggestions?** (`survey_questions_5`, text, optional): Provide any additional comments or suggestions.
* **Submitted** (`submitted`, date, required): Select the date the form is submitted.

Tips:
* Please provide honest and constructive feedback to help us improve our service.
* If you have any concerns or questions, feel free to contact us.
* We appreciate your time and input, and thank you for taking the time to complete this form!
