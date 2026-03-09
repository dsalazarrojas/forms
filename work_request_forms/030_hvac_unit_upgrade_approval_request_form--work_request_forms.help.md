# hvac_unit_upgrade_approval_request_form - Help Guide
## Purpose
The "hvac_unit_upgrade_approval_request_form" is designed to collect information and facilitate the upgrade request process for HVAC units. This form is used to gather essential details from property managers, facility teams, and owners to ensure a smooth and efficient upgrade process.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the appropriate "hgvu_id" from the dropdown menu to identify the specific HVAC unit in question.
2. Enter the location of the HVAC unit in the designated field.
3. Choose the type of upgrade requested (Replace, Upgrade, or Repair) from the dropdown menu.
4. Add a description of the upgrade request if necessary.
5. Attach any relevant documents or notes related to the upgrade request.
6. Specify who submitted the upgrade request (Property Manager, Facility Team, or Owner).
7. Select the review status of the upgrade request (Approved, Rejected, or Pending).
8. Add any comments or feedback related to the upgrade request.
9. If approved, select the date of approval.
10. If approved, select who approved the upgrade request (Property Manager, Facility Team, or Owner).

## Field-by-Field Explanation

* **Upgrade Request** (`upgrade_request`, `text`, required: false): This field is used to enter a brief description of the upgrade request.
* **hgvu_id** (`hgvu_id`, `select_one`, required: false): Select the specific HVAC unit's ID number from the dropdown menu.
* **location** (`location`, `text`, required: true): Enter the location of the HVAC unit in question.
* **Upgrade Type** (`upgrade_type`, `select_one`, required: false): Choose the type of upgrade requested (Replace, Upgrade, or Repair).
* **Description** (`description`, `text`, required: false): Add a detailed description of the upgrade request if necessary.
* **Documents** (`documents`, `text`, required: false): Upload or attach any relevant documents or notes related to the upgrade request.
* **Submitted By** (`submitted_by`, `select_one`, required: false): Specify who submitted the upgrade request (Property Manager, Facility Team, or Owner).
* **Review Status** (`review_status`, `select_one`, required: false): Select the current status of the upgrade request (Approved, Rejected, or Pending).
* **Comments** (`comments`, `note`, required: false): Add any comments or feedback related to the upgrade request.
* **Approval Date** (`approval_date`, `date`, required: false): If approved, select the date of approval.
* **Approved By** (`approved_by`, `select_one`, required: false): If approved, select who approved the upgrade request (Property Manager, Facility Team, or Owner).
