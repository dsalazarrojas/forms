# Quality Metric Adjustment Request Form - Help Guide
## Purpose
The Quality Metric Adjustment Request Form is used to request adjustments to quality metrics within a team or department. This form should only be used to submit changes to metrics that affect your own department or team and have occurred since the last adjustment.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the assigned team member from the "Assigned To" field. This should be the team member responsible for reviewing and acting on your request.
2. Choose the status of your request from the "Status" field. Options include pending, approved, declined, and closed.
3. Select the submitter from the "Submitter" field. This should be the person submitting the request.
4. Choose the department affected by the change from the "Department" field. Options include Marketing, Sales, and Support.
5. Select the team affected by the change from the "Team" field. Options include Sales, Marketing, and Support.
6. Enter the date of the metric change in the "Date of Change" field.
7. Enter the new metric value in the "New Metric Value" field.
8. Choose the type of change made to the metric from the "Change Type" field. Options include increase, decrease, and no change.
9. Enter any comments or notes about the change in the "Comments" field.
10. Select the approver from the "Review By" field. This should be the person responsible for reviewing and acting on your request.
11. Enter the approval status of the request from the "Approval Status" field. Options include approved, declined, and pending.
12. Enter the approver's name in the "Approver Name" field.
13. Enter the old metric value in the "Old Metric Value" field.
14. Enter the new metric value in the "New Metric Value" field.
15. Finally, click the "Submit" button to complete and submit your request.

## Field-by-Field Explanation

* **User Info** (`user_info`, text, required: false): A field for entering additional user information if needed.
* **Request Info** (`request_info`, text, required: false): A field for entering any relevant information about the request.
* **Metric Change** (`metric_change`, number, required: false): Enter the amount of change to the metric value.
* **New Metric Value** (`new_metric_value`, number, required: false): Enter the new metric value.
* **Reason** (`reason`, text, required: false): Enter a reason for the metric adjustment.
* **Date of Change** (`date_of_change`, date, required: false): Enter the date the metric change occurred.
* **Comments** (`comments`, text, required: false): Enter any additional comments or notes about the change.
* **Submit Date** (`submit_date`, date, required: false): Enter the date you submitted the request.
* **Assigned To** (`assigned_to`, select_one, required: true): Select the team member responsible for reviewing and acting on your request.
* **Status** (`status`, select_multiple, required: true): Choose the status of your request from the options pending, approved, declined, and closed.
* **Submitter** (`submitter`, select_one, required: true): Select the person submitting the request.
* **Department** (`department`, select_multiple, required: true): Choose the department affected by the change from the options Marketing, Sales, and Support.
* **Team** (`team`, select_one, required: true): Choose the team affected by the change from the options Sales, Marketing, and Support.
* **Review Date** (`review_date`, date, required: false): Enter the date for the review of the request.
* **Review Comments** (`review_comments`, text, required: false): Enter any comments or notes about the review.
* **Approval Status** (`approval_status`, select_multiple, required: true): Choose the approval status of your request from the options approved, declined, and pending.
* **Review By** (`review_by`, select_one, required: true): Select the person responsible for reviewing your request.
* **Submitter Notes** (`submitter_notes`, text, required: false): Enter any notes or comments from the person submitting the request.
* **Approver Notes** (`approver_notes`, text, required: false): Enter any notes or comments from the approver.
* **Approver Name** (`approver_name`, text, required: false): Enter the name of the person who approved the request.
* **Metric** (`metric`, select_one, required: true): Choose the metric affected by the change from the options Sales, Marketing, and Support.
* **Old Metric Value** (`old_metric_value`, number, required: false): Enter the old metric value.
* **New Metric Value** (`new_metric_value`, number, required: false): Enter the new metric value.
* **Change Type** (`change_type`, select_multiple, required: true): Choose the type of change made to the metric from the options increase, decrease, and no change.
* **Submit** (`submit`, text, required: false): This is the final step to complete and submit your request.
