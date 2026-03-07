<thinking>... 

This form is used to conduct a 4-point inspection of a property. The purpose of the inspection is to assess the condition of the property's systems, including property address, date of inspection, and condition of the roof, electrical, plumbing, and HVAC systems. The inspector will also assess the foundation, safety hazards, and overall condition of the property.

The form is split into sections that guide the inspector in collecting information on each critical area of the property.

**4 Point Inspection Form - Help Guide**

## Purpose
The 4 Point Inspection Form is used to evaluate the condition of a property's systems, including its foundation, roof, electrical, plumbing, and HVAC systems. This form helps inspectors collect and document their findings to inform decisions on property maintenance and safety.

## How To Complete This Form
1. Select the property address where the inspection will be conducted.
2. Enter the date of the inspection.
3. Evaluate the condition of each property system:
	* Roof: Choose from "Good", "Fair", "Poor", or "Failed / urgent repair".
	* Electrical: Choose from "Good", "Fair", "Poor", or "Unsafe / requires immediate attention".
	* Plumbing: Choose from "Good", "Fair", "Poor", or "Failed / active leak".
	* HVAC / Heating: Choose from "Good", "Fair", "Poor", or "Not operational".
4. Record any notable observations on the property's foundation and safety hazards.
5. Rate the overall condition of the property on a scale of 1-10.
6. Indicate if immediate repairs are recommended.
7. Estimate the cost of any required repairs (if applicable).
8. Suggest a follow-up inspection date.
9. Provide any additional notes and recommendations.

## Field-by-Field Explanation

* **Property address** (`property_address`, text, required): Enter the address of the property being inspected.
* **Date of inspection** (`inspection_date`, date, required): Enter the date the inspection was conducted.
* **Inspector name** (`inspector_name`, text, required): Enter the name of the inspector conducting the inspection.
* **Roof condition** (`roof_condition`, select_one, required): Evaluate the condition of the roof.
	+ Choose "Good" if the roof is in excellent condition.
	+ Choose "Fair" if the roof has some minor issues or maintenance concerns.
	+ Choose "Poor" if the roof is in need of significant repairs or maintenance.
	+ Choose "Failed / urgent repair" if the roof is severely damaged or poses an immediate safety risk.
* **Electrical system condition** (`electrical_condition`, select_one, required): Evaluate the condition of the electrical system.
	+ Choose "Good" if the electrical system is in excellent condition.
	+ Choose "Fair" if the electrical system has some minor issues or maintenance concerns.
	+ Choose "Poor" if the electrical system is in need of significant repairs or maintenance.
	+ Choose "Unsafe / requires immediate attention" if the electrical system poses an immediate safety risk.
* **Plumbing system condition** (`plumbing_condition`, select_one, required): Evaluate the condition of the plumbing system.
	+ Choose "Good" if the plumbing system is in excellent condition.
	+ Choose "Fair" if the plumbing system has some minor issues or maintenance concerns.
	+ Choose "Poor" if the plumbing system is in need of significant repairs or maintenance.
	+ Choose "Failed / active leak" if the plumbing system has a significant issue or poses an immediate safety risk.
* **HVAC / Heating condition** (`hvac_condition`, select_one, required): Evaluate the condition of the HVAC system.
	+ Choose "Good" if the HVAC system is in excellent condition.
	+ Choose "Fair" if the HVAC system has some minor issues or maintenance concerns.
	+ Choose "Poor" if the HVAC system is in need of significant repairs or maintenance.
	+ Choose "Not operational" if the HVAC system is not functioning correctly.
* **Foundation / structural observations** (`foundation_observations`, text, optional): Record any notable observations on the property's foundation.
* **Safety hazards observed (select all that apply)** (`safety_hazards`, select_multiple, optional): Select all safety hazards that were observed during the inspection.
* **Overall condition score** (`overall_score`, integer, required): Rate the overall condition of the property on a scale of 1-10.
* **Immediate repair recommended?** (` immediate_repair_required`, select_one, required): Indicate if immediate repairs are recommended.
* **Estimated repair cost (if applicable)** (`estimated_repair_cost`, decimal, optional): Enter an estimate of the cost of any required repairs.
* **Recommended follow-up inspection date** (`follow_up_date`, date, optional): Suggest a follow-up inspection date.
* **Inspector additional notes and recommendations** (`inspector_notes`, text, optional): Provide any additional notes or recommendations from the inspector.
