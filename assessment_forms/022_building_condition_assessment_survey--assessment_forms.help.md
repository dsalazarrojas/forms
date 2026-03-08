# Building Condition Assessment Survey - Help Guide
## Purpose
The Building Condition Assessment Survey is a comprehensive assessment of a building's condition. This form is used to evaluate the building's external and internal elements, systems, and overall safety status. The assessment is crucial for maintenance planning, prioritization, and budgeting.

## How To Complete This Form

1. Fill out the **Assessment Header** section with the building name/identifier and assessment date.
2. Evaluate the **Roof Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
3. Determine the **Exterior Walls Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
4. Assess the **Foundation Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
5. Evaluate the **Windows and Doors Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
6. Assess the **Gutters and Drainage Systems** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
7. Evaluate the **Landscaping and Grounds Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", "Critical".
8. Assess the **Interior Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
9. Determine the **Flooring Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
10. Evaluate the **Walls and Paint Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
11. Assess the **Ceiling Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
12. Evaluate the **Doors and Frames Condition** using the provided options: "Excellent", "Good", "Fair", "Poor", or "Critical".
13. Assess the **Electrical System** using the provided options: "Excellent - Modern", "Good", "Fair", "Poor", or "Critical - Safety hazard".
14. Assess the **Plumbing System** using the provided options: "Excellent", "Good", "Fair - Minor leaks", "Poor - Multiple issues", or "Critical - Major problems".
15. Evaluate the **HVAC System** using the provided options: "Excellent - New or recently serviced", "Good", "Fair - Works but needs service", "Poor - Multiple issues", or "Critical - Non-functional".
16. Evaluate the **Water Damage or Moisture Issues** using the provided options: "None observed", "Minor", "Moderate", "Extensive", or "Critical - Severe throughout".
17. Assess the **Pest or Rodent Evidence** using the provided options: "None", "Minor signs", "Moderate evidence", "Significant evidence", or "Active infestation".
18. Evaluate the **Mold or Mildew Presence** using the provided options: "None observed", "Minor - Limited areas", "Moderate - Several areas", "Extensive - Multiple areas", or "Critical - Extensive throughout".
19. Evaluate the **Immediate Repairs Needed** section for urgent issues that require immediate attention.
20. Provide an **Overall Building Condition Rating** from "Excellent" to "Critical".
21. Confirm the building's **Safety for Occupancy** using the provided options: "Yes, fully safe", "Yes, with minor improvements", "Conditional safety", "No - Safety concerns", or "No - Unsafe for occupancy".

**Field-by-Field Explanation**

* **Assessment Date** (`assessment_date`, date, required): The date on which the assessment was performed.
* **Assessor Name** (`assessor_name`, text, required): The name of the person who performed the assessment.
* **Building Name or Identifier** (`building_name`, text, required): The name or identifier of the building being assessed.
* **Building Address** (`building_address`, text, required): The address of the building being assessed.
* **Roof Condition** (`roof_condition`, select_one, required): The condition of the building's roof, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Exterior Walls Condition** (`wall_condition`, select_one, required): The condition of the building's exterior walls, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Foundation Condition** (`foundation_condition`, select_one, required): The condition of the building's foundation, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Windows and Doors Condition** (`windows_doors`, select_one, required): The condition of the building's windows and doors, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Gutters and Drainage Systems** (`gutters_drainage`, select_one, required): The condition of the building's gutters and drainage systems, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Landscaping and Grounds Condition** (`landscaping`, select_one, required): The condition of the building's landscaping and grounds, including "Excellent", "Good", "Fair", "Poor", "Critical".
* **Exterior Assessment** (`exterior_assessment`, note, required): A note about the building's exterior condition.
* **Interior Assessment** (`interior_assessment`, note, required): A note about the building's interior condition.
* **Flooring Condition** (`flooring_condition`, select_one, required): The condition of the building's flooring, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Walls and Paint Condition** (`walls_paint`, select_one, required): The condition of the building's walls and paint, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Ceiling Condition** (`ceiling_condition`, select_one, required): The condition of the building's ceiling, including "Excellent", "Good", "Fair", "Poor", "Critical".
* **Interior Doors and Frames** (`doors_frames`, select_one, required): The condition of the building's interior doors and frames, including "Excellent", "Good", "Fair", "Poor", "Critical".
* **Electrical System** (`electrical_system`, select_one, required): The condition of the building's electrical system, including "Excellent - Modern", "Good", "Fair", "Poor", or "Critical - Safety hazard".
* **Plumbing System** (`plumbing_system`, select_one, required): The condition of the building's plumbing system, including "Excellent", "Good", "Fair - Minor leaks", "Poor - Multiple issues", or "Critical - Major problems".
* **HVAC System** (`hvac_system`, select_one, required): The condition of the building's HVAC system, including "Excellent - New or recently serviced", "Good", "Fair - Works but needs service", "Poor - Multiple issues", or "Critical - Non-functional".
* **Water Damage or Moisture Issues** (`water_damage`, select_one, required): The condition of the building's water damage or moisture issues, including "None observed", "Minor", "Moderate", "Extensive", or "Critical - Severe throughout".
* **Pest or Rodent Evidence** (`pest_evidence`, select_one, required): The condition of the building's pest or rodent evidence, including "None", "Minor signs", "Moderate evidence", "Significant evidence", or "Active infestation".
* **Mold or Mildew Presence** (`mold_presence`, select_one, required): The condition of the building's mold or mildew presence, including "None observed", "Minor - Limited areas", "Moderate - Several areas", "Extensive - Multiple areas", or "Critical - Extensive throughout".
* **Immediate Repairs Needed** (`immediate_repairs`, text, required): A list of urgent repairs needed, including any relevant details.
* **Estimated Repairs Cost** (`estimated_repairs_cost`, number, optional): An approximate cost for the repairs needed.
* **Short-Term Repairs** (`short_term_repairs`, text, optional): A list of repairs that can be completed within 3-6 months.
* **Long-Term Maintenance** (`long_term_maintenance`, text, optional): A list of maintenance items that require more than 1 year to complete.
* **Overall Building Condition Rating** (`overall_condition`, note, required): A note about the overall building condition.
* **Overall Building Rating** (`overall_rating`, select_one, required): The overall condition of the building, including "Excellent", "Good", "Fair", "Poor", or "Critical".
* **Safety for Occupancy** (`safety_occupancy`, select_one, required): The building's safety status, including "Yes, fully safe", "Yes, with minor improvements", "Conditional safety", "No - Safety concerns", or "No - Unsafe for occupancy".
