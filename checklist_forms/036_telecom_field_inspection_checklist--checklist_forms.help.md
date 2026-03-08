<thinking>Telecom-field-inspection-checklist form is used for collecting and recording details of a telecom field inspection. This form is likely used for site-specific telecom field inspections, where inspectors or engineers need to capture specific site details, flag any issues, and record the status of the field. The form may be used by telecom teams, engineers, or inspectors for documentation and reporting purposes.</thinking>

# telecom-field-inspection-checklist - Help Guide
## Purpose
The telecom-field-inspection-checklist form is designed to collect and record details of a telecom field inspection, ensuring that all necessary information is captured and documented for site-specific inspections.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Site Details** section with the relevant site information, including any necessary contact numbers and email addresses.
2. Provide your **Inspector Details**, including your name and any other relevant information.
3. Enter the **Inspection Date**, which is the date of the inspection.
4. Use the **Issue Flags** field to indicate any issues found during the inspection. Select multiple flags as needed.
5. Provide a detailed description of each issue using the **Issue Descriptions** field.
6. Enter the **Site Address** for the location being inspected.
7. Fill in any additional information in the **Notes** field.
8. Add **Photos** of any relevant issues or inspections, if possible.
9. Sign the **Signature** field to indicate that you have completed and reviewed this form.
10. Select the **Site Status**, which indicates whether the site is Active, Inactive, or Pending.
11. Indicate the **Issue Status** as Flagged, Reported, or Not Reported.
12. Choose the **Issue Priority** as High, Medium, or Low.
13. Select the **Site Type**, which indicates the type of site being inspected.
14. Fill in the **Location Details**, which provides additional context about the site location.
15. Add any additional information or comments in the **Notes** field.
16. Enter the **Site Inspector Notes**, which are your notes about the inspection.
17. Sign the **Site Inspector Signature** to indicate that you have completed and reviewed this form.
18. Add any **Issue Inspector Notes** about the issues found during the inspection.
19. Sign the **Issue Inspector Signature** to indicate that you have completed and reviewed this form.
20. Fill in the **Issue Reporter** who reported the issue.
21. Enter the **Issue Reported Date**, which is the date the issue was reported.
22. Enter the **Site Inspected Date**, which is the date the site was inspected.
23. Select **Issue Resolved** to indicate if the issue is resolved or not.

## Field-by-Field Explanation
* **Site Details** (`site_details`, `text`, required: false): Enter the site's name, location, and any other relevant details.
* **Inspector Details** (`inspector_details`, `text`, required: false): Provide your name and any other relevant information as the inspector.
* **Inspection Date** (`inspection_date`, `date`, required: false): Enter the date of the inspection.
* **Issue Flags** (`issue_flags`, `select_multiple`, required: false): Select any issues or flags found during the inspection.
* **Issue Descriptions** (`issue_descriptions`, `text`, required: false): Provide a detailed description of each issue.
* **Site Address** (`site_address`, `text`, required: false): Enter the site's address.
* **Contact Number** (`contact_number`, `text`, required: false): Enter the contact number of the site or location.
* **Email** (`email`, `email`, required: false): Enter the email address of the site or location.
* **Notes** (`notes`, `note`, required: false): Add any additional comments or information.
* **Photos** (`photos`, `text`, required: false): Add any photos of the issue or inspection.
* **Signature** (`signature`, `text`, required: false): Sign to indicate that you have completed and reviewed this form.
* **Site Status** (`site_status`, `select_one`, required: false): Select whether the site is Active, Inactive, or Pending.
* **Issue Status** (`issue_status`, `select_one`, required: false): Select whether the issue is Flagged, Reported, or Not Reported.
* **Issue Priority** (`issue_priority`, `select_one`, required: false): Select the priority of the issue as High, Medium, or Low.
* **Site Type** (`site_type`, `text`, required: false): Enter the type of site being inspected.
* **Location Details** (`location_details`, `text`, required: false): Provide additional context about the site location.
* **Notes** (`notes`, `note`, required: false): Add any additional information or comments.
* **Site Inspector Notes** (`site_inspector_notes`, `text`, required: false): Enter your notes about the inspection.
* **Site Inspector Signature** (`site_inspector_signature`, `text`, required: false): Sign to indicate that you have completed and reviewed this form.
* **Issue Inspector Notes** (`issue_inspector_notes`, `text`, required: false): Enter any notes about the issue.
* **Issue Inspector Signature** (`issue_inspector_signature`, `text`, required: false): Sign to indicate that you have completed and reviewed this form.
* **Issue Reporter** (`issue_reporter`, `text`, required: false): Enter the name of the person who reported the issue.
* **Issue Reported Date** (`issue_reported_date`, `date`, required: false): Enter the date the issue was reported.
* **Site Inspected Date** (`site_inspected_date`, `date`, required: false): Enter the date the site was inspected.
* **Issue Resolved** (`issue_resolved`, `text`, required: false): Indicate whether the issue is resolved or not.

Note: This help guide is based on the provided YAML fields and is meant to be a general guide. The actual usage and purpose of each field may vary depending on the specific use case or organization using this form.
