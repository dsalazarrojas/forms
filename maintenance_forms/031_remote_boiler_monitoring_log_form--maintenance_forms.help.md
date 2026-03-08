# remote_boiler_monitoring_log_form - Help Guide
## Purpose
The remote boiler monitoring log form is used to track the status and maintenance history of boilers in various locations. It provides authorized personnel with a quick and efficient way to report on boiler issues and maintenance activities.

## How To Complete This Form
1. Select the location of the boiler from the drop-down menu.
2. Enter the current status of the boiler (Active or Inactive).
3. If the boiler is Inactive, provide the date and time of the last maintenance activity.
4. Enter the date and time of the next maintenance activity.
5. If applicable, enter the maintenance cost.
6. Enter any additional comments or notes about the boiler.
7. If applicable, select the asset category for the boiler.
8. Enter any additional asset information as required.

## Field-by-Field Explanation
* **Boiler Location** (`boiler_location`, `text`, optional): Enter the location of the boiler being monitored.
* **Boiler Status** (`boiler_status`, `select_one`, optional): Select the current status of the boiler (Active or Inactive).
	+ Select Inactive if the boiler is not currently operational.
* **Maintenance Date** (`maintenance_date`, `date`, optional): Enter the date of the last maintenance activity.
* **Maintenance Time** (`maintenance_time`, `time`, optional): Enter the time of the last maintenance activity.
* **Notes** (`notes`, `note`, optional): Enter any additional comments or notes about the boiler.
* **Email** (`email`, `email`, optional): Enter the contact email address of the person submitting the form.
* **Phone** (`phone`, `text`, optional): Enter the contact phone number of the person submitting the form.
* **Serial Number** (`serial_number`, `text`, optional): Enter the serial number of the boiler.
* **Boiler Capacity** (`boiler_capacity`, `number`, optional): Enter the capacity of the boiler.
* **Maintenance Cost** (`maintenance_cost`, `number`, optional): Enter the cost of the last maintenance activity.
* **Maintenance Frequency** (`maintenance_frequency`, `select_multiple`, required): Select the frequency of required maintenance activities.
	+ Select one or more of the options (Option 1, Option 2, Option 3).
* **Comments** (`comments`, `text`, optional): Enter any additional comments about the boiler.
* **Location** (`location`, `text`, optional): Enter the location of the boiler.
* **Asset Number** (`asset_number`, `text`, optional): Enter the asset number of the boiler.
* **Boiler Model** (`boiler_model`, `text`, optional): Enter the model of the boiler.
* **Boiler Type** (`boiler_type`, `text`, optional): Enter the type of the boiler.
* **Last Maintenance** (`last_maintenance`, `date`, optional): Enter the date of the last maintenance activity.
* **Next Maintenance** (`next_maintenance`, `date`, optional): Enter the date of the next maintenance activity.
* **Maintenance Hours** (`maintenance_hours`, `text`, optional): Enter the number of maintenance hours.
* **Maintenance Cost Currency** (`maintenance_cost_currency`, `text`, optional): Enter the currency of the maintenance cost.
* **Maintenance Cost Amount** (`maintenance_cost_amount`, `text`, optional): Enter the maintenance cost amount.
* **Maintenance Cost** (`maintenance_cost`, `text`, optional): Enter the maintenance cost amount.
* **Asset Tag** (`asset_tag`, `text`, optional): Enter the asset tag of the boiler.
* **Asset Status** (`asset_status`, `text`, optional): Enter the asset status of the boiler.
* **Asset Category** (`asset_category`, `text`, optional): Enter the asset category of the boiler.

Note: The fields that are marked as "optional" can be filled out if the user has additional information to provide, but are not required for the user to complete the form.
