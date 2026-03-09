# Fire Alarm System Inspection Form - Help Guide
## Purpose
The Fire Alarm System Inspection Form is used to inspect and evaluate the status of fire alarm systems in facilities, ensuring they are functioning correctly and that the necessary maintenance and repairs are performed.

## How To Complete This Form
- Fill in the form carefully and accurately.
- Ensure that you fill in all relevant information.
- Select the correct type of system (e.g., Fire Alarm System, Smoke Detector System, Heat Detector System, or Combination System).
- Provide the system's location within the facility.
- Fill in the correct status of the system (Active, Inactive, or Disabled).
- If the system requires repair, select 'True' in the System Repair Needed field.
- If the system requires partial repair, select 'Partial Repair Required'.
- Fill in your name, title, and signature in the System Inspected By field for accurate record-keeping.
- Fill in any additional notes or comments in the System Notes and System Additional Notes fields.

## Field-by-Field Explanation

* **General Information** (`general_info`, text, required: false): A brief description of the fire alarm system being inspected.
* **System Type** (`system_type`, select_multiple, required: false): The type of fire alarm system, choose from Fire Alarm System, Smoke Detector System, Heat Detector System, or Combination System.
* **System Location** (`system_location`, text, required: false): The exact location of the system within the facility.
* **System Status** (`system_status`, select_one, required: false): The current status of the system, choose from Active, Inactive, or Disabled.
* **System Description** (`system_description`, text, required: false): A detailed description of the system, including any specific features or components.
* **System Inspection Date** (`system_inspection_date`, date, required: false): The date of the system inspection.
* **System Inspected By** (`system_inspected_by`, text, required: false): The name and title of the person inspecting the system.
* **System Inspector Signature** (`system_inspector_signature`, text, required: false): The signature of the system inspector.
* **System Repair Needed** (`system_repair_needed`, select_multiple, required: false): If the system requires repair, choose 'True'. If partial repair is required, choose 'Partial Repair Required'.
* **System Repair Cost** (`system_repair_cost`, number, required: false): The cost of any required repairs.
* **System Next Inspection** (`system_next_inspection`, date, required: false): The date of the next scheduled system inspection.
* **System Inspection Frequency** (`system_inspection_frequency`, select_one, required: false): The frequency of system inspections, choose from Daily, Weekly, Monthly, Quarterly, Semi-Annually, or Annually.
* **System Inspector Name** (`system_inspector_name`, text, required: false): The name of the system inspector.
* **System Inspector Title** (`system_inspector_title`, text, required: false): The title of the system inspector.
* **System Inspector Phone** (`system_inspector_phone`, text, required: false): The phone number of the system inspector.
* **System Inspector Email** (`system_inspector_email`, email, required: false): The email of the system inspector.
* **System Inspector Signature Date** (`system_inspector_signature_date`, date, required: false): The date of the system inspector's signature.
* **System Notes** (`system_notes`, note, required: false): Additional notes about the system.
* **System Additional Notes** (`system_additional_notes`, text, required: false): Additional information about the system.
* **System Signature** (`system_signature`, text, required: false): The signature of the system.
* **System Title** (`system_title`, text, required: false): The title of the system.
* **System Company** (`system_company`, text, required: false): The company associated with the system.
* **System Comments** (`system_comments`, text, required: false): Any additional comments about the system.
* **System Other** (`system_other`, text, required: false): Any other information about the system.
