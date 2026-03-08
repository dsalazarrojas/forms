# Chiller Form - Help Guide
## Purpose
The Chiller Form is designed for inspectors to document the evaluation and assessment of chiller units. This form helps ensure that all necessary parameters are checked and reported, facilitating accurate and comprehensive maintenance and evaluation of chiller performance.

## How To Complete This Form
To complete the Chiller Form, follow these steps:

1.  Enter your full name as the inspector.
2.  Select the inspection date.
3.  Enter the Chiller Unit ID (e.g., CHL-001).
4.  Document the current operating conditions of the chiller unit.
5.  Record the current suction pressure (PSI).
6.  Record the current discharge pressure (PSI).
7.  Record the current oil pressure (PSI).
8.  Record the water inlet temperature (F).
9.  Record the water outlet temperature (F).
10. Record whether the leak check was performed.
11. Report whether the oil level is satisfactory.
12. Report the current refrigerant level (Low, Normal, High).
13. Report the overall unit condition (Excellent, Good, Fair, Poor).
14. Provide any additional comments or observations.

## Field-by-Field Explanation
- **Inspector Name**: (`inspector_name`, text, required): Enter your full name as the inspector.
- **Inspection Date**: (`inspection_date`, date, required): Select the date of the inspection.
- **Chiller Unit ID**: (`chiller_id`, text, required): Enter the Chiller Unit ID (e.g., CHL-001).
- **Current Operating Conditions**: (`header_operating_conditions`, note, required): Document the current operating conditions of the chiller unit.
- **Suction Pressure (PSI)**: (`suction_pressure`, number, required): Record the current suction pressure in PSI.
- **Discharge Pressure (PSI)**: (`discharge_pressure`, number, required): Record the current discharge pressure in PSI.
- **Oil Pressure (PSI)**: (`oil_pressure`, number, required): Record the current oil pressure in PSI.
- **Water Inlet Temperature (F)**: (`water_inlet_temp`, number, required): Record the current water inlet temperature in F.
- **Water Outlet Temperature (F)**: (`water_outlet_temp`, number, required): Record the current water outlet temperature in F.
- **Leak Check**: (`leak_check`, select_one, required): Report whether the leak check was performed (Yes, No, Not Applicable).
- **Oil Level Satisfactory**: (`oil_level_check`, select_one, required): Report whether the oil level is satisfactory (Yes, No).
- **Refrigerant Level**: (`refrigerant_level`, select_one, required): Report the current refrigerant level (Low, Normal, High).
- **Overall Unit Condition**: (`general_condition`, select_one, required): Report the overall unit condition (Excellent, Good, Fair, Poor).
- **Additional Comments or Observations**: (`comments`, text, optional): Provide any additional comments or observations.
