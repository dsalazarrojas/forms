# it_service_desk_feedback_questionnaire - Help Guide
## Purpose

This form is designed to collect feedback and information about incidents that have been reported to the IT service desk. It is used to identify areas where we can improve our service and provide better support to our customers.

## How To Complete This Form

To complete this form, please follow these steps:

1. Answer the questions and select the relevant options for each field.
2. Make sure to provide as much detail as possible in the comment fields.
3. Submit the form once you have completed all the required fields.

## Field-by-Field Explanation

* **Feedback Question** (`feedback_question`, `text`, required): Please provide a brief description of the issue you experienced.
* **Rating** (`rating`, `number`, required): Rate the severity of the issue on a scale of 1-5.
* **Comment** (`comment`, `text`, optional): Provide additional comments about the issue, if any.
* **Email** (`email`, `email`, required): Enter your email address so we can contact you about this issue.
* **Phone** (`phone`, `text`, required): Enter your phone number in case we need to contact you about this issue.
* **Category** (`category`, `select_one`, required): Select the category that best describes the issue (bug, suggestion, complaint, or other).
* **Description** (`description`, `text`, required): Describe the issue in more detail.
* **Submitted By** (`submitted_by`, `select_one`, required): Select who submitted the issue (self, colleague, or other).
* **Submitted At** (`submitted_at`, `date`, required): Enter the date and time when the issue was submitted.
* **Submitted Time** (`submitted_time`, `time`, required): Enter the time when the issue was submitted.
* **Submitted Via** (`submitted_via`, `select_one`, required): Select how the issue was submitted (web, email, or phone).
* **Help Request** (`help_request`, `select_multiple`, optional): Check if help was requested (yes or no).
* **Follow Up Request** (`follow_up_request`, `select_one`, optional): Check if a follow-up is required (yes or no).
* **Contact Request** (`contact_request`, `select_one`, optional): Check if contact is required (yes or no).
* **Support Agent** (`support_agent`, `text`, optional): Enter the name of the support agent who helped with the issue.
* **Additional Comments** (`additional_comments`, `text`, optional): Provide any additional comments about the issue.
* **Support Service** (`support_service`, `select_one`, required): Select the support service that was involved (bug, help desk, incident management, change management, problem management, request fulfillment, release and deployment).
* **Support Service Comment** (`support_service_comment`, `text`, optional): Enter any comments about the support service that was involved.
* **Assigned Agent** (`assigned_agent`, `select_one`, required): Select the agent who was assigned to the issue (agent1, agent2, or agent3).
* **Assigned Date** (`assigned_date`, `date`, required): Enter the date when the issue was assigned to an agent.
* **Resolved Date** (`resolved_date`, `date`, optional): Enter the date when the issue was resolved.
* **Resolution Status** (`resolution_status`, `select_one`, required): Select the resolution status (resolved or pending).
* **Closed Date** (`closed_date`, `date`, required): Enter the date when the issue was closed.
* **Closed By** (`closed_by`, `select_one`, required): Select who closed the issue (agent1, agent2, or agent3).
* **Closed Status** (`closed_status`, `select_one`, required): Select the closed status (resolved or closed).
