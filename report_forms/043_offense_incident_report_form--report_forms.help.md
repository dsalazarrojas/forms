# offense incident report form - Help Guide
## Purpose
The "Offense Incident Report Form" is designed to document and report incidents that have occurred. This form helps to gather information about the incident, including details about the perpetrator, the incident itself, and any subsequent reviews and actions taken.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Report Date** in the format `MM/DD/YYYY` to indicate when the report was submitted.
2. Select the **Offense Type** to classify the incident as either "Yes" or "No".
3. Provide a detailed description of the incident in the **Incident Details** field.
4. Enter the **Perpetrator**'s name and any relevant contact information.
5. List any witnesses to the incident in the **Witnesses** field.
6. If necessary, enter contact information for the **Perpetrator**.
7. Enter the **Location** where the incident occurred.
8. Provide a brief **Report Reason** for filing the incident report.
9. Enter your contact information as the **Incident Reporter**.
10. Classify the incident with a **Status** (e.g. "Active", "Closed", "Pending").
11. If necessary, set a **Priority** level (e.g. "High", "Medium", "Low").
12. Select a **Category** for the incident (e.g. "Theft", "Harassment", "Other").
13. Enter the **Incident Date** in the format `MM/DD/YYYY` to indicate when the incident occurred.
14. Enter the date the report was submitted in the **Report Submitted** field.
15. Enter the date the report was last updated in the **Report Updated** field.
16. Enter the date the report was closed in the **Report Closed** field, if applicable.
17. Provide a brief description of the incident in the **Incident Description** field.
18. Enter any **Additional Notes** about the incident.
19. If applicable, attach any relevant documents or evidence in the **Attachment** field.
20. Enter any **Reviewer Notes**.
21. Enter the reviewer's name in the **Reviewer** field.
22. Sign the report with your reviewer signature in the **Reviewer Signature** field.
23. Enter any **Reviewer Comments**.
24. Enter the date the report was reviewed in the **Review Date** field.

## Field-by-Field Explanation

* **Report Date** (`report_date`, date, required): Enter the date the report was submitted in the format `MM/DD/YYYY`.
* **Offense Type** (`offense_type`, select_one, required): Select "Yes" or "No" to classify the incident.
* **Incident Details** (`incident_details`, note, required): Provide a detailed description of the incident.
* **Perpetrator** (`perpetrator`, text, required): Enter the name of the person or entity involved in the incident.
* **Witnesses** (`witnesses`, text, required): List any witnesses to the incident.
* **Perpetrator Contact Information** (`perpetrator_contact`, text, required): Enter contact information for the perpetrator.
* **Location** (`location`, text, required): Enter the location where the incident occurred.
* **Report Reason** (`report_reason`, text, required): Enter a brief reason for filing the incident report.
* **Incident Reporter** (`incident_reporter`, text, required): Enter your contact information as the incident reporter.
* **Incident Status** (`incident_status`, select_one, required): Select the status of the incident (e.g. "Active", "Closed", "Pending").
* **Incident Priority** (`incident_priority`, select_one, required): Select the priority level of the incident (e.g. "High", "Medium", "Low").
* **Incident Category** (`incident_category`, select_one, required): Select a category for the incident (e.g. "Theft", "Harassment", "Other").
* **Incident Date** (`incident_date`, date, required): Enter the date the incident occurred in the format `MM/DD/YYYY`.
* **Report Submitted** (`report_submitted`, date, required): Enter the date the report was submitted.
* **Report Updated** (`report_updated`, date, required): Enter the date the report was last updated.
* **Report Closed** (`report_closed`, date, required): Enter the date the report was closed, if applicable.
* **Report Closed Reason** (`report_closed_reason`, text, required): Enter the reason why the report was closed.
* **Incident Description** (`incident_description`, note, required): Provide a brief description of the incident.
* **Incident Notes** (`incident_notes`, note, required): Enter any additional notes about the incident.
* **Attachment** (`attachment`, text, required): Attach any relevant documents or evidence.
* **Reviewer Notes** (`reviewer_notes`, note, required): Enter any reviewer notes.
* **Reviewer** (`reviewer`, text, required): Enter the reviewer's name.
* **Reviewer Signature** (`reviewer_signature`, text, required): Sign the report with your reviewer signature.
* **Reviewer Comments** (`review_comments`, note, required): Enter any reviewer comments.
* **Review Date** (`review_date`, date, required): Enter the date the report was reviewed.
