# Daily Safety Inspection - Help Guide

## Purpose
This form is designed to support a daily safety inspection process to ensure a safe working environment on construction projects.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the name of the construction project in the **Construction Project** field.
2. Provide the location of the project in the **project_location** field.
3. Select any hazards that were present during the inspection in the **Hazards** field.
4. Indicate if any safety equipment was used during the inspection in the **Safety equipment** field.
5. Select any personal protective equipment (PPE) used during the inspection in the **Personal Protection** field.
6. Report any emergency exits used during the inspection in the **Emergency exit** field.
7. Provide the contact information for emergency services in the **emergency_contact** field.
8. Record the date of the incident report in the **Incident Report** field.
9. Record the time of the incident report in the **Report Time** field.
10. Enter the name of the supervisor or person conducting the inspection in the **Supervisor** field.
11. Sign and date the form in the **Signature** field.
12. Add any additional notes or comments about the inspection in the **Notes** field.
13. Enter the name of the person completing the form in the **Completed by** field.
14. Record the time the form was completed in the **Completed Time** field.
15. Enter the date the form was completed in the **Completed Date** field.

## Field-by-Field Explanation

- **Construction Project** (`construction_project`, text, optional): Enter the name of the construction project being inspected.
- **project_location** (`project_location`, text, optional): Provide the location of the construction project.
- **Hazards** (`hazard_control`, select_multiple, optional): Select any hazards present during the inspection.
  - Examples: Hard hat, Safety glasses, Steel toe boots, Safety vest
- **Safety equipment** (`safety_equipment`, select_one, optional): Select any safety equipment used during the inspection.
  - Examples: Backhoe, Crane, Jackhammer, Level
- **Personal Protection** (`personal_protection`, select_multiple, optional): Select any personal protective equipment (PPE) used during the inspection.
  - Examples: Safety glasses, Hard hat, Steel toe boots, Safety vest
- **Emergency exit** (`emergency_exit`, text, optional): Report any emergency exits used during the inspection.
- **emergency_contact** (`emergency_contact`, select_one, optional): Select the type of emergency contact information to provide.
  - Examples: Emergency phone number, Emergency contact person
- **Incident Report** (`incident_report`, date, optional): Record the date of any incident reported during the inspection.
- **Report Time** (`incident_report_time`, time, optional): Record the time of the incident report.
- **Supervisor** (`supervisor_name`, text, optional): Enter the name of the supervisor or person conducting the inspection.
- **Signature** (`supervisor_signature`, text, optional): Sign and date the form.
- **Notes** (`notes`, note, optional): Add any additional notes or comments about the inspection.
- **Completed by** (`completed_by`, text, optional): Enter the name of the person completing the form.
- **Completed Time** (`completed_time`, time, optional): Record the time the form was completed.
- **Completed Date** (`completed_date`, date, optional): Record the date the form was completed.
