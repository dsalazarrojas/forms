# Health Link Deployment Request - Help Guide
## Purpose
The purpose of this form is to schedule maintenance or repair tasks for a health-related facility or equipment. It is intended for both the requestor and the engineer to provide necessary information for the task.

## How To Complete This Form
1. Fill in the Request Details section, providing a brief description of the task you would like to schedule.
2. Select the Site Visit date from the calendar.
3. Enter the Start Time and End Time for the task.
4. Enter the Requestor's Name, Department, and Email.
5. Select the Priority of the task (High, Medium, or Low).
6. Select the Status (In Progress, Scheduled, Completed, or Cancelled).
7. If necessary, select the Scheduled Date and Time, and enter the Scheduled Location.
8. Enter the Requestor's Phone number (if applicable).

## Field-by-Field Explanation
- **Request Details** (`request_details`, text, required): Please enter a brief description of the task you would like to schedule.
- **Site Visit** (`site_visit`, date, required): Select the date for the site visit.
- **Start Time** (`start_time`, time, required): Enter the start time for the task.
- **End Time** (`end_time`, time, required): Enter the end time for the task.
- **Requestor** (`requestor_name`, text, required): Enter the name of the person making the request.
- **Requestor Department** (`requestor_department`, text, required): Enter the department of the person making the request.
- **Engineer** (`engineer_name`, text, required): Enter the name of the person responsible for completing the task.
- **Engineer Department** (`engineer_department`, text, required): Enter the department of the person responsible for completing the task.
- **Priority** (`priority`, select_one, optional): Select the priority of the task (High, Medium, or Low).
- **Status** (`status`, select_one, required): Select the status of the task (In Progress, Scheduled, Completed, or Cancelled).
- **Scheduled Date** (`scheduled_date`, date, optional): If this task is scheduled, select the date.
- **Scheduled Time** (`scheduled_time`, time, optional): If this task is scheduled, enter the scheduled time.
- **Scheduled Location** (`scheduled_location`, text, optional): If this task is scheduled, enter the location.
- **Requestor Email** (`requestor_email`, email, required): Enter the email of the person making the request.
- **Requestor Phone** (`requestor_phone`, text, optional): Enter the phone number of the person making the request.
