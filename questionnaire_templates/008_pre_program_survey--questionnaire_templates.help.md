# <string> - Help Guide
## Purpose
The "<string>" form is a template for creating questionnaires for post-secondary education programs.

## How To Complete This Form
To fill out this form, follow these steps:

1. Enter a title for the questionnaire in the "Form Title" field.
2. Select a category for the questionnaire in the "Category" field.
3. Provide a description of the questionnaire in the "Description" field (required).
4. Specify the output file for the questionnaire in the "Output File" field (optional).
5. Choose the assigned tool for the questionnaire in the "Assigned Tool" field (optional).
6. If applicable, fill out the "Pre Program Survey" field with the pre-program survey details.
7. Enter the program ID and name if applicable.
8. Specify the start and end dates and times for the questionnaire in the "Start Date", "Start Time", "End Date", and "End Time" fields (optional).
9. Answer the program survey questions 1 and 2 with "Yes" or "No" in the "Program Survey Question 1" and "Program Survey Question 2" fields (required).

## Field-by-Field Explanation
* **Form Title** (`form_title`, text, required): Enter a title for the questionnaire to identify it.
* **Category** (`form_category`, text, optional): Select a category for the questionnaire to help organize and filter it.
* **Description** (`form_description`, text, required): Provide a brief description of the questionnaire.
* **Output File** (`form_output_file`, text, optional): Specify the file to output the questionnaire results to.
* **Assigned Tool** (`form_assinged_tool`, text, optional): Choose the tool assigned to administer the questionnaire.
* **Pre Program Survey** (`form_title`, note, required): If applicable, fill out the pre-program survey details with a brief description and "A pre program survey is a questionnaire used to collect data from potential students before they register for post-secondary programs."
* **Program ID** (`form_program_id`, number, optional): Enter the program ID, if required.
* **Program** (`form_program`, text, optional): Enter the program name if required.
* **Start Date** (`form_start_date`, date, optional): Enter the start date of the questionnaire.
* **Start Time** (`form_start_time`, time, optional): Enter the start time of the questionnaire.
* **End Date** (`form_end_date`, date, optional): Enter the end date of the questionnaire.
* **End Time** (`form_end_time`, time, optional): Enter the end time of the questionnaire.
* **Program Survey Question 1** (`form_program_survey_question_1`, select_one, required): Answer "Yes" or "No" to question 1.
* **Program Survey Question 2** (`form_program_survey_question_2`, select_multiple, required): Answer "Yes" or "No" to question 2.

## Tips
* Make sure to complete all required fields to ensure the questionnaire is correctly created.
* Use the "Category" field to help filter and organize questionnaires.
* Use the "Output File" field to specify where to save the questionnaire results.
