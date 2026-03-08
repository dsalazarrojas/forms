# Agent Removal Request Form - Help Guide
## Purpose
The "Agent Removal Request Form" is designed to collect information required for the removal of agents from the organization. This form is used to gather details about the agent to be removed, including their name, reason for removal, and assets assigned to them. The information collected through this form helps HR representatives and managers to handle the removal process efficiently and effectively.

## How To Complete This Form
To complete this form accurately, please follow these steps:

1. Fill in the **Agent name** field with the name of the agent to be removed.
2. Provide the **Employee ID** if applicable.
3. Enter the **Reason for removal**, justifying the agent's departure.
4. Specify the **Effective date of removal**, when the agent will be removed.
5. List the **Assets to recover**, if any company assets are assigned to the agent.
6. Enter the **HR contact person** name, responsible for handling the request.
7. Select the current **Approval status** of the request (Pending, Approved, or Denied).
8. Optionally, enter the **Approver name**, if applicable.
9. Add any **Notes**, if any additional information is needed.

## Field-by-Field Explanation
* **-- Removal Request --** (page: `removal_header`): This note provides an introduction to the form and a clear description of its purpose.
* **Agent name** (page: `agent_name`, type: `text`, required: `true`): Enter the name of the agent to be removed from the organization.
* **Employee ID** (page: `employee_id`, type: `text`, required: `false`): If applicable, provide the internal identifier of the employee.
* **Reason for removal** (page: `reason_for_removal`, type: `text`, required: `true`): Enter the justification for removing the agent from the organization.
* **Effective date of removal** (page: `effective_date`, type: `date`, required: `true`): Specify the date when the removal should take effect.
* **Assets to recover** (page: `assets_to_recover`, type: `text`, required: `false`): List any company assets assigned to the agent to be recovered.
* **HR contact person** (page: `hr_contact`, type: `text`, required: `true`): Enter the name of the HR representative handling the request.
* **Approval status** (page: `approval_status`, type: `select_one`, required: `true`): Select the current status of the approval (Pending, Approved, or Denied).
* **Approver name** (page: `approver_name`, type: `text`, required: `false`): If applicable, enter the name of the manager who approved or denied the request.
* **Notes** (page: `notes`, type: `text`, required: `false`): Add any additional HR notes if needed.
