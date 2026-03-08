# haccp_plan_form - Help Guide
## Purpose
The HACCP plan form is used to create and manage risk assessment and control measures for food safety in food processing or handling.

## How To Complete This Form
1. **Section 1**: Provide a brief description of the section that will contain the hazard analysis and critical control points.
2. Fill out the **hazard_analysis** field by selecting one of the options to indicate the type of hazard present.
3. For each selected hazard, choose the corresponding **haccp_critical_control_point** from the options.
4. In the **corrective_action** field, provide the action taken to mitigate the identified hazards.
5. In the **preventive_measures** field, list any measures taken to prevent recurrence of the hazards.
6. Fill in the **date_last_reviewed** field with the date when the plan was last reviewed.
7. Provide contact information for the **assigned_inspector** and **assigned_inspector_email**.
8. If necessary, add any **comments** related to the plan.
9. Fill out the **email** and **phone** fields with the contact information of the user filling out the form.
10. In the **assigned_inspector_email** field, confirm the email address of the assigned inspector.

## Field-by-Field Explanation

* **form_section_1** (`form_section_1`, text, required/optional): A brief description of the section that will contain the hazard analysis and critical control points.
* **hazard_analysis** (`hazard_analysis`, select_one, required/optional): Select one of the options to indicate the type of hazard present.
* **haccp_critical_control_point** (`haccp_critical_control_point`, select_multiple, required/optional): For each selected hazard, choose the corresponding critical control point from the options.
* **corrective_action** (`corrective_action`, text, required/optional): Provide the action taken to mitigate the identified hazards.
* **preventive_measures** (`preventive_measures`, text, required/optional): List any measures taken to prevent recurrence of the hazards.
* **date_last_reviewed** (`date_last_reviewed`, date, required/optional): Fill in the date when the plan was last reviewed.
* **assigned_inspector** (`assigned_inspector`, text, required/optional): Provide contact information for the assigned inspector.
* **assigned_tool** (`assigned_tool`, text, required/optional): Not applicable.
* **comments** (`comments`, note, required/optional): Add any comments related to the plan.
* **email** (`email`, email, required/optional): Fill out with the contact email of the user filling out the form.
* **phone** (`phone`, text, required/optional): Fill out with the contact phone number of the user filling out the form.
* **assigned_inspector_email** (`assigned_inspector_email`, email, required/optional): Confirm the email address of the assigned inspector.
