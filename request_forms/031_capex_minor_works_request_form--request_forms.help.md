# Capex Minor Works Request Form - Help Guide
## Purpose
This form is used for requesting budget allocation for minor works, upgrades, or equipment purchases within an organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure that you have all necessary information and approvals from your direct manager.
2. Fill out the form completely and accurately, including all required fields.
3. Provide a clear and concise description of the project, including scope of work and business justification.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email Address** (`email_address`, email, required): Enter your email address.
* **Phone Number** (`phone_number`, text, required): Enter your contact number.
* **Department** (`department`, text, required): Enter your department.
* **Position Title** (`position_title`, text, required): Enter your job title.
* **Direct Manager Name** (`manager_approval`, text, required): Enter the name of your approving manager.
* **Request Date** (`request_date`, date, required): Enter the date of the request.
* **Type of Request** (`request_type`, select_one, required): Select the type of request (e.g., Minor Works, Venue Upgrade, Equipment Purchase, etc.).
* **Project Title** (`project_title`, text, required): Enter a brief title for the project.
* **Detailed Project Description** (`project_description`, text, required): Explain the project scope.
* **Work Breakdown Structure** (`work_breakdown`, text, required): Describe work items.
* **Venue or Location** (`venue_location`, text, optional): Enter the location where work will occur.
* **Project Duration** (`duration`, text, optional): Enter the estimated time required.
* **Business Case for Request** (`business_case`, text, required): Explain why this is needed.
* **Expected Benefits** (`expected_benefits`, text, required): Describe outcomes and benefits.
* **Consequences if Not Approved** (`impact_if_not_approved`, text, optional): Explain the consequences if not funded.
* **Estimated Total Cost** (`estimated_cost`, number, required): Enter the total project cost.
* **Cost Breakdown** (`cost_breakdown`, text, optional): Detail cost components.
* **Budget Available?** (`budget_available`, select_one, required): Select whether the budget is fully funded, partially funded, or no allocation is requested.
* **Cost Center/Account Code** (`cost_center`, text, optional): Enter for billing purposes.
* **Requested Start Date** (`requested_start_date`, date, required): Enter the date when work should begin.
* **Priority Level** (`priority_level`, select_one, required): Select the priority level (Critical - Immediate, High, Medium, Low).
* **Additional Notes or Comments** (`additional_notes`, text, optional): Enter any additional comments or notes.

Note: This help guide is based on the provided YAML fields and provides a clear explanation of each field, its type, and its purpose.
