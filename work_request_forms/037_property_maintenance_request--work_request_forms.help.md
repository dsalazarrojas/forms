<thinking>
This form is used by property owners, managers, and other stakeholders to submit and manage property maintenance requests. To ensure the form is completed correctly, please check that all required fields are filled in before submitting. It's also a good idea to review the form before submitting to ensure that the information entered is accurate and complete.
</thinking>

# Property Maintenance Request - Help Guide
## Purpose
The Property Maintenance Request form is used to submit and manage property maintenance requests. It's essential to fill in all required fields accurately to ensure that the request is processed correctly.

## How To Complete This Form
1. Fill in the required fields with the necessary information.
2. Review the form for accuracy before submitting.

## Field-by-Field Explanation
- **Maintenance Request** (`maintenance_request`, text, required): Enter a brief description of the maintenance request.
- **Property ID** (`property_id`, number, required): Enter the ID of the property that needs maintenance.
- **Property Owner** (`property_owner`, text, required): Enter the name of the property owner.
- **Maintenance Type** (`maintenance_type`, select_one, required): Select 'Yes' if the request is for maintenance, 'No' otherwise.
- **Maintenance Description** (`maintenance_description`, text, required): Enter a detailed description of the maintenance request.
- **Maintenance Priority** (`maintenance_priority`, select_one, required): Select the priority level of the maintenance request.
- **Maintenance Request Date** (`maintenance_request_date`, date, required): Enter the date when the maintenance request was made.
- **Maintenance Request Time** (`maintenance_request_time`, time, required): Enter the time when the maintenance request was made.
- **Maintenance Requester** (`maintenance_requester`, select_one, not required): Select 'Yes' if the request is from a maintenance requester, 'No' otherwise.
- **Maintenance Requester Email** (`maintenance_requester_email`, email, required): Enter the email address of the maintenance requester.
- **Maintenance Requester Phone** (`maintenance_requester_phone`, text, required): Enter the phone number of the maintenance requester.
- **Comments** (`comments`, text, not required): Enter any additional comments or remarks about the request.
- **Property Manager** (`property_manager`, select_one, required): Select 'Yes' if the request is assigned to a property manager, 'No' otherwise.
- **Assigned Tool** (`assigned_tool`, select_one, required): Select 'Yes' if the request is assigned to a tool, 'No' otherwise.
- **Assigned User** (`assigned_user`, select_one, required): Select 'Yes' if the request is assigned to a user, 'No' otherwise.
- **Status** (`status`, select_one, required): Select the status of the request (Active or Inactive).
- **Due Date** (`due_date`, date, required): Enter the date when the maintenance is due.
- **Due Time** (`due_time`, time, required): Enter the time when the maintenance is due.
- **Completed Date** (`completed_date`, date, not required): Enter the date when the maintenance is completed.
- **Completed Time** (`completed_time`, time, not required): Enter the time when the maintenance is completed.
- **Completed Status** (`completed_status`, select_one, not required): Select the status of the completed request (Active or Inactive).
- **Completed Comments** (`comments_completed`, text, not required): Enter any comments about the completed maintenance.
- **Completed By** (`completed_by`, select_one, not required): Select 'Yes' if the request was completed by a user, 'No' otherwise.
- **Property Status** (`property_status`, select_one, required): Select the status of the property (Active or Inactive).
