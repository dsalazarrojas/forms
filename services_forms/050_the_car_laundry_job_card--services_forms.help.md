# the_car_laundry_job_card - Help Guide
## Purpose
The "the_car_laundry_job_card" form is used to track and manage jobs related to laundry services.

## How To Complete This Form

To complete the form, follow these steps:

1. Fill out the "Job Card" field with a brief description of the job.
2. Enter the "Client Info" field with the client's name and contact information.
3. Select the services provided for the job from the "Services" field.
4. Add a description of the services provided in the "Services Description" field.
5. Enter the "Final Cost" of the job.
6. Enter the client's phone number in the "Client Phone" field.
7. Enter the client's email address in the "Client Email" field.
8. Select the current status of the job from the "Job Status" field.
9. Set the "Job Due Date" for the job.
10. If the job is complete, set the "Job Completed Date" field. If not, leave it blank.
11. Set the "Job Updated Date" field with the date and time the job was last updated.
12. Select the tool used for the job from the "Job Assigned Tool" field.

## Field-by-Field Explanation

* **Job Card** (`job_card`, text, required): A brief description of the job.
* **Client Info** (`client_info`, text, required): Enter the client's name and contact information.
* **Work Order** (`work_order`, text, required): A description of the work order.
* **Services** (`services`, select_one, required): Select the services provided for the job.
* **Job Card Description** (`job_card_description`, text, required): A description of the job card.
* **Comments** (`comments`, text, optional): Additional comments about the job.
* **Services Description** (`services_description`, text, optional): A description of the services provided.
* **Accessories** (`accessories`, select_multiple, optional): Select any accessories used for the job.
* **Final Cost** (`final_cost`, number, required): The final cost of the job.
* **Client Phone** (`client_phone`, text, required): The client's phone number.
* **Client Email** (`client_email`, email, required): The client's email address.
* **Job Status** (`job_status`, select_one, required): Select the current status of the job.
* **Job Due Date** (`job_due_date`, date, required): The date the job is due.
* **Job Completed Date** (`job_completed_date`, date, optional): The date the job was completed.
* **Job Updated Date** (`job_updated_date`, date, required): The date and time the job was last updated.
* **Job Assigned Tool** (`job_assigned_tool`, select_one, required): Select the tool used for the job.
