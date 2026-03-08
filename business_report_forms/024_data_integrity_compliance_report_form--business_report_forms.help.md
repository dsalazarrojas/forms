<thinking>
To avoid duplication and ensure the accuracy of the provided form, I will review the form schema and create a clear and concise help guide for end-users.

Upon reviewing the schema, I noticed that the form has multiple sections for reporting and reviewing incidents. The form is designed to collect data on incidents, including their types, affected areas, and the actions taken to resolve them. The review section includes fields for the reviewer, their comments, and the status of the review.

To ensure that end-users understand the form and its purpose, I will create a help guide that breaks down each field and explains its relevance and requiredness.
</thinking>

# Data Integrity Compliance Report Form - Help Guide
## Purpose
The Data Integrity Compliance Report Form is designed to collect data on incidents and track their resolution progress. It is used to ensure that incidents are properly reported, reviewed, and resolved within the organization.

## How To Complete This Form
1. Fill in the form title and date.
2. Select the type of incident (e.g., Incident, Error, Warning, Critical).
3. Provide a description of the incident.
4. Specify the affected area and asset (if applicable).
5. Enter the incident reporter's name.
6. Choose the incident status (Active, Completed, Pending).
7. If necessary, provide a brief description of the action taken to resolve the incident.
8. If applicable, provide incident details and recommended actions.
9. Specify the action date and time.
10. Enter the review status (In Progress, Completed, Pending) and review comments.
11. Enter the reviewer's name and comments.
12. Specify the reviewer status (Active, Completed, Pending) and review date.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, not required): Enter a brief description of the incident. This field is not required, but it's recommended to provide context to the incident.
* **Date** (`date`, date, required): Enter the date of the incident.
* **Time** (`time`, time, required): Enter the time of the incident.
* **Description** (`description`, text, required): Provide a detailed description of the incident.
* **Incident Type** (`incident_type`, select_multiple, required): Select the type of incident (e.g., Incident, Error, Warning, Critical).
* **Affected Area** (`affected_area`, text, not required): If applicable, enter the affected area.
* **Affected Asset** (`affected_asset`, text, not required): If applicable, enter the affected asset.
* **Incident Reporter** (`incident_reporter`, text, required): Enter the name of the person reporting the incident.
* **Incident Status** (`incident_status`, select_one, required): Choose the status of the incident (Active, Completed, Pending).
* **Action Taken** (`action_taken`, text, not required): If applicable, provide a brief description of the action taken to resolve the incident.
* **Incident Details** (`incident_details`, text, not required): If applicable, provide additional incident details.
* **Action Recommendation** (`action_recommendation`, text, not required): If applicable, provide recommended actions.
* **Action Justification** (`action_justification`, text, not required): If applicable, provide justification for the action taken.
* **Review By** (`review_by`, text, not required): If applicable, enter the name of the reviewer.
* **Action Date** (`action_date`, date, required): Enter the date of the action taken.
* **Action Time** (`action_time`, time, required): Enter the time of the action taken.
* **Incident Comments** (`incident_comments`, text, not required): If applicable, provide additional incident comments.
* **Action Comments** (`action_comments`, text, not required): If applicable, provide comments on the action taken.
* **Attachment** (`attachment`, text, not required): If applicable, attach any supporting documentation.
* **Review Comments** (`review_comments`, text, not required): If applicable, provide comments on the review.
* **Review Status** (`review_status`, select_one, required): Choose the status of the review (In Progress, Completed, Pending).
* **Reviewer** (`reviewer`, text, required): Enter the name of the person reviewing the incident.
* **Reviewer Comments** (`reviewer_comments`, text, not required): If applicable, provide comments from the reviewer.
* **Reviewer Status** (`reviewer_status`, select_one, required): Choose the status of the review (Active, Completed, Pending).
* **Review Date** (`review_date`, date, required): Enter the date of the review.

## Tips
* Make sure to fill in all required fields to ensure accurate and complete reporting.
* If you are unsure about a field, refer to the field label for clarification.
* Attach any supporting documentation, if applicable.
