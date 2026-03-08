# Smoke Detector Inspection Form - Help Guide
## Purpose
The Smoke Detector Inspection Form is designed to collect information about the status of smoke detectors in a building. This form is intended for use by authorized personnel within the organization or relevant authorities to identify potential issues, track maintenance activities, or ensure compliance with safety regulations.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the building's address in the "Building Address" field.
2. Enter the number of floors in the "Number of Floors" field.
3. Enter the name or contact information of the fire safety manager in the "Fire Safety Manager" field.
4. Select the type of smoke detector installed in the "Smoke Detector Type" field.
5. Indicate if the smoke detector is present or not in the "Is Smoke Detector Present" field.
6. Enter the date when the smoke detector was last tested in the "Smoke Detector Testing Date" field.
7. Select the current status of the smoke detector in the "Smoke Detector Status" field.
8. Enter any maintenance records or comments in the "Maintenance Record" field.
9. Enter the last update date for the maintenance record in the "Last Updated" field.
10. Add any additional comments or observations in the "Comments" field.

## Field-by-Field Explanation

* **Building Address** (`building_address`, text, required): Enter the building's address where the smoke detector is located.
* **Number of Floors** (`number_of_floors`, number, required): Enter the number of floors in the building.
* **Fire Safety Manager** (`fire_safety_manager`, text, required): Enter the name or contact information of the fire safety manager.
* **Smoke Detector Type** (`smoke_detector_type`, select_one, required): Select the type of smoke detector installed.
* **Is Smoke Detector Present** (`is_smoke_detector_present`, select_multiple, required): Indicate if the smoke detector is present or not.
* **Smoke Detector Testing Date** (`smoke_detector_testing_date`, date, required): Enter the date when the smoke detector was last tested.
* **Smoke Detector Status** (`smoke_detector_status`, select_one, required): Select the current status of the smoke detector (Functioning, Faulty, or Missing).
* **Maintenance Record** (`maintenance_record`, text, required): Enter any notes or logs related to the maintenance activities performed on the smoke detector.
* **Last Updated** (`maintenance_last_updated`, date, required): Enter the last update date for the maintenance record.
* **Comments** (`comments`, note, required): Add any additional comments or observations about the smoke detector.
