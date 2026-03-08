# Inertial Measurement Unit Predictive Maintenance Inspection Form - Help Guide
## Purpose
This form is used to capture and record information about the status and maintenance history of Inertial Measurement Units (IMUs). Completing this form will help ensure that the IMUs are properly maintained and updated in the database for future reference.

## How To Complete This Form

1. Select the "General Info" page to begin.
2. Enter the following information:
	* Imu Serial Number: The unique serial number of the IMU.
	* Imu Model Number: The model number of the IMU.
	* Inspector Name: The name of the inspector performing the inspection.
	* Inspect Date: The date of the inspection.
3. Select the "Equipment Status" for the IMU:
	* Active: The IMU is currently in operation and functioning properly.
	* Inactive: The IMU is not currently in operation and not functioning properly.
4. Choose the "Maintenance Status" for the IMU:
	* Completed: Maintenance has been performed on the IMU.
	* In Progress: Maintenance is currently being performed on the IMU.
	* Pending: Maintenance is scheduled but not yet performed.
	* Scheduled: Maintenance is scheduled but not yet performed.
5. Enter any notes about the IMU in the "Notes" field.
6. Enter the email address and phone number of the contact person responsible for the IMU.
7. Enter the location of the IMU.
8. Enter the cost of the most recent maintenance.
9. Enter the equipment category, subcategory, and type of the IMU.
10. Enter the location of the serial number and notes.
11. Enter the person assigned to the IMU.
12. Enter any additional comments about the IMU.

## Field-by-Field Explanation

* **Imu Serial Number** (`imu_serial_number`, `text`, optional): Enter the unique serial number of the IMU.
* **Imu Model Number** (`imu_model_number`, `text`, optional): Enter the model number of the IMU.
* **Inspector Name** (`inspector_name`, `text`, optional): Enter the name of the inspector performing the inspection.
* **Inspect Date** (`inspect_date`, `date`, optional): Enter the date of the inspection.
* **Equipment Status** (`equipment_status`, `select_one`, optional):
	+ Active: The IMU is currently in operation and functioning properly.
	+ Inactive: The IMU is not currently in operation and not functioning properly.
* **Maintenance Status** (`maintenance_status`, `select_multiple`, optional):
	+ Completed: Maintenance has been performed on the IMU.
	+ In Progress: Maintenance is currently being performed on the IMU.
	+ Pending: Maintenance is scheduled but not yet performed.
	+ Scheduled: Maintenance is scheduled but not yet performed.
* **Notes** (`notes`, `note`, optional): Enter any notes or comments about the IMU.
* **Email** (`email`, `email`, optional): Enter the email address of the contact person responsible for the IMU.
* **Phone Number** (`phone_number`, `text`, optional): Enter the phone number of the contact person responsible for the IMU.
* **Imu Location** (`imu_location`, `text`, optional): Enter the location of the IMU.
* **Maintenance Cost** (`maintenance_cost`, `number`, optional): Enter the cost of the most recent maintenance.
* **Equipment Category** (`equipment_category`, `text`, optional): Enter the category of the IMU.
* **Equipment Subcategory** (`equipment_sub_category`, `text`, optional): Enter the subcategory of the IMU.
* **Equipment Type** (`equipment_type`, `text`, optional): Enter the type of the IMU.
* **Serial Number Location** (`serial_number_location`, `text`, optional): Enter the location where the serial number is found.
* **Notes Location** (`notes_location`, `text`, optional): Enter the location where notes are kept.
* **Assigned To** (`assigned_to`, `text`, optional): Enter the person assigned to the IMU.
* **Comments** (`comments`, `note`, optional): Enter any additional comments about the IMU.
* **Maintenance Due Date** (`maintenance_due_date`, `date`, optional): Enter the date when maintenance is due.
* **Equipment Age** (`equipment_age`, `number`, optional): Enter the age of the IMU.
* **Total Cycles** (`total_cycles`, `number`, optional): Enter the total number of cycles the IMU has completed.
* **Last Maintenance** (`last_maintenance`, `number`, optional): Enter the number of last maintenance performed.
* **Maintenance Interval** (`maintenance_interval`, `number`, optional): Enter the interval between maintenance.
* **Last Maintenance Cost** (`last_maintenance_cost`, `number`, optional): Enter the cost of the last maintenance.
