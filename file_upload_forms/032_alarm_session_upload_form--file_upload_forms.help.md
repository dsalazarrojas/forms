<thinking>... This form is designed for uploading alarm session data, which is a crucial process for monitoring and responding to security incidents. Before proceeding, please ensure you have the necessary information and evidence collected for the incident being reported. If you have already uploaded logs and video clips, please indicate that they are attached to the ticket instead of submitting them through this form.

# Alarm Session Upload Form - Help Guide

## Purpose
This form is used to upload alarm session data, including details about the alarm trigger, response actions, and supporting evidence. It's a crucial tool for incident reporting and analysis.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate and detailed information about the incident.
2. Ensure you have permission and authorization to upload the information, especially if you are not the original incident reporter.
3. Attach any supporting logs or video clips, if applicable.
4. Verify that the submitted data is accurate and complete.

## Field-by-Field Explanation

* **Technician/Officer Name** (`technician_name`, `text`, required): Enter your name as it appears in your official ID badge or personnel record.
* **Event or Session ID** (`event_id`, `text`, required): Enter the ID assigned to the incident or session.
* **Date of Incident** (`incident_date`, `date`, required): Enter the date the alarm was triggered.
* **Time of Alarm Trigger** (`incident_time`, `time`, required): Enter the time the alarm was triggered.
* **Client Name/Site Name** (`client_name`, `text`, required): Enter the name of the client or site where the incident occurred.
* **Alarm Session Details** (`section_alarm_data`, `note`, required): Provide a brief description of the alarm session, including any relevant details about the incident.
* **Type of Alarm Triggered** (`alarm_type`, `select_one`, required): Select the type of alarm that was triggered:
	+ Intrusion/Burglar
	+ Fire/Smoke
	+ Panic/Duress
	+ Medical Emergency
	+ Environmental (Flood/Temp)
	+ System Fault/Tamper
* **Zone(s) Triggered** (`zone_triggered`, `text`, required): Enter the zone(s) where the alarm was triggered, e.g., Zone 4 - Front Door.
* **Response Action Taken** (`response_action`, `select_one`, required): Select the action taken in response to the alarm:
	+ Dispatched Security
	+ Dispatched Emergency Services
	+ Contacted Keyholder
	+ Remote Reset (False Alarm)
	+ Verified via Video
* **Supporting Evidence and Logs** (`section_uploads`, `note`, required): This section is for uploading supporting logs or evidence. If you have attached them separately, select 'No (Available on request)'. Otherwise, provide a brief description of the attachments.
* **System Log File Uploaded?** (`log_file_present`, `select_one`, required): Select whether logs were uploaded:
	+ Yes (Attached to ticket)
	+ No (Available on request)
* **Video Clip Evidence Available?** (`video_clip_available`, `select_one`, required): Select whether video clips were available:
	+ True
	+ False
	+ N/A
* **Session Summary and Observations** (`session_summary`, `text`, required): Describe the flow of the alarm session, including any relevant observations.
* **Final Session Outcome** (`outcome_status`, `select_one`, required): Select the final outcome of the session:
	+ Resolved (Genuine Incident)
	+ Resolved (False Alarm - User Error)
	+ Resolved (False Alarm - Technical Fault)
	+ Pending Investigation
* **Further Follow-up Instructions** (`follow_up_instructions`, `text`, optional): If applicable, provide any further follow-up instructions.
* **I confirm that this session data is accurate and complete** (`validation_confirmation`, `select_one`, required): Select whether you confirm the accuracy and completeness of the submitted data:
	+ I confirm
	+ Other
