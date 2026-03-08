<thinking>...</thinking>

# Chassis Inventory Survey - Help Guide

## Purpose
This form is designed to collect information about the inventory of company-owned or leased chassis, including details such as location, type, condition, and operational status.

## How To Complete This Form
1. Ensure you have permission to access the relevant chassis information.
2. Select the chassis you wish to survey from the inventory.
3. Complete the form for each chassis, providing accurate and detailed information about its condition and operational status.

## Field-by-Field Explanation

* **Survey Date** (`survey_date`, date, required): The date on which this survey is being conducted.
* **Surveyor Name** (`surveyor_name`, text, required): The name and title of the person conducting the survey.
* **Inventory Location** (`location`, text, required): The location where the chassis is being stored or used.
* **Chassis ID or Serial Number** (`chassis_id`, text, required): The unique identifier assigned to the chassis.
* **Chassis Type** (`chassis_type`, select_one, required): The type of chassis, which can be:
	+ Dry Van
	+ Refrigerated
	+ Flatbed
	+ Tanker
	+ Specialized
	+ Other
* **Make and Model** (`make_model`, text, required): The manufacturer and model of the chassis.
* **Year Manufactured** (`year_manufactured`, number, required): The year the chassis was produced.
* **Overall Condition** (`overall_condition`, select_one, required): The overall condition of the chassis, which can be:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Needs Repair
* **Tire Condition** (`tires_condition`, select_one, required): The condition of the tires, which can be:
	+ New
	+ Good
	+ Fair
	+ Worn
	+ Replacement Needed
* **Brake System Condition** (`brakes_condition`, select_one, required): The condition of the brakes, which can be:
	+ Excellent
	+ Good
	+ Fair
	+ Needs Maintenance
* **Lights and Electrical** (`lights_condition`, select_one, required): The status of all lights and electrical components, which can be:
	+ All Working
	+ Some Issues
	+ Multiple Issues
	+ Needs Repair
* **Operational Status** (`operational_status`, select_one, required): The current operational status of the chassis, which can be:
	+ In Service
	+ Available
	+ Under Maintenance
	+ Needs Repair
	+ Out of Service
* **Last Maintenance Date** (`last_maintenance_date`, date, optional): The date of the last maintenance or service performed on the chassis.
* **Next Maintenance Due Date** (`next_maintenance_due`, date, optional): The date by which the next maintenance or service is due.
* **Known Issues or Damage** (`known_issues`, text, optional): List any known problems or damage with the chassis.
* **Repairs Needed** (`repair_needed`, text, optional): List any repairs that are necessary for the chassis.
* **Estimated Repair Cost** (`estimated_repair_cost`, number, optional): An approximate cost in dollars to repair the chassis.

Note: This form is to be used for internal purposes only and is not for external sharing or distribution.
