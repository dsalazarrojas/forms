# Apartment Maintenance Issue Incident Report - Help Guide
## Purpose
The Apartment Maintenance Issue Incident Report is a crucial tool used by maintenance staff to report and manage incidents of apartment maintenance issues. This form provides a structured way to gather essential information about the issue, including its nature, location, and urgency, allowing for efficient prioritization and resolution.

## How To Complete This Form
To complete this form accurately and efficiently, follow these steps:

1. **Report Date**: Enter the date the issue was reported, ensuring that it is completed in the correct format (mm/dd/yyyy).
2. **Report Time**: If applicable, enter the time the issue was reported. If not, leave this field blank.
3. **Maintenance Request ID**: This field will be auto-generated and populated by our system.
4. **Resident Name**: Enter the name of the resident or person reporting the issue.
5. **Apartment or Unit Number**: Enter the number of the apartment or unit where the issue is located.
6. **Resident Phone Number**: Enter the resident's phone number, if available.
7. **Resident Email Address**: Enter the resident's email address, if available.
8. **Type of Maintenance Issue**: Select the primary category of the issue (e.g., Plumbing, Electrical, etc.).
9. **Location of Issue**: Describe the exact location of the issue within the apartment (e.g., kitchen, bathroom, etc.).
10. **Detailed Description**: Provide a clear and concise description of the issue.
11. **Date the Issue Occurred**: Enter the date the issue occurred or was noticed.
12. **Time the Issue Occurred**: If applicable, enter the time the issue occurred.
13. **Is This a Safety Hazard**: Indicate if the issue is a safety hazard. If yes, select "Yes, urgent safety hazard".
14. **Photos or Evidence Attached**: Indicate if photos or evidence are attached to support the report.
15. **Urgency Level**: Select the urgency level of the issue (Critical, High, Medium, Low, or Routine).
16. **Assigned To**: Enter the name of the maintenance person or contractor assigned to resolve the issue.
17. **Estimated Repair Cost**: Enter the estimated repair cost, if known.
18. **Special Access Requirements**: If necessary, describe any special access requirements for resolving the issue.
19. **Scheduled Follow-up Date**: Enter the date and time for a scheduled follow-up.
20. **Additional Notes or Instructions**: Provide any additional comments or instructions for the maintenance person or contractor.

## Field-by-Field Explanation
- **Report Date** (`report_date`, `date`, required/true): Enter the date the issue was reported.
- **Report Time** (`report_time`, `time`, required/false): If applicable, enter the time the issue was reported.
- **Maintenance Request ID** (`report_id`, `text`, required/false): This field is auto-generated and populated by our system.
- **Resident Name** (`resident_name`, `text`, required/true): Enter the name of the resident or person reporting the issue.
- **Apartment or Unit Number** (`apartment_number`, `text`, required/true): Enter the number of the apartment or unit where the issue is located.
- **Resident Phone Number** (`phone_number`, `text`, required/true): Enter the resident's phone number, if available.
- **Resident Email Address** (`email_address`, `email`, required/false): Enter the resident's email address, if available.
- **Type of Maintenance Issue** (`issue_type`, `select_one`, required/true): Select the primary category of the issue (e.g., Plumbing, Electrical, etc.).
- **Location of Issue Within Apartment** (`location`, `text`, required/true): Describe the exact location of the issue within the apartment (e.g., kitchen, bathroom, etc.).
- **Detailed Description of Issue** (`detailed_description`, `text`, required/true): Provide a clear and concise description of the issue.
- **Date Issue Occurred or Noticed** (`issue_date`, `date`, required/true): Enter the date the issue occurred or was noticed.
- **Time Issue Occurred** (`issue_time`, `time`, required/false): If applicable, enter the time the issue occurred.
- **Is This a Safety Hazard?** (`safety_hazard`, `select_one`, required/true): Indicate if the issue is a safety hazard. If yes, select "Yes, urgent safety hazard".
- **Photos or Evidence Attached?** (`photos_attached`, `select_one`, required/true): Indicate if photos or evidence are attached to support the report.
- **Urgency Level** (`urgency_level`, `select_one`, required/true): Select the urgency level of the issue (Critical, High, Medium, Low, or Routine).
- **Assigned To** (`assigned_to`, `text`, required/false): Enter the name of the maintenance person or contractor assigned to resolve the issue.
- **Estimated Repair Cost** (`estimated_cost`, `number`, required/false): Enter the estimated repair cost, if known.
- **Special Access Requirements** (`access_required`, `text`, required/false): If necessary, describe any special access requirements for resolving the issue.
- **Scheduled Follow-up Date** (`follow_up_date`, `date`, required/false): Enter the date and time for a scheduled follow-up.
- **Additional Notes or Instructions** (`additional_notes`, `text`, required/false): Provide any additional comments or instructions for the maintenance person or contractor.

## Tips

- Ensure that all fields are completed accurately and completely.
- If a field is not applicable, leave it blank.
- Attach photos or evidence to support the report, if possible.
- Be concise and clear in your descriptions and responses.
- If you have any questions or concerns, contact our maintenance team.
