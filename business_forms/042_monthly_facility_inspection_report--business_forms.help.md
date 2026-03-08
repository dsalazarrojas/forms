# monthly_facility_inspection_report - Help Guide
## Purpose
The monthly facility inspection report is a form used to collect data about the condition of facilities within an organization. It is designed to help facilities management teams track and manage maintenance activities.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the correct facility for which the inspection is being performed.
2.  Choose the status of the facility (Active or Inactive).
3.  Enter the month of the inspection.
4.  Enter the year of the inspection.
5.  Describe any issues found during the inspection.
6.  Enter the date of the issue.
7.  Enter the name of the inspector performing the inspection.
8.  Check if the facility status is Active or Inactive.
9.  Check if maintenance issues are active or inactive.
10. Check the status of the maintenance activities.
11. Enter comments about the inspection (if any).
12. Assign the maintenance activity to someone.
13. Enter the facility ID number.
14. Enter the inspection date.
15. Check if maintenance activities are completed.
16. Enter a completed status.
17. Enter the facility area.

## Field-by-Field Explanation

*   **Facility**: (`facility`, `text`, required)
    This field should be filled in with the correct facility name.
*   **month**: (`month`, `select_one`, required)
    Select the correct month of the inspection from the provided options.
*   **Year**: (`year`, `number`, required)
    Enter the year of the inspection.
*   **Issue Description**: (`issue_description`, `text`, required)
    Describe the issue found during the inspection.
*   **Issue Date**: (`issue_date`, `date`, required)
    Enter the date when the issue was found.
*   **Inspector Name**: (`inspector_name`, `text`, required)
    Enter the name of the person performing the inspection.
*   **Facility Status**: (`facility_status`, `select_multiple`, not required)
    Check if the facility status is Active or Inactive.
*   **Maintenance Issues**: (`maintenance_issues`, `text`, required)
    Describe any maintenance issues found during the inspection.
*   **Repair Status**: (`repair_status`, `select_multiple`, required)
    Check if the repair activities are Active or Inactive.
*   **Comments**: (`comments`, `text`, not required)
    Enter any comments about the inspection.
*   **Assigned To**: (`assigned_to`, `text`, required)
    Assign the maintenance activity to someone.
*   **Facility ID**: (`facility_id`, `number`, required)
    Enter the facility ID number.
*   **Inspection Date**: (`inspection_date`, `date`, required)
    Enter the date of the inspection.
*   **Maintenance Completed**: (`maintenance_completed`, `select_multiple`, required)
    Check if maintenance activities are completed.
*   **Completed**: (`completed`, `text`, required)
    Enter the status of the maintenance activity.
*   **Facility Area**: (`facility_area`, `text`, required)
    Enter the area of the facility being inspected.
