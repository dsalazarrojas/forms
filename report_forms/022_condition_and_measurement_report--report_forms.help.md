<thinking> 
  This form is designed for inspectors to submit reports about the condition and measurements of physical assets (e.g., equipment, properties, or other physical objects). 
  The purpose of this form is to gather information about the asset's condition, measurement, and any recommended actions for maintenance or repair. 
  This form should only be used for assets that have not been inspected before, or if the previous inspection report is outdated or missing. 
  Ensure that the inspector fills out the form accurately and completely. 
  </thinking>

# Condition And Measurement Report - Help Guide
## Purpose
The Condition and Measurement Report form is used to document the condition and measurement of physical assets, such as equipment, properties, or other physical objects. Inspectors use this form to provide information about the asset's condition, measurement, and any recommended actions for maintenance or repair.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Select "Inspection" as the type of measurement recorded in the "Measurement type" field.
3. Enter the asset's unique identifier in the "Asset identifier" field.
4. Enter the date of the inspection in the "Inspection date" field.
5. Provide the location where the asset is located.
6. Select the type of measurement recorded (e.g., Length, Width, Height, Weight, or Temperature).
7. Enter the measured value of the asset.
8. If applicable, enter the allowed tolerance for the measurement.
9. Assess the overall condition of the asset.
10. Suggest any recommended actions for maintenance or repair.
11. Optionally, list or upload photo references.

## Field-by-Field Explanation

* **Inspector name** (`inspector_name`, text, required): Enter your name and contact information.
* **Asset identifier** (`asset_id`, text, required): Enter the unique identifier assigned to the asset.
* **Inspection date** (`inspection_date`, date, required): Enter the date the inspection was performed.
* **Location of asset** (`location`, text, required): Specify the building, floor, or area where the asset is located.
* **Measurement type** (`measurement_type`, select_one, required): Select the type of measurement recorded (e.g., Length, Width, Height, Weight, or Temperature).
* **Measured value** (`measured_value`, number, required): Enter the numeric measurement of the asset.
* **Allowed tolerance** (`allowed_tolerance`, number, optional): If applicable, enter the acceptable range for the measurement.
* **Condition status** (`condition_status`, select_one, required): Assess the overall condition of the asset (Good, Fair, Poor, or Requires repair).
* **Photo references** (`photos_reference`, text, optional): Optionally, list or upload photo references for the asset.
* **Recommended actions** (`recommended_actions`, text, optional): Suggest any recommended actions for maintenance or repair.
