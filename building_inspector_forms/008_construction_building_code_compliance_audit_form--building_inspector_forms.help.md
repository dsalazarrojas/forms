# Construction Building Code Compliance Audit Form - Help Guide
## Purpose
This form is designed to collect information about construction building code compliance.

## How To Complete This Form
1. Select the "Project Type" field to choose between residential single-family, residential multi-family, commercial, industrial, institutional, and mixed-use projects.
2. Select the "Current Project Phase" field to match the actual stage of construction.
3. For each of the code compliance fields, select whether the project meets the code requirements or not.
4. Provide any additional comments or observations in the "Auditor Comments" field.
5. If follow-up inspection is needed, select "Reinspection Required" and provide the scheduled date in the "Reinspection Date" field.
6. Finally, provide the overall compliance status in the "Overall Compliance Status" field.

## Field-by-Field Explanation

* **Audit Date** (`audit_date`, date, required): The date of the compliance audit.
* **Auditor Name** (`auditor_name`, text, required): The name of the person conducting the audit.
* **Auditor Credentials** (`auditor_credentials`, text, required): The license or certification number of the auditor.
* **Project Name** (`project_name`, text, required): The name of the construction project.
* **Project Address** (`project_address`, text, required): The full site address of the project.
* **Building Permit Number** (`permit_number`, text, required): The associated permit number.
* **Construction Type** (`construction_type`, select_one, required): The type of construction project (residential single-family, residential multi-family, commercial, industrial, institutional, or mixed-use).
* **Current Project Phase** (`project_phase`, select_one, required): The stage of construction (foundation, framing, rough-in (MEP), insulation, drywall, finishing, or final inspection).
* **Foundation Code Compliance** (`foundation_compliance`, select_one, required): Whether the foundation meets code requirements (compliant, non-compliant, not applicable, or not yet inspected).
* **Structural Code Compliance** (`structural_compliance`, select_one, required): Whether the structural work meets code requirements (compliant, non-compliant, not applicable, or not yet inspected).
* **Electrical Code Compliance** (`electrical_compliance`, select_one, required): Whether the electrical work meets NEC (compliant, non-compliant, not applicable, or not yet inspected).
* **Plumbing Code Compliance** (`plumbing_compliance`, select_one, required): Whether the plumbing work meets code (compliant, non-compliant, not applicable, or not yet inspected).
* **HVAC Code Compliance** (`hvac_compliance`, select_one, required): Whether the HVAC work meets code (compliant, non-compliant, not applicable, or not yet inspected).
* **Fire Safety Compliance** (`fire_safety_compliance`, select_one, required): Whether the fire safety meets code (compliant, non-compliant, not applicable, or not yet inspected).
* **Accessibility Compliance** (`accessibility_compliance`, select_one, required): Whether the project meets ADA requirements (compliant, non-compliant, not applicable, or not yet inspected).
* **Energy Code Compliance** (`energy_code_compliance`, select_one, required): Whether the project meets energy efficiency codes (compliant, non-compliant, not applicable, or not yet inspected).
* **Code Violations Found** (`violations_found`, number, required): The number of code violations identified.
* **Violation Details** (`violation_details`, text, optional): Describe each code violation found.
* **Corrective Action Required** (`corrective_action_required`, text, optional): What actions must be taken to correct code non-compliance.
* **Reinspection Required** (`respection_required`, select_one, required): Whether a follow-up inspection is needed (true or false).
* **Reinspection Date** (`respection_date`, date, optional): The scheduled date for follow-up inspection (if applicable).
* **Overall Compliance Status** (`overall_status`, select_one, required): The final determination of compliance status (approved, approved with conditions, conditional approval, denied, or pending corrections).
* **Auditor Comments** (`auditor_comments`, text, optional): Additional comments or observations from the auditor.
* **Auditor Signature** (`auditor_signature`, text, required): The full name of the auditor as a signature.
