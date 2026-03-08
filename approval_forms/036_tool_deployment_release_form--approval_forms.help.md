# Tool Deployment Release Form - Help Guide
## Purpose
This form is used to gather information about tool deployments, allowing teams to coordinate and track the release process.

## How To Complete This Form
1. Select the correct team members and environment from the dropdown menus.
2. Enter the tool version and release notes as necessary.
3. Choose the approval status and risk level for the release.
4. Enter the dates and times for review and approval.
5. Add any comments or risk notes as needed.
6. Select the user assigned to the release.
7. Submit the form once complete.

## Field-by-Field Explanation
* **Release Information** (`1`, `release_form`, text): Enter a brief description of the release, including the release date and version.
* **Team Members** (`2`, `team_members`, select_one): Choose the team members involved in the release from the dropdown menu.
	+ Dev Team: Development team members.
	+ QA Team: Quality Assurance team members.
	+ Deployment Team: Team members responsible for deploying the tool.
	+ Other: Select this option if none of the above teams are relevant.
* **Environment** (`3`, `environment`, select_one): Choose the environment where the tool will be deployed from the dropdown menu.
	+ Development: Development environment.
	+ QA: Quality Assurance environment.
	+ Staging: Staging environment.
	+ Production: Production environment.
* **Tool Version** (`4`, `tool_version`, text): Enter the version of the tool being released.
* **Release Notes** (`5`, `release_notes`, note): Enter a detailed description of the release, including changes and updates.
* **Approval Status** (`6`, `approval_status`, select_one): Choose the approval status of the release from the dropdown menu.
	+ Approved: Approved for release.
	+ Denied: Not approved for release.
	+ Pending: Approval pending.
* **Risk Notes** (`7`, `risk_notes`, note): Enter any risk notes or comments about the release.
* **Risk Level** (`8`, `risk_level`, select_multiple): Choose the risk level of the release from the dropdown menu.
	+ Critical: Critical risk.
	+ Major: Major risk.
	+ Minor: Minor risk.
* **Review By** (`9`, `review_by`, date): Enter the date and time when the release will be reviewed.
* **Approval By** (`10`, `approval_by`, time): Enter the date and time when the release will be approved.
* **Comments** (`11`, `comments`, text): Enter any additional comments about the release.
* **Assigned User** (`12`, `assigned_user`, text): Enter the user responsible for the release.
