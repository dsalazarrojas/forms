# Atmospheric Corrosion Control Inspection Form - Help Guide

## Purpose
The purpose of this form is to collect information about the inspection of equipment in atmospheric environments. It is used to assess the condition of the equipment and identify potential corrosion issues that need to be addressed.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the relevant information about the inspection and equipment details.
2. Enter the inspection date and time.
3. Provide the name and ID of the inspector.
4. Identify the location of the facility and building/area where the equipment is located.
5. Specify the type and ID of the equipment being inspected.
6. Report any observed corrosion conditions and assess the severity level.
7. Provide the condition of the protective coating.
8. Determine if immediate action is required.

## Field-by-Field Explanation

* **-- Inspection Details --** (`inspection_details`, `note`, required: false): This section is for any additional comments or notes about the inspection.
* **Inspection Date** (`inspection_date`, `date`, required: true): Enter the date when the inspection was conducted.
* **Inspection Time** (`inspection_time`, `time`, required: true): Enter the time when the inspection was conducted.
* **Inspector Name** (`inspector_name`, `text`, required: true): Enter the name of the person conducting the inspection.
* **Inspector ID** (`inspector_id`, `text`, required: false): Enter the ID or employee number of the inspector.
* **-- Equipment Location --** (`equipment_location`, `note`, required: false): This section is for any additional comments or notes about the equipment location.
* **Facility Name** (`facility_name`, `text`, required: true): Enter the name of the facility where the equipment is located.
* **Facility Address** (`facility_address`, `text`, required: true): Enter the address of the facility where the equipment is located.
* **Building/Area** (`building_area`, `text`, required: true): Enter the specific building or area within the facility where the equipment is located.
* **-- Equipment Identification --** (`equipment_identification`, `note`, required: false): This section is for any additional comments or notes about the equipment identification.
* **Equipment Type** (`equipment_type`, `select_one`, required: true): Select the type of equipment being inspected from the options provided.
* **Equipment ID/Serial Number** (`equipment_id_number`, `text`, required: true): Enter the unique identifier or serial number of the equipment.
* **Equipment Age/Installation Date** (`equipment_age`, `date`, required: false): Enter the date when the equipment was installed.
* **-- Environmental Conditions --** (`environment_conditions`, `note`, required: false): This section is for any additional comments or notes about the environmental conditions.
* **Temperature** (`temperature`, `number`, required: false): Enter the current temperature in Fahrenheit or Celsius.
* **Humidity Level** (`humidity_level`, `number`, required: false): Enter the percentage relative humidity.
* **Atmospheric Conditions** (`atmospheric_conditions`, `select_one`, required: true): Select the current atmospheric conditions from the options provided.
* **-- Corrosion Assessment --** (`corrosion_assessment`, `note`, required: false): This section is for any additional comments or notes about the corrosion assessment.
* **Visible Corrosion Present?** (`visible_corrosion`, `select_one`, required: true): Select 'Yes' if corrosion is visible.
* **Corrosion Severity Level** (`corrosion_severity`, `select_one`, required: true): Select the level of corrosion severity from the options provided.
* **Corrosion Location** (`corrosion_location`, `text`, required: false): Enter the location on the equipment where corrosion is observed.
* **Protective Coating Condition** (`coating_condition`, `select_one`, required: true): Select the condition of the protective coating from the options provided.
* **-- Maintenance Recommendations --** (`maintenance_recommendations`, `note`, required: false): This section is for any additional comments or notes about maintenance recommendations.
* **Immediate Action Required?** (`immediate_action_required`, `select_one`, required: true): Select 'Yes' if immediate action is required.
* **Recommended Maintenance Actions** (`maintenance_recommendations_text`, `text`, required: false): Enter the recommended maintenance or repairs.

## Tips
* Make sure to provide accurate and clear information about the inspection and equipment details.
* Check the relevant fields for any required information.
* Review the form carefully before submitting it.

Note: This help guide is a general guide and may not cover all possible scenarios. If you have any further questions, please contact your supervisor or the inspection team.
