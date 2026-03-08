# Wind Turbine Inspection Check In Form - Help Guide
## Purpose
This form is used to record the current status of a wind turbine, including its location, condition, maintenance history, and performance.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the location of the wind turbine in the "Turbine Location" field.
2. Select the current status of the turbine from the "Current Condition" dropdown menu.
3. Enter the date of the last maintenance in the "Last Maintenance Date" field.
4. Enter the date of the next scheduled maintenance in the "Next Scheduled Maintenance" field.
5. Describe the turbine's performance in the "Turbine Performance" field.
6. Enter any comments or observations about the turbine in the "Inspection Comments" field (optional).
7. Enter your email address for contact purposes in the "Email" field.
8. Enter your phone number for emergency contact in the "Phone Number" field (optional).
9. Provide the coordinates or address of the turbine in the "Location" field.
10. Enter any comments or notes about the turbine inspection in the "Turbine Inspection Comments" field (optional).

## Field-by-Field Explanation

* **Turbine Location** (`turbine_location`, text, required): Enter the physical location of the wind turbine, including its coordinates or address.
* **Current Condition** (`current_condition`, select_one, required): Select the current status of the turbine from the dropdown menu. Options are:
	+ Operational
	+ Maintenance
	+ Out of commission
* **Last Maintenance Date** (`last_maintenance_date`, date, required): Enter the date of the last maintenance performed on the turbine.
* **Next Scheduled Maintenance** (`next_scheduled_maintenance`, date, required): Enter the date of the next scheduled maintenance for the turbine.
* **Turbine Performance** (`turbine_performance`, text, required): Describe the turbine's performance, including any issues or concerns.
* **Inspection Comments** (`inspection_comments`, text, optional): Enter any comments or observations about the turbine inspection.
* **Email** (`email`, email, required): Enter your email address for contact purposes.
* **Phone Number** (`phone`, text, optional): Enter your phone number for emergency contact purposes.
* **Location** (`location`, text, required): Provide the coordinates or address of the turbine.
* **Turbine Inspection Comments** (`turbine_inspection_comments`, text, optional): Enter any comments or notes about the turbine inspection.
