# AC Heat Pump Observation Checklist - Help Guide
## Purpose
This form is designed to assess the performance, safety, and maintenance status of a heat pump. It is intended to be used by auditors or inspectors to identify issues and provide recommendations for improvement.

## How To Complete This Form

1. Fill out the "Inspector/Auditor name" field with your full name.
2. Enter the "Inspection date" and "Inspection time" fields with the date and time of the inspection.
3. Provide the "Location or site inspected" in the "Location" field.
4. For each section, carefully read the questions and select the most accurate response from the options.
5. In the "Safety issues identified" field, select all applicable issues.

## Field-by-Field Explanation

* **Inspector/Auditor name** (`inspector_name`, text, required): Enter your full name for reference.
* **Inspection date** (`inspection_date`, date, required): The date of the inspection.
* **Inspection time** (`inspection_time`, time, optional): The time of the inspection (if available).
* **Location or site inspected** (`location`, text, required): Provide the building name, room number, or address of the location being inspected.
* **Heat pump model number** (`unit_model_number`, text, optional): The model number of the heat pump (if available).
* **Cooling efficiency rating** (`cooling_efficiency_rating`, integer, required): Rate the heat pump's cooling efficiency (1-10).
* **Heating efficiency rating** (`heating_efficiency_rating`, integer, required): Rate the heat pump's heating efficiency (1-10).
* **Refrigerant level status** (`refrigerant_level`, select_one, required): Select the current refrigerant level status: Optimal, Low, High, Unknown.
* **Airflow quality** (`airflow_quality`, select_one, required): Assess the air flow quality: Excellent, Good, Fair, Poor.
* **Filter condition** (`filter_condition`, select_one, required): Rate the filter condition: Clean, Moderately dirty, Very dirty, Needs replacement.
* **Outdoor unit cleanliness** (`outdoor_unit_cleanliness`, select_one, required): Rate the outdoor unit cleanliness: Clean, Slightly dirty, Moderately dirty, Very dirty, Blocked.
* **Electrical connections tightness** (`electrical_connections`, select_one, required): Rate the electrical connections tightness: Secure, Loose, Damaged, Corroded.
* **Signs of refrigerant leaks** (`refrigerant_leaks`, select_multiple, required): Select all applicable signs of refrigerant leaks: Oil stains, Bubbling sound, Reduced cooling, Frost buildup, None observed.
* **Safety score** (`safety_score`, integer, required): Rate the safety score (1-10).
* **Safety issues identified** (`safety_issues_found`, select_multiple, required): Select all applicable safety issues: Electrical hazard, Refrigerant leak, Sharp edges, Inadequate ventilation, Missing guards, No safety issues.
* **Emergency shutoff accessible** (`emergency_shutoff_accessible`, select_one, required): Select whether the emergency shutoff is accessible: True, False, N/A.
* **Recommended maintenance work** (`recommended_work`, text, optional): Describe any recommended maintenance or repairs.
* **Priority level** (`priority_level`, select_one, optional): Select the priority level for recommended work: Immediate, High, Medium, Low, Monitor.
* **Follow-up inspection date** (`follow_up_date`, date, optional): Provide the date for the next inspection (if applicable).
* **Additional comments or notes** (`additional_comments`, text, optional): Provide any other observations or remarks.
