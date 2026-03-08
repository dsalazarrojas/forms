# <h1> Cleaning Shift Checklist - Help Guide </h1>

## Purpose
This form is designed for cleaning shift leaders to report on the completion of their shifts, including tasks, supplies, and equipment status. It helps to ensure that all necessary cleaning and maintenance tasks are completed, and that any issues or concerns are addressed.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with accurate information.
2. Choose the correct options for each task and status field.
3. Provide details for any issues or concerns in the text fields.
4. Review the form carefully before submitting it.

## Field-by-Field Explanation
* **Facility Name** (`facility_name`, `text`, required):
	+ Enter the name of the facility or building being cleaned.
* **Facility Location** (`facility_location`, `text`, required):
	+ Enter the location or address of the facility.
* **Shift Date** (`shift_date`, `date`, required):
	+ Select the date of the shift being reported on.
* **Shift Type** (`shift_type`, `select_one`, required):
	+ Select the type of shift (e.g. Morning Shift, Afternoon Shift, etc.).
* **Shift Start Time** (`shift_start_time`, `time`, required):
	+ Enter the time the shift started.
* **Shift End Time** (`shift_end_time`, `time`, required):
	+ Enter the time the shift ended.
* **Team Leader or Supervisor Name** (`team_leader_name`, `text`, required):
	+ Enter the name of the team leader or supervisor on shift.
* **Team Members on Shift** (`team_members`, `text`, required):
	+ List the names of all team members on shift.
* **Morning Shift Tasks**
	+ **Morning - Entrance and Lobby Cleaning** (`morning_entrance_cleaning`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Morning - Restroom Cleaning and Sanitizing** (`morning_restroom_cleaning`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Morning - Kitchen or Break Room Cleaning** (`morning_kitchen_cleaning`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Morning - Common Areas Cleaning** (`morning_common_areas`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Morning - Trash Collection and Removal** (`morning_trash_removal`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
* **Afternoon Shift Tasks**
	+ **Afternoon - Restroom Check and Touch-Up** (`afternoon_restroom_check`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Afternoon - Kitchen or Break Room Check** (`afternoon_kitchen_check`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Afternoon - High-Touch Surfaces Disinfection** (`afternoon_high_touch`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Afternoon - Spill Cleanup as Needed** (`afternoon_spill_cleanup`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
* **Evening Shift Tasks**
	+ **Evening - Vacuum All Carpets** (`evening_vacuuming`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Evening - Mop All Hard Floors** (`evening_mopping`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Evening - Dust All Surfaces** (`evening_dusting`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Evening - Restroom Deep Cleaning** (`evening_restroom_deep_clean`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Evening - Kitchen or Break Room Deep Clean** (`evening_kitchen_deep_clean`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
	+ **Evening - Final Trash Collection** (`evening_trash_removal`, `select_one`, required):
		- Select if the task is completed, in progress, not started, or not applicable.
* **Supply and Equipment Status**
	+ **Cleaning Supplies Status** (`supplies_status`, `select_one`, required):
		- Select the current supply status (e.g. fully stocked, adequate, etc.).
	+ **Supplies Needed or Restocked** (`supplies_needed`, `text`, required):
		- List any supplies needed or restocked.
	+ **Cleaning Equipment Status** (`equipment_status`, `select_one`, required):
		- Select the condition of the equipment (e.g. all working, minor issues, etc.).
	+ **Equipment Issues or Malfunctions** (`equipment_issues`, `text`, optional):
		- List any equipment issues or malfunctions.
* **Issues and Notes**
	+ **Maintenance Issues Observed** (`maintenance_issues`, `text`, optional):
		- List any maintenance issues observed.
	+ **Safety Concerns or Hazards** (`safety_concerns`, `text`, optional):
		- List any safety concerns or hazards.
	+ **Special Client Requests or Complaints** (`client_requests`, `text`, optional):
		- List any client requests or complaints.
	+ **Areas Needing Additional Attention** (`areas_needing_attention`, `text`, optional):
		- List any areas needing extra attention.
* **Shift Handoff Notes**
	+ **Incompletestasks** (`incomplete_tasks`, `text`, optional):
		- List any tasks not completed.
	+ **Notes for Next Shift** (`next_shift_notes`, `text`, optional):
		- Enter any important information for the next shift.
* **Shift Verification**
	+ **Shift Completion Status** (`shift_completion_status`, `select_one`, required):
		- Select the overall status of shift completion.
	+ **Quality Check Passed** (`quality_check_passed`, `select_one`, required):
		- Select if the shift passed quality inspection.
	+ **Team Leader Signature** (`team_leader_signature`, `text`, required):
		- Enter the team leader's electronic signature.
	+ **Supervisor Signature** (`supervisor_signature`, `text`, optional):
		- Enter the supervisor's electronic signature (if required).
	+ **Shift End Date** (`shift_end_date`, `date`, required):
		- Enter the date the shift ended.
