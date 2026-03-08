# DLP Incident Response Checklist - Help Guide
## Purpose
The DLP Incident Response Checklist is a form used to document and manage incidents within an organization. It helps collect and track relevant information about incidents, ensuring a standardized approach to incident response and review.

## How To Complete This Form
1. Select the **Incident Date** field and choose the date the incident occurred.
2. Choose the **Incident Type** from the available options.
3. Enter a brief **Incident Description** of what happened.
4. Select the **Prophets Affected** if any prophets were involved in the incident.
5. Enter the **Incident Cause** and **Incident Effect** in the respective fields.
6. Select the **Incident Classification** category.
7. Enter the **Incident Response** actions taken.
8. Choose the **Incident Status** as Active or Inactive.
9. Add any additional **Incident Notes** about the incident.
10. Enter the **Incident Reporter** who reported the incident.
11. Select if the incident **Escalate** and to whom it should be escalated.
12. Enter a brief **Incident Report** of the incident.
13. Select the **Incident Review** date.
14. Choose if the **Incident Close** is complete.
15. Enter the reason for **Incident Close Reason**.
16. Enter who **Closed By**.
17. Enter the date the **Incident Closed Date**.
18. Select the time the **Incident Closed Time**.
19. Select the **Prophets Involved** if any.
20. Enter the **Reported By** who reported the incident.
21. Select the **Incident Classification Category**.
22. Select the **Incident Classification Subcategory**.
23. Add any relevant **Notes** about the incident.
24. Review and update the form as necessary.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, date, required): Enter the date the incident occurred.
* **Incident Type** (`incident_type`, select_one, required): Choose the type of incident.
* **Incident Description** (`incident_description`, text, required): Enter a brief description of what happened.
* **Incident Location** (`incident_location`, text, optional): Enter the location of the incident (if necessary).
* **Prophets Affected** (`prophets_affected`, select_multiple, optional): Select if any prophets were affected by the incident.
* **Incident Cause** (`incident_cause`, text, optional): Enter the cause of the incident.
* **Incident Effect** (`incident_effect`, text, optional): Enter the effect of the incident.
* **Incident Classification** (`incident_classification`, select_one, optional): Select the incident classification category.
* **Incident Response** (`incident_response`, text, optional): Enter the incident response actions taken.
* **Incident Status** (`incident_status`, select_one, optional): Choose the incident status as Active or Inactive.
* **Incident Notes** (`incident_notes`, note, optional): Add any additional notes about the incident.
* **Incident Reporter** (`incident_reporter`, text, optional): Enter the name of the person who reported the incident.
* **Escalate** (`incident_escalate`, select_multiple, optional): Select if the incident should be escalated and to whom.
* **Escalate To** (`incident_escalate_to`, select_multiple, optional): Select whom the incident should be escalated to.
* **Incident Report** (`incident_report`, text, optional): Enter a brief report of the incident.
* **Incident Review** (`incident_review`, date, optional): Select the date of the incident review.
* **Incident Close** (`incident_close`, select_one, optional): Choose if the incident is closed.
* **Incident Close Reason** (`incident_close_reason`, text, optional): Enter the reason for closing the incident.
* **Incident Closed By** (`incident_closed_by`, text, optional): Enter the name of the person who closed the incident.
* **Incident Closed Date** (`incident_closed_date`, date, optional): Enter the date the incident was closed.
* **Incident Closed Time** (`incident_closed_time`, time, optional): Enter the time the incident was closed.
* **Prophets Involved** (`prophets_involved`, select_multiple, optional): Select if any prophets were involved in the incident.
* **Reported By** (`incident_reported_by`, text, optional): Enter the name of the person who reported the incident.
* **Incident Classification Category** (`incident_classification_category`, select_one, optional): Select the incident classification category.
* **Incident Classification Subcategory** (`incident_classification_subcategory`, select_one, optional): Select the incident classification subcategory.

Note: This help guide is based on the provided YAML fields and should be reviewed and updated as necessary to ensure accuracy and relevance to the specific context and requirements of the organization.
