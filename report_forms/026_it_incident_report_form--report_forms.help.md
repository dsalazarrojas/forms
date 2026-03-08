# IT Incident Report Form - Help Guide

## Purpose
This form is used to report and track IT incidents, including security breaches, technical issues, and other IT-related problems.

## How To Complete This Form
To complete this form, please follow these steps:

1. Provide a clear and concise description of the incident in the "Description" field.
2. Choose the correct category for the incident from the dropdown list (e.g., "Report Forms", "Incident Report Forms", "Security,Incident Report Forms", etc.).
3. Indicate the impact of the incident using the "Impact" dropdown list (e.g., "High", "Medium", "Low").
4. If applicable, enter the start and end dates of the incident.
5. Enter your name and title/role in the "Reporter" field.
6. Select the department involved in the incident from the "Department" dropdown list (e.g., "IT,Incident Report Forms", "Security,Incident Report Forms", "Finance,Incident Report Forms", etc.).
7. Choose the priority level of the incident from the "Priority" dropdown list (e.g., "High", "Medium", "Low").
8. If the incident has been resolved, enter the resolution status in the "Resolution" field.
9. Select the current status of the incident from the "Status" dropdown list (e.g., "New", "In Progress", "Resolved").

## Field-by-Field Explanation
- **Report Incident** (`incident_description`, `text`, required: false): This is where you should provide a detailed description of the incident, including the problem, its causes, and any relevant context.
- **Category** (`category`, `select_one`, required: false): Choose the category that best describes the type of incident you are reporting.
- **Description** (`description`, `text`, required: false): Provide a detailed description of the incident.
- **Impact** (`impact`, `select_multiple`, required: false): Select the impact of the incident using the provided options.
- **Start Date** (`start_date`, `date`, required: false): If applicable, enter the start date of the incident.
- **End Date** (`end_date`, `date`, required: false): If applicable, enter the end date of the incident.
- **Reporter** (`reporter`, `text`, required: false): Enter your name and title/role.
- **Department** (`department`, `select_one`, required: false): Select the department involved in the incident.
- **Priority** (`priority`, `select_one`, required: false): Choose the priority level of the incident.
- **Resolution** (`resolution`, `text`, required: false): If the incident has been resolved, provide a description of the resolution.
- **Status** (`status`, `select_one`, required: false): Select the current status of the incident.

## Tips
- Make sure to provide accurate and detailed information in the "Description" field.
- Be as specific as possible when selecting the category and department.
- Use the "Impact" field to indicate the severity of the incident.
- If you are reporting on behalf of someone else, ensure they are aware of the information being submitted.
