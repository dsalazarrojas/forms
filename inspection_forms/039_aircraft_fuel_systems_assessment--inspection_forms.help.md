# Aircraft Fuel Systems Assessment - Help Guide
## Purpose
The Aircraft Fuel Systems Assessment form is designed to evaluate the condition of your aircraft's fuel systems, ensuring safe and efficient operations.

## How To Complete This Form
1. Enter the inspector's name and certification information in the "Inspector Name" field.
2. Enter the inspector's certification in the "Inspector Certificate" field.
3. Enter the date of the inspection in the "Assessment Date" field.
4. Fill in the aircraft's registration number in the "Aircraft Registration" field.
5. Select the aircraft's make in the "Aircraft Make" field.
6. Enter the aircraft's model in the "Aircraft Model" field.
7. Enter the total airframe hours in the "Total Airframe Hours" field.
8. Choose the type of fuel tank configuration in the "Fuel Tank Type" field.
9. Enter the total fuel capacity in the "Total Fuel Capacity" field.
10. Enter the number of fuel tanks in the "Number of Fuel Tanks" field.
11. Evaluate the condition of the left, right, and center tanks in the "Left Tank Condition", "Right Tank Condition", and "Center Tank Condition" fields, respectively.
12. Check for fuel contamination and choose the correct option in the "Fuel Contamination Check" field.
13. Select the locations where fuel samples were taken in the "Fuel Sample Locations" field.
14. Evaluate the condition of the fuel cap and select the correct option in the "Fuel Cap Condition" field.
15. Check the condition of the fuel vents and select the correct option in the "Fuel Vents" field.
16. Evaluate the condition of the fuel lines and select the correct option in the "Fuel Lines" field.
17. Check the operation of the fuel selector valve and select the correct option in the "Fuel Selector Valve" field.
18. Evaluate the condition of the fuel strainer and select the correct option in the "Fuel Strainer" field.
19. Check the operation of the fuel pumps and select the correct option in the "Fuel Pump Operation" field.
20. Enter the operating fuel pressure in the "Fuel Pressure" field.
21. Enter the fuel flow rate (if applicable) in the "Fuel Flow Rate" field.
22. Evaluate the accuracy of the fuel gauge and select the correct option in the "Fuel Gauge Accuracy" field.
23. Evaluate the indication of the fuel quantity and enter your notes in the "Fuel Quantity Indication" field.
24. Check for leaks and select the correct option in the "Leak Check" field.
25. If leaks were found, list their locations in the "Leak Locations" field.
26. Evaluate the condition of the vent system and select the correct option in the "Vent System" field.
27. Check if the fuel heater is functional (if equipped) and select the correct option in the "Fuel Heater" field.
28. Check if the crossfeed system is functional (if equipped) and select the correct option in the "Crossfeed System" field.
29. List any discrepancies found during the inspection in the "Discrepancies Found" field.
30. If repairs are required, list them in the "Corrective Action Required" field.
31. Evaluate the airworthiness status of the aircraft and select the correct option in the "Airworthiness Status" field.
32. Sign with your digital signature in the "Inspector Signature" field.
33. Enter the date or hours for the next inspection in the "Next Inspection Due" field.

## Field-by-Field Explanation
* **Inspector Name** (`inspector_name`, text, required): Enter your full name as the inspector.
* **Inspector Certificate** (`inspector_certificate`, text, required): Enter your relevant certification or qualification.
* **Assessment Date** (`assessment_date`, date, required): Enter the date of the inspection.
* **Aircraft Registration** (`aircraft_registration`, text, required): Enter the aircraft's tail number.
* **Aircraft Make** (`aircraft_make`, text, required): Enter the aircraft's manufacturer.
* **Aircraft Model** (`aircraft_model`, text, required): Enter the aircraft's model.
* **Total Airframe Hours** (`total_airframe_hours`, number, required): Enter the total time in service.
* **Fuel Tank Type** (`fuel_tank_type`, select_one, required): Choose the type of fuel tank configuration.
* **Total Fuel Capacity** (`tank_capacity`, number, required): Enter the total usable capacity.
* **Number of Fuel Tanks** (`number_of_tanks`, number, required): Enter the total number of tanks.
* **Left Tank Condition** (`left_tank_condition`, select_one, required): Evaluate the condition of the left tank.
* **Right Tank Condition** (`right_tank_condition`, select_one, required): Evaluate the condition of the right tank.
* **Center Tank Condition** (`center_tank_condition`, select_one, optional): Evaluate the condition of the center tank (if applicable).
* **Fuel Contamination Check** (`fuel_contamination`, select_one, required): Check for contamination and select the correct option.
* **Fuel Sample Locations** (`fuel_sample_locations`, select_multiple, required): Select the locations where samples were taken.
* **Fuel Cap Condition** (`fuel_cap_condition`, select_one, required): Evaluate the condition of the fuel cap and select the correct option.
* **Fuel Vents** (`fuel_vents`, select_one, required): Check the condition of the fuel vents and select the correct option.
* **Fuel Lines** (`fuel_lines`, select_one, required): Evaluate the condition of the fuel lines and select the correct option.
* **Fuel Selector Valve** (`fuel_selector_valve`, select_one, required): Check the operation of the fuel selector valve and select the correct option.
* **Fuel Strainer** (`fuel_strainer`, select_one, required): Evaluate the condition of the fuel strainer and select the correct option.
* **Fuel Pump Operation** (`fuel_pump_operation`, select_one, required): Check the operation of the fuel pumps and select the correct option.
* **Fuel Pressure** (`fuel_pressure`, number, required): Enter the operating fuel pressure.
* **Fuel Flow Rate** (`fuel_flow_rate`, number, optional): Enter the fuel flow rate (if applicable).
* **Fuel Gauge Accuracy** (`fuel_gauge_accuracy`, select_one, required): Evaluate the accuracy of the fuel gauge and select the correct option.
* **Fuel Quantity Indication** (`fuel_quantity_indication`, text, optional): Evaluate the indication of the fuel quantity and enter your notes.
* **Leak Check** (`leak_check`, select_one, required): Check for leaks and select the correct option.
* **Leak Locations** (`leak_locations`, text, optional): If leaks were found, list their locations.
* **Vent System** (`vent_system`, select_one, required): Evaluate the condition of the vent system and select the correct option.
* **Fuel Heater** (`fuel_heater`, select_one, required): Check if the fuel heater is functional (if equipped) and select the correct option.
* **Crossfeed System** (`crossfeed_system`, select_one, required): Check if the crossfeed system is functional (if equipped) and select the correct option.
* **Discrepancies Found** (`discrepancies_found`, text, required): List any discrepancies or issues found during the inspection.
* **Corrective Action Required** (`corrective_action`, text, required): If repairs are required, list them in this field.
* **Airworthiness Status** (`airworthiness_status`, select_one, required): Evaluate the airworthiness status of the aircraft and select the correct option.
* **Inspector Signature** (`inspector_signature`, text, required): Sign with your digital signature.
* **Next Inspection Due** (`next_inspection_due`, text, required): Enter the date or hours for the next inspection.
