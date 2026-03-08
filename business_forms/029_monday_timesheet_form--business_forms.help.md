# <string> - Help Guide

## Purpose
This form is used to track and report on work hours logged by team members. It captures essential information about the work dates, times, tasks, clients, projects, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant work dates from the calendar or manually enter the dates.
2. Choose the start and end times for the work sessions.
3. Enter the task(s) performed during the work session.
4. Select the client(s) the work session was for.
5. Select the project(s) the work session was related to.
6. Choose the tags that apply to the work session.
7. Enter the number of hours logged for the session.
8. If applicable, enter the submitter's details (name, email, etc.).
9. Select the team that worked on the project.
10. Identify the project manager and lead.
11. (Optional) Enter additional work dates.

## Field-by-Field Explanation

* **Work Date** (`work_date`, `date`, `required`): Enter the date(s) you worked on.
* **Start Time** (`start_time`, `time`, `required`): Choose the start time of the work session.
* **End Time** (`end_time`, `time`, `required`): Choose the end time of the work session.
* **Task** (`task`, `text`, `optional`): Enter the task(s) performed during the work session.
* **Client** (`client`, `select_one`, `required`): Select the client the work session was for.
* **Project** (`project`, `select_one`, `required`): Select the project(s) the work session was related to.
* **Tags** (`tags`, `select_multiple`, `required`): Choose the tags that apply to the work session.
* **Hours Logged** (`hours_logged`, `number`, `required`): Enter the number of hours logged for the session.
* **Submitted By** (`submitted_by`, `text`, `optional`): Enter the submitter's name (if applicable).
* **Submitter** (`submitter`, `select_one`, `required`): Select the submitter's role (if applicable).
* **Submitter Email** (`submitter_email`, `email`, `required`): Enter the submitter's email (if applicable).
* **Monday Team** (`monday_team`, `select_one`, `required`): Select the team that worked on the project.
* **Project Manager** (`project_manager`, `select_one`, `required`): Identify the project manager.
* **Project Lead** (`project_lead`, `select_one`, `required`): Identify the project lead.
* **Additional Work Dates** (multiple `work_date*`, `date`, `optional`): (Optional) Enter additional work dates if needed.
