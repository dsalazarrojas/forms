# Checklist For Control Measures - Help Guide

## Purpose
The "Checklist For Control Measures" form is used to collect and document control measures taken by facilities and departments to ensure compliance with regulatory requirements and industry standards. This form helps inspectors evaluate the effectiveness of implemented control measures and identify areas for improvement.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the relevant information from the provided fields.
2. Fill out the required fields with accurate and detailed information.
3. Review and update the form as needed.

## Field-by-Field Explanation

* **Facility / Department Location** (`inspection_facility_location`, text, required): This field is used to indicate the location of the facility or department being inspected.
* **Inspector Full Name** (`inspector_full_name_id`, text, required): Enter the full name of the inspector conducting the audit.
* **Date of Inspection** (`inspection_date_time`, date, required): This field is used to record the date and time the inspection was conducted.
* **Primary Risk Area** (`risk_assessment_category`, select_one, required): Select the primary risk area that this control measure is addressing. Choose from:
	+ Physical Safety
	+ Cybersecurity
	+ Environmental Impact
	+ Financial Control
	+ Regulatory Compliance
* **Description of Control Measure** (`control_measure_description`, text, required): Enter a brief description of the control measure being evaluated. For example, "biometric access, fire suppression system".
* **Implementation Status** (`current_implementation_status`, select_one, required): Indicate the current implementation status of the control measure. Choose from:
	+ Fully Implemented
	+ Partially Implemented
	+ Not Started
	+ Under Review
* **Effectiveness Rating** (`measure_effectiveness_rating`, select_one, required): Rate the effectiveness of the control measure. Choose from:
	+ Highly Effective
	+ Effective
	+ Needs Improvement
	+ Ineffective
* **Specific Deficiencies Identified** (`deficiencies_identified_text`, text, optional): Provide a detailed description of any specific deficiencies or failures found during the inspection.
* **Evidence Observed** (`evidence_of_compliance`, text, optional): Describe any evidence collected during the inspection, such as logs or visual observations.
* **Recommended Remediation Steps** (`recommended_remediation_steps`, text, optional): Suggest remediation steps to address any deficiencies or failures identified.
* **Priority Level** (`remediation_priority_level`, select_one, required): Determine the priority level of the remediation. Choose from:
	+ Low - Routine
	+ Medium - Scheduled
	+ High - Urgent
	+ Critical - Immediate
* **Expected Remediation Completion Date** (`expected_completion_date`, date, optional): Enter the expected completion date for the remediation steps.
* **I Certify** (`inspector_certification_statement`, select_one, required): Confirm that this inspection was conducted in accordance with standard operating procedures (SOP). Choose from:
	+ I Certify
	+ Other
* **Report Final Status** (`report_status_final`, select_one, required): Select the final status of the report. Choose from:
	+ Draft
	+ Final - Approved
	+ Escalated to Management
