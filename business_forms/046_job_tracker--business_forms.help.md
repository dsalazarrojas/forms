<thinking>... internal reasoning: the form is meant to track job openings and closed job status for the company. The form will be used to create, edit, and view job information, such as job title, description, contact details and status. We need to ensure users understand what data is expected and how to fill out the form properly, reducing errors and increasing form completion rate.</thinking>

# Job Tracker - Help Guide
## Purpose
The Job Tracker form is a tool for tracking job openings and closed job status within the company. It's used to create, edit, and view job information, such as job title, description, contact details, and status.

## How To Complete This Form
To complete the form, follow these steps:

1. Click on the "New form" field to create a new job entry.
2. Fill out the required fields: Job name, Job description, Contact name, and Contact phone.
3. Select the job status (Open or Closed) from the dropdown menu.
4. (Optional) Fill out additional fields: Prophets (Note field for notes), Job status 1 and 2 (multi-select dropdown menu).
5. Save the form to create a new job entry.

## Field-by-Field Explanation

* **New Form** (`new_form`, text, required): Enter a short title for your new job entry.
* **Job name** (`job_name`, text, required): Enter a brief description of the job position.
* **Job description** (`job_description`, text, required): Provide a short description of the job, including responsibilities and qualifications.
* **Job status** (`job_status`, select_one, optional): Select the current status of the job: Open or Closed.
* **Contact name** (`contact_name`, text, optional): Enter the name of the contact person.
* **Contact phone** (`contact_phone`, text, optional): Enter the phone number of the contact person.
* **Prophets** (`prophets`, note, optional): Leave notes or additional information about the job. (Note field for internal comments.)
* **Job status 1** (`job_status_1`, select_multiple, optional): Select additional job status options: Open or Closed. (Note: this field is used for tracking specific status changes.)
* **Job status 2** (`job_status_2`, select_multiple, optional): Select additional job status options: Open or Closed. (Note: this field is used for tracking specific status changes.)

## Tips
* Make sure to fill out all required fields (Job name, Job description, Contact name, and Contact phone).
* Use the "New form" field to create a new job entry.
* Use the "Job status" field to track the current status of the job.
* Use the "Prophets" field for internal comments and notes.
