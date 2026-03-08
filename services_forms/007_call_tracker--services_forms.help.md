# Call Tracker - Help Guide
## Purpose
The Call Tracker form is designed to collect and document details about service calls, enabling the service team to track and prioritize calls efficiently.

## How To Complete This Form
1. Enter the date of the call in the "Date of Call" field.
2. Select the nature of the call from the "Nature of Call" dropdown menu.
3. Enter the phone number of the caller and their name, including both first and last name.
4. Select the priority level of the call from the "Priority Level" dropdown menu.
5. Provide a detailed summary of the conversation and concerns in the "Detailed Call Notes" field.
6. Select the outcome of the call from the "Call Outcome" dropdown menu.
7. Enter any next action items.
8. Enter the estimated call duration in the "Estimated Call Duration" field (if applicable).

## Field-by-Field Explanation
* **Date of Call** (`id: 2`, `type: date`, `required: true`): Enter the date of the call in the standard date format.
* **Nature of Call** (`id: 7`, `type: select_one`, `required: true`): Select the primary reason for the call from the dropdown menu.
	+ Options: 
		- Inquiry - General
		- New Service Request
		- Billing Inquiry
		- Technical Support
		- Complaint
		- Other
* **Phone Number** (`id: 5`, `type: text`, `required: true`): Enter the phone number of the caller in the format XXX-XXX-XXXX.
* **Name of Caller** (`id: 4`, `type: text`, `required: true`): Enter the name of the caller, including both first and last name.
* **Priority Level** (`id: 8`, `type: select_one`, `required: true`): Select the urgency of the request from the dropdown menu.
	+ Options:
		- Low
		- Medium
		- High
		- Critical
* **Detailed Call Notes** (`id: 9`, `type: text`, `required: true`): Provide a summary of the conversation and concerns.
* **Call Outcome** (`id: 10`, `type: select_one`, `required: true`): Select the result of the interaction from the dropdown menu.
	+ Options:
		- Resolved
		- Pending Follow-up
		- Escalated to Manager
		- Referred to Third Party
		- Closed - No action needed
* **Next Action Items** (`id: 11`, `type: text`, `required: false`): Enter any next action items.
* **Estimated Call Duration** (`id: 14`, `type: number`, `required: false`): Enter the estimated duration of the call in minutes.
* **Caller Name** (`id: 4`, `type: text`, `required: true`): Enter the name of the caller, including both first and last name.
* **Email Address** (`id: 6`, `type: email`, `required: false`): Enter the email address of the caller (if applicable).
* **Representative ID - Name** (`id: 13`, `type: text`, `required: true`): Enter the name of the representative who took the call.
* **Call Duration Est** (`id: 14`, `type: number`, `required: false`): Enter the estimated duration of the call in minutes.
* **Follow-up Date** (`id: 12`, `type: date`, `required: false`): Enter the follow-up date (if applicable).
