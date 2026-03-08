<thinking>
This form is designed to request a rebalance of an assembly line in a manufacturing context. This form is intended for use by production planners, engineers, and other personnel involved in the assembly line rebalance process. Before filling out this form, please ensure that you are not duplicating an existing request, and that a rebalance is truly necessary. To do so, check the current throughput and cycle times for each station and verify that the current cycle times are significantly higher than the target cycle times.
</thinking>

# Assembly Line Rebalance Request Form - Help Guide

## Purpose
The Assembly Line Rebalance Request Form is used to gather information about proposed changes to the assembly line in order to rebalance it. This form will be used to assess the impact of these changes on production and make recommendations for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and job title in the "Requester Name" and "Requester Role" fields.
2. Select the department that the rebalance is for in the "Department" field.
3. Enter the date of the rebalance request in the "Request Date" field.
4. Enter the assembly line ID in the "Assembly Line ID" field.
5. Enter the product affected by the rebalance in the "Product Affected" field.
6. Enter the current cycle time in seconds for each station in the "Current Cycle Time in Seconds" field.
7. Enter the target cycle time in seconds for each station in the "Target Cycle Time in Seconds" field.
8. Enter the current throughput per hour for each station in the "Current Throughput" field.
9. Enter the target throughput per hour for each station in the "Target Throughput" field.
10. Select the reason for the rebalance request in the "Reason for Rebalance Request" field.
11. Enter the bottleneck station number in the "Bottleneck Station Number" field (if applicable).
12. Describe the bottleneck issue in the "Bottleneck Description" field (if applicable).
13. Enter the number of stations affected by the rebalance in the "Number of Stations Affected" field.
14. Enter the estimated downtime hours for the rebalance in the "Estimated Downtime Hours" field.
15. Enter a summary of the proposed changes in the "Proposed Changes Summary" field.
16. Select the resources needed for the rebalance in the "Resources Needed" field.
17. Enter the estimated cost of the rebalance in the "Estimated Cost in Dollars" field (if applicable).
18. Enter the expected return on investment for the rebalance in the "Expected Return on Investment" field (if applicable).
19. Assess the risk of the proposed changes in the "Risk Assessment" field.
20. Evaluate the impact on worker safety in the "Safety Impact" field.
21. Evaluate the impact on product quality in the "Quality Impact" field.
22. Select the proposed implementation date for the rebalance in the "Proposed Implementation Date" field.
23. Enter the current approval status of the rebalance in the "Current Approval Status" field.
24. Enter any additional comments or information in the "Additional Comments" field.
25. Sign the form with your name in the "Requester Signature" field.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, text, required): Enter your full name as the person requesting the rebalance.
* **Requester Role** (`requester_role`, text, required): Enter your job title or position.
* **Department** (`department`, select_one, required): Select the department related to the rebalance request.
* **Request Date** (`request_date`, date, required): Enter the date of the rebalance request.
* **Assembly Line ID** (`assembly_line_id`, text, required): Enter the line identifier.
* **Product Affected** (`product_affected`, text, required): Enter the product name or code affected by the rebalance.
* **Current Cycle Time in Seconds** (`current_cycle_time`, number, required): Enter the current cycle time in seconds for each station.
* **Target Cycle Time in Seconds** (`target_cycle_time`, number, required): Enter the target cycle time in seconds for each station.
* **Current Throughput Per Hour** (`current_throughput`, number, required): Enter the current throughput per hour for each station.
* **Target Throughput Per Hour** (`target_throughput`, number, required): Enter the target throughput per hour for each station.
* **Reason for Rebalance Request** (`rebalance_reason`, select_one, required): Select the reason for the rebalance request.
* **Bottleneck Station Number** (`bottleneck_station`, number, not required): Enter the bottleneck station number (if applicable).
* **Bottleneck Description** (`bottleneck_description`, text, not required): Describe the bottleneck issue (if applicable).
* **Number of Stations Affected** (`stations_affected`, number, required): Enter the number of stations affected by the rebalance.
* **Estimated Downtime Hours** (`estimated_downtime_hours`, number, required): Enter the estimated downtime hours for the rebalance.
* **Proposed Changes Summary** (`proposed_changes`, text, required): Enter a summary of the proposed changes.
* **Resources Needed** (`resources_needed`, select_multiple, required): Select the resources needed for the rebalance.
* **Estimated Cost in Dollars** (`cost_estimate`, number, not required): Enter the estimated cost of the rebalance (if applicable).
* **Expected Return on Investment** (`expected_roi`, text, not required): Enter the expected return on investment (if applicable).
* **Risk Assessment** (`risk_assessment`, select_one, required): Assess the risk of the proposed changes.
* **Safety Impact** (`safety_impact`, select_one, required): Evaluate the impact on worker safety.
* **Quality Impact** (`quality_impact`, select_one, required): Evaluate the impact on product quality.
* **Proposed Implementation Date** (`implementation_timeline`, date, required): Select the proposed implementation date.
* **Current Approval Status** (`approval_status`, select_one, required): Enter the current approval status of the rebalance.
* **Additional Comments** (`additional_comments`, text, not required): Enter any additional comments or information.
* **Requester Signature** (`requester_signature`, text, required): Sign the form with your name.
