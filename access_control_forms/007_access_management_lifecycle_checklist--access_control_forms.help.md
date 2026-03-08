<thinking>
This form is designed to guide the user through the access management lifecycle process. The form is used to collect and track information about access requests, approvals, and provisioning of employees' access to various systems and resources. The form helps ensure that access is properly managed and audited throughout the entire lifecycle. This form is intended to be used by employees, managers, and administrators to streamline the access management process. It is not intended to be a replacement for any existing system or process, but rather a supplement to enhance efficiency and accuracy.

Before completing this form, please ensure that you have the necessary permissions and authority to access the systems and resources being requested. If you are unsure, please consult with your supervisor or manager.

The following pages and fields are included in the form:

Page 1: Employee Information
Page 2-4: Access Request Details
Page 5: Status Updates

</thinking>

# Access Management Lifecycle Checklist - Help Guide
## Purpose
This form is used to guide the user through the access management lifecycle process for employees' access requests.

## How To Complete This Form
1. Fill in the employee's personal information on Page 1.
2. Enter the access request details, including the type of access requested and the systems/resources being accessed, on Page 2-4.
3. Update the status of the access request, including manager approval, provisioning, and deprovisioning, on Page 5.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter the full name of the employee.
* **Employee ID** (`employee_id`, text, required): Enter a unique identifier for the employee.
* **Department** (`department`, text, required): Enter the employee's department.
* **Position Title** (`position_title`, text, required): Enter the job title of the employee.
* **Manager Name** (`manager_name`, text, required): Enter the name of the employee's direct manager.
* **Request Date** (`request_date`, date, required): Enter the date the access request was submitted.
* **Request Type** (`request_type`, select_one, required): Select the type of access request (New Hire Access, Role Change, Temporary Access, Access Extension, Access Revocation, Access Upgrade, Access Downgrade).
* **Requested Systems** (`requested_systems`, select_multiple, required): Select the systems or resources for which access is requested (Email System, File Server, Database, VPN Access, HR Portal, Financial System, CRM, Project Management Tool, Code Repository, Network Access, Physical Access, Other).
* **Manager Approval Status** (`approval_status`, select_one, required): Select the status of the manager's approval (Approved, Pending, Rejected, Conditional Approval).
* **Approval Date** (`approval_date`, date, optional): Enter the date of the manager's approval.
* **Provisioning Date** (`provisioning_date`, date, optional): Enter the date when access was provisioned.
* **Provisioned By** (`provisioned_by`, text, optional): Enter the name of the person who provisioned the access.
* **Access Tested** (`access_tested`, select_one, optional): Select whether the access has been tested and confirmed working (Yes, No, In Progress).
* **Test Date** (`test_date`, date, optional): Enter the date when the access was tested.
* **Access Expiration Date** (`access_expiration_date`, date, optional): Enter the date when temporary access expires.
* **Reminder Sent** (`reminder_sent`, select_one, optional): Select whether a reminder was sent before expiration (Yes, No, N/A).
* **Deprovisioning Date** (`deprovisioning_date`, date, optional): Enter the date when access was removed.
* **Deprovisioned By** (`deprovisioned_by`, text, optional): Enter the name of the person who removed the access.
* **Audit Completed** (`audit_completed`, select_one, optional): Select whether the access lifecycle has been audited (Yes, No, Scheduled).
* **Additional Notes** (`notes`, text, optional): Enter any additional information about the access lifecycle.

**Tips**

* Ensure that all required fields are filled in before submitting the form.
* Use the "Select Multiple" field for `Requested Systems` to select all applicable systems or resources.
* Be thorough when entering the `Access Tested` status to ensure accurate reporting.
* If any additional information or context is necessary for the access lifecycle, use the `Additional Notes` field.
* Review and update the status regularly to ensure accurate and timely completion of the access lifecycle.
