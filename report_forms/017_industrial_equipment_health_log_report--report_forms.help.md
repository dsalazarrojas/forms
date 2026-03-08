# industrial_equipment_health_log_report - Help Guide
## Purpose
This form is intended to track the health and status of industrial equipment, providing a structured format to record and report on inspections, repairs, and other maintenance activities. It allows users to monitor and manage equipment conditions, identify potential issues, and ensure timely maintenance and repairs.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the equipment you are inspecting or reporting on.
2. Enter the inspection date and issue date (if applicable).
3. Report any issues or problems encountered with the equipment, selecting the severity level (Critical, Major, or Minor).
4. Describe any repairs or maintenance done on the equipment (Notes).
5. Update the repair status (Done, In progress, or None).
6. Record the next due date for maintenance or repairs.
7. Add any additional notes on repairs or maintenance.

## Field-by-Field Explanation

* **Equipment Status** (`equipment_status`, text, optional): Enter a brief description of the equipment's current status, such as "Functional" or "Out of order".
* **Inspection Date** (`inspection_date`, date, optional): Select the date of the most recent inspection or review.
* **Notes** (`notes`, text, optional): Add any additional comments or observations about the equipment's condition.
* **Issues** (`issues`, select_multiple, optional):
	+ **Critical**: The issue is critical and requires immediate attention.
	+ **Major**: The issue is significant but not critical.
	+ **Minor**: The issue is minor and can be addressed in the near future.
* **Issue Date** (`issue_date`, date, optional): Enter the date the issue was first detected.
* **Repair Status** (`repair_status`, select_one, optional):
	+ **Done**: The repair is complete.
	+ **In Progress**: The repair is underway.
	+ **None**: No repair is necessary or scheduled.
* **Next Due Date** (`next_due_date`, date, optional): Enter the date when the next inspection or maintenance is due.
* **Notes (Repaired)** (`notes_repaired`, text, optional): Record any details about the repair or maintenance done.
* **Equipment Category** (`equipment_category`, text, optional): Enter a brief description of the equipment category (e.g., "Machine", "Tooling", etc.).
* **Equipment Name** (`equipment_name`, text, optional): Enter the name of the equipment being reported on.
