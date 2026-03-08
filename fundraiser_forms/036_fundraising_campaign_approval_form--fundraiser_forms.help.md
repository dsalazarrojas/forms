# Fundraising Campaign Approval Form - Help Guide
## Purpose
The Fundraising Campaign Approval Form is used to collect information and approval for a fundraising campaign. This form is crucial in ensuring that all necessary details are captured and approved before a campaign can be launched.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the campaign details page and enter the required information.
2. Select the campaign leader and enter their name.
3. Enter the start and end dates for the campaign.
4. Choose the campaign status (Active or Inactive).
5. Enter the campaign budget.
6. Enter a brief description of the campaign.
7. Determine if a user is assigned to the campaign.
8. Check if the campaign is approved.
9. Enter any comments about the campaign.
10. Select the approved date.
11. Choose the campaign approval status (Active or Inactive).
12. Enter the campaign approval date.
13. Check if the approver is assigned to the campaign.

## Field-by-Field Explanation

* **Campaign Details** (`campaign_details`, text, required: false): Enter a brief description of the campaign.
* **Campaign Leader** (`campaign_leader`, text, required: false): Enter the name of the campaign leader.
* **Start Date** (`start_date`, date, required: false): Enter the start date of the campaign.
* **End Date** (`end_date`, date, required: false): Enter the end date of the campaign.
* **Campaign Status** (`campaign_status`, select_one, required: false): Choose the campaign status (Active or Inactive).
* **Campaign Budget** (`campaign_budget`, number, required: false): Enter the campaign budget.
* **Campaign Location** (`campaign_location`, text, required: false): Enter the location of the campaign.
* **Campaign Description** (`campaign_description`, text, required: false): Enter a brief description of the campaign.
* **Assigned User** (`assigned_user`, select_one, required: false): Determine if a user is assigned to the campaign.
* **Approved By** (`approved_by`, select_one, required: false): Check if the campaign is approved.
* **Comments** (`comments`, text, required: false): Enter any comments about the campaign.
* **Approved Date** (`approved_date`, date, required: false): Enter the approved date of the campaign.
* **Campaign Approval Status** (`campaign_approval_status`, select_one, required: false): Choose the campaign approval status (Active or Inactive).
* **Campaign Approval Date** (`campaign_approval_date`, date, required: false): Enter the campaign approval date.
* **Approver** (`approval_user`, select_one, required: false): Check if the approver is assigned to the campaign.
