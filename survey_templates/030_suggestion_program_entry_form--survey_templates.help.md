# suggestion_program_entry_form - Help Guide
## Purpose
The suggestion program entry form is used to collect and track suggestions or ideas from employees. This form is intended for employees to submit their suggestions and for the authorized submitter to collect and manage these suggestions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "employee_suggestion" field with a brief description of your suggestion or idea.
2. Provide detailed information in the "suggestion_details" field.
3. Choose "Yes" or "No" for the "category" field indicating if the suggestion is relevant to a specific department.
4. Enter a description of your suggestion in the "description" field.
5. Enter your email address in the "employee_email" field.
6. Enter your phone number in the "employee_phone" field.
7. Enter your job title in the "employee_job_title" field.
8. Enter your department in the "department" field.
9. Enter your suggestion id or other relevant id in the "suggestion_id" field.
10. Enter the date you would like your suggestion to be processed in the "suggestion_date" field.
11. Enter the time you would like your suggestion to be processed in the "suggestion_time" field.
12. Select "True" or "False" for "submitter_agreement" field to confirm that you have read and agree to the terms and conditions.
13. Select "True" or "False" for "form_submitted" field to confirm that you have submitted this form correctly.
14. Select a date for "submitter_date_2" field.
15. Select a time for "submitter_time_2" field.

## Field-by-Field Explanation

* **employee_suggestion** (`employee_suggestion`, `text`, required): Enter a brief description of your suggestion or idea.
* **suggestion_details** (`suggestion_details`, `text`, required): Provide detailed information about your suggestion.
* **category** (`category`, `select_one`, required): Choose "Yes" or "No" to indicate if the suggestion is relevant to a specific department.
* **description** (`description`, `text`, required): Enter a description of your suggestion.
* **employee_email** (`employee_email`, `email`, required): Enter your email address.
* **employee_phone** (`employee_phone`, `text`, required): Enter your phone number.
* **employee_job_title** (`employee_job_title`, `text`, required): Enter your job title.
* **department** (`department`, `text`, required): Enter your department.
* **suggestion_id** (`suggestion_id`, `text`, required): Enter your suggestion id or other relevant id.
* **suggestion_date** (`suggestion_date`, `date`, required): Enter the date you would like your suggestion to be processed.
* **suggestion_time** (`suggestion_time`, `time`, required): Enter the time you would like your suggestion to be processed.
* **submitter_id** (`submitter_id`, `text`, required): Enter the id of the submitter.
* **submitter_department** (`submitter_department`, `text`, required): Enter the department of the submitter.
* **submitter_email** (`submitter_email`, `email`, required): Enter the email of the submitter.
* **submitter_phone** (`submitter_phone`, `text`, required): Enter the phone number of the submitter.
* **submitter_job_title** (`submitter_job_title`, `text`, required): Enter the job title of the submitter.
* **submitter_date** (`submitter_date`, `date`, required): Enter the date the form was submitted.
* **submitter_time** (`submitter_time`, `time`, required): Enter the time the form was submitted.
* **submitter_location** (`submitter_location`, `text`, required): Enter the location of the submitter.
* **submitter_comments** (`submitter_comments`, `text`, required): Enter comments about the submitter.
* **submitter_agreement** (`submitter_agreement`, `select_one`, required): Select "True" to confirm that you have read and agree to the terms and conditions.
* **form_submitted** (`form_submitted`, `select_one`, required): Select "True" to confirm that you have submitted this form correctly.
* **submitter_date_2** (`submitter_date_2`, `date`, required): Enter the date of submission.
* **submitter_time_2** (`submitter_time_2`, `time`, required): Enter the time of submission.

## Tips
* Make sure to fill in all required fields with accurate and truthful information.
* Double-check the "form_submitted" field to ensure you have submitted the form correctly.
* Select "True" for "submitter_agreement" field to confirm that you have read and agree to the terms and conditions.
* Select "True" for "form_submitted" field to confirm that you have submitted the form correctly.
