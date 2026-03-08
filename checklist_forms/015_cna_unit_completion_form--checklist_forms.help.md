<thinking>...This form is used to ensure that Certified Nursing Assistants (CNAs) have completed all necessary tasks and documented their activities during a shift. This form is also used by supervisors to review and provide feedback on the CNA's performance. The CNA is expected to fill out the form accurately and completely, while the supervisor is expected to review and sign off on the completed form. The form is divided into several sections: patient care tasks, documentation and reporting, and end of shift checklists. Each section should be filled out in its entirety, with the CNA's signature at the end. The supervisor's review and signature are also required at the end of the form... </thinking>

# CNA Unit Completion Form - Help Guide
## Purpose
This form is used by Certified Nursing Assistants (CNAs) to document their activities and complete necessary tasks during a shift. It also serves as a review and feedback tool for supervisors.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Enter your full name and employee ID number.
3. Select the shift date and start/end times.
4. Enter the unit name and supervisor's name.
5. Complete all patient care tasks, including vital signs, bathing and hygiene care, feeding assistance, mobility and turning, toileting assistance, linen changes, and documentation of intake and output.
6. Record any incidents that occurred during the shift.
7. Complete the end of shift checklist, including equipment storage, workstation cleaning, handoff report completion, and overall shift status.
8. Add any additional notes or comments.
9. Sign and date the form.

## Field-by-Field Explanation
* **CNA Name** (`cna_name`, `text`, required): Enter your full name as a Certified Nursing Assistant.
* **Employee ID** (`employee_id`, `text`, required): Enter your staff ID number.
* **Shift Date** (`shift_date`, `date`, required): Select the date of the shift.
* **Shift Time** (`shift_time`, `text`, required): Enter the start and end times of the shift.
* **Unit Name** (`unit_name`, `text`, required): Enter the unit where you worked.
* **Supervisor Name** (`supervisor_name`, `text`, required): Enter the name of your supervisor or charge nurse.
* **Section 1: Patient Care Tasks** (`section_header_1`, `note`, required): Check all patient care tasks that you completed.
	+ **Vital Signs Completed** (`vital_signs_completed`, `select_one`, required): Select "Yes - All Patients" if you completed vital signs on all assigned patients, "Yes - Some Patients" if you completed vital signs on some patients, "No - Not Assigned" if you were not assigned to patients, or "No - Pending" if not completed yet.
	+ **Bathing and Hygiene Care** (`bathing_hygiene`, `select_one`, required): Select "Yes - All Patients" if you provided personal care to all patients, "Yes - Some Patients" if you provided personal care to some patients, "No - Not Assigned" if not assigned, or "No - Pending" if not completed yet.
	+ **Feeding Assistance** (`feeding_assistance`, `select_one`, required): Select "Yes - All Patients" if you provided meal support to all patients, "Yes - Some Patients" if you provided meal support to some patients, "No - Not Assigned" if not assigned, or "No - Pending" if not completed yet.
	+ **Mobility and Turning** (`mobility_assistance`, `select_one`, required): Select "Yes - All Patients" if you repositioned all patients, "Yes - Some Patients" if you repositioned some patients, "No - Not Assigned" if not assigned, or "No - Pending" if not completed yet.
	+ **Toileting Assistance** (`toileting_assistance`, `select_one`, required): Select "Yes - All Patients" if you provided bathroom support to all patients, "Yes - Some Patients" if you provided bathroom support to some patients, "No - Not Assigned" if not assigned, or "No - Pending" if not completed yet.
	+ **Linen Changes** (`linen_changes`, `select_one`, required): Select "Yes - As Needed" if you completed linen changes as needed, "Yes - Scheduled" if you completed linen changes at a scheduled time, "No - Not Needed" if not needed, or "No - Pending" if not completed yet.
* **Section 2: Documentation and Reporting** (`section_header_2`, `note`, required): This section should be left blank.
* **Incident Reports** (`incident_reports`, `select_one`, required): Select "Yes - See Attached" if incident reports are attached, "No Incidents" if no incidents occurred, or "Pending Review" if not completed yet.
* **Incident Details** (`incident_details`, `text`, required): If incident reports are attached, enter a brief description of the incident.
* **Section 3: End of Shift Checklist** (`section_header_3`, `note`, required): This section should be left blank.
* **Equipment Stored** (`equipment_stored`, `select_one`, required): Select "True" if equipment is properly stored, "False" if not, or "Not Applicable" if not applicable.
* **Workstation Cleaned** (`workstation_cleaned`, `select_one`, required): Select "True" if the workstation is sanitized, "False" if not, or "Partially" if partially cleaned.
* **Handoff Report Completed** (`handoff_completed`, `select_one`, required): Select "Yes - In Person" if the handoff report is completed in person, "Yes - By Phone" if completed by phone, "Yes - Written Only" if completed written only, "No - No Oncoming Shift" if no oncoming shift, or "No - Pending" if not completed yet.
* **Pending Tasks** (`pending_tasks`, `text`, required): Enter any tasks that need follow-up.
* **Patient Concerns** (`patient_concerns`, `text`, required): Enter any concerns about patients.
* **Supply Needs** (`supply_needs`, `text`, required): Enter any supply needs.
* **Overall Shift Status** (`overall_shift_status`, `select_one`, required): Select "All Tasks Completed" if all tasks were completed, "Most Tasks Completed" if most tasks were completed, "Some Tasks Pending" if some tasks are pending, or "Multiple Issues" if multiple issues occurred.
* **Additional Notes** (`additional_notes`, `text`, required): Enter any additional comments or notes.
* **CNA Signature** (`cna_signature`, `text`, required): Enter your full name as a CNA.
* **Supervisor Review Status** (`supervisor_review`, `select_one`, required): Select "Reviewed and Approved" if reviewed and approved, "Reviewed with Comments" if reviewed with comments, "Pending Review" if not reviewed yet, or "Not Yet Reviewed" if not reviewed yet.
* **Supervisor Signature** (`supervisor_signature`, `text`, required): Enter your full name as a supervisor or charge nurse.

## Tips
* Please fill out the form completely and accurately.
* Make sure to include all patient care tasks and documentation.
* If there are any incidents, attach incident reports and describe them in the "Incident Details" field.
* Complete the end of shift checklist carefully.
* Sign and date the form.
* Review and feedback should be provided by the supervisor.
* Keep the form as a record of your activities during the shift.
