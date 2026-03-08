# BSOD (Blue Screen Of Death) Fix Form - Help Guide
## Purpose

The BSOD (Blue Screen Of Death) Fix Form is a tool used to document and track BSOD issues on Windows computers.

## How To Complete This Form

To complete this form:

1. Enter the Ticket Number from the crash report.
2. Provide a detailed diagnosis and date of when the issue was diagnosed.
3. Enter the name and contact information of the technician who performed the diagnosis and repair.
4. Enter the error code or STOP code found.
5. Identify the root cause of the crash.
6. Describe in detail the repair steps taken to resolve the issue.
7. List any software that was uninstalled to fix the problem.
8. List any drivers that were updated.
9. Indicate if Windows Updates were applied.
10. Enter the duration of the repair in hours.
11. Check if the system was restored from a backup.
12. Indicate if the BSOD issue is resolved.
13. Describe how the fix was verified.
14. Assess the risk of recurrence.
15. Enter any preventative measures recommended.
16. Indicate if follow-up monitoring is required.
17. Indicate if the user was trained on prevention measures.
18. Enter the completion date of the repair.

## Field-by-Field Explanation

* **Ticket Number** (`ticket_number`, `text`, required: false): Reference ID from crash report.
* **-- Diagnosis --** (`section_diagnosis`, `note`, required: false): Provide a detailed diagnosis of the BSOD issue.
* **Diagnosis Date** (`diagnosis_date`, `date`, required: true): Enter the date when the issue was diagnosed.
* **Technician Name** (`technician_name`, `text`, required: true): Enter the name and contact information of the technician who performed the diagnosis and repair.
* **Error Code Found** (`error_code_found`, `text`, required: false): Enter the error code or STOP code found during diagnosis.
* **Root Cause Identified** (`root_cause`, `text`, required: true): Identify the root cause of the crash.
* **-- Repair Steps --** (`section_repair_steps`, `note`, required: false): Describe in detail the repair steps taken to resolve the issue.
* **Repair Steps Taken** (`repair_steps`, `text`, required: true): Provide a detailed description of the fixes applied.
* **Software Uninstalled** (`software_uninstalled`, `text`, required: false): List any software uninstalled to fix the problem.
* **Drivers Updated** (`drivers_updated`, `text`, required: false): List any drivers updated during the repair process.
* **Windows Updates Applied** (`windows_updates`, `select_one`, required: false): Indicate if Windows Updates were applied during the repair.
* **Duration of Repair (in hours)** (`repair_duration`, `number`, required: false): Enter the duration of the repair in hours.
* **System Restored From Backup?** (`system_restored_from_backup`, `select_one`, required: false): Check if the system was restored from a backup.
* **BSOD Issue Resolved?** (`crash_resolved`, `select_one`, required: true): Indicate if the BSOD issue is resolved.
* **Testing Performed** (`testing_performed`, `text`, required: true): Describe how the fix was verified.
* **Risk of Recurrence** (`recurrence_risk`, `select_one`, required: false): Assess the risk of recurrence.
* **-- Preventative Measures --** (`section_followup`, `note`, required: false): Provide any preventative measures recommended to avoid future crashes.
* **Preventative Measures Recommended** (`preventative_measures`, `text`, required: false): Enter any preventative measures recommended.
* **Follow-up Monitoring Required?** (`followup_required`, `select_one`, required: false): Indicate if follow-up monitoring is required.
* **User Trained on Prevention?** (`user_trained`, `select_one`, required: false): Indicate if the user was trained on prevention measures.
* **Repair Completion Date** (`completion_date`, `date`, required: true): Enter the completion date of the repair.

## Tips

* Ensure all fields are completed accurately and thoroughly, as this information is used to track and resolve the issue for future reference.
* If unsure about any field, refer to the provided field label or the technician who completed the form for clarification.
* Do not use this form for other types of technical issues, as it is specific to BSOD issues only.
