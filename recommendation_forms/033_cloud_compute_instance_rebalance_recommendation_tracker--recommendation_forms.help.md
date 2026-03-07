<thinking>...</thinking>

# Cloud Compute Instance Rebalance Recommendation Tracker - Help Guide

## Purpose
The Cloud Compute Instance Rebalance Recommendation Tracker is a tool used to track and manage cloud compute instance rebalance recommendations. The form is designed to help users create, review, and implement recommendations for optimizing cloud resources. By providing detailed information about a specific compute instance, users can make informed decisions about when and how to rebalance instances for cost savings and improved performance.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a unique recommendation ID in the `Recommendation ID` field.
2. Select the date the recommendation was created in the `Date Created` field.
3. Enter the name of the person who created the recommendation in the `Created By` field.
4. Provide details about the instance in the `Instance Information` section, including instance ID or name, cloud provider, and current instance type.
5. Enter the current CPU and memory usage percentages for the instance in the `Current CPU Usage Percentage` and `Current Memory Usage Percentage` fields.
6. In the `Recommendation Details` section, select the recommended action and enter any new instance type if applicable.
7. Estimate the expected cost savings per month and select the implementation effort required for the change.
8. In the `Risk Assessment` section, assess the risk level and describe any potential risks and mitigation strategies.
9. Select the status of the recommendation and assign it to a person responsible for implementation.
10. Finally, select the target implementation date and any special instructions or considerations.

## Field-by-Field Explanation

* **Recommendation ID** (`recommendation_id`, text, required): A unique tracking number for this recommendation.
* **Date Created** (`date_created`, date, required): The date when the recommendation was created.
* **Created By** (`created_by`, text, required): The name of the person who created the recommendation.
* **Instance Information** (`section_instance`, note, required): Details about the compute instance, including instance ID or name, cloud provider, and current instance type.
	+ **Instance ID or Name** (`instance_id`, text, required): The unique identifier or name of the instance.
	+ **Cloud Provider** (`cloud_provider`, select_one, required): The cloud provider for the instance (e.g., AWS, Azure, Google Cloud).
	+ **Current Instance Type** (`current_instance_type`, text, required): The current type of the instance (e.g., t3.medium, Standard_D2s_v3).
* **Current CPU Usage Percentage** (`current_cpu_usage`, number, required): The current CPU usage percentage of the instance.
* **Current Memory Usage Percentage** (`current_memory_usage`, number, required): The current memory usage percentage of the instance.
* **Recommendation Details** (`section_recommendation`, note, required): The rebalancing recommendation.
	+ **Recommended Action** (`recommended_action`, select_one, required): The recommended action (e.g., Downsize instance, Upsize instance, Horizontal scaling, etc.).
	+ **Recommended Instance Type** (`recommended_instance_type`, text, optional): A new instance type if applicable.
* **Estimated Cost Savings Per Month** (`cost_savings_estimate`, number, required): The estimated cost savings per month.
* **Implementation Effort** (`implementation_effort`, select_one, required): The effort required for implementation (e.g., Minimal - no downtime, Low - brief downtime, Medium - planned downtime window, etc.).
* **Risk Assessment** (`section_risk`, note, required): A potential risk and its impact.
	+ **Risk Level** (`risk_level`, select_one, required): The risk level (e.g., Low - minimal risk, Medium - some risk, High - significant risk, Critical - major risk).
	+ **Risk Description** (`risk_description`, text, optional): A description of the risk.
	+ **Mitigation Strategy** (`mitigation_strategy`, text, optional): A strategy to minimize the risk.
* **Implementation Decision** (`section_decision`, note, required): The action to take.
* **Recommendation Status** (`recommendation_status`, select_one, required): The status of the recommendation (e.g., Approved for implementation, Pending review, Deferred, Rejected, Under investigation).
* **Assigned To** (`assigned_to`, text, optional): The person responsible for implementation.
* **Target Implementation Date** (`target_implementation_date`, date, optional): The date to implement the change.
* **Implementation Notes** (`implementation_notes`, text, optional): Any special instructions or considerations.
* **Priority Level** (`priority`, select_one, required): The priority level (e.g., Critical - implement immediately, High - implement soon, Medium - implement in next cycle, Low - nice to have).
* **Final Notes or Comments** (`final_notes`, text, optional): Any additional information or comments.

## Tips

* Make sure to fill out all required fields to ensure accurate tracking and implementation.
* Use clear and concise language when entering details about the instance and recommendation.
* Select the correct cloud provider and current instance type to ensure accurate assessment of costs and resources.
* Estimate the expected cost savings and implementation effort accurately to help prioritize and schedule implementation.
* Assess risks and potential issues honestly to ensure safe and informed decision-making.
* Set a realistic target implementation date and assign a responsible person for implementation.
* Review and update the recommendation status regularly to ensure timely implementation.
