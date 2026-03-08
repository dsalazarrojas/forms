# Screening Checklist For Visitors And Employees - Help Guide
## Purpose
This form is designed to collect information from visitors and employees about their health and travel history, as well as their answers to screening questions. The purpose of this form is to identify potential health risks and ensure that visitors and employees are following proper protocols for safety and hygiene.

## How To Complete This Form
To complete this form, follow these steps:

1. **Fill out the Visitor Info field**: Enter your basic information, including your name, contact information, and any other relevant details.
2. **Answer the Health Declaration questions**: Select all the health issues that apply to you from the list provided.
3. **Enter your Travel History**: If you have traveled internationally in the past 14 days, or have had close contact with someone who has COVID-19, please enter the date of your return or last contact.
4. **Answer the Screening Questions**: Select all the questions that apply to you from the list provided.
5. **Answer the Screening Answers**: Choose "Yes" or "No" to indicate whether you have experienced any of the symptoms listed.
6. **Sign off as a Visitor**: Enter the date and time you completed this form.
7. **Sign off as an Employee**: Enter the date and time you completed this form if you are an employee.

## Field-by-Field Explanation
- **Visitor Info**: This is the first page of the form where you will enter your basic information, including your name, contact information, and any other details you feel are relevant.
  * **Name** (`visitor_info`, `text`, required: `false`): Enter your name as it appears on your ID or badge.
  * **Contact Info** (`contact_info`, `text`, required: `false`): Enter any relevant contact information, such as your phone number or email.
- **Health Declaration**: This section asks you to select all health issues that apply to you from the provided list.
  * **Health Declaration** (`health_declaration`, `select_one`, required: `false`): Select all health issues that apply to you, such as Fever, Cough, or Shortness of breath.
- **Travel History**: This section is for entering information about your travel history.
  * **Travel History** (`travel_history`, `date`, required: `false`): If you have traveled internationally in the past 14 days, or have had close contact with someone who has COVID-19, enter the date of your return or last contact.
- **Screening Questions**: This section asks you to select all questions that apply to you from the provided list.
  * **Screening Questions** (`screening_questions`, `select_multiple`, required: `false`): Select all questions that apply to you, such as having traveled internationally, having had close contact with someone who has COVID-19, or experiencing symptoms of respiratory illness.
- **Screening Answers**: This section asks you to answer each question with "Yes" or "No".
  * **Screening Answers** (`screening_answers`, `select_one`, required: `false`): Choose "Yes" or "No" to indicate whether you have experienced any of the symptoms listed.
- **Employee Info**: This is a section for employees to sign off.
  * **Employee Info** (`employee_info`, `text`, required: `false`): Enter your employee information, such as your name and badge number.
- **Signoff**: This section is for both visitors and employees to sign off.
  * **Signoff** (`visitor_signoff`, `date`, required: `false`): Enter the date and time you completed this form.
  * **Employee Signoff** (`employee_signoff`, `date`, required: `false`): Enter the date and time you completed this form if you are an employee.
- **Submit**: This is the final step to complete the form.
  * **Submit** (`submit_button`, `text`, required: `false`): Click the submit button to complete the form.

## Tips
* Make sure to complete the form thoroughly and accurately, as the information collected is used for safety and hygiene protocols.
* If you are having trouble understanding a field, please consult with the person responsible for managing this form or seek assistance from a colleague.
* If you are completing this form as an employee, make sure to enter the correct employee information.
* This form is designed to be completed in a few minutes. If you are having trouble completing it, please contact the form administrator.
