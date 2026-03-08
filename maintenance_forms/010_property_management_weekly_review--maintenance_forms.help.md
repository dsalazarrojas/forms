# Property Management Weekly Review - Help Guide

## Purpose
This form is designed for Property Managers to provide a weekly review of the properties under their supervision. The goal is to report on the current status of each property, including any issues encountered, maintenance status, and next action date. The form serves as a tool for Property Managers to stay on top of their properties' maintenance needs and ensure timely completion of tasks.

## How To Complete This Form

To complete this form, follow these steps:

1. Review each property under your supervision.
2. Answer the questions according to the current status of each property.
3. Select "Yes" or "No" for the `weekly_inspection` field, indicating whether a weekly inspection was performed.
4. List any issues encountered for the properties with issues by selecting "Yes" for the `issues_encountered` field and typing in the `issues_description` field.
5. For each issue, select its priority level (Low, Medium, High) using the `issue_priority` field.
6. Update the `maintenance_status` field to reflect the current status of each property's maintenance.
7. Enter the `next_action_date` for the next scheduled maintenance action.
8. Add any additional notes or observations regarding the properties in the `notes` field.

## Field-by-Field Explanation

* **Weekly Inspection** (`weekly_inspection`, select_one, required: false): Check if a weekly inspection was performed on the property. Select "Yes" if yes, "No" otherwise.
* **Issues Encountered** (`issues_encountered`, select_multiple, required: false): List any issues that occurred on the property during the inspection, selecting "Yes" for each issue.
* **Issues Description** (`issues_description`, text, required: false): Provide a detailed description of each issue encountered.
* **Date Inspected** (`date_inspected`, date, required: false): Enter the date the property was inspected.
* **Property Manager Name** (`property_manager_name`, text, required: false): Enter your name, as the property manager.
* **Issue Priority** (`issue_priority`, select_one, required: false): Select the priority level of each issue (Low, Medium, High).
* **Maintenance Status** (`maintenance_status`, select_one, required: false): Update the maintenance status of each property (Scheduled, In Progress, Completed, Not Required).
* **Next Action Date** (`next_action_date`, date, required: false): Enter the date of the next scheduled maintenance action.
* **Notes** (`notes`, note, required: false): Add any additional notes or observations regarding the property.
