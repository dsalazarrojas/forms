<thinking>As an expert form designer and technical writer, I understand the form is for collecting project completion information, likely for project management or status tracking purposes. This form appears to gather data on project titles, dates, statuses, and other related details. To ensure this form meets its intended use, I will create a user-facing help guide that explains the form's purpose, how to complete it, and what each field means, without duplicating information already provided in the YAML fields.

</thinking>

# Project Completion Forecast - Help Guide
## Purpose
The Project Completion Forecast form is designed to collect critical project status and completion information from project leaders and teams. This data helps project managers track and monitor project progress, ensuring timely completions and smooth delivery.

## How To Complete This Form
To fill out the form, follow these steps:

1. Fill in the project title and start date.
2. Enter the project completion confidence level on a scale of 0-100.
3. Check if the project has a project leader and if so, mark the "Project Leader" field accordingly.
4. Select the project status and provide any comments if necessary.
5. Fill in the review date and select the review status.
6. Enter review comments and the name of the review manager.
7. Provide submission date and status, along with submission comments and manager's name.
8. Enter team lead's name and team name if applicable.
9. Set review due date and time, and submission due date and time.
10. Fill in the delivery date and select delivery status.
11. Enter delivery comments, if necessary.

## Field-by-Field Explanation

* **Project Title** (`project_title`, text, required): Enter the title of the project being completed.
* **Start Date** (`start_date`, date, optional): Enter the date the project started.
* **End Date** (`end_date`, date, optional): Enter the estimated project completion date.
* **Confidence** (`confidence`, number, optional): Rate your confidence in the project's completion on a scale of 0-100.
* **Project Leader** (`project_leader`, select_one, optional): Check if the project has a project leader, and mark this field accordingly.
* **Project Status** (`project_status`, select_multiple, optional): Select the current status of the project (Active or Inactive).
* **Project Manager** (`project_manager`, text, optional): Enter the name of the project manager.
* **Project Status Comments** (`project_status_comments`, text, optional): Provide any comments regarding the project status.
* **Review Date** (`review_date`, date, optional): Enter the review date.
* **Review Status** (`review_status`, select_multiple, optional): Select the review status (Active or Inactive).
* **Review Comments** (`review_comments`, text, optional): Enter any comments regarding the review.
* **Review Manager** (`review_manager`, text, optional): Enter the name of the review manager.
* **Submission Date** (`submission_date`, date, optional): Enter the submission date.
* **Submission Status** (`submission_status`, select_multiple, optional): Select the submission status (Active or Inactive).
* **Submission Comments** (`submission_comments`, text, optional): Enter any comments regarding the submission.
* **Submission Manager** (`submission_manager`, text, optional): Enter the name of the submission manager.
* **Team Lead** (`submission_team_lead`, text, optional): Enter the name of the team lead.
* **Team** (`submission_team`, text, optional): Enter the team name.
* **Review Due Date** (`review_due_date`, date, optional): Enter the review due date.
* **Review Due Time** (`review_due_time`, time, optional): Enter the review due time.
* **Submission Due Date** (`submission_due_date`, date, optional): Enter the submission due date.
* **Submission Due Time** (`submission_due_time`, time, optional): Enter the submission due time.
* **Delivery Date** (`delivery_date`, date, optional): Enter the delivery date.
* **Delivery Status** (`delivery_status`, select_multiple, optional): Select the delivery status (Active or Inactive).
* **Delivery Comments** (`delivery_comments`, text, optional): Enter any comments regarding the delivery.

Note: Fields marked as optional are not required to be filled.
