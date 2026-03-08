# transfer-switch-neutral-connection-inspection-form - Help Guide
## Purpose
This form is used to inspect and document the condition of a transfer switch neutral connection in a facility.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date of the inspection in the "Transfer Switch Neutral Connection Inspection Date" field.
2. Enter the name of the facility where the inspection took place in the "Facility Name" field.
3. Enter the location of the facility in the "Location" field.
4. Enter the name of the inspector who performed the inspection in the "Inspector Name" field.
5. Enter the ID of the inspector's employee in the "Inspector Employee ID" field.
6. Enter the certification number of the inspector in the "Inspector Certification Number" field.
7. Enter the signature of the inspector in the "Inspector Signature" field.
8. Select the type of switch from the "Switch Type" dropdown menu (Switch, No Switch, or Other).
9. Enter the model of the switch in the "Switch Model" field.
10. Select the condition of the switch from the "Switch Condition" dropdown menu (Good, Fair, or Poor).
11. Enter the manufacturer of the switch in the "Switch Manufacturer" field.
12. Enter the make of the switch in the "Switch Make" field.
13. Check if photo documentation is required in the "Photo Documentation" field (True or False).
14. Check if photo upload is required in the "Photo Upload" field (True or False).
15. Select if reporting is required in the "Reporting" field (True or False).
16. Enter the date of reporting in the "Reporting Date" field.
17. Enter the status of reporting in the "Reporting Status" field.
18. Enter any additional comments in the "Comments" field.
19. Enter the signature of the inspector again in the "Inspector Signature 2" field.

## Field-by-Field Explanation
* **Transfer Switch Neutral Connection Inspection Date** (`transfer_switch_neutral_connection_inspection_date`, date, required: false): This field is used to enter the date of the inspection.
* **Facility Name** (`facility_name`, text, required: false): This field is used to enter the name of the facility where the inspection took place.
* **Location** (`location`, text, required: false): This field is used to enter the location of the facility.
* **Inspector Name** (`inspector_name`, text, required: false): This field is used to enter the name of the inspector who performed the inspection.
* **Inspector Employee ID** (`inspector_employee_id`, text, required: false): This field is used to enter the ID of the inspector's employee.
* **Inspector Certification Number** (`inspector_certification_number`, text, required: false): This field is used to enter the certification number of the inspector.
* **Inspector Signature** (`inspector_signature`, text, required: false): This field is used to enter the signature of the inspector.
* **Switch Type** (`switch_type`, select_one, required: false): This field is a dropdown menu with three options: Switch, No Switch, or Other. Select the type of switch present in the facility.
* **Switch Model** (`switch_model`, text, required: false): This field is used to enter the model of the switch.
* **Switch Condition** (`switch_condition`, select_multiple, required: false): This field is a dropdown menu with three options: Good, Fair, or Poor. Select the condition of the switch.
* **Switch Manufacturer** (`switch_manufacturer`, text, required: false): This field is used to enter the manufacturer of the switch.
* **Switch Make** (`switch_make`, text, required: false): This field is used to enter the make of the switch.
* **Photo Documentation** (`photo_documentation`, select_multiple, required: false): This field is a dropdown menu with three options: True, False, or N/A. Check if photo documentation is required.
* **Photo Upload** (`photo_upload`, select_multiple, required: false): This field is a dropdown menu with three options: True, False, or N/A. Check if photo upload is required.
* **Reporting** (`reporting`, select_multiple, required: false): This field is a dropdown menu with three options: True, False, or N/A. Select if reporting is required.
* **Reporting Date** (`reporting_date`, date, required: false): This field is used to enter the date of reporting.
* **Reporting Status** (`reporting_status`, text, required: false): This field is used to enter the status of reporting.
* **Comments** (`comments`, text, required: false): This field is used to enter any additional comments.
* **Inspector Signature 2** (`inspector_signature_2`, text, required: false): This field is used to enter the signature of the inspector again.
