# official_statement_submission_form - Help Guide
## Purpose
This form is designed to collect and document official statements, such as complaints, incidents, or internal matters, to help track their status and progress within the organization.

## How To Complete This Form
1. Fill in the submission details, including any relevant information about the issue or problem.
2. Enter the submission date, which is the date when the issue was reported.
3. Specify the submission time, which is the time when the issue was reported.
4. Choose the submission status, which indicates whether the issue is Open, Closed, or Pending.
5. Select one or more submission categories, such as Internal Review, HR Matter, or Incident Documentation, to categorize the issue.
6. Provide a brief submission description of the issue or problem.
7. Add any additional comments or notes about the issue.
8. Attach any relevant files or documents related to the issue.
9. Enter the reviewer's name and position, who will be responsible for reviewing the issue.
10. Enter the reviewer's department, where they are from.
11. Enter the submission ID, which is a unique identifier for the issue.
12. Enter the submission date modified, which is the date when the issue was last updated.

## Field-by-Field Explanation

* **Submission Details** (`submission_details`, text, required: false): A brief description of the issue or problem.
* **Submission Date** (`submission_date`, date, required: false): The date when the issue was reported.
* **Submission Time** (`submission_time`, time, required: false): The time when the issue was reported.
* **Submission Status** (`submission_status`, select_one, required: false): Select one of the following options:
	+ Open: The issue is currently being reviewed.
	+ Closed: The issue has been resolved.
	+ Pending: The issue is still under review.
* **Submission Category** (`submission_category`, select_multiple, required: false): Select one or more of the following options:
	+ Internal Review: The issue is related to internal policies or procedures.
	+ HR Matter: The issue is related to human resources or personnel matters.
	+ Incident Documentation: The issue is related to incident reporting or documentation.
* **Submission Description** (`submission_description`, text, required: false): A brief description of the issue or problem.
* **Submission Comments** (`submission_comments`, text, required: false): Additional comments or notes about the issue.
* **Submission Attachments** (`submission_attachments`, text, required: false): Attach relevant files or documents related to the issue.
* **Reviewer Name** (`reviewer_name`, text, required: false): The name of the reviewer who will be evaluating the issue.
* **Reviewer Position** (`reviewer_position`, text, required: false): The position of the reviewer who will be evaluating the issue.
* **Reviewer Department** (`reviewer_department`, text, required: false): The department of the reviewer who will be evaluating the issue.
* **Submission ID** (`submission_id`, text, required: false): A unique identifier for the issue.
* **Submission Date Modified** (`submission_date_modified`, date, required: false): The date when the issue was last updated.
