<thinking>...</thinking>

# Smoke Detector Inspection Form - Help Guide
## Purpose
This form is for inspecting and reporting on the condition and functionality of smoke detectors in a building. It helps to ensure that smoke detectors are working properly and alerts the relevant authorities in case of any issues.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the building's address where the smoke detectors are installed.
2. Select the model of the smoke detector being inspected.
3. Indicate the location of the smoke detector.
4. Choose the type of smoke detector being inspected (ionization or photoelectric).
5. Check the condition of the smoke detector (working or not working).
6. Check the status of the alarm (enabled or disabled).
7. Check the status of the battery (full or low).
8. Enter the date of the inspection.
9. Sign and enter your name as the technician performing the inspection.
10. Enter your ID number as the technician performing the inspection.
11. Enter the tool number assigned to you for the inspection.
12. Enter the building's ID number.
13. Enter the building's name.
14. Enter the contact person's name and number for the building.
15. Enter any additional comments or notes about the inspection.
16. Describe the method used to test the smoke detector.
17. Enter the results of the test.
18. Enter the address of the fire panel.
19. Check the status of the fire panel (enabled or disabled).
20. Enter any additional comments or panel status.

## Field-by-Field Explanation

### Building Address
* **Building Address** (`building_address`, `text`, required: false)
	+ Enter the address of the building where the smoke detectors are installed.

### Smoke Detector Model
* **Smoke Detector Model** (`smoke_detector_model`, `text`, required: false)
	+ Enter the model of the smoke detector being inspected.

### Location
* **Location** (`location`, `text`, required: false)
	+ Indicate the location of the smoke detector.

### Smoke Detector Type
* **Smoke Detector Type** (`smoke_detector_type`, `select_one`, required: false)
	+ Choose between ionization or photoelectric smoke detector types.

### Smoke Detector Condition
* **Smoke Detector Condition** (`smoke_detector_condition`, `select_multiple`, required: false)
	+ Check the condition of the smoke detector (working or not working) and if unknown.

### Alarm Status
* **Alarm Status** (`alarm_status`, `select_one`, required: false)
	+ Check the status of the alarm (enabled or disabled).

### Battery Status
* **Battery Status** (`battery_status`, `select_one`, required: false)
	+ Check the status of the battery (full or low).

### Inspection Date
* **Inspection Date** (`inspection_date`, `date`, required: false)
	+ Enter the date of the inspection.

### Technician Signature
* **Technician Signature** (`technician_signature`, `text`, required: false)
	+ Sign your name as the technician performing the inspection.

### Technician Name
* **Technician Name** (`technician_name`, `text`, required: false)
	+ Enter your name as the technician performing the inspection.

### Technician ID
* **Technician ID** (`technician_id`, `text`, required: false)
	+ Enter your ID number as the technician performing the inspection.

### Assigned Tool
* **Assigned Tool** (`assigned_tool`, `text`, required: false)
	+ Enter the tool number assigned to you for the inspection.

### Form ID
* **Form ID** (`form_id`, `text`, required: false)
	+ Enter the ID number for the form.

### Building Name
* **Building Name** (`building_name`, `text`, required: false)
	+ Enter the name of the building.

### Building ID
* **Building ID** (`building_id`, `text`, required: false)
	+ Enter the building's ID number.

### Building Contact
* **Building Contact** (`building_contact`, `text`, required: false)
	+ Enter the contact person's name and number for the building.

### Comments
* **Comments** (`comments`, `note`, required: false)
	+ Enter any additional comments or notes about the inspection.

### Testing Method
* **Testing Method** (`smoke_detector_testing_method`, `text`, required: false)
	+ Describe the method used to test the smoke detector.

### Test Results
* **Test Results** (`smoke_detector_test_results`, `text`, required: false)
	+ Enter the results of the test.

### Fire Panel Address
* **Fire Panel Address** (`fire_panel_address`, `text`, required: false)
	+ Enter the address of the fire panel.

### Fire Panel Status
* **Fire Panel Status** (`fire_panel_status`, `select_one`, required: false)
	+ Check the status of the fire panel (enabled or disabled).

### Panel Status
* **Panel Status** (`panel_status`, `text`, required: false)
	+ Enter any additional comments or panel status.

### Comments
* **Comments** (`comments`, `text`, required: false)
	+ Enter any additional comments or notes about the inspection.
