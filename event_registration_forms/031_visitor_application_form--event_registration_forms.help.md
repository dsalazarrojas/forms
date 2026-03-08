# Visitor Application Form - Help Guide
## Purpose
This form is for collecting information from visitors for events, meetings, or seminars.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your event details in the "Event Details" section.
2. Provide your visitor name and contact information in the "Visitor Information" section.
3. Select the type of event (Conference, Meeting, or Seminar) in the "Event Type" section.
4. Enter the start and end dates of the event, if applicable.
5. Provide a check-in time for the event.
6. Fill in any additional notes about the event or your visit.
7. If an assigned tool is required for the event, provide it in the "Assigned Tool" section.

## Field-by-Field Explanation
* **Event Details** (`event_details`, text, required: false): Enter a brief description of the event you are attending.
* **Visitor Name** (`visitor_name`, text, required: false): Enter your name as it will be listed on the event badge.
* **Visitor Email** (`visitor_email`, email, required: false): Enter your email address for communication and follow-up.
* **Visitor Phone** (`visitor_phone`, text, required: false): Enter your phone number for communication and follow-up.
* **Event Type** (`event_type`, select_one, required: true): Select the type of event you are attending (Conference, Meeting, or Seminar).
* **Start Date** (`start_date`, date, required: false): Enter the start date of the event, if applicable.
* **End Date** (`end_date`, date, required: false): Enter the end date of the event, if applicable.
* **Checkin Time** (`checkin_time`, time, required: false): Enter the time you will check in for the event.
* **Facility** (`facility`, text, required: false): Enter any facility-related information about the event.
* **Note** (`note`, note, required: false): Provide any additional notes about the event or your visit.
* **Assigned Tool** (`assigned_tool`, text, required: false): If a specific tool is required for the event, enter it here.
