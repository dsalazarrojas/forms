# it_service_desk_feedback_questionnaire - Help Guide
## Purpose
The it_service_desk_feedback_questionnaire is a form designed to collect feedback and suggestions from users about the IT service desk. This information will be used to improve the service desk's performance and meet the needs and expectations of its users.

## How To Complete This Form
1. Please answer each question or section accurately and completely.
2. If you need to add more information than the provided fields allow, use the "Issue Description" fields (Issues Description 1-10).
3. If you are not sure about any of the fields, please provide your contact email and phone number so we can follow up with you.

## Field-by-Field Explanation
* **General Information** (`general_info`, text, required: false): 
    This section is for providing general information about your issue or feedback.
* **Contact Email** (`contact_email`, email, required: false): 
    Please enter your email address so we can follow up with you if needed.
* **Contact Phone** (`contact_phone`, text, required: false): 
    This is where you can enter your phone number for follow-up.
* **Contact Note** (`contact_note`, text, required: false): 
    Add any additional information about your contact preferences.
* **Issue Description** (`issue_description`, text, required: false): 
    Please describe your issue or feedback in this field. You can also add more details in the "Issue Description" fields (Issues Description 1-10) if needed.
* **Support Service** (`support_service`, select_one, required: false): 
    Please select the type of support you were trying to access when the issue occurred.
* **Support Level** (`support_level`, select_multiple, required: false): 
    Please select your level of satisfaction with the support you received.
* **Resolution** (`resolution`, date, required: false): 
    If the issue was resolved, enter the date it was resolved.
* **Resolution Date** (`resolution_date`, time, required: false): 
    Enter the time the issue was resolved.
* **Resolution Status** (`resolution_status`, text, required: false): 
    Briefly describe the resolution status of your issue.
* **Issue Priority** (`issue_priority`, select_one, required: false): 
    Please select the priority level of your issue.
* **Support Request** (`support_request`, text, required: false): 
    If applicable, describe the support request you made.
* **Support Request Type** (`support_request_type`, select_one, required: false): 
    Please select the type of support request you made.
* **Issue Description 1-10** (`issue_description_1`, text, required: false): 
    These fields are for additional description about your issue. Please use them if you have more details to add.
* **Resolution Note** (`resolution_note`, text, required: false): 
    Add any notes about the resolution.
* **Follow-up** (`follow_up`, text, required: false): 
    If you would like to be contacted for follow-up, please provide a brief message.
* **Feedback** (`feedback`, text, required: false): 
    Provide any feedback about your experience with the IT service desk.
