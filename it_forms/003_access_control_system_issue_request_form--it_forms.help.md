To help me create the help guide for the Access Control System Issue Request Form, I will first review the provided YAML fields and provide a brief internal reasoning block to clarify the form's purpose and potential issues with duplication and relevance.

**Internal Reasoning Block**

This form is designed to collect information from employees or users about access control system issues that require attention. The primary purpose of this form is to gather data about the problem, its location, severity, and potential impact on operations. This information will help the maintenance team prioritize and resolve issues efficiently. To prevent duplication, the form will likely be restricted to users with proper permissions and access control system expertise.

---

# Access Control System Issue Request Form - Help Guide
## Purpose
The Access Control System Issue Request Form is designed to report issues with access control systems, allowing the maintenance team to identify and prioritize problems for resolution. Please use this form to report any problems you are experiencing with access control systems, such as badge problems, door access issues, or system errors.
## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your name and employee ID to identify yourself as the reporter.
2.  Select your department to help the maintenance team understand where the issue is located.
3.  Provide your email address and phone number for updates and potential follow-up questions.
4.  Describe the issue, including its type and location.
5.  Estimate the time and date when the issue started.
6.  Specify any attempted solutions or additional information that might help the maintenance team resolve the issue.
7.  Select a priority level for the issue.
8.  Provide any additional notes that might help the maintenance team address the problem.

## Field-by-Field Explanation
* **Reporter Name** (`reporter_name`, text, required): Your full name, used to identify you as the reporter.
* **Employee ID** (`employee_id`, text, required): Your employee identification number, used to track your identity.
* **Department** (`department`, select_one, required): Select your department to help the maintenance team understand where the issue is located.
* **Contact Email** (`contact_email`, email, required): Enter your email address for updates and follow-up questions.
* **Contact Phone** (`contact_phone`, text, optional): Enter your phone number for urgent issues.
* **Issue Type** (`issue_type`, select_one, required): Choose the type of issue you are experiencing (e.g., badge problem, door access issue, system error).
* **Affected Location** (`affected_location`, text, required): Describe the location where the issue occurs (e.g., building, floor, room).
* **Access Point ID** (`access_point_id`, text, optional): If known, enter the ID of the access control device affected.
* **Issue Description** (`issue_description`, text, required): Describe the problem in detail.
* **Severity Level** (`severity_level`, select_one, required): Select the severity level of the issue (e.g., critical, high, medium, low).
* **Impact on Operations** (`impact_on_operations`, select_one, required): Specify how the issue is affecting business operations (e.g., severe, significant, minor, no impact).
* **Date Issue Started** (`date_occurred`, date, required): Enter the date when the issue first occurred.
* **Time Issue Started** (`time_occurred`, time, required): Enter the approximate time when the issue started.
* **Solutions Already Attempted** (`attempted_solutions`, text, optional): Describe any solutions you have tried to resolve the issue.
* **Priority Assignment Request** (`priority_assignment`, select_one, optional): Suggest a priority level for the issue (e.g., immediate response, within 2 hours, within 24 hours, next maintenance window).
* **Additional Notes** (`additional_notes`, text, optional): Provide any additional information that might help the maintenance team resolve the issue.
