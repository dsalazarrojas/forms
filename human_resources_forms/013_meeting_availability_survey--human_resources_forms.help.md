</thinking>

# Meeting Availability Survey - Help Guide

## Purpose
This form is used to collect information about meeting availability and requirements.

## How To Complete This Form

To complete this form, follow these steps:

1. Select "Meeting Weekly", "Meeting Daily", "Meeting Bi-Weekly", "Meeting Monthly", "Meeting Quarterly", "Meeting Annually", or "Meeting As Needed" for the "Meeting Frequency" field to indicate how often you are available for meetings.
2. If you selected "Meeting As Needed" above, please specify your meeting frequency in the "meeting_frequency_other" field.
3. Indicate if you are "Yes" or "No" available for meetings. If you selected "No" and would like to provide more information, use the "manager_availability_other" field.
4. If you selected "Available" for "employee_availability", indicate how many days per week you are available for meetings in the "meeting_duration" field.
5. Enter the manager's name, department, email, and phone number for the meeting.
6. In the "meeting_request" field, describe any specific meeting requests you have.
7. In the "meeting_response" field, enter a brief response to the meeting invite.
8. If the meeting is not required, use the "meeting_response_other" field to explain why.

## Field-by-Field Explanation

* **meeting_availability** (`meeting_availability_survey_form`, `select_one`, required: false): This field indicates if you are available for meetings.
* **meeting_date** (`meeting_date`, `date`, required: false): Not used in this form.
* **start_time** (`start_time`, `time`, required: false): Not used in this form.
* **end_time** (`end_time`, `time`, required: false): Not used in this form.
* **manager_name** (`manager_name`, `text`, required: false): The manager's name for the meeting.
* **meeting_location** (`meeting_location`, `text`, required: false): The meeting location.
* **comment** (`comment`, `text`, required: false): Not used in this form.
* **manager_title** (`manager_title`, `text`, required: false): Not used in this form.
* **manager_department** (`manager_department`, `text`, required: false): The manager's department.
* **manager_email** (`manager_email`, `text`, required: false): The manager's email address.
* **manager_phone** (`manager_phone`, `text`, required: false): The manager's phone number.
* **meeting_duration** (`meeting_duration`, `number`, required: false): How many days per week you are available for meetings if you selected "Available".
* **meeting_frequency** (`meeting_frequency`, `select_one`, required: true): How often you are available for meetings.
* **meeting_frequency_other** (`meeting_frequency_other`, `text`, required: false): Specify if you selected "Meeting As Needed" above.
* **manager_availability** (`manager_availability`, `select_one`, required: false): If the manager is available, indicate as "Yes" or "No". If "No", provide more information in the "manager_availability_other" field.
* **manager_availability_other** (`manager_availability_other`, `text`, required: false): Provide more information if the manager is not available for meetings.
* **employee_availability** (`employee_availability`, `select_one`, required: false): If you are available, indicate as "Yes", "Not Available", or "Unavailable".
* **employee_availability_other** (`employee_availability_other`, `text`, required: false): Provide more information if you are not available for meetings.
* **meeting_request** (`meeting_request`, `text`, required: false): Describe any specific meeting requests you have.
* **meeting_response** (`meeting_response`, `text`, required: false): Enter a brief response to the meeting invite.
* **meeting_response_required** (`meeting_response_required`, `text`, required: false): Not used in this form.
* **meeting_response_other** (`meeting_response_other`, `text`, required: false): Not used in this form.
