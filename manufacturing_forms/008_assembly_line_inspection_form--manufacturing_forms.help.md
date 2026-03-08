# Assembly Line Inspection Form - Help Guide
## Purpose
The Assembly Line Inspection Form is designed to collect information about the production line being inspected, including the inspector's details, inspection date and time, and various aspects of the process, such as equipment status, safety compliance, and quality control.

## How To Complete This Form

1.  Fill in your name and ID number in the "Inspector Name" and "Inspector ID Number" fields, respectively.
2.  Enter the date and time of the inspection in the "Inspection Date" and "Inspection Time" fields.
3.  Identify the production line being inspected in the "Production Line ID" field.
4.  Select the shift during which the inspection was conducted from the "Shift" dropdown menu.
5.  Enter the name of the product being manufactured in the "Product Name" field.
6.  Type in the product code or SKU in the "Product Code or SKU" field.
7.  Record the batch or lot number of the production in the "Batch or Lot Number" field.
8.  Enter the total units produced during the shift in the "Units Produced This Shift" field.
9.  Record the number of units inspected in the "Sample Size Inspected" field.
10. Enter the number of defective units found during the inspection in the "Number of Defects Found" field.
11. Select the primary type of defect observed from the "Primary Defect Type" dropdown menu.
12. Provide a detailed description of the defects in the "Defect Description" field (this field is optional).
13. Report the status of the machinery used during the inspection in the "Equipment Status" dropdown menu.
14. Select the safety compliance status from the "Safety Compliance Status" dropdown menu.
15. Evaluate the cleanliness of the workstation in the "Workstation Cleanliness" dropdown menu.
16. Identify any material shortage issues in the "Material Shortage Issues" dropdown menu.
17. Record the total downtime in minutes in the "Downtime in Minutes" field.
18. Enter the primary reason for downtime in the "Downtime Reason" field (this field is optional).
19. Indicate if the quality check passed in the "Did Quality Check Pass" dropdown menu.
20. If there were issues, enter any corrective actions required in the "Corrective Actions Required" field (this field is optional).
21. Confirm if the supervisor has been notified of any issues in the "Has Supervisor Been Notified" dropdown menu.
22. Schedule the next inspection by entering the date in the "Next Inspection Due" field.

## Field-by-Field Explanation

*   **Inspector Name** (`inspector_name`, text, required): Enter your full name as the quality inspector.
*   **Inspector ID Number** (`inspector_id`, text, required): Type in your employee or badge number.
*   **Inspection Date** (`inspection_date`, date, required): Record the date of the inspection.
*   **Inspection Time** (`inspection_time`, time, required): Enter the time of the inspection.
*   **Production Line ID** (`production_line_id`, text, required): Identify the production line being inspected.
*   **Shift** (`shift`, select_one, required): Select the shift during which the inspection was conducted.
*   **Product Name** (`product_name`, text, required): Type in the name of the product being manufactured.
*   **Product Code or SKU** (`product_code`, text, required): Enter the product code or SKU.
*   **Batch or Lot Number** (`batch_number`, text, required): Record the batch or lot number of the production.
*   **Units Produced This Shift** (`units_produced`, number, required): Enter the total count of units produced during the shift.
*   **Sample Size Inspected** (`sample_size`, number, required): Record the number of units checked.
*   **Number of Defects Found** (`defect_count`, number, required): Enter the total number of defective units found.
*   **Primary Defect Type** (`defect_type`, select_one, required): Select the primary type of defect observed.
*   **Defect Description** (`defect_description`, text, optional): Provide a detailed description of the defects (if applicable).
*   **Equipment Status** (`equipment_status`, select_one, required): Report the status of the machinery used during the inspection.
*   **Safety Compliance Status** (`safety_compliance`, select_one, required): Select the safety compliance status.
*   **Workstation Cleanliness** (`workstation_cleanliness`, select_one, required): Evaluate the cleanliness of the workstation.
*   **Material Shortage Issues** (`material_shortage`, select_one, required): Identify any material shortage issues.
*   **Downtime in Minutes** (`downtime_minutes`, number, required): Record the total downtime in minutes.
*   **Downtime Reason** (`downtime_reason`, text, optional): Enter the primary reason for downtime (if applicable).
*   **Did Quality Check Pass** (`quality_check_passed`, select_one, required): Indicate if the quality check passed.
*   **Corrective Actions Required** (`corrective_actions`, text, optional): Enter any corrective actions required (if applicable).
*   **Has Supervisor Been Notified** (`supervisor_notified`, select_one, required): Confirm if the supervisor has been notified of any issues.
*   **Next Inspection Due** (`next_inspection_due`, date, required): Schedule the next inspection by entering the date.
