<thinking>
To create a user-facing help guide for the "Field Trip Incident Form", we must first understand its purpose and relevance. This form is designed to report incidents that occur during field trips, which are trips taken by students outside of the school or classroom. The form is likely used by staff or teachers to document and track incidents that arise during these trips, such as medical issues, misbehavior, or other unexpected events. It's essential to complete this form accurately and thoroughly to ensure that all necessary information is recorded and followed up on. The form should not be used for duplicate reporting; if the incident has already been reported, there's no need to fill out this form again.
</thinking>

# Field Trip Incident Form - Help Guide

## Purpose
The Field Trip Incident Form is used to report incidents that occur during field trips. It helps staff or teachers document and track incidents, ensuring that all necessary information is recorded and followed up on.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields as accurately and thoroughly as possible.
2. Select the correct incident type from the options provided.
3. Choose the correct incident status and assigned to personnel.
4. Provide any additional comments or notes as needed.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, `date`, required: false): Enter the date the incident occurred.
* **Student Name** (`student_name`, `text`, required: false): Enter the name of the student involved.
* **Student ID** (`student_id`, `text`, required: false): Enter the student's ID number.
* **Parent Name** (`parent_name`, `text`, required: false): Enter the name of the parent/guardian of the student.
* **Teacher Name** (`teacher_name`, `text`, required: false): Enter the name of the teacher who accompanied the student on the field trip.
* **Location** (`location`, `text`, required: false): Enter the location where the incident occurred.
* **Description** (`description`, `text`, required: false): Provide a brief description of what happened.
* **Incident Type** (`incident_type`, `select_one`, required: false): Select the type of incident that occurred (Medical, Other, Supervision, Transportation, or Unknown).
* **Incident Location** (`incident_location`, `text`, required: false): Enter the location where the incident occurred (if different from the general location).
* **Incident Details** (`incident_details`, `text`, required: false): Provide additional details about the incident.
* **Follow-up Action** (`follow_up_action`, `text`, required: false): Outline the follow-up actions taken.
* **Incident Status** (`incident_status`, `select_one`, required: true): Select the status of the incident (Active, In Progress, or Closed).
* **Assigned To** (`assigned_to`, `text`, required: false): Enter the name of the person assigned to follow up on the incident.
* **Incident Number** (`incident_number`, `number`, required: false): Enter the number associated with the incident (if applicable).
* **Incident Report Date** (`incident_report_date`, `date`, required: false): Enter the date the incident was reported.
* **Incident Time** (`incident_time`, `time`, required: false): Enter the time the incident occurred.
* **Student Count** (`student_count`, `number`, required: false): Enter the number of students involved.
* **Bus Number** (`bus_number`, `text`, required: false): Enter the bus number (if applicable).
* **Follow-up Date** (`follow_up_date`, `date`, required: false): Enter the date the follow-up was completed.
* **Follow-up Status** (`follow_up_status`, `select_multiple`, required: true): Select the status of the follow-up (Complete or Incomplete).
* **Follow-up Type** (`follow_up_type`, `select_multiple`, required: true): Select the type of follow-up (Parent or Teacher).
* **Notes** (`notes`, `text`, required: false): Enter any additional notes about the incident.
* **Follow-up Comments** (`follow_up_comments`, `text`, required: false): Enter any comments about the follow-up.
* **Incident Report Comments** (`incident_report_comments`, `text`, required: false): Enter any comments about the incident report.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Select the tool assigned to the incident (chatjim, chatjimmy, or chatjimmy2).
