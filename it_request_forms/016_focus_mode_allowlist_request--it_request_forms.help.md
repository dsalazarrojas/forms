<thinking>
The form is used to request that a team member be added to the focus mode allowlist, which is a list of team members that are allowed to access certain sensitive features or resources within the application. This is typically done for security reasons, such as allowing a team member to access certain pages or features that are not available to other team members. The form ensures that the team member's manager has approved their addition to the allowlist and provides additional context for the request. To prevent duplicate requests, the form is only accessible to team members who are already on the allowlist or managers who have already approved a team member for the allowlist. 
</thinking>

# Focus Mode Allowlist Request - Help Guide
## Purpose
The Focus Mode Allowlist Request form is used to request that a team member be added to the focus mode allowlist, allowing them access to sensitive features or resources.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the team member you wish to add to the allowlist.
2. Provide a reason for their inclusion on the allowlist.
3. Check if their manager has approved their addition. If they have, select "Yes" from the dropdown menu.
4. If their manager has not approved them, you can also ask for their approval.
5. Specify if the manager's approval is active or inactive.
6. Confirm if the team member's access to sensitive features will be frequent or infrequent.
7. Select if additional IT approval is required.
8. Provide any additional information about the request.
9. List any specific sites or apps that the team member will be accessing.

## Field-by-Field Explanation
* **Team member** (`team_member`, `text`, required): Enter the name of the team member you wish to add to the allowlist.
* **Reason for Allowlist** (`reason_for_allowlist`, `text`, required): Provide a clear explanation for why this team member needs to be on the allowlist.
* **Manager Approval** (`approval_manager`, `select_one`, optional): If the manager has already approved the team member, select "Yes" from the dropdown menu. If not, you can select "No" and provide a reason for why the manager's approval is not yet received.
* **Approval Status** (`approval_status`, `select_one`, optional): Select whether the manager's approval is currently active or inactive.
* **Frequency of Approval** (`frequency_of_approval`, `select_multiple`, optional): Confirm if the team member's access to sensitive features will be frequent (e.g., regular access) or infrequent (e.g., occasional access).
* **Reason for Block** (`reason_for_block`, `text`, required): Provide a reason why the team member is being blocked from access to sensitive features.
* **IT Approval** (`it_decision_approver`, `select_one`, optional): Select "Yes" if additional IT approval is required for this team member's access. Select "No" otherwise.
* **Site or App** (`site_or_app`, `select_multiple`, optional): List any specific sites or apps that the team member will be accessing.
* **Additional Information** (`additional_information`, `text`, required): Provide any additional context or details about the request.
* **Sites or Apps** (`site_or_app_list`, `select_multiple`, optional): List any specific sites or apps that the team member will be accessing.
