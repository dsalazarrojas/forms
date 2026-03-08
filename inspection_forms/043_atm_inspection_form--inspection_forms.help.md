<thinking>
This help guide will cover the ATM Inspection Form, which is used to assess the condition of an ATM unit. The form is a critical tool for evaluating the overall state of the machine and identifying any maintenance needs. Before starting, please ensure you have not previously submitted an inspection for this ATM, as this form is designed for new inspections only. If you have any questions or concerns, refer to your supervisor or the relevant documentation. This form consists of 22 fields, each addressing a different aspect of the ATM's condition. Please complete this form carefully and accurately, as it will help us maintain the highest standards of ATM reliability and security.</thinking>

# ATM Inspection Form - Help Guide
## Purpose
The ATM Inspection Form is used to assess the condition of an ATM unit, ensuring the machine is functioning correctly and safely for users. This form helps identify any issues that need attention, allowing for prompt maintenance and repairs.

## How To Complete This Form
1. Enter the **Inspector Name** field with the name of the person conducting the inspection.
2. Enter the **Inspection Date** field with the date of the inspection.
3. Enter the **Inspection Time** field with the start time of the inspection.
4. In the **ATM Location** field, provide the complete address of the ATM's location.
5. Enter the **Serial Number** of the ATM unit.
6. Provide the **Model Number** of the ATM.
7. In the **Exterior Condition Assessment** field, rate the overall exterior condition of the ATM using the provided options (Excellent, Good, Fair, Poor, Needs immediate attention).
8. For **Security Camera Functionality**, select 'True' if it's working, 'False' if not, or 'Not applicable' if there's no camera.
9. In **Card Reader Condition**, select the condition of the card reader slot using the provided options (Good, Damaged, Tampered, Blocked).
10. For **Keypad Condition**, select the condition of the keypad using the options (Good, Worn, Damaged, Covered device present).
11. In **Receipt Printer Functionality**, select 'True' if it's working, 'False' if not, or 'Out of paper' or 'Paper jam' if issues exist.
12. For **Cash Dispenser Condition**, select the condition using the options (Good, Jammed, Damaged, Blocked).
13. In **Screen Display Condition**, select the condition using the options (Clear and readable, Faded, Damaged, Non-functional).
14. For **Adequacy of Lighting Around ATM**, select the lighting conditions using the options (Adequate, Insufficient, Needs improvement, Good).
15. In **Condition of Signage**, select the condition using the options (Good, Missing, Damaged, Needs updating).
16. For **Cleanliness of Surrounding Area**, select the condition using the options (Clean, Litter present, Graffiti present, Needs cleaning).
17. Select **Are There Any Suspicious Devices Attached** using the options ('True', 'False', Uncertain).
18. In **Maintenance Required**, select all applicable maintenance types (Cleaning, Part replacement, Software update, Security upgrade, Cash refill, No maintenance needed).
19. In **Additional Inspection Notes**, record any observations or concerns not covered in other fields.
20. If applicable, enter the **Next Scheduled Inspection Date**.
21. Finally, add a **Supervisor Signature** for verification.

## Field-by-Field Explanation

* **Inspector Name** (`inspector_name`, text, **Required**): Enter the name of the person conducting the inspection.
* **Inspection Date** (`inspection_date`, date, **Required**): Enter the date of the inspection.
* **Inspection Time** (`inspection_time`, time, **Required**): Enter the time the inspection began.
* **ATM Location** (`atm_location`, text, **Required**): Enter the complete address of the ATM location.
* **ATM Serial Number** (`atm_serial_number`, text, **Required**): Enter the serial number of the ATM unit.
* **ATM Model** (`atm_model`, text, **Required**): Enter the model number of the ATM.
* **Exterior Condition Assessment** (`atm_condition_exterior`, select_one, **Required**): Rate the overall condition of the ATM exterior.
* **Security Camera Functionality** (`security_camera_functionality`, select_one, **Required**): Check if the security camera is operational.
* **Card Reader Condition** (`card_reader_condition`, select_one, **Required**): Assess the condition of the card reader slot.
* **Keypad Condition** (`keypad_condition`, select_one, **Required**): Select the condition of the keypad.
* **Receipt Printer Functionality** (`receipt_printer_functionality`, select_one, **Required**): Check if the receipt printer is working properly.
* **Cash Dispenser Condition** (`cash_dispenser_condition`, select_one, **Required**): Assess the condition of the cash dispenser.
* **Screen Display Condition** (`screen_display_condition`, select_one, **Required**): Select the condition of the screen display.
* **Adequacy of Lighting Around ATM** (`lighting_adequacy`, select_one, **Required**): Assess the lighting conditions around the ATM.
* **Condition of Signage** (`signage_condition`, select_one, **Required**): Assess the condition of any posted signs.
* **Cleanliness of Surrounding Area** (`surround_area_cleanliness`, select_one, **Required**): Assess the cleanliness of the area around the ATM.
* **Are There Any Suspicious Devices Attached** (`suspicious_devices_present`, select_one, **Required**): Check for any unauthorized devices attached to the ATM.
* **Maintenance Required** (`maintenance_required`, select_multiple, **Required**): Select all applicable maintenance types.
* **Additional Inspection Notes** (`inspection_notes`, text, **Optional**): Record any additional observations or concerns.
* **Next Scheduled Inspection Date** (`next_scheduled_inspection`, date, **Optional**): Enter the date for the next scheduled inspection.
* **Supervisor Signature** (`supervisor_signature`, text, **Required**): Add a digital signature of the supervising personnel.
