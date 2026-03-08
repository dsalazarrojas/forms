# Template F M THS Vehicle Fault Report Form - Help Guide
## Purpose
The Template F M THS Vehicle Fault Report Form is designed to collect detailed information about a vehicle fault report. It will help to identify the issue, determine the necessary repairs or actions, and track and analyze faults for future maintenance and improvements.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the Vehicle Registration Number to ensure that the report is associated with the correct vehicle.
2. Provide the Driver's Name to help us understand who was operating the vehicle when the fault occurred.
3. Enter the Vehicle Mileage to give us an idea of the vehicle's current condition.
4. Describe the Fault in detail, including any symptoms or behaviors observed.
5. Enter the Date and Time when the fault occurred.
6. Provide the location where the fault occurred.
7. Select the Assigned To, who will be handling the fault report.
8. Choose the tools required for the repair or maintenance from the provided options.
9. Enter the Vehicle Year and Model to help us identify the affected parts or components.
10. Select the Vehicle Color to help us understand the context.
11. Choose the Fault Type (Mechanical, Electrical, or Other).
12. Select the Fault Severity (Minor, Major, or Critical).
13. Enter the Fault Date and Fault Time to help us track the fault's progression.
14. Enter the Fault Time to provide a more accurate description of the fault.

## Field-by-Field Explanation
* **Vehicle Registration Number** (`vehicle_registration_number`, `text`, required): Enter the vehicle's registration number to ensure that the report is associated with the correct vehicle.
* **Driver Name** (`driver_name`, `text`, required): Provide the driver's name to help us understand who was operating the vehicle when the fault occurred.
* **Vehicle Mileage** (`vehicle_mileage`, `number`, not required): Enter the current mileage of the vehicle to give us an idea of the vehicle's condition.
* **Fault Description** (`fault_description`, `text`, not required): Describe the fault in detail, including any symptoms or behaviors observed.
* **Date and Time** (`date_and_time`, `date`, not required): Enter the date and time when the fault occurred to help us track the fault's progression.
* **Fault Location** (`fault_location`, `text`, not required): Provide the location where the fault occurred.
* **Assigned To** (`assigned_to`, `select_one`, not required): Select the person or team handling the fault report.
* **Assigned Tool** (`assigned_tool`, `select_multiple`, not required): Choose the tools required for the repair or maintenance from the provided options.
* **Vehicle Year** (`vehicle_year`, `number`, not required): Enter the vehicle's year to help us identify the affected parts or components.
* **Vehicle Model** (`vehicle_model`, `text`, not required): Select the vehicle's model to help us understand the context.
* **Vehicle Color** (`vehicle_color`, `text`, not required): Select the vehicle's color to help us understand the context.
* **Fault Type** (`fault_type`, `select_one`, not required): Choose the fault type (Mechanical, Electrical, or Other).
* **Fault Severity** (`fault_severity`, `select_multiple`, not required): Select the fault severity (Minor, Major, or Critical).
* **Fault Date** (`fault_date`, `date`, not required): Enter the fault date to help us track the fault's progression.
* **Fault Time** (`fault_time`, `time`, not required): Enter the fault time to provide a more accurate description of the fault.
