<thinking>
This form is designed to collect data on airtightness quality assurance surveys. The form's purpose is to ensure that the surveyor/inspector is able to provide a comprehensive report on the airtightness of a building or facility, providing detailed information on the surveyor's name, the inspection date, and the project reference number. The surveyor will also report on the testing context, including the type of testing method used, the product being tested, and any primary leakage points identified. The form will also capture the achieved and target air exchange rates, the pass/fail status, and any remediation details if required. Additionally, the surveyor's satisfaction with the sealing work will be noted, as well as any additional technical notes and the requirement for re-inspection. This form ensures that the surveyor/inspector can provide a detailed and comprehensive report on the airtightness of a building or facility.

To avoid duplication, this form should only be completed for new or revised surveys. If an updated survey is required, please make sure to complete this form with new or revised information.</thinking>

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
