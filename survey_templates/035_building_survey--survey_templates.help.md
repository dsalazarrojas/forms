<thinking>
This form is intended to gather information about a building's condition, including its physical attributes, systems, and overall state. It seems to be used for a variety of purposes such as appraisal, inspection, or condition assessment. The form collects data on the building's age, size, and structural condition, as well as its electrical, plumbing, and HVAC systems. It also captures information on potential issues like water or pest damage. Users should only complete this form once, and it is essential to provide accurate and thorough answers to the questions to get a reliable assessment of the building.

Please note that this help guide is designed to be used by end-users with no technical or domain-specific expertise, therefore explanations aim to be as clear and concise as possible.

</thinking>

# Building Survey - Help Guide
## Purpose
This form is designed to collect detailed information about a building's condition, which can be used for various purposes such as appraisal, inspection, or condition assessment. The data collected will help in making informed decisions about the building's value, maintenance, or investment potential.

## How To Complete This Form

### Before Starting

* Make sure you have all the necessary information and documents about the building before filling out this form.
* Answer the questions as accurately and thoroughly as possible to ensure the reliability of the assessment.
* If you are unsure about any question, please contact the relevant authority or seek guidance from a professional.

### Completing the Form

1. Fill out the survey date and property address on the first two pages.
2. Select the building type and type of survey from the respective dropdown menus.
3. Enter the name and license number of the surveyor or inspector.
4. Answer questions about the building's age, size, and structural condition, including the overall condition of the roof, exterior, foundation, interior, electrical, plumbing, and HVAC systems.
5. Check the presence of any water or pest damage and estimate the extent of the issue.
6. List any major deficiencies found during the survey.
7. Estimate any repairs needed and the total repair cost.
8. Finally, provide a general assessment of the building's overall condition.

## Field-by-Field Explanation

* **Survey Date** (`survey_date`, date, required): Enter the date of the survey, including the month, day, and year.
* **Property Address** (`property_address`, text, required): Enter the full address of the building, including the street number and name.
* **Property Type** (`property_type`, select_one, required): Select the type of building from the options provided:
	+ Single Family Home
	+ Multi-Family Residential
	+ Commercial
	+ Industrial
	+ Mixed Use
	+ Land
	+ Other
* **Type of Survey** (`survey_type`, select_one, required): Select the purpose of the survey from the options provided:
	+ Purchase Inspection
	+ Appraisal
	+ Condition Assessment
	+ Loan Requirement
	+ Insurance
	+ Investment Analysis
	+ Periodic Review
* **Surveyor or Inspector Name** (`surveyor_name`, text, required): Enter the name of the person conducting the survey.
* **License or Certification Number** (`surveyor_license`, text, optional): Enter the professional license or certification number of the surveyor or inspector.
* **Year Built** (`building_age`, number, optional): Enter the year the building was constructed.
* **Square Footage** (`square_footage`, number, optional): Enter the total square footage of the building.
* **Number of Floors** (`number_of_floors`, number, optional): Enter the number of floors in the building.
* **Number of Units** (`number_of_units`, number, optional): Enter the number of units in multi-unit properties.
* **Lot Size** (`lot_size`, text, optional): Enter the size of the land associated with the building.
* **Roof Type** (`roof_type`, text, optional): Enter the material and style of the roof.
* **Roof Condition** (`roof_condition`, select_one, required): Select the current state of the roof from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Needs Replacement
* **Exterior Condition** (`exterior_condition`, select_one, required): Select the overall exterior assessment from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Critical
* **Foundation Condition** (`foundation_condition`, select_one, required): Select the structural foundation state from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Critical
* **Interior Condition** (`interior_condition`, select_one, required): Select the overall interior state from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Critical
* **Electrical System Condition** (`electrical_system`, select_one, required): Select the state of the electrical system from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Needs Update
* **Plumbing System Condition** (`plumbing_system`, select_one, required): Select the state of the plumbing system from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Needs Repair
* **HVAC System Condition** (`hvac_system`, select_one, required): Select the state of the HVAC system from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Needs Replacement
* **Evidence of Water Damage** (`water_damage`, select_one, required): Select the presence of water damage from the options provided:
	+ None
	+ Minor
	+ Moderate
	+ Extensive
* **Evidence of Pest Damage** (`pest_damage`, select_one, required): Select the presence of pest damage from the options provided:
	+ None
	+ Minor
	+ Moderate
	+ Extensive
* **Major Deficiencies Found** (`major_deficiencies`, text, optional): List any significant issues found during the survey.
* **Estimated Repairs Needed** (`repairs_needed`, text, optional): Estimate any repairs that are required.
* **Estimated Repair Cost** (`estimated_repair_cost`, number, optional): Enter the estimated total repair cost.
* **Overall Building Condition** (`overall_rating`, select_one, required): Select the general assessment of the building's condition from the options provided:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
