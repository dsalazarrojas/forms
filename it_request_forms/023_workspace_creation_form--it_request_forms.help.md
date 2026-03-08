# Workspace Creation Form - Help Guide
## Purpose
The Workspace Creation Form is used to create a new workspace for team collaboration. It gathers information about the workspace name, owner, team members, access preferences, workspace type, team leads, and description.

## How To Complete This Form
1. Enter a unique name for your new workspace.
2. Choose whether the workspace is owned by 'Yes' or 'No'.
3. Select whether team members can be invited (yes/no).
4. Enter email addresses of team members to invite (comma-separated).
5. Select access preferences for team members (yes/no).
6. Choose the type of workspace (yes/no).
7. Select team leads (yes/no).
8. Provide a description of your new workspace.
9. Click "Submit" to create the workspace.

## Field-by-Field Explanation
* **Workspace Name** (`title`, `text`, required): Enter the name of your new workspace. This name should be unique and descriptive, helping identify your workspace within the system.
* **Workspace Owner** (`workspace_owner`, `select_multiple`, required): Select 'Yes' if you want to be the owner of this new workspace.
* **Team Members** (`team_members`, `select_one`, required): Choose whether team members can be invited to the workspace.
* **Team Members Invite Emails** (`invite_email`, `email`, required): Enter email addresses of team members to invite to the workspace. Comma-separated list.
* **Access Preferences** (`access_preferences`, `select_multiple`, required): Select access preferences for team members, such as yes/no.
* **Workspace Type** (`workspace_type`, `select_one`, required): Choose the type of workspace you want to create.
* **Team Leads** (`team_leads`, `select_multiple`, required): Select team leads for the workspace.
* **Description** (`description`, `text`, required): Provide a description of your new workspace.
* **Submit** (`submit`, `text`, required): Click "Submit" to create the new workspace.
