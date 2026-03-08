# COVID 19 Ambulance Check Form - Help Guide
## Purpose
This form is designed to ensure the safety and readiness of ambulances for emergency medical situations. It helps identify any issues or defects that may compromise the vehicle's performance and safety.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have the Ambulance ID Number and are inspecting the correct vehicle.
2. Record the date of inspection.
3. Verify the name and credentials of the EMT or Inspector conducting the inspection.
4. Check the vehicle's cleanliness and sanitization.
5. Confirm the availability and condition of PPE stock.
6. Test and confirm the functionality of all medical equipment.
7. Verify the availability of oxygen supply.
8. Check if the ventilator is ready and functional.
9. Confirm the availability of emergency kits and medication stock.
10. Evaluate the mechanical condition of the vehicle.
11. Document any defects or issues noted during the inspection.
12. Determine if maintenance is required and specify the type (routine or urgent).

## Field-by-Field Explanation

* **Ambulance ID Number** (`ambulance_id`, text, required): Enter the unique identifier of the ambulance being inspected.
* **Inspection Date** (`inspection_date`, date, required): Record the date of the inspection.
* **EMT or Inspector Name** (`emt_name`, text, required): Enter the name of the EMT or inspector conducting the inspection.
* **Vehicle is Clean and Sanitized** (`vehicle_cleanliness`, select_one, required): Check if the vehicle is clean and sanitized.
* **PPE Stock is Adequate** (`ppe_stock_adequate`, select_one, required): Verify if the stock of PPE is sufficient for the inspection.
* **All Medical Equipment is Functional** (`equipment_functional`, select_one, required): Confirm the functionality of all medical equipment.
* **Oxygen Supply is Full** (`oxygen_supply`, select_one, required): Check if the oxygen supply is sufficient.
* **Ventilator is Ready and Functional** (`ventilator_ready`, select_one, required): Check if the ventilator is ready and functional.
* **Emergency Kit is Stocked** (`emergency_kit`, select_one, required): Confirm the availability of emergency kits.
* **Medications are Properly Stored and Unexpired** (`medication_stock`, select_one, required): Verify if medications are properly stored and unexpired.
* **Vehicle Mechanical Condition** (`vehicle_condition`, select_one, required): Evaluate the mechanical condition of the vehicle.
* **Any Defects or Issues Noted** (`defects_noted`, text, optional): Describe any problems or defects found during the inspection.
* **Maintenance Required** (`maintenance_needed`, select_one, required): Determine if maintenance is required (routine or urgent).
* **Inspector Sign Off** (`inspector_signature`, select_one, required): Specify the inspector's signature (approved, approved with conditions, or not approved).

## Tips
* Always ensure to fill in the Ambulance ID Number to verify the correct vehicle is being inspected.
* Be thorough in the inspection to identify any potential safety risks or issues.
* Clearly document any defects or issues noted during the inspection.
* Ensure that the inspector's signature accurately reflects the outcome of the inspection.
