# Container Loading Procedure Checklist - Help Guide
## Purpose
This form is designed to collect information about the container loading procedure.

## How To Complete This Form
1. Review each field carefully before proceeding.
2. Fill in the required information for each field.
3. Be accurate and thorough in your responses.

## Field-by-Field Explanation

* **Checklist Date** (`checklist_date`, date, required): Date of loading operation.
* **Loading Location** (`loading_location`, text, required): Facility or warehouse name where the container was loaded.
* **Container Number** (`container_number`, text, required): Unique container identification number.
* **Container Size** (`container_size`, select_one, required): Select the size of the container (20 feet, 40 feet, 40 feet High Cube, 45 feet).
* **Container Type** (`container_type`, select_one, required): Type of shipping container (Dry Van, Refrigerated, Open Top, Flat Rack, Tank Container).
* **Logistics Manager Name** (`logistics_manager_name`, text, required): Person responsible for loading operation.
* **Pre-Loading Inspection Completed** (`pre_loading_inspection`, select_one, required): Check if the container was inspected for damage and cleanliness (True, False, Not Applicable).
* **Container Condition** (`container_condition`, select_one, required): Overall condition of the container (Excellent, Good, Fair, Poor, Damaged).
* **Loading Equipment Check** (`loading_equipment_check`, select_one, required): Check if all loading equipment was inspected and functional (True, False).
* **Cargo Secured Properly** (`cargo_secured_properly`, select_one, required): Check if all items were properly braced and secured (True, False).
* **Weight Distribution** (`weight_distribution`, select_one, required): Check if the weight was evenly distributed throughout the container (Evenly Distributed, Front Heavy, Rear Heavy, Side Heavy).
* **Total Cargo Weight** (`total_cargo_weight`, number, required): Total weight in kilograms or pounds.
* **Hazardous Materials Present** (`hazardous_materials`, select_one, required): Check if there are any hazardous materials in this shipment (True, False).
* **Hazmat Documentation Complete** (`hazmat_documentation`, select_one, optional): Check if all required hazardous material paperwork was completed (True, False, Not Applicable).
* **Loading Start Time** (`loading_start_time`, time, required): Time loading began.
* **Loading End Time** (`loading_end_time`, time, required): Time loading completed.
* **Container Seal Number** (`seal_number`, text, required): Security seal identification number.
* **Photos Taken** (`photos_taken`, select_one, required): Check if photographs of the loaded container were taken (True, False).
* **Damage Noted** (`damage_noted`, text, optional): Any damage observed during loading.
* **Supervisor Signature Date** (`supervisor_signature_date`, date, required): Date of supervisor approval.
* **Additional Notes** (`additional_notes`, text, optional): Any other relevant information about the loading procedure.
