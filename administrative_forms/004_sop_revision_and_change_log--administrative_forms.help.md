# sop_revision_and_change_log - Help Guide
## Purpose
The "SOP Revision and Change Log" form is used to record and track changes made to Standard Operating Procedures (SOPs). This form is essential for maintaining an accurate record of updates, revisions, and reviews made to procedures.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Revision Date** by clicking on the date field and selecting the date from the calendar popup.
2. Enter the **Current SOP Version**, if applicable.
3. Check the **Previous Versions** to indicate if there were previous revisions made, and select 'Yes' or 'No'.
4. Enter the **Author** name of the person who made the change.
5. Select the department responsible for the **Department** (if applicable).
6. Enter any **Comments** about the change.
7. Select the **Review Status** of the change (Active or Inactive).
8. Enter the name of the **Reviewer** who reviewed the change (if applicable).
9. Enter the **Approval Date** by clicking on the date field and selecting the date from the calendar popup.

## Field-by-Field Explanation
* **Revision Date** (`revision_date`, date, required: false): Enter the date when the change was made.
* **Current SOP Version** (`current_sop_version`, text, required: false): Enter the current version number of the SOP.
* **Previous Versions** (`previous_versions`, select_multiple, required: false): Check 'Yes' if there were previous revisions, 'No' otherwise.
* **Author** (`author`, text, required: false): Enter the name of the person who made the change.
* **Department** (`department`, select_one, required: false): Select the department responsible for the change (if applicable).
* **Comments** (`comments`, text, required: false): Enter any comments about the change.
* **Review Status** (`review_status`, select_one, required: false): Select the review status of the change (Active or Inactive).
* **Reviewer** (`reviewer`, text, required: false): Enter the name of the reviewer (if applicable).
* **Approval Date** (`approval_date`, date, required: false): Enter the date of approval by clicking on the date field and selecting the date from the calendar popup.

## Tips
* Make sure to enter all required information for accurate tracking and reporting.
* Use the calendar popups to select dates.
* If the change made to the SOP is a revision, select 'Yes' for **Previous Versions**.
