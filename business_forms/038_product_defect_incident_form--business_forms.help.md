<thinking>
To create a comprehensive user-facing help guide for the Product Defect Incident Form, we must understand the form's purpose, which is to document and report product defects that occur during the production process. This form is intended to gather information about the incident, including the date it occurred, a detailed description, product ID, who reported it, when it was reported, the location, product status, priority level, assigned personnel, and any comments or status updates. To prevent duplication, this form should only be used to report new incidents. If an incident is already recorded, do not create a new form to report the same incident. Instead, update the original record or use an existing reference ID to refer back to it. To ensure consistency, the date and time format should be followed according to the company's standard time zone.

## Product Defect Incident Form - Help Guide
## Purpose
The Product Defect Incident Form is a tool used to report and document product defects that occur during the production process. It helps track incidents from their initial report to resolution, enabling swift action and informed decision-making.

## How To Complete This Form
To complete this form, follow these steps:

1. **Date and Time**: Enter the date and time of the incident, using the company's standard time zone format.
2. **Description**: Provide a detailed description of the incident, including the steps leading up to it and any actions taken or planned to rectify it.
3. **Product ID**: Identify the product affected by the incident.
4. **Reported By**: Select who reported the incident from the available options (e.g., Team Member, Team Lead, External User).
5. **Reported On**: Enter the date and time the incident was reported, using the company's standard time zone format.
6. **Location**: Enter the location where the incident occurred or was discovered.
7. **Product Status**: Select the status of the product at the time of the incident from the available options (e.g., In Production, In Development, Released).
8. **Priority**: Select the priority level of the incident from the available options (e.g., High, Medium, Low).
9. **Assigned To**: Choose the person or team assigned to handle the incident.
10. **Status**: Provide a brief update on the current status of the incident.
11. **Comments**: Add any additional comments or notes about the incident.
12. **Incident ID**: This is a unique identifier assigned to the incident for tracking and reference purposes. Do not modify this field.

## Field-by-Field Explanation
- **Incident Date** (`incident_date`, date, required/optional): The date and time of the incident, which should conform to the company's standard time zone format.
  * Format: Use YYYY-MM-DD or YYYY-MM-DD HH:MM:SS, depending on your local time zone setting.
- **Description** (`description`, note, optional): A detailed account of the incident, including what happened and any steps taken or planned.
- **Product ID** (`product_id`, number, optional): The identification number of the product involved.
- **Reported By** (`reported_by`, select_one, optional): Select the individual who reported the incident from the options.
- **Reported On** (`reported_on`, date, optional): The date and time the incident was reported, using the company's standard time zone format.
- **Location** (`location`, text, optional): Where the incident occurred or was discovered.
- **Product Status** (`product_status`, select_multiple, optional): Choose the status of the product at the time of the incident from the available options.
- **Priority** (`priority`, select_one, optional): Select the level of priority for the incident from the available options.
- **Assigned To** (`assigned_to`, select_one, optional): Choose the person or team assigned to handle the incident.
- **Status** (`status`, text, optional): A brief update on the status of the incident, such as "In Progress" or "Resolved."
- **Comments** (`comments`, note, optional): Any additional comments or notes about the incident.
- **Incident ID** (`incident_id`, number, optional): A unique identifier assigned to the incident for tracking and reference purposes.

## Tips
- Use the standard time zone format for dates and times.
- If an incident is already recorded, do not create a new form to report the same incident. Instead, update the original record or use an existing reference ID to refer back to it.
- Ensure the form is filled out accurately and completely for efficient tracking and resolution of the incident.
- Keep the comments field for any additional notes or updates that might be relevant to the incident.
- The Incident ID should not be modified once assigned.
