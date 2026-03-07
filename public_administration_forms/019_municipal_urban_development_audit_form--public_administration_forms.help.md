<thinking>
The goal of the Municipal Urban Development Audit Form is to document and track the progress of site inspections, findings, follow-ups, and other relevant information related to municipal urban development projects. This form is used by municipal administrators to collect data and insights that can inform decision-making and resource allocation. It's essential to ensure that each form is filled out accurately and thoroughly to maintain consistency and prevent duplication of effort. This guide is intended to help users complete the form effectively and efficiently.
</thinking>

# Municipal Urban Development Audit Form - Help Guide
## Purpose
The Municipal Urban Development Audit Form is used to collect data on site inspections, findings, follow-ups, and other relevant information related to municipal urban development projects. This form helps administrators track progress and make informed decisions.

## How To Complete This Form
To complete the form, follow these steps:
1. Start with the Site Inspection page.
2. Provide a brief description of the site inspection in the "Location" field.
3. Indicate whether the site inspection was conducted (Site Inspection).
4. If follow-up is required, enter the number of follow-ups needed in the "Followups" field.
5. Check off the relevant findings from the list in the "Findings" field.
6. Choose the correct person or team assigned to complete the task in the "Assigned to" field.
7. Select a date for the inspection in the "Date Inspection" field.
8. Choose a time for the inspection in the "Time Inspection" field.
9. Enter the email address of the person responsible for the inspection in the "Email" field.
10. Enter the contact phone number of the person responsible for the inspection in the "Phone" field.
11. If necessary, select a tool that has been assigned to complete the task in the "Assigned Tool" field.
12. Add any additional comments or information in the "Notes" field.

## Field-by-Field Explanation
### Site Inspection
 * **Site Inspection** (`site_inspection`, `text`, required: false): A brief description of the site inspection.
### Findings
 * **Findings** (`findings`, `select_multiple`, required: false): Check off the relevant findings from the list:
  • Yes
  • No
### Followups
 * **Followups** (`followups`, `number`, required: false): The number of follow-ups needed after the inspection.
### Assigned to
 * **Assigned to** (`assigned_to`, `select_one`, required: false): Choose the person or team assigned to complete the task:
  • Yes
  • No
### Completed by
 * **Completed by** (`completed_by`, `select_one`, required: false): Choose the person who completed the task:
  • Yes
  • No
### Date Inspection
 * **Date Inspection** (`date_inspection`, `date`, required: false): Select a date for the inspection.
### Time Inspection
 * **Time Inspection** (`time_inspection`, `time`, required: false): Select a time for the inspection.
### Location
 * **Location** (`location`, `text`, required: false): A brief description of the site location.
### Email
 * **Email** (`email`, `email`, required: false): Enter the email address of the person responsible for the inspection.
### Phone
 * **Phone** (`phone`, `text`, required: false): Enter the contact phone number of the person responsible for the inspection.
### Assigned Tool
 * **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Select if a tool has been assigned to complete the task:
  • Yes
  • No
### Notes
 * **Notes** (`notes`, `note`, required: false): Additional comments or information about the inspection.
