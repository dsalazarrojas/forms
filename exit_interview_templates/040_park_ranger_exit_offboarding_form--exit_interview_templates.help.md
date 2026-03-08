# Park Ranger Exit Offboarding Form - Help Guide
## Purpose
The Park Ranger Exit Offboarding Form is used to document the details of a park ranger's departure, including their personal information, employment history, and equipment status.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal information, including your first name, last name, and email.
2. Enter your job title.
3. Enter your supervisor's first name, last name, and email.
4. If applicable, select the correct date of start and end of employment.
5. Provide a reason for your departure.
6. Enter any comments you have regarding your experience.
7. If applicable, select any equipment that you are returning or that was damaged/stolen during your employment.
8. Add any notes or comments you have about your departure.

## Field-by-Field Explanation
* **First name** (`first_name`, text, required): Enter your first name.
* **Last name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Job title** (`job_title`, text, required): Enter your job title.
* **Supervisor first name** (`supervisor_first_name`, text, required): Enter your supervisor's first name.
* **Supervisor last name** (`supervisor_last_name`, text, required): Enter your supervisor's last name.
* **Supervisor email** (`supervisor_email`, email, required): Enter your supervisor's email address.
* **Start date** (`start_date`, date, optional): Enter the date you started your employment.
* **End date** (`end_date`, date, optional): Enter the date you ended your employment.
* **Reason for departure** (`reason_for_departure`, text, required): Select one of the provided options or enter a reason for your departure.
* **Comments** (`comments`, text, optional): Enter any comments or feedback you have about your experience.
* **Equipment returned** (`equipment_returned`, select_one, optional): Select any equipment you are returning.
* **Equipment damaged** (`equipment_damaged`, select_multiple, optional): Select any equipment that was damaged during your employment.
* **Equipment stolen** (`equipment_stolen`, select_multiple, optional): Select any equipment that was stolen during your employment.
* **Note** (`note`, note, optional): Add any additional comments or feedback you have about your departure.
* **Date of departure** (`date_of_departure`, date, optional): Enter the date you departed the park service.
