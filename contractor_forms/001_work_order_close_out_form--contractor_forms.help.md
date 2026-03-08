<thinking>

We need to create a user-friendly help guide for the "Work Order Close Out Form" in a way that explains its purpose, how to complete it, and what each field means for end users. This form seems to be part of a system for managing work orders, and it appears to be designed to capture information about the completion status and details of a job. Let's assume this form is used to close out work orders after a project has been completed.

The form likely contains fields that require user input to document the completion status, details, and other relevant information about the job. It's also possible that some fields might be used to track interactions with clients or customers, such as their name and contact number. 

Before proceeding, it's essential to review the form's fields and determine the most logical and efficient way to present this information to users.

</thinking>

# Work Order Close Out Form - Help Guide
## Purpose

This form is used to document the completion status of a work order and capture any relevant details or updates about the project.

## How To Complete This Form

1. Fill in your contact information (if applicable) in the "contact name", "contact number", and "email" fields.
2. Select the job status from the "job status" dropdown menu.
3. Enter the total cost of the job in the "cost of job" field.
4. Enter the hours worked on the project in the "hours worked" field.
5. Add any additional notes about the job in the "notes" field.
6. If you've used any materials, enter them in the "materials used" field.
7. Ensure you've completed all the required fields before submitting the form.

## Field-by-Field Explanation

* **Close Out Date** (`close_out_date`, date, required: false): Enter the date the job was completed.
* **Hours Worked** (`hours_worked`, number, required: false): Record the total hours worked on the project.
* **Cost of Job** (`cost_of_job`, number, required: false): Enter the total cost of the job.
* **Materials Used** (`materials_used`, text, required: false): List any materials used for the project.
* **Job Status** (`job_status`, select_one, required: true): Choose the current status of the job from the dropdown menu:
	+ Completed
	+ In Progress
	+ Not Started
* **Notes** (`notes`, note, required: false): Add any additional notes or comments about the job.
* **Contact Name** (`contact_name`, text, required: false): Enter your name or the name of the person completing the form.
* **Contact Number** (`contact_number`, text, required: false): Enter your contact number or the contact number of the person completing the form.
* **Email** (`email`, email, required: false): Enter your email address or the email address of the person completing the form.

## Tips

* Ensure all required fields are filled in before submitting the form.
* Review the form carefully before submitting it to ensure accuracy and completeness.
* If you're unsure about any field, refer to your project manager or supervisor for guidance.
