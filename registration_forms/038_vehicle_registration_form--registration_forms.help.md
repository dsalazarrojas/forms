# Vehicle Registration Form - Help Guide
## Purpose
The Vehicle Registration Form is designed to gather information about a vehicle for registration purposes.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in the vehicle information, including type, make, and model.
2. Select the correct vehicle type, color, and other relevant attributes.
3. Provide the vehicle's registration details, including registration date, renewal date, and renewal notice date.
4. Enter any additional notes or comments about the vehicle.

## Field-by-Field Explanation

* **Vehicle Information** (`vehicle_registration_form_1`, text, required: false): Enter a brief description of the vehicle.
* **Vehicle Type** (`vehicle_type`, select_one, required: false): Select the type of vehicle (Vehicle, Motorcycle, Tractor).
* **Make** (`make`, select_multiple, required: false): Select the make of the vehicle (Ford, General Motors, Dodge, Nissan).
* **Model** (`model`, select_one, required: false): Select the model of the vehicle (1st, 2nd, 3rd).
* **Color** (`color`, select_multiple, required: false): Select the color of the vehicle (Red, Blue, Green).
* **Vin** (`vin`, text, required: false): Enter the Vehicle Identification Number (VIN) of the vehicle.
* **Plate Number** (`plate_number`, text, required: false): Enter the vehicle's plate number.
* **Registered Owner** (`registered_owner`, text, required: false): Enter the name of the registered owner.
* **Vehicle Age** (`vehicle_age`, number, required: false): Enter the age of the vehicle in years.
* **Vehicle Weight** (`vehicle_weight`, number, required: false): Enter the weight of the vehicle in kg.
* **Engine Size** (`engine_size`, select_one, required: false): Select the engine size (2.0, 3.0, 4.0).
* **Vehicle Length** (`vehicle_length`, number, required: false): Enter the length of the vehicle in meters.
* **Vehicle Width** (`vehicle_width`, number, required: false): Enter the width of the vehicle in meters.
* **Vehicle Height** (`vehicle_height`, number, required: false): Enter the height of the vehicle in meters.
* **Vehicle Year** (`vehicle_year`, number, required: false): Enter the year of the vehicle.
* **Monthly Maintenance Cost** (`vehicle_monthly_maintenance_cost`, number, required: false): Enter the monthly maintenance cost of the vehicle.
* **Annual Insurance Cost** (`vehicle_annual_insurance_cost`, number, required: false): Enter the annual insurance cost of the vehicle.
* **Annual Registration Cost** (`vehicle_annual_registration_cost`, number, required: false): Enter the annual registration cost of the vehicle.
* **Registration Date** (`vehicle_registration_date`, date, required: false): Enter the date of the vehicle's registration.
* **Status** (`vehicle_status`, select_one, required: false): Select the status of the vehicle (Registered, Unregistered).
* **Status Note** (`vehicle_status_note`, text, required: false): Enter any additional notes about the vehicle's status.
* **Renewal Date** (`vehicle_renewal_date`, date, required: false): Enter the date of the vehicle's renewal.
* **Renewal Notice Date** (`vehicle_renewal_notice_date`, date, required: false): Enter the date of the renewal notice.
* **Notes** (`notes`, text, required: false): Enter any additional notes or comments about the vehicle.
* **Submitted By** (`submitted_by`, text, required: false): Enter the name of the person submitting the form.
