# customer_service_weekly_interaction_report - Help Guide
## Purpose
The customer service weekly interaction report is designed to collect data about customer interactions and service quality. This report is used to track performance and identify areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the appropriate answers for the following fields based on your observations or records:
   * `customer_service_represents`: Whether the customer service interactions represent the team's efforts.
   * `service_team`: The teams that interacted with the customers.
2. Enter the relevant information for the following fields:
   * `customer_service_weekly_interactions`: The number of customer interactions.
   * `customer_service_resolution_status`: The current resolution status of the interactions.
   * `customer_service_resolution_outcomes`: The outcomes of the resolution process.
   * `customer_service_average_resolution_time`: The average time it took to resolve the customer issues.
   * `customer_service_service_quality_rating`: A rating of the quality of service provided.

3. Add any additional comments or notes about the customer service interactions in the `customer_service_comments` field, if needed.

4. Provide the email address of the customer service manager in the `customer_service_email` field.

5. Enter the name of the customer service manager responsible for the interactions in the `customer_service_manager_name` field.

## Field-by-Field Explanation

* **represents** (`customer_service_represents`, select_one, required): Indicates whether the customer service interactions represent the team's efforts.
* **service_team** (`customer_service_team`, select_multiple, optional): The teams that interacted with the customers.
* **weekly_interactions** (`customer_service_weekly_interactions`, number, required): The number of customer interactions.
* **resolution_status** (`customer_service_resolution_status`, select_one, required): The current resolution status of the interactions.
* **resolution_outcomes** (`customer_service_resolution_outcomes`, select_multiple, optional): The outcomes of the resolution process.
* **average_resolution_time** (`customer_service_average_resolution_time`, number, required): The average time it took to resolve the customer issues.
* **service_quality_rating** (`customer_service_service_quality_rating`, select_one, required): A rating of the quality of service provided.
* **comments** (`customer_service_comments`, note, optional): Additional comments or notes about the customer service interactions.
* **email** (`customer_service_email`, email, required): Email address of the customer service manager.
* **phone** (`customer_service_phone`, text, optional): Phone number of the customer service manager.
* **notes** (`customer_service_notes`, select_multiple, optional): Additional notes about the customer service interactions.
* **manager_name** (`customer_service_manager_name`, text, required): Name of the customer service manager responsible for the interactions.
* **manager_signature** (`customer_service_manager_signature`, select_multiple, optional): Whether the manager's signature is included in the report.
* **manager_notes** (`customer_service_manager_notes`, select_multiple, optional): Additional notes from the manager about the customer service interactions.
