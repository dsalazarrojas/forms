# Box Truck Inspection Form - Help Guide
## Purpose
The Box Truck Inspection Form is a comprehensive tool used to evaluate the condition of a box truck's vehicle. The form assesses various aspects of the vehicle, including its identification, inspection details, exterior condition, interior condition, and mechanical systems. The goal is to determine whether the vehicle is ready for rental or requires repair.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the vehicle's identification information (Vehicle ID Number, License Plate Number, Vehicle Year, Make, and Model).
2. Record the inspection date.
3. Confirm the inspector's name and title.
4. Check the current mileage.
5. Evaluate the vehicle's exterior condition, including body condition and tire condition.
6. Check if all lights are functioning properly.
7. Assess the interior condition, including the cargo area and equipment present.
8. Confirm if all mechanical systems are working properly, including brakes.
9. Finally, select the overall inspection status.

## Field-by-Field Explanation
### Vehicle ID Number
* **Vehicle ID Number** (`vehicle_id`, `text`, required): Enter the fleet or plate number of the vehicle.

### License Plate Number
* **License Plate Number** (`license_plate`, `text`, required): Enter the current license plate number of the vehicle.

### Vehicle Year
* **Vehicle Year** (`vehicle_year`, `number`, required): Enter the year of manufacture of the vehicle.

### Vehicle Make
* **Vehicle Make** (`vehicle_make`, `text`, required): Enter the manufacturer name of the vehicle.

### Vehicle Model
* **Vehicle Model** (`vehicle_model`, `text`, required): Enter the model type of the vehicle.

### Inspection Date
* **Inspection Date** (`inspection_date`, `date`, required): Record the date of the vehicle inspection.

### Inspector Name
* **Inspector Name** (`inspector_name`, `text`, required): Enter the name of the person conducting the inspection.

### Current Mileage
* **Current Mileage** (`mileage`, `number`, required): Enter the current odometer reading.

### Fuel Level
* **Fuel Level** (`fuel_level`, `select_one`, required): Choose the current fuel level (Empty, Quarter tank, Half tank, Three-quarter tank, Full).

### Vehicle Body Condition
* **Vehicle Body Condition** (`body_condition`, `select_one`, required): Evaluate the vehicle's body condition (Excellent, Good, Fair, Poor, Needs repair).

### Tire Condition
* **Tire Condition** (`tires_condition`, `select_one`, required): Assess the overall tire condition (Excellent, Good, Fair, Poor, Needs replacement).

### All Lights Functioning
* **All Lights Functioning** (`lights_working`, `select_one`, required): Confirm if all lights are functioning properly (True, False, Partial).

### Cargo Area Condition
* **Cargo Area Condition** (`cargo_area_condition`, `select_one`, required): Evaluate the cargo area condition (Clean and excellent, Good condition, Fair condition, Dirty/needs cleaning, Damaged).

### All Equipment Present
* **All Equipment Present** (`equipment_present`, `select_one`, required): Confirm if all equipment is present (Yes, all present, Partial, Missing items, Not applicable).

### Brakes Operating Properly
* **Brakes Operating Properly** (`brakes_working`, `select_one`, required): Confirm if brakes are operating properly (Yes, responsive, Yes, adequate, No, needs service).

### Overall Inspection Status
* **Overall Inspection Status** (`final_status`, `select_one`, required): Select the overall inspection status (Approved for rental, Approved with minor issues noted, Not approved, needs repair, Requires second opinion).

Note: This help guide is based on the provided YAML fields. If you need further assistance, please let me know!
