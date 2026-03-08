<thinking>
The purpose of this form is to collect information for changes to projects or systems. It is used to create and track change requests, which are essential for managing and implementing updates, enhancements, or fixes to ensure the smooth operation of projects or systems. This form is a crucial tool for project managers, team leads, and stakeholders to collaborate and keep track of proposed changes, their urgency, and the resources required for implementation.
The form is designed to be filled out by requesters who want to propose a change and by approvers who need to evaluate and approve or reject the proposals. The information collected through this form will help identify potential risks, estimate the effort required for implementation, and determine the priority level of the changes.
To avoid duplication, please ensure that you're not submitting a change request for an already existing change. If you're unsure, contact your project manager or team lead.
</thinking>

# Change Request Form - Help Guide
## Purpose
The Change Request Form is a tool for project managers, team leads, and stakeholders to collaborate on and track proposed changes to projects or systems.

## How To Complete This Form
- Fill out the form completely and accurately.
- Select the correct category for the change (e.g., Feature Request, Bug Fix, etc.).
- Provide a clear and detailed description of the change.
- Indicate the priority level of the change (e.g., Critical, High, Medium, Low).
- Specify the resources required for the change (e.g., people, tools, budget).
- Enter the proposed implementation timeline.
- Assess potential risks.
- Update the approval status and the name of the approver as changes progress.

## Field-by-Field Explanation

* **Request Date** (`request_date`, date, required): The date when the change request was submitted.
* **Change Request ID** (`change_request_id`, text, optional): A unique identifier for the change request.
* **Requester Name** (`requester_name`, text, required): The name of the person or team requesting the change.
* **Requester Department** (`requester_department`, text, optional): The department of the person or team requesting the change.
* **Requester Email** (`requester_email`, email, required): The email address of the person or team requesting the change.
* **Requester Phone** (`requester_phone`, text, optional): The contact phone number of the person or team requesting the change.
* **Project or System Name** (`project_name`, text, required): The name of the project or system affected by the change.
* **Project ID** (`project_id`, text, optional): The project or system identifier.
* **Change Request Title** (`change_title`, text, required): A brief title of the change request.
* **Change Category** (`change_category`, select_one, required): The type of change (e.g., Feature Request, Bug Fix, etc.).
* **Change Description** (`change_description`, text, required): A detailed description of the change.
* **Business Benefit or Justification** (`business_benefit`, text, required): The reason or benefit of the change.
* **Affected Systems or Areas** (`affected_systems`, text, required): The systems or areas impacted by the change.
* **Priority Level** (`priority_level`, select_one, required): The level of urgency for the change (e.g., Critical, High, Medium, Low).
* **Estimated Effort** (`estimated_effort`, text, optional): The estimated hours or days required for the change.
* **Resource Requirements** (`resource_requirements`, text, optional): The resources needed for the change (e.g., people, tools, budget).
* **Proposed Implementation Timeline** (`proposed_timeline`, text, optional): The proposed timeline for the change.
* **Risk Assessment** (`risk_assessment`, text, optional): The potential risks associated with the change.
* **Approval Status** (`approval_status`, select_one, required): The current status of the change request (e.g., Pending Review, Approved, etc.).
* **Approver Name** (`approver_name`, text, optional): The name of the person who approved or will approve the change.
* **Additional Notes** (`additional_notes`, text, optional): Any other relevant information about the change request.
