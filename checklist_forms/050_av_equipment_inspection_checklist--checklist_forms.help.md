# AV Equipment Inspection Checklist - Help Guide
## Purpose
This form is used to guide inspectors through the process of evaluating Audio-Visual (AV) equipment's condition and performance. It collects information on the equipment's identification, condition, and functionality to ensure it is in good working order.

## How To Complete This Form
1. Fill out the form carefully and accurately, providing details on each field as instructed.
2. Answer the questions based on your observation and assessment of the equipment.
3. Be as specific as possible when describing the condition of the equipment.
4. Use the "N/A" option when the question does not apply to the equipment.
5. Sign and date the form to indicate that you have completed it.

## Field-by-Field Explanation
* **Equipment ID** (`equipment_id`, Text, Required): Enter the unique identifier assigned to the AV equipment.
* **Equipment Type** (`equipment_type`, Select One, Required): Select the type of AV equipment being inspected from the dropdown list.
* **Manufacturer** (`manufacturer`, Text, Required): Enter the brand or manufacturer of the equipment.
* **Model Number** (`model_number`, Text, Required): Enter the specific model number of the equipment.
* **Serial Number** (`serial_number`, Text, Required): Enter the serial number of the equipment.
* **Inspection Date** (`inspection_date`, Date, Required): Enter the date when the inspection is performed.
* **Inspector Name** (`inspector_name`, Text, Required): Enter your name and title as the person performing the inspection.
* **Location** (`location`, Text, Required): Enter the location where the equipment is currently situated.
* **Physical Condition Assessment** (`physical_condition`, Select One, Required): Assess the overall physical condition of the equipment, selecting from Excellent, Good, Fair, Poor, or Requires Repair.
* **Power Cord Condition** (`power_cord_condition`, Select One, Required): Check if the power cord is in good condition with no fraying or damage, selecting Pass, Fail, or N/A.
* **Cable Connections** (`cable_connections`, Select One, Required): Check if all cable connections are secure and undamaged, selecting Pass, Fail, or N/A.
* **Audio Quality Test** (`audio_quality_test`, Select One, Required): For audio equipment, assess the sound quality, selecting Pass, Fail, or N/A.
* **Video Quality Test** (`video_quality_test`, Select One, Required): For video equipment, assess the picture quality, selecting Pass, Fail, or N/A.
* **Remote Control Functionality** (`remote_control_functionality`, Select One, Required): Check if the remote control operates correctly (if applicable), selecting Pass, Fail, or N/A.
* **Mounting Security** (`mounting_security`, Select One, Required): Check if the equipment is securely mounted (if applicable), selecting Pass, Fail, or N/A.
* **Ventilation Clearance** (`ventilation_clearance`, Select One, Required): Check if there is adequate ventilation around the equipment, selecting Pass, Fail, or N/A.
* **Firmware Update Needed** (`firmware_update_needed`, Select One, Required): Check if the equipment requires a firmware update, selecting Yes, No, or Not Applicable.
* **Maintenance Required** (`maintenance_required`, Select One, Required): Check if the equipment requires maintenance or repair, selecting No Maintenance Needed, Routine Maintenance, Repairs Needed, or Replacement Required.
* **Next Inspection Date** (`next_inspection_date`, Date, Optional): Enter the recommended next inspection date.
* **Inspector Notes** (`inspector_notes`, Text, Optional): Add any additional observations or comments about the equipment.
* **Inspection Approved** (`inspection_approved`, Select One, Required): Determine if the equipment passes or fails inspection, selecting Approved, Conditionally Approved, or Rejected.
