# Work Session Evidence Submission - Help Guide
## Purpose
The "Work Session Evidence Submission" form is used to submit evidence of work sessions, including details about the session start and end times, location, notes, and other relevant information. This form helps to track and review session data for quality control and auditing purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the session start and end times in the "Session Start Time" and "Session End Time" fields, respectively.
2. Enter the session location in the "Session Location" field.
3. Add any additional session notes in the "Session Notes" field.
4. Select the team ID from the "Team ID" field.
5. Enter the session start and end dates in the "Session Start Date" and "Session End Date" fields, respectively.
6. Enter the user ID in the "User ID" field.
7. Fill in the session duration in the "Session Duration" field.
8. Select the session type from the available options in the "Session Type" field.
9. Select the session status from the available options in the "Session Status" field.
10. Enter the submitter's name and email (optional) in the "Submitter" field.
11. Enter the submission date in the "Submission Date" field.
12. Enter the reviewer's name and email (optional) in the "Reviewer" field.
13. Enter the reviewer's comments in the "Review Comments" field (optional).
14. Enter the submitter's comments in the "Submitter Comments" field (optional).

## Field-by-Field Explanation
* **Session Start Time** (`session_start_time`, time, required=false): Enter the start time of the session.
* **Session End Time** (`session_end_time`, time, required=false): Enter the end time of the session.
* **Session Location** (`session_location`, text, required=false): Enter the location where the session took place.
* **Session Notes** (`session_notes`, note, required=false): Add any additional notes about the session.
* **Team ID** (`team_id`, text, required=false): Select the team ID associated with the session.
* **Session Start Date** (`session_start_date`, date, required=false): Enter the start date of the session.
* **Session End Date** (`session_end_date`, date, required=false): Enter the end date of the session.
* **User ID** (`user_id`, text, required=false): Enter the user ID associated with the session.
* **Session Duration** (`session_duration`, number, required=false): Enter the duration of the session.
* **Session Type** (`session_type`, select_multiple, required=false): Select the type of session from the available options.
* **Session Status** (`session_status`, select_one, required=false): Select the status of the session from the available options.
* **Submitter** (`submitter`, text, required=false): Enter the name and email of the submitter (optional).
* **Submission Date** (`submission_date`, date, required=false): Enter the date of submission.
* **Reviewer** (`reviewer`, text, required=false): Enter the name and email of the reviewer (optional).
* **Review Comments** (`reviewer_comments`, note, required=false): Enter any comments from the reviewer (optional).
* **Submitter Comments** (`submitter_comments`, note, required=false): Enter any comments from the submitter (optional).
* **Team ID 2** (`team_id_2`, text, required=false): Select the team ID.
* **Session Status 2** (`session_status_2`, select_one, required=false): Select the status of the session.
* **Team Member Count** (`team_member_count`, text, required=false): Enter the number of team members.
* **Team Member IDs** (`team_member_ids`, text, required=false): Enter the IDs of team members.
* **Team Member Status** (`team_member_status`, select_one, required=false): Select the status of team members.
* **Team Member 1** (`team_member_1`, text, required=false): Enter the name of the first team member.
* **Team Member 2** (`team_member_2`, text, required=false): Enter the name of the second team member.
* **Session Evidence** (`session_evidence`, text, required=false): Enter any evidence related to the session.
