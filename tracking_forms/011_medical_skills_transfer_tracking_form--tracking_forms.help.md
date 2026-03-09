# Medical Skills Transfer Tracking Form - Help Guide
## Purpose
The Medical Skills Transfer Tracking Form is used to document and track the transfer of medical skills between professionals in a clinical or healthcare setting. This form helps to standardize the process of tracking assessments, follow-ups, and next actions related to medical skills transfer.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the page "Clinical Skills Session".
2. Enter the "Transfer Session ID" and "Transfer Date".
3. Describe the "Clinical Skills Transfer Session" and the "Medical Skills Transfer Session".
4. Specify the "Skills Transferred" and the number of skills transferred.
5. Identify the "Skills Transferred By".
6. Provide "Transfer Session Comments".
7. If applicable, select the "Assessed Skills" and "Assessed By" and add "Assessments Follow-up Comments".
8. Specify the "Next Action" and the "Next Action Due Date and Time" and the "Next Action By".
9. Provide "Transfer Session Notes" and "Transfer Session Comments".
10. Finally, select the "Follow-up Needed" and "Completed Transfer Session" status.

## Field-by-Field Explanation
* **Clinical Skills Session** (`medical_skills_transfer_session`, text, required): Describe the clinical skills transfer session, including the details of the skills transferred.
* **Assessments and Follow-up** (`assessments_and_followup`, select_one, required): Select "Assessment" or "Follow-up" to indicate the type of session.
* **Transfer Session ID** (`transfer_session_id`, number, required): Enter the unique ID for the transfer session.
* **Transfer Date** (`transfer_date`, date, required): Enter the date of the transfer session.
* **Clinical Skills Transfer Session** (`clinical_skills_transfer_session`, note, required): Describe the clinical skills transfer session in detail.
* **Medical Skills Transfer Session** (`medical_skills_transfer_session`, text, required): Describe the medical skills transfer session.
* **Skills Transferred** (`skills_transferred`, number, required): Specify the number of skills transferred.
* **Skills Transferred By** (`skills_transferred_by`, text, required): Identify the person or entity that transferred the skills.
* **Transfer Session Comments** (`transfer_session_comments`, text, optional): Add any additional comments about the transfer session.
* **Assessed Skills** (`assessed_skills`, select_multiple, optional): Select the skills that were assessed during the session.
* **Assessed By** (`assessed_by`, text, required): Identify the person who assessed the skills.
* **Assessments Follow-up Comments** (`assessments_followup_comments`, text, optional): Add any follow-up comments about the assessments.
* **Medical Skills Transfer Session Notes** (`medical_skills_transfer_session_notes`, note, optional): Add any additional notes about the medical skills transfer session.
* **Next Action Due Date** (`next_action_due_date`, date, optional): Enter the due date for the next action.
* **Next Action Due Time** (`next_action_due_time`, time, optional): Enter the due time for the next action.
* **Next Action By** (`next_action_by`, text, required): Identify the person who will perform the next action.
* **Next Action** (`next_action`, text, required): Specify the next action to be taken.
* **Transfer Session Notes** (`transfer_session_notes`, note, optional): Add any additional notes about the transfer session.
* **Follow-up Needed** (`followup_needed`, select_one, required): Select "Yes" if follow-up is needed, otherwise "No".
* **Completed Transfer Session** (`completed_transfer_session`, select_one, required): Select "Yes" if the transfer session is completed, otherwise "No".
* **Transfer Session Status** (`transfer_session_status`, select_one, required): Select "Completed", "In Progress", or "Not Started" to indicate the status of the transfer session.
* **Medical Skills Transfer Session Status Comments** (`medical_skills_transfer_session_status_comments`, text, optional): Add any comments about the status of the transfer session.
* **Medical Skills Transfer Session Notes Comments** (`medical_skills_transfer_session_notes_comments`, text, optional): Add any additional comments about the medical skills transfer session.
* **Transfer Session Comments** (`transfer_session_comments`, text, optional): Add any comments about the transfer session.
* **Transfer Session Completed Date** (`transfer_session_completed_date`, date, optional): Enter the date the transfer session was completed.

Note: This guide is based on the provided YAML fields and explanations. If there are any discrepancies, please let me know and I'll make the necessary adjustments.
