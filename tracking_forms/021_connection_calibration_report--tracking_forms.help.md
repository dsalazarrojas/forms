<thinking>...</thinking>

# Connection Calibration Report - Help Guide
## Purpose
This form is used to record the results of a connection calibration. It captures essential information about the equipment used in the calibration process, including the date, technician involved, and overall result of the calibration. The form also captures details about the calibration procedure, measurement points, and uncertainty values. This report is essential for maintaining accurate records of equipment calibrations and for scheduling future calibrations.

## How To Complete This Form
1. Start by filling in the date of the calibration report. This should be the date when the calibration was performed.
2. Enter the unique report number to reference the specific calibration report.
3. Provide the name and ID of the technician who performed the calibration.
4. Enter the ID of the equipment being calibrated.
5. Enter the name or description of the equipment being calibrated.
6. Choose the type of equipment being calibrated from the options listed.
7. Enter the equipment manufacturer.
8. Enter the equipment model number.
9. Enter the equipment serial number.
10. Specify the location of the equipment.
11. Describe the procedure or standard used for the calibration.
12. Enter the reference document number for the procedure or standard used.
13. List any reference standards used during the calibration.
14. Enter any reference certificate numbers for the standards used.
15. Specify the environmental conditions during the calibration (e.g., temperature, humidity).
16. Enter the reading before adjustment.
17. Indicate whether the reading was within tolerance.
18. Enter the reading after calibration.
19. Indicate whether the reading was within tolerance after adjustment.
20. Enter the number of test points.
21. Enter the calculated measurement uncertainty.
22. Select the overall result of the calibration.
23. Describe any adjustments made.
24. Provide any recommendations for the equipment's use.
25. Enter the date of the next scheduled calibration.
26. Choose the time interval between calibrations (e.g., 3 months, 6 months).
27. Sign the form with your name as the technician who performed the calibration.
28. If applicable, enter the name of the reviewing supervisor and select the review status.

## Field-by-Field Explanation
* **Report Date** (`report_date`, date, required): The date when the calibration was performed.
* **Report Number** (`report_number`, text, required): A unique identifier for the calibration report.
* **Technician Name** (`technician_name`, text, required): The name of the technician who performed the calibration.
* **Technician ID** (`technician_id`, text, required): The ID of the technician who performed the calibration.
* **Equipment ID** (`equipment_id`, text, required): The unique identifier for the equipment being calibrated.
* **Equipment Name** (`equipment_name`, text, required): A description or name of the equipment being calibrated.
* **Equipment Type** (`equipment_type`, select_one, required): The category or type of equipment being calibrated. Choose from the options listed.
* **Manufacturer** (`manufacturer`, text, required): The equipment manufacturer.
* **Model Number** (`model_number`, text, required): The equipment model number.
* **Serial Number** (`serial_number`, text, required): The equipment serial number.
* **Equipment Location** (`location`, text, required): Where the equipment is located.
* **Calibration Procedure** (`calibration_procedure`, text, required): The procedure or standard used for the calibration.
* **Procedure Document Number** (`procedure_document_number`, text, required): The reference document number for the procedure or standard used.
* **Reference Standards** (`reference_standards`, text, required): A list of reference standards used during the calibration.
* **Reference Certificates** (`reference_certificates`, text, required): Calibration certificates for the standards used.
* **Environmental Conditions** (`environmental_conditions`, text, required): Temperature and humidity during the calibration.
* **As-Found Reading** (`as_found_reading`, text, required): The reading before calibration.
* **As-Found Tolerance** (`as_found_tolerance`, select_one, required): Indicate whether the reading was within tolerance.
* **As-Left Reading** (`as_left_reading`, text, required): The reading after calibration.
* **As-Left Tolerance** (`as_left_tolerance`, select_one, required): Indicate whether the reading was within tolerance after calibration.
* **Measurement Points Tested** (`measurement_points`, number, required): The number of test points.
* **Uncertainty Value** (`uncertainty_value`, number, required): The calculated measurement uncertainty.
* **Calibration Result** (`calibration_result`, select_one, required): The overall result of the calibration. Choose from the options listed.
* **Adjustments Made** (`adjustments_made`, text, optional): Describe any adjustments made during the calibration.
* **Recommendations** (`recommendations`, text, optional): Any recommendations for the equipment's use.
* **Next Calibration Due Date** (`next_calibration_date`, date, required): The date when the next calibration is due.
* **Calibration Interval** (`calibration_interval`, select_one, required): The time interval between calibrations. Choose from the options listed.
* **Technician Signature** (`technician_signature`, text, required): The name of the technician who performed the calibration.
* **Reviewer Name** (`reviewer_name`, text, optional): The name of the reviewing supervisor.
* **Review Status** (`review_status`, select_one, required): The status of the review. Choose from the options listed.
