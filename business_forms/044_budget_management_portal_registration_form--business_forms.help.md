<thinking> 
This form is for registration on the Budget Management Portal. It is intended to gather information about the user who is requesting access to the portal. The user must provide details such as their full name, email, phone number, and employee ID to be able to access the portal. The form also requires information about their department, job title, and direct supervisor's name to ensure proper reporting and management access. Users must specify their portal access level requested, what budgets they will manage, and what data access is needed. Additionally, users must agree to the data security agreement, enable multi-factor authentication, and acknowledge that they have completed portal training. This form should only be filled out once, and users should not submit duplicate registrations. 

</thinking>

# Budget Management Portal Registration Form - Help Guide

## Purpose
This form is designed to provide users with a clear and efficient way to register for access to the Budget Management Portal. By completing this form, users will be able to access the necessary data and tools to perform their job responsibilities.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your Full Name, email address, phone number, and Employee ID to identify yourself as a valid user.
2. Select your Department and Job Title to ensure proper reporting and management access.
3. Provide your direct supervisor's name to establish a reporting chain.
4. Select your requested Portal Access Level, which will determine what features and data you have access to.
5. Specify what budgets you will be managing to ensure proper access and permissions.
6. Select the data access you need to perform your job responsibilities.
7. Enter your maximum single approval amount, if applicable.
8. Confirm that your manager has approved your access.
9. Enter your manager's name for verification.
10. Indicate if you have completed portal training.
11. Acknowledge that you have read and understood the data security agreement.
12. Confirm that you have enabled multi-factor authentication.
13. Select the date you registered for record keeping purposes.

## Field-by-Field Explanation

* **Full Name** (`user_full_name`, text, required): Enter your full name as it appears on official documentation.
* **Email Address** (`user_email`, email, required): Enter your work email address for communication purposes.
* **Phone Number** (`user_phone`, text, required): Enter your work phone number for communication purposes.
* **Employee ID** (`employee_id`, text, required): Enter your Employee ID, as assigned by your organization.
* **Department** (`department`, text, required): Select your department to ensure proper reporting and management access.
* **Job Title** (`job_title`, text, required): Enter your job title to establish your role within the organization.
* **Reporting Manager** (`reporting_manager`, text, required): Enter your direct supervisor's name to establish a reporting chain.
* **Portal Access Level Requested** (`portal_access_level`, select_one, required): Select the level of access you need to the portal. Options are:
	+ Viewer - Read Only
	+ Analyst - View and Report
	+ Manager - Create and Approve
	+ Administrator - Full Access
* **Budget Responsibilities** (`budget_responsibilities`, text, required): Specify what budgets you will be managing to ensure proper access and permissions.
* **Data Access Needed** (`data_access_needed`, select_multiple, required): Select the data access you need to perform your job responsibilities. Options are:
	+ Budget Planning
	+ Expense Tracking
	+ Reports and Analytics
	+ Approvals
	+ Forecasting
	+ Variance Analysis
* **Budget Authority Limit** (`budget_authority_limit`, number, optional): Enter your maximum single approval amount, if applicable.
* **Manager Approval** (`manager_approval`, select_one, required): Confirm that your manager has approved your access. Options are:
	+ Yes, approved
	+ Pending approval
	+ Not yet requested
* **Manager Name** (`manager_name`, text, required): Enter your manager's name for verification purposes.
* **Portal Training Completed** (`training_completed`, select_one, required): Indicate if you have completed portal training. Options are:
	+ Yes, completed
	+ Scheduled
	+ Not yet scheduled
* **Data Security Agreement** (`security_agreement`, select_one, required): Acknowledge that you have read and understood the data security agreement. Options are:
	+ Yes, acknowledged
	+ False
* **Multi-Factor Authentication** (`multi_factor_auth`, select_one, required): Confirm that you have enabled multi-factor authentication. Options are:
	+ Yes, enabled
	+ Will enable during onboarding
	+ Not applicable
* **Registration Date** (`registration_date`, date, required): Select the date you registered for record keeping purposes.
