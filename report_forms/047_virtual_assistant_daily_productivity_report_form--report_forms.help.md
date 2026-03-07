<thinking>
We have a form that needs to be filled out by users to report their daily productivity. The purpose of this form is to collect data on the virtual assistant's daily activities, such as task completion status, productivity level, and submitted status. We want to make sure that users understand the form's purpose and know how to fill it out correctly, especially since some fields might be unclear or have multiple options. This guide will walk them through each field and explain its purpose and expectations.
</thinking>

# Virtual Assistant Daily Productivity Report Form - Help Guide
## Purpose
The Virtual Assistant Daily Productivity Report Form is designed to gather information on your daily activities as a virtual assistant. This form helps us understand your task completion status, productivity level, and submitted status. Please fill it out accurately to help us improve our services.
## How To Complete This Form
To fill out this form, follow these steps:

* Scroll through each page and review the fields.
* Fill out each field with the required information.
* Make sure to select the correct options for each field.
* Double-check your answers before submitting the form.
## Field-by-Field Explanation
* **Report Form** (`report_form`, text, required: false): This field is a text field where you can write a brief description of your report.
* **Virtual Assistant Name** (`virtual_assistant_name`, text, required: false): Enter the name of your virtual assistant, if applicable.
* **Task Completion Status** (`task_completion_status`, select_one, required: false): Select one of the options to indicate the status of your tasks: 
  * Completed
  * Not Completed
  * Partially Completed
* **Task Completion Status Hint** (`task_completion_status_hint`, text, required: false): Provide a brief explanation of how you completed a task, if necessary.
* **Productivity Level** (`productivity_level`, select_multiple, required: false): Choose one or more of the following options to indicate your productivity level:
  * High
  * Medium
  * Low
* **Productivity Level Hint** (`productivity_level_hint`, text, required: false): On a scale of 1-10, how would you rate your productivity level?
* **Work Hours** (`work_hours`, time, required: false): Enter the time you spent working, in 24-hour format (e.g., 08:00-17:00).
* **Notes** (`notes`, note, required: false): Add any additional comments or notes about your day.
* **Email** (`email`, email, required: false): Enter your email address, if applicable.
* **Phone** (`phone`, text, required: false): Enter your phone number, if applicable.
* **Date** (`date`, date, required: false): Select the date for the report.
* **Time** (`time`, time, required: false): Select the time for the report.
* **Submitted** (`submitted`, select_one, required: false): Select one of the options to indicate the submission status:
  * Submitted
  * Saved
  * Cancelled
* **Submitted Hint** (`submitted_hint`, text, required: false): Provide a brief explanation of your submission status.
* **Report Form Saved** (`report_form_saved`, note, required: false): Check if the report form has been saved.
* **Virtual Assistant Saved** (`virtual_assistant_saved`, select_one, required: false): Select one of the options to indicate the saving status of your virtual assistant:
  * Saved
  * Not Saved
  * Cancelled
* **Virtual Assistant Cancelled** (`virtual_assistant_cancelled`, select_one, required: false): Select one of the options to indicate the cancelling status of your virtual assistant:
  * Saved
  * Not Saved
  * Submitted
* **Form Submission ID** (`form_submission_id`, text, required: false): Enter the form submission ID, if applicable.
