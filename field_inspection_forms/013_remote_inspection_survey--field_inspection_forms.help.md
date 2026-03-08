<thinking>... The purpose of this form is to collect information about a remote inspection survey, including the title, facility name, inspection date and time, location, notes, facility type, owner, manager, contact information, and status of the facility. This form is likely used for facility management or maintenance purposes, such as tracking inspections or monitoring facility performance. The form requires several fields with specific types, including text, date, time, select multiple, select one, and number fields...</thinking>

# remote_inspection_survey - Help Guide
## Purpose
The remote inspection survey form collects information about a facility's inspection and status.

## How To Complete This Form
1. Fill in the title of the survey, which should be a brief description of the inspection.
2. Enter the name of the facility being inspected.
3. Select the date of the inspection. You can enter the date using the calendar icon or type it in manually.
4. Select the time of the inspection. You can enter the time using the time picker or type it in manually.
5. Enter the location of the inspection. This field may not be available on all devices or browsers.
6. Enter any additional notes about the inspection.
7. Select the type of facility being inspected (e.g., Yes, No).
8. Select the facility's owner (e.g., Yes, No).
9. Select the facility's manager (e.g., Yes, No).
10. Enter the facility's contact information.
11. Enter the facility's address.
12. Enter the city of the facility.
13. Enter the state or province of the facility.
14. Enter the facility's zip code.
15. Enter the facility's country.
16. Enter the facility's latitude.
17. Enter the facility's longitude.
18. Enter the facility's elevation.
19. Enter the facility's latitude accuracy.
20. Enter the facility's longitude accuracy.
21. Enter the total number of assets at the facility.
22. Select the type of building (e.g., Active, Inactive).
23. Enter the size of the building.
24. Select the status of the facility (e.g., Active, Inactive).
25. Enter the facility's inspection ID.

## Field-by-Field Explanation

* **Remote Inspection Survey** (`title`): The title of the survey.
* **facility_name** (`facility_name`): The name of the facility being inspected.
	+ Required: yes
* **inspection_date** (`inspection_date`): The date of the inspection.
	+ Type: date
	+ Required: no
* **inspection_time** (`inspection_time`): The time of the inspection.
	+ Type: time
	+ Required: no
* **inspection_location** (`inspection_location`): The location of the inspection.
	+ Type: text
	+ Required: no
* **notes** (`notes`): Additional notes about the inspection.
	+ Type: note
	+ Required: no
* **facility_type** (`facility_type`): Select the type of facility being inspected.
	+ Type: select multiple
	+ Required: no
* **facility_owner** (`facility_owner`): Select the facility's owner.
	+ Type: select one
	+ Required: no
* **facility_manager** (`facility_manager`): Select the facility's manager.
	+ Type: select one
	+ Required: no
* **facility_contact** (`facility_contact`): The facility's contact information.
	+ Type: text
	+ Required: no
* **facility_address** (`facility_address`): The facility's address.
	+ Type: text
	+ Required: yes
* **facility_city** (`facility_city`): The city of the facility.
	+ Type: text
	+ Required: yes
* **facility_state** (`facility_state`): The state or province of the facility.
	+ Type: text
	+ Required: yes
* **facility_zip** (`facility_zip`): The facility's zip code.
	+ Type: text
	+ Required: yes
* **facility_country** (`facility_country`): The facility's country.
	+ Type: text
	+ Required: yes
* **facility_latitude** (`facility_latitude`): The facility's latitude.
	+ Type: number
	+ Required: yes
* **facility_longitude** (`facility_longitude`): The facility's longitude.
	+ Type: number
	+ Required: yes
* **facility_elevation** (`facility_elevation`): The facility's elevation.
	+ Type: number
	+ Required: yes
* **facility_latitude_accuracy** (`facility_latitude_accuracy`): The facility's latitude accuracy.
	+ Type: number
	+ Required: yes
* **facility_longitude_accuracy** (`facility_longitude_accuracy`): The facility's longitude accuracy.
	+ Type: number
	+ Required: yes
* **asset_count** (`asset_count`): The total number of assets at the facility.
	+ Type: number
	+ Required: yes
* **building_type** (`building_type`): The type of building (e.g., Active, Inactive).
	+ Type: text
	+ Required: yes
* **building_size** (`building_size`): The size of the building.
	+ Type: text
	+ Required: yes
* **facility_status** (`facility_status`): The status of the facility (e.g., Active, Inactive).
	+ Type: select one
	+ Required: no
* **facility_inspection_id** (`facility_inspection_id`): The facility's inspection ID.
	+ Type: text
	+ Required: yes
