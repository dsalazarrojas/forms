<thinking>...</thinking>

# Calendar Update Request Form - Help Guide

## Purpose
This form is designed to collect information for calendar updates, which will be used to modify events on the company calendar. Please fill out the form carefully to ensure your updates are accurate and processed efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and email address to identify yourself and your contact information.
2. Specify the update type, event name, and date/time details.
3. Select the calendar to be updated and any additional details such as event location, description, and attendees.
4. Specify any reminders or approval requirements.

## Field-by-Field Explanation
* **Your Name** (`requester_name`, text, required): Enter your full name.
* **Email Address** (`email_address`, email, required): Enter your email address to confirm your contact information.
* **Phone Number** (`phone_number`, text, optional): Enter your contact number (optional).
* **Department** (`department`, text, optional): Enter the name of your department or team.
* **Request Date** (`request_date`, date, required): Enter the date of the current event update request.
* **Update Type** (`update_type`, select_one, required): Select the type of update needed:
	+ Add new event
	+ Modify existing event
	+ Cancel event
	+ Reschedule event
	+ Update event details
	+ Recurring event change
* **Event Name** (`event_name`, text, required): Enter the name of the event to be updated.
* **Current Date** (`current_date`, date, optional): Enter the original event date if modifying (leave blank if not applicable).
* **Current Time** (`current_time`, time, optional): Enter the original event time if modifying (leave blank if not applicable).
* **New Date** (`new_date`, date, optional): Enter the updated event date if applicable.
* **New Time** (`new_time`, time, optional): Enter the updated event time if applicable.
* **Event Location** (`event_location`, text, optional): Enter the location of the event.
* **Event Description** (`event_description`, text, optional): Enter a brief description of the event.
* **Attendees** (`attendees`, text, optional): Enter the names of attendees or invitees.
* **Priority** (`priority`, select_one, required): Select the urgency level:
	+ Low
	+ Normal
	+ High
	+ Urgent
* **Reason for Change** (`reason_for_change`, text, optional): Enter the reason for the update (optional).
* **Recurring Pattern** (`recurrence_pattern`, select_one, optional): Select the recurrence pattern:
	+ One-time event
	+ Daily
	+ Weekly
	+ Monthly
	+ Yearly
	+ Custom
* **Recurring End Date** (`recurrence_end`, date, optional): Enter the date when the recurrence ends if applicable.
* **Reminders Needed** (`reminders_needed`, select_one, optional): Select reminder options:
	+ No reminders
	+ 15 minutes before
	+ 30 minutes before
	+ 1 hour before
	+ 1 day before
	+ Multiple reminders
* **Calendar to Update** (`calendar_to_update`, select_one, required): Select the calendar to be updated:
	+ Main company calendar
	+ Department calendar
	+ Team calendar
	+ Personal calendar
	+ Shared calendar
	+ Other
* **Approval Needed** (`approval_needed`, select_one, optional): Select approval options:
	+ False
	+ Yes, manager approval
	+ Yes, admin approval
	+ Yes, team approval
* **Additional Notes** (`additional_notes`, text, optional): Enter any additional information or context.
