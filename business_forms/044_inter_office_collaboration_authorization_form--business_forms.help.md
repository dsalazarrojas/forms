# inter_office_collaboration_authorization_form - Help Guide

## Purpose
This form is used for inter-office collaboration authorization, which allows team members to request collaboration with other teams or departments within the organization. The form is used to gather information about the project details, team members involved, and the status of the project.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the project details section with the relevant information about the project.
2. Select the team members who will be involved in the project.
3. Indicate whether the project is active or inactive.
4. Provide any additional project notes.
5. Enter the submitter's and approver's information.

## Field-by-Field Explanation

### Project Details (id: 5)
* project_name (label: project_name, type: text, required: false): Enter the name of the project.
* project_type (label: project_type, type: select_one, required: false): Select the type of project (e.g., "Yes" or "No").
* start_date (label: start_date, type: date, required: false): Enter the start date of the project.
* end_date (label: end_date, type: date, required: false): Enter the end date of the project.
* duration (label: duration, type: number, required: false): Enter the duration of the project.
* project_status (label: project_status, type: select_one, required: false): Select the project status (e.g., "Active" or "Inactive").
* project_notes (label: project_notes, type: text, required: false): Enter any additional notes about the project.

### Team Members (id: 2, 3, 6)
* team_members (label: team_members, type: select_multiple, required: false): Select the team members involved in the project.
* team_leader (label: team_leader, type: select_one, required: false): Select the team leader.
* project_type (label: project_type, type: select_one, required: false): Select the type of project.

### Approval and Submission (id: 21, 24, 25)
* approver (label: approver, type: text, required: false): Enter the approver's name.
* submitter (label: submitter, type: text, required: false): Enter the submitter's name.
* submitter_email (label: submitter_email, type: email, required: false): Enter the submitter's email.

### Additional Fields (id: 10, 11, 12, 13, 14, 15, 16, 17)
* team_member_1 (label: team_member_1, type: text, required: false): Enter the name of team member 1.
* team_member_2 (label: team_member_2, type: text, required: false): Enter the name of team member 2.
* team_member_3 (label: team_member_3, type: text, required: false): Enter the name of team member 3.
* team_member_4 (label: team_member_4, type: text, required: false): Enter the name of team member 4.
* team_member_5 (label: team_member_5, type: text, required: false): Enter the name of team member 5.
* team_member_6 (label: team_member_6, type: text, required: false): Enter the name of team member 6.
* team_member_7 (label: team_member_7, type: text, required: false): Enter the name of team member 7.
* team_member_8 (label: team_member_8, type: text, required: false): Enter the name of team member 8.
