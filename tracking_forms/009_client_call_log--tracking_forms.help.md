# Client Call Log - Help Guide
## Purpose
The Client Call Log form is used to record and track client interactions, including calls, messages, and other communication. It helps to provide a clear and detailed history of client engagements, enabling staff to efficiently manage follow-up actions, client satisfaction, and issue resolution.

## How To Complete This Form
To complete the Client Call Log form, follow these steps:

1. Select a date for the call.
2. Choose the time the call occurred.
3. Fill in the client's first and last name, ensuring accuracy in spelling and capitalization.
4. Enter the client's email address (if applicable).
5. Enter the client's phone number.
6. Choose the type of call (e.g., inbound, outbound, voicemail, etc.).
7. Select the primary purpose of the call (e.g., sales inquiry, customer support, etc.).
8. Choose the call duration (e.g., under 1 minute, 1-5 minutes, etc.).
9. Identify the staff member who handled the call.
10. Provide a brief description of the call (call summary).
11. If applicable, list any client concerns or questions.
12. List any action items that need to be completed.
13. Set the priority level for follow-up actions.
14. Determine if follow-up is required and set the follow-up date (if applicable).
15. Assign the follow-up action to a staff member.
16. Choose the outcome of the call (e.g., issue resolved, referral made, etc.).
17. Assess the client's satisfaction level.
18. Add any additional relevant information (additional notes).
19. Record the date this log entry was created.

## Field-by-Field Explanation
* **Call Date** (`call_date`, `date`, **Required**): Enter the date the call occurred.
* **Call Time** (`call_time`, `time`, **Required**): Enter the time the call occurred.
* **Client First Name** (`client_first_name`, `text`, **Required**): Enter the client's first name, ensuring accuracy in spelling and capitalization.
* **Client Last Name** (`client_last_name`, `text`, **Required**): Enter the client's last name, ensuring accuracy in spelling and capitalization.
* **Client Email** (`client_email`, `email`, **Not Required**): Enter the client's email address, if applicable.
* **Client Phone Number** (`client_phone`, `text`, **Required**): Enter the client's phone number.
* **Client Company** (`client_company`, `text`, **Not Required**): Enter the client's company name, if applicable.
* **Call Type** (`call_type`, `select_one`, **Required**): Choose the type of call (e.g., inbound, outbound, voicemail, etc.).
* **Call Category** (`call_category`, `select_one`, **Required**): Select the primary purpose of the call (e.g., sales inquiry, customer support, etc.).
* **Call Duration** (`call_duration`, `select_one`, **Required**): Choose the length of the call (e.g., under 1 minute, 1-5 minutes, etc.).
* **Staff Member Handling Call** (`staff_member`, `text`, **Required**): Identify the staff member who handled the call.
* **Call Summary** (`call_summary`, `text`, **Required**): Provide a brief description of the call.
* **Client Concerns or Questions** (`client_concerns`, `text`, **Not Required**): List any client concerns or questions, if applicable.
* **Action Items** (`action_items`, `text`, **Not Required**): List any action items that need to be completed.
* **Priority Level** (`priority_level`, `select_one`, **Required**): Set the urgency of follow-up actions (e.g., low, medium, high, etc.).
* **Is Follow-Up Required?** (`follow_up_required`, `select_one`, **Required**): Determine if follow-up is required and set to 'True' or 'False'.
* **Follow-Up Date** (`follow_up_date`, `date`, **Not Required**): Set the date for follow-up actions.
* **Follow-Up Assigned To** (`follow_up_assigned_to`, `text`, **Not Required**): Assign the follow-up action to a staff member.
* **Call Outcome** (`call_outcome`, `select_one`, **Required**): Choose the outcome of the call (e.g., issue resolved, referral made, etc.).
* **Client Satisfaction Level** (`client_satisfaction`, `select_one`, **Not Required**): Assess the client's satisfaction level (e.g., very satisfied, satisfied, etc.).
* **Additional Notes** (`additional_notes`, `text`, **Not Required**): Add any other relevant information about the call.
* **Log Entry Date** (`log_entry_date`, `date`, **Required**): Record the date this log entry was created.
