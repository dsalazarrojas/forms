# security_officer_daily_shift_form - Help Guide
## Purpose
The security_officer_daily_shift_form is designed for security officers to report their daily activities, including any incidents they've encountered, and provide comments on their observations. This form helps record-keeping and communication within the team.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the `daily_duties` field with a brief description of your daily tasks and activities.
2. In the `incidents` fields, select any incidents you've encountered during your shift. Note that:
	* `incidents` field (id: 2) is a select_multiple field, allowing you to select multiple incidents.
	* `incidents` field (id: 4) is a select_one field, allowing you to select only one incident.
3. In the `observations` field, provide any relevant comments or observations about your shift.
4. In the `comments` field, add any additional comments or notes about your day.

## Field-by-Field Explanation
* **Daily Duties** (`daily_duties`, text, optional): A field to describe your daily tasks and activities.
* **Incidents** (`incidents`, select_multiple, optional): Select any incidents that occurred during your shift.
* **Observations** (`observations`, text, optional): A field to provide any comments or observations about your shift.
* **Incidents** (`incidents`, select_one, optional): Select one incident that was the most significant or relevant.
* **Comments** (`comments`, text, optional): A field to add any additional comments or notes about your day.

## Tips
* Make sure to report new incidents only, avoiding duplication.
* Be thorough and accurate when filling in the `observations` and `comments` fields.
* If you're unsure about any field, consult with your supervisor or colleague for guidance.
