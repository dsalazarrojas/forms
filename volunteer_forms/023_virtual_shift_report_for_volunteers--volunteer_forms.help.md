# Virtual Shift Report For Volunteers - Help Guide

## Purpose
The Virtual Shift Report for Volunteers form is used by volunteers to report their shifts for a given period. This form ensures that volunteer shifts are accurately recorded and can be utilized by management for scheduling and coordination purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form fields carefully to understand what information is required.
2. Fill in the form accurately with your shift details.
3. Ensure you have answered all the required fields.
4. Review the form for completeness before submitting.

## Field-by-Field Explanation

* **Virtual Shift Report** (`volunteer_shift_report`, note, required: false): This field is the title of the form, indicating that it's a report for volunteers.
* **Assigned Volunteer** (`assigned_volunteer`, select_multiple, required: false): Check if you were assigned to a particular shift or not. Select 'Yes' if you were assigned, 'No' otherwise.
* **Shifts** (`shifts`, select_one, required: false): Check if you worked any shifts during the given period. Select 'Yes' if you worked, 'No' otherwise.
* **Date** (`date`, date, required: false): Enter the date of the shift.
* **Start Time** (`start_time`, time, required: false): Enter the start time of the shift.
* **End Time** (`end_time`, time, required: false): Enter the end time of the shift.
* **Hours Worked** (`hours_worked`, number, required: false): Enter the number of hours you worked during the shift.
* **Notes** (`notes`, select_multiple, required: false): Check if you have any notes or comments about the shift. Select 'Yes' if you have notes, 'No' otherwise.
* **Submit Shift** (`submit_shift`, select_one, required: false): Check if you want to submit the shift report. Select 'Yes' if you want to submit, 'No' otherwise.
