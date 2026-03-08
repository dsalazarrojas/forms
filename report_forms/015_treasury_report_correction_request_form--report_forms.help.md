# Treasury Report Correction Request Form - Help Guide
## Purpose
The Treasury Report Correction Request Form is used to request corrections to treasury reports. This form allows you to provide details about the report that needs to be corrected, so that the relevant department can process the correction efficiently and accurately.

## How To Complete This Form

1. Select the type of report that requires correction from the "Report Type" dropdown menu.
2. Provide a brief description of the reason for the correction in the "Reason for correction" field.
3. Enter the date of the original report if it is relevant to the correction.
4. Enter the original report number if it is relevant to the correction.
5. If the report date or number needs to be corrected, enter the new dates in the "Corrected report date" and "Corrected report number" fields.
6. Add any additional comments or information that will help the review process in the "Comments" field.
7. Enter the name and title of the person submitting the correction request in the "Submitted By" and "Submitted To" fields.

## Field-by-Field Explanation

* **Report Type** (`report_type`, `select_one`): Select the type of report that requires correction from the dropdown menu. The options are:
	+ Incorrect Report
	+ Missing Report
	+ Other
* **Reason for correction** (`reason_for_correction`, `text`): Provide a brief description of the reason why the report needs to be corrected.
* **Report date** (`report_date`, `date`): Enter the date of the original report if it is relevant to the correction.
* **Report Number** (`report_number`, `number`): Enter the original report number if it is relevant to the correction.
* **Corrected report date** (`corrected_report_date`, `date`): If the report date needs to be corrected, enter the new date here.
* **Corrected report number** (`corrected_report_number`, `number`): If the report number needs to be corrected, enter the new number here.
* **Comments** (`comments`, `text`): Add any additional comments or information that will help the review process.
* **Submitted By** (`submitted_by`, `text`): Enter your name in this field.
* **Submitted To** (`submitted_to`, `email`): Enter your email address in this field.
