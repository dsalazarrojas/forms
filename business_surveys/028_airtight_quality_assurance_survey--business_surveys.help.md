# Airtight Quality Assurance Survey - Help Guide
## Purpose
The Airtight Quality Assurance Survey is designed to collect data on the airtightness of a building or facility, ensuring that the surveyor/inspector can provide a comprehensive report on the testing context, methods, and results.

## How To Complete This Form
1. Fill in the Surveyor/Inspector Name, Inspection Date, and Project/Batch Reference Number.
2. Select the Testing Method used during the survey.
3. Enter the Test Location/Facility being inspected.
4. Choose the Product/Area being Tested.
5. Report on the Achieved Air Exchange Rate (ACH) and Target/Required Air Exchange Rate.
6. Select the Pass/Fail Status of the survey.
7. Identify the Primary Leakage Points, if any.
8. Provide Remediation Plan if the survey failed.
9. Enter your satisfaction level as a surveyor, on a scale of 1 (Very Dissatisfied) to 5 (Very Satisfied).
10. Add any Additional Technical Notes.
11. Indicate if a re-inspection is required.

## Field-by-Field Explanation
* **Surveyor/Inspector Name** (`surveyor_name`, text, required): Enter your name as the surveyor/inspector who performed the survey.
* **Inspection Date** (`inspection_date`, date, required): Enter the date of the inspection.
* **Project/Batch Reference Number** (`project_reference`, text, required): Enter the project reference number for the inspected facility.
* **Testing Context** (`section_test_info`, note, required): A brief description of the testing context and any relevant details.
* **Test Location/Facility** (`test_location`, text, required): Enter the location or facility being inspected.
* **Product/Area being Tested** (`product_type`, text, required): Enter the product or area being tested, e.g. windows, doors, etc.
* **Achieved Air Exchange Rate (ACH)** (`achieved_air_exchange_rate`, number, required): Enter the achieved air exchange rate from the testing results.
* **Target/Required Air Exchange Rate** (`target_air_exchange_rate`, number, required): Enter the target or required air exchange rate.
* **Pass/Fail Status** (`pass_fail_status`, select_one, required): Select the pass/fail status of the survey, e.g. PASS, FAIL, etc.
* **Primary Leakage Points Identified** (`primary_leakage_points`, select_multiple, required): Select all primary leakage points identified during the inspection.
* **Remediation Plan (if failed)** (`remediation_details`, text, required): Enter remediation plan if the survey failed.
* **Inspector Satisfaction with Sealing Work** (`inspector_satisfaction`, number, required): Enter your satisfaction level as a surveyor, on a scale of 1 (Very Dissatisfied) to 5 (Very Satisfied).
* **Additional Technical Notes** (`additional_technical_notes`, text, optional): Enter any additional technical notes about the inspection.
* **Re-inspection Required?** (`next_inspection_required`, select_one, required): Select if a re-inspection is required.
