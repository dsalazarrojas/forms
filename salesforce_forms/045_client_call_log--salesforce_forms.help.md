# Client Call Log - Help Guide
## Purpose
The Client Call Log form is designed to track and document client interactions, ensuring consistency and providing future reference.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill out the **Staff Member/Counselor Name** field with the name of the staff member who made or received the call.
2. Enter the **Client Full Name** in the relevant field.
3. Type the **Client ID/Case Number** if applicable.
4. Select the **Date of Call** from the calendar picker or type it manually.
5. Choose the **Start Time** of the call.
6. Enter the **Duration (Minutes)** of the call.
7. In the **Type of Call** section, choose the type of call that best describes the interaction, such as **Outbound (Check-in)** or **Inbound (Inquiry)**.
8. Select the **Call Status**, indicating the outcome of the call, like **Completed** or **Left Voicemail**.
9. Identify the **Primary Topic of Discussion**, which can be **Progress Update**, **Support/Guidance**, etc.
10. Provide a **Detailed Summary of Conversation** in the text field.
11. If applicable, describe the **Client's Emotional State** using the options provided.
12. If follow-up is required, select **True** and add a description of the follow-up action in the **Description of Follow-up Action** field.
13. Finally, decide whether to sync this log to Salesforce/CRM and whether a supervisor should review this call.

## Field-by-Field Explanation

* **Staff Member/Counselor Name** (`staff_member_name`, text, required): Enter the name of the staff member who made or received the call.
* **Client Full Name** (`client_name`, text, required): Enter the client's full name.
* **Client ID/Case Number** (`client_id`, text, not required): If applicable, enter the client's ID or case number.
* **Date of Call** (`date_of_call`, date, required): Select the date of the call from the calendar picker or type it manually.
* **Start Time** (`time_of_call`, time, required): Choose the start time of the call.
* **Duration (Minutes)** (`duration_minutes`, number, required): Enter the length of the call in minutes.
* **Type of Call** (`call_type`, select_one, required): Choose the type of call that best describes the interaction.
* **Call Status** (`call_status`, select_one, required): Indicate the outcome of the call, like completed or left voicemail.
* **Primary Topic of Discussion** (`primary_topic`, select_one, required): Select the main topic of the discussion.
* **Detailed Summary of Conversation** (`call_summary`, text, required): Provide a detailed summary of the conversation.
* **Client's Emotional State** (`emotional_state_obs`, select_one, not required): Describe the client's emotional state, if applicable.
* **Is follow-up required?** (`follow_up_required`, select_one, required): Decide if a follow-up is needed.
* **Description of Follow-up Action** (`follow_up_action`, text, not required): If follow-up is required, describe the action to be taken.
* **Sync this log to Salesforce/CRM?** (`sync_to_salesforce`, select_one, not required): Decide whether to sync this log to Salesforce/CRM.
* **Internal Private Notes** (`private_internal_note`, text, not required): Add private internal notes not visible to the client.
* **Request Supervisor Review of this call?** (`supervisor_review_needed`, select_one, required): Decide if a supervisor should review this call.
* **Log Saved Successfully** (`call_log_footer`, note, not required): A footer message indicating the log has been saved.
