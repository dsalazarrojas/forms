# Tools And Vehicle Usage Agreement - Help Guide
## Purpose
The Tools And Vehicle Usage Agreement form is a tool for tracking and managing vehicle usage within an organization. It captures details about the vehicles used, who has approved their usage, and the dates and times of use.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the vehicles used for the agreement (page 2).
2. Choose the vehicle supervisor who will approve the usage (page 3).
3. Select any additional approvers who need to approve the usage (pages 3-4).
4. Enter the date the vehicle was taken out (page 5).
5. Enter the date the vehicle was returned (page 6).
6. Enter the time the vehicle was taken out (page 7).
7. Enter the time the vehicle was returned (page 8).
8. Add any comments about the usage (page 11).

## Field-by-Field Explanation

* **vehicle_vehicles_used** (`vehicle_vehicles_used`, select_multiple, required: false): Select all the vehicles used for this agreement. Use the multiple-select option to choose multiple vehicles.
* **Vehicle Usage Approval 1** (`approval_approvals_1`, select_one, required: false): Select the Vehicle Supervisor who will approve this agreement.
* **Vehicle Usage Approvals 2** (`approval_approvals_2`, select_multiple, required: false): Select any additional approvers for this agreement. Use the multiple-select option to choose multiple approvers.
* **Vehicle Usage Approvals 3** (`approval_approvals_3`, select_one, required: false): Select any additional approvers for this agreement.
* **Vehicle Usage Approvals 4** (`approval_approvals_4`, select_multiple, required: false): Select any additional approvers for this agreement.
* **Date Out** (`date_out`, date, required: false): Enter the date you took the vehicle out. This date should be in the format `YYYY-MM-DD`.
* **Date In** (`date_in`, date, required: false): Enter the date you returned the vehicle. This date should be in the format `YYYY-MM-DD`.
* **Time Out** (`time_out`, time, required: false): Enter the time you took the vehicle out. This time should be in the format `HH:MM`.
* **Time In** (`time_in`, time, required: false): Enter the time you returned the vehicle. This time should be in the format `HH:MM`.
* **Comments** (`comments`, text, required: false): Add any additional comments about the usage of the vehicle.
