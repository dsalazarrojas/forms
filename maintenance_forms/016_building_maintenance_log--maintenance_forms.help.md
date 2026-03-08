# Building Maintenance Log - Help Guide

## Purpose
The Building Maintenance Log form is used to record and track maintenance work performed on buildings and facilities. This form helps to document the date, type, and details of maintenance work, as well as the personnel involved.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date of the maintenance work.
2. Enter the work order number (if applicable).
3. Enter the property address or building location.
4. Choose the area or system maintained (e.g., HVAC, Plumbing, Electrical, etc.).
5. Provide specific details about the location within the building where the work was performed.
6. Select the type of maintenance work performed (e.g., Preventive, Corrective, etc.).
7. Describe the issue or problem that was addressed.
8. Describe the work performed by the technician or contractor.
9. Enter the name and company of the technician or contractor who performed the work (if applicable).
10. Enter the start and end times of the work (if applicable).
11. Record the total labor hours spent on the work.
12. List any materials used or replaced.
13. List any parts replaced or removed.
14. Enter an estimated or actual cost for the work (if applicable).
15. Check if a warranty was provided.
16. Enter the length of the warranty coverage (if a warranty was provided).
17. Check if a follow-up is needed.
18. Enter the scheduled follow-up date (if a follow-up is needed).
19. Enter any additional inspection notes or observations.

## Field-by-Field Explanation

* **Log Entry Date** (`log_entry_date`, `date`, required): Enter the date of the maintenance work.
* **Work Order Number** (`work_order_number`, `text`, optional): Reference number for this work (if applicable).
* **Property Address** (`property_address`, `text`, required): Enter the building or facility location.
* **Area or System Maintained** (`area_maintained`, `select_one`, required): Select the area or system maintained (e.g., HVAC, Plumbing, Electrical, etc.).
* **Specific Location** (`specific_location`, `text`, optional): Provide specific details about the location within the building where the work was performed.
* **Type of Maintenance** (`maintenance_type`, `select_one`, required): Select the type of maintenance work performed (e.g., Preventive, Corrective, etc.).
* **Issue or Work Description** (`issue_description`, `text`, required): Describe the problem or issue addressed.
* **Work Performed** (`work_performed`, `text`, required): Describe the work performed by the technician or contractor.
* **Technician or Contractor Name** (`technician_name`, `text`, required): Enter the name of the technician or contractor who performed the work.
* **Technician Company** (`technician_company`, `text`, optional): If a contractor or vendor was used, enter their company name.
* **Work Start Time** (`start_time`, `time`, optional): Enter the start time of the work (if applicable).
* **Work End Time** (`end_time`, `time`, optional): Enter the end time of the work (if applicable).
* **Hours Spent** (`hours_spent`, `number`, optional): Record the total labor hours spent on the work.
* **Materials Used** (`materials_used`, `text`, optional): List any materials used or replaced.
* **Parts Replaced** (`parts_replaced`, `text`, optional): List any parts replaced or removed.
* **Estimated or Actual Cost** (`cost_estimate`, `number`, optional): Enter an estimated or actual cost for the work (if applicable).
* **Warranty Provided** (`warranty_provided`, `select_one`, optional): Check if a warranty was provided.
* **Warranty Period** (`warranty_period`, `text`, optional): Enter the length of the warranty coverage (if a warranty was provided).
* **Follow-Up Needed** (`follow_up_needed`, `select_one`, optional): Check if a follow-up is needed.
* **Scheduled Follow-Up Date** (`follow_up_date`, `date`, optional): Enter the scheduled follow-up date (if a follow-up is needed).
* **Inspection Notes** (`inspection_notes`, `text`, optional): Enter any additional inspection notes or observations.
