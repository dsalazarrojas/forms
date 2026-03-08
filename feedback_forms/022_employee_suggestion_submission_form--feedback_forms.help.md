# Employee Suggestion Submission Form - Help Guide
## Purpose
The Employee Suggestion Submission Form is a tool for employees to provide feedback and suggestions on how to improve the company. It is used to collect ideas and comments from employees on various departments, which will be reviewed and addressed by the management.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your suggestion in the "Suggestion" field.
2. Select the department you are providing feedback on (e.g., HR, IT, Marketing).
3. Enter your name in the "Name" field.
4. Provide a brief description of your suggestion in the "Description" field.
5. Enter your email address in the "Email" field.
6. Select the current submission status (e.g., Submission, Draft, Completed).
7. Select the date and time you submitted the form in the "Submit Date" and "Submit Time" fields.
8. Finally, click the submit button to send your suggestion.

## Field-by-Field Explanation

* **Suggestion** (`suggestion`, text, required): This is the main field where you can enter your suggestion or feedback. Please keep it concise and clear.
* **Department** (`department`, select_one, required): Select the department you are providing feedback on (e.g., HR, IT, Marketing).
* **Name** (`name`, text, required): Enter your name as you want it to be displayed in the submission.
* **Description** (`description`, text, required): Provide a brief description of your suggestion in this field.
* **Email** (`email`, email, required): Enter your email address so we can contact you for further information.
* **Submit Date** (`submit_date`, date, required): Select the date you submitted the form.
* **Submit Time** (`submit_time`, time, required): Select the time you submitted the form.
* **Submission Status** (`submission_status`, select_multiple, required): Select the current status of your submission (e.g., Submission, Draft, Completed).
* **Submission Date** (`submission_date`, date, required): This field is automatically populated with the date your submission was recorded.
* **Submission Time** (`submission_time`, time, required): This field is automatically populated with the time your submission was recorded.
