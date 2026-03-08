# Complaint Log Tracker - Help Guide
## Purpose

The Complaint Log Tracker form is designed to help your organization track and manage complaints effectively. It's meant to be used for internal complaints handling and logging purposes.

## How To Complete This Form

### Step 1: Create a New Entry

To start, click on the "New Entry" button to create a new log entry.

### Step 2: Fill Out the Form

*   Enter the unique system-generated `Log Entry ID` to identify the complaint.
*   Select the relevant category of the issue from the provided options.
*   Provide a detailed description of the issue.
*   Assign the responsible staff member.
*   Choose the priority level based on the impact and urgency.
*   Update the current resolution status as the case progresses.
*   Optionally, provide a brief resolution summary and/or date of final closure.

## Field-by-Field Explanation

*   **Log Entry ID** (`log_identifier_number`, `text`, **required**): Enter the unique system-generated ID for the complaint, if known.
*   **Date Complaint Received** (`complaint_entry_date`, `date`, **required**): Enter the date the complaint was first reported.
*   **Complainant Name** (`complainant_full_name_log`, `text`, **required**): Enter the full name of the individual or entity reporting the issue.
*   **Category of Issue** (`complaint_category_log`, `select_one`, **required**): Select one of the categories from the options provided:
    -   Product / Equipment Issue
    -   Customer Service / Conduct
    -   Billing / Financial Dispute
    -   IT / System Technical Issue
    -   Safety / Facility Concern
    -   Other
*   **Detailed Issue Description** (`detailed_issue_description_log`, `text`, **required**): Provide a summary of the complaint for internal use.
*   **Assigned To (Staff Name)** (`assigned_staff_member`, `text`, **required**): Assign a staff member responsible for resolving the complaint.
*   **Priority Level** (`priority_level_log`, `select_one`, **required**): Choose one of the following priority levels:
    -   Critical (Response within 4 hours)
    -   High (Response within 24 hours)
    -   Medium (Response within 3 days)
    -   Low (Routine)
*   **Current Resolution Status** (`current_status_log`, `select_one`, **required**): Update the resolution status as the case progresses:
    -   New Entry
    -   Investigation In-Progress
    -   Pending Information from Complainant
    -   Awaiting Manager Approval
    -   Resolved
    -   Closed / No Action
*   **Resolution Summary** (`resolution_summary_log`, `text`, **optional**): Briefly describe how the issue was resolved (if applicable).
*   **Date Case Officially Closed** (`final_closure_date_log`, `date`, **optional**): Enter the date the issue was officially closed (if still open, leave blank).
*   **Last Updated Date** (`tracker_last_updated`, `date`, **required**): Update the date of the last action taken on the complaint.

## Tips

*   Always use the system-generated `Log Entry ID` for unique tracking.
*   Keep the `Priority Level` and `Current Resolution Status` up-to-date for efficient management.
*   Use the `Resolution Summary` to keep a brief record of resolution actions for easy reference.
