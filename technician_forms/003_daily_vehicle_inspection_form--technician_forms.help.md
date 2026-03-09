# Daily Vehicle Inspection Form - Help Guide
## Purpose
The Daily Vehicle Inspection Form is used to track the inspection of vehicles, capturing relevant information such as vehicle ID, inspection date, and inspection results.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Vehicle ID of the vehicle being inspected.
2. Select the vehicle number from the vehicle's identification number or any other identifier used by the organization.
3. Choose the current vehicle status.
4. Enter the date of the inspection.
5. Select the inspection result.
6. Provide any additional notes or comments regarding the inspection.
7. Enter the date for the next scheduled inspection.

## Field-by-Field Explanation
* **Vehicle ID** (`vehicle_id`, number, required: false): Enter the vehicle's unique identifier.
* **Vehicle Number** (`vin`, text, required: false): Enter the vehicle's identification number or any other identifier used by the organization.
* **Vehicle Status** (`vehicle_status`, select_one, required: false): Choose the current status of the vehicle (Inspected, Not inspected, Not Applicable).
* **Date** (`inspection_date`, date, required: false): Enter the date of the inspection.
* **Result** (`inspection_result`, select_one, required: false): Select the outcome of the inspection (Passed, Failed).
* **Notes** (`notes`, note, required: false): Enter any additional comments or notes about the inspection.
* **Next Inspection Date** (`next_inspection_date`, date, required: false): Enter the date for the next scheduled inspection.
* **Status Comments** (`vehicle_status_comments`, text, required: false): Enter any comments or explanations about the current status of the vehicle.
