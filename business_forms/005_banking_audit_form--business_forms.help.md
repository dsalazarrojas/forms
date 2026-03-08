# Banking Audit Form - Help Guide
## Purpose
The Banking Audit Form is designed to collect information about banking audits. It is used to record the details of the audit process, including the audit identifier, department or branch audited, auditor's name, audit period start and end dates, scope of the audit, risk rating, key observations, and corrective action plan.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the audit identifier, which is a unique reference number for the audit.
2.  Select the department or branch being audited.
3.  Enter the name of the lead auditor conducting the audit.
4.  Choose the start and end dates of the audit period.
5.  Provide a brief description of the audit scope.
6.  Select the overall risk rating for the audit (Low, Medium, High).
7.  Enter any key observations and evidence references related to the audit.
8.  (Optional) Provide a corrective action plan, including the actions, owners, and target dates.
9.  Enter the name and date of the approving manager who signed off the audit.

## Field-by-Field Explanation
* **Audit Identifier** (`audit_id`, text, required): A unique reference number for the audit.
* **Department or Branch** (`department_audited`, text, required): The unit being audited, such as a department or branch.
* **Auditor Name** (`auditor_name`, text, required): The name of the lead auditor conducting the audit.
* **Audit Period Start Date** (`audit_period_start`, date, required): The start date of the audit period.
* **Audit Period End Date** (`audit_period_end`, date, required): The end date of the audit period.
* **Scope of Audit** (`scope_of_audit`, note, required): A brief description of the audit scope.
* **Risk Rating** (`risk_rating`, select, required): The overall risk assessment for the audit, with options Low, Medium, High.
*   *Key Observations* (`observations`, text, required): Detailed observations and evidence references.
*  **Corrective Action Plan** (`corrective_action_plan`, text, optional): Actions, owners, and target dates for addressing any issues.
*   **Audit Sign Off Name** (`sign_off_name`, text, required): The name of the approving manager who signed off the audit.
*   **Audit Sign Off Date** (`sign_off_date`, date, required): The date the audit was approved.

## Tips
* Make sure to enter accurate and up-to-date information in all fields.
* The risk rating and observations should be based on your assessment of the audit results.
* The corrective action plan should be specific, measurable, and achievable.
* The sign-off date and name should be entered after the audit has been completed and approved.
